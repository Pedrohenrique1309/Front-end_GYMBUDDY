/**
 * Serviço de integração com API do Deezer
 * Fornece funções para buscar, pesquisar e gerenciar músicas
 * Usa proxy codetabs.com para contornar CORS
 */

const DEEZER_API_BASE = 'https://api.deezer.com'
const PROXY_URL = 'https://api.codetabs.com/v1/proxy'

/**
 * Monta URL com proxy para contornar CORS
 * @param apiUrl - URL da API do Deezer
 * @returns URL com proxy
 */
const criarUrlComProxy = (apiUrl: string): string => {
  return `${PROXY_URL}?quest=${encodeURIComponent(apiUrl)}`
}

export interface DeezerTrack {
  id: number
  title: string
  duration: number
  preview?: string
  rank?: number
  artist: {
    id: number
    name: string
    picture?: string
    picture_small?: string
    picture_medium?: string
    picture_big?: string
    picture_xl?: string
  }
  album: {
    id: number
    title: string
    cover?: string
    cover_small?: string
    cover_medium?: string
    cover_big?: string
    cover_xl?: string
  }
}

export interface DeezerSearchResponse {
  data: DeezerTrack[]
  total?: number
  next?: string
}

export interface DeezerChartResponse {
  tracks?: {
    data: DeezerTrack[]
  }
  albums?: {
    data: any[]
  }
  artists?: {
    data: any[]
  }
}

/**
 * Busca músicas no Deezer
 * @param query - Termo de busca (artista, música, álbum)
 * @param limit - Número máximo de resultados (padrão 50)
 * @returns Lista de músicas encontradas
 */
export const buscarMusicas = async (
  query: string,
  limit: number = 50
): Promise<DeezerTrack[]> => {
  try {
    if (!query.trim()) {
      return []
    }

    const apiUrl = `${DEEZER_API_BASE}/search?q=${encodeURIComponent(query)}&limit=${limit}`
    const urlComProxy = criarUrlComProxy(apiUrl)
    console.log('🎵 [Deezer] Buscando:', query)

    const response = await fetch(urlComProxy)

    if (!response.ok) {
      throw new Error(`Erro na API do Deezer: ${response.status}`)
    }

    const data: DeezerSearchResponse = await response.json()
    console.log(`🎵 [Deezer] Encontrados ${data.data?.length || 0} resultados`)

    return data.data || []
  } catch (error) {
    console.error('❌ [Deezer] Erro ao buscar músicas:', error)
    return []
  }
}

/**
 * Obtém os charts (Top Charts) do Deezer
 * @param limit - Número máximo de resultados (padrão 50)
 * @returns Lista de músicas mais populares
 */
export const obterTopCharts = async (limit: number = 50): Promise<DeezerTrack[]> => {
  try {
    const apiUrl = `${DEEZER_API_BASE}/chart/0/tracks?limit=${limit}`
    const urlComProxy = criarUrlComProxy(apiUrl)
    console.log('🎵 [Deezer] Carregando Top Charts')

    const response = await fetch(urlComProxy)

    if (!response.ok) {
      throw new Error(`Erro na API do Deezer: ${response.status}`)
    }

    const data = await response.json()
    console.log(`🎵 [Deezer] Carregados ${data.data?.length || 0} top charts`)

    return data.data || []
  } catch (error) {
    console.error('❌ [Deezer] Erro ao carregar charts:', error)
    return []
  }
}

/**
 * Busca um artista no Deezer
 * @param query - Nome do artista
 * @param limit - Número máximo de resultados
 * @returns Lista de artistas encontrados
 */
export const buscarArtistas = async (
  query: string,
  limit: number = 30
): Promise<any[]> => {
  try {
    if (!query.trim()) {
      return []
    }

    const apiUrl = `${DEEZER_API_BASE}/search/artist?q=${encodeURIComponent(query)}&limit=${limit}`
    const urlComProxy = criarUrlComProxy(apiUrl)
    console.log('🎤 [Deezer] Buscando artista:', query)

    const response = await fetch(urlComProxy)

    if (!response.ok) {
      throw new Error(`Erro na API do Deezer: ${response.status}`)
    }

    const data = await response.json()
    console.log(`🎤 [Deezer] Encontrados ${data.data?.length || 0} artistas`)

    return data.data || []
  } catch (error) {
    console.error('❌ [Deezer] Erro ao buscar artistas:', error)
    return []
  }
}

/**
 * Busca um álbum no Deezer
 * @param query - Nome do álbum
 * @param limit - Número máximo de resultados
 * @returns Lista de álbuns encontrados
 */
export const buscarAlbuns = async (
  query: string,
  limit: number = 30
): Promise<any[]> => {
  try {
    if (!query.trim()) {
      return []
    }

    const apiUrl = `${DEEZER_API_BASE}/search/album?q=${encodeURIComponent(query)}&limit=${limit}`
    const urlComProxy = criarUrlComProxy(apiUrl)
    console.log('💿 [Deezer] Buscando álbum:', query)

    const response = await fetch(urlComProxy)

    if (!response.ok) {
      throw new Error(`Erro na API do Deezer: ${response.status}`)
    }

    const data = await response.json()
    console.log(`💿 [Deezer] Encontrados ${data.data?.length || 0} álbuns`)

    return data.data || []
  } catch (error) {
    console.error('❌ [Deezer] Erro ao buscar álbuns:', error)
    return []
  }
}

/**
 * Obtém detalhes de uma música específica
 * @param trackId - ID da música no Deezer
 * @returns Dados da música
 */
export const obterDetalhesMusica = async (trackId: number): Promise<DeezerTrack | null> => {
  try {
    const apiUrl = `${DEEZER_API_BASE}/track/${trackId}`
    const urlComProxy = criarUrlComProxy(apiUrl)
    console.log('🎵 [Deezer] Obtendo detalhes da música:', trackId)

    const response = await fetch(urlComProxy)

    if (!response.ok) {
      throw new Error(`Erro na API do Deezer: ${response.status}`)
    }

    const data: DeezerTrack = await response.json()
    console.log('🎵 [Deezer] Detalhes obtidos:', data.title)

    return data
  } catch (error) {
    console.error('❌ [Deezer] Erro ao obter detalhes da música:', error)
    return null
  }
}

/**
 * Formata a duração em segundos para formato legível (mm:ss)
 * @param segundos - Duração em segundos
 * @returns String formatada (ex: "3:45")
 */
export const formatarDuracao = (segundos: number): string => {
  const minutos = Math.floor(segundos / 60)
  const restante = segundos % 60
  return `${minutos}:${restante.toString().padStart(2, '0')}`
}

/**
 * Valida se a música tem preview disponível
 * @param musica - Dados da música
 * @returns true se tem preview, false caso contrário
 */
export const temPreview = (musica: DeezerTrack): boolean => {
  return !!musica.preview && musica.preview.trim() !== ''
}
