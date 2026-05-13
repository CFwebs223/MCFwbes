'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import TextReveal from './TextReveal';

const portfolioItems = [
  {
    title: 'Restaurant Website',
    type: 'Digital Menu & Booking',
    image: '/portfolio/restaurant.png',
  },
  {
    title: 'Tennis Coach',
    type: 'Booking Page',
    image: '/portfolio/tennis.png',
  },
  {
    title: 'Coffee Shop',
    type: 'Landing Page',
    image: '/portfolio/coffee.png',
  },
  {
    title: 'Product Business',
    type: 'Online Store',
    image: '/portfolio/store.png',
  },
  {
    title: 'Event Company',
    type: 'Landing Page',
    image: '/portfolio/event.png',
  },
];

function BrowserMockup({ item }: { item: typeof portfolioItems[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="relative w-full aspect-[4/3] rounded-xl glass border border-white/10 overflow-hidden cursor-pointer group bg-white/5 backdrop-blur-sm hover:backdrop-blur-xl transition-all duration-500"
      data-cursor-label="View"
    >
      {/* Browser Chrome */}
      <div className="absolute top-0 w-full h-8 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-4 gap-1.5 z-30">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
      </div>
      
      {/* Content Area - Completely transparent idle to show background video */}
      <div className="absolute inset-0 pt-8 flex items-center justify-center">
        
        {/* The Image (Only appears on hover) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover pt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 z-10"
        />
        
        {/* Idle Text (Always visible, fades out slightly on hover) */}
        <div className="flex flex-col items-center justify-center p-6 text-center z-20 transition-opacity duration-300 group-hover:bg-black/60 w-full h-full absolute inset-0 pt-8">
          <h4 className="text-xl md:text-2xl font-medium text-white mb-2 drop-shadow-lg" style={{ transform: "translateZ(30px)" }}>{item.title}</h4>
          <p className="text-yellow-500 font-light text-sm md:text-base tracking-wide drop-shadow-md" style={{ transform: "translateZ(20px)" }}>{item.type}</p>
        </div>
      </div>
      
      {/* Glass Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-40 mix-blend-overlay" />

      {/* Edge glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-40"
        style={{
          boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.05), 0 0 40px rgba(0, 200, 255, 0.03)'
        }}
      />
    </motion.div>
  );
}

export default function PortfolioPreviewSection() {
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
    <section ref={sectionRef} id="work" className="py-32 relative z-10 bg-black min-h-screen overflow-hidden perspective-1000 flex items-center">
      
      {/* Background Video (100% Bleed) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/videos/0510(3).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <TextReveal as="h2" className="text-3xl md:text-5xl font-medium mb-6 drop-shadow-xl text-white">Digital Products Built Around Real Businesses</TextReveal>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <BrowserMockup item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
