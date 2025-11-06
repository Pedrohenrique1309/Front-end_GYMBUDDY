import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiEdit3, FiCamera, FiPlus, FiX, FiCheck,
  FiUser, FiMail, FiMapPin, FiCalendar, FiTarget,
  FiActivity, FiAtSign, FiFileText, FiTrendingUp,
  FiChevronDown, FiChevronUp, FiGrid, FiHeart, FiMessageCircle
} from 'react-icons/fi'
import { useUser } from '../../Contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { ConfirmDeletePopup } from '../../Componentes/DeletarPubPopUp'
import { EditPostPopup } from '../../Componentes/EditarPostPopUp'
import DefaultAvatar from '../../Recursos/avatarpadrao'
import WeightHeightPopup from '../../Componentes/IMCPopUp'
import { useUserActions } from '../../Hooks/useUserActions'
import { uploadImageToAzure } from './uploadImageToAzure'
import LiquidDatePicker from '../../Componentes/LiquidDatePicker'
import { cleanCorruptedUserData, isValidUserId } from '../../Utils/validarDadosUser'

//azure
const uploadParams = () => {
  const fileInput = document.getElementById('avatar-upload') as HTMLInputElement;
  const file = fileInput?.files?.[0];
  
  return {
    file,
    storageAccount: 'gymbuddystorage',
    sasToken: 'sp=acwl&st=2025-11-06T11:47:26Z&se=2025-11-06T21:02:26Z&sv=2024-11-04&sr=c&sig=J5vSWiU%2B3nMAcN5NecxDaHUKJ5RwdAKiDI9WDgXBPR4%3D',
    containerName: 'fotos',
  };
};


const Profile = () => {
  const { user, isLoggedIn, isLoading, updateUser } = useUser()
  const navigate = useNavigate()
  const { updateUser: updateUserAPI } = useUserActions()
  const [isEditing, setIsEditing] = useState(false)
  const [showWeightHeightPopup, setShowWeightHeightPopup] = useState(false)
  const [editedData, setEditedData] = useState({
    nome: user?.nome || '',
    email: user?.email || '',
    nickname: user?.nickname || '',
    descricao: user?.descricao || '',
    localizacao: user?.localizacao || '',
    data_nascimento: user?.data_nascimento || '',
    peso: user?.peso || '',
    altura: user?.altura || '',
    imc: user?.imc || '',
    foto: user?.foto || '',
  })
  const [pendingAvatarFile, setPendingAvatarFile] = useState<File | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)


  const [userPosts, setUserPosts] = useState<any[]>([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)


  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);
  const [isDeletingPost, setIsDeletingPost] = useState(false);
  

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [postToEdit, setPostToEdit] = useState<any>(null);
  const [isUpdatingPost, setIsUpdatingPost] = useState(false);

  useEffect(() => {

    if (isLoading) {
      console.log('UserContext ainda carregando...');
      return;
    }
    

    if (!isLoading && !isLoggedIn) {
      navigate('/')
      return
    }
    
    if (user && user.id && !isValidUserId(user.id)) {
      cleanCorruptedUserData();
    }
  }, [isLoading, isLoggedIn, navigate, user])

  useEffect(() => {
    if (isLoggedIn && user) {
      const hasVisitedProfile = localStorage.getItem(`profile_visited_${user.id || user.email}`)
      const hasMissingData = !user.peso || !user.altura

      if (!hasVisitedProfile && hasMissingData) {
//delay
        setTimeout(() => {
          setShowWeightHeightPopup(true)
        }, 1000)
      }
    }
  }, [isLoggedIn, user])

  useEffect(() => {
    if (user) {
      const newEditedData = {
        nome: user.nome || '',
        email: user.email || '',
        nickname: user.nickname || '',
        descricao: user.descricao || '',
        localizacao: user.localizacao || '',
        data_nascimento: user.data_nascimento || '',
        peso: user.peso || '',
        altura: user.altura || '',
        imc: user.imc || '',
        foto: user.foto || ''
      }
      
      setEditedData(newEditedData);
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = async () => {
    try {
      let finalFotoUrl = editedData.foto;
      
      // A foto já foi enviada para Azure no handleAvatarUpload
      // finalFotoUrl já contém a URL da Azure ou dados do usuário
      
      // Atualizar no backend se tiver ID do usuário valido
      if (user?.id && typeof user.id === 'number' && user.id > 0) {
        
        const payload: any = {
          nome: editedData.nome,
          email: editedData.email,
          nickname: editedData.nickname,
          senha: user.senha || 'Senha123@', 
          descricao: editedData.descricao || '',
          localizacao: editedData.localizacao || '',
          data_nascimento: editedData.data_nascimento || '1990-01-01',
          foto: finalFotoUrl || ''
        }
        

        if (editedData.peso && editedData.peso !== '' && editedData.peso !== '--') {
          payload.peso = Number(editedData.peso)
        }
        if (editedData.altura && editedData.altura !== '' && editedData.altura !== '--') {
          payload.altura = Number(editedData.altura)
        }

        if (payload.peso && payload.altura) {
          payload.imc = Number((payload.peso / (payload.altura * payload.altura)).toFixed(2))
        }
        
        await updateUserAPI(user.id, payload)
      }

      const updatedUserData = {
        ...user,
        ...editedData,
        foto: finalFotoUrl 
      }
      
      // Calcular e adicionar IMC se peso e altura estiverem disponíveis
      if (editedData.peso && editedData.altura && editedData.peso !== '--' && editedData.altura !== '--') {
        const peso = Number(editedData.peso)
        const altura = Number(editedData.altura)
        const imc = peso / (altura * altura)
        updatedUserData.imc = imc.toFixed(2)
      }
      
      updateUser(updatedUserData)
      
      setIsEditing(false)
    } catch (error) {
      alert('Erro ao salvar alterações. Tente novamente.')
    }
  }

  const handleWeightHeightSubmit = async (data: { peso: number | null; altura: number | null }) => {
    try {
      // Atualizar no backend se tiver ID do usuário válido
      if (user?.id && typeof user.id === 'number' && user.id > 0) {
        const updateData: any = {};
        
        // Adicionar apenas se tiver valores válidos
        if (data.peso !== null && data.peso !== undefined) {
          updateData.peso = data.peso;
        }
        if (data.altura !== null && data.altura !== undefined) {
          updateData.altura = data.altura;
        }
        
        // Calcular IMC se ambos peso e altura estiverem disponíveis
        if (data.peso && data.altura) {
          updateData.imc = Number((data.peso / (data.altura * data.altura)).toFixed(2));
          console.log(`📊 IMC calculado no popup: ${updateData.imc}`);
        }
        
        // Só fazer update se tiver dados para atualizar E ID válido
        if (Object.keys(updateData).length > 0 && user?.id && typeof user.id === 'number' && user.id > 0) {
          await updateUserAPI(user.id, updateData);
        } else if (Object.keys(updateData).length > 0) {
          console.warn('⚠️ ID do usuário inválido, pulando atualização no backend:', user?.id);
        }
      }
      
      // Atualizar contexto local
      if (user && user.nome && user.email) {
        const updatedData = {
          ...user,
          nome: user.nome,
          email: user.email,
          peso: data.peso?.toString() || '--',
          altura: data.altura?.toString() || '--',
        };
        
        // Calcular e adicionar IMC no contexto local
        if (data.peso && data.altura) {
          const imc = data.peso / (data.altura * data.altura);
          updatedData.imc = imc.toFixed(2);
          console.log(`📊 IMC atualizado no contexto do popup: ${updatedData.imc}`);
        }
        
        updateUser(updatedData);
      }
      
      // Marcar que visitou o perfil
      localStorage.setItem(`profile_visited_${user?.id || user?.email}`, 'true');
      setShowWeightHeightPopup(false);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar dados. Tente novamente.');
    }
  };

  const handleWeightHeightSkip = () => {
    // Setar como "--" quando pular
    if (user && user.nome && user.email) {
      updateUser({
        ...user,
        nome: user.nome,
        email: user.email,
        peso: '--',
        altura: '--',
      });
    }
    
    // Marcar que visitou o perfil
    localStorage.setItem(`profile_visited_${user?.id || user?.email}`, 'true');
    setShowWeightHeightPopup(false);
  };

  const handleCancel = () => {
    setEditedData({
      nome: user?.nome || '',
      email: user?.email || '',
      nickname: user?.nickname || '',
      descricao: user?.descricao || '',
      localizacao: user?.localizacao || '',
      data_nascimento: user?.data_nascimento || '',
      peso: user?.peso || '',
      altura: user?.altura || '',
      imc: user?.imc || '',
      foto: user?.foto || ''
    })
    // Limpar arquivo pendente ao cancelar
    setPendingAvatarFile(null)
    setIsEditing(false)
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && user) {
      // Verificar tamanho do arquivo (máximo 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Imagem muito grande! Máximo 2MB permitido.')
        return
      }
      
      console.log('📸 Foto selecionada para upload:', {
        fileName: file.name,
        fileSize: file.size
      })
      
      try {
        // Mostrar preview local enquanto faz upload
        const reader = new FileReader()
        reader.onloadend = () => {
          const previewUrl = reader.result as string
          setEditedData(prev => ({ ...prev, foto: previewUrl }))
        }
        reader.readAsDataURL(file)
        
        // Fazer upload para Azure Storage
        console.log('☁️ Iniciando upload para Azure...')
        const uploadParamsObj = uploadParams()
        
        // Criar novo FormData com o arquivo selecionado
        const uploadData = {
          ...uploadParamsObj,
          file // Usar o arquivo selecionado
        }
        
        const azureImageUrl = await uploadImageToAzure(uploadData)
        
        if (azureImageUrl) {
          console.log('✅ Upload concluído! URL da Azure:', azureImageUrl)
          
          // Atualizar com a URL real da Azure
          setEditedData(prev => {
            const newData = { ...prev, foto: azureImageUrl }
            console.log('📸 Foto atualizada com URL da Azure:', azureImageUrl)
            return newData
          })
          
          // Limpar arquivo pendente já que foi enviado
          setPendingAvatarFile(null)
        } else {
          console.log('❌ Falha no upload para Azure')
          alert('Erro ao fazer upload da imagem. Tente novamente.')
        }
      } catch (error) {
        console.error('❌ Erro no upload da foto:', error)
        alert('Erro ao fazer upload da imagem. Tente novamente.')
      }
    }
  }

  // Função para carregar os posts do usuário
  const loadUserPosts = async () => {
    if (!user?.id) return
    
    setIsLoadingPosts(true)
    try {
      console.log('📲 Carregando posts do usuário ID:', user.id, typeof user.id)
      
      // Tentar primeiro o endpoint de publicações direto
      let response = await fetch('/api/v1/gymbuddy/publicacao')
      
      if (response.ok) {
        const data = await response.json()
        console.log('📊 Resposta do endpoint /publicacao:', data)
        
        let allPosts: any[] = []
        
        // Extrair posts de diferentes estruturas
        if (data?.publicacao && Array.isArray(data.publicacao)) {
          allPosts = data.publicacao
        } else if (Array.isArray(data)) {
          allPosts = data
        }
        
        if (allPosts.length > 0) {
          // Filtrar posts do usuário atual (converter IDs para números para garantir comparação correta)
          const userId = Number(user.id)
          const userFilteredPosts = allPosts.filter((pub: any) => {
            const postUserId = Number(pub.id_user)
            const match = postUserId === userId
            console.log(`Post ${pub.id}: user ${postUserId} === ${userId}? ${match}`)
            return match
          })
          
          console.log(`🔍 Posts do usuário ${userId}:`, userFilteredPosts.length, 'de', allPosts.length, 'posts totais')
          
          const mappedPosts = userFilteredPosts.map((pub: any) => {
            const hashtagMatches = pub.descricao?.match(/#\w+/g) || []
            const uniqueHashtags = [...new Set(hashtagMatches)]
            
            return {
              id: pub.id,
              image: pub.imagem || '',
              description: pub.descricao || '',
              hashtags: uniqueHashtags,
              likes: pub.curtidas || 0,
              comments: pub.comentarios || 0,
              location: pub.localizacao || '',
              date: pub.data_publicacao || pub.data || ''
            }
          })
          
          setUserPosts(mappedPosts)
          console.log('✅ Posts do usuário carregados:', mappedPosts.length)
          return
        }
      }
      
      // Se falhar, tentar o endpoint view/feed
      console.log('🔄 Tentando endpoint alternativo /view/feed')
      response = await fetch('/api/v1/gymbuddy/view/feed')
      
      if (response.ok) {
        const data = await response.json()
        console.log('📊 Resposta do /view/feed:', data)
        
        if (data?.view && Array.isArray(data.view)) {
          // Filtrar posts do usuário atual (converter IDs para números)
          const userId = Number(user.id)
          const userFilteredPosts = data.view.filter((pub: any) => {
            const postUserId = Number(pub.id_user)
            const match = postUserId === userId
            console.log(`Post ${pub.id_publicacao}: user ${postUserId} === ${userId}? ${match}`)
            return match
          })
          
          console.log(`🔍 Posts do usuário ${userId}:`, userFilteredPosts.length, 'posts')
          
          const mappedPosts = userFilteredPosts.map((pub: any) => {
            const hashtagMatches = pub.descricao?.match(/#\w+/g) || []
            const uniqueHashtags = [...new Set(hashtagMatches)]
            
            return {
              id: pub.id_publicacao,
              image: pub.imagem || '',
              description: pub.descricao || '',
              hashtags: uniqueHashtags,
              likes: pub.curtidas_count || 0,
              comments: pub.comentarios_count || 0,
              location: pub.localizacao || '',
              date: pub.data_publicacao || ''
            }
          })
          
          setUserPosts(mappedPosts)
          console.log('✅ Posts do usuário carregados do feed:', mappedPosts.length)
        } else {
          console.log('⚠️ Nenhum post encontrado na resposta')
          setUserPosts([])
        }
      } else {
        console.error('❌ Erro na resposta da API:', response.status)
        setUserPosts([])
      }
    } catch (error) {
      console.error('❌ Erro ao carregar posts do usuário:', error)
      setUserPosts([])
    } finally {
      setIsLoadingPosts(false)
    }
  }

  // useEffect para carregar os posts quando o usuário estiver disponível
  useEffect(() => {
    if (user?.id) {
      loadUserPosts()
    }
  }, [user?.id])

  // Função para editar publicação
  const handleEditPost = (postId: number) => {
    const post = userPosts.find(p => p.id === postId);
    if (post) {
      console.log('✏️ Editando post:', post);
      setPostToEdit({
        id: post.id,
        image: post.image,
        description: post.description,
        location: post.location || '',
        hashtags: post.hashtags || [],
        likes: post.likes,
        comments: post.comments
      });
      setShowEditPopup(true);
    }
  };

  // Função para abrir popup de confirmação de exclusão
  const handleDeletePost = (postId: number) => {
    setPostToDelete(postId);
    setShowDeleteConfirm(true);
  };

  // Função para confirmar exclusão
  const confirmDeletePost = async () => {
    if (!postToDelete) return;
    
    setIsDeletingPost(true);
    
    try {
      console.log('🗑️ Excluindo post ID:', postToDelete);
      const response = await fetch(`/api/v1/gymbuddy/publicacao/${postToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('✅ Post deletado com sucesso');
        // Recarrega a lista de posts após exclusão
        await loadUserPosts();
        setShowDeleteConfirm(false);
        setPostToDelete(null);
      } else {
        console.error('❌ Erro ao deletar post:', response.status);
        alert('Erro ao excluir a publicação. Tente novamente.');
      }
    } catch (error) {
      console.error('💥 Erro na requisição de exclusão:', error);
      alert('Erro ao excluir a publicação. Verifique sua conexão.');
    } finally {
      setIsDeletingPost(false);
    }
  };

  // Função para cancelar exclusão
  const cancelDeletePost = () => {
    setShowDeleteConfirm(false);
    setPostToDelete(null);
  };
  
  // Função para salvar edição do post
  const handleSaveEditPost = async (updatedPost: any) => {
    setIsUpdatingPost(true);
    
    try {
      console.log('📝 Tentando atualizar post:', updatedPost);
      
      // Primeiro, vamos tentar o método PUT
      let response = await fetch(`/api/v1/gymbuddy/publicacao/${updatedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          descricao: updatedPost.descricao,
          localizacao: updatedPost.localizacao,
          imagem: updatedPost.imagem
        })
      });
      
      // Se PUT retornar 404 ou 405 (método não permitido), vamos tentar PATCH
      if (response.status === 404 || response.status === 405 || response.status === 400) {
        console.log('⚠️ PUT não suportado, tentando PATCH...');
        response = await fetch(`/api/v1/gymbuddy/publicacao/${updatedPost.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            descricao: updatedPost.descricao,
            localizacao: updatedPost.localizacao,
            imagem: updatedPost.imagem
          })
        });
      }
      
      // Se ainda não funcionar, vamos tentar POST com endpoint de atualização
      if (!response.ok && response.status !== 200) {
        console.log('⚠️ Tentando endpoint de atualização alternativo...');
        response = await fetch(`/api/v1/gymbuddy/publicacao/update/${updatedPost.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            descricao: updatedPost.descricao,
            localizacao: updatedPost.localizacao,
            imagem: updatedPost.imagem
          })
        });
      }
      
      if (response.ok) {
        console.log('✅ Post atualizado com sucesso');
        // Atualiza o post localmente para feedback imediato
        setUserPosts(prevPosts => 
          prevPosts.map(post => 
            post.id === updatedPost.id 
              ? { ...post, description: updatedPost.descricao, location: updatedPost.localizacao }
              : post
          )
        );
        
        // Recarrega a lista de posts após atualização
        setTimeout(() => loadUserPosts(), 500);
        
        setShowEditPopup(false);
        setPostToEdit(null);
        
        // Feedback de sucesso
        alert('Publicação atualizada com sucesso!');
      } else {
        console.error('❌ Erro ao atualizar post:', response.status, await response.text());
        
        // Como fallback, vamos simular a atualização localmente
        console.log('🔄 Endpoint de atualização não disponível, simulando atualização local...');
        
        setUserPosts(prevPosts => 
          prevPosts.map(post => 
            post.id === updatedPost.id 
              ? { ...post, description: updatedPost.descricao, location: updatedPost.localizacao }
              : post
          )
        );
        
        setShowEditPopup(false);
        setPostToEdit(null);
        
        alert('⚠️ Edição salva localmente. O backend ainda não suporta edição de posts.');
      }
    } catch (error) {
      console.error('💥 Erro na requisição de atualização:', error);
      
      // Fallback: atualização local em caso de erro de rede
      console.log('🔄 Erro de conexão, aplicando mudanças localmente...');
      
      setUserPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === updatedPost.id 
            ? { ...post, description: updatedPost.descricao, location: updatedPost.localizacao }
            : post
        )
      );
      
      setShowEditPopup(false);
      setPostToEdit(null);
      
      alert('⚠️ Problema de conexão. Edição salva localmente.');
    } finally {
      setIsUpdatingPost(false);
    }
  };
  
  // Função para cancelar edição
  const cancelEditPost = () => {
    setShowEditPopup(false);
    setPostToEdit(null);
  };

  // Mostrar loading enquanto carrega
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        🔄 Carregando perfil...
      </div>
    );
  }
  
  if (!user) {
    return null
  }

  return (
    <ProfileContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
    >
      <BackgroundGradient />
      <ProfileContent>
        <ProfileHeader>
          <HeaderGlassCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AvatarSection>
              <AvatarContainer
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const fotoSrc = isEditing ? editedData.foto : user?.foto
                  
                  return fotoSrc ? (
                    <Avatar src={fotoSrc} alt={user.nome} />
                  ) : (
                    <DefaultAvatarWrapper>
                      <DefaultAvatar size={180} />
                    </DefaultAvatarWrapper>
                  )
                })()}
                {isEditing && (
                  <AvatarOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="file"
                      id="avatar-upload"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="avatar-upload">
                      <CameraButton
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiCamera />
                      </CameraButton>
                    </label>
                  </AvatarOverlay>
                )}
              </AvatarContainer>
              
              {/* Botões de ação abaixo da foto */}
              <AvatarActionButtons>
                <AnimatePresence mode="wait">
                  {isEditing ? (
                    <ButtonGroup
                      key="edit-buttons"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <SaveButton
                        onClick={handleSave}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiCheck /> Salvar
                      </SaveButton>
                      <CancelButton
                        onClick={handleCancel}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiX /> Cancelar
                      </CancelButton>
                    </ButtonGroup>
                  ) : (
                    <EditButton
                      key="edit-button"
                      onClick={handleEdit}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <FiEdit3 /> Editar Perfil
                    </EditButton>
                  )}
                </AnimatePresence>
              </AvatarActionButtons>
            </AvatarSection>

            <UserInfoSection>
              <AnimatePresence mode="wait">
                {isEditing ? (
                  <EditableUserInfo
                    key="editing"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InputGroup>
                      <InputIcon><FiUser /></InputIcon>
                      <StyledEditInput
                        type="text"
                        value={editedData.nome}
                        onChange={(e) => setEditedData({ ...editedData, nome: e.target.value })}
                        placeholder="Nome completo"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputIcon><FiAtSign /></InputIcon>
                      <StyledEditInput
                        type="text"
                        value={editedData.nickname}
                        onChange={(e) => setEditedData({ ...editedData, nickname: e.target.value })}
                        placeholder="Nickname"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputIcon><FiMail /></InputIcon>
                      <StyledEditInput
                        type="email"
                        value={editedData.email}
                        onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                        placeholder="Email"
                      />
                    </InputGroup>
                  </EditableUserInfo>
                ) : (
                  <UserInfoDisplay
                    key="display"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UserName>{user.nome || 'Usuário'}</UserName>
                    <UserEmail>@{user.nickname || user.email?.split('@')[0] || 'email'}</UserEmail>
                    <UserEmailSecondary>{user.email}</UserEmailSecondary>
                    <UserDescription>
                      {user.descricao || 'Nenhuma descrição adicionada ainda.'}
                    </UserDescription>
                  </UserInfoDisplay>
                )}
              </AnimatePresence>
            </UserInfoSection>

          <DetailsGlassCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isEditing ? (
                <EditableDetails
                  key="editing-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Seção Sobre Mim - Sempre visível */}
                  <DetailSection>
                    <SectionLabel>
                      <FiFileText /> Sobre mim
                    </SectionLabel>
                    <TextAreaGroup>
                      <StyledTextarea
                        value={editedData.descricao}
                        onChange={(e) => setEditedData({ ...editedData, descricao: e.target.value })}
                        placeholder="Conte um pouco sobre você, seus objetivos no fitness..."
                      />
                    </TextAreaGroup>
                  </DetailSection>

                  {/* Botão de Expansão */}
                  <ExpandButton
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    {isExpanded ? 'Ocultar dados' : 'Ver mais informações'}
                  </ExpandButton>

                  {/* Seções Expandidas */}
                  <AnimatePresence>
                    {isExpanded && (
                      <ExpandedContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DetailSection>
                          <SectionLabel>
                            <FiUser /> Informações Pessoais
                          </SectionLabel>
                          <DetailsGrid>
                            <InputGroup>
                              <InputIcon><FiMapPin /></InputIcon>
                              <StyledEditInput
                                type="text"
                                value={editedData.localizacao}
                                onChange={(e) => setEditedData({ ...editedData, localizacao: e.target.value })}
                                placeholder="Ex: São Paulo - SP"
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputIcon><FiCalendar /></InputIcon>
                              <StyledEditInput
                                type="date"
                                value={editedData.data_nascimento}
                                onChange={(e) => setEditedData({ ...editedData, data_nascimento: e.target.value })}
                                placeholder="Data de nascimento"
                              />
                            </InputGroup>
                          </DetailsGrid>
                        </DetailSection>

                        <DetailSection>
                          <SectionLabel>
                            <FiActivity /> Dados Físicos
                          </SectionLabel>
                          <DetailsGrid>
                            <InputGroup>
                              <InputIcon><FiTarget /></InputIcon>
                              <StyledEditInput
                                type="number"
                                step="0.1"
                                value={editedData.peso}
                                onChange={(e) => setEditedData({ ...editedData, peso: e.target.value })}
                                placeholder="Peso"
                              />
                              <UnitLabel>kg</UnitLabel>
                            </InputGroup>
                            <InputGroup>
                              <InputIcon><FiTrendingUp /></InputIcon>
                              <StyledEditInput
                                type="number"
                                step="0.01"
                                value={editedData.altura}
                                onChange={(e) => setEditedData({ ...editedData, altura: e.target.value })}
                                placeholder="Altura"
                              />
                              <UnitLabel>m</UnitLabel>
                            </InputGroup>
                          </DetailsGrid>
                        </DetailSection>
                      </ExpandedContent>
                    )}
                  </AnimatePresence>

                </EditableDetails>
              ) : (
                <DisplayDetails
                  key="display-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Botão de Expansão */}
                  <ExpandButton
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    {isExpanded ? 'Ocultar informações' : 'Ver mais informações'}
                  </ExpandButton>

                  {/* Seções Expandidas */}
                  <AnimatePresence>
                    {isExpanded && (
                      <ExpandedContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DetailSection>
                          <SectionLabel>
                            <FiUser /> Informações Pessoais
                          </SectionLabel>
                          <InfoGrid>
                            <InfoCard>
                              <InfoIcon><FiMapPin /></InfoIcon>
                              <InfoContent>
                                <InfoLabel>Localização</InfoLabel>
                                <InfoValue>{user.localizacao || 'Não informada'}</InfoValue>
                              </InfoContent>
                            </InfoCard>
                            <InfoCard>
                              <InfoIcon><FiCalendar /></InfoIcon>
                              <InfoContent>
                                <InfoLabel>Nascimento</InfoLabel>
                                <InfoValue>{user.data_nascimento || 'Não informado'}</InfoValue>
                              </InfoContent>
                            </InfoCard>
                          </InfoGrid>
                        </DetailSection>

                        <DetailSection>
                          <SectionLabel>
                            <FiActivity /> Dados Físicos
                          </SectionLabel>
                          <StatsGrid>
                            <StatCard>
                              <StatValue>{user.peso && user.peso !== '--' ? user.peso : '--'}</StatValue>
                              <StatLabel>Peso (kg)</StatLabel>
                            </StatCard>
                            <StatCard>
                              <StatValue>{user.altura && user.altura !== '--' ? user.altura : '--'}</StatValue>
                              <StatLabel>Altura (m)</StatLabel>
                            </StatCard>
                            <StatCard isHighlight>
                              <StatValue>{user.imc ? Number(user.imc).toFixed(1) : '--'}</StatValue>
                              <StatLabel>IMC</StatLabel>
                            </StatCard>
                          </StatsGrid>
                        </DetailSection>
                      </ExpandedContent>
                    )}
                  </AnimatePresence>
                </DisplayDetails>
              )}
            </AnimatePresence>
          </DetailsGlassCard>

          </HeaderGlassCard>
        </ProfileHeader>

        <PhotosSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionTitle>Fotos ({userPosts.length})</SectionTitle>
          
          {isLoadingPosts ? (
            <LoadingContainer>
              <LoadingSpinner />
              <span>Carregando fotos...</span>
            </LoadingContainer>
          ) : (
            <PhotoGrid>
              <AnimatePresence>
                {userPosts.map((post, index) => (
                  <PhotoCard
                    key={post.id}
                    layoutId={`photo-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => navigate('/social')} // Navegar para a rede social
                    style={{ cursor: 'pointer' }}
                  >
                    <PhotoImage src={post.image} alt={`Publicação ${index + 1}`} />
                    <PhotoOverlay>
                      <PostActions>
                        <ActionButton
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            handleEditPost(post.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiEdit3 />
                        </ActionButton>
                        <ActionButton
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            handleDeletePost(post.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          isDelete
                        >
                          <FiX />
                        </ActionButton>
                      </PostActions>
                      <PostStats>
                        <PostStat>
                          <FiHeart />
                          <span>{post.likes}</span>
                        </PostStat>
                        <PostStat>
                          <FiMessageCircle />
                          <span>{post.comments}</span>
                        </PostStat>
                      </PostStats>
                    </PhotoOverlay>
                  </PhotoCard>
                ))}
              </AnimatePresence>
              
              {/* Placeholder cards para manter o grid se houver poucas fotos */}
              {Array.from({ length: Math.max(0, 6 - userPosts.length) }).map((_, index) => (
                <PlaceholderCard key={`placeholder-${index}`} />
              ))}
            </PhotoGrid>
          )}
          
          {!isLoadingPosts && userPosts.length === 0 && (
            <EmptyPostsState>
              <FiCamera size={48} />
              <h3>Nenhuma foto ainda</h3>
              <p>Suas fotos das publicações aparecerão aqui quando você compartilhar algo na rede social.</p>
            </EmptyPostsState>
          )}
        </PhotosSection>


      </ProfileContent>

      {/* Popup de Peso e Altura */}
      <WeightHeightPopup
        isOpen={showWeightHeightPopup}
        onClose={() => setShowWeightHeightPopup(false)}
        onSubmit={handleWeightHeightSubmit}
        onSkip={handleWeightHeightSkip}
      />
      
      {/* Popup de confirmação de exclusão */}
      <ConfirmDeletePopup
        isOpen={showDeleteConfirm}
        onClose={cancelDeletePost}
        onConfirm={confirmDeletePost}
        isLoading={isDeletingPost}
      />
      
      <EditPostPopup
        isOpen={showEditPopup}
        onClose={cancelEditPost}
        post={postToEdit}
        onSave={handleSaveEditPost}
        isLoading={isUpdatingPost}
      />
      
    </ProfileContainer>
  )
}

const ProfileContainer = styled(motion.div)`
  min-height: 100vh;
  background: #0A0A0A;
  padding-top: 10rem;
  padding-bottom: 4rem;
  position: relative;
  overflow-x: hidden;
`

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at top right,
    rgba(227, 6, 19, 0.1) 0%,
    transparent 50%
  ),
  radial-gradient(
    ellipse at bottom left,
    rgba(227, 6, 19, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
  z-index: 0;
`

const ProfileContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`

const HeaderGlassCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  padding: 4rem;
  width: 100%;
  max-width: 80rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 0 30px rgba(227, 6, 19, 0.02);
  position: relative;
  overflow: hidden;
  
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
      rgba(227, 6, 19, 0.5),
      transparent
    );
  }
`

const AvatarSection = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AvatarActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`

const AvatarContainer = styled(motion.div)`
  position: relative;
  width: 18rem;
  height: 18rem;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(227, 6, 19, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`

const DefaultAvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border: 4px solid rgba(227, 6, 19, 0.3);
`

const AvatarOverlay = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`

const CameraButton = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.4);
  
  svg {
    color: white;
    font-size: 2rem;
  }
`

const UserInfoSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
`

const UserName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`

const UserEmail = styled.p`
  font-size: 1.8rem;
  color: var(--primary);
  font-weight: 600;
  margin: 0.5rem 0;
`

const UserEmailSecondary = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
`

const UserDescription = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 1rem 0 0 0;
  text-align: center;
  max-width: 40rem;
  font-style: italic;
  
  &:empty::before {
    content: 'Nenhuma descrição adicionada ainda.';
    color: rgba(255, 255, 255, 0.4);
  }
`

const EditableUserInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`

const UserInfoDisplay = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`

const InputIcon = styled.div`
  position: absolute;
  left: 1.8rem;
  color: var(--primary);
  font-size: 2rem;
  z-index: 1;
  pointer-events: none;
`

const StyledEditInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 1.4rem 1.8rem 1.4rem 5rem;
  font-size: 1.6rem;
  color: var(--white);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(227, 6, 19, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`

const UnitLabel = styled.span`
  position: absolute;
  right: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  pointer-events: none;
`

const DetailsSection = styled.div`
  margin-bottom: 3rem;
`

const DetailsGlassCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.5rem;
  padding: 3rem;
  width: 100%;
  max-width: 80rem;
  margin: 3rem auto;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(227, 6, 19, 0.01);
`

const EditableDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const DisplayDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SectionLabel = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
  
  svg {
    font-size: 2rem;
  }
`

const TextAreaGroup = styled.div`
  width: 100%;
`

const StyledTextarea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 1.5rem 1.8rem;
  font-size: 1.6rem;
  color: var(--white);
  min-height: 12rem;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(227, 6, 19, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
`


const DescriptionText = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(227, 6, 19, 0.2);
    transform: translateY(-2px);
  }
`

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: rgba(227, 6, 19, 0.1);
  border-radius: 1.2rem;
  color: var(--primary);
  font-size: 2rem;
`

const InfoContent = styled.div`
  flex: 1;
`

const InfoLabel = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const InfoValue = styled.p`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 500;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const StatCard = styled.div<{ isHighlight?: boolean }>`
  padding: 2rem;
  background: ${props => props.isHighlight 
    ? 'linear-gradient(135deg, rgba(227, 6, 19, 0.1), rgba(227, 6, 19, 0.05))'
    : 'rgba(255, 255, 255, 0.02)'};
  border: 1px solid ${props => props.isHighlight 
    ? 'rgba(227, 6, 19, 0.3)'
    : 'rgba(255, 255, 255, 0.05)'};
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: ${props => props.isHighlight 
      ? 'linear-gradient(135deg, rgba(227, 6, 19, 0.15), rgba(227, 6, 19, 0.08))'
      : 'rgba(255, 255, 255, 0.04)'};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

// Novos componentes para UI compacta
const ExpandButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 2rem 0;
  
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(227, 6, 19, 0.3);
    color: var(--white);
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 1.6rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`

const ExpandedContent = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`





const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
`

const EditButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 3.5rem;
  background: linear-gradient(135deg, var(--primary), #FF1744);
  color: white;
  border: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 
    0 10px 30px rgba(227, 6, 19, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  svg {
    font-size: 1.8rem;
  }
`

const SaveButton = styled(EditButton)`
  background: linear-gradient(135deg, #10B981, #059669);
  box-shadow: 
    0 10px 30px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`

const CancelButton = styled(EditButton)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`

const PhotosSection = styled(motion.div)`
  margin-top: 4rem;
  background: rgba(20, 20, 20, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.5rem;
  padding: 3rem;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(227, 6, 19, 0.01);
`

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), #FF1744);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 8rem;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  max-width: 100%;
`

const PhotoCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  border-radius: 1.8rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.1),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
`

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${PhotoCard}:hover & {
    opacity: 1;
  }
`

const DeletePhotoButton = styled(motion.button)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  
  svg {
    color: white;
    font-size: 2rem;
  }
`



const PlaceholderCard = styled.div`
  aspect-ratio: 1;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
`

// Styled Components para a seção de posts
const PostsSection = styled(motion.div)`
  margin-top: 3rem;
  padding: 0 2rem;
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const PostCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`

const PostOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  
  ${PostCard}:hover & {
    opacity: 1;
  }
`

const PostStats = styled.div`
  display: flex;
  gap: 1rem;
`

const PostStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  
  svg {
    font-size: 1rem;
  }
`

const PostInfo = styled.div`
  padding: 1.5rem;
`

const PostDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`

const PostHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
  }
`

const Hashtag = styled.span`
  color: var(--primary) !important;
  font-size: 0.85rem !important;
  font-weight: 500;
  
  &:hover {
    color: rgba(227, 6, 19, 0.8) !important;
  }
`

const PostLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  
  svg {
    font-size: 0.9rem;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);
  
  span {
    font-size: 1rem;
  }
`

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const EmptyPostsState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    color: rgba(255, 255, 255, 0.3);
    margin-bottom: 0.5rem;
  }
  
  h3 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    margin: 0;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 300px;
    margin: 0;
  }
`

// Styled Components para ações nas fotos
const PostActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`

interface ActionButtonProps {
  isDelete?: boolean;
}

const ActionButton = styled(motion.button)<ActionButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  overflow: visible;
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center;
  will-change: transform, box-shadow, background;
  
  /* Base glass layer usando paleta da aplicação */
  background: ${props => props.isDelete 
    ? 'linear-gradient(135deg, rgba(25, 25, 25, 0.9), rgba(35, 35, 35, 0.95))' 
    : 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.95))'
  };
  
  /* Refined backdrop blur */
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  
  /* Delicate border usando cor primária */
  border: 1px solid ${props => props.isDelete 
    ? 'rgba(227, 6, 19, 0.35)' 
    : 'rgba(227, 6, 19, 0.18)'
  };
  
  /* Refined shadows */
  box-shadow: 
    0 3px 12px rgba(0, 0, 0, 0.25),
    0 1px 4px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  
  color: ${props => props.isDelete 
    ? 'rgba(227, 6, 19, 0.85)' 
    : 'rgba(255, 255, 255, 0.8)'
  };
  
  /* Gentle glass reflection */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.04) 35%,
      transparent 55%,
      rgba(0, 0, 0, 0.01) 100%
    );
    pointer-events: none;
    transition: opacity 0.2s ease;
    opacity: 0.9;
  }
  
  /* Subtle glow effect */
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 50%;
    background: ${props => props.isDelete 
      ? 'radial-gradient(circle, rgba(227, 6, 19, 0.2), rgba(227, 6, 19, 0.08), transparent)' 
      : 'radial-gradient(circle, rgba(227, 6, 19, 0.12), rgba(227, 6, 19, 0.04), transparent)'
    };
    opacity: 0;
    z-index: -1;
    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
    filter: blur(1px);
  }
  
  svg {
    font-size: 1.05rem;
    z-index: 3;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center;
  }
  
  &:hover {
    transform: scale(1.03) translateY(-0.5px);
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
    
    background: ${props => props.isDelete 
      ? 'linear-gradient(135deg, rgba(227, 6, 19, 0.12), rgba(227, 6, 19, 0.18))' 
      : 'linear-gradient(135deg, rgba(227, 6, 19, 0.06), rgba(227, 6, 19, 0.12))'
    };
    
    border-color: ${props => props.isDelete 
      ? 'rgba(227, 6, 19, 0.6)' 
      : 'rgba(227, 6, 19, 0.35)'
    };
    
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.3),
      0 3px 8px rgba(227, 6, 19, 0.15),
      0 1px 3px rgba(227, 6, 19, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    
    color: ${props => props.isDelete 
      ? 'rgba(255, 255, 255, 0.9)' 
      : 'rgba(255, 255, 255, 0.9)'
    };
    
    &::before {
      opacity: 1;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.18) 0%,
        rgba(255, 255, 255, 0.08) 30%,
        transparent 50%,
        rgba(227, 6, 19, 0.03) 100%
      );
    }
    
    &::after {
      opacity: 0.7;
      transform: scale(1.05);
    }
    
    svg {
      transform: scale(1.06);
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.4));
    }
  }
  
  &:active {
    transform: scale(1.01) translateY(0px);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.6, 1);
    
    box-shadow: 
      0 2px 6px rgba(0, 0, 0, 0.4),
      0 1px 3px rgba(227, 6, 19, 0.25),
      inset 0 1px 3px rgba(0, 0, 0, 0.25);
    
    &::after {
      opacity: 0.5;
      transform: scale(0.98);
    }
    
    svg {
      transform: scale(1.03);
    }
  }
  
  /* Gentle entrance */
  animation: gentleEntrance 0.4s cubic-bezier(0.23, 1, 0.32, 1) both;
  
  @keyframes gentleEntrance {
    0% {
      opacity: 0;
      transform: scale(0.9) translateY(6px);
      filter: blur(2px);
    }
    70% {
      opacity: 0.9;
      transform: scale(1.01) translateY(-1px);
      filter: blur(0.5px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0px);
      filter: blur(0px);
    }
  }
`

export default Profile
