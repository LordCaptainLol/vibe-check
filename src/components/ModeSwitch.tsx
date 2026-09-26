import { useLang } from '../i18n/LanguageContext';
import { cn } from '../lib/cn';
import type { Mode } from '../types';

interface ModeSwitchProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
}

/** Two-option segmented control with a sliding highlight. */
export function ModeSwitch({ mode, onChange }: ModeSwitchProps) {
  const { t } = useLang();
  const options: { id: Mode; emoji: string; label: string }[] = [
    { id: 'vibe', emoji: '✨', label: t.modeVibe },
    { id: 'dnd', emoji: '🐉', label: t.modeDnd },
  ];

  return (
    <div role="group" aria-label={t.modeLabel} className="glass relative flex rounded-2xl p-1 text-sm font-semibold">
      <span
        aria-hidden
        className={cn(
          'absolute inset-y-1 left-1 w-32 rounded-xl bg-white/15 shadow-inner ring-1 ring-white/20',
          'transition-transform duration-300 ease-[cubic-bezier(0.2,1.4,0.4,1)]',
          mode === 'dnd' && 'translate-x-32',
        )}
      />
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={mode === option.id}
          onClick={() => onChange(option.id)}
          className="relative z-10 flex w-32 cursor-pointer items-center justify-center gap-1.5 rounded-xl py-2 text-white/55 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 aria-pressed:text-white"
        >
          <span aria-hidden>{option.emoji}</span>
          {option.label}
        </button>
      ))}
    </div>
  );
}
