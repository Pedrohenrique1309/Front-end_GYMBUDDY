import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { FiSearch, FiPlay, FiPause, FiX, FiMusic, FiVolumeX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { buscarMusicas, obterTopCharts, formatarDuracao, temPreview, DeezerTrack } from '../../Services/deezerService'

interface MusicPickerProps {
  isOpen: boolean
  onSelect: (music: DeezerTrack) => void
  onClose: () => void
}

const MusicPicker: React.FC<MusicPickerProps> = ({ isOpen, onSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [musicas, setMusicas] = useState<DeezerTrack[]>([])
  const [carregando, setCarregando] = useState(false)
  const [reproducaoId, setReproducaoId] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Carrega top charts ao abrir ou ao limpar busca
  useEffect(() => {
    if (!isOpen) return

    const carregarMusicas = async () => {
      setCarregando(true)
      let resultados: DeezerTrack[] = []

      if (searchTerm.trim()) {
        resultados = await buscarMusicas(searchTerm, 30)
      } else {
        resultados = await obterTopCharts(30)
      }

      setMusicas(resultados)
      setCarregando(false)
    }

    // Debounce da busca
    const timer = setTimeout(() => {
      carregarMusicas()
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm, isOpen])

  const handleTogglePreview = (musica: DeezerTrack) => {
    if (!temPreview(musica)) {
      console.warn('🎵 Essa música não tem preview disponível')
      return
    }

    if (reproducaoId === musica.id) {
      // Parar reprodução
      audioRef.current?.pause()
      setReproducaoId(null)
    } else {
      // Iniciar reprodução
      if (audioRef.current) {
        audioRef.current.src = musica.preview!
        audioRef.current.play().catch(error => {
          console.error('❌ Erro ao reproduzir preview:', error)
        })
      }
      setReproducaoId(musica.id)
    }
  }

  const handleSelectMusic = (musica: DeezerTrack) => {
    // Parar reprodução ao selecionar
    audioRef.current?.pause()
    setReproducaoId(null)
    
    onSelect(musica)
    console.log('✅ Música selecionada:', musica.title, 'por', musica.artist.name)
  }

  const handleAudioEnded = () => {
    setReproducaoId(null)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <PickerOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <PickerContainer
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <PickerHeader>
            <PickerTitle>🎵 Escolher Música</PickerTitle>
            <CloseButton onClick={onClose}>
              <FiX />
            </CloseButton>
          </PickerHeader>

          <SearchBox>
            <FiSearch />
            <SearchInput
              type="text"
              placeholder="Buscar música, artista ou álbum..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            {searchTerm && (
              <ClearButton onClick={() => setSearchTerm('')}>
                <FiX />
              </ClearButton>
            )}
          </SearchBox>

          <ResultsContainer>
            {carregando && (
              <LoadingState>
                <Spinner />
                <span>Buscando músicas...</span>
              </LoadingState>
            )}

            {!carregando && musicas.length === 0 && (
              <EmptyState>
                <FiMusic />
                <span>
                  {searchTerm.trim()
                    ? 'Nenhuma música encontrada'
                    : 'Não foi possível carregar as músicas'}
                </span>
              </EmptyState>
            )}

            {!carregando && musicas.length > 0 && (
              <MusicList>
                {musicas.map((musica) => (
                  <MusicItem
                    key={musica.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CoverImage
                      src={musica.album.cover_small || musica.album.cover_medium}
                      alt={musica.album.title}
                    />

                    <MusicContentArea>
                      <MusicMainInfo>
                        <MusicTitle title={musica.title}>{musica.title}</MusicTitle>
                        <MusicArtist title={musica.artist.name}>
                          {musica.artist.name}
                        </MusicArtist>
                        <MusicAlbum title={musica.album.title}>
                          {musica.album.title}
                        </MusicAlbum>
                      </MusicMainInfo>

                      <MusicDuration>
                        {formatarDuracao(musica.duration)}
                      </MusicDuration>
                    </MusicContentArea>

                    <MusicActionsBar>
                      {temPreview(musica) ? (
                        <PreviewButton
                          type="button"
                          isPlaying={reproducaoId === musica.id}
                          onClick={() => handleTogglePreview(musica)}
                          title={
                            reproducaoId === musica.id
                              ? 'Parar prévia'
                              : 'Ouvir prévia (30s)'
                          }
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {reproducaoId === musica.id ? (
                            <FiPause />
                          ) : (
                            <FiPlay />
                          )}
                        </PreviewButton>
                      ) : (
                        <PreviewButtonDisabled
                          title="Prévia não disponível"
                        >
                          <FiVolumeX />
                        </PreviewButtonDisabled>
                      )}

                      <SelectButton
                        type="button"
                        onClick={() => handleSelectMusic(musica)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Selecionar
                      </SelectButton>
                    </MusicActionsBar>
                  </MusicItem>
                ))}
              </MusicList>
            )}
          </ResultsContainer>

          {/* Audio player oculto para preview */}
          <audio
            ref={audioRef}
            onEnded={handleAudioEnded}
            crossOrigin="anonymous"
          />
        </PickerContainer>
      </PickerOverlay>
    </AnimatePresence>
  )
}

// Styled Components
const PickerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
`

const PickerContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(25px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  width: 100%;
  max-width: 65rem;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 10px 30px rgba(229, 57, 53, 0.1);

  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 90vh;
    border-radius: 1.5rem;
  }
`

const PickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(229, 57, 53, 0.1), rgba(255, 87, 34, 0.05));
`

const PickerTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #E53935, #FF5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(229, 57, 53, 0.3);
    border-color: rgba(229, 57, 53, 0.5);
    transform: scale(1.1);
  }
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.8rem 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  position: relative;

  svg {
    color: rgba(229, 57, 53, 0.7);
    font-size: 1.8rem;
    flex-shrink: 0;
  }
`

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-primary, white);
  font-size: 1.5rem;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

const ClearButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: rgba(229, 57, 53, 0.8);
    transform: scale(1.1);
  }
`

const ResultsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #E53935, #FF5722);
    border-radius: 4px;

    &:hover {
      background: linear-gradient(135deg, #FF5722, #E53935);
    }
  }
`

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.4rem;
`

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid #E53935;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.3);
  }

  span {
    font-size: 1.4rem;
  }
`

const MusicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1.5rem;
`

const MusicItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.3);
  }
`

const CoverImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.8rem;
  object-fit: cover;
  border: 2px solid rgba(229, 57, 53, 0.2);
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 5rem;
    height: 5rem;
  }
`

const MusicContentArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
  min-width: 0;
`

const MusicMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
  min-width: 0;
`

const MusicTitle = styled.strong`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const MusicArtist = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const MusicAlbum = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const MusicDuration = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.3rem;
  font-weight: 600;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  background: rgba(229, 57, 53, 0.1);
  border-radius: 0.6rem;

  @media (max-width: 640px) {
    display: none;
  }
`

const MusicActionsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`

const PreviewButton = styled(motion.button)<{ isPlaying: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${props => props.isPlaying
    ? 'rgba(229, 57, 53, 0.6)'
    : 'rgba(76, 175, 80, 0.2)'};
  border: 2px solid ${props => props.isPlaying
    ? 'rgba(229, 57, 53, 0.5)'
    : 'rgba(76, 175, 80, 0.4)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.isPlaying ? '#FF5722' : '#4CAF50'};
  font-size: 1.6rem;

  &:hover {
    background: ${props => props.isPlaying
      ? 'rgba(229, 57, 53, 0.8)'
      : 'rgba(76, 175, 80, 0.4)'};
    border-color: ${props => props.isPlaying
      ? 'rgba(229, 57, 53, 0.7)'
      : 'rgba(76, 175, 80, 0.6)'};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`

const PreviewButtonDisabled = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.6rem;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`

const SelectButton = styled(motion.button)`
  background: linear-gradient(135deg, #E53935, #FF5722);
  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(229, 57, 53, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(229, 57, 53, 0.5);
  }

  &:active {
    box-shadow: 0 2px 10px rgba(229, 57, 53, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1.2rem;
  }
`

export default MusicPicker
