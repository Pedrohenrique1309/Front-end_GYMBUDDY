import api from './api'

export interface TreinoPayload {
  id?: string | number
  titulo: string
  descricao?: string
  notas?: string
  data_criacao?: string
  id_usuario?: string | number
  tipo?: string
  duracao_estimada?: number
  nivel?: string
  exercicios?: any[]
}

export interface TreinoResponse {
  status: boolean
  status_code: number
  message?: string
  treino?: TreinoPayload[]
  treinos?: TreinoPayload[]
}

export const inserirTreino = async (dados: TreinoPayload): Promise<TreinoResponse> => {
  try {
    console.log('🚀 Inserindo treino:', dados)
    const response = await api.post('/v1/gymbuddy/treino', dados)
    console.log('✅ Treino inserido com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao inserir treino:', error)
    throw error.response?.data || { message: 'Erro ao inserir treino', status: false }
  }
}

export const atualizarTreino = async (id: string | number, dados: Partial<TreinoPayload>): Promise<TreinoResponse> => {
  try {
    console.log('🔄 Atualizando treino:', id, dados)
    const response = await api.put(`/v1/gymbuddy/treino/${id}`, dados)
    console.log('✅ Treino atualizado com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao atualizar treino:', error)
    throw error.response?.data || { message: 'Erro ao atualizar treino', status: false }
  }
}

export const listarTreinos = async (userId?: string | number): Promise<TreinoResponse> => {
  try {
    console.log('📋 Listando treinos...', userId ? `para usuário ${userId}` : 'todos os treinos')
    
    // Se userId for fornecido, tentar usar como parâmetro de query
    let url = '/v1/gymbuddy/treino'
    if (userId) {
      url += `?id_usuario=${userId}`
    }
    
    const response = await api.get(url)
    console.log('✅ Treinos listados:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao listar treinos:', error)
    throw error.response?.data || { message: 'Erro ao listar treinos', status: false }
  }
}

export const buscarTreino = async (id: string | number): Promise<TreinoResponse> => {
  try {
    console.log('🔍 Buscando treino:', id)
    const response = await api.get(`/v1/gymbuddy/treino/${id}`)
    console.log('✅ Treino encontrado:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao buscar treino:', error)
    throw error.response?.data || { message: 'Erro ao buscar treino', status: false }
  }
}

export const excluirTreino = async (id: string | number): Promise<TreinoResponse> => {
  try {
    console.log('🗑️ Excluindo treino:', id)
    const response = await api.delete(`/v1/gymbuddy/treino/${id}`)
    console.log('✅ Treino excluído com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao excluir treino:', error)
    throw error.response?.data || { message: 'Erro ao excluir treino', status: false }
  }
}

export default {
  inserirTreino,
  atualizarTreino,
  listarTreinos,
  buscarTreino,
  excluirTreino,
}
