import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Detectar tema atual
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme')
    setIsDarkMode(theme !== 'light')
    
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme')
      setIsDarkMode(currentTheme !== 'light')
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <AppContainer>
      {/* Elementos decorativos do background */}
      <BackgroundElements>
        <FloatingShape className="shape-1" />
        <FloatingShape className="shape-2" />
        <FloatingShape className="shape-3" />
        <FloatingShape className="shape-4" />
        <GridPattern />
        <OrbitalRings />
        <GlowOrb className="glow-1" />
        <GlowOrb className="glow-2" />
      </BackgroundElements>
      
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
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary, linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  position: relative;
  transition: background 0.3s ease;
  overflow: hidden;
  
  [data-theme="light"] & {
    background: linear-gradient(135deg, 
      var(--md-sys-color-surface) 0%, 
      var(--md-sys-color-surface-container-low) 100%
    );
  }
  
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
    
    [data-theme="light"] & {
      background: radial-gradient(
        ellipse at center,
        rgba(227, 6, 19, 0.05) 0%,
        transparent 50%
      );
    }
  }
`

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.1) 0%, 
    rgba(227, 6, 19, 0.05) 50%,
    transparent 100%
  );
  filter: blur(1px);
  animation: float 20s ease-in-out infinite;
  
  [data-theme="light"] & {
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.06) 0%, 
      rgba(227, 6, 19, 0.02) 50%,
      transparent 100%
    );
  }
  
  &.shape-1 {
    width: 20rem;
    height: 20rem;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
    animation-duration: 25s;
  }
  
  &.shape-2 {
    width: 15rem;
    height: 15rem;
    top: 70%;
    right: 8%;
    animation-delay: -5s;
    animation-duration: 30s;
  }
  
  &.shape-3 {
    width: 12rem;
    height: 12rem;
    top: 40%;
    left: 85%;
    animation-delay: -10s;
    animation-duration: 22s;
  }
  
  &.shape-4 {
    width: 18rem;
    height: 18rem;
    top: 20%;
    right: 70%;
    animation-delay: -15s;
    animation-duration: 28s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-20px) rotate(90deg);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-10px) rotate(180deg);
      opacity: 0.4;
    }
    75% {
      transform: translateY(-30px) rotate(270deg);
      opacity: 0.5;
    }
  }
`

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black 0%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black 0%, transparent 100%);
  animation: gridShift 60s linear infinite;
  
  [data-theme="light"] & {
    background-image: 
      linear-gradient(rgba(227, 6, 19, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(227, 6, 19, 0.06) 1px, transparent 1px);
  }
  
  @keyframes gridShift {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
`

const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(227, 6, 19, 0.15) 0%,
    rgba(227, 6, 19, 0.08) 30%,
    transparent 70%
  );
  filter: blur(3px);
  animation: pulse 8s ease-in-out infinite;
  
  [data-theme="light"] & {
    background: radial-gradient(
      circle,
      rgba(227, 6, 19, 0.08) 0%,
      rgba(227, 6, 19, 0.04) 30%,
      transparent 70%
    );
  }
  
  &.glow-1 {
    width: 30rem;
    height: 30rem;
    top: -5%;
    right: -10%;
    animation-delay: 0s;
  }
  
  &.glow-2 {
    width: 25rem;
    height: 25rem;
    bottom: -8%;
    left: -12%;
    animation-delay: -4s;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
`

const OrbitalRings = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 9999px;
    border: 1px solid rgba(227, 6, 19, 0.4);
    width: 40rem;
    height: 40rem;
    opacity: 0.35;
    animation: orbit 26s linear infinite;
  }

  &::after {
    width: 56rem;
    height: 56rem;
    opacity: 0.22;
    animation-duration: 40s;
    animation-direction: reverse;
  }

  [data-theme="light"] &::before,
  [data-theme="light"] &::after {
    border-color: rgba(227, 6, 19, 0.25);
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.03);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`

const ContentWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  text-align: center;
  position: relative;
  z-index: 1;
`

const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 800;
  color: var(--text-primary, var(--white));
  margin-bottom: 2.4rem;
  line-height: 1.2;
  transition: color 0.3s ease;
  
  [data-theme="light"] & {
    color: var(--md-sys-color-on-surface);
  }
  
  .highlight {
    background: linear-gradient(135deg, var(--primary) 0%, #ff4757 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    [data-theme="light"] & {
      background: linear-gradient(135deg, var(--md-sys-color-secondary) 0%, #B91C1C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
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
  transition: color 0.3s ease;
  
  [data-theme="light"] & {
    color: var(--md-sys-color-on-surface-variant);
  }
  
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
  color: var(--text-primary, var(--white));
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 22rem;
  
  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.6);
    border: 2px solid var(--md-sys-color-outline-variant);
    color: var(--md-sys-color-on-surface);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3.2rem;
    flex-shrink: 0;
    transition: color 0.3s ease;
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
      transition: opacity 0.3s ease;
      
      [data-theme="light"] & {
        opacity: 0.7;
      }
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
    transform: translateY(-2px);
    
    [data-theme="light"] & {
      background: rgba(255, 255, 255, 0.8);
      border-color: var(--md-sys-color-secondary);
      box-shadow: 0 8px 24px rgba(152, 0, 15, 0.15);
    }
  }
  
  &.google-play:hover .icon {
    color: #34A853;
  }
  
  &.app-store:hover .icon {
    color: #007AFF;
  }
`;

export default App
