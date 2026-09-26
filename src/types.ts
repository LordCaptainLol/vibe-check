import type { LucideIcon } from 'lucide-react';

export type Lang = 'en' | 'es';

/** A string available in every supported language. */
export type Localized = Record<Lang, string>;

export type Mode = 'vibe' | 'dnd';

export type Phase = 'hero' | 'quiz' | 'calculating' | 'result';

export interface Option<W> {
  id: string;
  emoji: string;
  label: Localized;
  weights: W;
}

export interface Question<W> {
  id: string;
  kicker: Localized;
  prompt: Localized;
  options: Option<W>[];
}

/* ---------- Vibe Check mode ---------- */

export type Trait = 'chaos' | 'brain' | 'night' | 'heart' | 'drive';

export type TraitWeights = Partial<Record<Trait, number>>;

export interface Archetype {
  id: string;
  title: Localized;
  emoji: string;
  icon: LucideIcon;
  tagline: Localized;
  summary: Localized;
  tip: Localized;
  /** Playful "only X% of people get this" number. */
  rarity: number;
  /** Full Tailwind gradient stops, e.g. "from-pink-500 via-fuchsia-500 to-indigo-500". */
  gradient: string;
  vector: TraitWeights;
}

export interface VibeStat {
  trait: Trait;
  value: number;
}

export interface VibeResult {
  mode: 'vibe';
  archetype: Archetype;
  stats: VibeStat[];
  vibeId: string;
}

/* ---------- D&D mode ---------- */

export type Race =
  | 'human'
  | 'elf'
  | 'dwarf'
  | 'halfling'
  | 'gnome'
  | 'orc'
  | 'goliath'
  | 'aasimar'
  | 'tiefling'
  | 'dragonborn';

export type DndClass =
  | 'barbarian'
  | 'bard'
  | 'cleric'
  | 'druid'
  | 'fighter'
  | 'monk'
  | 'paladin'
  | 'ranger'
  | 'rogue'
  | 'sorcerer'
  | 'warlock'
  | 'wizard';

export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export interface DndWeights {
  race: Partial<Record<Race, number>>;
  classes: Partial<Record<DndClass, number>>;
}

export interface RaceInfo {
  id: Race;
  name: Localized;
  emoji: string;
  /** One sentence describing what this race says about you. */
  flavor: Localized;
}

export interface ClassInfo {
  id: DndClass;
  name: Localized;
  emoji: string;
  icon: LucideIcon;
  gradient: string;
  tagline: Localized;
  summary: Localized;
  tip: Localized;
  /** Primary and secondary ability. */
  abilities: [Ability, Ability];
}

export interface AbilityScore {
  ability: Ability;
  score: number;
  modifier: number;
}

export interface DndResult {
  mode: 'dnd';
  race: RaceInfo;
  cls: ClassInfo;
  /** In canonical STR → CHA order. */
  abilities: AbilityScore[];
  /** A raw d20 roll, 1–20. */
  initiative: number;
  sheetId: string;
}

export type GameResult = VibeResult | DndResult;
