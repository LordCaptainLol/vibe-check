# vibecheck. ✨

A tiny, playful, very shareable single-page quiz. Answer **3 micro-questions** and get a personalized
**Vibe Card**: an archetype title, three animated stats, a two-sentence read on you, and a "prescription" tip.
Built to be screenshotted and sent to the group chat.

Built with **React 19 + Vite + TypeScript + Tailwind CSS v4 + lucide-react**. It runs entirely client-side:
no backend, no tracking, nothing stored.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Dev server with HMR                   |
| `npm run build`     | Type-check + production build → `dist/` |
| `npm run preview`   | Serve the production build locally    |
| `npm run typecheck` | TypeScript only                       |

Requires Node 20+.

## Deploy

`dist/` is a static site. Drop it on Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host.
No environment variables are needed.

## How it works

```
Hero ──start──▶ Quiz (3 random Qs) ──answers──▶ Calculating (2.8s) ──▶ ResultScreen (VibeCard + share)
                     ▲                                                          │
                     └──────────────────────────── Retake ◀─────────────────────┘
```

1. **Question pool**: `src/data/questions.ts` holds 16 questions. Each run draws 3 you haven't seen yet (see *Question history* below).
2. **Traits**: every option adds weights to five hidden traits: `chaos`, `brain`, `night`, `heart`, `drive`.
3. **Archetype match**: `src/lib/vibe.ts` sums the weights and picks the archetype whose trait vector has the
   highest cosine similarity to yours (14 archetypes, covering every single trait and every trait pair).
4. **Stats**: your top 3 traits are scaled to 41–99%, with a small deterministic jitter taken from a hash of your
   answers. The same answers always produce the same card and the same `#VIBE-ID`.
5. **Sharing**: uses the native share sheet (`navigator.share`) on mobile and falls back to copying to the clipboard.

## Project structure

```
src/
├── App.tsx                 # Phase state machine (hero → quiz → calculating → result)
├── main.tsx
├── index.css               # Tailwind v4 theme, keyframes, glass/text-gradient utilities
├── types.ts
├── data/
│   ├── questions.ts        # Question pool + trait weights per option
│   ├── archetypes.ts       # Titles, copy, gradients, icons, trait vectors
│   └── traits.ts           # Trait labels + stat-bar colours
├── i18n/
│   ├── strings.ts          # UI strings (en / es)
│   └── LanguageContext.tsx # Provider + useLang() hook, detection & persistence
├── lib/
│   ├── vibe.ts             # Scoring, archetype matching, stat generation
│   ├── share.ts            # Share text, Web Share API, clipboard fallback
│   └── cn.ts               # className helper
├── hooks/
│   └── useCountUp.ts       # Animated number counter
└── components/
    ├── Background.tsx      # Animated gradient blobs + grid
    ├── Hero.tsx
    ├── Quiz.tsx            # Flow, auto-advance, 1–4 keyboard shortcuts
    ├── OptionButton.tsx    # Idle / selected / dimmed states
    ├── ProgressBar.tsx
    ├── Calculating.tsx     # Fake-but-fun analysis loader
    ├── ResultScreen.tsx    # Card + share/copy/retake actions + toast
    ├── VibeCard.tsx        # The shareable card (3D reveal, shine, burst)
    ├── StatBar.tsx
    ├── Burst.tsx           # Emoji particle burst
    ├── Button.tsx
    └── Toast.tsx
```

## Customizing

- **Add a question**: append to `QUESTION_POOL`. Give each option weights across the five traits (1–3 each).
- **Add an archetype**: append to `ARCHETYPES` with a `vector` describing its trait mix. Use complete Tailwind
  class strings for `gradient` (e.g. `'from-pink-500 via-rose-500 to-orange-400'`) so Tailwind can detect them.
- **Change the number of questions**: `QUESTION_COUNT` in `App.tsx`.
- **Rename stats**: edit labels in `src/data/traits.ts`.

## D&D mode 🐉

A second game mode, chosen from the start screen: **"Which D&D race and class are you?"**

- **5 questions** drawn from a pool of 20 (`src/data/dnd/questions.ts`).
- Every option votes for one or two **races** and a mix of **classes**. The top race and top class win.
  Ties are broken by a stable hash of your answers, so the same answers always give the same sheet.
- It uses the 2024 rules: 10 races (Human, Elf, Dwarf, Halfling, Gnome, Orc, Goliath, Aasimar, Tiefling,
  Dragonborn) and the 12 core classes.
- **Ability scores** use the standard array with +2/+1 (17, 15, 13, 12, 10, 8). The winning class's two key
  abilities get the top slots, and the rest are ordered by how much your other class votes leaned on them.
- The **Character Sheet** card shows the race + class title, the six abilities with modifiers, a two-sentence
  read (class + race), a "quest" tip and a d20 initiative roll.
- Balance was checked with a 300,000-run simulation. Every one of the 120 race/class combinations is reachable,
  each race comes up 9–12% of the time and each class 6–11%.

Unofficial fan content. Dungeons & Dragons is a trademark of Wizards of the Coast.

## Question history (no repeats)

`src/lib/questionHistory.ts` remembers, per mode, which questions you've already seen, and saves them in
`localStorage` (`vibecheck.history.vibe` / `vibecheck.history.dnd`).

- Each run serves questions you haven't seen yet, until the pool is used up: 5 runs in Vibe Check (16 ÷ 3) and
  4 in D&D (20 ÷ 5).
- Then a new cycle starts. Questions from the immediately previous run are always excluded, so two runs in a row
  never share a question.
- If storage is blocked (private mode, etc.), it falls back to memory for the current visit.
- To reset it, clear the site's data or remove those two keys.

## Languages (EN / ES)

The header has an **EN | ES** toggle. On a first visit the language is detected from the browser
(`navigator.language`). After that, the choice is saved in `localStorage`. Switching is instant, even on a
card that's already showing, because content is localized at render time rather than when the result is computed.
The share text, `<html lang>`, the page title and the meta description all follow the chosen language.

- UI strings live in `src/i18n/strings.ts`. The `es` object is typed against `en`, so a missing key fails the build.
- Content (questions, archetypes, trait labels) uses `{ en, es }` objects inside `src/data/`.
- Components read everything through `useLang()`, which returns `t` (UI strings) and `l()` (picks a localized value).
- To add a language, extend `Lang` in `src/types.ts` and add the new key everywhere TypeScript complains.

## Accessibility & UX notes

- Fully keyboard-operable (press 1–4 to answer, visible focus rings).
- Respects `prefers-reduced-motion`: animations and count-ups are effectively disabled.
- Mobile-first layout using `dvh` units. Light haptic feedback on answer tap where the device supports it.
