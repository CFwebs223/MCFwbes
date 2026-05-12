'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CinematicSpacer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax layers at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  const lineOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <div
      ref={ref}
      className="h-[40vh] w-full bg-black relative z-20 overflow-hidden"
    >
      {/* Deep ambient glow layer 1 - using radial-gradient instead of blur() for massive performance gain */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,100,150,0.15)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,50,150,0.15)_0%,rgba(0,0,0,0)_70%)]" />
      </motion.div>

      {/* Caustic light layer 3 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y3 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse,rgba(0,180,180,0.03)_0%,transparent_70%)]" />
      </motion.div>

      {/* Center glowing line */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ opacity: lineOpacity }}
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      </motion.div>
    </div>
  );
}
