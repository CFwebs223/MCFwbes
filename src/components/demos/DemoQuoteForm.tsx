'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'phone' | 'message', string>>;

export default function DemoQuoteForm({
  services,
  submitLabel,
  buttonClassName,
  focusClassName,
}: {
  services: string[];
  submitLabel: string;
  buttonClassName: string;
  focusClassName: string;
}) {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const validate = (formData: FormData): Errors => {
    const next: Errors = {};
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (name.length < 2) next.name = 'Please enter your name.';
    if (phone.replace(/\D/g, '').length < 9) next.phone = 'Please enter a valid contact number.';
    if (message.length < 5) next.message = 'Please briefly describe what you need.';

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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setState('success');
  };

  if (state === 'success') {
    return (
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center" role="status">
        <h3 className="text-xl font-medium text-white mb-2">Request received</h3>
        <p className="text-white/60">
          This is a concept demo, so no request has actually been sent anywhere &mdash; in a real
          build this would notify the business immediately.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 p-8 rounded-2xl bg-white/5 border border-white/10">
      <div>
        <label htmlFor="demo-name" className="block text-sm text-white/60 mb-2">
          Name
        </label>
        <input
          id="demo-name"
          name="name"
          type="text"
          required
          aria-invalid={!!errors.name}
          className={`w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none transition-colors ${focusClassName}`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="demo-phone" className="block text-sm text-white/60 mb-2">
          Contact number
        </label>
        <input
          id="demo-phone"
          name="phone"
          type="tel"
          required
          aria-invalid={!!errors.phone}
          className={`w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none transition-colors ${focusClassName}`}
          placeholder="082 000 0000"
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="demo-service" className="block text-sm text-white/60 mb-2">
          Service needed
        </label>
        <select
          id="demo-service"
          name="service"
          className={`w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none appearance-none transition-colors ${focusClassName}`}
        >
          {services.map((service) => (
            <option key={service} className="bg-[#0a0a0a]">
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="demo-message" className="block text-sm text-white/60 mb-2">
          Details
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={3}
          required
          aria-invalid={!!errors.message}
          className={`w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none transition-colors ${focusClassName}`}
          placeholder="Briefly describe what you need..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className={`w-full py-4 rounded-lg font-medium transition-opacity disabled:opacity-70 ${buttonClassName}`}
      >
        {state === 'submitting' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
