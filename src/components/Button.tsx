import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

type Variant = 'primary' | 'secondary';

const base =
  'group relative inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0716] ' +
  'active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary:
    'px-7 py-4 text-base text-white bg-linear-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-size-[200%_auto] bg-left ' +
    'shadow-lg shadow-fuchsia-500/30 hover:bg-right hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/50',
  secondary: 'glass px-5 py-3.5 text-sm text-white/90 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(base, variants[variant], className)} {...props} />;
}
