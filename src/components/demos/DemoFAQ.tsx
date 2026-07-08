export type DemoFAQItem = { question: string; answer: string };

export default function DemoFAQ({
  heading,
  items,
}: {
  heading: string;
  items: DemoFAQItem[];
}) {
  return (
    <section className="py-20 px-5 md:px-12 bg-black/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">{heading}</h2>
        <p className="text-white/50 text-center text-sm mb-10">
          Sample FAQ content for this concept demo.
        </p>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group bg-white/5 border border-white/10 rounded-xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer font-medium list-none">
                {item.question}
                <span className="shrink-0 text-white/40 text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/60 text-sm font-light leading-relaxed mt-3">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
