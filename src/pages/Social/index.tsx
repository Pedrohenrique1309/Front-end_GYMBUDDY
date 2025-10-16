import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHeart, FiMessageCircle, FiChevronRight, FiSend, FiPlus } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../assets/avatarpadrao'
import CreatePostPopup from '../../components/PopUpCriarPost'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const API_BASE_URL = '/api/v1/gymbuddy'

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  position: relative;
`

// AI Chat Sidebar Components
const ChatSidebar = styled(motion.div)<{ isOpen?: boolean }>`
  position: fixed;
  left: ${props => props.isOpen ? '0' : '-380px'};
  top: 0;
  bottom: 0;
  width: 600px;
  background: linear-gradient(135deg, 
    rgba(26, 26, 26, 0.98) 0%,
    rgba(18, 18, 18, 0.98) 50%,
    rgba(22, 22, 22, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(229, 57, 53, 0.2);
  box-shadow: ${props => props.isOpen ? '8px 0 32px rgba(0, 0, 0, 0.4)' : 'none'};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateZ(0);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(229, 57, 53, 0.08) 0%,
      transparent 30%,
      transparent 70%,
      rgba(255, 87, 34, 0.05) 100%
    );
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, 
      rgba(229, 57, 53, 0.8) 0%,
      rgba(255, 87, 34, 0.6) 50%,
      rgba(229, 57, 53, 0.8) 100%
    );
    box-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
  }
`

const ChatToggleButton = styled(motion.div)<{ isOpen?: boolean }>`
  position: fixed;
  left: ${props => props.isOpen ? '590px' : '20px'};
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, 
    #E53935 0%, 
    #FF5722 50%,
    #E53935 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  box-shadow: 
    0 8px 32px rgba(229, 57, 53, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(229, 57, 53, 0.3),
      rgba(255, 87, 34, 0.3),
      rgba(229, 57, 53, 0.3)
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 
      0 12px 48px rgba(229, 57, 53, 0.6),
      inset 0 3px 6px rgba(255, 255, 255, 0.3),
      inset 0 -3px 6px rgba(0, 0, 0, 0.3);
      
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  svg {
    font-size: 24px;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
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
`

const Logo = styled.div`
  img {
    height: 40px;
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
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #E53935;
  }
`

const PostDescription = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0.8rem 0;
`

const PostHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  span {
    color: #E53935;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF5722;
    }
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

const PostsCount = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.4rem;
  font-weight: 500;
`

// Advanced AI Chat Components
const ChatOverlay = styled(motion.div)`
position: fixed;
top: 0;
left: 600px;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(8px);
z-index: 999;
cursor: pointer;
`

const ChatHeader = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(229, 57, 53, 0.5) 30%,
      rgba(255, 87, 34, 0.5) 70%,
      transparent 100%
    );
  }
`

const ChatTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #E53935 0%, #FF5722 50%, #FF8A65 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`

const ChatSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 0;
  font-weight: 300;
`

const Chat3DContainer = styled.div`
  width: 100%;
  height: 300px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;
`

const Chat3DPlaceholder = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  text-align: center;
  z-index: 1;
`

const ChatContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const ChatMessages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

const MessageBubble = styled.div<{ isUser?: boolean }>`
  max-width: 80%;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  font-size: 0.95rem;
  line-height: 1.5;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background: ${props => props.isUser 
    ? 'linear-gradient(135deg, #E53935 0%, #FF5722 100%)'
    : 'rgba(255, 255, 255, 0.05)'
  };
  color: white;
  border: ${props => props.isUser 
    ? 'none' 
    : '1px solid rgba(255, 255, 255, 0.1)'
  };
  box-shadow: ${props => props.isUser 
    ? '0 4px 20px rgba(229, 57, 53, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.2)'
  };
`

const ChatInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`

const ChatInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 0.95rem;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`

const ChatSendButton = styled(motion.button)`
  background: linear-gradient(135deg, #E53935 0%, #FF5722 100%);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 20px rgba(229, 57, 53, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(229, 57, 53, 0.6);
  }
  
  svg {
    font-size: 1.2rem;
  }
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
  description?: string
  hashtags: string[]
  likes: number
  comments: number
}

// Component
const Social = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [randomUsers, setRandomUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [showAiChat, setShowAiChat] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<{id: number, text: string, isUser: boolean}[]>([
    { id: 1, text: 'Olá! Sou seu assistente pessoal do GymBuddy. Como posso ajudar com seus treinos hoje?', isUser: false },
  ])
  const [showCreatePostPopup, setShowCreatePostPopup] = useState(false)

  useEffect(() => {
    loadUsers()
    loadPosts()
  }, [])

  useEffect(() => {
    filterPosts()
  }, [searchQuery, posts])

  useEffect(() => {
    if (users.length > 0) {
      generateRandomUsers()
    }
  }, [users])

  const loadPosts = async () => {
    try {
      console.log('🌐 Carregando posts do feed: http://localhost:3030/v1/gymbuddy/view/feed')
      const response = await fetch('http://localhost:3030/v1/gymbuddy/view/feed')
      
      if (response.ok) {
        const data = await response.json()
        console.log('📄 Resposta completa do /view/feed:', data)
        
        if (data?.view && Array.isArray(data.view)) {
          console.log('✅ Posts carregados do feed:', data.view.length, 'posts')
          console.log('📊 Status:', data.status, 'Itens:', data.itens)
          
          // ✅ Mapear dados do /view/feed (já vem com todos os dados!)
          const apiPosts = data.view.map((pub: any) => {
            // Extrair hashtags da descrição
            const hashtagMatches = pub.descricao?.match(/#\w+/g) || []
            const uniqueHashtags = [...new Set(hashtagMatches)]
            
            console.log(`📝 Post ${pub.id_publicacao}:`, {
              usuario: pub.nome_usuario,
              imagem: pub.imagem ? '✅ Tem' : '❌ Sem',
              descricao: pub.descricao,
              hashtags: uniqueHashtags.length
            })
            
            return {
              id: pub.id_publicacao, // 🔄 Campo correto
              user: {
                username: pub.nome_usuario || `@user${pub.id_user}`, // 🔄 Já vem pronto!
                avatar: pub.foto_perfil || '' // 🔄 Já vem pronto!
              },
              image: pub.imagem || '', 
              description: pub.descricao || '', 
              hashtags: uniqueHashtags,
              likes: pub.curtidas_count || 0,
              comments: pub.comentarios_count || 0,
              curtido: false, // TODO: verificar se usuário já curtiu
              location: pub.localizacao || '',
              date: pub.data_publicacao || ''
            }
          });
          
          console.log('🔄 Posts mapeados da API:', apiPosts);
          
          setPosts(apiPosts)
          return
        }
      }
      
      throw new Error('API não retornou dados válidos')
      
    } catch (error) {
      console.error('❌ Erro ao carregar posts da API:', error)
      console.log('🔄 Usando fallback mock data...')
      
      // Mock data para posts com usernames sincronizados
      setPosts([
        {
          id: 1,
          user: { username: '@joaosilva', avatar: '' },
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
          description: 'Treino de pernas hoje! Foco total na hipertrofia 💪',
          hashtags: ['#foco', '#treino', '#saude'],
          likes: 1709,
          comments: 10
        },
        {
          id: 2,
          user: { username: 'Tetano Pé', avatar: '' },
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
          description: 'Motivação em alta! Nunca desista dos seus sonhos',
          hashtags: ['#gym', '#motivation'],
          likes: 892,
          comments: 23
        },
        {
          id: 3,
          user: { username: '@pedrocosta', avatar: '' },
          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
          description: 'Pré-treino carregado! Hora de dar tudo de si',
          hashtags: ['#workout', '#fitness'],
          likes: 567,
          comments: 15
        },
        {
          id: 4,
          user: { username: '@anajulia', avatar: '' },
          image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500',
          description: 'Dicas de treino funcional para todos os níveis',
          hashtags: ['#training', '#healthy'],
          likes: 1234,
          comments: 45
        },
        {
          id: 5,
          user: { username: '@carlosfit', avatar: '' },
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500',
          description: 'Progresso é progresso, não importa quão pequeno seja',
          hashtags: ['#bodybuilding', '#progress'],
          likes: 445,
          comments: 8
        },
        {
          id: 6,
          user: { username: '@luciafernanda', avatar: '' },
          image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500',
          description: 'Alimentação saudável é a base de tudo! 🥗',
          hashtags: ['#nutricao', '#saude', '#alimentacao'],
          likes: 678,
          comments: 34
        }
      ])
    }
  }
  
  const filterPosts = () => {
    if (!searchQuery.trim()) {
      setFilteredPosts(posts)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = posts.filter(post => {
      // Busca por usuário que postou
      const userMatch = post.user.username.toLowerCase().includes(query)
      
      // Busca por hashtags
      const hashtagMatch = post.hashtags.some(tag => 
        tag.toLowerCase().includes(query)
      )
      
      // Busca por descrição
      const descriptionMatch = post.description?.toLowerCase().includes(query) || false
      
      return userMatch || hashtagMatch || descriptionMatch
    })
    
    setFilteredPosts(filtered)
  }

  const generateRandomUsers = () => {
    // Filtrar usuário logado e embaralhar
    const filteredUsers = users.filter(u => u.id !== user?.id)
    const shuffled = [...filteredUsers].sort(() => Math.random() - 0.5)
    // Mostrar apenas 6 usuários aleatórios
    setRandomUsers(shuffled.slice(0, 6))
  }

  const loadUsers = async () => {
    try {
      console.log('🌐 Carregando usuários da API...')
      const response = await fetch(`${API_BASE_URL}/usuario`)
      
      if (response.ok) {
        const data = await response.json()
        if (data?.usuarios) {
          console.log('✅ Usuários carregados da API:', data.usuarios.length, 'usuários')
          console.log('📋 Primeiros usuários:', data.usuarios.slice(0, 3).map((u: any) => `ID:${u.id} - ${u.nome} (${u.nickname})`))
          setUsers(data.usuarios)
          return // IMPORTANTE: sair aqui se API funcionou
        }
      }
      
      throw new Error('API não retornou dados válidos')
      
    } catch (error) {
      console.error('❌ Erro ao carregar usuários da API:', error)
      console.log('🔄 Usando fallback mock data com IDs reais...')
      // Mock data simulando API real (quando API não funciona)
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
          nome: 'Inimigo',
          nickname: 'Tetano Pé',
          foto: 'https://gymbuddystorage.blob.core.windows.net/fotos/1760027693377-download.png',
          descricao: 'fortin',
          publicacoes: 12
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
          id: 1004,
          nome: 'Ana Julia',
          nickname: '@anajulia',
          foto: '',
          descricao: 'Yoga e pilates 🧘 Instrutora certificada',
          publicacoes: 67
        },
        {
          id: 1005,
          nome: 'Carlos Mendes',
          nickname: '@carlosfit',
          foto: '',
          descricao: 'Bodybuilder natural. Preparação para campeonatos',
          publicacoes: 123
        },
        {
          id: 1006,
          nome: 'Lucia Fernanda',
          nickname: '@luciafernanda',
          foto: '',
          descricao: 'Nutricionista esportiva 🥗 Consultoria online',
          publicacoes: 78
        },
        {
          id: 1007,
          nome: 'Rafael Almeida',
          nickname: '@rafaelstrong',
          foto: '',
          descricao: 'Powerlifter profissional. Records pessoais toda semana',
          publicacoes: 156
        },
        {
          id: 1008,
          nome: 'Camila Oliveira',
          nickname: '@camilafit',
          foto: '',
          descricao: 'Transformação corporal é minha especialidade 🔥',
          publicacoes: 92
        },
        {
          id: 1009,
          nome: 'Bruno Cardoso',
          nickname: '@brunocardio',
          foto: '',
          descricao: 'Corredor de maratôna. Vida ativa sempre! 🏃‍♂️',
          publicacoes: 201
        },
        {
          id: 1010,
          nome: 'Isabella Costa',
          nickname: '@isabellacoach',
          foto: '',
          descricao: 'Life Coach e Personal Trainer. Mente e corpo em equilíbrio',
          publicacoes: 134
        }
      ])
    }
  }
  

  const handleChatSubmit = () => {
    if (!chatMessage.trim()) return

    const newMessage = {
      id: chatMessages.length + 1,
      text: chatMessage,
      isUser: true
    }

    setChatMessages(prev => [...prev, newMessage])
    setChatMessage('')

    // Simular resposta da IA após um delay
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        text: 'Entendi! Vou ajudar você com isso. Que tipo de exercício você gostaria de focar hoje?',
        isUser: false
      }
      setChatMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAiChat(false)
    }
  }

  const toggleAiChat = () => {
    setShowAiChat(!showAiChat)
  }

  const handleCreatePost = () => {
    setShowCreatePostPopup(true)
  }

  const handleCloseCreatePost = () => {
    setShowCreatePostPopup(false)
  }

  const handleOpenCreatePost = () => {
    setShowCreatePostPopup(true)
  }

return (
  <Container>
    {/* Chat IA Moderno */}
    <AnimatePresence>
      {showAiChat && (
        <ChatOverlay 
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
    
    <ChatSidebar
      isOpen={showAiChat}
      initial={false}
      animate={{
        x: showAiChat ? 0 : -420,
        opacity: showAiChat ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <ChatHeader>
        <ChatTitle>GymBuddy AI</ChatTitle>
        <ChatSubtitle>Seu assistente pessoal de treino</ChatSubtitle>
      </ChatHeader>
      
      <Chat3DContainer>
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={1.5}>
            <MeshDistortMaterial
              color="#E53935"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </Chat3DContainer>
      
      <ChatContent>
        <ChatMessages>
          {chatMessages.map((message) => (
            <MessageBubble key={message.id} isUser={message.isUser}>
              {message.text}
            </MessageBubble>
          ))}
        </ChatMessages>
        
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Digite sua pergunta..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
          />
          <ChatSendButton 
            onClick={handleChatSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend />
          </ChatSendButton>
        </ChatInputContainer>
      </ChatContent>
    </ChatSidebar>
    
    {/* Botão de Toggle do Chat */}
    <ChatToggleButton
      isOpen={showAiChat}
      onClick={toggleAiChat}
      initial={false}
      animate={{
        x: showAiChat ? 570 : 20,
        scale: showAiChat ? 0.9 : 1
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      whileHover={{ scale: showAiChat ? 1.0 : 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiChevronRight />
    </ChatToggleButton>
    
    {/* Cabeçalho */}
    <Header>
      <Logo>
        <img src="/gymbuddy-logo.png" alt="GYM BUDDY" />
      </Logo>
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
        
        {/* Debug Info */}
        {filteredPosts.length === 0 && (
          <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>
            <p>📄 Nenhum post encontrado</p>
            <p>🔍 Posts carregados: {posts.length}</p>
            <p>🔍 Query de busca: "{searchQuery}"</p>
          </div>
        )}
          
          <PostsGrid>
            {filteredPosts.map((post) => (
              <PostCard key={post.id}>
                {/* Debug para cada post */}

                <div style={{ 
                  position: 'absolute', 
                  top: '5px', 
                  left: '5px', 
                  background: 'rgba(0,0,0,0.7)', 
                  color: 'white', 
                  padding: '4px', 
                  fontSize: '10px',
                  borderRadius: '4px',
                  zIndex: 10
                }}>
                  ID: {post.id} | User: {post.user.username} | Img: {post.image ? '✅' : '❌'}
                </div>
                
                {post.image && (
                  <PostImage>
                    <img 
                      src={post.image} 
                      alt="Post" 
                      onError={(e) => {
                        console.log('❌ Erro ao carregar imagem:', post.image?.substring(0, 50) + '...')
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                      onLoad={() => {
                        console.log('✅ Imagem carregada com sucesso para post', post.id)
                      }}
                    />
                  </PostImage>
                )}
                <PostFooter>
                  <PostUser>
                    <UserAvatar>
                      {post.user.avatar ? (
                        <img src={post.user.avatar} alt={post.user.username} />
                      ) : (
                        <DefaultAvatar size={32} />
                      )}
                    </UserAvatar>
                    <Username onClick={() => {
                      // Navegar para perfil do usuário que postou
                      console.log('🖱️ Clique no username:', post.user.username)
                      const foundUser = users.find(u => u.nickname === post.user.username)
                      console.log('🔍 Usuário encontrado:', foundUser)
                      
                      if (foundUser) {
                        console.log('✅ Navegando para perfil ID:', foundUser.id)
                        navigate(`/profile/${foundUser.id}`)
                      } else {
                        console.log('❌ Usuário não encontrado para username:', post.user.username)
                        console.log('📋 Usuários disponíveis:', users.map(u => `${u.id}: ${u.nome} (${u.nickname})`))
                      }
                    }}>{post.user.username || '@usuário'}</Username>
                  </PostUser>
                  {post.description && (
                    <PostDescription>{post.description}</PostDescription>
                  )}
                  <PostHashtags>
                    {post.hashtags.map((tag, index) => (
                      <span 
                        key={index} 
                        onClick={() => setSearchQuery(tag)}
                        style={{cursor: 'pointer'}}
                      >{tag}</span>
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
            {randomUsers.map((user) => (
              <FriendItem 
                key={user.id}
                onClick={() => {
                  console.log('🖱️ Clique no usuário da sidebar:', user.nome, `(${user.nickname})`)
                  console.log('✅ Navegando para perfil ID:', user.id)
                  navigate(`/profile/${user.id}`)
                }}
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
                  <PostsCount>{user.publicacoes} posts</PostsCount>
                </FriendInfo>
              </FriendItem>
            ))}
          </FriendsList>
        </FriendsSidebar>
      </MainContent>
      
      {/* Botão Flutuante de Criar Post */}
      <CreatePostButton
        onClick={handleOpenCreatePost}
        initial={{ 
          opacity: 0, 
          scale: 0.3, 
          rotate: -180 // Apenas girando, sem movimento vertical
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0 // Para de girar
        }}
        transition={{ 
          duration: 1.2, 
          delay: 0.5,
          type: "spring",
          stiffness: 120,
          damping: 12,
          // Efeito de "quique" ao chegar
          bounce: 0.6
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 15,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        style={{ opacity: showCreatePostPopup ? 0 : 1, pointerEvents: showCreatePostPopup ? 'none' : 'auto' }}
      >
        <FiPlus />
      </CreatePostButton>
      
      {/* Popup de Criar Post */}
      <CreatePostPopup
        isOpen={showCreatePostPopup}
        onClose={handleCloseCreatePost}
        onPostCreated={() => {
          console.log('📱 Post criado, recarregando posts...')
          loadPosts() // Recarregar posts após criação
        }}
      />
    </Container>
  )
}

// Botão Flutuante de Criar Post
const CreatePostButton = styled(motion.button)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #E53935, #FF5722);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 998;
  
  box-shadow: 
    0 15px 35px rgba(229, 57, 53, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #E53935, #FF5722, #E53935);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  svg {
    font-size: 2.8rem;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
  
  &:hover {
    box-shadow: 
      0 20px 45px rgba(229, 57, 53, 0.5),
      0 8px 20px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
    box-shadow: 
      0 10px 25px rgba(229, 57, 53, 0.3),
      0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Animação de pulsação sutil */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(229, 57, 53, 0.3) 0%, transparent 70%);
    animation: pulse 2s infinite;
    z-index: -1;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
  }
  
  /* Responsivo */
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 5.5rem;
    height: 5.5rem;
    
    svg {
      font-size: 2.4rem;
    }
  }
`;

export default Social
