import type { Lang } from '../types';

const en = {
  docTitle: 'Vibe Check — What do your choices say about you?',
  docDescription: '3 playful questions. 30 seconds. One suspiciously accurate Vibe Card.',
  languageLabel: 'Language',
  footer: 'Made for fun. Not a real psych test (obviously). Nothing leaves your browser.',

  heroBadge: 'The 30-second personality scan',
  heroTitleBefore: 'What do your choices say about your ',
  heroTitleHighlight: 'inner chaos',
  heroTitleAfter: '?',
  heroSubtitle:
    "3 tiny questions. Zero judgment. One suspiciously accurate Vibe Card you'll want to send to the group chat.",
  heroCta: 'Start the Vibe Check',
  heroMeta: 'Takes ~30 seconds · No sign-up · 100% unserious',

  question: 'Question',
  decoded: 'decoded',
  keyboardTipBefore: 'Pro tip: press',
  keyboardTipAfter: 'to answer at the speed of thought',

  analyzing: 'Analyzing your vibe',
  loadingSteps: [
    'Consulting the group chat…',
    'Measuring snack-to-sleep ratio…',
    'Cross-referencing your 2 AM thoughts…',
    'Calibrating chaos levels…',
    'Rendering your aura in 4K…',
  ],

  cardLabel: 'Vibe Card',
  yourVibeIs: 'Your vibe is',
  prescription: 'Your prescription: ',
  rarity: (n: number) => `Only ${n}% of vibe-checkers get this`,

  share: 'Share my vibe',
  copy: 'Copy result',
  copied: 'Copied!',
  retake: 'Retake',
  retakeHint: 'Different questions every time — see if your vibe holds up.',
  toastShareCopied: 'Result copied — paste it anywhere!',
  toastCopied: 'Copied to clipboard!',
  toastShareFailed: "Couldn't share — try copying instead",
  toastCopyFailed: "Couldn't access clipboard",

  shareTitle: (title: string) => `I'm a ${title} ✨`,
  shareHeadline: (emoji: string, title: string) => `${emoji} My vibe is: ${title}`,
  shareCta: 'Take the 30-second Vibe Check 👉',
};

export type UiStrings = typeof en;

const es: UiStrings = {
  docTitle: 'Vibe Check — ¿Qué dicen tus decisiones de ti?',
  docDescription: '3 preguntas divertidas. 30 segundos. Una Carta Vibe sospechosamente acertada.',
  languageLabel: 'Idioma',
  footer: 'Hecho por diversión. No es un test psicológico real (obviamente). Nada sale de tu navegador.',

  heroBadge: 'El escáner de personalidad de 30 segundos',
  heroTitleBefore: '¿Qué dicen tus decisiones sobre tu ',
  heroTitleHighlight: 'caos interior',
  heroTitleAfter: '?',
  heroSubtitle:
    '3 preguntas mini. Cero juicios. Una Carta Vibe sospechosamente acertada que vas a querer mandar al grupo.',
  heroCta: 'Empezar el Vibe Check',
  heroMeta: 'Unos 30 segundos · Sin registro · 100% nada serio',

  question: 'Pregunta',
  decoded: 'descifrado',
  keyboardTipBefore: 'Truco: pulsa',
  keyboardTipAfter: 'para responder a la velocidad del pensamiento',

  analyzing: 'Analizando tu vibe',
  loadingSteps: [
    'Consultando al grupo de amigos…',
    'Midiendo la proporción snack-sueño…',
    'Cruzando datos con tus pensamientos de las 2 AM…',
    'Calibrando niveles de caos…',
    'Renderizando tu aura en 4K…',
  ],

  cardLabel: 'Carta Vibe',
  yourVibeIs: 'Tu vibe es',
  prescription: 'Tu receta: ',
  rarity: (n: number) => `Solo el ${n}% obtiene este resultado`,

  share: 'Compartir mi vibe',
  copy: 'Copiar resultado',
  copied: '¡Copiado!',
  retake: 'Repetir',
  retakeHint: 'Preguntas distintas cada vez: comprueba si tu vibe se mantiene.',
  toastShareCopied: 'Resultado copiado: ¡pégalo donde quieras!',
  toastCopied: '¡Copiado al portapapeles!',
  toastShareFailed: 'No se pudo compartir; prueba a copiarlo',
  toastCopyFailed: 'No se pudo acceder al portapapeles',

  shareTitle: (title: string) => `Mi vibe: ${title} ✨`,
  shareHeadline: (emoji: string, title: string) => `${emoji} Mi vibe es: ${title}`,
  shareCta: 'Haz el Vibe Check de 30 segundos 👉',
};

export const UI: Record<Lang, UiStrings> = { en, es };

export const LANGS: Lang[] = ['en', 'es'];
