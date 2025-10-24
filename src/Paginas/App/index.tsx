import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import SocialNetworkButton from '../../Componentes/BotaoRedeGymBuddy'

const App = () => {
  return (
    <AppContainer>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Title>
            Baixe o <span className="highlight">GYM BUDDY</span>
          </Title>
          
          <Subtitle>
            Tenha seu personal trainer no bolso. Disponível para iOS e Android.
          </Subtitle>
          
          <DownloadButtons>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <DownloadButton 
                href="#" 
                className="google-play"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGooglePlay className="icon" />
                <div className="text">
                  <span className="small">ANDROID APP ON</span>
                  <span className="large">Google Play</span>
                </div>
              </DownloadButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <DownloadButton 
                href="#" 
                className="app-store"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaApple className="icon" />
                <div className="text">
                  <span className="small">Download on the</span>
                  <span className="large">App Store</span>
                </div>
              </DownloadButton>
            </motion.div>
          </DownloadButtons>
        </motion.div>
      </ContentWrapper>
      
      <SocialNetworkButton />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(227, 6, 19, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`

const ContentWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2.4rem;
  line-height: 1.2;
  
  .highlight {
    background: linear-gradient(135deg, var(--primary) 0%, #ff4757 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const Subtitle = styled.p`
  font-size: 2rem;
  color: var(--text-secondary, #B8B8B8);
  margin-bottom: 5rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }
`

const DownloadButtons = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`

const DownloadButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 22rem;
  
  .icon {
    font-size: 3.2rem;
    flex-shrink: 0;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    
    .small {
      font-size: 1.2rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .large {
      font-size: 2rem;
      font-weight: 600;
      margin-top: 0.2rem;
    }
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.2);
  }
  
  &.google-play:hover .icon {
    color: #34A853;
  }
  
  &.app-store:hover .icon {
    color: #007AFF;
  }
`;

export default App
