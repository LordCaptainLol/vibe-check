import { ARCHETYPES } from '../data/archetypes';
import { TRAIT_ORDER } from '../data/traits';
import { hash, shortId } from './random';
import type { Archetype, Option, Trait, TraitWeights, VibeResult } from '../types';

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

export function scoreAnswers(answers: Option<TraitWeights>[]): Record<Trait, number> {
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

export function computeVibe(answers: Option<TraitWeights>[]): VibeResult {
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
    mode: 'vibe',
    archetype: matchArchetype(scores),
    stats,
    vibeId: shortId(seed),
  };
}
