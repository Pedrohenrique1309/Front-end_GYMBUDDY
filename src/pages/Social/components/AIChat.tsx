import { useState } from 'react'
import styled from 'styled-components'
import { FiX, FiSend, FiSmile, FiPaperclip } from 'react-icons/fi'
import { AiOutlineRobot } from 'react-icons/ai'

const AIChat = () => {
  const [showChat, setShowChat] = useState(true)
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (!input.trim()) return
    
    setMessages(prev => [...prev, {
      type: 'user',
      content: input,
      time: new Date()
    }])
    
    // Simular resposta da IA
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'ai',
        content: 'Ótima pergunta! Vou te ajudar com seu treino...',
        time: new Date()
      }])
    }, 1000)
    
    setInput('')
  }

  if (!showChat) {
    return (
      <MinimizedChat onClick={() => setShowChat(true)}>
        <AiOutlineRobot />
      </MinimizedChat>
    )
  }

  return (
    <Container>
      <Header>
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
      
      <Messages>
        <WelcomeMessage>
          <h4>Em seu último treino você progrediu com carga em 2 exercícios.</h4>
          <div className="tags">
            <span>Hipertrofia</span>
            <span>Dieta</span>
            <span>Cardio</span>
          </div>
        </WelcomeMessage>
        
        {messages.map((msg, index) => (
          <Message key={index} className={msg.type}>
            <div className="content">{msg.content}</div>
            <div className="time">
              {new Date(msg.time).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </Message>
        ))}
      </Messages>
      
      <InputArea>
        <button className="attach">
          <FiPaperclip />
        </button>
        <input 
          type="text"
          placeholder="Me ajude no meu treino?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="emoji">
          <FiSmile />
        </button>
        <button className="send" onClick={handleSendMessage}>
          <FiSend />
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
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &.user {
    align-items: flex-end;
    
    .content {
      background: var(--primary);
    }
  }
  
  &.ai {
    align-items: flex-start;
    
    .content {
      background: rgba(255, 255, 255, 0.1);
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
      background: var(--primary);
      color: white;
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      
      &:hover {
        background: var(--primary-dark);
        transform: scale(1.1);
      }
    }
  }
`

export default AIChat
