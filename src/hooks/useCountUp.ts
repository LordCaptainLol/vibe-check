import { useEffect, useState } from 'react';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/** Animates an integer from 0 to `target`. Respects prefers-reduced-motion. */
export function useCountUp(target: number, duration = 1200, delay = 0): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    let start: number | null = null;
    const timeout = window.setTimeout(() => {
      const tick = (now: number) => {
        start ??= now;
        const progress = Math.min(1, (now - start) / duration);
        setValue(Math.round(easeOutCubic(progress) * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, duration, delay]);

  return value;
}
