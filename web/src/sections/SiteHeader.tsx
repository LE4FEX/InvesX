import { useState } from 'react';
import { MenuIcon, XIcon } from '../components/icons';
import { NavLink } from '../components/NavLink';

const NAV_ITEMS = [
  { href: '#dca', label: 'DCA Planner' },
  { href: '#features', label: 'Features' },
  { href: '#insights', label: 'Insights' },
  { href: '#newsletter', label: 'Stay Updated' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-6 bg-neutral-2/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a className="flex items-center gap-2" href="#top">
          <span className="rounded-full bg-primary-9 px-2 py-1 text-sm font-semibold text-white">
            InvesX
          </span>
          <span className="text-sm text-neutral-11">Invest with clarity</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-neutral-7 bg-white/70 px-4 py-2 text-sm font-semibold text-primary-11 shadow-sm transition hover:border-primary-8 hover:bg-white sm:text-base"
        >
          Launch App
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9 focus-visible:ring-offset-2 sm:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <XIcon aria-hidden /> : <MenuIcon aria-hidden />}
        </button>
      </div>
      {mobileOpen ? (
        <nav className="border-t border-neutral-6 bg-neutral-1 sm:hidden">
          <ul className="space-y-1 px-4 py-4 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
