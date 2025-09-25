// Configurações da API
const API_BASE_URL = '/api/v1/gymbuddy'

// Interface para resposta de login
export interface LoginResponse {
  status: boolean
  message: string
  status_code?: number
  token?: string
  user?: UserData
  data?: UserData
  usuario?: UserData[] // Campo retornado pela API atual
}

// Interface para dados do usuário
export interface UserData {
  id?: number
  nome: string
  username?: string
  email: string
  foto?: string
  created_at?: string
  updated_at?: string
}

// Interface para dados de cadastro
export interface SignupData {
  username: string
  nickname: string
  email: string
  password: string
  confirmPassword?: string
}

// Interface para resposta de cadastro
export interface SignupResponse {
  status?: boolean;
  status_code?: number | string; // API pode retornar status_code: 200
  message?: string;
  usuario?: UserData[];
  user?: UserData;
  data?: UserData;
}

// Interface para resposta de validação
export interface ValidationResponse {
  status: boolean
  exists: boolean
  message?: string
  field?: 'email' | 'username'
}

// Função de login
export const loginUser = async (email: string, senha: string): Promise<LoginResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario/login/email/senha?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
    
    console.log('🚀 Realizando login:', { 
      email, 
      url,
      baseUrl: API_BASE_URL
    })
    
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    console.log('📡 Resposta recebida:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    })

    // Verificar se a resposta é JSON
    const contentType = response.headers.get('content-type')
    let data: LoginResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log('✅ Resposta JSON:', data)
    } else {
      const responseText = await response.text()
      console.error('❌ Resposta não é JSON:', {
        status: response.status,
        contentType,
        responseText: responseText.substring(0, 500)
      })
      
      if (response.status === 500) {
        throw new Error(`Erro interno do servidor (500). O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080`)
      }
      
      throw new Error(`Erro na API. Status: ${response.status}. Resposta: ${responseText.substring(0, 100)}`)
    }

    return data
  } catch (error) {
    console.error('💥 Erro no login:', error)
    throw error
  }
}

// Função para verificar se email já existe
export const checkEmailExists = async (email: string): Promise<ValidationResponse> => {
  const url = `${API_BASE_URL}/usuario/check-email`
  
  try {
    console.log('🔍 Verificando se email já existe:', email)
    
    const response = await fetch(`${url}?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) {
      // Se a API não tem esse endpoint, assume que não existe
      if (response.status === 404) {
        return { status: true, exists: false, message: 'Email disponível' }
      }
      throw new Error(`Erro ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log('📧 Resultado da verificação de email:', data)
    
    return {
      status: true,
      exists: data.exists || false,
      message: data.message || (data.exists ? 'Email já cadastrado' : 'Email disponível'),
      field: 'email'
    }
  } catch (error) {
    console.warn('⚠️ Erro ao verificar email (continuando):', error)
    // Se der erro, assume que o email não existe para não bloquear o cadastro
    return { status: true, exists: false, message: 'Verificação indisponível' }
  }
}

// Função para verificar se username já existe
export const checkUsernameExists = async (username: string): Promise<ValidationResponse> => {
  const url = `${API_BASE_URL}/usuario/check-username`
  
  try {
    console.log('🔍 Verificando se username já existe:', username)
    
    const response = await fetch(`${url}?username=${encodeURIComponent(username)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) {
      // Se a API não tem esse endpoint, assume que não existe
      if (response.status === 404) {
        return { status: true, exists: false, message: 'Username disponível' }
      }
      throw new Error(`Erro ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log('👤 Resultado da verificação de username:', data)
    
    return {
      status: true,
      exists: data.exists || false,
      message: data.message || (data.exists ? 'Username já cadastrado' : 'Username disponível'),
      field: 'username'
    }
  } catch (error) {
    console.warn('⚠️ Erro ao verificar username (continuando):', error)
    // Se der erro, assume que o username não existe para não bloquear o cadastro
    return { status: true, exists: false, message: 'Verificação indisponível' }
  }
}

// Função de cadastro
export const signupUser = async (userData: SignupData): Promise<SignupResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario`
    
    // Validação básica
    if (!userData.email || !userData.password || !userData.username) {
      throw new Error('Email, senha e nome de usuário são obrigatórios.')
    }
    
    // Nota: A validação de confirmação de senha é feita no frontend
    // A interface SignupData não inclui confirmPassword para a API

    // Testando payload abrangente com possíveis campos obrigatórios
    const payload = {
      // Campos básicos
      nome: userData.username,
      username: userData.username, // Ambos por garantia
      nickname: userData.nickname,
      email: userData.email,
      senha: userData.password,
      
      // Possíveis campos obrigatórios adicionais
      cpf: "000.000.000-00", // CPF fake para teste
      telefone: "(11) 99999-9999", // Telefone fake
      data_nascimento: "1990-01-01", // Data fake
      genero: "M", // Gênero
      ativo: true, // Status ativo
      tipo_usuario: "CLIENTE" // Tipo de usuário
    }
    
    console.log('🚀 Realizando cadastro:', { 
      url, 
      originalUserData: { ...userData, password: '[REDACTED]', confirmPassword: '[REDACTED]' },
      payload: { ...payload, senha: '[REDACTED]' },
      payloadComplete: payload,
      baseUrl: API_BASE_URL 
    })
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    console.log('📡 Resposta de cadastro recebida:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    })

    // Verificar se a resposta é JSON
    const contentType = response.headers.get('content-type')
    let data: SignupResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log('✅ Resposta JSON de cadastro:', data)
    } else {
      const responseText = await response.text()
      console.error('❌ Resposta de cadastro não é JSON:', {
        status: response.status,
        contentType,
        responseText: responseText.substring(0, 500)
      })
      
      if (response.status === 500) {
        throw new Error(`Erro interno do servidor (500). O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080`)
      }
      
      throw new Error(`Erro na API. Status: ${response.status}. Resposta: ${responseText.substring(0, 100)}`)
    }

    return data
  } catch (error) {
    console.error('💥 Erro no cadastro:', error)
    throw error
  }
}

// Função para obter dados do usuário do localStorage
export const getUserFromStorage = (): UserData | null => {
  try {
    const userData = localStorage.getItem('userData')
    return userData ? JSON.parse(userData) : null
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error)
    return null
  }
}

// Função para obter token do localStorage
export const getTokenFromStorage = (): string | null => {
  return localStorage.getItem('authToken')
}

// Função para limpar dados de autenticação
export const clearAuthData = (): void => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
}

// Função para salvar dados de autenticação
export const saveAuthData = (token?: string, userData?: UserData): void => {
  if (token) {
    localStorage.setItem('authToken', token)
  }
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }
}
