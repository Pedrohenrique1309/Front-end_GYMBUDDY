import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FiUsers, FiArrowRight } from 'react-icons/fi'

const SocialNetworkButton = () => {
  const navigate = useNavigate()

  return (
    <FloatingButton
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(227, 6, 19, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/rede')}
    >
      <IconWrapper>
        <FiUsers />
      </IconWrapper>
      <TextContent>
        <span>Acessar</span>
        <strong>Rede GymBuddy</strong>
      </TextContent>
      <ArrowIcon>
        <FiArrowRight />
      </ArrowIcon>
    </FloatingButton>
  )
}

// Styled Components
const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background: linear-gradient(135deg, var(--primary) 0%, rgba(227, 6, 19, 0.8) 100%);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  padding: 1.2rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  z-index: 999;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, var(--primary), transparent);
    border-radius: 3rem;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  
  svg {
    font-size: 2rem;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  span {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 300;
  }
  
  strong {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
  
  @media (max-width: 768px) {
    span {
      font-size: 1rem;
    }
    
    strong {
      font-size: 1.3rem;
    }
  }
`

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  animation: slideRight 1.5s ease-in-out infinite;
  
  svg {
    font-size: 2rem;
  }
  
  @keyframes slideRight {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
  }
`

export default SocialNetworkButton
