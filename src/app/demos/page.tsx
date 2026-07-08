import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Showcases",
  description:
    "Three fully interactive concept demo websites built by MCFWebs — a plumber, an electrician, and a café — showing what we can build for your business.",
  alternates: { canonical: "/demos" },
};

const demos = [
  {
    slug: "plumber",
    name: "Example Plumbing Co.",
    tagline: "Emergency call-outs, service list, and quote requests.",
    gradient: "from-blue-500/25 to-cyan-500/10",
  },
  {
    slug: "electrician",
    name: "Example Electrical Services",
    tagline: "Rewiring, safety certificates, and load-shedding backup power.",
    gradient: "from-yellow-500/25 to-orange-500/10",
  },
  {
    slug: "cafe",
    name: "Example Coffee House",
    tagline: "A digital QR-code menu and warm café brand experience.",
    gradient: "from-emerald-500/25 to-amber-500/10",
  },
];

export default function DemosIndexPage() {
  return (
    <div className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="text-cyan-400/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Demo Showcases
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Three Complete Example Websites
        </h1>
        <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-16">
          These are illustrative example builds created by MCFWebs to demonstrate our work for
          different small-business verticals &mdash; not real clients. Each one is a complete,
          clickable mini-site with real interactive features: forms, a menu, and its own review
          carousel. Click into each to explore it fully.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demos/${demo.slug}`}
              className={`group relative block aspect-[4/3] rounded-2xl overflow-hidden glass-card bg-gradient-to-br ${demo.gradient} hover:scale-[1.02] transition-transform duration-500`}
            >
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                Concept Demo
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-xl font-medium text-white mb-2">{demo.name}</h2>
                <p className="text-white/60 text-sm font-light">{demo.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-yellow-500 font-medium group-hover:gap-2.5 transition-all">
                  Explore Demo <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
