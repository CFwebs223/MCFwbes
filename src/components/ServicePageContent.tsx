import Link from 'next/link';

type Section = { heading: string; body: string[] };

export default function ServicePageContent({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <article className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <div className="max-w-3xl mx-auto">
        <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          {eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">{title}</h1>
        <p className="text-lg text-white/70 font-light leading-relaxed mb-14">{intro}</p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((para, i) => (
                  <p key={i} className="text-white/60 font-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Ready to get started?</h3>
            <p className="text-white/50 text-sm font-light">
              Tell us about your business and we&rsquo;ll put together a plan and a quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors hover-target"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
