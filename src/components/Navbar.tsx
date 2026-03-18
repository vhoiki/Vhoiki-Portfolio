import { motion } from 'motion/react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-dark-base/80 backdrop-blur-md border-b border-white/5"
    >
      <div 
        className="cursor-pointer flex items-center gap-3"
        onClick={() => scrollTo('hero')}
      >
        <img src="/vhoiki logo.png" alt="Vhoiki Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
        <span className="font-semibold tracking-widest uppercase text-sm">Gel.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
        <button onClick={() => scrollTo('photography')} className="hover:text-neon-violet transition-colors duration-300">
          Photography
        </button>
        <button onClick={() => scrollTo('graphic-design')} className="hover:text-neon-violet transition-colors duration-300">
          Graphic Design
        </button>
        <button onClick={() => scrollTo('contact')} className="hover:text-neon-violet transition-colors duration-300">
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
