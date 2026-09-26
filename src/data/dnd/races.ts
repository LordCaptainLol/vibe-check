import type { Race, RaceInfo } from '../../types';

export const RACES: Record<Race, RaceInfo> = {
  human: {
    id: 'human',
    name: { en: 'Human', es: 'Humano' },
    emoji: '🧑',
    flavor: {
      en: "As a Human, you adapt to anything, you're full of ambition, and you're weirdly good at everything for such a short lifespan.",
      es: 'Como Humano, te adaptas a todo, te sobra ambición y se te da bien casi todo para lo poco que vives.',
    },
  },
  elf: {
    id: 'elf',
    name: { en: 'Elf', es: 'Elfo' },
    emoji: '🧝',
    flavor: {
      en: "Your Elf side explains why you've been 'about to start' that project for 150 years.",
      es: "Tu lado Elfo explica que lleves 150 años 'a punto de empezar' ese proyecto.",
    },
  },
  dwarf: {
    id: 'dwarf',
    name: { en: 'Dwarf', es: 'Enano' },
    emoji: '⛏️',
    flavor: {
      en: 'Being a Dwarf, you keep grudges like heirlooms and friendships like mountains.',
      es: 'Como Enano, guardas rencores como reliquias y amistades como montañas.',
    },
  },
  halfling: {
    id: 'halfling',
    name: { en: 'Halfling', es: 'Mediano' },
    emoji: '🥧',
    flavor: {
      en: "As a Halfling, you're small, lucky, and never more than an hour away from a meal.",
      es: 'Como Mediano, tienes poca estatura, mucha suerte y nunca estás a más de una hora de una comida.',
    },
  },
  gnome: {
    id: 'gnome',
    name: { en: 'Gnome', es: 'Gnomo' },
    emoji: '🔧',
    flavor: {
      en: 'Your Gnome brain has 40 inventions going at once, and two of them are on fire.',
      es: 'Tu cerebro de Gnomo tiene 40 inventos en marcha a la vez, y dos están en llamas.',
    },
  },
  orc: {
    id: 'orc',
    name: { en: 'Orc', es: 'Orco' },
    emoji: '🐗',
    flavor: {
      en: 'As an Orc, your endurance is legendary and your hugs count as a contact sport.',
      es: 'Como Orco, tu resistencia es legendaria y tus abrazos cuentan como deporte de contacto.',
    },
  },
  goliath: {
    id: 'goliath',
    name: { en: 'Goliath', es: 'Goliat' },
    emoji: '🏔️',
    flavor: {
      en: "Being a Goliath, you're built like a mountain and competitive about literally everything.",
      es: 'Como Goliat, tienes la complexión de una montaña y compites literalmente por todo.',
    },
  },
  aasimar: {
    id: 'aasimar',
    name: { en: 'Aasimar', es: 'Aasimar' },
    emoji: '😇',
    flavor: {
      en: 'Your Aasimar glow makes strangers trust you instantly, and you glow even brighter when annoyed.',
      es: 'Tu brillo de Aasimar hace que desconocidos confíen en ti al instante, y brillas todavía más cuando algo te molesta.',
    },
  },
  tiefling: {
    id: 'tiefling',
    name: { en: 'Tiefling', es: 'Tiefling' },
    emoji: '😈',
    flavor: {
      en: 'As a Tiefling, your horns are fabulous and your bad reputation is completely undeserved (mostly).',
      es: 'Como Tiefling, tus cuernos son fabulosos y tu mala fama es totalmente inmerecida (casi siempre).',
    },
  },
  dragonborn: {
    id: 'dragonborn',
    name: { en: 'Dragonborn', es: 'Dracónido' },
    emoji: '🐲',
    flavor: {
      en: 'Your Dragonborn heritage means you can literally breathe fire when someone disagrees with you.',
      es: 'Tu herencia Dracónida significa que puedes escupir fuego, literalmente, cuando alguien te lleva la contraria.',
    },
  },
};

export const RACE_IDS = Object.keys(RACES) as Race[];
