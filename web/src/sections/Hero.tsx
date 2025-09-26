import type { ComponentPropsWithoutRef } from 'react';
import { ArrowUpRightIcon } from '../components/icons';

export function Hero({ className }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section id="top" className={className} aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-primary-6 bg-primary-3/30 px-4 py-2 text-sm font-semibold text-primary-11">
            Accessible investing for every device
          </p>
          <h1 id="hero-heading" className="text-4xl font-display font-bold leading-tight text-slate-12 sm:text-5xl">
            Build wealth with clarity and confidence.
          </h1>
          <p className="max-w-xl text-lg text-neutral-11">
            InvesX is your digital companion for Dollar-Cost Averaging (DCA), portfolio planning, and financial education. Designed to work beautifully on the web, GitHub Pages, or Netlify—no matter if you&apos;re on desktop, iOS, or iPadOS.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-primary-9 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-9/30 transition hover:bg-primary-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9 focus-visible:ring-offset-2"
              href="#dca"
            >
              Plan my DCA strategy
              <ArrowUpRightIcon />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-neutral-7 bg-white px-6 py-3 text-base font-semibold text-neutral-12 transition hover:border-primary-8 hover:text-primary-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9 focus-visible:ring-offset-2"
              href="#insights"
            >
              Explore learning hub
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-4 via-primary-6/50 to-primary-9/40 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-primary-5 bg-white/80 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between text-sm text-neutral-11">
              <span className="font-semibold text-neutral-12">Sample DCA plan</span>
              <span>Balanced portfolio</span>
            </div>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-neutral-11">Monthly contribution</dt>
                <dd className="font-semibold text-neutral-12">$600</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-11">Horizon</dt>
                <dd className="font-semibold text-neutral-12">5 years</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-11">Projected value*</dt>
                <dd className="font-semibold text-primary-11">$41,205</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-neutral-10">
              *Projection uses a conservative 6% annualized return. Adjust scenarios below for your own plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
