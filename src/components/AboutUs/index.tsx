import { motion } from 'framer-motion';
import { FaDumbbell, FaClipboardList, FaRobot, FaFire } from 'react-icons/fa';
import styled from 'styled-components';

const AboutUs = () => {
  const textItems = [
    {
      icon: FaDumbbell,
      text: "Mais do que um site, um verdadeiro parceiro de treino."
    },
    {
      icon: FaClipboardList,
      text: "Nada de planos genéricos, tenha uma experiência personalizada."
    },
    {
      icon: FaRobot,
      text: "Com a ajuda de nosso agente IA, nada é impossível."
    },
    {
      icon: FaFire,
      text: "Treinar não precisa ser difícil. Seja bem-vindo ao Gym Buddy!"
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
    <AboutUsContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle>
            Podemos ajudar você a cumprir todas as suas metas
          </HeroTitle>
          <HeroSubtitle>
            Faça parte desse projeto hoje mesmo!
          </HeroSubtitle>
        </motion.div>
      </HeroSection>

      {/* Content Section */}
      <ContentSection>
        <ContentContainer>
          <ContentGrid>
            {/* Left Column - Text Cards */}
            <TextColumn
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ContentCard>
                {textItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                    >
                      <TextItem>
                        <IconWrapper>
                          <IconComponent />
                        </IconWrapper>
                        <ItemText>{item.text}</ItemText>
                      </TextItem>
                    </motion.div>
                  );
                })}
              </ContentCard>
            </TextColumn>

            {/* Right Column - Image */}
            <ImageColumn
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <ImageWrapper>
                <img 
                  src="/images/muscular-man.png" 
                  alt="Homem musculoso treinando"
                />
              </ImageWrapper>
            </ImageColumn>
          </ContentGrid>
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
            <CTAHighlight>GymBuddy</CTAHighlight>
          </CTAText>
        </motion.div>
      </CTASection>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  max-width: 120rem;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: var(--white);
  letter-spacing: -0.02em;
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
  background: linear-gradient(
    135deg,
    rgba(227, 6, 19, 0.05) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(227, 6, 19, 0.05) 100%
  );
`;

const ContentContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const TextColumn = styled(motion.div)`
  order: 1;
`;

const ContentCard = styled.div`
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 4rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const TextItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, var(--primary), #ff0000);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 2rem;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(227, 6, 19, 0.3);
`;

const ItemText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin: 0;
  padding-top: 0.8rem;
`;

const ImageColumn = styled(motion.div)`
  order: 2;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    filter: grayscale(100%) contrast(1.1);
    transition: filter 0.3s ease;
  }
  
  &:hover img {
    filter: grayscale(0%) contrast(1.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.2) 0%,
      transparent 50%,
      rgba(227, 6, 19, 0.1) 100%
    );
    z-index: 1;
    pointer-events: none;
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

const CTAHighlight = styled.span`
  color: var(--primary);
  background: linear-gradient(135deg, var(--primary), #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  position: relative;
  
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

export default AboutUs;
