import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Hero from '../../Componentes/Home'
import SignupPopup from '../../Componentes/CadastroPopUp'
import LoginPopup from '../../Componentes/LoginPopup'
import { usePopup } from '../../Contexts/PopupContext'
import { useUser } from '../../Contexts/UserContext'

//funcoes da home
const Home = () => {
  const { isLoggedIn, isLoading } = useUser()
  const { 
    showLoginPopup, 
    showSignupPopup, 
    showForgotPasswordPopup,
    openSignup,
    closeLogin,
    closeSignup,
    closeForgotPassword,
    switchToSignup,
    switchToLogin
  } = usePopup()

  // Garante que qualquer popup de auth seja fechado após login,
  // evitando que um overlay bloqueie a Home
  useEffect(() => {
    if (isLoggedIn) {
      closeLogin()
      closeSignup()
      closeForgotPassword()
    }
  }, [isLoggedIn, closeLogin, closeSignup, closeForgotPassword])

  return (
    <>
      <motion.main
        key={isLoggedIn ? 'logged' : 'guest'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero 
          key={isLoggedIn ? 'hero-logged' : 'hero-guest'}
          onOpenSignup={openSignup} 
        />
        {/* Add other sections here */}
      </motion.main>
      
      <LoginPopup 
        estaAberto={showLoginPopup && !showForgotPasswordPopup} 
        aoFechar={closeLogin}
        aoTrocarParaCadastro={switchToSignup}
      />
      
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={closeSignup}
        onSwitchToLogin={switchToLogin}
      />
    </>
  )
}

export default Home
