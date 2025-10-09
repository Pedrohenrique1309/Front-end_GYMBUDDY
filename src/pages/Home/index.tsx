import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../../components/Hero'
import SignupPopup from '../../components/SignupPopup'
import LoginPopup from '../../components/LoginPopup'

const Home = () => {
  const [showSignupPopup, setShowSignupPopup] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  const handleOpenLogin = () => {
    setShowLoginPopup(true)
  }

  const handleCloseLogin = () => {
    setShowLoginPopup(false)
  }

  const handleOpenSignup = () => {
    setShowSignupPopup(true)
  }

  const handleCloseSignup = () => {
    setShowSignupPopup(false)
  }

  const handleSwitchToSignup = () => {
    setShowLoginPopup(false)
    setShowSignupPopup(true)
  }

  const handleSwitchToLogin = () => {
    setShowSignupPopup(false)
    setShowLoginPopup(true)
  }

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero onOpenSignup={handleOpenSignup} />
        {/* Add other sections here */}
      </motion.main>
      
      <LoginPopup 
        estaAberto={showLoginPopup} 
        aoFechar={handleCloseLogin}
        aoTrocarParaCadastro={handleSwitchToSignup}
      />
      
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={handleCloseSignup}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  )
}

export default Home
