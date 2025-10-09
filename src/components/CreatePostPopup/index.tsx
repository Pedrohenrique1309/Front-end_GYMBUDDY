import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiImage, FiHash, FiSend, FiUser } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import DefaultAvatar from '../../assets/default-avatar'

interface CreatePostPopupProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (postData: {
    content: string
    image?: string
    hashtags: string[]
  }) => void
}

const CreatePostPopup = ({ isOpen, onClose, onSubmit }: CreatePostPopupProps) => {
  const { user } = useUser()
  const [content, setContent] = useState('')
  const [image, setImage] = useState<string>('')
  const [hashtags, setHashtags] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Verificar tamanho do arquivo (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Imagem muito grande! Máximo 5MB permitido.')
        return
      }
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!content.trim()) {
      alert('Por favor, adicione um conteúdo ao seu post!')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Processar hashtags
      const hashtagList = hashtags
        .split(' ')
        .filter(tag => tag.trim() && tag.startsWith('#'))
        .map(tag => tag.trim())

      const postData = {
        content: content.trim(),
        image: image || undefined,
        hashtags: hashtagList
      }

      // Chamar função de callback se fornecida
      if (onSubmit) {
        await onSubmit(postData)
      }

      // Limpar formulário
      setContent('')
      setImage('')
      setHashtags('')
      
      // Fechar popup
      onClose()
      
    } catch (error) {
      console.error('Erro ao criar post:', error)
      alert('Erro ao criar post. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (isSubmitting) return
    setContent('')
    setImage('')
    setHashtags('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <PopupOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleClose}
      >
        <PopupContainer
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <PopupHeader>
            <HeaderTitle>Criar novo post</HeaderTitle>
            <CloseButton onClick={handleClose}>
              <FiX />
            </CloseButton>
          </PopupHeader>

          <UserInfo>
            <UserAvatar>
              {user?.foto ? (
                <img src={user.foto} alt={user.nome} />
              ) : (
                <DefaultAvatar size={40} />
              )}
            </UserAvatar>
            <UserDetails>
              <UserName>{user?.nome || 'Usuário'}</UserName>
              <UserNickname>@{user?.nickname || user?.email?.split('@')[0] || 'usuario'}</UserNickname>
            </UserDetails>
          </UserInfo>

          <PostForm onSubmit={handleSubmit}>
            <ContentSection>
              <ContentInput
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="O que você está fazendo na academia hoje? Compartilhe sua experiência..."
                maxLength={500}
                disabled={isSubmitting}
              />
              <CharacterCount $isNearLimit={content.length > 400}>
                {content.length}/500
              </CharacterCount>
            </ContentSection>

            {image && (
              <ImagePreview>
                <img src={image} alt="Preview do post" />
                <RemoveImageButton
                  type="button"
                  onClick={() => setImage('')}
                  disabled={isSubmitting}
                >
                  <FiX />
                </RemoveImageButton>
              </ImagePreview>
            )}

            <HashtagSection>
              <HashtagInput
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                placeholder="#treino #academia #fitness #musculos"
                disabled={isSubmitting}
              />
              <HashtagIcon>
                <FiHash />
              </HashtagIcon>
            </HashtagSection>

            <ActionButtons>
              <ImageUploadButton type="button" disabled={isSubmitting}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="image-upload"
                  disabled={isSubmitting}
                />
                <label htmlFor="image-upload">
                  <FiImage />
                  Adicionar foto
                </label>
              </ImageUploadButton>

              <SubmitButton
                type="submit"
                disabled={isSubmitting || !content.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    Publicando...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Publicar
                  </>
                )}
              </SubmitButton>
            </ActionButtons>
          </PostForm>
        </PopupContainer>
      </PopupOverlay>
    </AnimatePresence>
  )
}

// Styled Components
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
`

const PopupContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  width: 100%;
  max-width: 60rem;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 0 30px rgba(229, 57, 53, 0.05);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(229, 57, 53, 0.5),
      transparent
    );
  }
`

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const HeaderTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
  margin: 0;
  background: linear-gradient(135deg, #E53935, #FF5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(229, 57, 53, 0.3);
    transform: scale(1.05);
    
    svg {
      color: var(--white);
    }
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`

const UserAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(229, 57, 53, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const UserName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white);
`

const UserNickname = styled.span`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
`

const PostForm = styled.form`
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const ContentSection = styled.div`
  position: relative;
`

const ContentInput = styled.textarea`
  width: 100%;
  min-height: 12rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--white);
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(229, 57, 53, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const CharacterCount = styled.div<{ $isNearLimit: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 1.2rem;
  color: ${props => props.$isNearLimit ? '#FF5722' : 'rgba(255, 255, 255, 0.5)'};
  font-weight: 500;
`

const ImagePreview = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    display: block;
  }
`

const RemoveImageButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.6rem;
    color: white;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.8);
    transform: scale(1.1);
  }
`

const HashtagSection = styled.div`
  position: relative;
`

const HashtagInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.5rem 1.8rem 1.5rem 5rem;
  font-size: 1.4rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

const HashtagIcon = styled.div`
  position: absolute;
  left: 1.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(229, 57, 53, 0.7);
  font-size: 1.8rem;
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;
`

const ImageUploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.2rem 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.3);
    color: var(--white);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    label {
      cursor: not-allowed;
    }
  }
`

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #E53935, #FF5722);
  border: none;
  border-radius: 1.2rem;
  padding: 1.4rem 3rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:not(:disabled):hover {
    box-shadow: 0 12px 35px rgba(229, 57, 53, 0.4);
  }
`

const Spinner = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default CreatePostPopup
