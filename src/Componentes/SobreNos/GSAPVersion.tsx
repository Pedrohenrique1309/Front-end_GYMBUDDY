import { FaDumbbell, FaClipboardList, FaRobot, FaFire } from 'react-icons/fa'
import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import SignupPopup from '../CadastroPopUp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SobreNos = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showSignupPopup, setShowSignupPopup] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  // Refs para animações GSAP
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const imageBackgroundRef = useRef<HTMLDivElement>(null)
  const textItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const parallaxBgRef = useRef<HTMLDivElement>(null)
  const parallaxLayersRef = useRef<(HTMLDivElement | null)[]>([])
  
  // Detectar mudanças de tema
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsDarkMode(theme !== 'light')
    }
    
    checkTheme()
    
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
    
    return () => observer.disconnect()
  }, [])
  
  useLayoutEffect(() => {
    if (!containerRef.current) return
    
    const ctx = gsap.context(() => {
      // Animação de entrada do hero
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        }
      )
      
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5
        }
      )
      
      // ScrollTrigger para o card principal
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(cardRef.current,
            { 
              opacity: 0,
              y: 100,
              scale: 0.9,
              rotationX: -15
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power3.out"
            }
          )
        }
      })
      
      // Parallax para a imagem de fundo - movimento para cima
      if (imageBackgroundRef.current) {
        gsap.to(imageBackgroundRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        })
      }
      
      // Animações dos itens de texto com ScrollTrigger
      textItemsRef.current.forEach((item, index) => {
        if (!item) return
        
        ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(item,
              {
                opacity: 0,
                x: -50,
                rotationY: -30
              },
              {
                opacity: 1,
                x: 0,
                rotationY: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: "power3.out"
              }
            )
            
            // Animar o ícone dentro do item
            const iconBox = item.querySelector('.icon-box')
            if (iconBox) {
              gsap.fromTo(iconBox,
                { scale: 0, rotation: -180 },
                {
                  scale: 1,
                  rotation: 0,
                  duration: 0.6,
                  delay: index * 0.15 + 0.2,
                  ease: "back.out(1.7)"
                }
              )
            }
          }
        })
        
        // Hover effect
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            x: 10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
          
          const iconBox = item.querySelector('.icon-box')
          if (iconBox) {
            gsap.to(iconBox, {
              rotation: 5,
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            })
          }
        })
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
          
          const iconBox = item.querySelector('.icon-box')
          if (iconBox) {
            gsap.to(iconBox, {
              rotation: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            })
          }
        })
      })
      
      // Parallax suave para múltiplas camadas do fundo
      parallaxLayersRef.current.forEach((layer, index) => {
        if (!layer) return
        
        const speed = 0.5 + (index * 0.2)
        
        gsap.to(layer, {
          yPercent: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        })
      })
      
      // Animação de rotação contínua para elementos flutuantes
      gsap.to('.float-element-1', {
        y: -30,
        x: 20,
        rotation: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
      
      gsap.to('.float-element-2', {
        y: 30,
        x: -20,
        rotation: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
      
      // Efeito de texto com GSAP TextPlugin
      const ctaHighlight = document.querySelector('.cta-highlight')
      if (ctaHighlight) {
        ctaHighlight.addEventListener('mouseenter', () => {
          gsap.to(ctaHighlight, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        ctaHighlight.addEventListener('mouseleave', () => {
          gsap.to(ctaHighlight, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
      
    }, containerRef)
    
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  // Animação de partículas com GSAP
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'gsap-particle'
      particle.style.position = 'absolute'
      particle.style.width = '6px'
      particle.style.height = '6px'
      particle.style.background = 'var(--primary)'
      particle.style.borderRadius = '50%'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.bottom = '0'
      particle.style.pointerEvents = 'none'
      particle.style.boxShadow = '0 0 10px rgba(227, 6, 19, 0.5)'
      
      containerRef.current?.appendChild(particle)
      
      gsap.to(particle, {
        y: -window.innerHeight * 1.5,
        x: `random(-100, 100)`,
        scale: `random(0.5, 1.5)`,
        opacity: 0,
        duration: `random(8, 15)`,
        ease: "power1.out",
        onComplete: () => particle.remove()
      })
    }
    
    const interval = setInterval(createParticle, 2000)
    
    return () => clearInterval(interval)
  }, [])

  const handleSwitchToLogin = () => {
    setShowSignupPopup(false)
  }

  const textItems = [
    {
      icon: FaDumbbell,
      text: "Mais do que um site, um verdadeiro parceiro de treino.",
      gradient: "linear-gradient(135deg, #E30613 0%, #ff4757 100%)"
    },
    {
      icon: FaClipboardList,
      text: "Nada de planos genéricos, tenha uma experiência personalizada.",
      gradient: "linear-gradient(135deg, #ff6348 0%, #E30613 100%)"
    },
    {
      icon: FaRobot,
      text: "Com a ajuda de nosso agente IA, nada é impossível.",
      gradient: "linear-gradient(135deg, #E30613 0%, #ff7979 100%)"
    },
    {
      icon: FaFire,
      text: "Treinar não precisa ser difícil. Seja bem-vindo ao Gym Buddy!",
      gradient: "linear-gradient(135deg, #ff4757 0%, #E30613 100%)"
    }
  ];

  return (
    <CaixaSobreNos ref={containerRef}>
      {/* Camadas de parallax do fundo */}
      <ParallaxBackground ref={parallaxBgRef}>
        <ParallaxLayer 
          className="layer-1" 
          ref={el => parallaxLayersRef.current[0] = el}
          style={{ background: 'radial-gradient(circle at 20% 50%, rgba(227, 6, 19, 0.1) 0%, transparent 50%)' }}
        />
        <ParallaxLayer 
          className="layer-2" 
          ref={el => parallaxLayersRef.current[1] = el}
          style={{ background: 'radial-gradient(circle at 80% 50%, rgba(227, 6, 19, 0.08) 0%, transparent 50%)' }}
        />
        <ParallaxLayer 
          className="layer-3" 
          ref={el => parallaxLayersRef.current[2] = el}
          style={{ 
            backgroundImage: 'linear-gradient(rgba(227, 6, 19, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(227, 6, 19, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </ParallaxBackground>
      
      {/* seção home */}
      <SecaoPrincipal ref={heroRef}>
        <CentroParticles />
        <TituloPrincipal ref={titleRef}>
          <TituloIntro>Podemos ajudar você a</TituloIntro>{' '}
          <TextoComDegrade>
            <span>cumprir todas as suas metas</span>
          </TextoComDegrade>
        </TituloPrincipal>
        <HeroSubtitle ref={subtitleRef}>
          <HeroSubtitleIntro>
            Faça parte desse projeto hoje mesmo!
          </HeroSubtitleIntro>
        </HeroSubtitle>
      </SecaoPrincipal>

      {/* conteudo home*/}
      <ContentSection>
        <ContentContainer>
          <ModernCard ref={cardRef}>
            {/* imagem do homem musculoso d fundo*/}
            <CardImageBackground ref={imageBackgroundRef}>
              <img 
                src={isDarkMode ? "/images/muscular-man.png" : "/homem_negro.png"} 
                alt="Homem musculoso treinando"
              />
            </CardImageBackground>

            {/* Content Overlay */}
            <CardContent>
              <ContentHeader>
                <HeaderLabel>SOBRE NÓS</HeaderLabel>
                <HeaderTitle>Transforme seu corpo e mente</HeaderTitle>
              </ContentHeader>

              <TextItemsGrid>
                {textItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <ModernTextItem
                      key={index}
                      ref={el => textItemsRef.current[index] = el}
                    >
                      <IconBox className="icon-box" gradient={item.gradient}>
                        <IconComponent />
                        <IconGlow />
                        <IconPulse />
                      </IconBox>
                      <ItemContent>
                        <ItemText>{item.text}</ItemText>
                        <ItemBar gradient={item.gradient} />
                      </ItemContent>
                    </ModernTextItem>
                  );
                })}
              </TextItemsGrid>

              {/* Floating Elements */}
              <FloatingElement className="float-element-1" />
              <FloatingElement className="float-element-2" />
            </CardContent>
          </ModernCard>
        </ContentContainer>
      </ContentSection>

      {/* CTA Section */}
      <CTASection>
        <CTAText>
          <CTATextIntro>
            Torne-se já um membro! Acesse ou crie sua conta na
          </CTATextIntro>{' '}
          <CTAHighlight 
            className="cta-highlight"
            onClick={() => setShowSignupPopup(true)}
          >
            GymBuddy
            <SparkleEffect />
          </CTAHighlight>
        </CTAText>
      </CTASection>

      {/* Signup Popup */}
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={() => setShowSignupPopup(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />

      {/* elementos do fundo animado */}
      <AnimatedBackground>
        <ParticleField />
        <GridPattern />
      </AnimatedBackground>
    </CaixaSobreNos>
  )
}

// Styled Components (mesmos estilos do componente original)
const CaixaSobreNos = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`

const ParallaxBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  will-change: transform;
`

const SecaoPrincipal = styled.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const TituloPrincipal = styled.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: var(--white);
  letter-spacing: -0.02em;
`

const TituloIntro = styled.span`
  [data-theme="light"] & {
    color: #111111;
  }
`

const TextoComDegrade = styled.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`

const HeroSubtitle = styled.p`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  max-width: 60rem;
  margin: 0 auto;
`

const HeroSubtitleIntro = styled.span`
  [data-theme="light"] & {
    color: #111111;
  }
`

const ContentSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`

const ContentContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`

const ModernCard = styled.div`
  position: relative;
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(30px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  overflow: hidden;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 80px rgba(227, 6, 19, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;

  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(227, 6, 19, 0.6);
    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(227, 6, 19, 0.1);
  }
`

const CardImageBackground = styled.div`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 70%;
  height: 140%;
  opacity: 1.8;
  z-index: 0;
  will-change: transform;
  transition: all 0.5s ease;
  
  /* Posição mais alta para o modo claro (homem negro) */
  [data-theme="light"] & {
    top: -90%;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(45%) contrast(1.08);
    mask-image: linear-gradient(
      to left,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0.8) 30%,
      rgba(0,0,0,0.3) 60%,
      transparent 100%
    );
  }

  [data-theme="light"] & img {
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    opacity: 0.16;
    top: -15%;
    height: 130%;

    [data-theme="light"] & {
      top: -99%;
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`

const ContentHeader = styled.div`
  margin-bottom: 4rem;
`

const HeaderLabel = styled.div`
  display: inline-block;
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 0.5rem 1.5rem;
  background: rgba(227, 6, 19, 0.1);
  border-radius: 2rem;
  border: 1px solid rgba(227, 6, 19, 0.3);
`

const HeaderTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin: 0;

  [data-theme="light"] & {
    color: #111111;
  }
`

const TextItemsGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  max-width: 60rem;
`

const ModernTextItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.1);
  }

  [data-theme="light"] & {
    background: rgba(0, 0, 0, 0.02);
    border-color: rgba(0, 0, 0, 0.06);

    &:hover {
      background: rgba(227, 6, 19, 0.04);
      border-color: rgba(227, 6, 19, 0.35);
      box-shadow: 0 10px 30px rgba(227, 6, 19, 0.12);
    }
  }
`

const IconBox = styled.div<{ gradient: string }>`
  position: relative;
  width: 5rem;
  height: 5rem;
  background: ${props => props.gradient};
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 2.2rem;
  flex-shrink: 0;
  box-shadow: 0 10px 25px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;
`

const IconGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ModernTextItem}:hover & {
    opacity: 1;
  }
`

const pulseRing = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`

const IconPulse = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid var(--primary);
    border-radius: inherit;
    animation: ${pulseRing} 3s ease-out infinite;
  }
`

const ItemContent = styled.div`
  flex: 1;
`

const ItemText = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin: 0;

  [data-theme="light"] & {
    color: #222222;
  }
`

const ItemBar = styled.div<{ gradient: string }>`
  width: 0;
  height: 2px;
  background: ${props => props.gradient};
  margin-top: 1rem;
  transition: width 0.3s ease;
  border-radius: 1px;

  ${ModernTextItem}:hover & {
    width: 100%;
  }
`

const FloatingElement = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(227, 6, 19, 0.15) 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;

  &.float-element-1 {
    top: 10%;
    left: -10%;
  }

  &.float-element-2 {
    bottom: 10%;
    right: -10%;
  }
`

const CTASection = styled.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  max-width: 80rem;
  margin: 0 auto;
`

const CTAText = styled.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--white);
  margin: 0;
`

const CTATextIntro = styled.span`
  [data-theme="light"] & {
    color: #111111;
  }
`

const CTAHighlight = styled.span`
  color: var(--primary);
  background: linear-gradient(135deg, var(--primary), #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  position: relative;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
  }
`

const sparkleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
`

const SparkleEffect = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--primary);
    border-radius: 50%;
    animation: ${sparkleAnimation} 3s ease-in-out infinite;
    box-shadow: 0 0 6px var(--primary);
  }
  
  &::after {
    animation-delay: 1.5s;
    left: 8px;
    top: 8px;
  }
`

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

const particleAnimation = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
`

const ParticleField = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.3;
    animation: ${particleAnimation} 20s linear infinite;
  }
  
  &::before {
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    left: 70%;
    animation-delay: 10s;
  }
`

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(30px) translateX(-20px);
  }
`

const GridPattern = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  transform-origin: center;
  animation: ${floatingAnimation} 30s ease-in-out infinite;
`

const particlesCentroAnimation = keyframes`
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-80px) scale(1);
  }
  100% {
    transform: translateY(-100px) scale(0);
    opacity: 0;
  }
`

const CentroParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, var(--primary), #ff4757);
    border-radius: 50%;
    animation: ${particlesCentroAnimation} 8s ease-out infinite;
    box-shadow: 0 0 10px rgba(227, 6, 19, 0.5);
  }
  
  &::before {
    left: 20%;
    bottom: 0;
    animation-delay: 0s;
  }
  
  &::after {
    left: 80%;
    bottom: 0;
    animation-delay: 4s;
    width: 4px;
    height: 4px;
  }
`

export default SobreNos
