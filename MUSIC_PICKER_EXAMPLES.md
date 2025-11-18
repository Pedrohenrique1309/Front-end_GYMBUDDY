/**
 * EXEMPLO DE USO DO MUSIC PICKER EM OUTROS COMPONENTES
 * 
 * Este arquivo mostra como reutilizar o componente MusicPicker
 * em diferentes partes da aplicação.
 */

// ============================================
// EXEMPLO 1: Uso Básico em um Componente
// ============================================

import { useState } from 'react'
import MusicPicker from '../Componentes/MusicPicker'
import { DeezerTrack } from '../Services/deezerService'

export const ExemploUsoBasico = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [musicaSelecionada, setMusicaSelecionada] = useState<DeezerTrack | null>(null)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Escolher Música
      </button>

      {musicaSelecionada && (
        <div>
          <h3>{musicaSelecionada.title}</h3>
          <p>{musicaSelecionada.artist.name}</p>
          <img src={musicaSelecionada.album.cover_small} alt="capa" />
        </div>
      )}

      <MusicPicker
        isOpen={isOpen}
        onSelect={(music) => {
          setMusicaSelecionada(music)
          setIsOpen(false)
        }}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}


// ============================================
// EXEMPLO 2: Com Validação de Tipo de Música
// ============================================

import { useState } from 'react'
import MusicPicker from '../Componentes/MusicPicker'
import { DeezerTrack, temPreview } from '../Services/deezerService'

export const ExemploComValidacao = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [musica, setMusica] = useState<DeezerTrack | null>(null)
  const [erro, setErro] = useState('')

  const handleSelectMusic = (music: DeezerTrack) => {
    // Validar se tem preview
    if (!temPreview(music)) {
      setErro('Esta música não tem prévia disponível')
      return
    }

    // Validar duração máxima (ex: 5 minutos)
    if (music.duration > 300) {
      setErro('A música é muito longa (máximo 5 minutos)')
      return
    }

    setMusica(music)
    setErro('')
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Escolher Música
      </button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {musica && (
        <div>
          <strong>{musica.title}</strong>
          <p>{musica.artist.name}</p>
        </div>
      )}

      <MusicPicker
        isOpen={isOpen}
        onSelect={handleSelectMusic}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}


// ============================================
// EXEMPLO 3: Integração com Formulário
// ============================================

import { useState } from 'react'
import MusicPicker from '../Componentes/MusicPicker'
import { DeezerTrack } from '../Services/deezerService'

interface FormData {
  titulo: string
  descricao: string
  musica?: DeezerTrack
}

export const ExemploFormulario = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    descricao: '',
  })

  const handleSelectMusic = (music: DeezerTrack) => {
    setFormData(prev => ({
      ...prev,
      musica: music
    }))
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Submeter formulário com música selecionada
    const payload = {
      ...formData,
      musica: formData.musica ? {
        id: formData.musica.id,
        titulo: formData.musica.title,
        artista: formData.musica.artist.name,
        capa: formData.musica.album.cover_medium,
      } : null
    }

    console.log('Enviando:', payload)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={formData.titulo}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          titulo: e.target.value
        }))}
      />

      <textarea
        placeholder="Descrição"
        value={formData.descricao}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          descricao: e.target.value
        }))}
      />

      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
        >
          {formData.musica ? 'Trocar Música' : 'Adicionar Música'}
        </button>

        {formData.musica && (
          <div>
            <strong>{formData.musica.title}</strong>
            <p>{formData.musica.artist.name}</p>
            <button
              type="button"
              onClick={() => setFormData(prev => ({
                ...prev,
                musica: undefined
              }))}
            >
              Remover
            </button>
          </div>
        )}
      </div>

      <button type="submit">
        Enviar
      </button>

      <MusicPicker
        isOpen={isOpen}
        onSelect={handleSelectMusic}
        onClose={() => setIsOpen(false)}
      />
    </form>
  )
}


// ============================================
// EXEMPLO 4: Com Hook Customizado
// ============================================

import { useState, useCallback } from 'react'
import MusicPicker from '../Componentes/MusicPicker'
import { DeezerTrack } from '../Services/deezerService'

// Hook customizado para gerenciar seleção de música
const useMusicSelection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [musica, setMusica] = useState<DeezerTrack | null>(null)

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleClose = useCallback(() => setIsOpen(false), [])
  const handleSelect = useCallback((music: DeezerTrack) => {
    setMusica(music)
    setIsOpen(false)
  }, [])
  const handleRemove = useCallback(() => setMusica(null), [])

  return {
    isOpen,
    musica,
    handleOpen,
    handleClose,
    handleSelect,
    handleRemove,
  }
}

// Usando o hook
export const ExemploComHook = () => {
  const { isOpen, musica, handleOpen, handleClose, handleSelect, handleRemove } = useMusicSelection()

  return (
    <>
      <button onClick={handleOpen}>
        Escolher Música
      </button>

      {musica && (
        <div>
          <img src={musica.album.cover_small} alt="capa" />
          <h3>{musica.title}</h3>
          <p>{musica.artist.name}</p>
          <button onClick={handleRemove}>Remover</button>
        </div>
      )}

      <MusicPicker
        isOpen={isOpen}
        onSelect={handleSelect}
        onClose={handleClose}
      />
    </>
  )
}


// ============================================
// EXEMPLO 5: Integração com Context API
// ============================================

import { createContext, useContext, useState } from 'react'
import MusicPicker from '../Componentes/MusicPicker'
import { DeezerTrack } from '../Services/deezerService'

interface MusicContextType {
  musica: DeezerTrack | null
  setMusica: (music: DeezerTrack | null) => void
}

const MusicContext = createContext<MusicContextType | null>(null)

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [musica, setMusica] = useState<DeezerTrack | null>(null)

  return (
    <MusicContext.Provider value={{ musica, setMusica }}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusic deve ser usado dentro de MusicProvider')
  }
  return context
}

// Componente que seleciona música
export const MusicSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setMusica } = useMusic()

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Escolher Música
      </button>

      <MusicPicker
        isOpen={isOpen}
        onSelect={(music) => {
          setMusica(music)
          setIsOpen(false)
        }}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

// Componente que exibe música
export const MusicDisplay = () => {
  const { musica } = useMusic()

  if (!musica) return <p>Nenhuma música selecionada</p>

  return (
    <div>
      <h3>{musica.title}</h3>
      <p>{musica.artist.name}</p>
      <img src={musica.album.cover_small} alt="capa" />
    </div>
  )
}


// ============================================
// EXEMPLO 6: Com Fallback e Loading States
// ============================================

import { useState } from 'react'
import MusicPicker from '../Componentes/MusicPicker'
import { DeezerTrack } from '../Services/deezerService'

export const ExemploComStates = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [musica, setMusica] = useState<DeezerTrack | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSelectMusic = async (music: DeezerTrack) => {
    setIsLoading(true)
    try {
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 500))
      setMusica(music)
      setIsOpen(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        disabled={isLoading}
      >
        {isLoading ? 'Carregando...' : 'Escolher Música'}
      </button>

      {musica ? (
        <div>
          <img 
            src={musica.album.cover_small} 
            alt={musica.title}
            style={{ width: '100px', height: '100px' }}
          />
          <h3>{musica.title}</h3>
          <p>{musica.artist.name}</p>
        </div>
      ) : (
        <p>Selecione uma música para começar</p>
      )}

      <MusicPicker
        isOpen={isOpen}
        onSelect={handleSelectMusic}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}
