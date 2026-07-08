'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function DemoStickyCTA({
  label,
  buttonClassName,
}: {
  label: string;
  buttonClassName: string;
}) {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 500);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-black/90 backdrop-blur-md border-t border-white/10"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <a
        href="#quote"
        className={`block w-full text-center py-3.5 rounded-full font-semibold ${buttonClassName}`}
      >
        {label}
      </a>
    </motion.div>
  );
}
