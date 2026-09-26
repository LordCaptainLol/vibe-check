import { Flame, Lightbulb } from 'lucide-react';
import { Burst } from './Burst';
import { StatBar } from './StatBar';
import { useLang } from '../i18n/LanguageContext';
import type { VibeResult } from '../types';

export function VibeCard({ result }: { result: VibeResult }) {
  const { t, l } = useLang();
  const { archetype, stats, vibeId } = result;
  const Icon = archetype.icon;

  return (
    <div className="relative animate-card-reveal">
      <Burst emoji={archetype.emoji} />

      {/* Glow halo */}
      <div
        aria-hidden
        className={`absolute -inset-2 rounded-[2.25rem] bg-linear-to-br ${archetype.gradient} opacity-50 blur-2xl`}
      />

      <article className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#0e0a1c]/75 p-6 backdrop-blur-xl sm:p-8">
        {/* Colour wash */}
        <div
          aria-hidden
          className={`absolute -right-24 -top-24 size-72 rounded-full bg-linear-to-br ${archetype.gradient} opacity-40 blur-3xl`}
        />
        {/* One-time shine sweep */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-linear-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="relative">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
            <span>{t.cardLabel}</span>
            <span className="font-mono tracking-widest">#{vibeId}</span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div
              className={`relative grid size-20 shrink-0 place-items-center rounded-3xl bg-linear-to-br ${archetype.gradient} text-4xl shadow-lg`}
            >
              {archetype.emoji}
              <span className="absolute -bottom-1.5 -right-1.5 grid size-7 place-items-center rounded-full border-2 border-[#0e0a1c] bg-white text-slate-900">
                <Icon className="size-3.5" strokeWidth={2.5} />
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{t.yourVibeIs}</p>
              <h2
                className={`bg-linear-to-r ${archetype.gradient} bg-clip-text font-display text-3xl font-bold leading-tight tracking-tight text-transparent sm:text-4xl`}
              >
                {l(archetype.title)}
              </h2>
            </div>
          </div>

          <p className="mt-4 text-sm italic text-white/65">“{l(archetype.tagline)}”</p>

          <div className="mt-7 space-y-4">
            {stats.map((stat, i) => (
              <StatBar key={stat.trait} stat={stat} delay={700 + i * 180} />
            ))}
          </div>

          <p className="mt-7 leading-relaxed text-white/85 text-pretty">{l(archetype.summary)}</p>

          <div className="mt-5 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-300" />
            <p className="text-sm leading-relaxed text-white/75">
              <span className="font-semibold text-white">{t.prescription}</span>
              {l(archetype.tip)}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <Flame className="size-3.5 text-orange-400" />
              {t.rarity(archetype.rarity)}
            </span>
            <span className="font-display font-bold text-white/60">vibecheck.</span>
          </div>
        </div>
      </article>
    </div>
  );
}
