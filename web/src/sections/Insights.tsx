import type { ComponentPropsWithoutRef } from 'react';

const insights = [
  {
    title: 'How to stay invested when markets wobble',
    summary:
      'Explore behavioral strategies and automation tactics that make it easier to keep contributing during volatility.',
    href: '#',
  },
  {
    title: 'DCA vs. lump sum: finding the right fit',
    summary:
      'Understand the trade-offs between gradual investing and putting capital to work immediately, with real-world case studies.',
    href: '#',
  },
  {
    title: 'Accessibility checklist for financial apps',
    summary:
      'Ship inclusive experiences with guidance on typography, motion, and color contrast tuned for dark or light environments.',
    href: '#',
  },
];

export function Insights({ className }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section id="insights" className={className} aria-labelledby="insights-heading">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-10">Learning hub</p>
          <h2 id="insights-heading" className="text-3xl font-display font-semibold text-slate-12 sm:text-4xl">
            Level up your investing literacy
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-11">
            Bite-sized guides and templates help you translate concepts into action. Subscribe to get new lessons delivered right to your inbox.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="flex h-full flex-col rounded-3xl border border-neutral-6 bg-white/80 p-6 text-left shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-12">{insight.title}</h3>
              <p className="mt-3 flex-1 text-sm text-neutral-11">{insight.summary}</p>
              <a className="mt-6 text-sm font-semibold text-primary-10 underline-offset-4 hover:underline" href={insight.href}>
                Read story
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
