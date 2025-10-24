// Utilitário para validar e limpar dados do usuário corrompidos

import { UserData } from '../Config/api';

// Função para validar se o ID do usuário está em formato válido
export const isValidUserId = (id: any): boolean => {
  if (!id) return false;
  
  // Deve ser number ou string válida
  if (typeof id !== 'number' && typeof id !== 'string') return false;
  
  // Não pode estar vazio ou ser '0'
  if (id === '' || id === '0' || id === 0) return false;
  
  // Não pode conter caracteres especiais que indicam corrupção
  const idString = String(id);
  if (idString.includes(':') || 
      idString.includes('undefined') || 
      idString.includes('null') ||
      idString.includes('NaN')) {
    return false;
  }
  
  // Se for string, deve ser conversível para número válido
  if (typeof id === 'string') {
    const numericId = Number(id);
    if (isNaN(numericId) || numericId <= 0) return false;
  }
  
  // Se for number, deve ser positivo
  if (typeof id === 'number' && id <= 0) return false;
  
  return true;
};

// Função para validar dados completos do usuário
export const isValidUserData = (userData: any): userData is UserData => {
  if (!userData || typeof userData !== 'object') return false;
  
  // Verificar se tem campos obrigatórios
  if (!userData.nome || !userData.email) return false;
  
  // Se tem ID, deve ser válido
  if (userData.id && !isValidUserId(userData.id)) return false;
  
  return true;
};

// Função para limpar dados corrompidos do localStorage
export const cleanCorruptedUserData = (): void => {
  console.log('🧹 Limpando dados corrompidos do localStorage...');
  
  try {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      
      if (!isValidUserData(parsedData)) {
        console.warn('⚠️ Dados do usuário corrompidos detectados, removendo...', parsedData);
        localStorage.removeItem('userData');
        localStorage.removeItem('authToken');
        
        // Limpar também dados relacionados ao perfil
        Object.keys(localStorage).forEach(key => {
          if (key.includes('profile_visited_') || key.includes('gym')) {
            localStorage.removeItem(key);
          }
        });
        
        console.log('✅ Dados corrompidos removidos do localStorage');
        return;
      }
      
      console.log('✅ Dados do usuário válidos');
    }
  } catch (error) {
    console.error('❌ Erro ao validar dados do usuário:', error);
    // Em caso de erro de parse, limpar tudo
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
  }
};

// Função para debugar dados do localStorage
export const debugLocalStorageData = (): void => {
  console.log('=== DEBUG LOCALSTORAGE ===');
  
  const keys = Object.keys(localStorage);
  console.log('Chaves:', keys);
  
  keys.forEach(key => {
    const value = localStorage.getItem(key);
    console.log(`${key}:`, value);
    
    if (key === 'userData' && value) {
      try {
        const parsed = JSON.parse(value);
        console.log(`${key} (parsed):`, {
          data: parsed,
          hasId: !!parsed.id,
          idType: typeof parsed.id,
          idValue: JSON.stringify(parsed.id),
          isValidId: isValidUserId(parsed.id),
          isValidUser: isValidUserData(parsed)
        });
      } catch (error) {
        console.error(`Erro ao fazer parse de ${key}:`, error);
      }
    }
  });
  
  console.log('=== FIM DEBUG ===');
};
