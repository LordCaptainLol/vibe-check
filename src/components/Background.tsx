/** Animated gradient blobs + faint grid. Purely decorative. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 size-[32rem] animate-blob rounded-full bg-fuchsia-600/35 blur-3xl" />
      <div
        className="absolute -right-40 top-1/4 size-[28rem] animate-blob rounded-full bg-indigo-600/35 blur-3xl"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute -bottom-48 left-1/4 size-[30rem] animate-blob rounded-full bg-cyan-500/20 blur-3xl"
        style={{ animationDelay: '-12s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />
    </div>
  );
}
