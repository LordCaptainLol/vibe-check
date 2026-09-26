import { useCallback, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { Calculating } from './components/Calculating';
import { ResultScreen } from './components/ResultScreen';
import { LanguageToggle } from './components/LanguageToggle';
import { useLang } from './i18n/LanguageContext';
import { computeVibe, pickQuestions } from './lib/vibe';
import type { Option, Phase, Question, VibeResult } from './types';

const QUESTION_COUNT = 3;

export default function App() {
  const { t } = useLang();
  const [phase, setPhase] = useState<Phase>('hero');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<VibeResult | null>(null);
  const [runId, setRunId] = useState(0);

  const start = useCallback(() => {
    setQuestions(pickQuestions(QUESTION_COUNT));
    setResult(null);
    setRunId((id) => id + 1);
    setPhase('quiz');
  }, []);

  const handleComplete = useCallback((answers: Option[]) => {
    setResult(computeVibe(answers));
    setPhase('calculating');
  }, []);

  const showResult = useCallback(() => setPhase('result'), []);

  return (
    <div className="relative flex min-h-dvh flex-col">
      <Background />

      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7">
        <button
          onClick={() => setPhase('hero')}
          className="group flex cursor-pointer items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-xl bg-linear-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/30 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Sparkles className="size-4" />
          </span>
          vibecheck<span className="text-fuchsia-400">.</span>
        </button>
        <LanguageToggle />
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-14">
        {phase === 'hero' && <Hero onStart={start} />}
        {phase === 'quiz' && <Quiz key={runId} questions={questions} onComplete={handleComplete} />}
        {phase === 'calculating' && <Calculating onDone={showResult} />}
        {phase === 'result' && result && <ResultScreen result={result} onRetake={start} />}
      </main>

      <footer className="px-4 pb-6 text-center text-xs text-white/35">{t.footer}</footer>
    </div>
  );
}
