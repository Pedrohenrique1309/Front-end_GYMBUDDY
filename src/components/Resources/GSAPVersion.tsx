import { FaUsers, FaChartLine } from 'react-icons/fa'
import { SiOpenai } from 'react-icons/si'
import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Resources = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  // Refs para animações GSAP
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const backgroundRef = useRef<HTMLDivElement>(null)
  const orbsRef = useRef<(HTMLDivElement | null)[]>([])
  
  const resources = [
    {
      id: 1,
      title: "CENTRAL DE APOIO PRA INICIANTES",
      description: "Nosso app é completamente amigável com pessoas inexperientes na academia, fazendo com que o app seja uma abertura de portas à uma comunidade segura para todos.",
      additionalText: "Queremos fornecer a melhor experiência possível!",
      icon: FaUsers,
      gradient: "linear-gradient(135deg, #E30613 0%, #B91C1C 100%)"
    },
    {
      id: 2,
      title: "INTELIGÊNCIA ARTIFICIAL INTEGRADA",
      description: "No nosso aplicativo, uma inteligência artificial já treinada pra ajudar as pessoas a montarem seus treinos é contar melhor suas calorias está inclusa! Isso fortalece uma praticidade na criação de treinos para pessoas iniciantes, sem ser preciso mais treinos genéricos.",
      icon: SiOpenai,
      gradient: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)"
    },
    {
      id: 3,
      title: "CONTROLE COMPLETO DE TREINOS",
      description: "E por fim, no nosso app, é possível consultar desde à execução dos exercícios até quantas repetições você deverá fazer baseado no SEU objetivo, com tudo relacionado à montagem do treino se adaptando à sua necessidade, seja ela qual for!",
      icon: FaChartLine,
      gradient: "linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)"
    }
  ]
  
  useLayoutEffect(() => {
    if (!containerRef.current) return
    
    const ctx = gsap.context(() => {
      // Animação do título principal
      const titleWords = heroTitleRef.current?.querySelectorAll('.title-word')
      if (titleWords) {
        gsap.fromTo(titleWords,
          { 
            opacity: 0,
            y: 100,
            rotationX: -90,
            transformPerspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.2
          }
        )
      }
      
      // ScrollTrigger para o background parallax
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        })
      }
      
      // Animação dos cards com ScrollTrigger
      cardsRef.current.forEach((card, index) => {
        if (!card) return
        
        // Set inicial
        gsap.set(card, {
          opacity: 0,
          y: 150,
          scale: 0.8,
          rotationY: -45,
          transformPerspective: 1000,
          transformOrigin: "center center"
        })
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out"
            })
            
            // Animar o ícone dentro do card
            const icon = card.querySelector('.icon-wrapper')
            if (icon) {
              gsap.fromTo(icon,
                { scale: 0, rotation: -180 },
                {
                  scale: 1,
                  rotation: 0,
                  duration: 0.8,
                  delay: index * 0.2 + 0.3,
                  ease: "back.out(2)"
                }
              )
            }
            
            // Animar o conteúdo do card
            const title = card.querySelector('.card-title')
            const description = card.querySelector('.card-description')
            const footer = card.querySelector('.card-footer')
            
            if (title) {
              gsap.fromTo(title,
                { opacity: 0, x: -30 },
                { 
                  opacity: 1, 
                  x: 0, 
                  duration: 0.6,
                  delay: index * 0.2 + 0.4,
                  ease: "power2.out"
                }
              )
            }
            
            if (description) {
              gsap.fromTo(description,
                { opacity: 0, y: 20 },
                { 
                  opacity: 1, 
                  y: 0, 
                  duration: 0.6,
                  delay: index * 0.2 + 0.5,
                  ease: "power2.out"
                }
              )
            }
            
            if (footer) {
              gsap.fromTo(footer,
                { opacity: 0, scale: 0 },
                { 
                  opacity: 1, 
                  scale: 1, 
                  duration: 0.4,
                  delay: index * 0.2 + 0.6,
                  ease: "back.out(1.5)"
                }
              )
            }
          }
        })
        
        // Efeitos de hover 3D
        card.addEventListener('mouseenter', () => {
          setHoveredCard(index + 1)
          
          gsap.to(card, {
            scale: 1.05,
            z: 50,
            duration: 0.4,
            ease: "power2.out"
          })
          
          const icon = card.querySelector('.icon-wrapper')
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              scale: 1.2,
              duration: 0.6,
              ease: "power2.out"
            })
          }
        })
        
        card.addEventListener('mouseleave', () => {
          setHoveredCard(null)
          
          gsap.to(card, {
            scale: 1,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out"
          })
          
          const icon = card.querySelector('.icon-wrapper')
          if (icon) {
            gsap.to(icon, {
              rotation: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            })
          }
        })
        
        // Efeito 3D com movimento do mouse
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const mouseX = e.clientX
          const mouseY = e.clientY
          
          const rotateX = ((mouseY - centerY) / rect.height) * 20
          const rotateY = ((mouseX - centerX) / rect.width) * 20
          
          gsap.to(card, {
            rotationX: -rotateX,
            rotationY: rotateY,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 1000
          })
        })
      })
      
      // Animação dos orbs flutuantes
      orbsRef.current.forEach((orb, index) => {
        if (!orb) return
        
        gsap.to(orb, {
          y: `random(-100, 100)`,
          x: `random(-50, 50)`,
          scale: `random(0.8, 1.2)`,
          duration: `random(10, 20)`,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 2
        })
      })
      
      // Animação de partículas
      const createParticles = () => {
        const particlesContainer = document.querySelector('.particles-container')
        if (!particlesContainer) return
        
        for (let i = 0; i < 10; i++) {
          const particle = document.createElement('div')
          particle.className = 'gsap-particle'
          particle.style.position = 'absolute'
          particle.style.width = '4px'
          particle.style.height = '4px'
          particle.style.background = 'var(--primary)'
          particle.style.borderRadius = '50%'
          particle.style.left = `${Math.random() * 100}%`
          particle.style.top = '100%'
          particle.style.pointerEvents = 'none'
          
          particlesContainer.appendChild(particle)
          
          gsap.to(particle, {
            y: -window.innerHeight * 2,
            x: `random(-200, 200)`,
            opacity: 0,
            scale: `random(0.5, 2)`,
            duration: `random(5, 10)`,
            delay: i * 0.2,
            ease: "power1.out",
            onComplete: () => particle.remove()
          })
        }
      }
      
      // Criar partículas periodicamente
      const particleInterval = setInterval(createParticles, 3000)
      
      return () => {
        clearInterval(particleInterval)
      }
      
    }, containerRef)
    
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  // Efeito de digitação para o título
  useEffect(() => {
    const title = heroTitleRef.current
    if (!title) return
    
    const text = title.textContent || ''
    const words = text.split(' ')
    title.innerHTML = words.map(word => 
      `<span class="title-word">${word}</span>`
    ).join(' ')
  }, [])

  return (
    <ResourcesContainer ref={containerRef}>
      {/* Animated Background */}
      <AnimatedBackground ref={backgroundRef}>
        <BackgroundGrid />
        <FloatingOrbs>
          <div className="orb orb-1" ref={el => orbsRef.current[0] = el} />
          <div className="orb orb-2" ref={el => orbsRef.current[1] = el} />
          <div className="orb orb-3" ref={el => orbsRef.current[2] = el} />
        </FloatingOrbs>
        <div className="particles-container" style={{ position: 'absolute', width: '100%', height: '100%' }} />
      </AnimatedBackground>

      {/* Hero Section */}
      <HeroSection>
        <HeroTitle ref={heroTitleRef}>
          NOSSOS RECURSOS
        </HeroTitle>
      </HeroSection>

      {/* Resources Cards */}
      <ResourcesSection>
        <ResourcesContentContainer>
          <CardsGrid>
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card3DWrapper
                  key={resource.id}
                  ref={el => cardsRef.current[index] = el}
                >
                  <ResourceCard gradient={resource.gradient}>
                    <CardGlow />
                    <MouseLight className={hoveredCard === resource.id ? 'active' : ''} />
                    <CardContent>
                      <IconWrapper className="icon-wrapper">
                        <IconComponent />
                        <IconRipple />
                      </IconWrapper>
                      
                      <CardTitle className="card-title">{resource.title}</CardTitle>
                      
                      <CardDescription className="card-description">
                        {resource.description}
                      </CardDescription>
                      
                      {resource.additionalText && (
                        <AdditionalText>
                          {resource.additionalText}
                        </AdditionalText>
                      )}
                      
                      <CardFooter className="card-footer">
                        <div className="card-number">
                          0{resource.id}
                        </div>
                      </CardFooter>
                    </CardContent>
                    
                    {/* Hover Effects */}
                    <HoverOverlay />
                    <ParticleEffect className={`particles-${resource.id}`} />
                  </ResourceCard>
                </Card3DWrapper>
              )
            })}
          </CardsGrid>
        </ResourcesContentContainer>
      </ResourcesSection>
    </ResourcesContainer>
  )
}

// Styled Components
const ResourcesContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`

const backgroundGrid = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`

const BackgroundGrid = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: ${backgroundGrid} 20s linear infinite;
`

const FloatingOrbs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  .orb {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(227, 6, 19, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(40px);
  }
  
  .orb-1 {
    top: 20%;
    left: 10%;
  }
  
  .orb-2 {
    bottom: 30%;
    right: 15%;
  }
  
  .orb-3 {
    top: 50%;
    left: 50%;
  }
`

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  position: relative;
  z-index: 1;
`

const HeroTitle = styled.h1`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  color: var(--white);
  letter-spacing: -0.02em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  .title-word {
    display: inline-block;
    margin: 0 0.2em;
  }
`

const ResourcesSection = styled.section`
  padding: 0 2rem 8rem;
  position: relative;
  z-index: 1;
`

const ResourcesContentContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const Card3DWrapper = styled.div`
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`

const ResourceCard = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: 2rem;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  
  &:hover {
    box-shadow: 
      0 30px 60px rgba(227, 6, 19, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  ${ResourceCard}:hover & {
    opacity: 1;
  }
`

const MouseLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  background: radial-gradient(
    600px circle at 50% 50%,
    rgba(255, 255, 255, 0.15),
    transparent 40%
  );
  
  &.active {
    opacity: 1;
  }
`

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const IconWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  
  svg {
    font-size: 3rem;
    color: var(--white);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
`

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`

const IconRipple = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: inherit;
  animation: ${rippleEffect} 3s ease-out infinite;
`

const CardTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const CardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  flex-grow: 1;
`

const AdditionalText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 2rem;
  text-align: center;
  font-style: italic;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  .card-number {
    font-size: 4rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2);
    line-height: 1;
  }
`

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  ${ResourceCard}:hover & {
    opacity: 1;
  }
`

const particleFloat = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
`

const ParticleEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: ${particleFloat} 6s ease-out infinite;
  }
  
  &::before {
    bottom: 20%;
    left: 20%;
    animation-delay: 0s;
  }
  
  &::after {
    bottom: 30%;
    right: 30%;
    animation-delay: 3s;
  }
  
  ${ResourceCard}:hover & {
    &::before,
    &::after {
      animation-play-state: running;
    }
  }
`

export default Resources
