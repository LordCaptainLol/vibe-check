import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { UI, type UiStrings } from './strings';
import type { Lang, Localized } from '../types';

const STORAGE_KEY = 'vibecheck.lang';

function detectLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) — fall through.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** UI strings for the current language. */
  t: UiStrings;
  /** Picks the current language from a localized content value. */
  l: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Non-critical: the choice just won't persist.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = UI[lang].docTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', UI[lang].docDescription);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: UI[lang], l: (v) => v[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
