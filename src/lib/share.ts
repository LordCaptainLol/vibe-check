import { ABILITY_META } from '../data/dnd/abilities';
import { TRAIT_META } from '../data/traits';
import { UI } from '../i18n/strings';
import type { GameResult, Lang } from '../types';

export function shareTitle(result: GameResult, lang: Lang): string {
  const t = UI[lang];
  return result.mode === 'vibe'
    ? t.shareTitle(result.archetype.title[lang])
    : t.dndShareTitle(t.dndTitle(result.race.name[lang], result.cls.name[lang]));
}

export function buildShareText(result: GameResult, lang: Lang): string {
  const t = UI[lang];

  if (result.mode === 'vibe') {
    const { archetype, stats } = result;
    const statLine = stats.map((s) => `${TRAIT_META[s.trait].label[lang]}: ${s.value}%`).join(' · ');
    return [
      t.shareHeadline(archetype.emoji, archetype.title[lang]),
      `"${archetype.tagline[lang]}"`,
      statLine,
      '',
      t.shareCta,
    ].join('\n');
  }

  const { race, cls, abilities } = result;
  const statLine = abilities.map((a) => `${ABILITY_META[a.ability].short[lang]} ${a.score}`).join(' · ');
  return [
    t.dndShareHeadline(`${race.emoji}${cls.emoji}`, t.dndTitle(race.name[lang], cls.name[lang])),
    `"${cls.tagline[lang]}"`,
    statLine,
    '',
    t.dndShareCta,
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

export function copyResult(result: GameResult, lang: Lang): Promise<boolean> {
  return copyText(`${buildShareText(result, lang)} ${shareUrl()}`);
}

export type ShareOutcome = 'shared' | 'copied' | 'cancelled' | 'failed';

/** Uses the native share sheet when available (mobile), otherwise copies to clipboard. */
export async function shareResult(result: GameResult, lang: Lang): Promise<ShareOutcome> {
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle(result, lang),
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
