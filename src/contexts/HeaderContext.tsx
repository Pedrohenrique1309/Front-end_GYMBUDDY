import { createContext, useContext, useState, ReactNode } from 'react'

interface HeaderContextType {
  isHeaderVisible: boolean
  setHeaderVisible: (visible: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const useHeader = () => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}

interface HeaderProviderProps {
  children: ReactNode
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const setHeaderVisible = (visible: boolean) => {
    setIsHeaderVisible(visible)
  }

  return (
    <HeaderContext.Provider value={{ isHeaderVisible, setHeaderVisible }}>
      {children}
    </HeaderContext.Provider>
  )
}
