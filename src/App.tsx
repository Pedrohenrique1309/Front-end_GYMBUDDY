import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import DevGridOverlay from './components/DevGridOverlay';
import Home from './pages/Home';
import AboutUs from './components/AboutUs';
import Resources from './components/Resources';

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
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
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
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <DevGridOverlay />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
