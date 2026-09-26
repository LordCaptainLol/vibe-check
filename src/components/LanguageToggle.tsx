import { useLang } from '../i18n/LanguageContext';
import { LANGS } from '../i18n/strings';
import { cn } from '../lib/cn';

/** Segmented EN / ES pill with a sliding highlight. */
export function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div role="group" aria-label={t.languageLabel} className="glass relative flex rounded-full p-1 text-xs font-bold">
      <span
        aria-hidden
        className={cn(
          'absolute inset-y-1 left-1 w-10 rounded-full bg-linear-to-r from-fuchsia-500 to-indigo-500 shadow-md shadow-fuchsia-500/30',
          'transition-transform duration-300 ease-[cubic-bezier(0.2,1.4,0.4,1)]',
          lang === 'es' && 'translate-x-10',
        )}
      />
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className="relative z-10 w-10 cursor-pointer rounded-full py-1.5 text-white/55 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 aria-pressed:text-white"
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
