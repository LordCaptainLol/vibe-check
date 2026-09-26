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

1. **Question pool**: `src/data/questions.ts` holds 8 questions. Each run draws a random 3, so retakes feel fresh.
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
