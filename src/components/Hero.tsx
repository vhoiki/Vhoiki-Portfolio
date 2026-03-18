import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="/glow.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Softened, atmospheric overlay */}
        <div className="absolute inset-0 bg-dark-base/40 backdrop-blur-[2px]"></div>
        
        {/* Starvy Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

        {/* Starvy Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-neon-violet/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-neon-violet/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-base/50 to-dark-base"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8 opacity-80"
        >
          <img src="/vhoiki logo.png" alt="Vhoiki Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Hi, I'm <span className="text-neon-violet">Gel.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl"
        >
          Just someone who dives deep into the world of design—where passion meets creativity, and every project is a chance to tell a visual story.
        </motion.p>
      </div>

      {/* Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-white/50 hover:text-neon-violet transition-colors duration-300"
        onClick={() => scrollTo('photography')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
