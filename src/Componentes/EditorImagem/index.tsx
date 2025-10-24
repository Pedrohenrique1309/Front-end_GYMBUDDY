import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiX, FiRotateCw, FiCrop, FiSun, FiDroplet, 
  FiEye, FiSliders, FiCheck, FiRotateCcw,
  FiEdit2, FiType
} from 'react-icons/fi'

interface ImageEditorProps {
  isOpen: boolean
  imageUrl: string
  onClose: () => void
  onSave: (editedImageUrl: string) => void
}

const ImageEditor = ({ isOpen, imageUrl, onClose, onSave }: ImageEditorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [editedImage, setEditedImage] = useState(imageUrl)
  const [rotation, setRotation] = useState(0)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)
  const [activeFilter, setActiveFilter] = useState<string>('')
  const [history, setHistory] = useState<string[]>([imageUrl])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [cropMode, setCropMode] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)

  const filters = [
    { name: 'Original', filter: '' },
    { name: 'Vivid', filter: 'contrast(1.4) saturate(1.8)' },
    { name: 'Mono', filter: 'grayscale(1)' },
    { name: 'Dramatic', filter: 'contrast(1.3) brightness(0.8) saturate(1.3)' },
    { name: 'Vintage', filter: 'sepia(0.5) contrast(1.2) brightness(0.9)' },
    { name: 'Cool', filter: 'brightness(1.1) hue-rotate(180deg)' }
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  const applyFilters = () => {
    const filterString = `
      brightness(${brightness}%) 
      contrast(${contrast}%) 
      saturate(${saturation}%)
      ${activeFilter}
    `
    return filterString
  }

  const handleRotate = () => {
    const newRotation = (rotation + 90) % 360
    setRotation(newRotation)
    saveToHistory()
  }

  const saveToHistory = () => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(editedImage)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setEditedImage(history[historyIndex - 1])
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setEditedImage(history[historyIndex + 1])
    }
  }

  const handleSave = async () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const img = new Image()
      img.src = editedImage
      
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        
        // Apply transformations
        ctx.filter = applyFilters()
        ctx.save()
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate((rotation * Math.PI) / 180)
        ctx.drawImage(img, -img.width / 2, -img.height / 2)
        ctx.restore()
        
        // Convert to base64
        const editedImageUrl = canvas.toDataURL('image/jpeg', 0.95)
        onSave(editedImageUrl)
        onClose()
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <EditorOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <EditorContainer
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <EditorHeader>
            <HeaderTitle>Editar Imagem</HeaderTitle>
            <HeaderActions>
              <ActionButton onClick={handleUndo} disabled={historyIndex === 0}>
                <FiRotateCcw /> Desfazer
              </ActionButton>
              <ActionButton onClick={handleRedo} disabled={historyIndex === history.length - 1}>
                <FiRotateCw /> Refazer
              </ActionButton>
              <CloseButton onClick={onClose}>
                <FiX />
              </CloseButton>
            </HeaderActions>
          </EditorHeader>

          <ImageContainer>
            <EditableImage
              src={editedImage}
              style={{
                filter: applyFilters(),
                transform: `rotate(${rotation}deg)`
              }}
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </ImageContainer>

          <ToolsContainer>
            {/* Filters */}
            <ToolSection>
              <SectionTitle>Filtros</SectionTitle>
              <FilterGrid>
                {filters.map((filter) => (
                  <FilterButton
                    key={filter.name}
                    onClick={() => {
                      setActiveFilter(filter.filter)
                      saveToHistory()
                    }}
                    $active={activeFilter === filter.filter}
                  >
                    <FilterPreview 
                      src={imageUrl} 
                      style={{ filter: filter.filter }}
                    />
                    <FilterName>{filter.name}</FilterName>
                  </FilterButton>
                ))}
              </FilterGrid>
            </ToolSection>

            {/* Adjustments */}
            <ToolSection>
              <SectionTitle>Ajustes</SectionTitle>
              <AdjustmentSliders>
                <SliderContainer>
                  <SliderLabel>
                    <FiSun /> Brilho
                  </SliderLabel>
                  <Slider
                    type="range"
                    min="0"
                    max="200"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                  />
                  <SliderValue>{brightness}%</SliderValue>
                </SliderContainer>

                <SliderContainer>
                  <SliderLabel>
                    <FiDroplet /> Contraste
                  </SliderLabel>
                  <Slider
                    type="range"
                    min="0"
                    max="200"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                  />
                  <SliderValue>{contrast}%</SliderValue>
                </SliderContainer>

                <SliderContainer>
                  <SliderLabel>
                    <FiEye /> Saturação
                  </SliderLabel>
                  <Slider
                    type="range"
                    min="0"
                    max="200"
                    value={saturation}
                    onChange={(e) => setSaturation(Number(e.target.value))}
                  />
                  <SliderValue>{saturation}%</SliderValue>
                </SliderContainer>
              </AdjustmentSliders>
            </ToolSection>

            {/* Quick Actions */}
            <QuickActions>
              <QuickActionButton onClick={handleRotate}>
                <FiRotateCw /> Girar
              </QuickActionButton>
              <QuickActionButton onClick={() => setCropMode(!cropMode)}>
                <FiCrop /> Cortar
              </QuickActionButton>
              <QuickActionButton>
                <FiEdit2 /> Desenhar
              </QuickActionButton>
              <QuickActionButton>
                <FiType /> Texto
              </QuickActionButton>
            </QuickActions>
          </ToolsContainer>

          <EditorFooter>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
            <SaveButton onClick={handleSave}>
              <FiCheck /> Salvar Alterações
            </SaveButton>
          </EditorFooter>
        </EditorContainer>
      </EditorOverlay>
    </AnimatePresence>
  )
}

// Styled Components
const EditorOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const EditorContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  width: 100%;
  max-width: 120rem;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const HeaderTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
    color: white;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.8);
  }
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  min-height: 40rem;
  overflow: hidden;
`

const EditableImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
`

const ToolsContainer = styled.div`
  padding: 2rem 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
`

const ToolSection = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`

const FilterGrid = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`

const FilterButton = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: ${props => props.$active ? 'rgba(102, 126, 234, 0.2)' : 'transparent'};
  border: 2px solid ${props => props.$active ? '#667eea' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 8rem;
  
  &:hover {
    border-color: #667eea;
  }
`

const FilterPreview = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 0.5rem;
`

const FilterName = styled.span`
  font-size: 1.2rem;
  color: white;
`

const AdjustmentSliders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const SliderLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1.4rem;
  min-width: 10rem;
  
  svg {
    font-size: 1.6rem;
  }
`

const Slider = styled.input`
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`

const SliderValue = styled.span`
  color: white;
  font-size: 1.4rem;
  min-width: 4rem;
  text-align: right;
`

const QuickActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const QuickActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`

const EditorFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const CancelButton = styled.button`
  padding: 1.2rem 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 1rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`

export default ImageEditor
