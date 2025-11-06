import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { FiX, FiSend, FiSmile, FiPaperclip, FiLoader } from 'react-icons/fi'
import { AiOutlineRobot } from 'react-icons/ai'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import HalterModel from '../../../Componentes/HalterModelo3D/HalterModelWithErrorHandling'
import { useUser } from '../../../Contexts/UserContext'
import { gymbuddyIA } from '../../../Services/gymbuddyIA'
// Removido react-markdown para evitar dependência

interface Mensagem {
  id: string
  type: 'user' | 'ai'
  content: string
  time: Date
  sugestoes?: string[]
}

// Fun\u00e7\u00e3o simples para renderizar markdown b\u00e1sico
const renderMarkdown = (text: string) => {
  // Converter quebras de linha em <br/>
  let html = text.replace(/\n/g, '<br/>')
  
  // Negrito
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  
  // It\u00e1lico
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  
  // T\u00edtulos
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')
  
  // Listas
  html = html.replace(/^\u2022 (.+)$/gm, '<li>$1</li>')
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>')
  
  // C\u00f3digo inline
  html = html.replace(/`(.+?)`/g, '<code>$1</code>')
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}


const AIChat = () => {
  const [showChat, setShowChat] = useState(true)
  const [messages, setMessages] = useState<Mensagem[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sugestoesRapidas, setSugestoesRapidas] = useState<string[]>([])
  const { user } = useUser()
  
  // Refs para animações GSAP
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  // Animação de entrada com GSAP
  useEffect(() => {
    if (containerRef.current && headerRef.current && messagesRef.current && inputRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      // Animar container principal
      gsap.set(containerRef.current, { 
        opacity: 0, 
        scale: 0.9, 
        y: 30
      })
      
      tl.to(containerRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'power4.out'
      })
      
      // Animar elementos internos em sequência
      .from(headerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'back.out(1.4)'
      }, '-=0.3')
      
      .from(messagesRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.2')
      
      .from(inputRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power3.out'
      }, '-=0.3')
    }
  }, [])

  // Carregar dados do usuário e verificar status da IA
  useEffect(() => {
    const inicializarChat = async () => {
      if (user?.nome) {
        // Verificar se a IA está disponível
        const iaDisponivel = await gymbuddyIA.verificarStatus()
        
        const boasVindas: Mensagem = {
          id: 'welcome',
          type: 'ai',
          content: `Olá ${user.nome}! 👋\n\nSou seu Personal Trainer virtual do GymBuddy, alimentado por IA avançada (GPT-OSS-120B)! 🤖💪\n\n${iaDisponivel ? 
            'Estou 100% operacional e pronto para te ajudar com orientações personalizadas sobre treino, nutrição e muito mais!' : 
            'Estou com alguns problemas técnicos no momento, mas ainda posso te ajudar com o básico!'}
\nSobre o que gostaria de conversar hoje?`,
          time: new Date(),
          sugestoes: [
            'Monte um treino personalizado',
            'Analise meu perfil fitness',
            'Crie um plano nutricional',
            'Dicas para meu objetivo'
          ]
        }
        setMessages([boasVindas])
        setSugestoesRapidas(boasVindas.sugestoes || [])
      }
    }
    
    inicializarChat()
  }, [user])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage: Mensagem = {
      id: `msg_${Date.now()}`,
      type: 'user',
      content: input,
      time: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setSugestoesRapidas([])
    
    try {
      // Enviar mensagem para IA do backend
      const resposta = await gymbuddyIA.enviarMensagem(String(user?.id || 'user'), input)
      
      const aiMessage: Mensagem = {
        id: `msg_${Date.now() + 1}`,
        type: 'ai',
        content: resposta.mensagem,
        time: new Date(),
        sugestoes: resposta.sugestoes
      }
      
      setMessages(prev => [...prev, aiMessage])
      setSugestoesRapidas(resposta.sugestoes || [])
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      
      const errorMessage: Mensagem = {
        id: `msg_${Date.now() + 1}`,
        type: 'ai',
        content: 'Desculpe, tive um problema técnico. Minha IA está sendo atualizada! Tente novamente em alguns instantes. 🤖⚙️',
        time: new Date(),
        sugestoes: ['Tentar novamente', 'Verificar status da IA']
      }
      setMessages(prev => [...prev, errorMessage])
      setSugestoesRapidas(errorMessage.sugestoes || [])
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleSugestao = (sugestao: string) => {
    setInput(sugestao)
  }

  if (!showChat) {
    return (
      <MinimizedChat onClick={() => setShowChat(true)}>
        <AiOutlineRobot />
      </MinimizedChat>
    )
  }

  return (
    <Container ref={containerRef}>
      <Header ref={headerRef}>
        <Title>
          <AiOutlineRobot />
          <div>
            <h3>GymBuddy AI</h3>
            <span>Seu personal trainer virtual</span>
          </div>
        </Title>
        <CloseButton onClick={() => setShowChat(false)}>
          <FiX />
        </CloseButton>
      </Header>
      
      <Messages ref={messagesRef}>
        <WelcomeMessage>
          <div className="message-content">
            <h4>GymBuddy AI - Personal Trainer Inteligente</h4>
            <p>Powered by GPT-OSS-120B • IA avançada para fitness personalizado:</p>
            <div className="tags">
              <span onClick={() => handleSugestao('Crie um treino personalizado para mim')}>Treino Personalizado</span>
              <span onClick={() => handleSugestao('Analise meu perfil e objetivos')}>Análise Completa</span>
              <span onClick={() => handleSugestao('Monte um plano nutricional')}>Plano Nutricional</span>
              <span onClick={() => handleSugestao('Otimize meus resultados')}>Otimização IA</span>
            </div>
          </div>
          <div className="model-container">
            <Canvas 
              camera={{ position: [0, 0, 4], fov: 45 }}
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              onCreated={(state) => {
                console.log('Canvas criado:', state)
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />
              <HalterModel 
                position={[0, 0, 0]} 
                scale={0.8} 
                autoRotate={true}
              />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                makeDefault
              />
              <Environment preset="sunset" />
            </Canvas>
          </div>
        </WelcomeMessage>
        
        {messages.map((msg, index) => (
          <Message 
            key={msg.id} 
            className={msg.type}
            as={motion.div}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="content">
              {msg.type === 'ai' ? (
                renderMarkdown(msg.content)
              ) : (
                msg.content
              )}
            </div>
            <div className="time">
              {new Date(msg.time).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            {msg.sugestoes && msg.sugestoes.length > 0 && (
              <div className="sugestoes">
                {msg.sugestoes.map((sugestao, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleSugestao(sugestao)}
                    className="sugestao-btn"
                  >
                    {sugestao}
                  </button>
                ))}
              </div>
            )}
          </Message>
        ))}
        
        {isLoading && (
          <Message 
            className="ai"
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="content loading">
              <FiLoader className="spin" />
              <span>Coach GymBuddy está pensando...</span>
            </div>
          </Message>
        )}
      </Messages>
      
      <AnimatePresence mode="wait">
        {sugestoesRapidas.length > 0 && (
        <SugestoesRapidas
          as={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {sugestoesRapidas.map((sugestao, idx) => (
            <button 
              key={idx} 
              onClick={() => handleSugestao(sugestao)}
              className="sugestao-rapida"
            >
              {sugestao}
            </button>
          ))}
        </SugestoesRapidas>
        )}
      </AnimatePresence>
      
      <InputArea ref={inputRef}>
        <button className="attach">
          <FiPaperclip />
        </button>
        <input 
          type="text"
          placeholder="Pergunte sobre treino, dieta, suplementos..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
          disabled={isLoading}
        />
        <button className="emoji">
          <FiSmile />
        </button>
        <button 
          className="send" 
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          {isLoading ? <FiLoader className="spin" /> : <FiSend />}
        </button>
      </InputArea>
    </Container>
  )
}

const Container = styled.div`
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.15) 0%, rgba(227, 6, 19, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(227, 6, 19, 0.2);
  border-radius: 2rem;
  padding: 2rem;
  height: fit-content;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 0 30px rgba(227, 6, 19, 0.1);
  }
`

const MinimizedChat = styled.div`
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.3) 0%, rgba(227, 6, 19, 0.1) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 2rem;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  svg {
    font-size: 4rem;
    color: var(--primary);
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.3);
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 3rem;
    color: var(--primary);
  }
  
  h3 {
    font-size: 1.8rem;
    margin: 0;
  }
  
  span {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
  }
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  max-height: 40rem;
  
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 1rem;
  }
`

const WelcomeMessage = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  
  .message-content {
    flex: 1;
    
    h4 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .tags {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      
      span {
        background: rgba(227, 6, 19, 0.2);
        border: 1px solid rgba(227, 6, 19, 0.3);
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          background: rgba(227, 6, 19, 0.3);
          border-color: var(--primary);
          transform: translateY(-2px);
        }
      }
    }
  }
  
  .model-container {
    width: 200px;
    height: 150px;
    border-radius: 1rem;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(227, 6, 19, 0.1) 0%, rgba(227, 6, 19, 0.05) 100%);
    border: 1px solid rgba(227, 6, 19, 0.2);
    backdrop-filter: blur(10px);
    
    &:hover {
      border-color: rgba(227, 6, 19, 0.4);
      box-shadow: 0 0 20px rgba(227, 6, 19, 0.2);
    }
    
    canvas {
      border-radius: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    .model-container {
      width: 100%;
      height: 120px;
    }
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &.user {
    align-items: flex-end;
    
    .content {
      background: linear-gradient(135deg, #E30613, #B91C1C);
    }
  }
  
  &.ai {
    align-items: flex-start;
    
    .content {
      background: rgba(255, 255, 255, 0.1);
      
      /* Estilos para Markdown */
      h1, h2, h3, h4, h5, h6 {
        margin: 1rem 0 0.5rem 0;
        font-weight: 600;
      }
      
      p {
        margin: 0.5rem 0;
        line-height: 1.6;
      }
      
      ul, ol {
        margin: 0.5rem 0;
        padding-left: 2rem;
      }
      
      li {
        margin: 0.3rem 0;
      }
      
      strong {
        color: var(--primary);
        font-weight: 600;
      }
      
      code {
        background: rgba(227, 6, 19, 0.1);
        padding: 0.2rem 0.4rem;
        border-radius: 0.3rem;
        font-family: monospace;
      }
    }
    
    &.loading {
      .content {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        .spin {
          animation: spin 1s linear infinite;
        }
      }
    }
  }
  
  .content {
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    max-width: 80%;
    font-size: 1.4rem;
  }
  
  .time {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.4);
    padding: 0 0.5rem;
  }
  
  .sugestoes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
    max-width: 80%;
    
    .sugestao-btn {
      background: rgba(227, 6, 19, 0.1);
      border: 1px solid rgba(227, 6, 19, 0.3);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(227, 6, 19, 0.2);
        border-color: var(--primary);
        transform: translateY(-2px);
      }
    }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const SugestoesRapidas = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  
  .sugestao-rapida {
    background: rgba(227, 6, 19, 0.1);
    border: 1px solid rgba(227, 6, 19, 0.3);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(227, 6, 19, 0.2);
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
    }
  }
`

const InputArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 0.5rem;
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    padding: 0.5rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
    }
  }
  
  button {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      color: white;
    }
    
    &.send {
      background: linear-gradient(135deg, #E30613, #B91C1C);
      color: white;
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      
      &:hover {
        background: linear-gradient(135deg, #B91C1C, #E30613);
        transform: scale(1.1);
      }
    }
  }
`

export default AIChat
