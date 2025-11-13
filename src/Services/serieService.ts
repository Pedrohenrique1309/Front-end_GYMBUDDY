import api from './api'

export interface SeriePayload {
  id?: string | number
  id_exercicio?: string | number
  repeticoes?: number
  carga?: number
  tempo_descanso?: number
  ordem?: number
  observacoes?: string
}

export interface SerieResponse {
  status: boolean
  status_code: number
  message?: string
  serie?: SeriePayload[]
  series?: SeriePayload[]
}

export const inserirSerie = async (dados: SeriePayload): Promise<SerieResponse> => {
  try {
    console.log('🚀 Inserindo série:', dados)
    const response = await api.post('/v1/gymbuddy/serie', dados)
    console.log('✅ Série inserida com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao inserir série:', error)
    throw error.response?.data || { message: 'Erro ao inserir série', status: false }
  }
}

export const atualizarSerie = async (id: string | number, dados: Partial<SeriePayload>): Promise<SerieResponse> => {
  try {
    console.log('🔄 Atualizando série:', id, dados)
    const response = await api.put(`/v1/gymbuddy/serie/${id}`, dados)
    console.log('✅ Série atualizada com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao atualizar série:', error)
    throw error.response?.data || { message: 'Erro ao atualizar série', status: false }
  }
}

export const listarSeries = async (): Promise<SerieResponse> => {
  try {
    console.log('📋 Listando séries...')
    const response = await api.get('/v1/gymbuddy/serie')
    console.log('✅ Séries listadas:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao listar séries:', error)
    throw error.response?.data || { message: 'Erro ao listar séries', status: false }
  }
}

export const buscarSerie = async (id: string | number): Promise<SerieResponse> => {
  try {
    console.log('🔍 Buscando série:', id)
    const response = await api.get(`/v1/gymbuddy/serie/${id}`)
    console.log('✅ Série encontrada:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao buscar série:', error)
    throw error.response?.data || { message: 'Erro ao buscar série', status: false }
  }
}

export const buscarSeriePeloExercicio = async (id_exercicio: string | number): Promise<SerieResponse> => {
  try {
    console.log('🔍 Buscando séries por exercício:', id_exercicio)
    const response = await api.get(`/v1/gymbuddy/serie/exercicio/${id_exercicio}`)
    console.log('✅ Séries encontradas para o exercício:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao buscar séries por exercício:', error)
    throw error.response?.data || { message: 'Erro ao buscar séries por exercício', status: false }
  }
}

export const excluirSerie = async (id: string | number): Promise<SerieResponse> => {
  try {
    console.log('🗑️ Excluindo série:', id)
    const response = await api.delete(`/v1/gymbuddy/serie/${id}`)
    console.log('✅ Série excluída com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao excluir série:', error)
    throw error.response?.data || { message: 'Erro ao excluir série', status: false }
  }
}

export default {
  inserirSerie,
  atualizarSerie,
  listarSeries,
  buscarSerie,
  buscarSeriePeloExercicio,
  excluirSerie,
}
