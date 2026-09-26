/** FNV-1a — tiny, stable string hash so the same answers always give the same result. */
export function hash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Returns `count` random items from `items` (Fisher–Yates, non-mutating). */
export function pickRandom<T>(items: readonly T[], count: number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

/** Short uppercase ID derived from a seed, e.g. "4K9ZQ". */
export function shortId(seed: number): string {
  return seed.toString(36).toUpperCase().padStart(5, '0').slice(-5);
}
