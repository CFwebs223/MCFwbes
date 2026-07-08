'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const validate = (formData: FormData): Errors => {
    const next: Errors = {};
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (name.length < 2) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.';
    if (message.length < 10) next.message = 'Please tell us a little more about your project.';

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setState('error');
      return;
    }

    setState('submitting');
    try {
      // No backend is wired up yet — this is where a form endpoint / email
      // service would be connected. Simulated success for now.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setState('success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="p-8 rounded-2xl glass-card text-center" role="status">
        <h3 className="text-xl font-medium text-white mb-2">Message sent</h3>
        <p className="text-white/60 font-light">
          Thanks for reaching out — we&rsquo;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 p-8 rounded-2xl glass-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-white/60 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-500/40 transition-colors"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="text-red-400 text-xs mt-1.5">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-light text-white/60 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-500/40 transition-colors"
            placeholder="you@business.co.za"
          />
          {errors.email && (
            <p id="email-error" className="text-red-400 text-xs mt-1.5">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-light text-white/60 mb-2">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-500/40 transition-colors appearance-none"
        >
          <option className="bg-[#0a0a0a]">Custom Website</option>
          <option className="bg-[#0a0a0a]">Digital Menu</option>
          <option className="bg-[#0a0a0a]">Booking System</option>
          <option className="bg-[#0a0a0a]">3D Web Experience</option>
          <option className="bg-[#0a0a0a]">Design System</option>
          <option className="bg-[#0a0a0a]">Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-light text-white/60 mb-2">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-500/40 transition-colors resize-none"
          placeholder="Tell us about your business and goals..."
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-xs mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      {state === 'error' && Object.keys(errors).length === 0 && (
        <p className="text-red-400 text-sm" role="alert">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full py-4 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
