import type { Question, TraitWeights } from '../types';

/** Question pool — each run draws a random 3 so retakes feel fresh. */
export const QUESTION_POOL: Question<TraitWeights>[] = [
  {
    id: 'two-am',
    kicker: { en: 'Be honest', es: 'Con total sinceridad' },
    prompt: { en: "It's 2 AM. What are you doing?", es: 'Son las 2 AM. ¿Qué estás haciendo?' },
    options: [
      {
        id: 'two-am-cook',
        emoji: '🍜',
        label: { en: 'Cooking a full meal for no reason', es: 'Cocinando un banquete sin motivo alguno' },
        weights: { night: 2, chaos: 1 },
      },
      {
        id: 'two-am-replay',
        emoji: '🧠',
        label: { en: 'Replaying a conversation from 2014', es: 'Repasando una conversación de 2014' },
        weights: { brain: 2, night: 1 },
      },
      {
        id: 'two-am-hustle',
        emoji: '📈',
        label: { en: 'Building a side-hustle empire', es: 'Montando un imperio de proyectos paralelos' },
        weights: { drive: 2, night: 1 },
      },
      {
        id: 'two-am-sleep',
        emoji: '😴',
        label: { en: 'Asleep, like a well-adjusted person', es: 'Durmiendo, como una persona funcional' },
        weights: { drive: 1, heart: 1 },
      },
    ],
  },
  {
    id: 'superpower',
    kicker: { en: 'No take-backs', es: 'Sin devoluciones' },
    prompt: { en: 'Pick a superpower.', es: 'Elige un superpoder.' },
    options: [
      {
        id: 'power-pause',
        emoji: '⏸️',
        label: { en: 'Pause time (mostly for naps)', es: 'Pausar el tiempo (sobre todo para siestas)' },
        weights: { night: 2, brain: 1 },
      },
      {
        id: 'power-minds',
        emoji: '🔮',
        label: { en: 'Read minds', es: 'Leer mentes' },
        weights: { heart: 2, brain: 1 },
      },
      {
        id: 'power-teleport',
        emoji: '🌀',
        label: { en: 'Teleport — but randomly', es: 'Teletransportarte… pero al azar' },
        weights: { chaos: 3 },
      },
      {
        id: 'power-money',
        emoji: '💸',
        label: { en: 'Infinite money glitch', es: 'Glitch de dinero infinito' },
        weights: { drive: 2 },
      },
    ],
  },
  {
    id: 'group-chat',
    kicker: { en: 'Social experiment', es: 'Experimento social' },
    prompt: {
      en: 'The group chat has been silent for 3 hours. You:',
      es: 'El grupo lleva 3 horas en silencio. Tú:',
    },
    options: [
      {
        id: 'chat-meme',
        emoji: '💣',
        label: { en: 'Drop a cursed meme to revive it', es: 'Mandas un meme maldito para revivirlo' },
        weights: { chaos: 2, heart: 1 },
      },
      {
        id: 'chat-mad',
        emoji: '🫣',
        label: { en: "Assume everyone's mad at you", es: 'Asumes que todo el mundo está molesto contigo' },
        weights: { brain: 3 },
      },
      {
        id: 'chat-plan',
        emoji: '📅',
        label: { en: 'Propose a plan (with a spreadsheet)', es: 'Propones un plan (con hoja de cálculo)' },
        weights: { drive: 2, brain: 1 },
      },
      {
        id: 'chat-checkin',
        emoji: '🫶',
        label: { en: 'Privately check on the quiet one', es: 'Le escribes en privado a quien está más callado' },
        weights: { heart: 3 },
      },
    ],
  },
  {
    id: 'fridge',
    kicker: { en: 'Quick peek', es: 'Un vistazo rápido' },
    prompt: { en: "What's your fridge's vibe?", es: '¿Qué vibra tiene tu nevera?' },
    options: [
      {
        id: 'fridge-condiments',
        emoji: '🧃',
        label: { en: 'Just condiments and hope', es: 'Solo salsas y esperanza' },
        weights: { chaos: 2 },
      },
      {
        id: 'fridge-prep',
        emoji: '🥗',
        label: { en: 'Meal-prepped & labeled', es: 'Comida preparada y etiquetada' },
        weights: { drive: 2, brain: 1 },
      },
      {
        id: 'fridge-eras',
        emoji: '🍕',
        label: { en: 'Leftovers from three separate eras', es: 'Sobras de tres épocas distintas' },
        weights: { night: 2, chaos: 1 },
      },
      {
        id: 'fridge-guests',
        emoji: '🍰',
        label: { en: 'Snacks for guests who never come', es: 'Snacks para visitas que nunca llegan' },
        weights: { heart: 2 },
      },
    ],
  },
  {
    id: 'dog',
    kicker: { en: 'Emergency', es: 'Emergencia' },
    prompt: {
      en: "A stranger's dog runs up to you. You:",
      es: 'El perro de un desconocido corre hacia ti. Tú:',
    },
    options: [
      {
        id: 'dog-babyvoice',
        emoji: '🐶',
        label: { en: 'Full conversation in a baby voice', es: 'Conversación completa con voz de bebé' },
        weights: { heart: 2, chaos: 1 },
      },
      {
        id: 'dog-nod',
        emoji: '🫡',
        label: { en: 'Respectful nod. Professional.', es: 'Saludo respetuoso con la cabeza. Profesional.' },
        weights: { drive: 1, brain: 1 },
      },
      {
        id: 'dog-race',
        emoji: '🏃',
        label: { en: 'Race it. Obviously.', es: 'Le echas una carrera. Obviamente.' },
        weights: { chaos: 2, drive: 1 },
      },
      {
        id: 'dog-questions',
        emoji: '📝',
        label: { en: 'Ask the owner 14 questions', es: 'Le haces 14 preguntas al dueño' },
        weights: { brain: 2, heart: 1 },
      },
    ],
  },
  {
    id: 'soundtrack',
    kicker: { en: 'Pick fast', es: 'Rápido' },
    prompt: { en: 'Your Friday night soundtrack?', es: '¿La banda sonora de tu viernes por la noche?' },
    options: [
      {
        id: 'music-lofi',
        emoji: '🎧',
        label: { en: 'Lo-fi beats to spiral to', es: 'Lo-fi para darle vueltas a todo' },
        weights: { brain: 2, night: 1 },
      },
      {
        id: 'music-loud',
        emoji: '🔊',
        label: { en: 'Something neighbor-complaint loud', es: 'Algo a volumen de queja vecinal' },
        weights: { chaos: 2, night: 1 },
      },
      {
        id: 'music-podcast',
        emoji: '🎙️',
        label: { en: 'Business podcast at 2× speed', es: 'Podcast de negocios a velocidad 2×' },
        weights: { drive: 3 },
      },
      {
        id: 'music-sad',
        emoji: '🌙',
        label: { en: 'Sad songs in a moving car', es: 'Canciones tristes en un coche en marcha' },
        weights: { night: 2, heart: 1 },
      },
    ],
  },
  {
    id: 'doors',
    kicker: { en: "Don't overthink it", es: 'No lo pienses demasiado' },
    prompt: { en: 'Pick a door.', es: 'Elige una puerta.' },
    options: [
      {
        id: 'door-forbidden',
        emoji: '🚫',
        label: { en: 'The one labeled "DO NOT OPEN"', es: 'La que dice "NO ABRIR"' },
        weights: { chaos: 3 },
      },
      {
        id: 'door-glowing',
        emoji: '🌌',
        label: { en: 'The glowing one humming at 3 AM', es: 'La que brilla y zumba a las 3 AM' },
        weights: { night: 2, chaos: 1 },
      },
      {
        id: 'door-locked',
        emoji: '🗝️',
        label: { en: "The locked one — you'll find the key", es: 'La cerrada con llave (ya encontrarás la llave)' },
        weights: { drive: 2, brain: 1 },
      },
      {
        id: 'door-why',
        emoji: '⏳',
        label: { en: 'Wait… why are there doors?', es: 'Espera… ¿por qué hay puertas?' },
        weights: { brain: 3 },
      },
    ],
  },
  {
    id: 'texting',
    kicker: { en: 'Receipts please', es: 'Pruebas, por favor' },
    prompt: { en: 'Your texting style is:', es: 'Tu estilo al escribir mensajes es:' },
    options: [
      {
        id: 'text-grammar',
        emoji: '🅰️',
        label: { en: 'Perfect grammar, zero emojis', es: 'Ortografía perfecta, cero emojis' },
        weights: { drive: 2, brain: 1 },
      },
      {
        id: 'text-burst',
        emoji: '🫠',
        label: { en: '11 texts in a row, no punctuation', es: '11 mensajes seguidos, sin puntuación' },
        weights: { chaos: 2, heart: 1 },
      },
      {
        id: 'text-late',
        emoji: '🐌',
        label: { en: 'Replies 3 days later: "haha yes"', es: 'Respondes 3 días después: "jaja sí"' },
        weights: { night: 1, chaos: 1 },
      },
      {
        id: 'text-voice',
        emoji: '💖',
        label: { en: 'Voice notes with full emotional range', es: 'Audios con todo tu rango emocional' },
        weights: { heart: 3 },
      },
    ],
  },
  {
    id: 'free-saturday',
    kicker: { en: 'Free time', es: 'Tiempo libre' },
    prompt: { en: 'Surprise free Saturday. You:', es: 'Sábado libre por sorpresa. Tú:' },
    options: [
      {
        id: 'saturday-bed',
        emoji: '🛋️',
        label: { en: 'Rot in bed, guilt-free', es: 'Te quedas en la cama sin pizca de culpa' },
        weights: { night: 2, heart: 1 },
      },
      {
        id: 'saturday-trip',
        emoji: '🗺️',
        label: { en: 'Book a random trip on the spot', es: 'Reservas un viaje al azar en el momento' },
        weights: { chaos: 3 },
      },
      {
        id: 'saturday-todo',
        emoji: '✅',
        label: { en: 'Finally clear the to-do list', es: 'Por fin vacías la lista de pendientes' },
        weights: { drive: 3 },
      },
      {
        id: 'saturday-picnic',
        emoji: '🧺',
        label: { en: 'Organize a picnic for everyone', es: 'Organizas un picnic para todo el mundo' },
        weights: { heart: 2, drive: 1 },
      },
    ],
  },
  {
    id: 'shower-thought',
    kicker: { en: 'Deep thoughts', es: 'Pensamientos profundos' },
    prompt: { en: 'Your most common shower thought:', es: 'Tu pensamiento más habitual en la ducha:' },
    options: [
      {
        id: 'shower-simulation',
        emoji: '🌍',
        label: { en: 'Are we all living in a simulation?', es: '¿Y si todo es una simulación?' },
        weights: { brain: 2, night: 1 },
      },
      {
        id: 'shower-comeback',
        emoji: '💬',
        label: { en: 'The perfect comeback — 3 days late', es: 'La respuesta perfecta… con 3 días de retraso' },
        weights: { brain: 2, heart: 1 },
      },
      {
        id: 'shower-business',
        emoji: '🚀',
        label: { en: 'A business idea worth millions', es: 'Una idea de negocio millonaria' },
        weights: { drive: 2, chaos: 1 },
      },
      {
        id: 'shower-concert',
        emoji: '🎤',
        label: { en: 'A full concert for no audience', es: 'Un concierto completo sin público' },
        weights: { chaos: 2, heart: 1 },
      },
    ],
  },
  {
    id: 'plans-cancelled',
    kicker: { en: 'Plot twist', es: 'Giro de guion' },
    prompt: {
      en: 'Your plans get cancelled last minute. You feel:',
      es: 'Te cancelan un plan en el último momento. Sientes:',
    },
    options: [
      {
        id: 'cancel-relief',
        emoji: '🥳',
        label: { en: 'Pure, unfiltered relief', es: 'Alivio puro y sin filtros' },
        weights: { night: 2, brain: 1 },
      },
      {
        id: 'cancel-reschedule',
        emoji: '📆',
        label: { en: 'Betrayed. Rescheduling immediately.', es: 'Traición. Lo reprogramas al instante.' },
        weights: { drive: 2, heart: 1 },
      },
      {
        id: 'cancel-unhinged',
        emoji: '🎲',
        label: {
          en: "Great, now I'm free to do something unhinged",
          es: 'Genial, ahora tengo vía libre para algo absurdo',
        },
        weights: { chaos: 3 },
      },
      {
        id: 'cancel-worried',
        emoji: '🥺',
        label: { en: "Worried they're okay", es: 'Te preocupa que estén bien' },
        weights: { heart: 3 },
      },
    ],
  },
  {
    id: 'spirit-animal',
    kicker: { en: 'Spirit animal', es: 'Animal espiritual' },
    prompt: { en: 'Pick your spirit animal.', es: 'Elige tu animal espiritual.' },
    options: [
      {
        id: 'animal-raccoon',
        emoji: '🦝',
        label: { en: 'Raccoon: chaotic, nocturnal, resourceful', es: 'Mapache: caótico, nocturno e ingenioso' },
        weights: { chaos: 2, night: 1 },
      },
      {
        id: 'animal-owl',
        emoji: '🦉',
        label: { en: 'Owl: silently judging everyone', es: 'Búho: juzgando a todo el mundo en silencio' },
        weights: { brain: 2, night: 1 },
      },
      {
        id: 'animal-bee',
        emoji: '🐝',
        label: { en: 'Bee: busy, productive, a little stressed', es: 'Abeja: ocupada, productiva y algo estresada' },
        weights: { drive: 3 },
      },
      {
        id: 'animal-retriever',
        emoji: '🐕',
        label: { en: 'Golden retriever: loves everyone', es: 'Golden retriever: quiere a todo el mundo' },
        weights: { heart: 3 },
      },
    ],
  },
  {
    id: 'phone-tabs',
    kicker: { en: 'Screen time', es: 'Tiempo de pantalla' },
    prompt: {
      en: 'How many tabs are open on your phone right now?',
      es: '¿Cuántas pestañas tienes abiertas en el móvil ahora mismo?',
    },
    options: [
      {
        id: 'tabs-zero',
        emoji: '🧹',
        label: { en: 'Zero. I close them as I go.', es: 'Cero. Las cierro sobre la marcha.' },
        weights: { drive: 2, brain: 1 },
      },
      {
        id: 'tabs-ten',
        emoji: '📑',
        label: { en: 'About ten, each one "important"', es: 'Unas diez, todas "importantes"' },
        weights: { brain: 2 },
      },
      {
        id: 'tabs-infinite',
        emoji: '♾️',
        label: { en: 'The counter just shows ":D" now', es: 'El contador ya solo muestra ":D"' },
        weights: { chaos: 2, night: 1 },
      },
      {
        id: 'tabs-gifts',
        emoji: '🎁',
        label: { en: 'Mostly gift ideas for friends', es: 'Casi todas son ideas de regalo para amistades' },
        weights: { heart: 3 },
      },
    ],
  },
  {
    id: 'heist-role',
    kicker: { en: 'Assemble the crew', es: 'Reúne al equipo' },
    prompt: { en: "In a heist movie, you're:", es: 'En una película de atracos, tú eres:' },
    options: [
      {
        id: 'heist-mastermind',
        emoji: '🧠',
        label: { en: 'The mastermind with a 40-step plan', es: 'La mente maestra con un plan de 40 pasos' },
        weights: { brain: 2, drive: 1 },
      },
      {
        id: 'heist-wildcard',
        emoji: '💥',
        label: { en: 'The wildcard who improvises everything', es: 'El comodín que lo improvisa todo' },
        weights: { chaos: 3 },
      },
      {
        id: 'heist-driver',
        emoji: '🚐',
        label: { en: 'The getaway driver at 3 AM', es: 'Quien conduce el coche de huida a las 3 AM' },
        weights: { night: 2, chaos: 1 },
      },
      {
        id: 'heist-heart',
        emoji: '🫂',
        label: { en: 'The heart of the crew', es: 'El corazón del equipo' },
        weights: { heart: 3 },
      },
    ],
  },
  {
    id: 'birthday',
    kicker: { en: 'Party time', es: 'Hora de fiesta' },
    prompt: { en: 'Your ideal birthday:', es: 'Tu cumpleaños ideal:' },
    options: [
      {
        id: 'bday-surprise',
        emoji: '🎉',
        label: { en: 'A surprise party (that you planned)', es: 'Una fiesta sorpresa (que organizaste tú)' },
        weights: { drive: 2, heart: 1 },
      },
      {
        id: 'bday-rooftop',
        emoji: '🌃',
        label: { en: 'A rooftop until sunrise', es: 'Una azotea hasta el amanecer' },
        weights: { night: 3 },
      },
      {
        id: 'bday-chaos',
        emoji: '🎳',
        label: { en: 'Five activities, zero plan', es: 'Cinco actividades, cero planes' },
        weights: { chaos: 2, heart: 1 },
      },
      {
        id: 'bday-quiet',
        emoji: '📚',
        label: { en: 'Quiet. Book. Cake. Nobody.', es: 'Tranquilidad. Libro. Tarta. Nadie.' },
        weights: { brain: 2, night: 1 },
      },
    ],
  },
  {
    id: 'advice',
    kicker: { en: 'Hot take', es: 'Opinión polémica' },
    prompt: { en: 'A friend asks for advice. You:', es: 'Alguien te pide consejo. Tú:' },
    options: [
      {
        id: 'advice-list',
        emoji: '📊',
        label: { en: 'Send a pros/cons list within 5 minutes', es: 'Mandas una lista de pros y contras en 5 minutos' },
        weights: { drive: 2, brain: 1 },
      },
      {
        id: 'advice-listen',
        emoji: '🫶',
        label: { en: 'Listen for two hours, advise zero', es: 'Escuchas dos horas y no aconsejas nada' },
        weights: { heart: 3 },
      },
      {
        id: 'advice-yolo',
        emoji: '🔥',
        label: { en: '"Do it. Life is short."', es: '"Hazlo. La vida es corta."' },
        weights: { chaos: 2, drive: 1 },
      },
      {
        id: 'advice-essay',
        emoji: '🌙',
        label: { en: 'Reply at 2 AM with a 900-word essay', es: 'Respondes a las 2 AM con un ensayo de 900 palabras' },
        weights: { night: 2, brain: 1 },
      },
    ],
  },
];
