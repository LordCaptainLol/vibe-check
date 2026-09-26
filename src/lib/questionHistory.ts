import { pickRandom } from './random';
import type { Mode, Question } from '../types';

/**
 * Remembers which questions a player has already seen (per mode) so replays
 * serve fresh ones first. Once the whole pool has been seen, a new cycle
 * starts, still avoiding the questions from the immediately previous run.
 *
 * Stored in localStorage; if that's unavailable (private mode, blocked
 * storage) it falls back to memory, so it still works for the current visit.
 */

interface History {
  /** IDs seen in the current cycle. */
  seen: string[];
  /** IDs from the most recent run. */
  last: string[];
}

const storageKey = (mode: Mode) => `vibecheck.history.${mode}`;
const memory: Partial<Record<Mode, History>> = {};

function load(mode: Mode): History {
  try {
    const raw = localStorage.getItem(storageKey(mode));
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<History>;
      if (Array.isArray(parsed.seen) && Array.isArray(parsed.last)) return { seen: parsed.seen, last: parsed.last };
    }
  } catch {
    // Unavailable or corrupt storage: fall through to memory.
  }
  return memory[mode] ?? { seen: [], last: [] };
}

function save(mode: Mode, history: History): void {
  memory[mode] = history;
  try {
    localStorage.setItem(storageKey(mode), JSON.stringify(history));
  } catch {
    // Non-critical: memory copy still covers this visit.
  }
}

export function pickFreshQuestions<W>(mode: Mode, pool: Question<W>[], count: number): Question<W>[] {
  const poolIds = new Set(pool.map((q) => q.id));
  const history = load(mode);
  // Ignore IDs of questions that no longer exist in the pool.
  const seen = new Set(history.seen.filter((id) => poolIds.has(id)));
  const last = new Set(history.last);

  // Never serve a question from the previous run, even one that closed out the last cycle.
  const fresh = pool.filter((q) => !seen.has(q.id) && !last.has(q.id));
  let picked: Question<W>[];
  let nextSeen: string[];

  if (fresh.length >= count) {
    picked = pickRandom(fresh, count);
    nextSeen = [...seen, ...picked.map((q) => q.id)];
  } else {
    // Cycle finished: use what's left, then top up with already-seen questions,
    // preferring ones that weren't in the previous run.
    const needed = count - fresh.length;
    const reused = pool.filter((q) => seen.has(q.id));
    const notLast = reused.filter((q) => !last.has(q.id));
    const topUp =
      notLast.length >= needed
        ? pickRandom(notLast, needed)
        : [...notLast, ...pickRandom(reused.filter((q) => last.has(q.id)), needed - notLast.length)];
    picked = pickRandom([...fresh, ...topUp], count);
    // The top-up questions open the new cycle.
    nextSeen = topUp.map((q) => q.id);
  }

  save(mode, { seen: nextSeen, last: picked.map((q) => q.id) });
  return picked;
}
