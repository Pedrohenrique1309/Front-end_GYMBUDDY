import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../../Componentes/Home'
import SignupPopup from '../../Componentes/CadastroPopUp'
import LoginPopup from '../../Componentes/LoginPopup'
import { usePopup } from '../../Contexts/PopupContext'
import { useUser } from '../../Contexts/UserContext'

//funcoes da home
const Home = () => {
  const navigate = useNavigate()
  const { isLoggedIn, isLoading } = useUser()
  const { 
    showLoginPopup, 
    showSignupPopup, 
    showForgotPasswordPopup,
    openLogin,
    openSignup,
    closeLogin,
    closeSignup,
    switchToSignup,
    switchToLogin
  } = usePopup()

  // Redirecionar para /treinos se o usuário já está logado
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      console.log('✅ Usuário já logado, redirecionando para /treinos')
      navigate('/treinos', { replace: true })
    }
  }, [isLoggedIn, isLoading, navigate])

  return (
    <>
      {!isLoading && !isLoggedIn && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero 
            onOpenSignup={openSignup} 
          />
          {/* Add other sections here */}
        </motion.main>
      )}
      
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
