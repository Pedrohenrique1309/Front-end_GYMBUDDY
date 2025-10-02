import { useState } from 'react'
import { 
  Publicacao,
  inserirPublicacao,
  atualizarPublicacao,
  listarPublicacoes,
  buscarPublicacao,
  excluirPublicacao
} from '../services/publicationService'

export const usePublicationActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Criar publicação
  const createPublication = async (publicacaoData: Publicacao) => {
    setLoading(true);
    setError(null);
    try {
      const result = await inserirPublicacao(publicacaoData);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao criar publicação');
      setLoading(false);
      throw err;
    }
  };

  // Atualizar publicação
  const updatePublication = async (id: number | string, publicacaoData: Partial<Publicacao>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await atualizarPublicacao(id, publicacaoData);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar publicação');
      setLoading(false);
      throw err;
    }
  };

  // Listar publicações
  const listPublications = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await listarPublicacoes();
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao listar publicações');
      setLoading(false);
      throw err;
    }
  };

  // Buscar publicação
  const getPublication = async (id: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await buscarPublicacao(id);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar publicação');
      setLoading(false);
      throw err;
    }
  };

  // Excluir publicação
  const deletePublication = async (id: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await excluirPublicacao(id);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao excluir publicação');
      setLoading(false);
      throw err;
    }
  };

  return {
    loading,
    error,
    createPublication,
    updatePublication,
    listPublications,
    getPublication,
    deletePublication,
  };
};
