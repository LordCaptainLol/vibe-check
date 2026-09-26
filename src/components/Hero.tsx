import type { CSSProperties } from 'react';
import { ArrowRight, Clock, Dices, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { ModeSwitch } from './ModeSwitch';
import { useLang } from '../i18n/LanguageContext';
import type { Mode } from '../types';

const CHIP_SLOTS = [
  { className: '-left-10 top-16', r: '-8deg', delay: '0s' },
  { className: '-right-8 top-28', r: '10deg', delay: '-1.5s' },
  { className: '-left-4 bottom-10', r: '6deg', delay: '-3s' },
  { className: '-right-12 bottom-24', r: '-12deg', delay: '-4.5s' },
];

const CHIP_EMOJIS: Record<Mode, string[]> = {
  vibe: ['🌀', '🧠', '🍜', '🌙'],
  dnd: ['🐉', '🎲', '🗡️', '🧙'],
};

interface HeroProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onStart: () => void;
}

export function Hero({ mode, onModeChange, onStart }: HeroProps) {
  const { t } = useLang();

  const copy =
    mode === 'vibe'
      ? {
          badge: t.heroBadge,
          before: t.heroTitleBefore,
          highlight: t.heroTitleHighlight,
          after: t.heroTitleAfter,
          subtitle: t.heroSubtitle,
          cta: t.heroCta,
          meta: t.heroMeta,
        }
      : {
          badge: t.dndBadge,
          before: t.dndTitleBefore,
          highlight: t.dndTitleHighlight,
          after: t.dndTitleAfter,
          subtitle: t.dndSubtitle,
          cta: t.dndCta,
          meta: t.dndMeta,
        };
  const BadgeIcon = mode === 'vibe' ? Sparkles : Dices;

  return (
    <section className="relative flex flex-col items-center text-center">
      {CHIP_SLOTS.map((slot, i) => (
        <span
          key={`${mode}-${i}`}
          aria-hidden
          className={`glass pointer-events-none absolute hidden size-14 animate-float place-items-center rounded-2xl text-2xl shadow-xl md:grid ${slot.className}`}
          style={{ '--r': slot.r, animationDelay: slot.delay } as CSSProperties}
        >
          {CHIP_EMOJIS[mode][i]}
        </span>
      ))}

      <div className="animate-slide-up">
        <ModeSwitch mode={mode} onChange={onModeChange} />
      </div>

      <div key={mode} className="flex flex-col items-center">
        <span className="glass mt-8 inline-flex animate-slide-up items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
          <BadgeIcon className="size-3.5 text-amber-300" />
          {copy.badge}
        </span>

        <h1
          className="mt-6 animate-slide-up font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {copy.before}
          <span className="text-gradient">{copy.highlight}</span>
          {copy.after}
        </h1>

        <p
          className="mt-5 max-w-md animate-slide-up text-base text-white/65 text-pretty sm:text-lg"
          style={{ animationDelay: '160ms' }}
        >
          {copy.subtitle}
        </p>

        <div className="mt-9 animate-slide-up" style={{ animationDelay: '240ms' }}>
          <Button onClick={onStart} className="text-lg">
            {copy.cta}
            <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>

        <p
          className="mt-5 inline-flex animate-slide-up items-center gap-1.5 text-xs text-white/40"
          style={{ animationDelay: '320ms' }}
        >
          <Clock className="size-3.5" /> {copy.meta}
        </p>
      </div>
    </section>
  );
}
