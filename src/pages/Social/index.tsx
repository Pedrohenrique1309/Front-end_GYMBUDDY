import { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiSend, FiUser } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../assets/default-avatar'

const API_BASE_URL = '/api/v1/gymbuddy'

export interface User {
  id: number
  nome: string
  nickname: string
  foto?: string
  descricao?: string
  publicacoes?: number
}

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const Social = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: 'Estou pronto para te ajudar a otimizar seus treinos e te conectar com novas pessoas 💪',
    sender: 'ai',
    timestamp: new Date()
  }])
  const [newMessage, setNewMessage] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    loadUsers()
    initParticles()
  }, [])

  const initParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles: any[] = []
    const particleCount = 50
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      })
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(227, 6, 19, ${p.opacity})`
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
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
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setNewMessage('')
    
    // Simular resposta da IA
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: 'Ótima pergunta! Vamos trabalhar juntos para alcançar seus objetivos. 🎯',
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    }, 1500)
  }

  return (
    <Container>
      <ParticleCanvas ref={canvasRef} />
      
      <MainTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Como seus amigos estão<br/>treinando hoje?
      </MainTitle>
      
      <ContentWrapper>
        {/* Chat IA - Coluna Esquerda */}
        <ChatSection>
          <AICore
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <CoreInner />
            <CorePulse />
          </AICore>
          
          <IntroText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Estou pronto para te ajudar a otimizar seus treinos e te conectar com novas pessoas 💪
          </IntroText>
          
          <ChatContainer>
            <MessagesArea>
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <MessageBubble
                    key={msg.id}
                    className={msg.sender}
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {msg.text}
                  </MessageBubble>
                ))}
              </AnimatePresence>
            </MessagesArea>
            
            <MessageInput>
              <input
                type="text"
                placeholder="Envie uma mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <SendButton
                onClick={handleSendMessage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiSend />
              </SendButton>
            </MessageInput>
          </ChatContainer>
        </ChatSection>
        
        {/* Lista de Usuários - Coluna Direita */}
        <UsersSection>
          <SectionHeader
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Conheça novas pessoas
          </SectionHeader>
          
          <SearchInput
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <FiSearch />
            <input
              type="text"
              placeholder="Buscar pessoas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchInput>
          
          <UsersList>
            <AnimatePresence>
              {users
                .filter(u => 
                  searchQuery === '' || 
                  u.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  u.nickname.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((user, index) => (
                  <UserCard
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => navigate(`/profile/${user.id}`)}
                  >
                    <UserAvatar>
                      {user.foto ? (
                        <img src={user.foto} alt={user.nome} />
                      ) : (
                        <DefaultAvatar size={50} />
                      )}
                    </UserAvatar>
                    <UserInfo>
                      <UserName>{user.nome}</UserName>
                      <UserNickname>{user.nickname}</UserNickname>
                      <UserDescription>{user.descricao}</UserDescription>
                    </UserInfo>
                  </UserCard>
                ))}
            </AnimatePresence>
          </UsersList>
        </UsersSection>
      </ContentWrapper>
    </Container>
  )
}

// Animações
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(227, 6, 19, 0.3); }
  50% { box-shadow: 0 0 40px rgba(227, 6, 19, 0.6); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
  color: white;
  padding: 10rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`

const ParticleCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.3;
  z-index: 1;
`

const MainTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #FFFFFF 0%, #E30613 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  max-width: 140rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const AICore = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CoreInner = styled.div`
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(227, 6, 19, 0.8) 0%, rgba(227, 6, 19, 0.3) 60%, transparent 100%);
  border-radius: 50%;
  animation: ${pulse} 3s ease-in-out infinite, ${float} 6s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle, rgba(227, 6, 19, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    animation: ${pulse} 3s ease-in-out infinite reverse;
  }
`

const CorePulse = styled.div`
  position: absolute;
  inset: -30px;
  border: 2px solid rgba(227, 6, 19, 0.3);
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`

const IntroText = styled(motion.p)`
  text-align: center;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  max-width: 500px;
  line-height: 1.6;
`

const ChatContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 400px;
`

const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(227, 6, 19, 0.5);
    border-radius: 3px;
  }
`

const MessageBubble = styled(motion.div)`
  padding: 1.2rem 1.6rem;
  border-radius: 1.5rem;
  max-width: 70%;
  font-size: 1.4rem;
  line-height: 1.5;
  
  &.user {
    background: rgba(227, 6, 19, 0.2);
    border: 1px solid rgba(227, 6, 19, 0.3);
    align-self: flex-end;
    margin-left: auto;
  }
  
  &.ai {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    align-self: flex-start;
  }
`

const MessageInput = styled.div`
  display: flex;
  gap: 1rem;
  
  input {
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    padding: 1.2rem 2rem;
    color: white;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
      border-color: rgba(227, 6, 19, 0.5);
      box-shadow: 0 0 20px rgba(227, 6, 19, 0.2);
    }
  }
`

const SendButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(227, 6, 19, 0.2);
  border: 1px solid rgba(227, 6, 19, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(227, 6, 19, 0.3);
    animation: ${glow} 1s ease-in-out infinite;
  }
  
  svg {
    font-size: 2rem;
  }
`

const UsersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SectionHeader = styled(motion.h2)`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
`

const SearchInput = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 1.2rem 2rem;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
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
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
    }
  }
`

const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 1rem;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(227, 6, 19, 0.5);
    border-radius: 3px;
  }
`

const UserCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(227, 6, 19, 0.3);
    animation: ${glow} 2s ease-in-out infinite;
  }
`

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(227, 6, 19, 0.3);
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const UserName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin: 0;
`

const UserNickname = styled.p`
  font-size: 1.3rem;
  color: rgba(227, 6, 19, 0.8);
  margin: 0;
`

const UserDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`

export default Social
