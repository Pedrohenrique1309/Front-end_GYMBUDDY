import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { FaDumbbell } from 'react-icons/fa'

interface LoadingScreenProps {
  isLoading: boolean
  onLoadingComplete?: () => void
}

const LoadingScreen = ({ isLoading, onLoadingComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!isLoading || !containerRef.current) return
    
    const tl = gsap.timeline({
      onComplete: () => {
        if (onLoadingComplete) {
          onLoadingComplete()
        }
      }
    })
    
    // Reset inicial
    gsap.set(containerRef.current, { autoAlpha: 1 })
    gsap.set(logoRef.current, { scale: 0, rotation: -180 })
    gsap.set(textRef.current, { opacity: 0, y: 20 })
    gsap.set(progressRef.current?.querySelector('.fill'), { width: '0%' })
    
    // Animação do logo
    tl.to(logoRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to(logoRef.current, {
      rotation: 360,
      duration: 1.2,
      ease: "power2.inOut",
      repeat: 2
    }, "+=0.2")
    
    // Animação do texto
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=1")
    
    // Animação da barra de progresso
    .to(progressRef.current?.querySelector('.fill'), {
      width: '100%',
      duration: 2,
      ease: "power2.inOut"
    }, "-=1.5")
    
    // Animação de partículas
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 2}s`
        particlesRef.current.appendChild(particle)
        
        gsap.to(particle, {
          y: -window.innerHeight,
          x: `random(-100, 100)`,
          rotation: `random(-360, 360)`,
          scale: 0,
          duration: `random(2, 4)`,
          delay: `random(0, 1)`,
          ease: "power2.out",
          onComplete: () => particle.remove()
        })
      }
    }
    
    // Fade out final
    tl.to(containerRef.current, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.inOut"
    }, "+=0.3")
    
    return () => {
      tl.kill()
    }
  }, [isLoading, onLoadingComplete])
  
  if (!isLoading) return null
  
  return (
    <LoadingContainer ref={containerRef}>
      <LoadingContent>
        <LogoWrapper ref={logoRef}>
          <FaDumbbell size={60} />
        </LogoWrapper>
        
        <TextWrapper ref={textRef}>
          <Title>GYM BUDDY</Title>
          <Subtitle>Preparando seu treino...</Subtitle>
        </TextWrapper>
        
        <ProgressBar ref={progressRef}>
          <ProgressFill className="fill" />
        </ProgressBar>
        
        <ParticlesContainer ref={particlesRef} />
      </LoadingContent>
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(227, 6, 19, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(227, 6, 19, 0.15) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
`

const LogoWrapper = styled.div`
  color: var(--primary);
  filter: drop-shadow(0 0 30px rgba(227, 6, 19, 0.5));
  
  svg {
    display: block;
  }
`

const TextWrapper = styled.div`
  text-align: center;
`

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--white);
  margin: 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #fff 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0.5rem 0 0;
`

const ProgressBar = styled.div`
  width: 300px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, #ff4757 100%);
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(227, 6, 19, 0.5);
`

const ParticlesContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  
  .particle {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 6px;
    background: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(227, 6, 19, 0.5);
  }
`

export default LoadingScreen
