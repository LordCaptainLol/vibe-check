import { TRAIT_META } from '../data/traits';
import { UI } from '../i18n/strings';
import type { Lang, VibeResult } from '../types';

export function buildShareText({ archetype, stats }: VibeResult, lang: Lang): string {
  const t = UI[lang];
  const statLine = stats.map((s) => `${TRAIT_META[s.trait].label[lang]}: ${s.value}%`).join(' · ');
  return [
    t.shareHeadline(archetype.emoji, archetype.title[lang]),
    `"${archetype.tagline[lang]}"`,
    statLine,
    '',
    t.shareCta,
  ].join('\n');
}

function shareUrl(): string {
  return window.location.origin + window.location.pathname;
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for non-secure contexts / older browsers.
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand('copy');
    el.remove();
    return ok;
  }
}

export function copyResult(result: VibeResult, lang: Lang): Promise<boolean> {
  return copyText(`${buildShareText(result, lang)} ${shareUrl()}`);
}

export type ShareOutcome = 'shared' | 'copied' | 'cancelled' | 'failed';

/** Uses the native share sheet when available (mobile), otherwise copies to clipboard. */
export async function shareResult(result: VibeResult, lang: Lang): Promise<ShareOutcome> {
  if (navigator.share) {
    try {
      await navigator.share({
        title: UI[lang].shareTitle(result.archetype.title[lang]),
        text: buildShareText(result, lang),
        url: shareUrl(),
      });
      return 'shared';
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return 'cancelled';
    }
  }
  return (await copyResult(result, lang)) ? 'copied' : 'failed';
}
