import { useState } from 'react'
import { 
  Usuario, 
  AtualizarSenhaData,
  inserirUsuario,
  atualizarSenha,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  excluirUsuario
} from '../services/userService'

export const useUserActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Criar usuário
  const createUser = async (userData: Usuario) => {
    setLoading(true);
    setError(null);
    try {
      const result = await inserirUsuario(userData);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao criar usuário');
      setLoading(false);
      throw err;
    }
  };

  // Atualizar senha
  const updatePassword = async (senhaData: AtualizarSenhaData) => {
    setLoading(true);
    setError(null);
    try {
      const result = await atualizarSenha(senhaData);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar senha');
      setLoading(false);
      throw err;
    }
  };

  // Listar usuários
  const listUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await listarUsuarios();
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao listar usuários');
      setLoading(false);
      throw err;
    }
  };

  // Buscar usuário
  const getUser = async (id: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await buscarUsuario(id);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar usuário');
      setLoading(false);
      throw err;
    }
  };

  // Atualizar usuário
  const updateUser = async (id: number | string, userData: Partial<Usuario>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await atualizarUsuario(id, userData);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar usuário');
      setLoading(false);
      throw err;
    }
  };

  // Excluir usuário
  const deleteUser = async (id: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await excluirUsuario(id);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Erro ao excluir usuário');
      setLoading(false);
      throw err;
    }
  };

  return {
    loading,
    error,
    createUser,
    updatePassword,
    listUsers,
    getUser,
    updateUser,
    deleteUser,
  };
};
