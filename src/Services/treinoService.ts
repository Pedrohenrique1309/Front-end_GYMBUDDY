import api from './api'

export interface TreinoPayload {
  id?: string | number
  titulo: string
  notas?: string
  // outros campos dependendo do backend
  exercicios?: any[]
}

export const inserirTreino = async (dados: TreinoPayload) => {
  try {
    const response = await api.post('/v1/gymbuddy/treino', dados)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao inserir treino' }
  }
}

export const atualizarTreino = async (id: string | number, dados: Partial<TreinoPayload>) => {
  try {
    const response = await api.put(`/v1/gymbuddy/treino/${id}`, dados)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar treino' }
  }
}

export const listarTreinos = async () => {
  try {
    const response = await api.get('/v1/gymbuddy/treino')
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao listar treinos' }
  }
}

export const buscarTreino = async (id: string | number) => {
  try {
    const response = await api.get(`/v1/gymbuddy/treino/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar treino' }
  }
}

export const excluirTreino = async (id: string | number) => {
  try {
    const response = await api.delete(`/v1/gymbuddy/treino/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao excluir treino' }
  }
}

export default {
  inserirTreino,
  atualizarTreino,
  listarTreinos,
  buscarTreino,
  excluirTreino,
}
