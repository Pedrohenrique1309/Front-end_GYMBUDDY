import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiImage, FiSend, FiHash, FiEdit3 } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import DefaultAvatar from '../../assets/default-avatar'
import ImageEditor from '../ImageEditor'

const API_BASE_URL = '/api/v1/gymbuddy'

interface CreatePostPopupProps {
  isOpen: boolean
  onClose: () => void
  onPostCreated?: () => void // Callback para recarregar posts
}

const CreatePostPopup = ({ isOpen, onClose, onPostCreated }: CreatePostPopupProps) => {
  const { user } = useUser()
  const [content, setContent] = useState('')
  const [image, setImage] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [hashtagInput, setHashtagInput] = useState<string>('')
  const [hashtagChips, setHashtagChips] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showImageEditor, setShowImageEditor] = useState(false)

  // Desabilitar scroll quando o popup estiver aberto
  useEffect(() => {
    if (isOpen) {
      // Salvar a posição atual do scroll
      const scrollY = window.scrollY
      
      // Desabilitar scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restaurar scroll ao fechar
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [isOpen])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Verificar tamanho do arquivo (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Imagem muito grande! Máximo 5MB permitido.')
        return
      }
      
      // Verificar tipo de arquivo
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/jfif']
      if (!allowedTypes.includes(file.type)) {
        alert('Tipo de arquivo não suportado! Use JPG, PNG, JFIF ou WebP.')
        return
      }
      
      // Armazenar arquivo original para upload
      setSelectedFile(file)
      
      // Criar preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Função para converter imagem para base64
  const convertImageToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const base64 = reader.result as string
        // Remover o prefixo "data:image/...;base64," para enviar apenas o base64
        const base64WithoutPrefix = base64.split(',')[1]
        resolve(base64WithoutPrefix)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleHashtagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      addHashtagChip()
    }
  }

  const handleHashtagBlur = () => {
    addHashtagChip()
  }

  const addHashtagChip = () => {
    if (hashtagInput.trim()) {
      let hashtag = hashtagInput.trim()
      
      // Adicionar # se não tiver
      if (!hashtag.startsWith('#')) {
        hashtag = `#${hashtag}`
      }
      
      // Verificar se não é duplicata e se é válida
      if (!hashtagChips.includes(hashtag) && hashtag.length > 1) {
        setHashtagChips(prev => [...prev, hashtag])
      }
      
      setHashtagInput('')
    }
  }

  const removeHashtagChip = (tagToRemove: string) => {
    setHashtagChips(prev => prev.filter(tag => tag !== tagToRemove))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!content.trim()) {
      alert('Por favor, adicione um conteúdo ao seu post!')
      return
    }

    if (!user?.id) {
      alert('Usuário não autenticado!')
      return
    }

    // Validar dados obrigatórios
    const userId = parseInt(user.id?.toString() || '0')
    if (!userId || userId === 0) {
      alert('ID do usuário inválido!')
      return
    }

    setIsSubmitting(true)
    setUploadProgress(0)
    
    try {
      console.log('🔄 Iniciando criação do post...')
      
      let imageBase64: string | null = null
      
      // Se há uma imagem selecionada, converter para base64
      if (selectedFile) {
        console.log('📤 Convertendo imagem para base64...')
        setUploadProgress(50)
        
        try {
          imageBase64 = await convertImageToBase64(selectedFile)
          setUploadProgress(100)
          console.log('✅ Imagem convertida para base64')
        } catch (error) {
          console.error('❌ Erro ao converter imagem:', error)
          alert('Erro ao processar a imagem. Tente novamente.')
          return
        }
      }
      
      // Preparar dados do post para a API (formato exato que funciona no Postman)
      const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD
      
      const postPayload = {
        imagem: imageBase64 ? `data:image/jpeg;base64,${imageBase64}` : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500", // URL ou data URL completa
        descricao: `${content.trim()} ${hashtagChips.join(' ')}`.trim(),
        data: currentDate,
        localizacao: "Academia Iron Gym - São Paulo",
        id_user: userId
      }
      
      // Log detalhado para comparar com Postman
      console.log('🔍 Comparando com Postman:')
      console.log('📤 Payload Frontend:', JSON.stringify(postPayload, null, 2))
      console.log('📏 Tamanho do payload:', JSON.stringify(postPayload).length, 'caracteres')
      console.log('🆔 User ID:', typeof userId, userId)
      console.log('📅 Data:', typeof currentDate, currentDate)
      
      console.log('📝 Dados do post:', postPayload)
      
      // Enviar post para a API (simulando exatamente o Postman)
      console.log('🌐 Enviando para:', `${API_BASE_URL}/publicacao`)
      console.log('📋 Headers:', { 'Content-Type': 'application/json' })
      
      const response = await fetch(`${API_BASE_URL}/publicacao`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(postPayload)
      })
      
      console.log('📡 Response status:', response.status, response.statusText)
      console.log('📋 Response headers:', Object.fromEntries(response.headers.entries()))
      
      if (!response.ok) {
        let errorMessage = `Erro ${response.status}`
        try {
          const errorData = await response.json()
          errorMessage = errorData.message || errorData.error || errorMessage
          console.log('❌ Detalhes do erro:', errorData)
        } catch {
          const errorText = await response.text()
          errorMessage = errorText || errorMessage
          console.log('❌ Erro (texto):', errorText)
        }
        throw new Error(errorMessage)
      }
      
      const result = await response.json()
      console.log('✅ Post criado com sucesso:', result)
      
      // Mostrar mensagem de sucesso
      alert('Post publicado com sucesso!')
      
      // Limpar formulário
      setContent('')
      setImage('')
      setSelectedFile(null)
      setHashtagInput('')
      setHashtagChips([])
      setUploadProgress(0)
      
      // Chamar callback para recarregar posts
      if (onPostCreated) {
        onPostCreated()
      }
      
      // Fechar popup
      onClose()
      
    } catch (error) {
      console.error('❌ Erro ao criar post:', error)
      alert(`Erro ao criar post: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    } finally {
      setIsSubmitting(false)
      setUploadProgress(0)
    }
  }

  const handleClose = () => {
    if (isSubmitting) return
    setContent('')
    setImage('')
    setSelectedFile(null)
    setHashtagInput('')
    setHashtagChips([])
    setUploadProgress(0)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <PopupOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleClose}
      >
        <PopupContainer
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <PopupHeader>
            <HeaderTitle>Criar novo post</HeaderTitle>
            <CloseButton onClick={handleClose}>
              <FiX />
            </CloseButton>
          </PopupHeader>

          <UserInfo>
            <UserAvatar>
              {user?.foto ? (
                <img src={user.foto} alt={user.nome} />
              ) : (
                <DefaultAvatar size={40} />
              )}
            </UserAvatar>
            <UserDetails>
              <UserName>{user?.nome || 'Usuário'}</UserName>
              <UserNickname>@{user?.nickname || user?.email?.split('@')[0] || 'usuario'}</UserNickname>
            </UserDetails>
          </UserInfo>

          <PostForm onSubmit={handleSubmit}>
            <ContentSection>
              <ContentInput
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="O que você está fazendo na academia hoje? Compartilhe sua experiência..."
                maxLength={500}
                disabled={isSubmitting}
              />
              <CharacterCount $isNearLimit={content.length > 400}>
                {content.length}/500
              </CharacterCount>
            </ContentSection>

            {image && (
              <ImagePreview>
                <img src={image} alt="Preview do post" />
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <UploadProgress>
                    <ProgressBar progress={uploadProgress} />
                    <ProgressText>{uploadProgress}%</ProgressText>
                  </UploadProgress>
                )}
                <ImageActions>
                  <EditImageButton
                    type="button"
                    onClick={() => setShowImageEditor(true)}
                    disabled={isSubmitting}
                    title="Editar imagem"
                  >
                    <FiEdit3 />
                  </EditImageButton>
                  <RemoveImageButton
                    type="button"
                    onClick={() => {
                      setImage('')
                      setSelectedFile(null)
                      setUploadProgress(0)
                    }}
                    disabled={isSubmitting}
                    title="Remover imagem"
                  >
                    <FiX />
                  </RemoveImageButton>
                </ImageActions>
              </ImagePreview>
            )}

            <HashtagSection>
              {/* Chips de hashtags */}
              {hashtagChips.length > 0 && (
                <HashtagChipsContainer>
                  {hashtagChips.map((tag, index) => (
                    <HashtagChip key={index}>
                      <span>{tag}</span>
                      <RemoveHashtagButton
                        type="button"
                        onClick={() => removeHashtagChip(tag)}
                        disabled={isSubmitting}
                      >
                        <FiX />
                      </RemoveHashtagButton>
                    </HashtagChip>
                  ))}
                </HashtagChipsContainer>
              )}
              
              {/* Input para adicionar hashtags */}
              <HashtagInputContainer>
                <HashtagInput
                  value={hashtagInput}
                  onChange={(e) => setHashtagInput(e.target.value)}
                  onKeyPress={handleHashtagKeyPress}
                  onBlur={handleHashtagBlur}
                  placeholder={hashtagChips.length === 0 ? "#treino #academia #fitness" : "Adicionar hashtag..."}
                  disabled={isSubmitting}
                />
                <HashtagIcon>
                  <FiHash />
                </HashtagIcon>
              </HashtagInputContainer>
            </HashtagSection>

            <ActionButtons>
              <ImageUploadButton type="button" disabled={isSubmitting}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="image-upload"
                  disabled={isSubmitting}
                />
                <label htmlFor="image-upload">
                  <FiImage />
                  Adicionar foto
                </label>
              </ImageUploadButton>

              <SubmitButton
                type="submit"
                disabled={isSubmitting || !content.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    Publicando...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Publicar
                  </>
                )}
              </SubmitButton>
            </ActionButtons>
          </PostForm>
        </PopupContainer>
      </PopupOverlay>
      
      {/* Editor de Imagem */}
      {showImageEditor && image && (
        <ImageEditor
          isOpen={showImageEditor}
          imageUrl={image}
          onClose={() => setShowImageEditor(false)}
          onSave={(editedImageUrl) => {
            setImage(editedImageUrl)
            // Converter base64 para File se necessário
            fetch(editedImageUrl)
              .then(res => res.blob())
              .then(blob => {
                const file = new File([blob], "edited-image.jpg", { type: "image/jpeg" })
                setSelectedFile(file)
              })
            setShowImageEditor(false)
          }}
        />
      )}
    </AnimatePresence>
  )
}

// Styled Components
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
`

const PopupContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  width: 100%;
  max-width: 60rem;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 0 30px rgba(229, 57, 53, 0.05);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(229, 57, 53, 0.5),
      transparent
    );
  }
`

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const HeaderTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
  margin: 0;
  background: linear-gradient(135deg, #E53935, #FF5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(229, 57, 53, 0.3);
    transform: scale(1.05);
    
    svg {
      color: var(--white);
    }
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`

const UserAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(229, 57, 53, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const UserName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white);
`

const UserNickname = styled.span`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
`

const PostForm = styled.form`
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const ContentSection = styled.div`
  position: relative;
`

const ContentInput = styled.textarea`
  width: 100%;
  min-height: 12rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--white);
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(229, 57, 53, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const CharacterCount = styled.div<{ $isNearLimit: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 1.2rem;
  color: ${props => props.$isNearLimit ? '#FF5722' : 'rgba(255, 255, 255, 0.5)'};
  font-weight: 500;
`

const ImagePreview = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    display: block;
  }
`

const ImageActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.8rem;
`

const EditImageButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
    color: white;
  }
  
  &:hover {
    background: rgba(29, 78, 216, 0.8);
    border-color: rgba(29, 78, 216, 0.5);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const RemoveImageButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
    color: white;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.8);
    border-color: rgba(229, 57, 53, 0.5);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const HashtagSection = styled.div`
  position: relative;
`

const HashtagInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.5rem 1.8rem 1.5rem 5rem;
  font-size: 1.4rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

const HashtagIcon = styled.div`
  position: absolute;
  left: 1.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(229, 57, 53, 0.7);
  font-size: 1.8rem;
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;
`

const ImageUploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.2rem 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.3);
    color: var(--white);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    label {
      cursor: not-allowed;
    }
  }
`

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #E53935, #FF5722);
  border: none;
  border-radius: 1.2rem;
  padding: 1.4rem 3rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:not(:disabled):hover {
    box-shadow: 0 12px 35px rgba(229, 57, 53, 0.4);
  }
`

const Spinner = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const HashtagChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
`

const HashtagChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #E53935;
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  
  span {
    color: #E53935;
  }
`

const RemoveHashtagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(229, 57, 53, 0.2);
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    font-size: 1.2rem;
    color: #E53935;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.4);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

const HashtagInputContainer = styled.div`
  position: relative;
`

const UploadProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 1.5rem 1.5rem;
`

const ProgressBar = styled.div<{ progress: number }>`
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-right: 1rem;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #E53935, #FF5722);
    border-radius: 3px;
    transition: width 0.3s ease;
  }
`

const ProgressText = styled.span`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
`

export default CreatePostPopup
