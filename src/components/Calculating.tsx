import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

const DURATION_MS = 2800;
const STEP_MS = 560;

/** One emoji per entry in the localized `loadingSteps`. */
const STEP_EMOJIS = ['🔮', '🍕', '🧠', '🌀', '✨'];

interface CalculatingProps {
  onDone: () => void;
}

export function Calculating({ onDone }: CalculatingProps) {
  const { t } = useLang();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setStep((s) => Math.min(s + 1, STEP_EMOJIS.length - 1)), STEP_MS);
    const done = window.setTimeout(onDone, DURATION_MS);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(done);
    };
  }, [onDone]);

  const current = { emoji: STEP_EMOJIS[step], text: t.loadingSteps[step] };

  return (
    <section className="flex animate-fade-in flex-col items-center text-center" aria-live="polite">
      <div className="relative size-36">
        <div className="absolute inset-0 rounded-full bg-fuchsia-500/40 blur-2xl" />
        <div
          className="absolute inset-0 animate-spin rounded-full"
          style={{
            animationDuration: '1.1s',
            background: 'conic-gradient(from 0deg, transparent 0deg, #d946ef 120deg, #6366f1 240deg, #22d3ee 360deg)',
          }}
        />
        <div className="absolute inset-[5px] grid place-items-center rounded-full bg-[#0b0716]">
          <span key={step} className="animate-pop-in text-5xl">
            {current.emoji}
          </span>
        </div>
      </div>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight sm:text-3xl">{t.analyzing}</h2>
      <p key={current.text} className="mt-2 h-6 animate-fade-in text-white/60">
        {current.text}
      </p>

      <div className="mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-fuchsia-400 via-violet-400 to-cyan-300"
          style={{ animation: `grow ${DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1) both`, width: '100%' }}
        />
      </div>
    </section>
  );
}
