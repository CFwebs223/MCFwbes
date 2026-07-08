'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function DemoStatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  accentClassName = 'text-cyan-400',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  accentClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className={`text-4xl md:text-5xl font-bold tabular-nums ${accentClassName}`}>
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="text-white/50 text-sm font-light mt-2">{label}</p>
    </div>
  );
}
