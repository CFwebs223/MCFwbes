'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const SoundToggle = dynamic(() => import('@/components/SoundToggle'), { ssr: false });

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 hover-target group"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'py-3 md:py-4 glass border-b border-white/5 edge-glow' : 'py-4 md:py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-5 md:px-12 flex justify-between items-center">
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
              {['M','C','F'].map((l) => (
                <span key={l} className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">{l}</span>
              ))}
            </div>
            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-1 text-white/60">Websites</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            {/* Sound toggle — visible on mobile as icon only */}
            <div className="scale-[0.85] md:scale-100">
              <SoundToggle />
            </div>

            {/* Desktop CTA */}
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:inline-block px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 hover-target shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Start Project
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-px bg-white/70"
                animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px bg-white/70"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-px bg-white/70"
                animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
            {/* Menu content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-0 right-0 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="block py-4 px-5 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <a
                    href="#contact"
                    className="block w-full py-4 px-5 rounded-xl bg-white text-black text-center font-semibold text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Start Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}