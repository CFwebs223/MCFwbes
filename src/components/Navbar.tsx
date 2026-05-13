'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';

const SoundToggle = dynamic(() => import('@/components/SoundToggle'), { ssr: false });

function NavLink({ href, label }: { href: string; label: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={linkRef}
      href={href}
      className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 hover-target group"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white/80 to-transparent group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </a>
  );
}

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'py-4 glass border-b border-white/5 edge-glow' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex items-center gap-0.5">
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">M</span>
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">C</span>
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">F</span>
          </div>
          <span className="text-xs font-medium tracking-[0.2em] uppercase mt-1 text-white/60">Websites</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <NavLink href="#services" label="Services" />
          <NavLink href="#process" label="Process" />
          <NavLink href="#work" label="Work" />
          <NavLink href="#contact" label="Contact" />
        </div>

        <div className="flex items-center gap-4">
          <SoundToggle />

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 hover-target shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Start Project
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
