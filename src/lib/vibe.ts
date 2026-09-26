import { ARCHETYPES } from '../data/archetypes';
import { QUESTION_POOL } from '../data/questions';
import { TRAIT_ORDER } from '../data/traits';
import type { Archetype, Option, Question, Trait, TraitWeights, VibeResult } from '../types';

/** FNV-1a — tiny, stable string hash so the same answers always give the same card. */
function hash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function toVector(weights: TraitWeights): number[] {
  return TRAIT_ORDER.map((t) => weights[t] ?? 0);
}

function cosine(a: number[], b: number[]): number {
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return magA && magB ? dot / Math.sqrt(magA * magB) : 0;
}

export function pickQuestions(count: number, pool: Question[] = QUESTION_POOL): Question[] {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export function scoreAnswers(answers: Option[]): Record<Trait, number> {
  const scores = Object.fromEntries(TRAIT_ORDER.map((t) => [t, 0])) as Record<Trait, number>;
  for (const answer of answers) {
    for (const trait of TRAIT_ORDER) scores[trait] += answer.weights[trait] ?? 0;
  }
  return scores;
}

export function matchArchetype(scores: Record<Trait, number>): Archetype {
  const user = toVector(scores);
  let best = ARCHETYPES[0];
  let bestScore = -Infinity;
  for (const archetype of ARCHETYPES) {
    const similarity = cosine(user, toVector(archetype.vector));
    if (similarity > bestScore) {
      best = archetype;
      bestScore = similarity;
    }
  }
  return best;
}

export function computeVibe(answers: Option[]): VibeResult {
  const scores = scoreAnswers(answers);
  const seed = hash(answers.map((a) => a.id).join('|'));

  const ranked = [...TRAIT_ORDER].sort((a, b) => scores[b] - scores[a]);
  const top = scores[ranked[0]] || 1;

  const stats = ranked.slice(0, 3).map((trait, i) => {
    const jitter = ((seed >> (i * 5)) & 7) - 3; // -3..+4, keeps numbers from looking too round
    const value = Math.round(58 + (scores[trait] / top) * 38 + jitter);
    return { trait, value: Math.min(99, Math.max(41, value)) };
  });

  return {
    archetype: matchArchetype(scores),
    stats,
    vibeId: seed.toString(36).toUpperCase().padStart(5, '0').slice(-5),
  };
}
