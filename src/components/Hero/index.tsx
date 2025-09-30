import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BRAND } from '../../config/branding';
import { FiChevronRight, FiTrendingUp, FiUsers, FiActivity, FiZap, FiTarget, FiAward } from 'react-icons/fi';

interface HeroProps {
  onOpenSignup?: () => void;
}

const Hero = ({ onOpenSignup }: HeroProps) => {
  const floatingCards = BRAND.floatingCards;

  // Mapeamento de ícones para cada card
  const cardIcons = {
    'progress': FiTrendingUp,
    'users': FiUsers,
    'workouts': FiActivity,
    'ai': FiZap
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
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
              {floatingCards.map((card, index) => {
                const IconComponent = cardIcons[card.id as keyof typeof cardIcons];
                return (
                  <FloatingCardWrap
                    key={card.id}
                    className={card.position}
                    style={{ 
                      ['--rot' as any]: `${card.rotate || 0}deg`, 
                      ['--dur' as any]: `${6 + (index % 5) * 0.3}s`,
                      zIndex: card.zIndex
                    }}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 0,
                      z: 50,
                      transition: { 
                        duration: 0.5,
                        ease: [0.34, 1.56, 0.64, 1], // easeOutBack para bounce suave
                      }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FloatingCard>
                      <div className="card-header">
                        <div className="card-icon">
                          <IconComponent />
                        </div>
                        <span className="category">{card.category}</span>
                      </div>
                      <div className="card-main">
                        <div className="card-stat">{card.stat}</div>
                        <h3 className="card-title">{card.title}</h3>
                      </div>
                      <div className="card-footer">
                        <div className="card-indicators">
                          <FiTarget className="indicator-icon" />
                          <FiAward className="indicator-icon" />
                        </div>
                      </div>
                    </FloatingCard>
                  </FloatingCardWrap>
                );
              })}
            </FloatingCards>
          </ImageContainer>
          <FixedCTA
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={onOpenSignup}
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
  align-items: flex-start; // Muda de center para flex-start para melhor controle
  column-gap: var(--gutter);
  row-gap: 0; // Remove o gap entre linhas
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    align-items: center;
  }
`;

const TextArea = styled(motion.div)`
  grid-column: 2 / span 5;
  max-width: 64rem;
  margin-top: 1rem; // Sobe o texto mais ainda
  position: relative;
  z-index: 1; // Garante que o texto fique atrás da imagem

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    justify-self: center;
    margin-top: 0.5rem;
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
  margin-top: -10rem; // Aumenta a sobreposição da imagem sobre o texto
  z-index: 3; // Garante que a imagem fique sobre o texto
  
  @media (max-width: 1024px) {
    margin-top: -4rem; // Menos sobreposição em mobile
  }

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
    z-index: 10; // Aumenta o z-index para garantir sobreposição
    position: relative;
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
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;

  /* Liquid Glass Design */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 50%,
    rgba(227, 6, 19, 0.1) 100%
  );
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 2rem;
  padding: 2rem 2.4rem;
  min-width: 24rem;
  max-width: 28rem;
  min-height: 20rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  text-align: left;
  pointer-events: auto;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.2),
    inset 0 -1px 0 rgba(0,0,0,0.1),
    0 8px 32px rgba(0,0,0,0.12),
    0 4px 16px rgba(227, 6, 19, 0.1);
  z-index: 2;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(135deg, 
      rgba(255,255,255,0.1) 0%, 
      rgba(255,255,255,0.05) 40%, 
      rgba(255,255,255,0) 60%
    );
    opacity: 0.8;
  }

  &.top-left {
    top: 8%;
    left: -8rem;
  }

  &.bottom-left {
    bottom: 15%;
    left: -6rem;
  }

  &.top-right {
    top: 12%;
    right: -8rem;
  }

  &.bottom-right {
    bottom: 8%;
    right: -6rem;
  }

  &.center-back {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(var(--rot, 0deg));
  }

  @media (max-width: 768px) {
    padding: 1.6rem 1.4rem;
    font-size: 1.1rem;
    min-width: 18rem;
    max-width: 22rem;
    min-height: 18rem;
    
    &.top-left, &.bottom-left, &.top-right, &.bottom-right {
      position: static;
      margin: 1rem 0;
      display: inline-block;
    }
  }
  
  @keyframes card-bob {
    0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
    50% { transform: translateY(-12px) rotate(var(--rot, 0deg)); }
  }
  
  &:hover {
    animation-play-state: paused;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 50%,
      rgba(227, 6, 19, 0.2) 100%
    );
    border-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px) saturate(200%);
    box-shadow:
      inset 0 2px 0 rgba(255,255,255,0.4),
      inset 0 -1px 0 rgba(0,0,0,0.15),
      0 24px 64px rgba(0,0,0,0.3),
      0 12px 32px rgba(227, 6, 19, 0.3),
      0 0 0 1px rgba(227, 6, 19, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const FloatingCard = styled(motion.div)`
  pointer-events: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
  
  .card-icon {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 1rem;
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.2) 0%, 
      rgba(227, 6, 19, 0.1) 100%
    );
    border: 1px solid rgba(227, 6, 19, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(227, 6, 19, 0.9);
    font-size: 1.6rem;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .category {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(255, 255, 255, 0.08);
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  
  .card-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  
  .card-stat {
    font-size: 3.8rem;
    font-weight: 900;
    color: var(--white);
    line-height: 0.9;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
    margin-bottom: 0.8rem;
    background: linear-gradient(135deg, #ffffff 0%, rgba(227, 6, 19, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .card-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
    line-height: 1.3;
    text-shadow: 0 1px 4px rgba(0,0,0,0.3);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .card-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }
  
  .card-indicators {
    display: flex;
    gap: 0.8rem;
  }
  
  .indicator-icon {
    width: 1.6rem;
    height: 1.6rem;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    
    &:hover {
      color: rgba(227, 6, 19, 0.8);
      transform: scale(1.2);
    }
  }
  
  /* Hover effects */
  &:hover .card-icon {
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.4) 0%, 
      rgba(227, 6, 19, 0.3) 100%
    );
    border-color: rgba(227, 6, 19, 0.6);
    color: rgba(227, 6, 19, 1);
    transform: scale(1.2) rotate(8deg);
    box-shadow: 0 8px 24px rgba(227, 6, 19, 0.4);
  }
  
  &:hover .card-stat {
    transform: scale(1.05);
    text-shadow: 0 4px 16px rgba(227, 6, 19, 0.5);
  }
  
  &:hover .card-title {
    transform: translateX(4px);
    color: rgba(255, 255, 255, 1);
  }
`;

export default Hero;

// Fixed Call-To-Action at bottom-right
const FixedCTA = styled(motion.button)`
  position: fixed;
  right: clamp(1.6rem, 2.5vw, 3.2rem);
  bottom: clamp(6rem, 8vw, 8rem); // Sobe o botão mais ainda
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
  overflow: hidden; /* Para evitar que as setas extrapolem o botão */
  
  .arrows {
    display: inline-block;
    position: relative;
    width: calc(var(--arrow-size) * 2.5); /* Largura maior para acomodar as setas separadas */
    height: var(--arrow-size);
    margin-left: 8px;
  }
  
  .arrows .a1,
  .arrows .a2,
  .arrows .a3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-size);
    height: var(--arrow-size);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  /* Estado inicial: setas unidas com leve animação */
  .arrows .a1 { 
    left: 0;
    opacity: 0.6;
    animation: pulse-arrow 2s ease-in-out infinite;
  }
  .arrows .a2 { 
    left: 1px; /* Leve deslocamento para criar profundidade */
    opacity: 0.8;
    animation: pulse-arrow 2s ease-in-out infinite 0.1s;
  }
  .arrows .a3 { 
    left: 2px; /* Leve deslocamento para criar profundidade */
    opacity: 1;
    animation: pulse-arrow 2s ease-in-out infinite 0.2s;
  }
  
  @keyframes pulse-arrow {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
    }
    50% {
      transform: translateY(-50%) translateX(2px);
    }
  }
  
  &:hover {
    background: var(--primary-dark);
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0 0 20px rgba(227, 6, 19, 0.6);
    
    /* Separação das setas no hover com posicionamento correto */
    .arrows .a1 { 
      left: 0;
      opacity: 1;
      animation: none; /* Para a animação */
      transform: translateY(-50%); /* Mantém centralizado */
      transition-delay: 0s;
    }
    .arrows .a2 { 
      left: calc(var(--arrow-size) * 0.7); /* Espaçamento ajustado */
      opacity: 1;
      animation: none; /* Para a animação */
      transform: translateY(-50%); /* Mantém centralizado */
      transition-delay: 0.05s;
    }
    .arrows .a3 { 
      left: calc(var(--arrow-size) * 1.4); /* Espaçamento ajustado */
      opacity: 1;
      animation: none; /* Para a animação */
      transform: translateY(-50%); /* Mantém centralizado */
      transition-delay: 0.1s;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 10px 20px;
  }
`;
