import { motion, useScroll, useTransform, useAnimationControls } from 'framer-motion';
import { FaDumbbell, FaClipboardList, FaRobot, FaFire } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SignupPopup from '../SignupPopup';

const AboutUs = () => {
  const containerRef = useRef(null);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimationControls();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSwitchToLogin = () => {
    // This would need to be implemented if you want to switch to login
    setShowSignupPopup(false);
  };

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutUsContainer ref={containerRef}>
      {/* Hero Section */}
      <HeroSection>
        <HeroParticles />
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Podemos ajudar você a
            </motion.span>{' '}
            <GradientText>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                cumprir todas as suas metas
              </motion.span>
            </GradientText>
          </HeroTitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <HeroSubtitle>
              Faça parte desse projeto hoje mesmo!
            </HeroSubtitle>
          </motion.div>
        </motion.div>
      </HeroSection>

      {/* Modern Content Section */}
      <ContentSection>
        <ContentContainer>
          <ModernCard
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Image with Parallax */}
            <CardImageBackground
              style={{
                y: imageY,
                rotate: imageRotate,
                scale: imageScale
              }}
            >
              <img 
                src="/images/muscular-man.png" 
                alt="Homem musculoso treinando"
              />
            </CardImageBackground>

            {/* Content Overlay */}
            <CardContent>
              <ContentHeader
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <HeaderLabel>SOBRE NÓS</HeaderLabel>
                <HeaderTitle>Transforme seu corpo e mente</HeaderTitle>
              </ContentHeader>

              <TextItemsGrid>
                {textItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <ModernTextItem
                        whileHover={{
                          boxShadow: "0 20px 40px rgba(227, 6, 19, 0.2)"
                        }}
                      >
                        <IconBox gradient={item.gradient}>
                          <motion.div
                            animate={{ 
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                          >
                            <IconComponent />
                          </motion.div>
                          <IconGlow />
                          <IconPulse />
                        </IconBox>
                        <ItemContent>
                          <ItemText>{item.text}</ItemText>
                          <ItemBar gradient={item.gradient} />
                        </ItemContent>
                      </ModernTextItem>
                    </motion.div>
                  );
                })}
              </TextItemsGrid>

              {/* Floating Elements */}
              <FloatingElement
                className="float-1"
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <FloatingElement
                className="float-2"
                animate={{
                  y: [20, -20, 20],
                  x: [10, -10, 10],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </CardContent>
          </ModernCard>
        </ContentContainer>
      </ContentSection>

      {/* CTA Section */}
      <CTASection>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <CTAText>
            Torne-se já um membro! Acesse ou crie sua conta na{' '}
            <CTAHighlight 
              onClick={() => setShowSignupPopup(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GymBuddy
              <SparkleEffect />
            </CTAHighlight>
          </CTAText>
        </motion.div>
      </CTASection>

      {/* Signup Popup */}
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={() => setShowSignupPopup(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />

      {/* Animated Background Elements */}
      <AnimatedBackground>
        <ParticleField />
        <GridPattern 
          style={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
        />
      </AnimatedBackground>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: var(--white);
  letter-spacing: -0.02em;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  max-width: 60rem;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`;

const ContentContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const ModernCard = styled(motion.div)`
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
`;

const CardImageBackground = styled(motion.div)`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 70%;
  height: 120%;
  opacity: 0.15;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
    mask-image: linear-gradient(
      to left,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0.8) 30%,
      rgba(0,0,0,0.3) 60%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    opacity: 0.08;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const ContentHeader = styled(motion.div)`
  margin-bottom: 4rem;
`;

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
`;

const HeaderTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin: 0;
`;

const TextItemsGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  max-width: 60rem;
`;

const ModernTextItem = styled(motion.div)`
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

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.1);
  }
`;

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

  ${ModernTextItem}:hover & {
    transform: rotate(5deg) scale(1.1);
  }
`;

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
`;

const pulseRing = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

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
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemText = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin: 0;
`;

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
`;

const FloatingElement = styled(motion.div)`
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

  &.float-1 {
    top: 10%;
    left: -10%;
  }

  &.float-2 {
    bottom: 10%;
    right: -10%;
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  max-width: 80rem;
  margin: 0 auto;
`;

const CTAText = styled.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--white);
  margin: 0;
`;

const CTAHighlight = styled(motion.span)`
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
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, var(--primary), #ff0000);
    border-radius: 2px;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scaleX(1);
    }
    50% {
      opacity: 0.7;
      transform: scaleX(1.05);
    }
  }
`;

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
`;

const SparkleEffect = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  
  &::before,
  &::after {
    content: '✨';
    position: absolute;
    animation: ${sparkleAnimation} 3s ease-in-out infinite;
  }
  
  &::after {
    animation-delay: 1.5s;
    left: 15px;
  }
`;

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
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

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
`;

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
`;

const GridPattern = styled(motion.div)`
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
`;

const heroParticleAnimation = keyframes`
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
`;

const HeroParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  &::before,
  &::after {
    content: '💪';
    position: absolute;
    font-size: 2rem;
    animation: ${heroParticleAnimation} 6s ease-out infinite;
  }
  
  &::before {
    left: 20%;
    bottom: 0;
    animation-delay: 0s;
  }
  
  &::after {
    content: '🔥';
    left: 80%;
    bottom: 0;
    animation-delay: 3s;
  }
`;

export default AboutUs;
