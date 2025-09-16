import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BRAND } from '../../config/branding';
import { FiChevronRight } from 'react-icons/fi';

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
              <span className="line no-wrap">
                O SEU <span className="highlight">PARCEIRO</span> DA ACADEMIA
              </span>
              <br className="title-break" />
              <span className="line no-wrap">PRONTO PARA A AÇÃO</span>
            </h1>
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
                if (!img.src.endsWith('/hero-image.png')) {
                  img.src = '/hero-image.png';
                }
              }}
            />
            
            <FloatingCards variants={containerVariants} initial="hidden" animate="visible">
              {floatingCards.map((card, index) => (
                <FloatingCardWrap
                  key={index}
                  className={card.position}
                  style={{ ['--rot' as any]: `${card.rotate || 0}deg`, ['--dur' as any]: `${6 + (index % 4) * 0.3}s` }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <FloatingCard>
                    {card.text}
                  </FloatingCard>
                </FloatingCardWrap>
              ))}
            </FloatingCards>
          </ImageContainer>
          <FixedCTA
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="label">Vamos começar</span>
            <span className="arrows" aria-hidden="true">
              <FiChevronRight className="a1" />
              <FiChevronRight className="a2" />
              <FiChevronRight className="a3" />
            </span>
          </FixedCTA>
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

    .highlight {
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
        background: rgba(227, 6, 19, 0.2);
        z-index: -1;
      }
    }

    .line { display: inline-block; }
    .line.no-wrap { white-space: nowrap; }

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

const FloatingCardWrap = styled(motion.div)`
  position: absolute;
  animation: card-bob var(--dur, 6s) ease-in-out infinite;
  will-change: transform;

  /* Dog tag / medalhão style */
  background: linear-gradient(165deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%);
  backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 2.4rem; /* capsule corners */
  padding: 1.3rem 2.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--white);
  text-align: center;
  pointer-events: auto;
  transition: transform 250ms ease, box-shadow 250ms ease, background 250ms ease, border-color 250ms ease;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.22),
    inset 0 -1px 0 rgba(0,0,0,0.25),
    0 12px 32px rgba(0,0,0,0.28);
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    /* Shine band */
    background: linear-gradient(110deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 60%);
    opacity: 0.5;
  }

  &.top-left {
    top: 4rem;
    left: -2rem;
  }

  &.bottom-left {
    bottom: 8rem;
    left: 2rem;
  }

  &.top-right {
    top: 6rem;
    right: 2rem;
  }

  &.bottom-right {
    bottom: 4rem;
    right: -1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    
    &.top-left, &.bottom-left, &.top-right, &.bottom-right {
      position: static;
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
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.26),
      inset 0 -1px 0 rgba(0,0,0,0.3),
      0 18px 36px rgba(0,0,0,0.35);
  }
`;

const FloatingCard = styled(motion.div)`
  pointer-events: auto;
  text-shadow: 0 1px 0 rgba(0,0,0,0.35);
  letter-spacing: 0.02em;
`;

export default Hero;

// Fixed Call-To-Action at bottom-right
const FixedCTA = styled(motion.button)`
  position: fixed;
  right: clamp(1.6rem, 2.5vw, 3.2rem);
  bottom: clamp(1.6rem, 2.5vw, 3.2rem);
  z-index: 1500;
  --arrow-size: 18px;
  background: var(--primary);
  color: var(--white);
  font-weight: 800;
  font-size: 1.6rem;
  border: none;
  border-radius: 25px;
  height: auto;
  padding: 12px 32px;
  box-shadow: 0 12px 28px rgba(227, 6, 19, 0.35);
  letter-spacing: 0.02em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  
  .arrows {
    display: inline-block;
    position: relative;
    width: var(--arrow-size);
    height: var(--arrow-size);
    margin-left: -4px; /* slight left nudge */
  }
  .arrows .a1,
  .arrows .a2,
  .arrows .a3 {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--arrow-size);
    height: var(--arrow-size);
    transition: transform 0.4s ease-out, opacity 0.3s ease-out;
  }
  
  &:hover {
    background: var(--primary-dark);
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0 0 20px rgba(227, 6, 19, 0.6);
    
    /* staggered separation */
    .arrows .a1 { transform: translateX(10px); transition-delay: 0s; }
    .arrows .a2 { transform: translateX(20px); transition-delay: 0.1s; }
    .arrows .a3 { transform: translateX(30px); transition-delay: 0.2s; }
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 10px 20px;
  }
`;
