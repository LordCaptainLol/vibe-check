import { useLang } from '../i18n/LanguageContext';
import { cn } from '../lib/cn';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const { t } = useLang();

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs font-semibold text-white/50">
        <span>
          {t.question} <span className="text-white">{current + 1}</span> / {total}
        </span>
        <span>
          {Math.round((current / total) * 100)}% {t.decoded}
        </span>
      </div>
      <div
        className="flex gap-2"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current + 1}
      >
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className={cn(
                'h-full rounded-full bg-linear-to-r from-fuchsia-400 to-indigo-400 transition-[width] duration-500 ease-out',
                i <= current ? 'w-full' : 'w-0',
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
