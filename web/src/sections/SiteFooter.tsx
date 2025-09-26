import { ArrowUpRightIcon } from '../components/icons';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-6 bg-neutral-2/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-neutral-11 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-neutral-12">InvesX</p>
          <p>Accessible investing toolkit built for the open web.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary-10" href="#">
            Deploy to Netlify
            <ArrowUpRightIcon />
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary-10" href="#">
            View on GitHub
            <ArrowUpRightIcon />
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary-10" href="#">
            Accessibility statement
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
