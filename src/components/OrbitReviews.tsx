'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion';
import { Star } from 'lucide-react';

const originalReviews = [
  { 
    name: 'Sarah Jenkins', 
    role: 'Restaurant Owner', 
    text: 'The digital menu mcf.webs built for us completely changed how we operate. It’s incredibly fast, looks stunning, and our customers love the seamless ordering experience. Absolute game changer.' 
  },
  { 
    name: 'David Chen', 
    role: 'E-commerce Director', 
    text: 'We needed a store that didn\'t look like every other generic template. They delivered a fully custom, cinematic experience that elevated our brand overnight. Conversion rates are up 40%.' 
  },
  { 
    name: 'Marcus Thorne', 
    role: 'Creative Agency', 
    text: 'As an agency, our visual standards are impossibly high. mcf.webs exceeded them. The 3D scroll effects and flawless video transitions make our new portfolio look like a million bucks.' 
  },
  { 
    name: 'Elena Rodriguez', 
    role: 'Event Coordinator', 
    text: 'Our booking system was an absolute mess before. Now it’s an elegant, streamlined process. The design is so clean and premium, it instantly builds trust with our high-end clients.' 
  },
  { 
    name: 'James Wilson', 
    role: 'Tech Startup CEO', 
    text: 'Fast, responsive, and breathtakingly beautiful. They understood exactly what we wanted and built a landing page that captures attention and refuses to let go. Highly recommended.' 
  },
];

// Double the array to have more items in orbit
const reviews = [...originalReviews, ...originalReviews];

export default function OrbitReviews() {
  const radius = 600; // translateZ distance
  
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);

  useAnimationFrame((time, delta) => {
    if (!isDragging.current) {
      // Auto-spin logic: 8 degrees per second
      rotation.set(rotation.get() - (delta / 1000) * 8);
    }
  });

  const smoothRotation = useSpring(rotation, { stiffness: 300, damping: 40 });

  return (
    <section className="py-32 md:py-48 relative z-10 bg-black overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-6 drop-shadow-md">Client Feedback</h2>
          <div className="w-20 h-1 bg-cyan-500/50 mx-auto shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center w-full h-[500px]" style={{ perspective: '1500px' }}>
        
        {/* Center Pillar / Axis */}
        <div className="absolute z-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute z-10 w-32 h-32 rounded-full bg-cyan-900/10 blur-3xl" />

        {/* 3D Rotating Carousel - Now Draggable via onPan */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ transformStyle: 'preserve-3d', rotateY: smoothRotation }}
          onPanStart={() => isDragging.current = true}
          onPanEnd={() => isDragging.current = false}
          onPan={(event, info) => {
            // Drag left/right controls the rotation
            rotation.set(rotation.get() + info.delta.x * 0.2);
          }}
        >
          {reviews.map((review, index) => {
            const angle = (index / reviews.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 w-[280px] md:w-[350px]"
                style={{ 
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden', 
                }}
              >
                <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-2xl hover:border-cyan-500/30 hover:bg-[#0a0a0a]/90 transition-all duration-300 transform hover:scale-105 group">
                  <div className="flex gap-1 mb-4 text-cyan-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current filter drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 drop-shadow-sm group-hover:text-white transition-colors">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  
                  <div>
                    <h4 className="text-white font-medium text-base md:text-lg tracking-wide">{review.name}</h4>
                    <p className="text-cyan-400/70 font-light text-xs md:text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
        
        {/* Ambient environment glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none transform -translate-z-50" />
      </div>
    </section>
  );
}
