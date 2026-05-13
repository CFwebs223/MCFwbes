'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SubmitState = 'idle' | 'sending' | 'sent';

export default function FinalCTASection() {
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const spawnBubble = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const newBubble = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2 + (Math.random() - 0.5) * 60,
      y: rect.top,
    };
    setBubbles((prev) => [...prev.slice(-15), newBubble]);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState !== 'idle') return;
    setSubmitState('sending');
    setTimeout(() => setSubmitState('sent'), 1500);
  };

  return (
    <section id="contact" className="relative py-40 min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background element returning to the calm ocean/wine glass feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,150,0.1)_0%,rgba(0,0,0,1)_70%)]" />
      </div>

      {/* Floating bubbles from typing */}
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="fixed w-2 h-2 rounded-full bg-cyan-400/30 pointer-events-none z-50"
            initial={{ x: bubble.x, y: bubble.y, scale: 0, opacity: 0.8 }}
            animate={{
              y: bubble.y - 200 - Math.random() * 100,
              x: bubble.x + (Math.random() - 0.5) * 80,
              scale: [0, 1, 0.5],
              opacity: [0.8, 0.4, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 text-glow leading-tight tracking-tight uppercase">
            Your Business Deserves More Than Just A Website.
          </h2>
          
          <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            We create high-converting, modern websites for brands that want to stand out online. Built to convert, fast, and mobile-optimised.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#services" className="px-10 py-5 rounded-full glass border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors hover-target">
              Explore Services
            </a>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 text-left relative z-20 edge-glow">
            {/* Subtle background gradient */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-medium mb-6 text-white relative z-10">Start Your Project</h3>
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group/field">
                  <label className="block text-sm font-light text-white/60 mb-2 group-focus-within/field:text-cyan-400/70 transition-colors duration-300">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-cyan-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,255,255,0.03)] hover:border-white/20 placeholder:text-white/20"
                    placeholder="John Doe"
                    onKeyDown={spawnBubble}
                  />
                </div>
                <div className="group/field">
                  <label className="block text-sm font-light text-white/60 mb-2 group-focus-within/field:text-cyan-400/70 transition-colors duration-300">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-cyan-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,255,255,0.03)] hover:border-white/20 placeholder:text-white/20"
                    placeholder="john@company.com"
                    onKeyDown={spawnBubble}
                  />
                </div>
              </div>

              <div className="group/field">
                <label className="block text-sm font-light text-white/60 mb-2 group-focus-within/field:text-cyan-400/70 transition-colors duration-300">Service of Interest</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-cyan-500/40 focus:bg-white/[0.05] hover:border-white/20 appearance-none">
                  <option className="bg-[#0a0a0a]">Business Websites</option>
                  <option className="bg-[#0a0a0a]">AI Integrations</option>
                  <option className="bg-[#0a0a0a]">Landing Pages</option>
                  <option className="bg-[#0a0a0a]">E-Commerce</option>
                  <option className="bg-[#0a0a0a]">Website Redesigns</option>
                </select>
              </div>

              <div className="group/field">
                <label className="block text-sm font-light text-white/60 mb-2 group-focus-within/field:text-cyan-400/70 transition-colors duration-300">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-cyan-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,255,255,0.03)] hover:border-white/20 placeholder:text-white/20 resize-none"
                  placeholder="Tell us about your business and goals..."
                  onKeyDown={spawnBubble}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={submitState !== 'idle'}
                className="w-full py-4 rounded-lg bg-white text-black font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/90 hover-target relative overflow-hidden group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={submitState === 'idle' ? { scale: 1.01 } : {}}
                whileTap={submitState === 'idle' ? { scale: 0.99 } : {}}
              >
                <AnimatePresence mode="wait">
                  {submitState === 'idle' && (
                    <motion.span
                      key="idle"
                      className="relative z-10 flex items-center justify-center gap-2"
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </motion.span>
                  )}
                  {submitState === 'sending' && (
                    <motion.span
                      key="sending"
                      className="relative z-10 flex items-center justify-center gap-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </motion.span>
                  )}
                  {submitState === 'sent' && (
                    <motion.span
                      key="sent"
                      className="relative z-10 flex items-center justify-center gap-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </motion.button>
            </form>
          </div>

          {/* Footer */}
          <motion.div className="mt-24 pb-8 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">M</span>
                <span className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">C</span>
                <span className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800">F</span>
              </div>
              <span className="text-lg font-medium tracking-[0.2em] uppercase">Websites</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-white/70 text-sm font-light mb-4">
              <a href="tel:0753203477" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                <span>📞</span> 075 320 3477
              </a>
              <a href="https://mcfwebsites.lovable.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                <span>🌐</span> mcfwebsites.lovable.app
              </a>
            </div>

            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-4">
              MODERN. FAST. RELIABLE.
            </p>

            <div className="flex gap-8 text-white/30 text-xs">
              <a href="#services" className="hover:text-white/60 transition-colors hover-target">Services</a>
              <a href="#process" className="hover:text-white/60 transition-colors hover-target">Process</a>
              <a href="#work" className="hover:text-white/60 transition-colors hover-target">Work</a>
              <a href="#contact" className="hover:text-white/60 transition-colors hover-target">Contact</a>
            </div>

            <p className="text-white/20 text-[10px] mt-4">© 2026 mcf.webs — All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
