import { useCountUp } from '../hooks/useCountUp';
import { TRAIT_META } from '../data/traits';
import { useLang } from '../i18n/LanguageContext';
import type { VibeStat } from '../types';

interface StatBarProps {
  stat: VibeStat;
  delay: number;
}

export function StatBar({ stat, delay }: StatBarProps) {
  const { l } = useLang();
  const value = useCountUp(stat.value, 1100, delay);
  const meta = TRAIT_META[stat.trait];

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="font-medium text-white/80">{l(meta.label)}</span>
        <span className="font-display text-base font-bold tabular-nums">{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full animate-grow rounded-full bg-linear-to-r ${meta.bar} shadow-[0_0_12px_rgb(255_255_255/0.35)]`}
          style={{ width: `${stat.value}%`, animationDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}
