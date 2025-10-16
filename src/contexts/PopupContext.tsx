import React, { createContext, useContext, useState, ReactNode } from 'react'

interface PopupContextType {
  // Estados dos popups
  showLoginPopup: boolean
  showSignupPopup: boolean
  showForgotPasswordPopup: boolean
  
  // Funções para abrir popups
  openLogin: () => void
  openSignup: () => void
  openForgotPassword: () => void
  
  // Funções para fechar popups
  closeLogin: () => void
  closeSignup: () => void
  closeForgotPassword: () => void
  closeAllPopups: () => void
  
  // Funções para trocar entre popups
  switchToSignup: () => void
  switchToLogin: () => void
  switchToForgotPassword: () => void
  returnToLoginFromForgotPassword: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [showSignupPopup, setShowSignupPopup] = useState(false)
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false)
  
  // Funções para abrir popups
  const openLogin = () => {
    closeAllPopups()
    setShowLoginPopup(true)
  }
  
  const openSignup = () => {
    closeAllPopups()
    setShowSignupPopup(true)
  }
  
  const openForgotPassword = () => {
    // Não fecha o login, apenas abre o forgot password
    setShowForgotPasswordPopup(true)
  }
  
  // Funções para fechar popups
  const closeLogin = () => {
    setShowLoginPopup(false)
  }
  
  const closeSignup = () => {
    setShowSignupPopup(false)
  }
  
  const closeForgotPassword = () => {
    setShowForgotPasswordPopup(false)
  }
  
  const closeAllPopups = () => {
    setShowLoginPopup(false)
    setShowSignupPopup(false)
    setShowForgotPasswordPopup(false)
  }
  
  // Funções para trocar entre popups
  const switchToSignup = () => {
    setShowLoginPopup(false)
    setShowSignupPopup(true)
    setShowForgotPasswordPopup(false)
  }
  
  const switchToLogin = () => {
    setShowSignupPopup(false)
    setShowLoginPopup(true)
    setShowForgotPasswordPopup(false)
  }
  
  const switchToForgotPassword = () => {
    // Mantém o login aberto mas oculto
    setShowForgotPasswordPopup(true)
  }
  
  const returnToLoginFromForgotPassword = () => {
    // Fecha o forgot password e garante que o login esteja visível
    setShowForgotPasswordPopup(false)
    setShowLoginPopup(true) // Garante que o login esteja aberto
  }
  
  return (
    <PopupContext.Provider
      value={{
        showLoginPopup,
        showSignupPopup,
        showForgotPasswordPopup,
        openLogin,
        openSignup,
        openForgotPassword,
        closeLogin,
        closeSignup,
        closeForgotPassword,
        closeAllPopups,
        switchToSignup,
        switchToLogin,
        switchToForgotPassword,
        returnToLoginFromForgotPassword,
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider')
  }
  return context
}
