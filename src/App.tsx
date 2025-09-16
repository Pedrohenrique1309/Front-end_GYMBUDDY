import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import DevGridOverlay from './components/DevGridOverlay';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <DevGridOverlay />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
