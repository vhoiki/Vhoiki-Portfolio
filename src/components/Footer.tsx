import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/5 bg-dark-base flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-white/40 text-sm font-light tracking-wide">
        &copy; {new Date().getFullYear()} Gel. All rights reserved.
      </p>
      
      <motion.button 
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="flex items-center gap-2 text-white/50 hover:text-neon-violet transition-colors duration-300 text-sm uppercase tracking-widest font-semibold"
      >
        Back to top
        <ArrowUp size={16} strokeWidth={2} />
      </motion.button>
    </footer>
  );
}
