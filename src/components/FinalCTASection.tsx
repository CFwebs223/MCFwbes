'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUSINESS } from '@/lib/site-config';

export default function FinalCTASection() {
  return (
    <section className="relative py-32 md:py-44 px-5 md:px-12">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-6 text-glow leading-tight tracking-tight text-white">
            Your Business Deserves More Than Just a Website.
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business and goals, and we&rsquo;ll put together a plan &mdash;
            website, digital menu, booking system, or a fully custom 3D experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-medium text-base md:text-lg hover:bg-white/90 transition-colors hover-target min-h-[48px] flex items-center justify-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-10 py-5 rounded-full glass border border-white/20 text-white font-medium text-base md:text-lg hover:bg-white/10 transition-colors hover-target min-h-[48px] flex items-center justify-center"
            >
              See Pricing
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-center justify-center text-white/60 text-sm font-light">
            {BUSINESS.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="hover:text-yellow-500 transition-colors">
                {phone.label}: {phone.display}
              </a>
            ))}
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-yellow-500 transition-colors">
              {BUSINESS.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
