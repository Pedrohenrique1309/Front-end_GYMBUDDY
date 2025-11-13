import api from './api'

export interface ExercicioTreinoSeriePayload {
  id?: string | number
  id_treino?: string | number
  id_exercicio?: string | number
  id_serie?: string | number
  // outros campos conforme backend
}

export const inserirExercicioTreinoSerie = async (dados: ExercicioTreinoSeriePayload) => {
  try {
    const response = await api.post('/v1/gymbuddy/exercicio_treino_serie', dados)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao inserir exercicio_treino_serie' }
  }
}

export const atualizarExercicioTreinoSerie = async (id: string | number, dados: Partial<ExercicioTreinoSeriePayload>) => {
  try {
    const response = await api.put(`/v1/gymbuddy/exercicio_treino_serie/${id}`, dados)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar exercicio_treino_serie' }
  }
}

export const listarExercicioTreinoSerie = async () => {
  try {
    const response = await api.get('/v1/gymbuddy/exercicio_treino_serie')
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao listar exercicio_treino_serie' }
  }
}

export const buscarExercicioTreinoSerie = async (id: string | number) => {
  try {
    const response = await api.get(`/v1/gymbuddy/exercicio_treino_serie/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar exercicio_treino_serie' }
  }
}

export const buscarExercicioByTreino = async (id_treino: string | number) => {
  try {
    const response = await api.get(`/v1/gymbuddy/exercicio_treino_serie/exercicio/${id_treino}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar exercicios por treino' }
  }
}

export const excluirExercicioTreinoSerie = async (id: string | number) => {
  try {
    const response = await api.delete(`/v1/gymbuddy/exercicio_treino_serie/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao excluir exercicio_treino_serie' }
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
