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
  id: number
  nome: string
  email: string
  username?: string
  foto?: string
  created_at?: string
  updated_at?: string
}

// Interface para dados de cadastro
export interface SignupData {
  username: string
  nickname: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
}

// Interface para resposta de cadastro
export interface SignupResponse {
  status: boolean
  message: string
  status_code?: number
  user?: UserData
  data?: UserData
  usuario?: UserData[] // Campo retornado pela API atual
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

// Função de cadastro
export const signupUser = async (userData: SignupData): Promise<SignupResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario`
    
    // Validar se emails coincidem
    if (userData.email !== userData.confirmEmail) {
      throw new Error('Os emails não coincidem.')
    }

    // Validar se senhas coincidem
    if (userData.password !== userData.confirmPassword) {
      throw new Error('As senhas não coincidem.')
    }

    // Preparar dados para envio - testando diferentes combinacões
    const payload = {
      nome: userData.username, // Tentativa 1: nome em vez de username
      username: userData.username, // Mantendo ambos para teste
      nickname: userData.nickname,
      email: userData.email,
      senha: userData.password // A API espera 'senha', não 'password'
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
