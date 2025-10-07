import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHeart, FiMessageCircle, FiChevronRight, FiSend } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../assets/default-avatar'

const API_BASE_URL = '/api/v1/gymbuddy'

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  position: relative;
`

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  background: #E53935;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0 10px rgba(229, 57, 53, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.3) 100%
    );
  }
`

const SidebarIcon = styled.div`
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50px;
  right: 0;
  height: 70px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

const Logo = styled.div`
  img {
    height: 40px;
  }
`

const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  padding: 100px 2rem 2rem 80px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 100px 2rem 2rem 70px;
  }
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 2rem 0;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  
  &:focus-within {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
    }
  }
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const PostCard = styled.div`
  background: #2a2a2a;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    border-color: rgba(229, 57, 53, 0.2);
  }
`

const PostImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PostFooter = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PostUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Username = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`

const PostHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  span {
    color: #E53935;
    font-size: 1.2rem;
  }
`

const PostStats = styled.div`
  display: flex;
  gap: 1.5rem;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    font-size: 18px;
  }
  
  span {
    font-size: 1.3rem;
  }
`

const FriendsSidebar = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 100px;
`

const FriendsSearch = styled.div`
  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    color: white;
    font-size: 1.4rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.12);
    }
  }
`

const FriendsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem;
`

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FriendItem = styled.div`
  display: flex;
  gap: 1.2rem;
  cursor: pointer;
  padding: 1.2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-height: 70px;
  align-items: flex-start;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`

const FriendAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const FriendInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`

const FriendName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`

const FriendStatus = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 0.2rem;
`

// AI Overlay Components
const OverlayBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  cursor: pointer;
`

const AiOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 33vw;
  height: 100vh;
  background: rgba(139, 69, 19, 0.15);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(229, 57, 53, 0.1) 0%,
      rgba(139, 69, 19, 0.05) 50%,
      rgba(183, 28, 28, 0.1) 100%
    );
    z-index: -1;
  }
  
  @media (max-width: 1024px) {
    width: 50vw;
  }
  
  @media (max-width: 768px) {
    width: 80vw;
  }
`

const AiHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const AiTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`

const AiContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const AiMessage = styled.div`
  font-size: 1.8rem;
  line-height: 1.6;
  color: white;
  font-weight: 500;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const SuggestionTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const SuggestionTag = styled.div`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`

const AiInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const AiInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 25px;
  padding: 1.5rem 2rem;
  font-size: 1.4rem;
  color: #333;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`

const SendButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(229, 57, 53, 0.8);
  border: 1px solid rgba(229, 57, 53, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(229, 57, 53, 1);
    box-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
  }
  
  svg {
    font-size: 1.8rem;
  }
`

// Interfaces
export interface User {
  id: number
  nome: string
  nickname: string
  foto?: string
  descricao?: string
  publicacoes?: number
}

interface Post {
  id: number
  user: {
    avatar?: string
    username: string
  }
  image: string
  hashtags: string[]
  likes: number
  comments: number
}

// Component
const Social = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [showAiOverlay, setShowAiOverlay] = useState(false)
  const [aiMessage, setAiMessage] = useState('')

  useEffect(() => {
    loadUsers()
    loadPosts()
  }, [])

  const loadPosts = () => {
    // Mock data para posts
    setPosts([
      {
        id: 1,
        user: { username: '@marcos_silva22', avatar: '' },
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
        hashtags: ['#foco', '#treino', '#saude'],
        likes: 1709,
        comments: 10
      },
      {
        id: 2,
        user: { username: '@ana_fitness', avatar: '' },
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
        hashtags: ['#gym', '#motivation'],
        likes: 892,
        comments: 23
      },
      {
        id: 3,
        user: { username: '@pedro_strong', avatar: '' },
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
        hashtags: ['#workout', '#fitness'],
        likes: 567,
        comments: 15
      },
      {
        id: 4,
        user: { username: '@julia_trainer', avatar: '' },
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500',
        hashtags: ['#training', '#healthy'],
        likes: 1234,
        comments: 45
      }
    ])
  }
  
  const loadUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/usuario`)
      const data = await response.json()
      if (data?.usuarios) {
        const filteredUsers = data.usuarios.filter((u: User) => u.id !== user?.id)
        setUsers(filteredUsers)
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error)
      // Mock data
      setUsers([
        {
          id: 2,
          nome: 'João Silva',
          nickname: '@joaosilva',
          foto: '',
          descricao: 'Foco no treino! 💪 Perdeu 10kg em 6 meses',
          publicacoes: 45
        },
        {
          id: 3,
          nome: 'Maria Santos',
          nickname: '@mariafitness',
          foto: '',
          descricao: 'Personal Trainer certificada. Especialista em hipertrofia',
          publicacoes: 89
        },
        {
          id: 4,
          nome: 'Pedro Costa',
          nickname: '@pedrocosta',
          foto: '',
          descricao: 'Crossfit lover 🏋️ Competidor há 3 anos',
          publicacoes: 34
        },
        {
          id: 5,
          nome: 'Ana Julia',
          nickname: '@anajulia',
          foto: '',
          descricao: 'Yoga e pilates 🧘 Instrutora certificada',
          publicacoes: 67
        },
        {
          id: 6,
          nome: 'Carlos Mendes',
          nickname: '@carlosfit',
          foto: '',
          descricao: 'Bodybuilder natural. Preparação para campeonatos',
          publicacoes: 123
        },
        {
          id: 7,
          nome: 'Lucia Fernanda',
          nickname: '@luciafernanda',
          foto: '',
          descricao: 'Nutricionista esportiva 🥗 Consultoria online',
          publicacoes: 78
        }
      ])
    }
  }
  

  const handleAiSubmit = () => {
    if (!aiMessage.trim()) return
    // Aqui você pode implementar a lógica do chat da IA
    console.log('Mensagem para IA:', aiMessage)
    setAiMessage('')
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAiOverlay(false)
    }
  }

  return (
    <Container>
      {/* Overlay de IA */}
      <AnimatePresence>
        {showAiOverlay && (
          <>
            <OverlayBackground 
              onClick={handleOverlayClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <AiOverlay
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
            <AiHeader>
              <AiTitle>Assistente IA</AiTitle>
              <CloseButton onClick={() => setShowAiOverlay(false)}>×</CloseButton>
            </AiHeader>
            
            <AiContent>
              <AiMessage>
                Em seu último treino você progrediu carga em 2 exercícios.
              </AiMessage>
              
              <SuggestionTags>
                <SuggestionTag>#Hipertrofia</SuggestionTag>
                <SuggestionTag>Dieta</SuggestionTag>
                <SuggestionTag>Cardio</SuggestionTag>
              </SuggestionTags>
            </AiContent>
            
            <AiInputContainer>
              <AiInput
                type="text"
                placeholder="Me ajude no meu treino?"
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAiSubmit()}
              />
              <SendButton
                onClick={handleAiSubmit}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiSend />
              </SendButton>
            </AiInputContainer>
            </AiOverlay>
          </>
        )}
      </AnimatePresence>
      
      {/* Barra Lateral Vermelha */}
      <Sidebar>
        <SidebarIcon onClick={() => setShowAiOverlay(!showAiOverlay)}>
          <FiChevronRight />
        </SidebarIcon>
      </Sidebar>
      
      {/* Cabeçalho */}
      <Header>
        <Logo>
          <img src="/gymbuddy-logo.png" alt="GYM BUDDY" />
        </Logo>
        <UserProfile onClick={() => navigate('/profile')}>
          {user?.foto ? (
            <img src={user.foto} alt={user.nome} />
          ) : (
            <DefaultAvatar size={40} />
          )}
        </UserProfile>
      </Header>
      
      {/* Conteúdo Principal */}
      <MainContent>
        <ContentArea>
          <MainTitle>
            Como seus amigos estão<br/>treinando hoje?
          </MainTitle>
          
          <SearchBar>
            <FiSearch />
            <input 
              type="text" 
              placeholder="Buscar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBar>
          
          <SectionTitle>Posts recentes</SectionTitle>
          
          <PostsGrid>
            {posts.map((post) => (
              <PostCard key={post.id}>
                <PostImage>
                  <img src={post.image} alt="Post" />
                </PostImage>
                <PostFooter>
                  <PostUser>
                    <UserAvatar>
                      {post.user.avatar ? (
                        <img src={post.user.avatar} alt={post.user.username} />
                      ) : (
                        <DefaultAvatar size={32} />
                      )}
                    </UserAvatar>
                    <Username>{post.user.username}</Username>
                  </PostUser>
                  <PostHashtags>
                    {post.hashtags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </PostHashtags>
                  <PostStats>
                    <StatItem>
                      <FiHeart />
                      <span>{post.likes}</span>
                    </StatItem>
                    <StatItem>
                      <FiMessageCircle />
                      <span>{post.comments}</span>
                    </StatItem>
                  </PostStats>
                </PostFooter>
              </PostCard>
            ))}
          </PostsGrid>
        </ContentArea>
      
        
        {/* Sidebar Amigos */}
        <FriendsSidebar>
          <FriendsSearch>
            <input type="text" placeholder="Buscar" />
          </FriendsSearch>
          
          <FriendsTitle>Amigos</FriendsTitle>
          
          <FriendsList>
            {users.map((user) => (
              <FriendItem 
                key={user.id}
                onClick={() => navigate(`/profile/${user.id}`)}
              >
                <FriendAvatar>
                  {user.foto ? (
                    <img src={user.foto} alt={user.nome} />
                  ) : (
                    <DefaultAvatar size={48} />
                  )}
                </FriendAvatar>
                <FriendInfo>
                  <FriendName>{user.nickname}</FriendName>
                  <FriendStatus>{user.descricao}</FriendStatus>
                </FriendInfo>
              </FriendItem>
            ))}
          </FriendsList>
        </FriendsSidebar>
      </MainContent>
    </Container>
  )
}

export default Social
