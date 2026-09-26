import { CheckCircle2 } from 'lucide-react';

export function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="glass fixed bottom-6 left-1/2 z-50 inline-flex animate-toast items-center gap-2 rounded-full bg-[#1a1230]/80 px-5 py-3 text-sm font-medium shadow-2xl"
    >
      <CheckCircle2 className="size-4 text-emerald-400" />
      {message}
    </div>
  );
}
