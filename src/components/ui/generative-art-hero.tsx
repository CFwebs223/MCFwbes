'use client';

import dynamic from 'next/dynamic';
import { useSceneCapability } from '@/components/three/useSceneCapability';

const GenerativeOrbScene = dynamic(() => import('@/components/three/GenerativeOrbScene'), {
  ssr: false,
});

export function GenerativeArtHero({
  eyebrow = 'Live Demonstration',
  title = 'See MCFWebs In Action',
  description = 'Three complete concept builds you can click into and explore — not screenshots, not mockups. This is what an interactive, custom-built website actually feels like.',
  color = '#22d3ee',
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  color?: string;
}) {
  const capability = useSceneCapability();

  return (
    <section className="relative w-full h-[70vh] min-h-[520px] bg-black overflow-hidden">
      {capability === 'animated' && <GenerativeOrbScene color={color} />}
      {capability !== 'animated' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.15),transparent_60%)]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center justify-end h-full pb-16 md:pb-24 text-center px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono tracking-widest text-cyan-400/80 uppercase block mb-4">
            {eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-medium leading-tight text-white text-glow">
            {title}
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base text-white/60 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
