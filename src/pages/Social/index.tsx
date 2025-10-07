import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiSearch } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
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
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredUser, setHoveredUser] = useState<User | null>(null)
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null)

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
        setSuggestedUsers(data.usuarios.slice(0, 6))
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error)
      // Mock data
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
        }
      ])
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
      <MainContent>
        <LeftColumn>
          <ProfileSidebar />
        </LeftColumn>

        <CenterColumn>
          <SearchSection>
            <SearchBar>
              <FiSearch />
              <input 
                type="text" 
                placeholder="Buscar na rede GymBuddy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>
          </SearchSection>
          
          <AIChat />
          <PostFeed 
            posts={posts}
            setPosts={setPosts}
            loadPosts={loadPosts}
            searchQuery={searchQuery}
          />
        </CenterColumn>

        <RightColumn>
          <RecentActivity />
          <FriendsList 
            suggestedUsers={suggestedUsers}
            onUserHover={handleUserHover}
            onUserLeave={handleUserLeave}
          />
        </RightColumn>
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
  padding-top: 2rem;
`

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr 30rem;
  gap: 2rem;
  padding: 2rem 4rem;
  max-width: 160rem;
  margin: 0 auto;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SearchSection = styled.div`
  margin-bottom: 1.5rem;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  padding: 1rem 2rem;
  width: 100%;
  max-width: 50rem;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 0 20px rgba(227, 6, 19, 0.1);
  }
  
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
      color: rgba(255, 255, 255, 0.3);
    }
    
    &:focus {
      outline: none;
    }
  }
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
