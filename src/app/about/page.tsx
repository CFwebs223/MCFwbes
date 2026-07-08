import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "MCFWebs is a South African web design studio building custom websites and 3D web experiences. Learn our process and why custom development beats page-builder templates.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <div className="max-w-3xl mx-auto">
        <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          About
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
          A Web Design Studio Built Around Custom Work
        </h1>
        <p className="text-lg text-white/70 font-light leading-relaxed mb-14">
          MCFWebs is a South African web design and development studio serving businesses
          nationwide. We design and build custom websites, digital menus, booking systems, and
          interactive 3D web experiences — this site is itself an example of the standard we hold
          our own work to.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-4">Why we exist</h2>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              A large share of small and medium South African businesses are still running on
              recycled page-builder templates, outdated agency builds from years ago, or no
              website at all beyond a social media page. That gap between what a business
              actually offers and what its website communicates is the problem MCFWebs was
              started to close: fast, custom-built sites that look and perform like they belong
              to a serious business, at a price that a growing local business can justify.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
              Why custom development beats page-builder templates
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              Page-builder templates are fast to launch but slow in every way that matters
              afterwards: bloated page weight from unused template features, generic layouts that
              make differentiated businesses look interchangeable, and limited flexibility once
              you need something the template wasn&rsquo;t designed for &mdash; a booking flow, a
              digital menu, or a genuinely interactive 3D section like the one on our own
              homepage.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              A custom-coded site starts lighter, loads faster on the mobile connections most South
              African customers actually browse on, and can grow with your business instead of
              fighting the template&rsquo;s limitations every time you want to add something new.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-4">How we work</h2>
            <p className="text-white/60 font-light leading-relaxed">
              Every project follows the same four stages: discovery, where we learn your business
              and goals; design, where we build a layout and visual system around your brand;
              build, where we develop the real, working site; and launch, where we deploy, test on
              real devices, and hand everything over. See the full breakdown on our{' '}
              <Link href="/#process" className="text-yellow-500 hover:underline">
                process section
              </Link>{' '}
              or view our{' '}
              <Link href="/demos" className="text-yellow-500 hover:underline">
                interactive demo showcases
              </Link>{' '}
              to see the kind of work we deliver.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
              Free and open-source tooling
            </h2>
            <p className="text-white/60 font-light leading-relaxed">
              We build primarily with Next.js, React, Tailwind CSS, Three.js, and GSAP &mdash; a
              modern, free and open-source stack that keeps project costs predictable and avoids
              locking client sites behind ongoing proprietary licensing fees.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Want to work together?</h3>
            <p className="text-white/50 text-sm font-light">
              Tell us about your business and we&rsquo;ll put together a plan and a quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors hover-target"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
