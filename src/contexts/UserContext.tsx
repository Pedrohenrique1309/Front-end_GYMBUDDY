import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { UserData, getUserFromStorage, getTokenFromStorage, clearAuthData } from '../config/api'

interface UserContextType {
  user: UserData | null
  isLoggedIn: boolean
  login: (userData: UserData, token?: string) => void
  logout: () => void
  updateUser: (userData: UserData) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null)

  // Verificar se há usuário logado ao inicializar
  useEffect(() => {
    const savedUser = getUserFromStorage()
    const token = getTokenFromStorage()
    
    if (savedUser && token) {
      setUser(savedUser)
      console.log('Usuário recuperado do storage:', savedUser)
    }
  }, [])

  const login = (userData: UserData, token?: string) => {
    console.log('🔐 UserContext.login() chamado com:', {
      userData,
      token: token ? 'presente' : 'ausente',
      timestamp: new Date().toISOString()
    });
    
    setUser(userData);
    
    // Salvar no localStorage
    if (token) {
      localStorage.setItem('authToken', token);
      console.log('💾 Token salvo no localStorage');
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('💾 Dados do usuário salvos no localStorage');
    
    console.log('✅ Login realizado com sucesso no UserContext');
    console.log('👤 Estado do usuário atualizado para:', userData);
  }

  const logout = () => {
    setUser(null)
    clearAuthData()
    console.log('Usuário deslogado')
  }

  const updateUser = (userData: UserData) => {
    setUser(userData)
    localStorage.setItem('userData', JSON.stringify(userData))
    console.log('Dados do usuário atualizados:', userData)
  }

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    logout,
    updateUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de um UserProvider')
  }
  return context
}

export default UserContext
