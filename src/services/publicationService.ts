import api from './api';

// Tipos para Publicação
export interface Publicacao {
  id?: number;
  id_usuario: number;
  conteudo: string;
  foto?: string;
  video?: string;
  data_publicacao?: string;
  curtidas?: number;
  comentarios?: number;
}

// Inserir nova publicação
export const inserirPublicacao = async (publicacaoData: Publicacao) => {
  try {
    const response = await api.post('/v1/gymbuddy/publicacao', publicacaoData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao criar publicação' };
  }
};

// Atualizar publicação
export const atualizarPublicacao = async (id: number | string, publicacaoData: Partial<Publicacao>) => {
  try {
    const response = await api.put(`/v1/gymbuddy/publicacao/${id}`, publicacaoData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao atualizar publicação' };
  }
};

// Listar todas as publicações
export const listarPublicacoes = async () => {
  try {
    const response = await api.get('/v1/gymbuddy/publicacao');
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao listar publicações' };
  }
};

// Buscar publicação por ID
export const buscarPublicacao = async (id: number | string) => {
  try {
    const response = await api.get(`/v1/gymbuddy/publicacao/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao buscar publicação' };
  }
};

// Excluir publicação
export const excluirPublicacao = async (id: number | string) => {
  try {
    const response = await api.delete(`/v1/gymbuddy/publicacao/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Erro ao excluir publicação' };
  }
};

export default {
  inserirPublicacao,
  atualizarPublicacao,
  listarPublicacoes,
  buscarPublicacao,
  excluirPublicacao,
};
