import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiSend, FiHeart, FiTrash2, FiUser, FiEdit3, FiCheck } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import DefaultAvatar from '../../assets/avatarpadrao'
import { 
  comentarioService, 
  curtidaComentarioService, 
  type Comment,
  type LikeUser 
} from '../../services/socialService'

interface CommentsModalProps {
  isOpen: boolean
  onClose: () => void
  postId: number
  postAuthor: string
}

const CommentsModal: React.FC<CommentsModalProps> = ({
  isOpen,
  onClose,
  postId,
  postAuthor
}) => {
  const { user, isLoggedIn } = useUser()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null)
  const [editingContent, setEditingContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoveredLikes, setHoveredLikes] = useState<{ [key: number]: LikeUser[] }>({})
  const [showLikesModal, setShowLikesModal] = useState<{ commentId: number, users: LikeUser[] } | null>(null)
  
  // Carregar comentários
  useEffect(() => {
    if (isOpen && postId) {
      loadComments()
    }
  }, [isOpen, postId])

  const loadComments = async () => {
    setIsLoading(true)
    try {
      const data = await comentarioService.listarComentarios(postId)
      setComments(data)
    } catch (error) {
      console.error('Erro ao carregar comentários:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !user?.id || isSubmitting) return

    setIsSubmitting(true)
    
    // Debug do usuário na criação do comentário
    console.log('📝 DEBUG - Criando comentário:')
    console.log('  - user completo:', user)
    console.log('  - user.id:', user.id, 'tipo:', typeof user.id)
    console.log('  - user.username:', user.username) 
    console.log('  - Number(user.id):', Number(user.id))
    console.log('  - postId:', postId)
    console.log('  - conteúdo:', newComment.trim())
    
    // Usar o ID real do usuário logado
    const userId = user.id
    if (!userId || typeof userId !== 'number') {
      console.error('❌ ID do usuário inválido:', userId)
      alert('Erro: usuário não está logado corretamente.')
      return
    }
    console.log('  - userId final usado:', userId)
    
    const comentarioData = {
      texto: newComment.trim(),
      id_user: Number(userId),
      id_publicacao: postId
    }
    
    console.log('  - Dados enviados:', comentarioData)
    
    try {
      await comentarioService.criarComentario(comentarioData)
      
      setNewComment('')
      
      // Forçar recarregamento com delay para garantir que o backend processou
      console.log('🔄 Recarregando comentários após criar...')
      setTimeout(async () => {
        await loadComments()
        console.log('✅ Comentários recarregados')
      }, 500) // 500ms de delay
      
      // Também recarrega imediatamente
      await loadComments()
    } catch (error) {
      console.error('Erro ao criar comentário:', error)
      alert('Erro ao enviar comentário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLikeComment = async (commentId: number) => {
    if (!user?.id) return

    try {
      const result = await curtidaComentarioService.toggleCurtidaComentario({
        id_user: Number(user.id),
        id_comentario: commentId
      })

      // Atualizar estado local do comentário
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { 
              ...comment, 
              curtidas_count: result.total,
              curtiu: result.curtiu
            }
          : comment
      ))
    } catch (error) {
      console.error('Erro ao curtir comentário:', error)
    }
  }

  const handleDeleteComment = async (commentId: number) => {
    console.log('🗑️ MODAL: Iniciando deleção do comentário ID:', commentId)
    
    if (!confirm('Tem certeza que deseja excluir este comentário?')) {
      console.log('❌ Usuário cancelou a deleção')
      return
    }

    console.log('✅ Usuário confirmou - chamando serviço...')
    
    try {
      console.log('🚀 Chamando comentarioService.deletarComentario...')
      await comentarioService.deletarComentario(commentId)
      
      console.log('🔄 Removendo comentário da lista local...')
      setComments(prev => prev.filter(comment => comment.id !== commentId))
      
      console.log('✅ MODAL: Comentário deletado com sucesso!')
      alert('Comentário deletado com sucesso!')
      
    } catch (error) {
      console.error('💥 MODAL: Erro ao deletar comentário:', error)
      alert(`Erro ao deletar comentário: ${error}`)
    }
  }

  const handleEditComment = (commentId: number, currentContent: string) => {
    setEditingCommentId(commentId)
    setEditingContent(currentContent)
  }

  const handleSaveEdit = async (commentId: number) => {
    if (!editingContent.trim()) {
      alert('O conteúdo não pode estar vazio')
      return
    }

    // Encontrar o comentário original para passar dados extras
    const originalComment = comments.find(c => c.id === commentId)
    console.log('📝 Comentário original para edição:', originalComment)

    try {
      await comentarioService.editarComentario(commentId, editingContent, originalComment, postId)
      
      // Atualizar o comentário na lista local
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, conteudo: editingContent }
          : comment
      ))
      
      setEditingCommentId(null)
      setEditingContent('')
      console.log('✅ Comentário editado com sucesso')
    } catch (error) {
      console.error('Erro ao editar comentário:', error)
      alert('Erro ao editar comentário.')
    }
  }

  const handleCancelEdit = () => {
    setEditingCommentId(null)
    setEditingContent('')
  }

  // Verificar se o usuário pode editar/deletar o comentário
  const canModifyComment = (comment: Comment) => {
    console.log('🔍 DEBUG canModifyComment:')
    console.log('  - user logado:', user)
    console.log('  - user.id:', user?.id, 'tipo:', typeof user?.id)
    
    // Obter o ID do usuário do comentário de diferentes formas possíveis
    let commentUserId = null
    
    // Primeiro tentar comment.id_user (campo direto)
    if (comment.id_user !== undefined) {
      commentUserId = comment.id_user
      console.log('  - Usando comment.id_user:', commentUserId)
    }
    // Depois tentar comment.user[0].id (array user)
    else if (comment.user && Array.isArray(comment.user) && comment.user[0]?.id) {
      commentUserId = comment.user[0].id
      console.log('  - Usando comment.user[0].id:', commentUserId)
    }
    
    console.log('  - comment.id_user (direto):', comment.id_user, 'tipo:', typeof comment.id_user)
    console.log('  - comment.user[0]?.id:', comment.user?.[0]?.id, 'tipo:', typeof comment.user?.[0]?.id)
    console.log('  - commentUserId final:', commentUserId, 'tipo:', typeof commentUserId)
    console.log('  - user?.id existe:', !!user?.id)
    console.log('  - Number(user.id):', Number(user?.id))
    console.log('  - Number(commentUserId):', Number(commentUserId))
    console.log('  - Comparação:', Number(user?.id) === Number(commentUserId))
    
    const canModify = user?.id && commentUserId && Number(user.id) === Number(commentUserId)
    console.log('  - Resultado final:', canModify)
    
    return canModify
  }

  const handleShowLikesUsers = async (commentId: number) => {
    try {
      const users = await curtidaComentarioService.buscarUsuariosCurtiramComentario(commentId)
      setShowLikesModal({ commentId, users })
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  const handleLikesHover = async (commentId: number, isEntering: boolean) => {
    if (isEntering && !hoveredLikes[commentId]) {
      try {
        const users = await curtidaComentarioService.buscarUsuariosCurtiramComentario(commentId)
        setHoveredLikes(prev => ({ ...prev, [commentId]: users }))
        
        // Auto-show modal após 1.5s
        setTimeout(() => {
          const comment = comments.find(c => c.id === commentId)
          if (comment && (comment.curtidas_count || 0) > 0) {
            setShowLikesModal({ commentId, users })
          }
        }, 1500)
      } catch (error) {
        console.error('Erro ao carregar usuários:', error)
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContainer
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <ModalHeader>
            <HeaderTitle>
              <FiUser size={20} />
              Comentários de {postAuthor}
            </HeaderTitle>
            <CloseButton onClick={onClose}>
              <FiX size={24} />
            </CloseButton>
          </ModalHeader>

          {/* Comments List */}
          <CommentsContainer>
            {isLoading ? (
              <LoadingSpinner>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.div>
                Carregando comentários...
              </LoadingSpinner>
            ) : comments.length === 0 ? (
              <EmptyState>
                <FiUser size={48} />
                <h3>Nenhum comentário ainda</h3>
                <p>Seja o primeiro a comentar!</p>
              </EmptyState>
            ) : (
              <CommentsList>
                {comments.map((comment, index) => (
                  <CommentItem
                    key={comment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CommentAvatar>
                      {/* Mostrar foto do usuário do comentário */}
                      {(() => {
                        // Se o comentário for do usuário logado, usar sua foto do contexto
                        if (user && Number(comment.id_user) === Number(user.id)) {
                          return user.foto ? (
                            <img src={user.foto} alt={user.nome} />
                          ) : (
                            <DefaultAvatar size={40} />
                          )
                        }
                        
                        // Para outros usuários, usar dados do comentário
                        if (comment.user && Array.isArray(comment.user) && comment.user[0]?.foto) {
                          return <img src={comment.user[0].foto} alt={comment.user[0].nome} />
                        } else if (comment.usuario?.foto) {
                          return <img src={comment.usuario.foto} alt={comment.usuario.nome} />
                        } else {
                          return <DefaultAvatar size={40} />
                        }
                      })()}
                    </CommentAvatar>
                    
                    <CommentContent>
                      <CommentHeader>
                        <CommentAuthor>
                          {/* Se o comentário foi feito pelo usuário logado, usar dados do contexto */}
                          {user && Number(comment.id_user) === Number(user.id) 
                            ? user.nome || user.username
                            : comment.user && Array.isArray(comment.user) && comment.user[0]?.nome 
                            ? comment.user[0].nome
                            : comment.user && Array.isArray(comment.user) && comment.user[0]?.usuario
                            ? comment.user[0].usuario 
                            : comment.usuario?.nome 
                            || `Usuário ${comment.id_user}`
                          }
                        </CommentAuthor>
                        
                        <CommentDate>
                          {new Date(comment.data_comentario).toLocaleDateString('pt-BR')}
                        </CommentDate>
                        
                        {/* Botões de Ação - apenas para o próprio usuário */}
                        {canModifyComment(comment) && (
                          <ModifyActions>
                            {editingCommentId === comment.id ? (
                              <>
                                <EditButton onClick={() => handleSaveEdit(comment.id)}>
                                  <FiCheck size={14} />
                                </EditButton>
                                <DeleteButton onClick={handleCancelEdit}>
                                  <FiX size={14} />
                                </DeleteButton>
                              </>
                            ) : (
                              <>
                                <EditButton onClick={() => handleEditComment(comment.id, comment.conteudo)}>
                                  <FiEdit3 size={14} />
                                </EditButton>
                                <DeleteButton onClick={() => handleDeleteComment(comment.id)}>
                                  <FiTrash2 size={14} />
                                </DeleteButton>
                              </>
                            )}
                          </ModifyActions>
                        )}
                      </CommentHeader>
                      
                      {/* Conteúdo do Comentário - modo edição ou texto normal */}
                      {editingCommentId === comment.id ? (
                        <EditTextarea
                          value={editingContent}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditingContent(e.target.value)}
                          placeholder="Edite seu comentário..."
                          maxLength={500}
                          autoFocus
                        />
                      ) : (
                        <CommentText>{comment.conteudo}</CommentText>
                      )}
                      
                      <CommentActions>
                        <LikeButton
                          onClick={() => handleLikeComment(comment.id)}
                          $isLiked={comment.curtiu}
                          disabled={!isLoggedIn}
                        >
                          <FiHeart size={16} />
                        </LikeButton>
                        
                        {(comment.curtidas_count || 0) > 0 && (
                          <LikesCount
                            onMouseEnter={() => handleLikesHover(comment.id, true)}
                            onClick={() => handleShowLikesUsers(comment.id)}
                          >
                            {comment.curtidas_count}
                          </LikesCount>
                        )}
                      </CommentActions>
                    </CommentContent>
                  </CommentItem>
                ))}
              </CommentsList>
            )}
          </CommentsContainer>

          {/* Comment Form */}
          {isLoggedIn && (
            <CommentForm onSubmit={handleSubmitComment}>
              <FormAvatar>
                {user?.foto ? (
                  <img src={user.foto} alt={user.nome} />
                ) : (
                  <DefaultAvatar size={36} />
                )}
              </FormAvatar>
              
              <FormInputContainer>
                <FormInput
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Escreva um comentário..."
                  maxLength={500}
                  disabled={isSubmitting}
                />
                <SendButton 
                  type="submit" 
                  disabled={!newComment.trim() || isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⚡
                    </motion.div>
                  ) : (
                    <FiSend size={18} />
                  )}
                </SendButton>
              </FormInputContainer>
            </CommentForm>
          )}
        </ModalContainer>

        {/* Modal de Usuários que Curtiram */}
        {showLikesModal && (
          <LikesModal
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowLikesModal(null)}
          >
            <LikesModalContent onClick={(e) => e.stopPropagation()}>
              <LikesModalHeader>
                <h3>Curtidas</h3>
                <button onClick={() => setShowLikesModal(null)}>
                  <FiX size={20} />
                </button>
              </LikesModalHeader>
              
              <LikesUsersList>
                {showLikesModal.users.map((user) => (
                  <LikesUserItem key={user.id}>
                    <UserAvatar>
                      {user.foto ? (
                        <img src={user.foto} alt={user.nome} />
                      ) : (
                        <DefaultAvatar size={32} />
                      )}
                    </UserAvatar>
                    <UserInfo>
                      <UserName>{user.nome}</UserName>
                      <UserUsername>@{user.username}</UserUsername>
                    </UserInfo>
                  </LikesUserItem>
                ))}
              </LikesUsersList>
            </LikesModalContent>
          </LikesModal>
        )}
      </Overlay>
    </AnimatePresence>
  )
}

// Styled Components
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const ModalContainer = styled(motion.div)`
  background: linear-gradient(135deg,
    rgba(26, 26, 26, 0.95) 0%,
    rgba(18, 18, 18, 0.95) 50%,
    rgba(22, 22, 22, 0.95) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(227, 6, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`

const ModalHeader = styled.div`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg,
    rgba(227, 6, 19, 0.1) 0%,
    transparent 50%,
    rgba(227, 6, 19, 0.05) 100%
  );
`

const HeaderTitle = styled.h2`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  
  svg {
    color: #E30613;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: rotate(90deg);
  }
`

const CommentsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(227, 6, 19, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(227, 6, 19, 0.5);
  }
`

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  gap: 1rem;
  
  div {
    font-size: 2rem;
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  
  svg {
    margin-bottom: 1rem;
    color: #E30613;
  }
  
  h3 {
    margin: 0 0 0.5rem 0;
    color: white;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`

const CommentsList = styled.div`
  padding: 1rem 0;
`

const CommentItem = styled(motion.div)`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:last-child {
    border-bottom: none;
  }
`

const CommentAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CommentContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CommentAuthor = styled.span`
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`

const CommentDate = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #ff4757;
    background: rgba(255, 71, 87, 0.1);
  }
`

const EditButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #4A90E2;
    background: rgba(74, 144, 226, 0.1);
  }
`

const ModifyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
`

const EditTextarea = styled.textarea`
  width: 100%;
  min-height: 60px;
  max-height: 120px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

const CommentText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
`

const CommentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const LikeButton = styled.button<{ $isLiked?: boolean }>`
  background: none;
  border: none;
  color: ${props => props.$isLiked ? '#E30613' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    color: #E30613;
    background: rgba(227, 6, 19, 0.1);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    fill: ${props => props.$isLiked ? '#E30613' : 'transparent'};
  }
`

const LikesCount = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(227, 6, 19, 0.1);
    color: #E30613;
  }
`

const CommentForm = styled.form`
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(227, 6, 19, 0.02) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
`

const FormAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const FormInputContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
`

const FormInput = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: white;
  font-size: 0.95rem;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  outline: none;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const SendButton = styled.button`
  background: linear-gradient(135deg, #E30613, #B91C1C);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 10px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #B91C1C, #E30613);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

// Modal de Likes
const LikesModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const LikesModalContent = styled.div`
  background: linear-gradient(135deg,
    rgba(26, 26, 26, 0.98) 0%,
    rgba(18, 18, 18, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const LikesModalHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h3 {
    color: white;
    margin: 0;
    font-size: 1.1rem;
  }
  
  button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }
`

const LikesUsersList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
`

const LikesUserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.span`
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
`

const UserUsername = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
`

export default CommentsModal
