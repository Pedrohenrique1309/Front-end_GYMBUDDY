import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEdit3, FiCamera, FiPlus, FiX, FiCheck } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../assets/default-avatar'
import WeightHeightPopup from '../../components/WeightHeightPopup'
import { useUserActions } from '../../hooks/useUserActions'

const Profile = () => {
  const { user, isLoggedIn, updateUser } = useUser()
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
  });
  const [photos, setPhotos] = useState<string[]>([])

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  // Verificar primeira visita e mostrar popup de peso/altura
  useEffect(() => {
    if (isLoggedIn && user) {
      const hasVisitedProfile = localStorage.getItem(`profile_visited_${user.id || user.email}`);
      const hasMissingData = !user.peso || !user.altura;
      
      // Mostrar popup apenas se for primeira visita E não tiver os dados
      if (!hasVisitedProfile && hasMissingData) {
        // Pequeno delay para melhor UX
        setTimeout(() => {
          setShowWeightHeightPopup(true);
        }, 1000);
      }
    }
  }, [isLoggedIn, user])

  useEffect(() => {
    if (user) {
      setEditedData({
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
      });
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = async () => {
    try {
      // Atualizar no backend se tiver ID do usuário
      if (user?.id) {
        const payload = {
          nome: editedData.nome,
          email: editedData.email,
          nickname: editedData.nickname,
          senha: user.senha || 'senha123', // Backend exige senha
          descricao: editedData.descricao,
          localizacao: editedData.localizacao,
          data_nascimento: editedData.data_nascimento,
          peso: editedData.peso ? Number(editedData.peso) : undefined,
          altura: editedData.altura ? Number(editedData.altura) : undefined,
          imc: editedData.imc ? Number(editedData.imc) : undefined,
          foto: editedData.foto
        }
        
        console.log('🚀 Enviando dados para API:', {
          userId: user.id,
          payload: { ...payload, senha: '[REDACTED]' }
        })
        
        await updateUserAPI(user.id, payload)
      }
      
      // Atualizar contexto local
      updateUser({
        ...user,
        ...editedData
      })
      
      setIsEditing(false)
      console.log('✅ Perfil atualizado com sucesso!')
    } catch (error) {
      console.error('❌ Erro ao atualizar perfil:', error)
      alert('Erro ao salvar alterações. Tente novamente.')
    }
  }

  const handleWeightHeightSubmit = async (data: { peso: number | null; altura: number | null }) => {
    try {
      // Atualizar no backend se tiver ID do usuário
      if (user?.id) {
        await updateUserAPI(user.id, {
          peso: data.peso || undefined,
          altura: data.altura || undefined,
        });
      }
      
      // Atualizar contexto local
      if (user) {
        updateUser({
          ...user,
          nome: user.nome,
          email: user.email,
          peso: data.peso?.toString() || '--',
          altura: data.altura?.toString() || '--',
        });
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
    updateUser({
      ...user,
      peso: '--',
      altura: '--',
    });
    
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
      foto: user?.foto || ''
    })
    setIsEditing(false)
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newPhoto = reader.result as string;
        setPhotos([...photos, newPhoto])
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && user) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const avatarUrl = reader.result as string
        updateUser({ ...user, foto: avatarUrl })
      }
      reader.readAsDataURL(file)
    }
  }

  if (!user) {
    return null
  }

  return (
    <ProfileContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileContent>
        <ProfileHeader>
          <AvatarSection>
            <AvatarContainer>
              {user.foto ? (
                <Avatar src={user.foto} alt={user.nome} />
              ) : (
                <DefaultAvatarWrapper>
                  <DefaultAvatar size={180} />
                </DefaultAvatarWrapper>
              )}
              <AvatarOverlay>
                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="avatar-upload">
                  <CameraButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiCamera />
                  </CameraButton>
                </label>
              </AvatarOverlay>
            </AvatarContainer>
          </AvatarSection>

          <UserInfoSection>
            {isEditing ? (
              <EditableUserInfo>
                <EditInput
                  type="text"
                  value={editedData.nome}
                  onChange={(e) => setEditedData({ ...editedData, nome: e.target.value })}
                  placeholder="Nome completo"
                />
                <EditInput
                  type="text"
                  value={editedData.nickname}
                  onChange={(e) => setEditedData({ ...editedData, nickname: e.target.value })}
                  placeholder="Nickname"
                />
                <EditInput
                  type="email"
                  value={editedData.email}
                  onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                  placeholder="Email"
                />
              </EditableUserInfo>
            ) : (
              <>
                <UserName>{user.nome || 'Usuário'}</UserName>
                <UserEmail>@{user.nickname || user.email?.split('@')[0] || 'email'}</UserEmail>
              </>
            )}
          </UserInfoSection>

          <DetailsSection>
            {isEditing ? (
              <EditableDetails>
                <DetailItem>
                  <DetailLabel>Descrição:</DetailLabel>
                  <EditTextarea
                    value={editedData.descricao}
                    onChange={(e) => setEditedData({ ...editedData, descricao: e.target.value })}
                    placeholder="Conte um pouco sobre você, seus objetivos no fitness..."
                  />
                </DetailItem>
                <DetailsRow>
                  <DetailItem>
                    <DetailLabel>Localização:</DetailLabel>
                    <EditInput
                      type="text"
                      value={editedData.localizacao}
                      onChange={(e) => setEditedData({ ...editedData, localizacao: e.target.value })}
                      placeholder="Ex: São Paulo - SP"
                    />
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Data de Nascimento:</DetailLabel>
                    <EditInput
                      type="date"
                      value={editedData.data_nascimento}
                      onChange={(e) => setEditedData({ ...editedData, data_nascimento: e.target.value })}
                      placeholder="DD-MM-AAAA"
                    />
                  </DetailItem>
                </DetailsRow>
                <DetailsRow>
                  <DetailItem>
                    <DetailLabel>Peso:</DetailLabel>
                    <EditInput
                      type="number"
                      step="0.1"
                      value={editedData.peso}
                      onChange={(e) => setEditedData({ ...editedData, peso: e.target.value })}
                      placeholder="75.0"
                    />
                    <DetailUnit>kg</DetailUnit>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Altura:</DetailLabel>
                    <EditInput
                      type="number"
                      step="0.01"
                      value={editedData.altura}
                      onChange={(e) => setEditedData({ ...editedData, altura: e.target.value })}
                      placeholder="1.75"
                    />
                    <DetailUnit>m</DetailUnit>
                  </DetailItem>
                </DetailsRow>
              </EditableDetails>
            ) : (
              <>
                <DetailText>{user.descricao || 'Sem descrição'}</DetailText>
                <DetailsRow>
                  <DetailInfo>
                    <DetailLabel>Localização:</DetailLabel>
                    <DetailValue>{user.localizacao || 'Não informada'}</DetailValue>
                  </DetailInfo>
                  <DetailInfo>
                    <DetailLabel>Nascimento:</DetailLabel>
                    <DetailValue>{user.data_nascimento || 'Não informado'}</DetailValue>
                  </DetailInfo>
                </DetailsRow>
                <DetailsRow>
                  <DetailInfo>
                    <DetailValue>{user.peso && user.peso !== '--' ? user.peso : '--'}</DetailValue>
                    <DetailUnit>kg</DetailUnit>
                  </DetailInfo>
                  <DetailInfo>
                    <DetailValue>{user.altura && user.altura !== '--' ? user.altura : '--'}</DetailValue>
                    <DetailUnit>m</DetailUnit>
                  </DetailInfo>
                  <DetailInfo>
                    <DetailLabel>IMC:</DetailLabel>
                    <DetailValue>{user.imc ? Number(user.imc).toFixed(1) : '--'}</DetailValue>
                  </DetailInfo>
                </DetailsRow>
              </>
            )}
          </DetailsSection>

          <ActionButtons>
            {isEditing ? (
              <>
                <SaveButton
                  onClick={handleSave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiCheck /> Salvar
                </SaveButton>
                <CancelButton
                  onClick={handleCancel}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiX /> Cancelar
                </CancelButton>
              </>
            ) : (
              <EditButton
                onClick={handleEdit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiEdit3 /> Editar Perfil
              </EditButton>
            )}
          </ActionButtons>
        </ProfileHeader>

        <PhotosSection>
          <SectionTitle>Fotos</SectionTitle>
          <PhotoGrid>
            <AnimatePresence>
              {photos.map((photo, index) => (
                <PhotoCard
                  key={index}
                  layoutId={`photo-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhotoImage src={photo} alt={`Foto ${index + 1}`} />
                  <PhotoOverlay>
                    <DeletePhotoButton
                      onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiX />
                    </DeletePhotoButton>
                  </PhotoOverlay>
                </PhotoCard>
              ))}
            </AnimatePresence>
            
            <AddPhotoCard>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="photo-upload">
                <AddPhotoButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlus />
                  <span>Adicionar Foto</span>
                </AddPhotoButton>
              </label>
            </AddPhotoCard>
            
            {/* Placeholder cards para manter o grid */}
            {Array.from({ length: Math.max(0, 5 - photos.length) }).map((_, index) => (
              <PlaceholderCard key={`placeholder-${index}`} />
            ))}
          </PhotoGrid>
        </PhotosSection>
      </ProfileContent>

      {/* Popup de Peso e Altura */}
      <WeightHeightPopup
        isOpen={showWeightHeightPopup}
        onClose={() => setShowWeightHeightPopup(false)}
        onSubmit={handleWeightHeightSubmit}
        onSkip={handleWeightHeightSkip}
      />
    </ProfileContainer>
  )
}

const ProfileContainer = styled(motion.div)`
  min-height: 100vh;
  background: #0A0A0A;
  padding-top: 10rem;
  padding-bottom: 4rem;
`

const ProfileContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`

const AvatarSection = styled.div`
  margin-bottom: 3rem;
`

const AvatarContainer = styled.div`
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

const AvatarOverlay = styled.div`
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
  margin-bottom: 2rem;
`

const UserName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`

const UserEmail = styled.p`
  font-size: 1.6rem;
  color: var(--primary);
  font-weight: 500;
`

const EditableUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

const DetailsSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const DetailText = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 60rem;
`

const DetailsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;
`

const DetailInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`

const DetailValue = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
`

const DetailUnit = styled.span`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
`

const EditableDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const DetailLabel = styled.label`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
  min-width: 8rem;
  text-align: right;
`

const EditInput = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.08);
  }
`

const EditTextarea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: var(--white);
  transition: all 0.3s ease;
  min-width: 40rem;
  min-height: 8rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.08);
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
`

const EditButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 3rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-dark);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.4);
  }
`

const SaveButton = styled(EditButton)`
  background: #10B981;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  
  &:hover {
    background: #059669;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`

const CancelButton = styled(EditButton)`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

const PhotosSection = styled.div`
  margin-top: 6rem;
`

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 3rem;
  text-align: center;
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
  border-radius: 1.2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
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

const AddPhotoCard = styled.div`
  aspect-ratio: 1;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary);
  }
`

const AddPhotoButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  
  svg {
    font-size: 3rem;
  }
  
  span {
    font-size: 1.4rem;
    font-weight: 500;
  }
  
  &:hover {
    color: var(--primary);
  }
`

const PlaceholderCard = styled.div`
  aspect-ratio: 1;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
`

export default Profile
