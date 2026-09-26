import type { CSSProperties } from 'react';

const PARTICLES = 16;

/** One-shot celebratory emoji burst, positioned over its relative parent. */
export function Burst({ emoji }: { emoji: string }) {
  const glyphs = ['✨', '💫', '⭐', emoji];
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-28 z-20">
      {Array.from({ length: PARTICLES }, (_, i) => {
        const angle = (i / PARTICLES) * Math.PI * 2;
        const distance = 130 + (i % 3) * 45;
        const style = {
          '--tx': `${Math.cos(angle) * distance}px`,
          '--ty': `${Math.sin(angle) * distance}px`,
          '--rot': `${(i % 2 ? 1 : -1) * (90 + i * 12)}deg`,
          animationDelay: `${350 + (i % 4) * 40}ms`,
        } as CSSProperties;
        return (
          <span key={i} className="absolute animate-burst text-xl" style={style}>
            {glyphs[i % glyphs.length]}
          </span>
        );
      })}
    </div>
  );
}
