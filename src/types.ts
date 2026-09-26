import type { LucideIcon } from 'lucide-react';

export type Lang = 'en' | 'es';

/** A string available in every supported language. */
export type Localized = Record<Lang, string>;

export type Trait = 'chaos' | 'brain' | 'night' | 'heart' | 'drive';

export type TraitWeights = Partial<Record<Trait, number>>;

export interface Option {
  id: string;
  emoji: string;
  label: Localized;
  weights: TraitWeights;
}

export interface Question {
  id: string;
  kicker: Localized;
  prompt: Localized;
  options: Option[];
}

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
  archetype: Archetype;
  stats: VibeStat[];
  vibeId: string;
}

export type Phase = 'hero' | 'quiz' | 'calculating' | 'result';
