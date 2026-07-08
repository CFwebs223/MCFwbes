'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Preload hero frames in the background during the loading screen
    const preloadHeroFrames = () => {
      for (let i = 0; i < 30; i++) {
        const num = String(i + 1).padStart(4, '0');
        const img = new Image();
        img.src = `/frames/hero/frame_${num}.jpg`;
      }
    };
    preloadHeroFrames();

    // Minimum 1.2s loading screen to ensure frames have time to start loading
    // and prevent layout flash on fast connections
    const timer = setTimeout(() => {
      if (!cancelled) setIsLoading(false);
    }, 1200);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ripple rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full border border-cyan-500/30"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 4, 8], opacity: [0.6, 0.2, 0] }}
              transition={{
                duration: 2.5,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <span className="text-3xl font-medium tracking-tight">
              mcf<span className="text-white/50">.webs</span>
            </span>
          </motion.div>

          {/* Loading bar */}
          <motion.div className="absolute bottom-20 w-48 h-[1px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-white"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}