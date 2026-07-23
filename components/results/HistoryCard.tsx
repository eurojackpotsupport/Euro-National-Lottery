import type { Result } from "@/types/result";

type Props = {
  result: Result;
};

export default function HistoryCard({ result }: Props) {
  const numbers = [
    result.number1,
    result.number2,
    result.number3,
    result.number4,
    result.number5,
  ];

  return (
    <div className="overflow-hidden rounded-[30px] border border-yellow-500/20 bg-[#10284A] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(255,193,7,0.18)]">

      {/* Header */}

      <div className="border-b border-yellow-500/10 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 px-6 py-6 md:px-8">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>

            <span className="inline-flex rounded-full bg-yellow-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
              Official Draw
            </span>

            <h2 className="mt-4 text-2xl font-black text-white md:text-4xl">
              {result.draw_date}
            </h2>

          </div>

          <div className="text-left md:text-right">

            <p className="text-xs uppercase tracking-[4px] text-slate-400">
              Jackpot
            </p>

            <h2 className="mt-2 text-3xl font-black text-yellow-400 md:text-5xl">
              {result.jackpot || "TBA"}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">

  <span className="rounded-full bg-[#081B33] px-4 py-2">
    🇪🇺 EuroMillions
  </span>

  <span className="rounded-full bg-[#081B33] px-4 py-2">
    ✔ Official Result
  </span>

</div>
          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-6 md:p-8">

        {/* Winning Numbers */}

        <div>

          <p className="mb-5 text-sm uppercase tracking-[3px] text-slate-400">
            Winning Numbers
          </p>

          <div className="flex flex-wrap gap-4">

            {numbers.map((number, index) => (

              <div
                key={index}
                className="
flex h-14 w-14 md:h-16 md:w-16 items-center justify-center
rounded-full
bg-gradient-to-br
from-yellow-200
via-yellow-400
to-yellow-600
text-2xl
font-black
text-black
shadow-[0_8px_20px_rgba(255,193,7,0.45)]
ring-2
ring-yellow-300/60
transition-all
duration-300
hover:scale-110
hover:rotate-6
"
              >
                {number}
              </div>

            ))}

          </div>

        </div>

        {/* Lucky Stars */}

        <div className="mt-10">

          <p className="mb-5 text-sm uppercase tracking-[3px] text-slate-400">
            Lucky Stars
          </p>

          <div className="flex flex-wrap gap-4">

            {[result.star1, result.star2].map((star, index) => (

              <div
                key={index}
                className="
flex h-14 w-14 md:h-16 md:w-16 items-center justify-center
rounded-full
border-[3px]
border-yellow-400
bg-gradient-to-br
from-white
to-slate-100
text-xl
font-black
text-black
shadow-[0_8px_18px_rgba(255,193,7,0.25)]
transition-all
duration-300
hover:scale-110
hover:-rotate-6
"
              >
                ★ {star}
              </div>

            ))}

          </div>

        </div>

        {/* Status */}

        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[3px] text-emerald-300">
                Status
              </p>

              <p className="mt-2 text-lg font-bold text-white md:text-xl">
                Official Result Verified
              </p>

            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl font-black text-white">
              ✔
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}