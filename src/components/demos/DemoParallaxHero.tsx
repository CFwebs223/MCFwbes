'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DemoParallaxHero({
  icon,
  gradientClassName,
  children,
}: {
  icon: ReactNode;
  gradientClassName: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const iconY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const iconOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      ref={ref}
      className={`relative pt-20 pb-24 px-5 md:px-12 overflow-hidden bg-gradient-to-b ${gradientClassName}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ y: iconY, opacity: iconOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {icon}
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative max-w-4xl mx-auto text-center">
        {children}
      </motion.div>
    </section>
  );
}
