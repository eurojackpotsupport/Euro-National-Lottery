"use client";

type Props = {
  results: any;
};

export default function LatestDrawCard({ results }: Props) {
  if (!results) return null;

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#102C57] via-[#123A68] to-[#081B33] p-8 shadow-[0_25px_70px_rgba(0,0,0,.45)]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">

        {/* Header */}

        <p className="text-xs font-bold uppercase tracking-[6px] text-yellow-400">
          OFFICIAL DRAW RESULT
        </p>

        <h2 className="mt-3 text-3xl font-black text-white">
          {results.draw_date}
        </h2>

        <p className="mt-2 text-slate-400">
          Official EuroMillions winning numbers
        </p>

        {/* Main Numbers */}

        <div className="mt-8 flex flex-wrap gap-4">

          {[
            results.number1,
            results.number2,
            results.number3,
            results.number4,
            results.number5,
          ].map((num, index) => (
            <div
              key={index}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-gradient-to-br
                from-white
                to-slate-200
                text-xl
                font-black
                text-[#081B33]
                shadow-xl
                transition
                duration-300
                hover:scale-110
              "
            >
              {num}
            </div>
          ))}

        </div>

        {/* Lucky Stars */}

        <div className="mt-8 flex gap-4">

          {[results.star1, results.star2].map((star, index) => (
            <div
              key={index}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-yellow-300
                bg-gradient-to-br
                from-yellow-300
                to-yellow-500
                text-xl
                font-black
                text-[#081B33]
                shadow-[0_0_25px_rgba(250,204,21,.35)]
                transition
                duration-300
                hover:scale-110
              "
            >
              {star}
            </div>
          ))}

        </div>

        {/* Jackpot */}

        <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-[#081B33]/80 p-6 backdrop-blur-xl">

          <p className="text-[11px] uppercase tracking-[5px] text-yellow-400">
            CURRENT JACKPOT
          </p>

          <h3 className="mt-3 text-4xl font-black text-yellow-300">
            {results.jackpot}
          </h3>

        </div>

      </div>

    </div>
  );
}