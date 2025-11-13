import api from './api'

export interface ExercicioPayload {
  id?: string | number
  nome: string
  descricao?: string
  grupo_muscular?: string
  tipo?: string
  equipamento?: string
  nivel_dificuldade?: string
  instrucoes?: string
  observacoes?: string
  gif?: string
  imagem?: string
  url_gif?: string
  gif_url?: string
}

export interface ExercicioResponse {
  status: boolean
  status_code: number
  message?: string
  exercicio?: ExercicioPayload[]
  exercicios?: ExercicioPayload[]
}

export const inserirExercicio = async (dados: ExercicioPayload): Promise<ExercicioResponse> => {
  try {
    const response = await api.post('/v1/gymbuddy/exercicio', dados)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao inserir exercício:', error)
    throw error.response?.data || { message: 'Erro ao inserir exercício', status: false }
  }
}

export const atualizarExercicio = async (id: string | number, dados: Partial<ExercicioPayload>): Promise<ExercicioResponse> => {
  try {
    const response = await api.put(`/v1/gymbuddy/exercicio/${id}`, dados)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao atualizar exercício:', error)
    throw error.response?.data || { message: 'Erro ao atualizar exercício', status: false }
  }
}

export const listarExercicios = async (): Promise<ExercicioResponse> => {
  try {
    const response = await api.get('/v1/gymbuddy/exercicio')
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao listar exercícios:', error)
    throw error.response?.data || { message: 'Erro ao listar exercícios', status: false }
  }
}

export const buscarExercicio = async (id: string | number): Promise<ExercicioResponse> => {
  try {
    const response = await api.get(`/v1/gymbuddy/exercicio/${id}`)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao buscar exercício:', error)
    throw error.response?.data || { message: 'Erro ao buscar exercício', status: false }
  }
}

export const excluirExercicio = async (id: string | number): Promise<ExercicioResponse> => {
  try {
    const response = await api.delete(`/v1/gymbuddy/exercicio/${id}`)
    return response.data
  } catch (error: any) {
    console.error('❌ Erro ao excluir exercício:', error)
    throw error.response?.data || { message: 'Erro ao excluir exercício', status: false }
  }
}
