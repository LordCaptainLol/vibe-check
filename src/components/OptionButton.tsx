import { Check } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { cn } from '../lib/cn';
import type { Option } from '../types';

export type OptionState = 'idle' | 'selected' | 'dimmed';

interface OptionButtonProps {
  option: Option;
  index: number;
  state: OptionState;
  onSelect: (option: Option) => void;
}

export function OptionButton({ option, index, state, onSelect }: OptionButtonProps) {
  const { l } = useLang();

  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      disabled={state !== 'idle'}
      aria-pressed={state === 'selected'}
      style={{ animationDelay: state === 'idle' ? `${100 + index * 70}ms` : undefined }}
      className={cn(
        'group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 ease-out sm:p-5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300',
        state === 'idle' &&
          'glass animate-pop-in cursor-pointer hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-fuchsia-500/10 active:scale-[0.97]',
        state === 'selected' &&
          'animate-jelly border-white/40 bg-linear-to-br from-fuchsia-500 to-indigo-500 shadow-xl shadow-fuchsia-500/40',
        state === 'dimmed' && 'glass scale-[0.97] opacity-30',
      )}
    >
      <span
        className={cn(
          'grid size-12 shrink-0 place-items-center rounded-xl text-2xl transition-transform duration-300',
          state === 'selected' ? 'bg-white/20' : 'bg-white/8 group-hover:-rotate-6 group-hover:scale-110',
        )}
      >
        {option.emoji}
      </span>
      <span className="pr-6 font-medium leading-snug text-white">{l(option.label)}</span>

      <span className="absolute right-3 top-3">
        {state === 'selected' ? (
          <span className="grid size-6 animate-pop-in place-items-center rounded-full bg-white text-fuchsia-600">
            <Check className="size-4" strokeWidth={3} />
          </span>
        ) : (
          <kbd className="hidden rounded-md border border-white/15 px-1.5 font-sans text-[10px] text-white/40 sm:inline-block">
            {index + 1}
          </kbd>
        )}
      </span>
    </button>
  );
}
