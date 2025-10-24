import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { FiX, FiActivity } from 'react-icons/fi'

interface WeightHeightPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { peso: number | null; altura: number | null }) => void;
  onSkip: () => void;
}

const WeightHeightPopup = ({ isOpen, onClose, onSubmit, onSkip }: WeightHeightPopupProps) => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const data = {
      peso: peso ? parseFloat(peso) : null,
      altura: altura ? parseFloat(altura) : null,
    };
    
    await onSubmit(data);
    setLoading(false);
  };

  const handleSkip = () => {
    onSkip();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PopupContainer
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <RequiredIndicator>
              <RequiredDot />
              <RequiredText>Obrigatório</RequiredText>
            </RequiredIndicator>

            <PopupHeader>
              <IconWrapper>
                <FiActivity />
              </IconWrapper>
              <Title>Complete seu Perfil</Title>
              <Subtitle>
                Adicione suas informações físicas para personalizar sua experiência
              </Subtitle>
            </PopupHeader>

            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Peso (kg)</Label>
                <Input
                  type="number"
                  step="0.1"
                  min="0"
                  max="500"
                  placeholder="Ex: 75.5"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <Label>Altura (cm)</Label>
                <Input
                  type="number"
                  step="0.1"
                  min="0"
                  max="300"
                  placeholder="Ex: 175"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </InputGroup>

              <ButtonGroup>
                <SkipButton
                  type="button"
                  onClick={handleSkip}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pular
                </SkipButton>
                <SubmitButton
                  type="submit"
                  disabled={loading || (!peso && !altura)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Salvando...' : 'Salvar'}
                </SubmitButton>
              </ButtonGroup>

              <SkipText>Você pode pular e adicionar depois nas configurações</SkipText>
            </Form>
          </PopupContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  z-index: 99998;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled(motion.div)`
  position: relative;
  width: 90%;
  max-width: 48rem;
  background: linear-gradient(135deg, rgba(25, 25, 30, 0.98), rgba(20, 20, 25, 0.95));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2.4rem;
  padding: 4rem 3rem;
  z-index: 99999;
  box-shadow: 
    0 24px 64px rgba(0, 0, 0, 0.5),
    0 12px 32px rgba(227, 6, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.7);

  svg {
    font-size: 2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 1);
    transform: rotate(90deg);
  }
`;

const PopupHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const IconWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.2), rgba(227, 6, 19, 0.1));
  border: 2px solid rgba(227, 6, 19, 0.3);
  border-radius: 50%;
  
  svg {
    font-size: 4rem;
    color: rgba(227, 6, 19, 0.9);
    animation: pulse-icon 2s ease-in-out infinite;
  }

  @keyframes pulse-icon {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.98);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  max-width: 40rem;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.02em;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.6rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(227, 6, 19, 0.5);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  margin-top: 1rem;
`;

const Button = styled(motion.button)`
  padding: 1.6rem 2rem;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SkipButton = styled(Button)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 1);
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.9), rgba(227, 6, 19, 0.7));
  color: white;
  box-shadow: 0 8px 20px rgba(227, 6, 19, 0.3);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(227, 6, 19, 1), rgba(227, 6, 19, 0.85));
    box-shadow: 0 12px 28px rgba(227, 6, 19, 0.4);
  }
`;

const SkipText = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`;

const RequiredIndicator = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(227, 6, 19, 0.1);
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 2rem;
  padding: 0.8rem 1.6rem;
`;

const RequiredDot = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background: rgba(227, 6, 19, 0.9);
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;

  @keyframes pulse-dot {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }
`;

const RequiredText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(227, 6, 19, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export default WeightHeightPopup;
