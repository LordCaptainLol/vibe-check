import type { Ability, Localized } from '../../types';

export const ABILITY_ORDER: Ability[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export const ABILITY_META: Record<Ability, { short: Localized; name: Localized }> = {
  str: { short: { en: 'STR', es: 'FUE' }, name: { en: 'Strength', es: 'Fuerza' } },
  dex: { short: { en: 'DEX', es: 'DES' }, name: { en: 'Dexterity', es: 'Destreza' } },
  con: { short: { en: 'CON', es: 'CON' }, name: { en: 'Constitution', es: 'Constitución' } },
  int: { short: { en: 'INT', es: 'INT' }, name: { en: 'Intelligence', es: 'Inteligencia' } },
  wis: { short: { en: 'WIS', es: 'SAB' }, name: { en: 'Wisdom', es: 'Sabiduría' } },
  cha: { short: { en: 'CHA', es: 'CAR' }, name: { en: 'Charisma', es: 'Carisma' } },
};

/** Standard array (15, 14, 13, 12, 10, 8) with +2 / +1 applied to the top two. */
export const SCORE_ARRAY = [17, 15, 13, 12, 10, 8];

export const abilityModifier = (score: number) => Math.floor((score - 10) / 2);
