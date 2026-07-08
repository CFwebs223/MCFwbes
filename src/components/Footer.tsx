'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS, NAV_LINKS } from '@/lib/site-config';

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname?.startsWith('/demos/')) return null;

  return (
    <footer className="relative z-10 bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-0.5 mb-3">
              {['M', 'C', 'F'].map((l) => (
                <span
                  key={l}
                  className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800"
                >
                  {l}
                </span>
              ))}
              <span className="ml-2 text-xs font-medium tracking-[0.2em] uppercase text-white/60">
                Webs
              </span>
            </div>
            <p className="text-white/50 text-sm font-light max-w-xs leading-relaxed">
              Custom websites, digital menus, booking systems, and 3D web experiences for South
              African businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-yellow-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="text-white/50 hover:text-yellow-500 transition-colors"
                >
                  {phone.label}: {phone.display}
                </a>
              ))}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-white/50 hover:text-yellow-500 transition-colors break-all"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">
              Follow
            </h3>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-yellow-500 text-sm transition-colors"
            >
              {BUSINESS.instagramHandle}
            </a>
            <p className="text-white/30 text-xs mt-4">Serving businesses across South Africa.</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {year} {BUSINESS.name} &mdash; All rights reserved.
          </p>
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
            Modern. Fast. Reliable.
          </p>
        </div>
      </div>
    </footer>
  );
}
