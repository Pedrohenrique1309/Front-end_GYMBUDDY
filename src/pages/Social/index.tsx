import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiSearch, FiHeart, FiMessageCircle, FiChevronRight } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import { useHeader } from '../../contexts/HeaderContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../assets/default-avatar'
import AIChat from './components/AIChat'
import PostFeed from './components/PostFeed'
import FriendsList from './components/FriendsList'
import ProfileSidebar from './components/ProfileSidebar'
import RecentActivity from './components/RecentActivity'
const API_BASE_URL = '/api/v1/gymbuddy'

export interface User {
  id: number
  nome: string
  nickname: string
  foto?: string
  descricao?: string
  publicacoes?: number
}

export interface Post {
  id: number
  usuario: User
  conteudo: string
  imagem?: string
  curtidas: number
  comentarios: number
  compartilhamentos: number
  tempo: string
  curtido?: boolean
}

const Social = () => {
  const { user } = useUser()
  const { setHeaderVisible } = useHeader()
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredUser, setHoveredUser] = useState<User | null>(null)
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null)
  const [showAIChat, setShowAIChat] = useState(false)

  useEffect(() => {
    loadPosts()
    loadSuggestedUsers()
  }, [])

  const loadPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/publicacao`)
      const data = await response.json()
      if (data?.data) {
        setPosts(data.data)
      }
    } catch (error) {
      console.error('Erro ao carregar posts:', error)
      // Mock data para desenvolvimento
      setPosts([
        {
          id: 1,
          usuario: {
            id: 1,
            nome: 'Marcus Silva',
            nickname: '@marcus_silva22',
            foto: '',
            publicacoes: 1709
          },
          conteudo: '#foco #treino #semdor',
          imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
          curtidas: 1709,
          comentarios: 10,
          compartilhamentos: 5,
          tempo: '2h atrás',
          curtido: false
        },
        {
          id: 2,
          usuario: {
            id: 2,
            nome: 'Ana Costa',
            nickname: '@ana.fitness',
            foto: '',
            publicacoes: 892
          },
          conteudo: 'Treino de hoje completo! 💪 #gymlife',
          imagem: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600',
          curtidas: 456,
          comentarios: 23,
          compartilhamentos: 8,
          tempo: '4h atrás',
          curtido: true
        }
      ])
    }
  }

  const loadSuggestedUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/usuario`)
      const data = await response.json()
      if (data?.usuarios) {
        // Filtrar usuário logado da lista
        const filteredUsers = data.usuarios.filter((usuario: User) => usuario.id !== user?.id)
        setSuggestedUsers(filteredUsers)
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error)
      // Mock data - excluindo o usuário logado
      setSuggestedUsers([
        {
          id: 3,
          nome: 'Gabriela Velloso',
          nickname: '@g_velloso',
          foto: '',
          descricao: 'Foco no progresso, 10kgs perdidos!',
          publicacoes: 24
        },
        {
          id: 4,
          nome: 'Rodrigo Alves',
          nickname: '@rodrigoAlves',
          foto: '',
          descricao: 'Treinando e mantendo sempre o foco!',
          publicacoes: 156
        },
        {
          id: 5,
          nome: 'Mariana Santos',
          nickname: '@mari_fit',
          foto: '',
          descricao: 'Crossfit e funcional todos os dias',
          publicacoes: 89
        },
        {
          id: 6,
          nome: 'Carlos Eduardo',
          nickname: '@carlos_gym',
          foto: '',
          descricao: 'Powerlifting é minha paixão',
          publicacoes: 203
        }
      ].filter(u => u.id !== user?.id))
    }
  }

  const handleUserHover = (user: User) => {
    if (hoverTimer) clearTimeout(hoverTimer)
    
    const timer = setTimeout(() => {
      setHoveredUser(user)
    }, 1700)
    
    setHoverTimer(timer)
  }

  const handleUserLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      setHoverTimer(null)
    }
    setHoveredUser(null)
  }

  return (
    <Container>
      {/* Chat IA Minimizado - Lado Esquerdo */}
      <AIChatSidebar className={showAIChat ? 'expanded' : ''}>
        {!showAIChat ? (
          <MinimizedAIButton onClick={() => setShowAIChat(true)}>
            <FiChevronRight className="arrow" />
          </MinimizedAIButton>
        ) : (
          <ExpandedAIChat>
            <AIChat />
            <CloseAIButton onClick={() => setShowAIChat(false)}>
              ✕
            </CloseAIButton>
          </ExpandedAIChat>
        )}
      </AIChatSidebar>

      {/* Background Overlay quando AI Chat está aberto */}
      {showAIChat && <Overlay onClick={() => setShowAIChat(false)} />}

      <MainContent>
        <ContentArea>
          <Header>
            <h1>Como seus amigos estão<br/>treinando hoje?</h1>
            <SearchBar>
              <FiSearch />
              <input 
                type="text" 
                placeholder="Buscar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>
          </Header>

          <PostsSection>
            <SectionTitle>Posts recentes</SectionTitle>
            <PostsGrid>
              {posts.filter(post => 
                searchQuery === '' || 
                post.conteudo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.usuario.nome.toLowerCase().includes(searchQuery.toLowerCase())
              ).map(post => (
                <PostCard key={post.id}>
                  <PostImage>
                    {post.imagem && <img src={post.imagem} alt="Post" />}
                    <PostOverlay>
                      <PostText>{post.conteudo}</PostText>
                    </PostOverlay>
                  </PostImage>
                  <PostFooter>
                    <UserInfo onClick={() => navigate(`/profile/${post.usuario.id}`)}>
                      {post.usuario.foto ? (
                        <img src={post.usuario.foto} alt={post.usuario.nome} />
                      ) : (
                        <DefaultAvatar size={32} />
                      )}
                      <span>{post.usuario.nickname}</span>
                    </UserInfo>
                    <PostStats>
                      <StatItem>
                        <FiHeart />
                        <span>{post.curtidas}</span>
                      </StatItem>
                      <StatItem>
                        <FiMessageCircle />
                        <span>{post.comentarios}</span>
                      </StatItem>
                    </PostStats>
                  </PostFooter>
                </PostCard>
              ))}
            </PostsGrid>
          </PostsSection>
        </ContentArea>

        <FriendsSection>
          <SearchBarTop>
            <input type="text" placeholder="Buscar" />
          </SearchBarTop>
          
          <FriendsTitle>Amigos</FriendsTitle>
          <FriendsList 
            suggestedUsers={suggestedUsers}
            onUserHover={handleUserHover}
            onUserLeave={handleUserLeave}
          />
        </FriendsSection>
      </MainContent>

      {/* User Hover Card */}
      <AnimatePresence>
        {hoveredUser && (
          <HoverCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <HoverCardHeader>
              {hoveredUser.foto ? (
                <img src={hoveredUser.foto} alt={hoveredUser.nome} />
              ) : (
                <DefaultAvatar size={80} />
              )}
            </HoverCardHeader>
            <HoverCardContent>
              <h3>{hoveredUser.nome}</h3>
              <span>{hoveredUser.nickname}</span>
              <p>{hoveredUser.descricao}</p>
              <div className="stats">
                <span>{hoveredUser.publicacoes || 0} publicações</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        )}
      </AnimatePresence>
    </Container>
  )
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: #0A0A0A;
  color: white;
  position: relative;
`

const AIChatSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  background: var(--primary);
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &.expanded {
    width: 400px;
    background: rgba(227, 6, 19, 0.15);
    backdrop-filter: blur(20px);
    align-items: stretch;
    justify-content: flex-start;
  }
`

const MinimizedAIButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  position: relative;
  
  .arrow {
    font-size: 2rem;
    animation: pulse-arrow 2s ease-in-out infinite;
    transform: rotate(90deg);
  }
  
  @keyframes pulse-arrow {
    0%, 100% {
      transform: rotate(90deg) translateX(0);
      opacity: 0.7;
    }
    50% {
      transform: rotate(90deg) translateX(3px);
      opacity: 1;
    }
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    
    .arrow {
      animation-duration: 0.8s;
      transform: rotate(90deg) scale(1.1);
    }
  }
`

const ExpandedAIChat = styled.div`
  flex: 1;
  padding: 2rem;
  position: relative;
`

const CloseAIButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  padding: 10rem 2rem 2rem 80px;
  max-width: 140rem;
  margin: 0 auto;
  min-height: 100vh;
  transition: all 0.5s ease;
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 3rem;
    margin: 0;
    line-height: 1.2;
    color: white;
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  padding: 1rem 2rem;
  min-width: 300px;
  
  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 2rem;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
    }
  }
`

const PostsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: white;
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const PostCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`

const PostImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PostOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
`

const PostText = styled.p`
  color: white;
  font-size: 1.4rem;
  margin: 0;
  font-weight: 600;
`

const PostFooter = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    object-fit: cover;
  }
  
  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2D2D2D;
  }
  
  &:hover {
    transform: scale(1.05);
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
  color: #666;
  
  svg {
    font-size: 1.6rem;
  }
  
  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`

const FriendsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SearchBarTop = styled.div`
  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 3rem;
    padding: 1rem 2rem;
    color: white;
    font-size: 1.4rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }
`

const FriendsTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: white;
`

const HoverCard = styled(motion.div)`
  position: fixed;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  overflow: hidden;
  width: 30rem;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
`

const HoverCardHeader = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, rgba(227, 6, 19, 0.5) 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
  }
`

const HoverCardContent = styled.div`
  padding: 2rem;
  text-align: center;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  span {
    color: var(--primary);
    font-size: 1.4rem;
  }
  
  p {
    margin: 1.5rem 0;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
  
  .stats {
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.3rem;
    }
  }
`

export default Social
