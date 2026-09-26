import type { Localized, Trait } from '../types';

export const TRAIT_ORDER: Trait[] = ['chaos', 'brain', 'night', 'heart', 'drive'];

export const TRAIT_META: Record<Trait, { label: Localized; bar: string }> = {
  chaos: { label: { en: 'Chaotic Good', es: 'Caótico Bueno' }, bar: 'from-fuchsia-500 to-orange-400' },
  brain: { label: { en: 'Overthinking', es: 'Sobrepensar' }, bar: 'from-indigo-400 to-cyan-300' },
  night: { label: { en: 'Nocturnal Energy', es: 'Energía Nocturna' }, bar: 'from-violet-500 to-blue-400' },
  heart: { label: { en: 'Vibe Intuition', es: 'Intuición de Vibras' }, bar: 'from-rose-400 to-amber-300' },
  drive: { label: { en: 'Unhinged Ambition', es: 'Ambición Desatada' }, bar: 'from-emerald-400 to-lime-300' },
};
