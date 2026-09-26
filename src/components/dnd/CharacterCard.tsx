import { Dices, ScrollText } from 'lucide-react';
import { AbilityGrid } from './AbilityGrid';
import { Burst } from '../Burst';
import { useLang } from '../../i18n/LanguageContext';
import type { DndResult } from '../../types';

export function CharacterCard({ result }: { result: DndResult }) {
  const { t, l } = useLang();
  const { race, cls, abilities, initiative, sheetId } = result;
  const Icon = cls.icon;
  const rollNote = initiative === 20 ? t.nat20 : initiative === 1 ? t.nat1 : null;

  return (
    <div className="relative animate-card-reveal">
      <Burst emoji={cls.emoji} />

      {/* Glow halo */}
      <div
        aria-hidden
        className={`absolute -inset-2 rounded-[2.25rem] bg-linear-to-br ${cls.gradient} opacity-50 blur-2xl`}
      />

      <article className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#0e0a1c]/75 p-6 backdrop-blur-xl sm:p-8">
        <div
          aria-hidden
          className={`absolute -right-24 -top-24 size-72 rounded-full bg-linear-to-br ${cls.gradient} opacity-40 blur-3xl`}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-linear-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="relative">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
            <span>{t.sheetLabel}</span>
            <span className="font-mono tracking-widest">#{sheetId}</span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div
              className={`relative grid size-20 shrink-0 place-items-center rounded-3xl bg-linear-to-br ${cls.gradient} text-4xl shadow-lg`}
            >
              {cls.emoji}
              <span className="absolute -bottom-1.5 -right-1.5 grid size-8 place-items-center rounded-full border-2 border-[#0e0a1c] bg-white text-base">
                {race.emoji}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{t.yourCharacter}</p>
              <h2
                className={`bg-linear-to-r ${cls.gradient} bg-clip-text font-display text-3xl font-bold leading-tight tracking-tight text-transparent sm:text-4xl`}
              >
                {t.dndTitle(l(race.name), l(cls.name))}
              </h2>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <span aria-hidden>{race.emoji}</span>
              {l(race.name)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <Icon className="size-3.5" />
              {l(cls.name)}
            </span>
          </div>

          <p className="mt-4 text-sm italic text-white/65">“{l(cls.tagline)}”</p>

          <AbilityGrid abilities={abilities} highlight={cls.abilities} />

          <p className="mt-7 leading-relaxed text-white/85 text-pretty">
            {l(cls.summary)} {l(race.flavor)}
          </p>

          <div className="mt-5 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <ScrollText className="mt-0.5 size-5 shrink-0 text-amber-300" />
            <p className="text-sm leading-relaxed text-white/75">
              <span className="font-semibold text-white">{t.quest}</span>
              {l(cls.tip)}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <Dices className="size-3.5 text-amber-300" />
              {t.initiative}: <span className="font-bold tabular-nums text-white/80">{initiative}</span>
              {rollNote && <span className="font-semibold text-amber-300">{rollNote}</span>}
            </span>
            <span className="font-display font-bold text-white/60">vibecheck.</span>
          </div>
        </div>
      </article>
    </div>
  );
}
