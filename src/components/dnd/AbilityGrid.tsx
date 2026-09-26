import { ABILITY_META } from '../../data/dnd/abilities';
import { useCountUp } from '../../hooks/useCountUp';
import { useLang } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';
import type { Ability, AbilityScore } from '../../types';

const formatModifier = (mod: number) => (mod >= 0 ? `+${mod}` : `−${Math.abs(mod)}`);

interface AbilityGridProps {
  abilities: AbilityScore[];
  /** Abilities to visually emphasise (the class's key abilities). */
  highlight: Ability[];
}

export function AbilityGrid({ abilities, highlight }: AbilityGridProps) {
  const { t } = useLang();

  return (
    <div className="mt-7">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">{t.abilityScores}</p>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
        {abilities.map((a, i) => (
          <AbilityCell key={a.ability} score={a} highlighted={highlight.includes(a.ability)} delay={700 + i * 90} />
        ))}
      </div>
    </div>
  );
}

interface AbilityCellProps {
  score: AbilityScore;
  highlighted: boolean;
  delay: number;
}

function AbilityCell({ score, highlighted, delay }: AbilityCellProps) {
  const { l } = useLang();
  const value = useCountUp(score.score, 900, delay);
  const meta = ABILITY_META[score.ability];

  return (
    <div
      title={l(meta.name)}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        'flex animate-pop-in flex-col items-center rounded-2xl border py-3',
        highlighted ? 'border-white/40 bg-white/15 shadow-lg shadow-white/10' : 'border-white/10 bg-white/5',
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/55">{l(meta.short)}</span>
      <span className="font-display text-2xl font-bold tabular-nums">{value}</span>
      <span className="mt-1 rounded-full bg-black/30 px-2 text-[11px] font-semibold tabular-nums text-white/75">
        {formatModifier(score.modifier)}
      </span>
    </div>
  );
}
