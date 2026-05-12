'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">M</span>
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">C</span>
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">F</span>
          </div>
          <span className="text-xs font-medium tracking-[0.2em] uppercase mt-1">Websites</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-white transition-colors hover-target">Services</a>
          <a href="#process" className="hover:text-white transition-colors hover-target">Process</a>
          <a href="#work" className="hover:text-white transition-colors hover-target">Work</a>
          <a href="#contact" className="hover:text-white transition-colors hover-target">Contact</a>
        </div>

        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors hover-target"
        >
          Start Project
        </button>
      </div>
    </motion.nav>
  );
}
