import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference">
        <div className="text-xs md:text-sm tracking-[0.2em] font-light hidden md:block">MILAN / LONDON</div>
        <div className="text-lg md:text-2xl font-serif tracking-widest text-center w-full md:w-auto">
          DONATELLA NICOLINI
        </div>
        <button className="hidden md:flex items-center gap-2 text-xs md:text-sm tracking-widest hover:text-luxury-gold transition-colors duration-500">
          <Menu size={20} strokeWidth={1} />
          <span>MENU</span>
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

      {/* Selected Works Gallery (Responsive Grid) */}
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

        {/* 1 col on mobile, 3 cols on desktop */}
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
      <footer className="w-full py-24 md:py-32 bg-[#0a0a0a] flex flex-col items-center text-center px-6 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-luxury-cream">Reserve Your Session</h2>
        <p className="text-sm text-luxury-cream/60 mb-10 tracking-widest uppercase">Milan — London — Worldwide</p>
        <button className="border border-luxury-gold text-luxury-gold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-700">
          Inquire Now
        </button>
      </footer>
    </div>
  );
}

export default App;