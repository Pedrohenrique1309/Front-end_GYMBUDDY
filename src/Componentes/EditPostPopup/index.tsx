import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEdit3, FiX, FiMapPin, FiImage, FiSave } from 'react-icons/fi';

interface Post {
  id: number;
  image: string;
  description: string;
  location: string;
  hashtags: string[];
  likes: number;
  comments: number;
}

interface EditPostPopupProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
  onSave: (updatedPost: Partial<Post>) => void;
  isLoading?: boolean;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
`;

const PopupContainer = styled(motion.div)`
  position: relative;
  background: linear-gradient(145deg, rgba(15, 15, 15, 0.95), rgba(25, 25, 25, 0.98));
  backdrop-filter: blur(25px) saturate(160%);
  -webkit-backdrop-filter: blur(25px) saturate(160%);
  border-radius: 24px;
  border: 1px solid rgba(227, 6, 19, 0.2);
  padding: 0;
  max-width: 520px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.6),
    0 15px 40px rgba(227, 6, 19, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.03) 40%,
      transparent 60%,
      rgba(227, 6, 19, 0.03) 100%
    );
    pointer-events: none;
  }
`;

const Header = styled.div`
  position: relative;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.05), rgba(227, 6, 19, 0.02));
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
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
    font-size: 1.1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    font-size: 1.3rem;
    color: rgba(227, 6, 19, 0.8);
  }
`;

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 60vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(227, 6, 19, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(227, 6, 19, 0.5);
    }
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const ImagePreview = styled.div<{ hasImage: boolean }>`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background: ${props => props.hasImage 
    ? 'transparent' 
    : 'linear-gradient(135deg, rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.6))'
  };
  border: 2px dashed ${props => props.hasImage 
    ? 'transparent' 
    : 'rgba(227, 6, 19, 0.3)'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.hasImage 
      ? 'rgba(227, 6, 19, 0.5)' 
      : 'rgba(227, 6, 19, 0.6)'
    };
    transform: translateY(-2px);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
`;

const ImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  
  svg {
    font-size: 2rem;
    opacity: 0.7;
  }
  
  span {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1rem;
    color: rgba(227, 6, 19, 0.7);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(20, 20, 20, 0.8);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  resize: vertical;
  transition: all 0.2s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(20, 20, 20, 0.9);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(20, 20, 20, 0.8);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  transition: all 0.2s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(20, 20, 20, 0.9);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Footer = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const ActionButton = styled(motion.button)<{ variant: 'save' | 'cancel' }>`
  height: 48px;
  padding: 0 2rem;
  border-radius: 12px;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 120px;
  
  ${props => props.variant === 'save' ? `
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
  
  &:hover {
    transform: translateY(-2px);
    
    ${props => props.variant === 'save' ? `
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
    font-size: 1rem;
  }
`;

const LoadingSpinner = styled(motion.div)`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CharacterCount = styled.span<{ isOver: boolean }>`
  font-size: 0.8rem;
  color: ${props => props.isOver ? 'rgba(227, 6, 19, 0.8)' : 'rgba(255, 255, 255, 0.5)'};
  text-align: right;
  margin-top: 0.25rem;
`;

export const EditPostPopup: React.FC<EditPostPopupProps> = ({
  isOpen,
  onClose,
  post,
  onSave,
  isLoading = false
}) => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (post && isOpen) {
      setDescription(post.description || '');
      setLocation(post.location || '');
      setSelectedImage(post.image || '');
    }
  }, [post, isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSave = () => {
    if (!post) return;
    
    const updatedPost = {
      id: post.id,
      descricao: description.trim(),
      localizacao: location.trim(),
      imagem: selectedImage
    };
    
    onSave(updatedPost);
  };

  const isFormValid = description.trim().length > 0 && location.trim().length > 0;
  const descriptionLength = description.length;
  const locationLength = location.length;
  const maxDescriptionLength = 500;
  const maxLocationLength = 100;

  return (
    <AnimatePresence>
      {isOpen && post && (
        <Overlay
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(15px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          onClick={handleOverlayClick}
        >
          <PopupContainer
            initial={{ 
              scale: 0.85, 
              opacity: 0, 
              y: 60,
              filter: 'blur(15px)'
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
              y: 40,
              filter: 'blur(8px)'
            }}
            transition={{ 
              duration: 0.4, 
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1
            }}
          >
            <Header>
              <CloseButton
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FiX />
              </CloseButton>

              <Title>
                <FiEdit3 />
                Editar Publicação
              </Title>
            </Header>

            <Content>
              <ImageSection>
                <Label>
                  <FiImage />
                  Imagem da Publicação
                </Label>
                <ImagePreview hasImage={!!selectedImage}>
                  {selectedImage ? (
                    <img src={selectedImage} alt="Preview" />
                  ) : (
                    <ImagePlaceholder>
                      <FiImage />
                      <span>Nenhuma imagem selecionada</span>
                    </ImagePlaceholder>
                  )}
                </ImagePreview>
              </ImageSection>

              <InputGroup>
                <Label>Descrição</Label>
                <TextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Conte sobre sua publicação..."
                  maxLength={maxDescriptionLength}
                />
                <CharacterCount isOver={descriptionLength > maxDescriptionLength}>
                  {descriptionLength}/{maxDescriptionLength}
                </CharacterCount>
              </InputGroup>

              <InputGroup>
                <Label>
                  <FiMapPin />
                  Localização
                </Label>
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Onde foi tirada esta foto?"
                  maxLength={maxLocationLength}
                />
                <CharacterCount isOver={locationLength > maxLocationLength}>
                  {locationLength}/{maxLocationLength}
                </CharacterCount>
              </InputGroup>
            </Content>

            <Footer>
              <ActionButton
                variant="cancel"
                onClick={onClose}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancelar
              </ActionButton>
              
              <ActionButton
                variant="save"
                onClick={handleSave}
                disabled={isLoading || !isFormValid}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <FiSave />
                    Salvar
                  </>
                )}
              </ActionButton>
            </Footer>
          </PopupContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
