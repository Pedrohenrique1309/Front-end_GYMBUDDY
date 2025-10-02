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
  telefone?: string
  biografia?: string
  peso?: number
  altura?: number
}

export interface AtualizarSenhaData {
  email: string;
  senha_antiga: string;
  senha_nova: string;
}

// Inserir novo usuário
export const inserirUsuario = async (userData: Usuario) => {
  try {
    const response = await api.post('/v1/gymbuddy/usuario', userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao criar usuário' };
  }
};

// Atualizar senha do usuário
export const atualizarSenha = async (senhaData: AtualizarSenhaData) => {
  try {
    const response = await api.put('/v1/gymbuddy/usuario/senha', senhaData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar senha' };
  }
};

// Listar todos os usuários
export const listarUsuarios = async () => {
  try {
    const response = await api.get('/v1/gymbuddy/usuario');
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao listar usuários' };
  }
};

// Buscar usuário por ID
export const buscarUsuario = async (id: number | string) => {
  try {
    const response = await api.get(`/v1/gymbuddy/usuario/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar usuário' };
  }
};

// Atualizar dados do usuário
export const atualizarUsuario = async (id: number | string, userData: Partial<Usuario>) => {
  try {
    const response = await api.put(`/v1/gymbuddy/usuario/${id}`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar usuário' };
  }
};

// Excluir usuário
export const excluirUsuario = async (id: number | string) => {
  try {
    const response = await api.delete(`/v1/gymbuddy/usuario/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao excluir usuário' };
  }
};

export default {
  inserirUsuario,
  atualizarSenha,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
