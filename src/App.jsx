import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Menu Animation Variants
  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: 0.4 + (i * 0.1), duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream font-sans overflow-x-hidden">
      
      {/* Fullscreen Interactive Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6 md:top-12 md:right-12 flex items-center gap-2 text-xs md:text-sm tracking-widest hover:text-luxury-gold transition-colors duration-500"
            >
              <span className="hidden md:inline">CLOSE</span>
              <X size={24} strokeWidth={1} />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-center gap-8 md:gap-12 text-center">
              {['Home', 'The Experience', 'Selected Works', 'Philosophy', 'Inquire'].map((link, i) => (
                <motion.a 
                  key={link}
                  href="#"
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl md:text-5xl font-serif text-luxury-cream hover:text-luxury-gold hover:italic transition-all duration-500"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Menu Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 text-[10px] tracking-[0.3em] uppercase text-luxury-cream/50"
            >
              Milan • London • Worldwide
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference">
        <div className="text-xs md:text-sm tracking-[0.2em] font-light hidden md:block">MILAN / LONDON</div>
        <div className="text-lg md:text-2xl font-serif tracking-widest text-center w-full md:w-auto cursor-pointer">
          DONATELLA NICOLINI
        </div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="hidden md:flex items-center gap-2 text-xs md:text-sm tracking-widest hover:text-luxury-gold transition-colors duration-500"
        >
          <MenuIcon size={20} strokeWidth={1} />
          <span>MENU</span>
        </button>
        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden absolute right-6 text-luxury-cream mix-blend-difference"
        >
          <MenuIcon size={24} strokeWidth={1} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515347619362-720bba800f72?q=80&w=2070&auto=format&fit=crop" 
            alt="Editorial Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/30 via-transparent to-luxury-dark"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center mt-20 px-4">
          
          {/* Custom Luxury SVG Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ 
              opacity: { duration: 2, delay: 0.2 },
              scale: { duration: 2, delay: 0.2 },
              rotate: { duration: 40, repeat: Infinity, ease: "linear" } 
            }}
            className="mb-8 opacity-80"
          >
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="#C5A880" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M50 15L53.5 46.5L85 50L53.5 53.5L50 85L46.5 53.5L15 50L46.5 46.5L50 15Z" stroke="#F9F8F6" strokeWidth="1"/>
            </svg>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 text-luxury-cream/80"
          >
            Fine Art Maternity
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide leading-tight mb-8 md:mb-12"
          >
            Motherhood, <br />
            <span className="italic text-luxury-gold">Elevated.</span>
          </motion.h1>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
            className="border border-luxury-cream/50 px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-luxury-cream hover:text-luxury-dark transition-all duration-700"
          >
            Begin Your Journey
          </motion.button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-32 flex flex-col items-center text-center bg-luxury-dark">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-relaxed mb-8">
            "We do not just capture images. We craft timeless heirlooms that celebrate the ultimate expression of feminine power."
          </h2>
          <p className="text-sm md:text-base font-light text-luxury-cream/70 tracking-wide leading-loose max-w-2xl mx-auto">
            Drawing inspiration from high-fashion editorial and luxury hospitality, the Donatella Nicolini experience is designed to be an exclusive sanctuary for the modern mother. 
          </p>
        </motion.div>
      </section>

      {/* Selected Works Gallery */}
      <section className="w-full px-6 md:px-12 lg:px-24 pb-24 md:pb-40 bg-luxury-dark">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-between items-end mb-12"
        >
          <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase text-luxury-gold">Selected Works</h3>
          <a href="#" className="text-xs tracking-[0.1em] border-b border-luxury-cream/30 pb-1 hover:border-luxury-cream transition-colors">VIEW ARCHIVE</a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="w-full h-[60vh] md:h-[80vh] bg-neutral-900"
          >
            <img src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1000&auto=format&fit=crop" alt="Editorial 1" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full h-[60vh] md:h-[80vh] md:mt-12 bg-neutral-900"
          >
            <img src="https://images.unsplash.com/photo-1554491068-1e427edce6eb?q=80&w=1000&auto=format&fit=crop" alt="Editorial 2" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full h-[60vh] md:h-[80vh] bg-neutral-900"
          >
            <img src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?q=80&w=1000&auto=format&fit=crop" alt="Editorial 3" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="w-full py-24 md:py-32 bg-[#0a0a0a] flex flex-col items-center text-center px-6 border-t border-white/5 relative overflow-hidden">
        {/* Subtle background SVG in footer */}
        <svg className="absolute w-[800px] h-[800px] opacity-5 -top-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#F9F8F6" strokeWidth="0.5"/>
          <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45L50 0Z" stroke="#F9F8F6" strokeWidth="0.5"/>
        </svg>

        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-luxury-cream relative z-10">Reserve Your Session</h2>
        <p className="text-sm text-luxury-cream/60 mb-10 tracking-widest uppercase relative z-10">Milan — London — Worldwide</p>
        <button className="border border-luxury-gold text-luxury-gold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-700 relative z-10">
          Inquire Now
        </button>
      </footer>
    </div>
  );
}

export default App;