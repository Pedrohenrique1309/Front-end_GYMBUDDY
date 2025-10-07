import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../../components/Hero'
import SignupPopup from '../../components/SignupPopup'
import SocialNetworkButton from '../../components/SocialNetworkButton'

const Home = () => {
  const [showSignupPopup, setShowSignupPopup] = useState(false)

  const handleOpenSignup = () => {
    setShowSignupPopup(true)
  }

  const handleCloseSignup = () => {
    setShowSignupPopup(false)
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
      
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={handleCloseSignup}
        onSwitchToLogin={() => {}} // Pode implementar depois se necessário
      />
      
      <SocialNetworkButton />
    </>
  )
}

export default Home
