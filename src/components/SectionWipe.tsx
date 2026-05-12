'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionWipe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <div ref={ref} className="h-[10vh] w-full relative z-20 flex items-center justify-center overflow-hidden">
      {/* Main wipe line */}
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent origin-center"
        style={{ scaleX, opacity, width: '80%' }}
      />
      {/* Glow behind */}
      <motion.div
        className="absolute h-8 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
        style={{ scaleX, opacity, width: '60%' }}
      />
    </div>
  );
}
