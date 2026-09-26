import {
  Axe,
  Eye,
  Flame,
  Leaf,
  Music,
  Shield,
  Sun,
  Swords,
  Target,
  VenetianMask,
  WandSparkles,
  Wind,
} from 'lucide-react';
import type { ClassInfo, DndClass } from '../../types';

export const CLASSES: Record<DndClass, ClassInfo> = {
  barbarian: {
    id: 'barbarian',
    name: { en: 'Barbarian', es: 'Bárbaro' },
    emoji: '🪓',
    icon: Axe,
    gradient: 'from-red-600 via-orange-500 to-amber-400',
    abilities: ['str', 'con'],
    tagline: { en: 'Solves problems at volume 11.', es: 'Resuelve los problemas a volumen 11.' },
    summary: {
      en: 'Your plan is simple: find the problem, then hit it until it stops being a problem.',
      es: 'Tu plan es sencillo: encontrar el problema y golpearlo hasta que deje de serlo.',
    },
    tip: {
      en: 'Count to three before charging. Then charge anyway, but with style.',
      es: 'Cuenta hasta tres antes de cargar. Luego carga igual, pero con estilo.',
    },
  },
  bard: {
    id: 'bard',
    name: { en: 'Bard', es: 'Bardo' },
    emoji: '🎻',
    icon: Music,
    gradient: 'from-pink-500 via-fuchsia-500 to-violet-500',
    abilities: ['cha', 'dex'],
    tagline: {
      en: 'Has a song for every occasion, and a few for no occasion at all.',
      es: 'Tiene una canción para cada ocasión y algunas para ninguna.',
    },
    summary: {
      en: 'You talk your way into trouble and sing your way back out, usually with new friends.',
      es: 'Te metes en líos hablando y sales cantando, normalmente con amistades nuevas.',
    },
    tip: {
      en: 'Write the ballad of your week. Exaggerate at least one dragon.',
      es: 'Escribe la balada de tu semana. Exagera al menos un dragón.',
    },
  },
  cleric: {
    id: 'cleric',
    name: { en: 'Cleric', es: 'Clérigo' },
    emoji: '🙏',
    icon: Sun,
    gradient: 'from-amber-300 via-yellow-200 to-sky-300',
    abilities: ['wis', 'con'],
    tagline: { en: 'Heals the party and judges their life choices.', es: 'Cura al grupo y juzga sus decisiones de vida.' },
    summary: {
      en: "You're the reason everyone survives the dungeon, and you will absolutely remind them.",
      es: 'Eres la razón por la que todo el grupo sale vivo de la mazmorra, y se lo vas a recordar.',
    },
    tip: {
      en: 'Heal yourself first this week. Even clerics have hit points.',
      es: 'Esta semana cúrate primero. Hasta los clérigos tienen puntos de golpe.',
    },
  },
  druid: {
    id: 'druid',
    name: { en: 'Druid', es: 'Druida' },
    emoji: '🌿',
    icon: Leaf,
    gradient: 'from-emerald-500 via-green-400 to-lime-300',
    abilities: ['wis', 'con'],
    tagline: { en: 'Would honestly rather be a bear right now.', es: 'Sinceramente, ahora mismo preferiría ser un oso.' },
    summary: {
      en: 'You trust trees more than people, and the trees have never let you down.',
      es: 'Confías más en los árboles que en la gente, y los árboles nunca te han fallado.',
    },
    tip: { en: "Touch grass. Literally — it's a class feature.", es: 'Toca césped. Literalmente: es un rasgo de clase.' },
  },
  fighter: {
    id: 'fighter',
    name: { en: 'Fighter', es: 'Guerrero' },
    emoji: '⚔️',
    icon: Swords,
    gradient: 'from-slate-400 via-zinc-300 to-sky-400',
    abilities: ['str', 'con'],
    tagline: {
      en: 'Has a sword for Mondays and a spare for emergencies.',
      es: 'Tiene una espada para los lunes y otra de repuesto para emergencias.',
    },
    summary: {
      en: 'No magic, no tricks, just relentless consistency — and it works every single time.',
      es: 'Sin magia ni trucos, solo constancia implacable, y funciona siempre.',
    },
    tip: {
      en: 'Take a short rest. Your Second Wind recharges faster than you think.',
      es: 'Haz un descanso corto. Tu Tomar Aliento se recarga antes de lo que crees.',
    },
  },
  monk: {
    id: 'monk',
    name: { en: 'Monk', es: 'Monje' },
    emoji: '🥋',
    icon: Wind,
    gradient: 'from-orange-400 via-amber-300 to-teal-300',
    abilities: ['dex', 'wis'],
    tagline: {
      en: 'Has achieved inner peace and outer punching.',
      es: 'Ha alcanzado la paz interior y el puñetazo exterior.',
    },
    summary: {
      en: 'You move like water, eat like a sage, and can still outrun the entire party.',
      es: 'Te mueves como el agua, comes como un sabio y aun así dejas atrás a todo el grupo.',
    },
    tip: {
      en: 'Five minutes of silence a day. Stunning Strike optional.',
      es: 'Cinco minutos de silencio al día. El Golpe Aturdidor es opcional.',
    },
  },
  paladin: {
    id: 'paladin',
    name: { en: 'Paladin', es: 'Paladín' },
    emoji: '🛡️',
    icon: Shield,
    gradient: 'from-yellow-400 via-amber-300 to-sky-400',
    abilities: ['str', 'cha'],
    tagline: { en: 'Swore an oath and takes it VERY seriously.', es: 'Hizo un juramento y se lo toma MUY en serio.' },
    summary: {
      en: 'You walk into every room like the hero of an epic ballad, and somehow it suits you.',
      es: 'Entras en cada sala como protagonista de una balada épica, y de algún modo te queda bien.',
    },
    tip: {
      en: 'Not every hill deserves a Divine Smite. Pick one this week.',
      es: 'No todas las batallas merecen un Castigo Divino. Elige una esta semana.',
    },
  },
  ranger: {
    id: 'ranger',
    name: { en: 'Ranger', es: 'Explorador' },
    emoji: '🏹',
    icon: Target,
    gradient: 'from-green-600 via-emerald-500 to-amber-300',
    abilities: ['dex', 'wis'],
    tagline: {
      en: "Knows 14 kinds of moss and zero people's birthdays.",
      es: 'Conoce 14 tipos de musgo y ningún cumpleaños.',
    },
    summary: {
      en: "You'd rather track a beast for three days than sit through one group dinner.",
      es: 'Prefieres rastrear a una bestia durante tres días antes que aguantar una cena de grupo.',
    },
    tip: {
      en: 'Send one message to someone you miss. Consider it tracking.',
      es: 'Manda un mensaje a alguien que echas de menos. Considéralo rastreo.',
    },
  },
  rogue: {
    id: 'rogue',
    name: { en: 'Rogue', es: 'Pícaro' },
    emoji: '🗡️',
    icon: VenetianMask,
    gradient: 'from-slate-500 via-violet-600 to-fuchsia-500',
    abilities: ['dex', 'int'],
    tagline: { en: 'Checked the room for traps. And for snacks.', es: 'Buscó trampas en la sala. Y snacks.' },
    summary: {
      en: "You always have a plan, a backup plan, and something in your pocket that isn't yours.",
      es: 'Siempre tienes un plan, un plan B y algo en el bolsillo que no es tuyo.',
    },
    tip: {
      en: "Trust one person with your real plan. Just one. It's a start.",
      es: 'Confía tu plan real a una persona. Solo una. Es un comienzo.',
    },
  },
  sorcerer: {
    id: 'sorcerer',
    name: { en: 'Sorcerer', es: 'Hechicero' },
    emoji: '🔥',
    icon: Flame,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    abilities: ['cha', 'con'],
    tagline: { en: 'Magic by birthright, control by accident.', es: 'Magia de nacimiento, control por accidente.' },
    summary: {
      en: 'Power just leaks out of you, usually at the most dramatic moment possible.',
      es: 'El poder se te escapa solo, normalmente en el momento más dramático posible.',
    },
    tip: {
      en: 'Channel it: pick one creative outlet and let the sparks fly there.',
      es: 'Canalízalo: elige una vía creativa y deja que las chispas salten ahí.',
    },
  },
  warlock: {
    id: 'warlock',
    name: { en: 'Warlock', es: 'Brujo' },
    emoji: '👁️',
    icon: Eye,
    gradient: 'from-violet-700 via-purple-500 to-emerald-400',
    abilities: ['cha', 'con'],
    tagline: {
      en: 'Read the terms and conditions. Signed anyway.',
      es: 'Leyó los términos y condiciones. Firmó igual.',
    },
    summary: {
      en: 'Your patron is mysterious, your aesthetic is impeccable, and your short rests are suspicious.',
      es: 'Tu patrón es misterioso, tu estética impecable y tus descansos cortos, sospechosos.',
    },
    tip: {
      en: 'Review your pacts this week — gym, streaming, and otherwise.',
      es: 'Revisa tus pactos esta semana: gimnasio, streaming y demás.',
    },
  },
  wizard: {
    id: 'wizard',
    name: { en: 'Wizard', es: 'Mago' },
    emoji: '🧙',
    icon: WandSparkles,
    gradient: 'from-blue-600 via-indigo-500 to-cyan-400',
    abilities: ['int', 'dex'],
    tagline: { en: "Has a spell for that. It's on page 412.", es: 'Tiene un conjuro para eso. Está en la página 412.' },
    summary: {
      en: 'You prepared for every possible scenario except the one that actually happened.',
      es: 'Te preparaste para todos los escenarios posibles excepto el que ocurrió de verdad.',
    },
    tip: {
      en: 'Close the spellbook tonight. Even Fireball needs a long rest.',
      es: 'Cierra el libro de conjuros esta noche. Hasta Bola de Fuego necesita un descanso largo.',
    },
  },
};

export const CLASS_IDS = Object.keys(CLASSES) as DndClass[];
