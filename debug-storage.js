// Utilitário para debugar localStorage
console.log('=== DEBUG LOCALSTORAGE ===');

// Verificar todas as chaves do localStorage
const keys = Object.keys(localStorage);
console.log('Chaves no localStorage:', keys);

// Verificar especificamente os dados do usuário
const userData = localStorage.getItem('userData');
console.log('userData bruto:', userData);

if (userData) {
  try {
    const parsedData = JSON.parse(userData);
    console.log('userData parseado:', parsedData);
    console.log('ID do usuário:', {
      id: parsedData.id,
      tipo: typeof parsedData.id,
      valor: JSON.stringify(parsedData.id)
    });
  } catch (error) {
    console.error('Erro ao fazer parse dos dados do usuário:', error);
  }
}

// Verificar token
const token = localStorage.getItem('authToken');
console.log('authToken:', token);

// Verificar outros dados relacionados ao perfil
keys.forEach(key => {
  if (key.includes('profile') || key.includes('user') || key.includes('gym')) {
    console.log(`${key}:`, localStorage.getItem(key));
  }
});

console.log('=== FIM DEBUG ===');
