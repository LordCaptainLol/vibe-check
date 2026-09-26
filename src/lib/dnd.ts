import { ABILITY_ORDER, SCORE_ARRAY, abilityModifier } from '../data/dnd/abilities';
import { CLASSES, CLASS_IDS } from '../data/dnd/classes';
import { RACES, RACE_IDS } from '../data/dnd/races';
import { hash, shortId } from './random';
import type { Ability, DndResult, DndWeights, Option } from '../types';

function tally<K extends string>(keys: readonly K[], votes: Partial<Record<K, number>>[]): Record<K, number> {
  const totals = Object.fromEntries(keys.map((k) => [k, 0])) as Record<K, number>;
  for (const vote of votes) {
    for (const key of keys) totals[key] += vote[key] ?? 0;
  }
  return totals;
}

/** Sorts keys by score, highest first; ties are broken by a stable per-answer-set coin flip. */
function rank<K extends string>(keys: readonly K[], totals: Record<K, number>, seed: number): K[] {
  const tieBreak = (k: K) => hash(`${seed}:${k}`);
  return [...keys].sort((a, b) => totals[b] - totals[a] || tieBreak(b) - tieBreak(a));
}

export function computeDnd(answers: Option<DndWeights>[]): DndResult {
  const seed = hash(answers.map((a) => a.id).join('|'));

  const raceTotals = tally(RACE_IDS, answers.map((a) => a.weights.race));
  const classTotals = tally(CLASS_IDS, answers.map((a) => a.weights.classes));

  const race = RACES[rank(RACE_IDS, raceTotals, seed)[0]];
  const cls = CLASSES[rank(CLASS_IDS, classTotals, seed)[0]];

  // Every class vote feeds its key abilities, so runner-up classes still shape the sheet.
  const abilityPoints = Object.fromEntries(ABILITY_ORDER.map((a) => [a, 0])) as Record<Ability, number>;
  for (const id of CLASS_IDS) {
    const [primary, secondary] = CLASSES[id].abilities;
    abilityPoints[primary] += classTotals[id] * 2;
    abilityPoints[secondary] += classTotals[id];
  }
  // The winning class always gets its two key abilities as the top scores.
  abilityPoints[cls.abilities[0]] += 1000;
  abilityPoints[cls.abilities[1]] += 500;

  const ranked = rank(ABILITY_ORDER, abilityPoints, seed);
  const abilities = ABILITY_ORDER.map((ability) => {
    const score = SCORE_ARRAY[ranked.indexOf(ability)];
    return { ability, score, modifier: abilityModifier(score) };
  });

  return {
    mode: 'dnd',
    race,
    cls,
    abilities,
    initiative: (seed % 20) + 1,
    sheetId: shortId(seed),
  };
}
