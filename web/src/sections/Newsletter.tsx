import type { ComponentPropsWithoutRef } from 'react';

export function Newsletter({ className }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section id="newsletter" className={className} aria-labelledby="newsletter-heading">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-neutral-6 bg-gradient-to-br from-primary-3/60 via-white/80 to-primary-4/40 p-8 text-center shadow-lg sm:p-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-10">Stay updated</p>
          <h2 id="newsletter-heading" className="text-3xl font-display font-semibold text-slate-12 sm:text-4xl">
            Join the weekly investing digest
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-11">
            Fresh research, new calculators, and inclusive design improvements — delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>
        </div>
        <form className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row" aria-label="Subscribe to investing digest">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="w-full flex-1 rounded-full border border-neutral-6 bg-white px-5 py-3 text-base text-neutral-12 shadow-sm focus:border-primary-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary-9 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-9/30 transition hover:bg-primary-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9 focus-visible:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
