import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BRAND } from '../../config/branding';

const Hero = () => {
  const floatingCards = BRAND.floatingCards;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <HeroSection>
      <div className="container">
        <Content>
          <TextArea
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h1>
              O SEU <span>PARCEIRO</span> DA ACADEMIA PRONTO PARA A AÇÃO
            </h1>
            <motion.div
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vamos começar
            </motion.div>
          </TextArea>

          <ImageContainer
            as={motion.div}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img 
              src={BRAND.heroSrc}
              alt="Homem musculoso" 
              className="hero-image"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src.includes('Sem%20t%C3%ADtulo.png') || img.src.includes('Sem título.png') || img.src.includes('hero.png')) {
                  img.src = '/placeholder.svg';
                }
              }}
            />
            
            <FloatingCards variants={containerVariants} initial="hidden" animate="visible">
              {floatingCards.map((card, index) => (
                <FloatingCard 
                  key={index}
                  className={card.position}
                  style={{ ['--rot' as any]: `${card.rotate || 0}deg` }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {card.text}
                </FloatingCard>
              ))}
            </FloatingCards>
          </ImageContainer>
        </Content>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 12rem 0 6rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  column-gap: var(--gutter);
  row-gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
  }
`;

const TextArea = styled(motion.div)`
  grid-column: 2 / span 5;
  max-width: 64rem;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  h1 {
    font-size: clamp(3.2rem, 5vw, 6.4rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
    color: var(--white);

    span {
      color: var(--primary);
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 10px;
        background: rgba(255, 0, 0, 0.2);
        z-index: -1;
      }
    }

    @media (max-width: 1024px) {
      margin-bottom: 2.4rem;
    }
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    height: 5.6rem;
    padding: 0 3.2rem;
    border-radius: 2.8rem;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.25);
    letter-spacing: 0.01em;

    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px) scale(1.05);
      filter: brightness(1.08);
      box-shadow: 0 18px 44px rgba(227, 6, 19, 0.4);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72vh;
  justify-self: center;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    margin: auto;
    width: clamp(40rem, 46vw, 72rem);
    height: clamp(40rem, 46vw, 72rem);
    background: radial-gradient(50% 50% at 50% 50%, rgba(255,0,0,0.25) 0%, rgba(255,0,0,0.1) 40%, rgba(255,0,0,0) 70%);
    filter: blur(6px);
    z-index: 0;
    transform: translateY(10%);
    pointer-events: none;
  }

  .hero-image {
    width: clamp(40rem, 42vw, 64rem);
    height: auto;
    max-height: 78vh;
    object-fit: contain;
    z-index: 1;
    animation: float 6s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.45));
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;

const FloatingCards = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.5rem;
  padding: 1.5rem 2.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--white);
  text-align: center;
  pointer-events: auto;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 2;
  will-change: transform, opacity;
  animation: card-bob var(----dur, 6s) ease-in-out infinite;

  &.top-left {
    top: 4rem;
    left: -2rem;
    transform: rotate(-6deg);
  }

  &.bottom-left {
    bottom: 8rem;
    left: 2rem;
    transform: rotate(4deg);
  }

  &.top-right {
    top: 6rem;
    right: 2rem;
    transform: rotate(5deg);
  }

  &.bottom-right {
    bottom: 4rem;
    right: -1rem;
    transform: rotate(-4deg);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    
    &.top-left, &.bottom-left, &.top-right, &.bottom-right {
      position: static;
      transform: none;
      margin: 1rem 0;
      display: inline-block;
    }
  }
  
  @keyframes card-bob {
    0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
    50% { transform: translateY(-8px) rotate(var(--rot, 0deg)); }
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.05) rotate(var(--rot, 0deg));
    box-shadow: 0 16px 32px rgba(0,0,0,0.35);
  }
`;

export default Hero;
