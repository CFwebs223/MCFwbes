'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import TextReveal from './TextReveal';

const portfolioItems = [
  {
    title: 'Restaurant Website',
    type: 'Digital Menu & Booking',
    image: '/portfolio/restaurant.png',
    url: '/demos/restaurant.html',
  },
  {
    title: 'Tennis Coach',
    type: 'Booking Page',
    image: '/portfolio/tennis.png',
    url: '/demos/tennis.html',
  },
  {
    title: 'Coffee Shop',
    type: 'Landing Page',
    image: '/portfolio/coffee.png',
    url: '/demos/coffee.html',
  },
  {
    title: 'Product Business',
    type: 'Online Store',
    image: '/portfolio/store.png',
    url: '/demos/store.html',
  },
  {
    title: 'Event Company',
    type: 'Landing Page',
    image: '/portfolio/event.png',
    url: '/demos/event.html',
  },
];

function BrowserMockup({ item }: { item: typeof portfolioItems[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
    setIsHovered(false);
  };

  const handleClick = () => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={handleClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="relative w-full aspect-[4/3] rounded-xl glass border border-white/10 overflow-hidden cursor-pointer group bg-white/5 backdrop-blur-sm hover:backdrop-blur-xl transition-all duration-700 ease-out-expo"
      data-cursor-label="View"
    >
      {/* Browser Chrome */}
      <div className="absolute top-0 w-full h-8 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-4 gap-1.5 z-30">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500/60 transition-colors duration-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500/60 transition-colors duration-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500/60 transition-colors duration-300" />
      </div>

      {/* Content Area */}
      <div className="absolute inset-0 pt-8 flex items-center justify-center">
        {/* The Image (Reveals on hover) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out-expo group-hover:scale-105 z-10"
        />

        {/* Idle overlay with gradient */}
        <div className="absolute inset-0 pt-8 z-20 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ease-out-expo group-hover:bg-black/70">
          <div className={`transition-all duration-500 ease-out-expo ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-white mb-2 drop-shadow-lg" style={{ transform: "translateZ(30px)" }}>{item.title}</h4>
            <p className="text-yellow-500 font-light text-sm md:text-base tracking-wide drop-shadow-md" style={{ transform: "translateZ(20px)" }}>{item.type}</p>
          </div>

          {/* Hover CTA */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out-expo ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={false}
              animate={isHovered ? { y: 0 } : { y: 10 }}
            >
              <span className="text-white font-medium text-lg drop-shadow-xl">{item.title}</span>
              <span className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-2 group/btn hover:bg-white/20 transition-all duration-300">
                View Live Demo
                <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Glass Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-40 mix-blend-overlay" />
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-40"
        style={{
          boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.05), 0 0 40px rgba(0, 200, 255, 0.03)'
        }}
      />

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40" />
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
