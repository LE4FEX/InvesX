import { forwardRef } from 'react';
import { clsx } from 'clsx';

export type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-2 text-neutral-11 transition hover:text-primary-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9 focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  ),
);

NavLink.displayName = 'NavLink';
