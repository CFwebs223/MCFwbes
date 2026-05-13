'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const points = [
  'Fast turnaround — from concept to launch in days, not months',
  'Modern design that actually feels current, not templated',
  'Built around your specific business goals, not generic layouts',
  'Mobile-first by default, not an afterthought',
  'Clean, intuitive user experiences that convert visitors into customers',
  'Affordable pricing vs. traditional agencies without compromising quality',
  'AI-assisted efficiency with human creative direction and oversight',
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

      {/* Subtle ambient grid */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />

      {/* Ambient glow on the right side (behind phone) */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2 z-0" />

      {/* Edge gradient accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/15 to-transparent z-10" />

      {/* Content Container (Split Layout) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-20">

        {/* Left: Text Content */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yellow-500/60 font-mono text-xs tracking-[0.25em] uppercase mb-4 block">Why mcf.webs</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-medium mb-6 leading-tight text-white/90 drop-shadow-xl"
          >
            Most Businesses Don&rsquo;t Need More Noise.<br />
            <span className="text-yellow-500/90">They Need a Better First Impression.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-10 drop-shadow-md"
          >
            Customers judge your business before they message, book, visit, or buy. mcf.webs helps you turn that first impression into something sharper, cleaner, and easier to trust.
          </motion.p>

          <div className="w-16 h-px bg-gradient-to-r from-yellow-500/50 to-transparent mb-10" />

          <ul className="space-y-5">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-4 text-white/80 font-light text-sm md:text-base group/item"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.8)] shrink-0 mt-2 group-hover/item:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-shadow duration-300" />
                <span className="drop-shadow-md group-hover/item:text-white/90 transition-colors duration-300">{point}</span>
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            style={{ perspective: "1000px", willChange: "transform" }}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-yellow-500/10 via-emerald-500/5 to-transparent opacity-50 blur-xl pointer-events-none" />

            {/* Glass border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none z-20" />

            {/* The actual video */}
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

            {/* Inner glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.08] to-white/0 pointer-events-none mix-blend-overlay z-20" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-20" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}