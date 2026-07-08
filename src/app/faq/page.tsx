import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about MCFWebs' custom websites, digital menus, booking systems, 3D web experiences, pricing, and timelines.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Custom websites from MCFWebs start from R5,000 as a one-time project fee, with digital menus from R2,000 and full 3D scroll-based experiences from R8,000. The exact price depends on the number of pages, features like booking or menus, and how much custom design work is involved — see the full pricing page for package details.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "Most custom website projects are completed within one to three weeks from kickoff to launch. Digital menus typically take about a week, while full 3D scroll-based experiences take two to four weeks or more depending on scope, since they involve custom Three.js scene design rather than a template.",
  },
  {
    question: "Do I need to be based in a specific city to work with MCFWebs?",
    answer:
      "No, MCFWebs serves businesses across South Africa, not a single city. All discovery, design review, and launch communication is handled remotely over calls, messages, and email, so location is not a barrier to working together.",
  },
  {
    question: "What is a digital menu and how does it work?",
    answer:
      "A digital menu is a mobile-friendly web page that customers open by scanning a QR code, showing your full menu with prices and descriptions without needing an app or account. Updates to prices, specials, or availability take minutes instead of a full reprint — see the digital menus service page for full details.",
  },
  {
    question: "Can I update the website myself after it launches?",
    answer:
      "Yes, day-to-day content like text, prices, and menu items are set up so they can be updated without needing a developer for every small change. Larger structural changes — new pages, redesigns, new features — are typically handled by MCFWebs to keep the site's design and performance consistent.",
  },
  {
    question: "Do you offer hosting and domain setup?",
    answer:
      "Yes, MCFWebs deploys sites on modern, reliable hosting (such as Vercel) and can help set up or transfer a domain as part of the launch process. Ongoing hosting costs are typically minimal or free depending on the platform and traffic level.",
  },
  {
    question: "What's the difference between a template site and a custom site?",
    answer:
      "A template site reuses the same pre-built layout and code as thousands of other websites, while a custom site is designed and coded specifically around your business, content, and customers. Custom sites are generally faster, more differentiated, and easier to extend with features like booking systems or 3D experiences later — see the About page for more on why this matters.",
  },
  {
    question: "Do I need a 3D or interactive website for my business?",
    answer:
      "Not necessarily — a 3D web experience is a deliberate, higher-effort option best suited to brands where the website itself needs to demonstrate creativity or premium positioning, such as design studios or product launches. Most trades and hospitality businesses are better served by a fast, clear custom website, with 3D reserved for brands specifically wanting that impact.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
  url: `${SITE_URL}/faq`,
};

export default function FaqPage() {
  return (
    <div className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <JsonLd data={schema} />
      <div className="max-w-3xl mx-auto">
        <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          FAQ
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-white/70 font-light leading-relaxed mb-14">
          Answers to the questions we hear most often about pricing, timelines, and how projects
          work. Get in touch if yours isn&rsquo;t answered here.
        </p>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group glass-card rounded-2xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer text-white font-medium list-none">
                {faq.question}
                <span className="shrink-0 text-yellow-500 text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/60 font-light leading-relaxed mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Still have questions?</h3>
            <p className="text-white/50 text-sm font-light">
              Reach out and we&rsquo;ll get back to you directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors hover-target"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
