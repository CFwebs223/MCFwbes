'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-5 md:px-12">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-yellow-500/80 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          MCFWebs &mdash; South African Web Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white text-glow mb-6"
        >
          Websites Built Like Real Software,
          <br />
          <span className="text-yellow-500">Not Templates.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          MCFWebs designs and develops custom websites, digital menus, booking systems, and
          interactive 3D web experiences for businesses across South Africa &mdash; built fast,
          built to convert, and built around your business, not a page-builder template.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 hover-target min-h-[48px] flex items-center justify-center"
          >
            Start Your Project
          </Link>
          <Link
            href="/demos"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors hover-target min-h-[48px] flex items-center justify-center"
          >
            Explore Live Demos
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
