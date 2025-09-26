import type { ComponentPropsWithoutRef } from 'react';
import { ArrowUpRightIcon } from '../components/icons';

const featureCards = [
  {
    title: 'Goal-focused planning',
    description:
      'Create multiple investing scenarios, track contribution targets, and compare growth paths without spreadsheet overload.',
  },
  {
    title: 'Cross-platform experience',
    description:
      'Optimized for touch and keyboard navigation. Works offline once deployed to GitHub Pages or Netlify, with light/dark aware colors.',
  },
  {
    title: 'Education at your pace',
    description:
      'Digestible lessons covering investing basics, risk management, and behavioral finance — curated for new and seasoned investors alike.',
  },
  {
    title: 'Integrations & exports',
    description:
      'Connect to CSV portfolio data, export to Numbers or Excel, and sync with budgeting tools to keep your financial universe aligned.',
  },
];

export function Features({ className }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section id="features" className={className} aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-10">Why InvesX</p>
          <h2 id="features-heading" className="text-3xl font-display font-semibold text-slate-12 sm:text-4xl">
            Built to support your investing rituals
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-11">
            Whether you&apos;re automating contributions or exploring new strategies, InvesX keeps everything accessible from any device with a browser.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-3xl border border-neutral-6 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-neutral-12">{card.title}</h3>
              <p className="mt-3 text-sm text-neutral-11">{card.description}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-10 underline-offset-4 hover:underline"
              >
                Learn more
                <ArrowUpRightIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
