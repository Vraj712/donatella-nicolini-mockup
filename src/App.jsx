import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream font-sans">
      
      {/* Navigation - Minimalist & Elegant */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-8 py-6 md:px-16 mix-blend-difference">
        <div className="text-sm tracking-[0.2em] font-light hidden md:block">MILAN / LONDON</div>
        <div className="text-xl md:text-2xl font-serif tracking-widest text-center w-full md:w-auto">
          DONATELLA NICOLINI
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm tracking-widest hover:text-luxury-gold transition-colors duration-500">
          <Menu size={20} strokeWidth={1} />
          <span>MENU</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515347619362-720bba800f72?q=80&w=2070&auto=format&fit=crop" 
            alt="Editorial Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/30 via-transparent to-luxury-dark"></div>
        </div>

        {/* Animated Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-20 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-luxury-cream/80"
          >
            Fine Art Maternity
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide leading-tight mb-12"
          >
            Motherhood, <br />
            <span className="italic text-luxury-gold">Elevated.</span>
          </motion.h1>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
            className="border border-luxury-cream/50 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-luxury-cream hover:text-luxury-dark transition-all duration-700"
          >
            Begin Your Journey
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default App;