import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { UserData, getUserFromStorage, getTokenFromStorage, clearAuthData } from '../config/api'

interface UserContextType {
  user: UserData | null
  isLoggedIn: boolean
  isLoading: boolean
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
  const [isLoading, setIsLoading] = useState(true)

  // se o usuario tiver logado recupera do localstorage
  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      
      try {
        const savedUser = getUserFromStorage()
        const token = getTokenFromStorage()
        
        console.log('🚨 DEBUG USERCONTEXT - Recuperando do storage:', {
          savedUser,
          userId: savedUser?.id,
          userIdType: typeof savedUser?.id,
          userIdValue: JSON.stringify(savedUser?.id),
          token: token ? 'presente' : 'ausente'
        });
        
        if (savedUser && token) {
          setUser(savedUser)
          console.log('✅ Usuário recuperado e definido no contexto')
        } else {
          console.log('⚠️ Nenhum usuário salvo encontrado')
        }
      } catch (error) {
        console.error('💥 Erro ao inicializar autenticação:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeAuth();
  }, [])

  const login = (userData: UserData, token?: string) => {
    console.log('🚀 UserContext.login() chamado com:', {
      userData,
      token: token ? 'presente' : 'ausente',
      timestamp: new Date().toISOString()
    })
    
    setUser(userData)
    
    // salvar no localstorage
    if (token) {
      localStorage.setItem('authToken', token)
      console.log('✅ Token salvo no localStorage')
    }
    localStorage.setItem('userData', JSON.stringify(userData))
    console.log('✅ Dados do usuário salvos no localStorage')
    
    console.log('✅ Login realizado com sucesso no UserContext')
    console.log('🎯 Estado do usuário atualizado para:', userData)
  }

  const logout = () => {
    setUser(null)
    clearAuthData()
    console.log('Usuário deslogado')
  }

  const updateUser = (userData: UserData) => {
    console.log('🚨 DEBUG USERCONTEXT - updateUser chamado:', {
      userData,
      userId: userData?.id,
      userIdType: typeof userData?.id,
      userIdValue: JSON.stringify(userData?.id),
      userIdString: String(userData?.id)
    });
    
    setUser(userData)
    localStorage.setItem('userData', JSON.stringify(userData))
    console.log('✅ Dados do usuário atualizados e salvos no localStorage')
  }

  const value = {
    user,
    isLoggedIn: !!user,
    isLoading,
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
