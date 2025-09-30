import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiActivity, FiTrendingUp, FiShare2 } from 'react-icons/fi';

const Network = () => {
  return (
    <NetworkContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        <IconWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: 'spring',
            stiffness: 200,
            delay: 0.2
          }}
        >
          <FiShare2 />
        </IconWrapper>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Rede GymBuddy
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Em breve você poderá se conectar com outros membros, compartilhar treinos e acompanhar o progresso da comunidade!
        </Subtitle>
        
        <FeaturesList
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FeatureItem>
            <FiUsers />
            <span>Conecte-se com outros atletas</span>
          </FeatureItem>
          <FeatureItem>
            <FiActivity />
            <span>Compartilhe seus treinos</span>
          </FeatureItem>
          <FeatureItem>
            <FiTrendingUp />
            <span>Acompanhe o progresso da comunidade</span>
          </FeatureItem>
        </FeaturesList>
        
        <ComingSoonBadge
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          Em Desenvolvimento 🚀
        </ComingSoonBadge>
      </ContentWrapper>
    </NetworkContainer>
  );
};

const NetworkContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0A0A 0%, #151515 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rem 2rem 6rem;
`;

const ContentWrapper = styled.div`
  max-width: 80rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const IconWrapper = styled(motion.div)`
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.2) 0%,
    rgba(227, 6, 19, 0.1) 100%
  );
  border: 2px solid rgba(227, 6, 19, 0.3);
  border-radius: 50%;
  
  svg {
    font-size: 6rem;
    color: rgba(227, 6, 19, 0.9);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3.6rem, 6vw, 5.6rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.98);
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, rgba(227, 6, 19, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  max-width: 60rem;
  margin: 0;
`;

const FeaturesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.2rem;
  transition: all 0.3s ease;
  
  svg {
    font-size: 2.4rem;
    color: rgba(227, 6, 19, 0.8);
    flex-shrink: 0;
  }
  
  span {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.85);
    text-align: left;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    transform: translateX(5px);
  }
`;

const ComingSoonBadge = styled(motion.div)`
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.2) 0%,
    rgba(227, 6, 19, 0.1) 100%
  );
  border: 1px solid rgba(227, 6, 19, 0.4);
  border-radius: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-top: 2rem;
`;

export default Network;
