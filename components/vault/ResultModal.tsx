"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  packageName: string;
  drawDate: string;
  balls: number[];
  stars: number[];
};

export default function ResultModal({
  open,
  onClose,
  packageName,
  drawDate,
  balls,
  stars,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl rounded-3xl border border-yellow-500/20 bg-[#10284A] shadow-2xl overflow-hidden">

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 h-10 w-10 rounded-full bg-white/10 text-2xl text-white hover:bg-red-500 transition"
        >
          ×
        </button>

        <div className="p-10 text-center">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/15">
            <span className="text-5xl">🏆</span>
          </div>

          <p className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-green-400">
            ✓ Access Verified
          </p>

          <h2 className="mt-6 text-5xl font-black text-yellow-400">
            {packageName}
          </h2>

          <p className="mt-2 text-slate-300">
            Official EuroMillions VIP Package
          </p>

          {/* Main Balls */}

          <div className="mt-10">
            <p className="mb-6 text-sm uppercase tracking-[5px] text-slate-400">
              Main Numbers
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {balls.map((ball) => (
                <div
                  key={ball}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl font-black text-black shadow-[0_0_25px_rgba(250,204,21,.45)]"
                >
                  {ball}
                </div>
              ))}
            </div>
          </div>

          {/* Lucky Stars */}

          <div className="mt-10">
            <p className="mb-6 text-sm uppercase tracking-[5px] text-slate-400">
              Lucky Stars
            </p>

            <div className="flex justify-center gap-5">
              {stars.map((star) => (
                <div
                  key={star}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-black text-white shadow-[0_0_25px_rgba(59,130,246,.45)]"
                >
                  {star}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-[#0B2345] p-5">
            <p className="text-sm uppercase tracking-[4px] text-slate-400">
              Draw Date
            </p>

            <h3 className="mt-2 text-2xl font-black text-yellow-400">
              {drawDate}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="mt-10 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-xl font-black text-black transition hover:scale-[1.02]"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}