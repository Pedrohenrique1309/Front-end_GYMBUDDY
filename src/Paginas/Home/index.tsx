import { motion } from 'framer-motion'
import Hero from '../../Componentes/Home'
import SignupPopup from '../../Componentes/CadastroPopUp'
import LoginPopup from '../../Componentes/LoginPopup'
import { usePopup } from '../../Contexts/PopupContext'

//funcoes da home
const Home = () => {
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

  return (
    <>
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
