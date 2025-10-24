import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiX } from 'react-icons/fi';

interface ConfirmDeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
`;

const PopupContainer = styled(motion.div)`
  position: relative;
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.95), rgba(30, 30, 30, 0.98));
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border-radius: 20px;
  border: 1px solid rgba(227, 6, 19, 0.2);
  padding: 3rem 2.5rem 2.5rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 10px 30px rgba(227, 6, 19, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.03) 40%,
      transparent 60%,
      rgba(227, 6, 19, 0.02) 100%
    );
    pointer-events: none;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const IconContainer = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.15), rgba(227, 6, 19, 0.25));
  border: 2px solid rgba(227, 6, 19, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(227, 6, 19, 0.3), transparent 70%);
    filter: blur(8px);
    z-index: -1;
    animation: pulseGlow 2s ease-in-out infinite;
  }
  
  svg {
    font-size: 2.2rem;
    color: rgba(227, 6, 19, 0.9);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
  
  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  margin: 0 0 1rem;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  line-height: 1.5;
  margin: 0 0 2.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ActionButton = styled(motion.button)<{ variant: 'confirm' | 'cancel' }>`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  ${props => props.variant === 'confirm' ? `
    background: linear-gradient(135deg, rgba(227, 6, 19, 0.8), rgba(200, 5, 17, 0.9));
    color: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(227, 6, 19, 0.6);
    box-shadow: 
      0 4px 16px rgba(227, 6, 19, 0.3),
      0 2px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  ` : `
    background: linear-gradient(135deg, rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.9));
    color: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.2),
      0 2px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.variant === 'confirm' 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent)'
    };
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    
    ${props => props.variant === 'confirm' ? `
      box-shadow: 
        0 8px 24px rgba(227, 6, 19, 0.4),
        0 4px 12px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      background: linear-gradient(135deg, rgba(227, 6, 19, 0.9), rgba(200, 5, 17, 1));
    ` : `
      box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
      background: linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(60, 60, 60, 1));
    `}
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const LoadingSpinner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ConfirmDeletePopup: React.FC<ConfirmDeletePopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          onClick={handleOverlayClick}
        >
          <PopupContainer
            initial={{ 
              scale: 0.8, 
              opacity: 0, 
              y: 50,
              filter: 'blur(10px)'
            }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            exit={{ 
              scale: 0.9, 
              opacity: 0, 
              y: 30,
              filter: 'blur(5px)'
            }}
            transition={{ 
              duration: 0.4, 
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1
            }}
          >
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FiX />
            </CloseButton>

            <IconContainer
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <FiTrash2 />
            </IconContainer>

            <Title>Excluir Publicação</Title>
            <Description>
              Tem certeza que deseja excluir esta publicação? Esta ação não pode ser desfeita.
            </Description>

            <ButtonContainer>
              <ActionButton
                variant="cancel"
                onClick={onClose}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Cancelar
              </ActionButton>
              
              <ActionButton
                variant="confirm"
                onClick={onConfirm}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <FiTrash2 />
                    Excluir
                  </>
                )}
              </ActionButton>
            </ButtonContainer>
          </PopupContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
