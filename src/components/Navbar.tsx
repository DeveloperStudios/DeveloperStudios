// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tighter uppercase">
          Developer<span className="text-primary">Studios</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Projects', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;