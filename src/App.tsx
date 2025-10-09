import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import DevGridOverlay from './components/DevGridOverlay'
import Home from './pages/Home'
import AboutUs from './components/AboutUs'
import Resources from './components/Resources'
import AppPage from './pages/App'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'
import Network from './pages/Network'
import Social from './pages/Social'
import { UserProvider } from './contexts/UserContext'
import { HeaderProvider, useHeader } from './contexts/HeaderContext'

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    filter: "blur(10px)"
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)"
  },
  out: {
    opacity: 0,
    scale: 1.05,
    y: -20,
    filter: "blur(10px)"
  }
}

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6
}

const AnimatedRoutes = () => {
  const location = useLocation()
  const { isHeaderVisible } = useHeader()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/sobre" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AboutUs />
            </motion.div>
          } 
        />
        <Route 
          path="/recursos" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Resources />
            </motion.div>
          } 
        />
        <Route 
          path="/app" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AppPage />
            </motion.div>
          } 
        />
        <Route 
          path="/perfil" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Profile />
            </motion.div>
          } 
        />
        <Route 
          path="/profile/:userId" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <UserProfile />
            </motion.div>
          } 
        />
        <Route 
          path="/social" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Social />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <UserProvider>
      <HeaderProvider>
        <Router>
          <AppContent />
        </Router>
      </HeaderProvider>
    </UserProvider>
  )
}

const AppContent = () => {
  const { isHeaderVisible } = useHeader()
  
  return (
    <>
      <Header isVisible={isHeaderVisible} />
      <DevGridOverlay />
      <AnimatedRoutes />
    </>
  )
}

export default App
