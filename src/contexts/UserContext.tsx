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
        
        if (savedUser) {
          // Aceitar qualquer token (mesmo 'session-active') ou sem token
          console.log('🔍 Usuário encontrado no localStorage:', {
            userId: savedUser.id,
            userName: savedUser.nome,
            hasToken: !!token,
            tokenValue: token
          })
          
          setUser(savedUser)
          console.log('✅ Usuário recuperado e definido no contexto')
        } else {
          console.log('⚠️ Nenhum usuário salvo encontrado no localStorage')
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
    
    // Salvar ANTES de setar no estado para garantir persistência
    try {
      if (token) {
        localStorage.setItem('authToken', token)
        console.log('✅ Token salvo no localStorage:', token?.substring(0, 20) + '...')
      } else {
        // Se não tem token, usar um token dummy para manter sessão
        localStorage.setItem('authToken', 'session-active')
        console.log('✅ Token de sessão salvo no localStorage')
      }
      
      const userDataString = JSON.stringify(userData)
      localStorage.setItem('userData', userDataString)
      console.log('✅ Dados do usuário salvos no localStorage:', {
        size: userDataString.length,
        keys: Object.keys(userData),
        userId: userData.id
      })
      
      // Verificar se foi salvo corretamente
      const verificacao = localStorage.getItem('userData')
      if (verificacao === userDataString) {
        console.log('✅ Verificação: Dados salvos corretamente')
      } else {
        console.error('❌ Verificação: Falha ao salvar dados')
      }
      
    } catch (error) {
      console.error('💥 Erro ao salvar no localStorage:', error)
    }
    
    // Agora setar no estado
    setUser(userData)
    
    console.log('✅ Login realizado com sucesso no UserContext')
    console.log('🎯 Estado do usuário atualizado para:', userData)
  }

  const logout = () => {
    console.log('🚀 UserContext.logout() chamado:', {
      previousUser: user,
      timestamp: new Date().toISOString(),
      stack: new Error().stack?.split('\n').slice(1, 5) // Stack trace para debug
    })
    
    setUser(null)
    clearAuthData()
    
    console.log('❌ Usuário deslogado e dados limpos')
    
    // Verificar se foi realmente limpo
    setTimeout(() => {
      const remainingData = localStorage.getItem('userData')
      const remainingToken = localStorage.getItem('authToken')
      console.log('🔍 Verificação pós-logout:', {
        hasUserData: !!remainingData,
        hasToken: !!remainingToken
      })
    }, 100)
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
