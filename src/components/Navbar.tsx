'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/site-config';

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-colors duration-300 hover-target group ${
        active ? 'text-white' : 'text-white/70 hover:text-white'
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white/80 to-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (pathname?.startsWith('/demos/')) return null;

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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-0.5">
              {['M', 'C', 'F'].map((l) => (
                <span
                  key={l}
                  className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]"
                >
                  {l}
                </span>
              ))}
            </div>
            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-1 text-white/60">
              Webs
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-block px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 hover-target shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Start Project
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-0 right-0 px-6"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 px-5 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    className="block w-full py-4 px-5 rounded-xl bg-white text-black text-center font-semibold text-lg"
                  >
                    Start Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
