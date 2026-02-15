
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-950/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <span className="text-indigo-950 font-serif font-bold text-xl">M</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-white">
            Mudrosti<span className="text-amber-500">.mk</span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-indigo-100">
          <a href="#vision" className="hover:text-amber-400 transition-colors">Визија</a>
          <a href="#uses" className="hover:text-amber-400 transition-colors">Примена</a>
          <a href="#wisdom" className="hover:text-amber-400 transition-colors">Мудрост</a>
          <a href="#contact" className="px-5 py-2 bg-amber-500 text-indigo-950 rounded hover:bg-amber-400 transition-all font-bold">Контакт</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
