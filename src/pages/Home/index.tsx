import { motion } from 'framer-motion';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      {/* Add other sections here */}
    </motion.main>
  );
};

export default Home;
