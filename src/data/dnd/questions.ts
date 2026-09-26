import type { DndWeights, Question } from '../../types';

/**
 * D&D question pool. Every option votes for one or two races and a mix of classes;
 * each race gets ~4 votes across the pool and each class ~8–10 weight points so
 * no result is starved.
 */
export const DND_QUESTION_POOL: Question<DndWeights>[] = [
  {
    id: 'dnd-dragon',
    kicker: { en: 'Roll for courage', es: 'Tira por valor' },
    prompt: { en: 'A dragon blocks the road. You:', es: 'Un dragón bloquea el camino. Tú:' },
    options: [
      {
        id: 'dragon-charge',
        emoji: '⚔️',
        label: { en: 'Charge. Talk later.', es: 'Cargas. Ya hablaréis después.' },
        weights: { race: { goliath: 1, orc: 1 }, classes: { barbarian: 2, fighter: 1 } },
      },
      {
        id: 'dragon-flatter',
        emoji: '🗣️',
        label: { en: 'Negotiate. Dragons love flattery.', es: 'Negocias. A los dragones les encantan los halagos.' },
        weights: { race: { dragonborn: 1 }, classes: { bard: 2, sorcerer: 1 } },
      },
      {
        id: 'dragon-book',
        emoji: '📚',
        label: {
          en: 'Recall its weakness from a book you read at 3 AM',
          es: 'Recuerdas su debilidad de un libro que leíste a las 3 AM',
        },
        weights: { race: { gnome: 1 }, classes: { wizard: 2 } },
      },
      {
        id: 'dragon-sneak',
        emoji: '🫥',
        label: {
          en: 'Sneak past and pocket a coin from its hoard',
          es: 'Pasas a escondidas y te llevas una moneda de su tesoro',
        },
        weights: { race: { halfling: 1 }, classes: { rogue: 2, ranger: 1 } },
      },
    ],
  },
  {
    id: 'dnd-home',
    kicker: { en: 'Fantasy real estate', es: 'Inmobiliaria de fantasía' },
    prompt: { en: 'Pick your ideal home.', es: 'Elige tu hogar ideal.' },
    options: [
      {
        id: 'home-mountain',
        emoji: '⛰️',
        label: { en: 'Halls carved deep inside a mountain', es: 'Salones excavados en lo profundo de una montaña' },
        weights: { race: { dwarf: 2 }, classes: { fighter: 1, cleric: 1 } },
      },
      {
        id: 'home-forest',
        emoji: '🌳',
        label: { en: 'A treehouse in an ancient forest', es: 'Una casa en un árbol de un bosque ancestral' },
        weights: { race: { elf: 2 }, classes: { druid: 2, ranger: 1 } },
      },
      {
        id: 'home-burrow',
        emoji: '🍵',
        label: { en: 'A cozy burrow with a full pantry', es: 'Una madriguera acogedora con la despensa llena' },
        weights: { race: { halfling: 2 }, classes: { bard: 1, rogue: 1 } },
      },
      {
        id: 'home-city',
        emoji: '🏙️',
        label: { en: 'A loud city that never sleeps', es: 'Una ciudad ruidosa que nunca duerme' },
        weights: { race: { human: 2 }, classes: { fighter: 2, rogue: 1 } },
      },
    ],
  },
  {
    id: 'dnd-power',
    kicker: { en: 'Origin story', es: 'Historia de origen' },
    prompt: { en: 'Where does your power come from?', es: '¿De dónde viene tu poder?' },
    options: [
      {
        id: 'power-study',
        emoji: '📖',
        label: { en: 'Years of study and terrible sleep', es: 'Años de estudio y dormir fatal' },
        weights: { race: { elf: 1 }, classes: { wizard: 3 } },
      },
      {
        id: 'power-blood',
        emoji: '🩸',
        label: { en: "It's just… in my blood", es: 'Simplemente… lo llevo en la sangre' },
        weights: { race: { dragonborn: 1 }, classes: { sorcerer: 3 } },
      },
      {
        id: 'power-pact',
        emoji: '🤝',
        label: { en: "A deal I probably shouldn't have signed", es: 'Un pacto que probablemente no debí firmar' },
        weights: { race: { tiefling: 1 }, classes: { warlock: 3 } },
      },
      {
        id: 'power-divine',
        emoji: '✨',
        label: { en: 'Something divine believes in me', es: 'Algo divino cree en mí' },
        weights: { race: { aasimar: 2 }, classes: { cleric: 2, paladin: 2 } },
      },
    ],
  },
  {
    id: 'dnd-argument',
    kicker: { en: 'Party drama', es: 'Drama en el grupo' },
    prompt: { en: 'Your party is arguing. You:', es: 'Tu grupo está discutiendo. Tú:' },
    options: [
      {
        id: 'argue-song',
        emoji: '🎻',
        label: { en: 'Play a song until everyone calms down', es: 'Tocas una canción hasta que todo el mundo se calma' },
        weights: { race: { elf: 1 }, classes: { bard: 2 } },
      },
      {
        id: 'argue-oath',
        emoji: '🙏',
        label: { en: 'Remind everyone of the sacred oath', es: 'Recuerdas a todos el juramento sagrado' },
        weights: { race: { aasimar: 1 }, classes: { paladin: 2, cleric: 1 } },
      },
      {
        id: 'argue-hunt',
        emoji: '🍖',
        label: { en: 'Leave to hunt dinner alone', es: 'Te vas a cazar la cena en solitario' },
        weights: { race: { orc: 1 }, classes: { ranger: 2, barbarian: 1 } },
      },
      {
        id: 'argue-meditate',
        emoji: '🧘',
        label: { en: 'Meditate until the noise fades', es: 'Meditas hasta que el ruido desaparece' },
        weights: { race: { human: 1 }, classes: { monk: 3 } },
      },
    ],
  },
  {
    id: 'dnd-weapon',
    kicker: { en: 'Armory', es: 'Armería' },
    prompt: { en: 'Pick a weapon.', es: 'Elige un arma.' },
    options: [
      {
        id: 'weapon-axe',
        emoji: '🪓',
        label: { en: 'A greataxe bigger than you', es: 'Una gran hacha más grande que tú' },
        weights: { race: { orc: 2 }, classes: { barbarian: 2, fighter: 1 } },
      },
      {
        id: 'weapon-bow',
        emoji: '🏹',
        label: { en: 'A longbow and infinite patience', es: 'Un arco largo y paciencia infinita' },
        weights: { race: { elf: 1 }, classes: { ranger: 3, fighter: 1 } },
      },
      {
        id: 'weapon-daggers',
        emoji: '🗡️',
        label: { en: 'Two daggers — one of them hidden', es: 'Dos dagas (una de ellas escondida)' },
        weights: { race: { halfling: 1 }, classes: { rogue: 2 } },
      },
      {
        id: 'weapon-fists',
        emoji: '👊',
        label: { en: "My fists. They're enough.", es: 'Mis puños. Con eso basta.' },
        weights: { race: { goliath: 1 }, classes: { monk: 2 } },
      },
    ],
  },
  {
    id: 'dnd-backpack',
    kicker: { en: 'Inventory check', es: 'Revisión de inventario' },
    prompt: { en: "What's in your backpack?", es: '¿Qué llevas en la mochila?' },
    options: [
      {
        id: 'pack-mushrooms',
        emoji: '🍄',
        label: { en: "Mushrooms. Don't ask which ones.", es: 'Setas. No preguntes cuáles.' },
        weights: { race: { gnome: 1 }, classes: { druid: 2 } },
      },
      {
        id: 'pack-gadgets',
        emoji: '⚙️',
        label: { en: 'Half-built gadgets and three spare gears', es: 'Inventos a medio hacer y tres engranajes de repuesto' },
        weights: { race: { gnome: 2 }, classes: { wizard: 1, rogue: 1 } },
      },
      {
        id: 'pack-holy',
        emoji: '📿',
        label: { en: 'A holy symbol and a spare bandage', es: 'Un símbolo sagrado y una venda de repuesto' },
        weights: { race: { dwarf: 1 }, classes: { cleric: 3 } },
      },
      {
        id: 'pack-fire',
        emoji: '🔥',
        label: { en: 'Nothing. It caught fire. Again.', es: 'Nada. Se prendió fuego. Otra vez.' },
        weights: { race: { dragonborn: 1 }, classes: { sorcerer: 2 } },
      },
    ],
  },
  {
    id: 'dnd-tavern',
    kicker: { en: 'Last call', es: 'Última ronda' },
    prompt: { en: 'Your tavern order:', es: 'Tu pedido en la taberna:' },
    options: [
      {
        id: 'tavern-ale',
        emoji: '🍺',
        label: { en: 'The biggest mug of ale they have', es: 'La jarra de cerveza más grande que tengan' },
        weights: { race: { dwarf: 1 }, classes: { barbarian: 1, fighter: 1 } },
      },
      {
        id: 'tavern-wine',
        emoji: '🍷',
        label: { en: 'Wine with a mysterious stranger', es: 'Vino con alguien misterioso' },
        weights: { race: { tiefling: 2 }, classes: { warlock: 2, bard: 1 } },
      },
      {
        id: 'tavern-milk',
        emoji: '🥛',
        label: { en: 'Just milk. Gotta stay sharp.', es: 'Solo leche. Hay que mantenerse alerta.' },
        weights: { race: { aasimar: 1 }, classes: { monk: 2, paladin: 1, cleric: 1 } },
      },
      {
        id: 'tavern-breakfast',
        emoji: '🥞',
        label: { en: 'Second breakfast, then first lunch', es: 'Segundo desayuno y luego primer almuerzo' },
        weights: { race: { halfling: 1 }, classes: { bard: 1 } },
      },
    ],
  },
  {
    id: 'dnd-companion',
    kicker: { en: 'Companion', es: 'Compañero animal' },
    prompt: { en: 'Pick your animal companion.', es: 'Elige tu compañero animal.' },
    options: [
      {
        id: 'pet-wolf',
        emoji: '🐺',
        label: { en: 'A wolf that only trusts you', es: 'Un lobo que solo confía en ti' },
        weights: { race: { orc: 1 }, classes: { ranger: 2, druid: 1 } },
      },
      {
        id: 'pet-cat',
        emoji: '🐈',
        label: { en: 'A black cat that talks (rudely)', es: 'Un gato negro que habla (con malos modales)' },
        weights: { race: { tiefling: 1 }, classes: { warlock: 2, wizard: 1 } },
      },
      {
        id: 'pet-owl',
        emoji: '🦉',
        label: { en: 'An owl that files your notes', es: 'Un búho que archiva tus apuntes' },
        weights: { race: { elf: 1 }, classes: { wizard: 2 } },
      },
      {
        id: 'pet-dragon',
        emoji: '🐉',
        label: { en: 'A tiny dragon, obviously', es: 'Un dragón diminuto, obviamente' },
        weights: { race: { dragonborn: 2 }, classes: { sorcerer: 2 } },
      },
    ],
  },
  {
    id: 'dnd-villain',
    kicker: { en: 'Boss fight', es: 'Jefe final' },
    prompt: { en: 'The villain starts monologuing. You:', es: 'El villano empieza su monólogo. Tú:' },
    options: [
      {
        id: 'villain-speech',
        emoji: '📣',
        label: { en: 'Interrupt with an inspiring speech', es: 'Lo interrumpes con un discurso inspirador' },
        weights: { race: { aasimar: 1 }, classes: { paladin: 3, bard: 1 } },
      },
      {
        id: 'villain-stab',
        emoji: '🔪',
        label: { en: 'Stab them mid-sentence', es: 'Lo apuñalas a mitad de frase' },
        weights: { race: { human: 1 }, classes: { rogue: 2, fighter: 1 } },
      },
      {
        id: 'villain-rage',
        emoji: '😤',
        label: { en: 'Rage. Just rage.', es: 'Furia. Solo furia.' },
        weights: { race: { goliath: 1 }, classes: { barbarian: 3 } },
      },
      {
        id: 'villain-vines',
        emoji: '🌿',
        label: { en: 'Politely ask the vines to handle it', es: 'Pides amablemente a las enredaderas que se encarguen' },
        weights: { race: { gnome: 1 }, classes: { druid: 3 } },
      },
    ],
  },
  {
    id: 'dnd-legacy',
    kicker: { en: 'Epilogue', es: 'Epílogo' },
    prompt: { en: 'How do you want to be remembered?', es: '¿Cómo quieres que te recuerden?' },
    options: [
      {
        id: 'legacy-shield',
        emoji: '🛡️',
        label: { en: 'As the one who never left anyone behind', es: 'Como quien nunca dejó a nadie atrás' },
        weights: { race: { dwarf: 1 }, classes: { fighter: 3, paladin: 1, cleric: 1 } },
      },
      {
        id: 'legacy-song',
        emoji: '📜',
        label: { en: "In a song that's 80% exaggeration", es: 'En una canción exagerada en un 80%' },
        weights: { race: { human: 1 }, classes: { bard: 2 } },
      },
      {
        id: 'legacy-legend',
        emoji: '🌌',
        label: { en: 'As a legend nobody fully understood', es: 'Como una leyenda que nadie llegó a entender' },
        weights: { race: { tiefling: 1 }, classes: { warlock: 2, sorcerer: 1 } },
      },
      {
        id: 'legacy-mountain',
        emoji: '🏔️',
        label: { en: 'With a mountain named after you', es: 'Con una montaña que lleve tu nombre' },
        weights: { race: { goliath: 2 }, classes: { barbarian: 1, monk: 1, fighter: 1 } },
      },
    ],
  },
  {
    id: 'dnd-trap',
    kicker: { en: 'Dungeon crawl', es: 'Explorando la mazmorra' },
    prompt: { en: 'You spot a suspicious pressure plate. You:', es: 'Ves una placa de presión sospechosa. Tú:' },
    options: [
      {
        id: 'trap-disarm',
        emoji: '🧷',
        label: { en: 'Disarm it with a hairpin', es: 'La desactivas con una horquilla' },
        weights: { race: { halfling: 1 }, classes: { rogue: 3 } },
      },
      {
        id: 'trap-stomp',
        emoji: '🦶',
        label: { en: "Step on it. What's the worst that could happen?", es: 'La pisas. ¿Qué es lo peor que puede pasar?' },
        weights: { race: { orc: 1 }, classes: { barbarian: 2, sorcerer: 1 } },
      },
      {
        id: 'trap-runes',
        emoji: '🔍',
        label: { en: 'Study the ancient runes around it', es: 'Estudias las runas antiguas que la rodean' },
        weights: { race: { dwarf: 1 }, classes: { wizard: 2, cleric: 1 } },
      },
      {
        id: 'trap-squirrel',
        emoji: '🐿️',
        label: { en: 'Send a squirrel to test it', es: 'Mandas a una ardilla a probarla' },
        weights: { race: { gnome: 1 }, classes: { druid: 2, ranger: 1 } },
      },
    ],
  },
  {
    id: 'dnd-loot',
    kicker: { en: 'Treasure!', es: '¡Tesoro!' },
    prompt: { en: 'You find a chest of loot. You take:', es: 'Encuentras un cofre de botín. Te llevas:' },
    options: [
      {
        id: 'loot-gold',
        emoji: '💰',
        label: { en: 'All the gold. Every. Single. Coin.', es: 'Todo el oro. Hasta la última moneda.' },
        weights: { race: { dwarf: 1 }, classes: { rogue: 2, fighter: 1 } },
      },
      {
        id: 'loot-tome',
        emoji: '📕',
        label: { en: 'The dusty, possibly cursed tome', es: 'El tomo polvoriento y posiblemente maldito' },
        weights: { race: { tiefling: 1 }, classes: { warlock: 2, wizard: 1 } },
      },
      {
        id: 'loot-lute',
        emoji: '🪕',
        label: { en: 'The fancy lute', es: 'El laúd elegante' },
        weights: { race: { elf: 1 }, classes: { bard: 3 } },
      },
      {
        id: 'loot-share',
        emoji: '🫴',
        label: { en: 'Nothing — you share it with the village', es: 'Nada: lo repartes con la aldea' },
        weights: { race: { aasimar: 1 }, classes: { paladin: 2, cleric: 1 } },
      },
    ],
  },
  {
    id: 'dnd-campfire',
    kicker: { en: 'Long rest', es: 'Descanso largo' },
    prompt: { en: "Around the campfire, you're:", es: 'Alrededor de la hoguera, tú:' },
    options: [
      {
        id: 'camp-stories',
        emoji: '🎶',
        label: { en: 'Telling wildly exaggerated stories', es: 'Cuentas historias exageradísimas' },
        weights: { race: { halfling: 1 }, classes: { bard: 2 } },
      },
      {
        id: 'camp-watch',
        emoji: '👀',
        label: { en: 'Keeping watch. All night.', es: 'Haces guardia. Toda la noche.' },
        weights: { race: { human: 1 }, classes: { fighter: 2, ranger: 1 } },
      },
      {
        id: 'camp-stars',
        emoji: '🌠',
        label: { en: 'Talking to the stars (they answer)', es: 'Hablas con las estrellas (y te responden)' },
        weights: { race: { aasimar: 1 }, classes: { cleric: 1, warlock: 1, druid: 1 } },
      },
      {
        id: 'camp-pushups',
        emoji: '💪',
        label: { en: 'Doing push-ups to stay warm', es: 'Haces flexiones para no pasar frío' },
        weights: { race: { goliath: 1 }, classes: { monk: 2, barbarian: 1 } },
      },
    ],
  },
  {
    id: 'dnd-merchant',
    kicker: { en: 'Social encounter', es: 'Encuentro social' },
    prompt: { en: 'A shady merchant overcharges you. You:', es: 'Un mercader turbio te cobra de más. Tú:' },
    options: [
      {
        id: 'merchant-haggle',
        emoji: '😏',
        label: { en: 'Out-haggle them with pure charm', es: 'Regateas a base de puro encanto' },
        weights: { race: { tiefling: 1 }, classes: { bard: 2, warlock: 1 } },
      },
      {
        id: 'merchant-fire',
        emoji: '🔥',
        label: { en: 'Their stall mysteriously catches fire', es: 'Su puesto se incendia misteriosamente' },
        weights: { race: { dragonborn: 1 }, classes: { sorcerer: 3 } },
      },
      {
        id: 'merchant-pickpocket',
        emoji: '👛',
        label: { en: 'Pay, then quietly pick their pocket', es: 'Pagas y luego le vacías el bolsillo en silencio' },
        weights: { race: { halfling: 1 }, classes: { rogue: 2 } },
      },
      {
        id: 'merchant-guard',
        emoji: '🧾',
        label: { en: 'Report them to the city guard', es: 'Lo denuncias ante la guardia de la ciudad' },
        weights: { race: { human: 1 }, classes: { paladin: 2, fighter: 1 } },
      },
    ],
  },
  {
    id: 'dnd-storm',
    kicker: { en: 'Travel day', es: 'Día de viaje' },
    prompt: { en: 'A massive storm hits mid-journey. You:', es: 'Una tormenta enorme te pilla a mitad de viaje. Tú:' },
    options: [
      {
        id: 'storm-ask',
        emoji: '⛈️',
        label: { en: 'Politely ask it to stop', es: 'Le pides amablemente que pare' },
        weights: { race: { elf: 1 }, classes: { druid: 3 } },
      },
      {
        id: 'storm-march',
        emoji: '🥾',
        label: { en: "Keep marching. It's just water.", es: 'Sigues caminando. Solo es agua.' },
        weights: { race: { goliath: 1 }, classes: { barbarian: 1, fighter: 1, monk: 1 } },
      },
      {
        id: 'storm-shelter',
        emoji: '⛺',
        label: { en: 'Already built a shelter an hour ago', es: 'Ya montaste un refugio hace una hora' },
        weights: { race: { dwarf: 1 }, classes: { ranger: 2, cleric: 1 } },
      },
      {
        id: 'storm-lightning',
        emoji: '⚡',
        label: { en: 'Absorb the lightning. Feel alive.', es: 'Absorbes el rayo. Sientes la vida.' },
        weights: { race: { dragonborn: 1 }, classes: { sorcerer: 2 } },
      },
    ],
  },
  {
    id: 'dnd-training',
    kicker: { en: 'Training montage', es: 'Montaje de entrenamiento' },
    prompt: { en: 'Your daily training routine:', es: 'Tu rutina diaria de entrenamiento:' },
    options: [
      {
        id: 'train-boulders',
        emoji: '🪨',
        label: { en: 'Lifting boulders at dawn', es: 'Levantar rocas al amanecer' },
        weights: { race: { goliath: 1 }, classes: { fighter: 2, barbarian: 1 } },
      },
      {
        id: 'train-kicks',
        emoji: '🥋',
        label: { en: '1,000 kicks, then tea', es: '1000 patadas y luego un té' },
        weights: { race: { human: 1 }, classes: { monk: 3 } },
      },
      {
        id: 'train-apples',
        emoji: '🍎',
        label: { en: 'Shooting apples off things', es: 'Acertar manzanas a flechazos' },
        weights: { race: { elf: 1 }, classes: { ranger: 2 } },
      },
      {
        id: 'train-spells',
        emoji: '📖',
        label: { en: 'Memorizing spells until midnight', es: 'Memorizar conjuros hasta medianoche' },
        weights: { race: { gnome: 1 }, classes: { wizard: 3 } },
      },
    ],
  },
  {
    id: 'dnd-fear',
    kicker: { en: 'Saving throw', es: 'Tirada de salvación' },
    prompt: { en: 'What scares you most?', es: '¿Qué es lo que más miedo te da?' },
    options: [
      {
        id: 'fear-slots',
        emoji: '🕳️',
        label: { en: 'Running out of spell slots', es: 'Quedarte sin espacios de conjuro' },
        weights: { race: { gnome: 1 }, classes: { wizard: 2, sorcerer: 1 } },
      },
      {
        id: 'fear-fineprint',
        emoji: '📜',
        label: { en: "Your patron's fine print", es: 'La letra pequeña de tu patrón' },
        weights: { race: { tiefling: 1 }, classes: { warlock: 3 } },
      },
      {
        id: 'fear-city',
        emoji: '🏙️',
        label: { en: 'A city with no trees', es: 'Una ciudad sin árboles' },
        weights: { race: { orc: 1 }, classes: { druid: 2, ranger: 1 } },
      },
      {
        id: 'fear-god',
        emoji: '😶',
        label: { en: 'Disappointing your god', es: 'Decepcionar a tu dios' },
        weights: { race: { aasimar: 1 }, classes: { cleric: 2, paladin: 1 } },
      },
    ],
  },
  {
    id: 'dnd-quest',
    kicker: { en: 'Quest board', es: 'Tablón de misiones' },
    prompt: { en: 'Which quest do you take?', es: '¿Qué misión aceptas?' },
    options: [
      {
        id: 'quest-dragon',
        emoji: '🐉',
        label: { en: 'Slay the dragon terrorizing the valley', es: 'Derrotar al dragón que aterroriza el valle' },
        weights: { race: { dragonborn: 1 }, classes: { paladin: 2, fighter: 1 } },
      },
      {
        id: 'quest-masquerade',
        emoji: '🎭',
        label: { en: "Infiltrate the noble's masquerade ball", es: 'Infiltrarte en el baile de máscaras del noble' },
        weights: { race: { tiefling: 1 }, classes: { rogue: 2, bard: 1 } },
      },
      {
        id: 'quest-keg',
        emoji: '🛢️',
        label: { en: 'Recover a stolen keg of ancestral ale', es: 'Recuperar un barril robado de cerveza ancestral' },
        weights: { race: { dwarf: 1 }, classes: { barbarian: 2 } },
      },
      {
        id: 'quest-grove',
        emoji: '🌱',
        label: { en: 'Heal the dying sacred grove', es: 'Sanar la arboleda sagrada que se muere' },
        weights: { race: { gnome: 1 }, classes: { druid: 2, cleric: 1 } },
      },
    ],
  },
  {
    id: 'dnd-flaw',
    kicker: { en: 'Character flaw', es: 'Defecto de personaje' },
    prompt: { en: 'Your character flaw:', es: 'Tu defecto de personaje:' },
    options: [
      {
        id: 'flaw-food',
        emoji: '🍗',
        label: { en: "Can't say no to a free meal", es: 'No sabes decir que no a comida gratis' },
        weights: { race: { halfling: 1 }, classes: { bard: 1, rogue: 1 } },
      },
      {
        id: 'flaw-grudge',
        emoji: '😠',
        label: { en: 'Holds a grudge for a century', es: 'Guardas rencor durante un siglo' },
        weights: { race: { dwarf: 1 }, classes: { fighter: 1, barbarian: 1 } },
      },
      {
        id: 'flaw-vanity',
        emoji: '🪞',
        label: { en: 'A little too fond of your own reflection', es: 'Te gusta un poco demasiado tu reflejo' },
        weights: { race: { dragonborn: 1 }, classes: { paladin: 1, sorcerer: 1, bard: 1 } },
      },
      {
        id: 'flaw-secrets',
        emoji: '🤫',
        label: { en: 'Keeps secrets from your own party', es: 'Guardas secretos a tu propio grupo' },
        weights: { race: { orc: 1 }, classes: { warlock: 2, rogue: 1 } },
      },
    ],
  },
  {
    id: 'dnd-zero-hp',
    kicker: { en: 'Death saves', es: 'Salvaciones contra muerte' },
    prompt: { en: "You're at 0 HP. Your last words:", es: 'Estás a 0 PG. Tus últimas palabras:' },
    options: [
      {
        id: 'zero-not-today',
        emoji: '😤',
        label: { en: '"Not today." (You get back up.)', es: '"Hoy no." (Y te levantas).' },
        weights: { race: { orc: 1 }, classes: { barbarian: 2, fighter: 1 } },
      },
      {
        id: 'zero-prayer',
        emoji: '🙏',
        label: { en: 'A prayer. Loudly.', es: 'Una plegaria. Bien alta.' },
        weights: { race: { aasimar: 1 }, classes: { cleric: 2, paladin: 1 } },
      },
      {
        id: 'zero-song',
        emoji: '🎵',
        label: { en: 'A dramatic final song', es: 'Una canción final dramática' },
        weights: { race: { human: 1 }, classes: { bard: 2 } },
      },
      {
        id: 'zero-bear',
        emoji: '🐻',
        label: { en: '"Actually, I\'m a bear now."', es: '"En realidad, ahora soy un oso."' },
        weights: { race: { goliath: 1 }, classes: { druid: 2, monk: 1 } },
      },
    ],
  },
];
