import Link from 'next/link';
import DemoBadge from './DemoBadge';

export type DemoTheme = {
  name: string;
  navLinks: { href: string; label: string }[];
  accentText: string;
  accentBg: string;
  bg: string;
};

export default function DemoShell({
  theme,
  children,
}: {
  theme: DemoTheme;
  children: React.ReactNode;
}) {
  return (
    <div className={`${theme.bg} min-h-screen text-white`}>
      <DemoBadge />
      <header className="sticky top-[37px] md:top-[41px] z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-5 md:px-12 py-4 flex items-center justify-between">
          <span className={`font-semibold tracking-tight ${theme.accentText}`}>{theme.name}</span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {theme.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className={`px-5 py-2 rounded-full text-sm font-medium text-black ${theme.accentBg}`}
          >
            Get a Quote
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 py-10 px-5 md:px-12 text-center">
        <p className="text-white/40 text-sm mb-2">
          {theme.name} is a fictional example business used to demonstrate MCFWebs&rsquo; work.
        </p>
        <Link href="/demos" className="text-white/60 hover:text-white text-sm underline">
          &larr; Back to all demos
        </Link>
      </footer>
    </div>
  );
}
