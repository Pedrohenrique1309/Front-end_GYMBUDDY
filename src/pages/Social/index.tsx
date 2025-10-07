import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiSearch, FiHeart, FiMessageCircle, FiChevronRight } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../assets/default-avatar'

const API_BASE_URL = '/api/v1/gymbuddy'

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: #121212;
  color: white;
  position: relative;
`

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  background: #E53935;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SidebarIcon = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 60px;
  right: 0;
  height: 70px;
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
  padding: 100px 2rem 2rem 90px;
  max-width: 1400px;
  margin: 0 auto;
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
  background: #1E1E1E;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
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
  gap: 0.3rem;
`

const FriendName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`

const FriendStatus = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.3;
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
          descricao: 'Foco no treino! 💪',
          publicacoes: 45
        },
        {
          id: 3,
          nome: 'Maria Santos',
          nickname: '@mariafitness',
          foto: '',
          descricao: 'Personal Trainer',
          publicacoes: 89
        },
        {
          id: 4,
          nome: 'Pedro Costa',
          nickname: '@pedrocosta',
          foto: '',
          descricao: 'Crossfit lover',
          publicacoes: 34
        },
        {
          id: 5,
          nome: 'Ana Julia',
          nickname: '@anajulia',
          foto: '',
          descricao: 'Yoga e pilates',
          publicacoes: 67
        }
      ])
    }
  }
  

  return (
    <Container>
      {/* Barra Lateral Vermelha */}
      <Sidebar>
        <SidebarIcon>
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
