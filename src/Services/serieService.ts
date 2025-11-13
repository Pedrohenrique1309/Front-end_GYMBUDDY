import api from './api'

export interface SeriePayload {
  id?: string | number
  id_exercicio?: string | number
  repeticoes?: number
  carga?: number
  ordem?: number
}

export const inserirSerie = async (dados: SeriePayload) => {
  try {
    const response = await api.post('/v1/gymbuddy/serie', dados)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao inserir série' }
  }
}

export const atualizarSerie = async (id: string | number, dados: Partial<SeriePayload>) => {
  try {
    const response = await api.put(`/v1/gymbuddy/serie/${id}`, dados)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar série' }
  }
}

export const listarSeries = async () => {
  try {
    const response = await api.get('/v1/gymbuddy/serie')
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao listar séries' }
  }
}

export const buscarSerie = async (id: string | number) => {
  try {
    const response = await api.get(`/v1/gymbuddy/serie/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar série' }
  }
}

export const buscarSeriePeloExercicio = async (id_exercicio: string | number) => {
  try {
    const response = await api.get(`/v1/gymbuddy/serie/exercicio/${id_exercicio}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar séries por exercício' }
  }
}

export const excluirSerie = async (id: string | number) => {
  try {
    const response = await api.delete(`/v1/gymbuddy/serie/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao excluir série' }
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
