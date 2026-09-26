import type { CSSProperties } from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useLang } from '../i18n/LanguageContext';

const CHIPS = [
  { emoji: '🌀', className: '-left-10 top-4', r: '-8deg', delay: '0s' },
  { emoji: '🧠', className: '-right-8 top-16', r: '10deg', delay: '-1.5s' },
  { emoji: '🍜', className: '-left-4 bottom-10', r: '6deg', delay: '-3s' },
  { emoji: '🌙', className: '-right-12 bottom-24', r: '-12deg', delay: '-4.5s' },
];

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  const { t } = useLang();

  return (
    <section className="relative flex flex-col items-center text-center">
      {CHIPS.map((chip) => (
        <span
          key={chip.emoji}
          aria-hidden
          className={`glass pointer-events-none absolute hidden size-14 animate-float place-items-center rounded-2xl text-2xl shadow-xl md:grid ${chip.className}`}
          style={{ '--r': chip.r, animationDelay: chip.delay } as CSSProperties}
        >
          {chip.emoji}
        </span>
      ))}

      <span className="glass inline-flex animate-slide-up items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
        <Sparkles className="size-3.5 text-amber-300" />
        {t.heroBadge}
      </span>

      <h1
        className="mt-6 animate-slide-up font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl"
        style={{ animationDelay: '80ms' }}
      >
        {t.heroTitleBefore}
        <span className="text-gradient">{t.heroTitleHighlight}</span>
        {t.heroTitleAfter}
      </h1>

      <p
        className="mt-5 max-w-md animate-slide-up text-base text-white/65 text-pretty sm:text-lg"
        style={{ animationDelay: '160ms' }}
      >
        {t.heroSubtitle}
      </p>

      <div className="mt-9 animate-slide-up" style={{ animationDelay: '240ms' }}>
        <Button onClick={onStart} className="text-lg">
          {t.heroCta}
          <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>

      <p
        className="mt-5 inline-flex animate-slide-up items-center gap-1.5 text-xs text-white/40"
        style={{ animationDelay: '320ms' }}
      >
        <Clock className="size-3.5" /> {t.heroMeta}
      </p>
    </section>
  );
}
