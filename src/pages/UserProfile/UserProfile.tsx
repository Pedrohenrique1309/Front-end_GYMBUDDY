import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiMapPin, FiCalendar, FiActivity, FiUser } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import DefaultAvatar from '../../assets/default-avatar'

const API_BASE_URL = '/api/v1/gymbuddy'

interface UserProfileData {
  id: number
  nome: string
  nickname: string
  email: string
  foto?: string
  descricao?: string
  localizacao?: string
  data_nascimento?: string
  peso?: string
  altura?: string
  imc?: string
  publicacoes?: number
}

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()
  const { user: currentUser } = useUser()
  const [profileUser, setProfileUser] = useState<UserProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (userId) {
      console.log('🔍 Carregando perfil para userId:', userId)
      loadUserProfile(parseInt(userId))
    } else {
      console.log('❌ Nenhum userId fornecido')
      setError('ID do usuário não fornecido')
      setLoading(false)
    }
  }, [userId])

  const loadUserProfile = async (id: number) => {
    console.log('🔍 Iniciando carregamento do perfil ID:', id)
    
    try {
      setLoading(true)
      setError(null)
      
      // Mock data para demonstração
      const mockUsers: UserProfileData[] = [
        {
          id: 2,
          nome: 'João Silva',
          nickname: '@joaosilva',
          email: 'joao@example.com',
          foto: '',
          descricao: 'Foco no treino! 💪 Perdeu 10kg em 6 meses',
          localizacao: 'São Paulo - SP',
          data_nascimento: '1995-03-15',
          peso: '75.5',
          altura: '1.78',
          imc: '23.8',
          publicacoes: 45
        },
        {
          id: 3,
          nome: 'Maria Santos',
          nickname: '@mariafitness',
          email: 'maria@example.com',
          foto: '',
          descricao: 'Personal Trainer certificada. Especialista em hipertrofia',
          localizacao: 'Rio de Janeiro - RJ',
          data_nascimento: '1990-07-22',
          peso: '62.0',
          altura: '1.65',
          imc: '22.8',
          publicacoes: 89
        },
        {
          id: 4,
          nome: 'Pedro Costa',
          nickname: '@pedrocosta',
          email: 'pedro@example.com',
          foto: '',
          descricao: 'Crossfit lover 🏋️ Competidor há 3 anos',
          localizacao: 'Belo Horizonte - MG',
          data_nascimento: '1988-11-10',
          peso: '85.2',
          altura: '1.82',
          imc: '25.7',
          publicacoes: 34
        },
        {
          id: 5,
          nome: 'Ana Julia',
          nickname: '@anajulia',
          email: 'ana@example.com',
          foto: '',
          descricao: 'Yoga e pilates 🧘 Instrutora certificada',
          localizacao: 'Florianópolis - SC',
          data_nascimento: '1992-05-18',
          peso: '58.0',
          altura: '1.68',
          imc: '20.5',
          publicacoes: 67
        },
        {
          id: 6,
          nome: 'Carlos Mendes',
          nickname: '@carlosfit',
          email: 'carlos@example.com',
          foto: '',
          descricao: 'Bodybuilder natural. Preparação para campeonatos',
          localizacao: 'Brasília - DF',
          data_nascimento: '1987-09-03',
          peso: '90.5',
          altura: '1.85',
          imc: '26.4',
          publicacoes: 123
        }
      ]
      
      // Simula delay de API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Busca usuário no mock data
      console.log('🔄 Buscando usuário no mock data para ID:', id)
      const mockUser = mockUsers.find(u => u.id === id)
      
      if (mockUser) {
        console.log('✅ Usuário encontrado:', mockUser)
        setProfileUser(mockUser)
      } else {
        console.log('❌ Usuário não encontrado')
        setError('Usuário não encontrado')
      }
      
    } catch (error) {
      console.error('❌ Erro ao carregar perfil:', error)
      setError('Erro ao carregar perfil')
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    navigate('/social')
  }

  if (loading) {
    return (
      <Container>
        <BackgroundGradient />
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Carregando perfil do usuário...</LoadingText>
          <LoadingSubtext>ID: {userId}</LoadingSubtext>
        </LoadingContainer>
      </Container>
    )
  }

  if (error || !profileUser) {
    return (
      <Container>
        <BackgroundGradient />
        <ErrorContainer>
          <ErrorIcon>😞</ErrorIcon>
          <ErrorText>{error || 'Usuário não encontrado'}</ErrorText>
          <ErrorSubtext>ID buscado: {userId}</ErrorSubtext>
          <BackButton onClick={handleBack}>
            <FiArrowLeft /> Voltar para Rede Social
          </BackButton>
        </ErrorContainer>
      </Container>
    )
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundGradient />
      
      <Header>
        <BackButton onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </BackButton>
      </Header>

      <ProfileContent>
        <ProfileCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AvatarSection>
            <AvatarContainer>
              {profileUser.foto ? (
                <Avatar src={profileUser.foto} alt={profileUser.nome} />
              ) : (
                <DefaultAvatarWrapper>
                  <DefaultAvatar size={150} />
                </DefaultAvatarWrapper>
              )}
            </AvatarContainer>
            
            <UserInfo>
              <UserName>{profileUser.nome}</UserName>
              <UserNickname>{profileUser.nickname}</UserNickname>
              {profileUser.descricao && (
                <UserDescription>{profileUser.descricao}</UserDescription>
              )}
            </UserInfo>
          </AvatarSection>

          <StatsSection>
            <StatCard>
              <StatValue>{profileUser.publicacoes || 0}</StatValue>
              <StatLabel>Posts</StatLabel>
            </StatCard>
            {profileUser.peso && profileUser.peso !== '--' && (
              <StatCard>
                <StatValue>{profileUser.peso}</StatValue>
                <StatLabel>Peso (kg)</StatLabel>
              </StatCard>
            )}
            {profileUser.altura && profileUser.altura !== '--' && (
              <StatCard>
                <StatValue>{profileUser.altura}</StatValue>
                <StatLabel>Altura (m)</StatLabel>
              </StatCard>
            )}
            {profileUser.imc && (
              <StatCard highlight>
                <StatValue>{Number(profileUser.imc).toFixed(1)}</StatValue>
                <StatLabel>IMC</StatLabel>
              </StatCard>
            )}
          </StatsSection>

          {(profileUser.localizacao || profileUser.data_nascimento) && (
            <DetailsSection>
              <SectionTitle>
                <FiUser /> Informações Pessoais
              </SectionTitle>
              <DetailsGrid>
                {profileUser.localizacao && (
                  <DetailItem>
                    <DetailIcon><FiMapPin /></DetailIcon>
                    <DetailContent>
                      <DetailLabel>Localização</DetailLabel>
                      <DetailValue>{profileUser.localizacao}</DetailValue>
                    </DetailContent>
                  </DetailItem>
                )}
                {profileUser.data_nascimento && (
                  <DetailItem>
                    <DetailIcon><FiCalendar /></DetailIcon>
                    <DetailContent>
                      <DetailLabel>Data de Nascimento</DetailLabel>
                      <DetailValue>
                        {new Date(profileUser.data_nascimento).toLocaleDateString('pt-BR')}
                      </DetailValue>
                    </DetailContent>
                  </DetailItem>
                )}
              </DetailsGrid>
            </DetailsSection>
          )}
        </ProfileCard>
      </ProfileContent>
    </Container>
  )
}

// Styled Components
const Container = styled(motion.div)`
  min-height: 100vh;
  background: #0A0A0A;
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

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(227, 6, 19, 0.3);
    color: white;
  }
  
  svg {
    font-size: 1.6rem;
  }
`

const ProfileContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 12rem 2rem 4rem;
  position: relative;
  z-index: 1;
`

const ProfileCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  padding: 4rem;
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
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`

const AvatarContainer = styled.div`
  width: 15rem;
  height: 15rem;
  flex-shrink: 0;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(227, 6, 19, 0.3);
`

const DefaultAvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(227, 6, 19, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UserName = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  margin: 0;
`

const UserNickname = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: rgba(227, 6, 19, 0.8);
  margin: 0;
`

const UserDescription = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 1rem 0 0;
`

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const StatCard = styled.div<{ highlight?: boolean }>`
  background: ${props => props.highlight 
    ? 'rgba(227, 6, 19, 0.1)' 
    : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.highlight 
    ? 'rgba(227, 6, 19, 0.3)' 
    : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: ${props => props.highlight 
      ? 'rgba(227, 6, 19, 0.15)' 
      : 'rgba(255, 255, 255, 0.08)'};
  }
`

const StatValue = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const DetailsSection = styled.div`
  margin-top: 2rem;
`

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  
  svg {
    color: rgba(227, 6, 19, 0.8);
  }
`

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
`

const DetailIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(227, 6, 19, 0.1);
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(227, 6, 19, 0.8);
  font-size: 1.8rem;
  flex-shrink: 0;
`

const DetailContent = styled.div`
  flex: 1;
`

const DetailLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3rem;
`

const DetailValue = styled.div`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
`

const LoadingSpinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid rgba(227, 6, 19, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.6rem;
  margin: 0;
`

const LoadingSubtext = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;
  margin: 0;
  font-weight: 500;
`

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
`

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`

const ErrorText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
`

const ErrorSubtext = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;
  text-align: center;
  margin: 0;
  font-weight: 500;
`

export default UserProfile
