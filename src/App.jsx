import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-[60] flex justify-between items-center px-6 py-6 md:px-12 lg:px-20 mix-blend-difference">
        <div className="text-[10px] md:text-xs tracking-[0.3em] font-light hidden sm:block">MILAN / LONDON</div>
        <div className="text-lg md:text-2xl font-serif tracking-[0.2em] text-center w-full sm:w-auto">
          DONATELLA NICOLINI
        </div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] hover:text-luxury-gold transition-colors duration-500 pointer-events-auto cursor-pointer"
        >
          <span className="hidden md:inline">COLLECTIONS</span>
          <MenuIcon size={20} strokeWidth={1} />
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed" animate="open" exit="closed"
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col justify-center items-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-luxury-gold"><X size={32} strokeWidth={1}/></button>
            <div className="flex flex-col gap-6 text-center">
              {['Maternity', 'Portraits', 'Editorial', 'Philosophy', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-4xl md:text-6xl font-serif hover:italic hover:text-luxury-gold transition-all">{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Responsive Framing */}
      <section className="relative h-[100svh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            className="w-full h-full object-cover object-[center_20%] md:object-center opacity-50 transition-all duration-1000"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-luxury-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <img src="/logo.png" className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-8 object-contain" alt="Logo" />
            <p className="text-[9px] md:text-xs tracking-[0.5em] uppercase mb-4 opacity-70">Fine Art Maternity</p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-light mb-8 italic tracking-tight">
              Ethereal <span className="not-italic text-luxury-gold">Grace</span>
            </h1>
            <button className="text-[10px] tracking-[0.3em] border-b border-luxury-gold/50 pb-2 hover:border-luxury-gold transition-all uppercase">
              Explore the Gallery
            </button>
          </motion.div>
        </div>
      </section>

      {/* Luxury Adaptive Grid Section */}
      <section className="py-20 lg:py-40 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Content - Responsive alignment */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <h3 className="text-luxury-gold text-[10px] tracking-[0.4em] uppercase mb-6">The Philosophy</h3>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Capturing the <br /> <span className="italic">Divine Feminine</span>
            </h2>
            <p className="text-luxury-cream/60 font-light leading-relaxed mb-8 max-w-md">
              A bespoke experience tailored for the woman who demands excellence. We blend high-fashion techniques with a deeply personal touch.
            </p>
            <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase opacity-50">
              <span>Milan</span>
              <span>London</span>
              <span>Dubai</span>
            </div>
          </motion.div>

          {/* Featured Image - Asymmetric placement on PC */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] overflow-hidden">
              <img src="/gallery-1.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Work" />
            </div>
            {/* Floating Label - Only visible on PC/Tablet */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-luxury-dark border border-white/10 p-8">
              <p className="text-[10px] tracking-widest uppercase text-luxury-gold">Maternity Editorial No. 04</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works - Magazine Style Grid */}
      <section className="pb-40 px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-serif">Portfolio</h2>
          <span className="text-[10px] tracking-widest opacity-40 mb-2">01 / 06</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {['gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'gallery-5.jpg', 'gallery-6.jpg', 'hero-bg.jpg'].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group cursor-pointer ${i === 1 ? 'md:mt-20' : ''} ${i === 4 ? 'lg:-mt-20' : ''}`}
            >
              <div className="overflow-hidden mb-4 aspect-[3/4]">
                <img src={`/${img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 group-hover:text-luxury-gold transition-all">
                Collection 2026 — No. 0{i + 1}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-white text-black py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <p className="text-xs tracking-[0.5em] uppercase mb-8">Ready to begin?</p>
          <h2 className="text-4xl md:text-7xl font-serif mb-12 italic">Secure Your Date</h2>
          <button className="px-12 py-5 bg-black text-white text-[10px] tracking-[0.4em] uppercase hover:bg-luxury-gold transition-colors">
            Inquire Now
          </button>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;