import { motion, useScroll, useTransform, useMotionValue, useTransform as useTransformMotion } from 'framer-motion';
import { FaUsers, FaChartLine } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Resources = () => {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -50]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransformMotion(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransformMotion(mouseX, [0, 1], [-15, 15]);
  const shadowX = useTransformMotion(mouseX, [0, 1], [15, -15]);
  const shadowY = useTransformMotion(mouseY, [0, 1], [15, -15]);

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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <ResourcesContainer ref={containerRef}>
      {/* Animated Background */}
      <AnimatedBackground style={{ y: backgroundY }}>
        <BackgroundGrid />
        <FloatingOrbs />
      </AnimatedBackground>

      {/* Hero Section */}
      <HeroSection>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              NOSSOS
            </motion.span>{' '}
            <GradientText>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                RECURSOS
              </motion.span>
            </GradientText>
          </HeroTitle>
        </motion.div>
      </HeroSection>

      {/* Resources Cards */}
      <ResourcesSection>
        <ResourcesContainer>
          <CardsGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ y: cardsY }}
          >
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card3DWrapper
                  key={resource.id}
                  variants={cardVariants}
                  onMouseMove={(e) => handleMouseMove(e, resource.id)}
                  onMouseEnter={() => setHoveredCard(resource.id)}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    mouseX.set(0.5);
                    mouseY.set(0.5);
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    rotateX: hoveredCard === resource.id ? rotateX : 0,
                    rotateY: hoveredCard === resource.id ? rotateY : 0,
                    transformStyle: "preserve-3d",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                >
                  <ResourceCard 
                    gradient={resource.gradient}
                    style={{
                      transform: hoveredCard === resource.id ? "translateZ(50px)" : "translateZ(0px)",
                      boxShadow: hoveredCard === resource.id ? 
                        `${shadowX.get()}px ${shadowY.get()}px 40px rgba(227, 6, 19, 0.5)` : 
                        "0 20px 40px rgba(0, 0, 0, 0.3)",
                      transition: "all 0.3s ease"
                    } as React.CSSProperties}
                  >
                    <CardGlow />
                    <MouseLight
                      style={{
                        background: `radial-gradient(
                          600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%,
                          rgba(255, 255, 255, 0.15),
                          transparent 40%
                        )`,
                        opacity: hoveredCard === resource.id ? 1 : 0
                      }}
                    />
                    <CardContent>
                      <IconWrapper>
                        <motion.div
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          <IconComponent />
                        </motion.div>
                        <IconRipple />
                      </IconWrapper>
                      
                      <CardTitle>{resource.title}</CardTitle>
                      
                      <CardDescription>
                        {resource.description}
                      </CardDescription>
                      
                      {resource.additionalText && (
                        <AdditionalText>
                          {resource.additionalText}
                        </AdditionalText>
                      )}
                      
                      <CardFooter>
                        <motion.div
                          className="card-number"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          0{resource.id}
                        </motion.div>
                      </CardFooter>
                    </CardContent>
                    
                    {/* Hover Effects */}
                    <HoverOverlay />
                    <ParticleEffect className={`particles-${resource.id}`} />
                  </ResourceCard>
                </Card3DWrapper>
              );
            })}
          </CardsGrid>
        </ResourcesContainer>
      </ResourcesSection>
    </ResourcesContainer>
  );
};

const ResourcesContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`;

const AnimatedBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const backgroundGrid = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`;

const BackgroundGrid = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: ${backgroundGrid} 20s linear infinite;
`;

const floatingOrbs = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`;

const FloatingOrbs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  &::before,
  &::after {
    content: '';
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
    animation: ${floatingOrbs} 15s ease-in-out infinite;
  }
  
  &::before {
    top: 20%;
    left: 10%;
  }
  
  &::after {
    bottom: 20%;
    right: 10%;
    animation-delay: 7.5s;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  color: var(--white);
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

const ResourcesSection = styled.section`
  padding: 0 2rem 8rem;
  position: relative;
  z-index: 1;
`;

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
  max-width: 140rem;
  margin: 0 auto;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Card3DWrapper = styled(motion.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`;

const ResourceCard = styled.div<{ gradient: string; style?: React.CSSProperties }>`
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
  
  &:hover {
    box-shadow: 
      0 30px 60px rgba(227, 6, 19, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`;

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
`;

const MouseLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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
`;

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const IconRipple = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: inherit;
  animation: ${rippleEffect} 3s ease-out infinite;
`;

const CardTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const AdditionalText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 2rem;
  text-align: center;
  font-style: italic;
`;

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
`;

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
`;

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
`;

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
`;

export default Resources;
