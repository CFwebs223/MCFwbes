'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const points = [
  'Fast turnaround',
  'Modern design',
  'Built around business goals',
  'Mobile-first',
  'Clean user experience',
  'Affordable vs. traditional agencies',
  'AI-assisted but human-directed',
];

export default function WhyMcfWebsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // CPU Optimization: Only play video when visible
  const isInView = useInView(sectionRef, { margin: "200px 0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative z-10 min-h-screen w-full bg-black overflow-hidden flex items-center">
      
      {/* Background styling for the section */}
      <div className="absolute inset-0 bg-[#020504] z-0 pointer-events-none" />

      {/* Content Container (Split Layout) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text Content */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium mb-6 leading-tight text-white/90 drop-shadow-xl"
          >
            Most Businesses Don’t Need More Noise. They Need a Better First Impression.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-8 drop-shadow-md"
          >
            Customers judge your business before they message, book, visit, or buy. mcf.webs helps you turn that first impression into something sharper, cleaner, and easier to trust.
          </motion.p>

          <div className="w-12 h-px bg-yellow-500/50 mb-8" />

          <ul className="space-y-4">
            {points.map((point, i) => (
              <motion.li 
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 text-white/80 font-light text-sm md:text-base"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.8)] shrink-0" />
                <span className="drop-shadow-md">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Vertical Video Container */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            style={{ perspective: "1000px", willChange: "transform" }}
          >
            {/* The actual video, un-stretched, un-filtered */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110"
            >
              <source src="/videos/d_b_c_f_bamp_.mp4" type="video/mp4" />
            </video>

            {/* Inner glass reflection to make it look like a physical pane/phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none mix-blend-overlay" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
