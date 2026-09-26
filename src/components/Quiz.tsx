import { useCallback, useEffect, useRef, useState } from 'react';
import { OptionButton, type OptionState } from './OptionButton';
import { ProgressBar } from './ProgressBar';
import { useLang } from '../i18n/LanguageContext';
import type { Option, Question } from '../types';

const ADVANCE_DELAY_MS = 520;

interface QuizProps {
  questions: Question[];
  onComplete: (answers: Option[]) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const { t, l } = useLang();
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const answers = useRef<Option[]>([]);
  const timer = useRef<number | undefined>(undefined);

  const question = questions[index];

  const select = useCallback(
    (option: Option) => {
      if (selectedId) return;
      setSelectedId(option.id);
      answers.current = [...answers.current, option];
      navigator.vibrate?.(12);

      timer.current = window.setTimeout(() => {
        if (index + 1 >= questions.length) {
          onComplete(answers.current);
        } else {
          setIndex(index + 1);
          setSelectedId(null);
        }
      }, ADVANCE_DELAY_MS);
    },
    [selectedId, index, questions.length, onComplete],
  );

  // Keyboard shortcuts: 1–4 pick an answer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number.parseInt(e.key, 10);
      const option = question?.options[n - 1];
      if (option) select(option);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [question, select]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (!question) return null;

  const stateFor = (option: Option): OptionState =>
    selectedId === null ? 'idle' : selectedId === option.id ? 'selected' : 'dimmed';

  return (
    <section className="w-full">
      <ProgressBar current={index} total={questions.length} />

      <div key={question.id} className="mt-10">
        <p className="animate-slide-up text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300/90">
          {l(question.kicker)}
        </p>
        <h2
          className="mt-2 animate-slide-up font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl"
          style={{ animationDelay: '50ms' }}
        >
          {l(question.prompt)}
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {question.options.map((option, i) => (
            <OptionButton
              key={option.id}
              option={option}
              index={i}
              state={stateFor(option)}
              onSelect={select}
            />
          ))}
        </div>

        <p className="mt-6 hidden text-center text-xs text-white/35 sm:block">
          {t.keyboardTipBefore} <kbd className="font-sans text-white/60">1</kbd>–
          <kbd className="font-sans text-white/60">4</kbd> {t.keyboardTipAfter}
        </p>
      </div>
    </section>
  );
}
