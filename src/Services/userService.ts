import api from './api'

// Tipos para Usuario
export interface Usuario {
  id?: number
  nome: string
  email: string
  senha?: string
  foto?: string
  data_nascimento?: string
  username?: string
  nickname?: string
  telefone?: string
  descricao?: string
  biografia?: string
  localizacao?: string
  peso?: number
  altura?: number
  imc?: number
  is_bloqueado?: boolean
}

export interface AtualizarSenhaData {
  email: string
  senha_antiga: string
  senha_nova: string
}

// Inserir novo usuário
export const inserirUsuario = async (userData: Usuario) => {
  try {
    const response = await api.post('/v1/gymbuddy/usuario', userData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao criar usuário' }
  }
}

// Atualizar senha do usuário
export const atualizarSenha = async (senhaData: AtualizarSenhaData) => {
  try {
    const response = await api.put('/v1/gymbuddy/usuario/senha', senhaData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar senha' }
  }
}

// Listar todos os usuários
export const listarUsuarios = async () => {
  try {
    const response = await api.get('/v1/gymbuddy/usuario')
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao listar usuários' }
  }
}

// Buscar usuário por ID
export const buscarUsuario = async (id: number | string) => {
  // Validar ID antes de fazer requisição
  if (!id || (typeof id !== 'number' && typeof id !== 'string') || id === '' || id === '0') {
    console.error('❌ ID inválido em buscarUsuario:', { id, tipo: typeof id, valor: JSON.stringify(id) })
    throw { message: 'ID do usuário inválido' }
  }
  
  // Validar formato - detectar IDs malformados como "1:1"
  const idString = String(id)
  if (idString.includes(':') || idString.includes('undefined') || idString.includes('null')) {
    console.error('❌ ID com formato inválido em buscarUsuario:', { id, idString })
    throw { message: 'ID do usuário com formato inválido' }
  }
  
  try {
    const response = await api.get(`/v1/gymbuddy/usuario/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar usuário' }
  }
};

// Atualizar dados do usuário
export const atualizarUsuario = async (id: number | string, userData: Partial<Usuario>) => {
  // Validar ID antes de fazer requisição
  if (!id || (typeof id !== 'number' && typeof id !== 'string') || id === '' || id === '0') {
    console.error('❌ ID inválido em atualizarUsuario:', { id, tipo: typeof id, valor: JSON.stringify(id) })
    throw { message: 'ID do usuário inválido para atualização' }
  }
  
  // Validar formato - detectar IDs malformados como "1:1"
  const idString = String(id)
  if (idString.includes(':') || idString.includes('undefined') || idString.includes('null')) {
    console.error('❌ ID com formato inválido em atualizarUsuario:', { id, idString })
    throw { message: 'ID do usuário com formato inválido para atualização' }
  }
  
  try {
    const response = await api.put(`/v1/gymbuddy/usuario/${id}`, userData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar usuário' }
  }
}

// Excluir usuário
export const excluirUsuario = async (id: number | string) => {
  // Validar ID antes de fazer requisição
  if (!id || (typeof id !== 'number' && typeof id !== 'string') || id === '' || id === '0') {
    console.error('❌ ID inválido em excluirUsuario:', { id, tipo: typeof id, valor: JSON.stringify(id) })
    throw { message: 'ID do usuário inválido para exclusão' }
  }
  
  // Validar formato - detectar IDs malformados como "1:1"
  const idString = String(id)
  if (idString.includes(':') || idString.includes('undefined') || idString.includes('null')) {
    console.error('❌ ID com formato inválido em excluirUsuario:', { id, idString })
    throw { message: 'ID do usuário com formato inválido para exclusão' }
  }
  
  try {
    const response = await api.delete(`/v1/gymbuddy/usuario/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao excluir usuário' }
  }
};

export default {
  inserirUsuario,
  atualizarSenha,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  excluirUsuario,
}
