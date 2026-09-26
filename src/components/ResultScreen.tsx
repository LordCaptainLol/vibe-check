import { useEffect, useRef, useState } from 'react';
import { Check, Copy, RotateCcw, Share2 } from 'lucide-react';
import { Button } from './Button';
import { Toast } from './Toast';
import { VibeCard } from './VibeCard';
import { useLang } from '../i18n/LanguageContext';
import { copyResult, shareResult } from '../lib/share';
import { CharacterCard } from './dnd/CharacterCard';
import type { GameResult } from '../types';

interface ResultScreenProps {
  result: GameResult;
  onRetake: () => void;
}

export function ResultScreen({ result, onRetake }: ResultScreenProps) {
  const { lang, t } = useLang();
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const flash = (message: string) => {
    setToast((prev) => ({ id: (prev?.id ?? 0) + 1, message }));
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setToast(null);
      setCopied(false);
    }, 2200);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleShare = async () => {
    const outcome = await shareResult(result, lang);
    if (outcome === 'copied') {
      setCopied(true);
      flash(t.toastShareCopied);
    } else if (outcome === 'failed') {
      flash(t.toastShareFailed);
    }
  };

  const handleCopy = async () => {
    const ok = await copyResult(result, lang);
    setCopied(ok);
    flash(ok ? t.toastCopied : t.toastCopyFailed);
  };

  return (
    <section className="w-full">
      {result.mode === 'vibe' ? <VibeCard result={result} /> : <CharacterCard result={result} />}

      <div className="mt-8 grid animate-slide-up grid-cols-2 gap-3" style={{ animationDelay: '1.3s' }}>
        <Button onClick={handleShare} className="col-span-2">
          <Share2 className="size-5 transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-110" />
          {result.mode === 'vibe' ? t.share : t.dndShare}
        </Button>
        <Button variant="secondary" onClick={handleCopy}>
          {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
          {copied ? t.copied : t.copy}
        </Button>
        <Button variant="secondary" onClick={onRetake}>
          <RotateCcw className="size-4 transition-transform duration-500 group-hover:-rotate-180" />
          {t.retake}
        </Button>
      </div>

      <p className="mt-5 animate-fade-in text-center text-xs text-white/40" style={{ animationDelay: '1.6s' }}>
        {result.mode === 'vibe' ? t.retakeHint : t.dndRetakeHint}
      </p>

      {toast && <Toast key={toast.id} message={toast.message} />}
    </section>
  );
}
