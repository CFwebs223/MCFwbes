'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

const cards = [
  { title: 'Business Website', delay: 0, x: -20, y: -30, rotate: -5 },
  { title: 'Digital Menu', delay: 0.1, x: 30, y: -20, rotate: 3 },
  { title: 'Booking System', delay: 0.2, x: -40, y: 10, rotate: -2 },
  { title: 'Landing Page', delay: 0.3, x: 20, y: 30, rotate: 4 },
  { title: 'Online Store', delay: 0.4, x: -10, y: 40, rotate: -3 },
  { title: 'Portfolio Site', delay: 0.5, x: 40, y: 10, rotate: 5 },
  { title: 'AI Chat Assistant', delay: 0.6, x: -30, y: -10, rotate: -4 },
  { title: 'Lead Capture Form', delay: 0.7, x: 10, y: -40, rotate: 2 },
];

function FloatingCard({ card, scrollProgress }: { card: typeof cards[0], scrollProgress: MotionValue<number> }) {
  const cardY = useTransform(scrollProgress, [0.5, 1], [150 + card.y * 5, card.y * 2]);
  const cardOpacity = useTransform(scrollProgress, [0.55 + card.delay * 0.1, 0.65 + card.delay * 0.1], [0, 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -ml-24 -mt-12 w-48 p-4 glass-card pointer-events-auto hover-target cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/30"
      style={{
        y: cardY,
        x: `calc(${card.x}vw - 50%)`,
        rotate: card.rotate,
        opacity: cardOpacity,
      }}
      whileHover={{ scale: 1.05, rotate: 0 }}
    >
      <div className="w-8 h-8 rounded-full bg-white/10 mb-3 flex items-center justify-center">
        <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
      </div>
      <span className="text-sm font-medium text-white/90">{card.title}</span>
    </motion.div>
  );
}

export default function FloatingUICards({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Cards appear in the second half of the scroll (when underwater)
  const opacity = useTransform(scrollProgress, [0.5, 0.7], [0, 1]);
  const y = useTransform(scrollProgress, [0.5, 0.8], [100, 0]);
  const scale = useTransform(scrollProgress, [0.5, 0.8], [0.8, 1]);

  return (
    <motion.div 
      className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      <div className="relative w-full max-w-6xl h-[80vh]">
        {/* Central Text */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-50 pointer-events-none"
          style={{ y, scale }}
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-4 text-glow tracking-tight">
            Your Business,<br />Rebuilt for the Digital World
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light">
            From websites to digital systems, mcf.webs creates online experiences that make businesses easier to find, trust, and buy from.
          </p>
        </motion.div>

        {/* Floating Cards */}
        {cards.map((card) => (
          <FloatingCard key={card.title} card={card} scrollProgress={scrollProgress} />
        ))}
      </div>
    </motion.div>
  );
}
