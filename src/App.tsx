import { useCallback, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { Calculating } from './components/Calculating';
import { ResultScreen } from './components/ResultScreen';
import { LanguageToggle } from './components/LanguageToggle';
import { QUESTION_POOL } from './data/questions';
import { DND_QUESTION_POOL } from './data/dnd/questions';
import { useLang } from './i18n/LanguageContext';
import { computeDnd } from './lib/dnd';
import { pickFreshQuestions } from './lib/questionHistory';
import { computeVibe } from './lib/vibe';
import type { DndWeights, GameResult, Mode, Phase, Question, TraitWeights } from './types';

const QUESTION_COUNT: Record<Mode, number> = { vibe: 3, dnd: 5 };

type Run =
  | { mode: 'vibe'; questions: Question<TraitWeights>[] }
  | { mode: 'dnd'; questions: Question<DndWeights>[] };

function createRun(mode: Mode): Run {
  return mode === 'vibe'
    ? { mode, questions: pickFreshQuestions(mode, QUESTION_POOL, QUESTION_COUNT.vibe) }
    : { mode, questions: pickFreshQuestions(mode, DND_QUESTION_POOL, QUESTION_COUNT.dnd) };
}

export default function App() {
  const { t } = useLang();
  const [mode, setMode] = useState<Mode>('vibe');
  const [phase, setPhase] = useState<Phase>('hero');
  const [run, setRun] = useState<Run | null>(null);
  const [result, setResult] = useState<GameResult | null>(null);
  const [runId, setRunId] = useState(0);

  const start = useCallback(() => {
    setRun(createRun(mode));
    setResult(null);
    setRunId((id) => id + 1);
    setPhase('quiz');
  }, [mode]);

  const finish = useCallback((next: GameResult) => {
    setResult(next);
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
        {phase === 'hero' && <Hero mode={mode} onModeChange={setMode} onStart={start} />}
        {phase === 'quiz' &&
          run &&
          (run.mode === 'vibe' ? (
            <Quiz key={runId} questions={run.questions} onComplete={(answers) => finish(computeVibe(answers))} />
          ) : (
            <Quiz key={runId} questions={run.questions} onComplete={(answers) => finish(computeDnd(answers))} />
          ))}
        {phase === 'calculating' && run && <Calculating mode={run.mode} onDone={showResult} />}
        {phase === 'result' && result && <ResultScreen result={result} onRetake={start} />}
      </main>

      <footer className="space-y-1 px-4 pb-6 text-center text-xs text-white/35">
        <p>{t.footer}</p>
        {mode === 'dnd' && <p>{t.dndDisclaimer}</p>}
      </footer>
    </div>
  );
}
