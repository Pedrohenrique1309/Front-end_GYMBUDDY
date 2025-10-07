// url da api base/cadastro
const API_BASE_URL = '/api/v1/gymbuddy'

// resosta de login
export interface LoginResponse {
  status: boolean
  message: string
  status_code?: number
  token?: string
  user?: UserData
  data?: UserData
  usuario?: UserData[] // campo que a api pode retornar 
}

// interface de dados do usuário
export interface UserData {
  id?: number
  nome: string
  username?: string
  nickname?: string
  email: string
  senha?: string
  foto?: string
  descricao?: string
  localizacao?: string
  data_nascimento?: string
  peso?: string | number
  altura?: string | number
  imc?: string | number
  is_bloqueado?: boolean | number
  created_at?: string
  updated_at?: string
}

// dados para cadastro
export interface SignupData {
  username: string
  nickname: string
  email: string
  password: string
  confirmPassword?: string
}

// interface para resposta do cadastro
export interface SignupResponse {
  status?: boolean
  status_code?: number | string // API pode retornar status_code: 200
  message?: string
  usuario?: UserData[]
  user?: UserData
  data?: UserData
}

// interface para resposta de validação
export interface ValidationResponse {
  status: boolean
  exists: boolean
  message?: string
  field?: 'email' | 'username'
}

// função de login
export const loginUser = async (email: string, senha: string): Promise<LoginResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario/login/email/senha?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
    
    console.log(' Realizando login:', { 
      email, 
      url,
      baseUrl: API_BASE_URL
    })
    
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    console.log(' Resposta recebida:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    })

    // verifica se a resposta é json
    const contentType = response.headers.get('content-type')
    let data: LoginResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log('✅ Resposta JSON:', data)
    } else {
      const responseText = await response.text()
      console.error('❌ Resposta não é json:', {
        status: response.status,
        contentType,
        responseText: responseText.substring(0, 500)
      })
      
      if (response.status === 500) {
        throw new Error(`Erro interno do servidor. O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080`)
      }
      
      throw new Error(`Erro na API. Status: ${response.status}. Resposta: ${responseText.substring(0, 100)}`)
    }

    return data
  } catch (error) {
    console.error(' Erro no login:', error)
    throw error
  }
}

// função para verificar se email já existe no bd
export const checkEmailExists = async (email: string): Promise<ValidationResponse> => {
  const url = `${API_BASE_URL}/usuario/check-email`
  
  try {
    console.log(' Verificando se email já existe:', email)
    
    const response = await fetch(`${url}?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) {
      // se a API não tem esse endpoint, da erro pq n existe
      if (response.status === 404) {
        return { status: true, exists: false, message: 'Email disponível' }
      }
      throw new Error(`Erro ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log(' Resultado da verificação de email:', data)
    
    return {
      status: true,
      exists: data.exists || false,
      message: data.message || (data.exists ? 'Email já cadastrado' : 'Email disponível'),
      field: 'email'
    }
  } catch (error) {
    console.warn(' Erro ao verificar email (continuando):', error)
    // se der erro, considera que o email não existe para não bloquear o cadastro
    return { status: true, exists: false, message: 'Verificação indisponível' }
  }
}

// função para verificar se username já existe
export const checkUsernameExists = async (username: string): Promise<ValidationResponse> => {
  const url = `${API_BASE_URL}/usuario/check-username`
  
  try {
    console.log(' Verificando se username já existe:', username)
    
    const response = await fetch(`${url}?username=${encodeURIComponent(username)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) {
      // se a API não tem esse endpoint, da erro pq n existe
      if (response.status === 404) {
        return { status: true, exists: false, message: 'Username disponível' }
      }
      throw new Error(`Erro ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log(' Resultado da verificação de username:', data)
    
    return {
      status: true,
      exists: data.exists || false,
      message: data.message || (data.exists ? 'Username já cadastrado' : 'Username disponível'),
      field: 'username'
    }
  } catch (error) {
    console.warn(' Erro ao verificar username (continuando):', error)
    // se der erro, considera que o username não existe para não bloquear o cadastro
    return { status: true, exists: false, message: 'Verificação indisponível' }
  }
}

// função de cadastro
export const signupUser = async (userData: SignupData): Promise<SignupResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario`
    
    // Validação básica
    if (!userData.email || !userData.password || !userData.username) {
      throw new Error('Email, senha e nome de usuário são obrigatórios.')
    }
    
    // validacao feita no front

    //teste payload
    const payload = {
      
      nome: userData.username,
      username: userData.username, 
      nickname: userData.nickname,
      email: userData.email,
      senha: userData.password,
      
      // dado de teste
      data_nascimento: "1990-01-01" //exemplo
      
    }
    
    console.log(' Realizando cadastro:', { 
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

    console.log(' Resposta de cadastro recebida:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    })

    // verifica se a resposta é json
    const contentType = response.headers.get('content-type')
    let data: SignupResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log(' Resposta json de cadastro:', data)
    } else {
      const responseText = await response.text()
      console.error(' Resposta de cadastro não é json:', {
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
    console.error(' Erro no cadastro:', error)
    throw error
  }
}

// função para obter dados do usuário do localstorage
export const getUserFromStorage = (): UserData | null => {
  try {
    const userData = localStorage.getItem('userData')
    return userData ? JSON.parse(userData) : null
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error)
    return null
  }
}

// token do localstorage
export const getTokenFromStorage = (): string | null => {
  return localStorage.getItem('authToken')
}

// limpa dados de autenticação 
export const clearAuthData = (): void => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
}

// salva dados de autenticação
export const saveAuthData = (token?: string, userData?: UserData): void => {
  if (token) {
    localStorage.setItem('authToken', token)
  }
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }
}

// interface para resposta de recuperação de senha
export interface RecoveryResponse {
  status: boolean
  message: string
  status_code?: number
  isValid?: boolean
}

// função para enviar código de recuperação
export const enviarCodigoRecuperacao = async (email: string): Promise<RecoveryResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario/forgot-password`
    
    console.log('🔄 Enviando código de recuperação:', { email, url })
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email })
    })

    console.log('📧 Resposta do envio de código:', {
      status: response.status,
      statusText: response.statusText
    })

    const contentType = response.headers.get('content-type')
    let data: RecoveryResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log('✅ Resposta JSON do código:', data)
    } else {
      const responseText = await response.text()
      console.error('❌ Resposta não é JSON:', responseText)
      
      if (response.status === 500) {
        throw new Error(`Erro interno do servidor. Verifique se o backend está rodando.`)
      }
      
      throw new Error(`Erro na API. Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('❌ Erro ao enviar código:', error)
    throw error
  }
}

// função para validar código de recuperação
export const validarCodigoRecuperacao = async (email: string, codigo: string): Promise<RecoveryResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario/validate-recovery-code`
    
    console.log('🔄 Validando código de recuperação:', { email, codigo, url })
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, code: codigo })
    })

    console.log('🔍 Resposta da validação:', {
      status: response.status,
      statusText: response.statusText
    })

    const contentType = response.headers.get('content-type')
    let data: RecoveryResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log('✅ Resposta JSON da validação:', data)
    } else {
      const responseText = await response.text()
      console.error('❌ Resposta não é JSON:', responseText)
      
      if (response.status === 500) {
        throw new Error(`Erro interno do servidor. Verifique se o backend está rodando.`)
      }
      
      throw new Error(`Erro na API. Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('❌ Erro ao validar código:', error)
    throw error
  }
}

// função para alterar senha
export const alterarSenha = async (email: string, novaSenha: string, codigo: string): Promise<RecoveryResponse> => {
  try {
    const url = `${API_BASE_URL}/usuario/reset-password`
    
    console.log('🔄 Alterando senha:', { email, url })
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        email, 
        newPassword: novaSenha, 
        code: codigo 
      })
    })

    console.log('🔐 Resposta da alteração de senha:', {
      status: response.status,
      statusText: response.statusText
    })

    const contentType = response.headers.get('content-type')
    let data: RecoveryResponse
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
      console.log('✅ Resposta JSON da alteração:', data)
    } else {
      const responseText = await response.text()
      console.error('❌ Resposta não é JSON:', responseText)
      
      if (response.status === 500) {
        throw new Error(`Erro interno do servidor. Verifique se o backend está rodando.`)
      }
      
      throw new Error(`Erro na API. Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('❌ Erro ao alterar senha:', error)
    throw error
  }
}
