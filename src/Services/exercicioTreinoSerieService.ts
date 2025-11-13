import api from './api'

export interface ExercicioTreinoSeriePayload {
  id?: string | number
  id_treino?: string | number
  id_exercicio?: string | number
  id_serie?: string | number
  ordem?: number
  observacoes?: string
}

export interface ExercicioTreinoSerieResponse {
  status: boolean
  status_code: number
  message?: string
  exercicio_treino_serie?: ExercicioTreinoSeriePayload[]
  exercicios_treino_serie?: ExercicioTreinoSeriePayload[]
}

export const inserirExercicioTreinoSerie = async (dados: ExercicioTreinoSeriePayload): Promise<ExercicioTreinoSerieResponse> => {
  try {
    console.log('🚀 Inserindo exercício-treino-série:', dados)
    const response = await api.post('/v1/gymbuddy/exercicio_treino_serie', dados)
    console.log('✅ Exercício-treino-série inserido com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao inserir exercício-treino-série:', error)
    throw error.response?.data || { message: 'Erro ao inserir exercício-treino-série', status: false }
  }
}

export const atualizarExercicioTreinoSerie = async (id: string | number, dados: Partial<ExercicioTreinoSeriePayload>): Promise<ExercicioTreinoSerieResponse> => {
  try {
    console.log('🔄 Atualizando exercício-treino-série:', id, dados)
    const response = await api.put(`/v1/gymbuddy/exercicio_treino_serie/${id}`, dados)
    console.log('✅ Exercício-treino-série atualizado com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao atualizar exercício-treino-série:', error)
    throw error.response?.data || { message: 'Erro ao atualizar exercício-treino-série', status: false }
  }
}

export const listarExercicioTreinoSerie = async (): Promise<ExercicioTreinoSerieResponse> => {
  try {
    console.log('📋 Listando exercícios-treino-série...')
    const response = await api.get('/v1/gymbuddy/exercicio_treino_serie')
    console.log('✅ Exercícios-treino-série listados:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao listar exercícios-treino-série:', error)
    throw error.response?.data || { message: 'Erro ao listar exercícios-treino-série', status: false }
  }
}

export const buscarExercicioTreinoSerie = async (id: string | number): Promise<ExercicioTreinoSerieResponse> => {
  try {
    console.log('🔍 Buscando exercício-treino-série:', id)
    const response = await api.get(`/v1/gymbuddy/exercicio_treino_serie/${id}`)
    console.log('✅ Exercício-treino-série encontrado:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao buscar exercício-treino-série:', error)
    throw error.response?.data || { message: 'Erro ao buscar exercício-treino-série', status: false }
  }
}

export const buscarExercicioByTreino = async (id_treino: string | number): Promise<ExercicioTreinoSerieResponse> => {
  try {
    console.log('🔍 Buscando exercícios por treino:', id_treino)
    const response = await api.get(`/v1/gymbuddy/exercicio_treino_serie/exercicio/${id_treino}`)
    console.log('✅ Exercícios encontrados para o treino:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao buscar exercícios por treino:', error)
    throw error.response?.data || { message: 'Erro ao buscar exercícios por treino', status: false }
  }
}

export const excluirExercicioTreinoSerie = async (id: string | number): Promise<ExercicioTreinoSerieResponse> => {
  try {
    console.log('🗑️ Excluindo exercício-treino-série:', id)
    const response = await api.delete(`/v1/gymbuddy/exercicio_treino_serie/${id}`)
    console.log('✅ Exercício-treino-série excluído com sucesso:', response.data)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao excluir exercício-treino-série:', error)
    throw error.response?.data || { message: 'Erro ao excluir exercício-treino-série', status: false }
  }
}

export default {
  inserirExercicioTreinoSerie,
  atualizarExercicioTreinoSerie,
  listarExercicioTreinoSerie,
  buscarExercicioTreinoSerie,
  buscarExercicioByTreino,
  excluirExercicioTreinoSerie,
}
