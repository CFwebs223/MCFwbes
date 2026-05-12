'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 w-[2px] h-24 bg-white/10 rounded-full z-[90] origin-top overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
    >
      <motion.div
        className="w-full bg-gradient-to-b from-cyan-400 to-white rounded-full origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </motion.div>
  );
}
