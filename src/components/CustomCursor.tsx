'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth the cursor position instantly
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });
  
  // Outer ring trails slightly behind
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 1 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 1 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    document.body.style.cursor = 'none';
    if (cursorRef.current) cursorRef.current.style.opacity = '1';
    if (ringRef.current) ringRef.current.style.opacity = '1';

    let currentHoverState = false;
    let currentLabel = '';

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.hover-target');
      
      const isHovering = !!interactive;
      let label = '';

      if (isHovering) {
        const labelEl = target.closest('[data-cursor-label]') || target;
        label = labelEl.getAttribute?.('data-cursor-label') || '';
      }

      // Only update DOM if state changed
      if (currentHoverState !== isHovering || currentLabel !== label) {
        currentHoverState = isHovering;
        currentLabel = label;

        if (cursorRef.current) {
          cursorRef.current.style.width = isHovering && label ? '80px' : isHovering ? '48px' : '16px';
          cursorRef.current.style.height = isHovering && label ? '80px' : isHovering ? '48px' : '16px';
        }

        if (ringRef.current) {
          ringRef.current.style.width = isHovering ? '0px' : '48px';
          ringRef.current.style.height = isHovering ? '0px' : '48px';
          ringRef.current.style.opacity = isHovering ? '0' : '1';
        }

        if (labelRef.current) {
          labelRef.current.textContent = label;
          labelRef.current.style.opacity = label ? '1' : '0';
          labelRef.current.style.transform = label ? 'scale(1)' : 'scale(0.5)';
        }
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 opacity-0"
        style={{ left: springX, top: springY, width: 16, height: 16 }}
      >
        <div className="w-full h-full rounded-full flex items-center justify-center bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] relative overflow-hidden">
          <span
            ref={labelRef}
            className="text-black text-[10px] font-bold uppercase tracking-widest absolute transition-all duration-200 opacity-0 scale-50"
          ></span>
        </div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 border border-white/40 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 opacity-0"
        style={{ left: ringX, top: ringY, width: 48, height: 48 }}
      />
    </>
  );
}
