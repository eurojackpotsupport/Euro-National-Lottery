import type { Result } from "@/types/result";

type Props = {
  result: Result;
};

export default function FeaturedResultCard({ result }: Props) {
  const numbers = [
    result.number1,
    result.number2,
    result.number3,
    result.number4,
    result.number5,
  ];

  const stars = [result.star1, result.star2];

  return (
    <section className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-b from-[#15345f] to-[#10284A] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

      {/* TOP HEADER */}

      <div className="bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 px-6 py-10 md:px-10">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
            ⭐ Featured Official Draw
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            {result.draw_date}
          </h2>

          <p className="mt-3 text-slate-300">
            Latest Official EuroMillions Winning Numbers
          </p>

        </div>

      </div>

      {/* JACKPOT */}

      <div className="border-y border-yellow-500/10 bg-[#081B33] px-6 py-10">

        <p className="text-center uppercase tracking-[4px] text-slate-400">
          Jackpot Prize
        </p>

        <h2 className="mt-3 text-center text-5xl font-black text-yellow-400 md:text-7xl">
          {result.jackpot || "TBA"}
        </h2>

        <p className="mt-3 text-center text-slate-400">
          Official EuroMillions Jackpot
        </p>

      </div>

      {/* BODY */}

      <div className="p-6 md:p-10">

        {/* Winning Numbers */}

        <div>

          <p className="mb-6 text-center text-sm uppercase tracking-[4px] text-slate-400">
            Winning Numbers
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {numbers.map((number, index) => (

              <div
                key={index}
                className="
                flex h-16 w-16
                md:h-20 md:w-20
                items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-yellow-200
                via-yellow-400
                to-yellow-600
                text-2xl
                md:text-3xl
                font-black
                text-black
                shadow-[0_0_25px_rgba(255,193,7,.55)]
                transition-all
                duration-300
                hover:scale-110
                hover:-translate-y-1
                "
              >
                {number}
              </div>

            ))}

          </div>

        </div>

        {/* Lucky Stars */}

        <div className="mt-12">

          <p className="mb-6 text-center text-sm uppercase tracking-[4px] text-slate-400">
            Lucky Stars
          </p>

          <div className="flex justify-center gap-5">

            {stars.map((star, index) => (

              <div
                key={index}
                className="
                flex h-16 w-16
                md:h-20 md:w-20
                items-center justify-center
                rounded-full
                border-4
                border-yellow-400
                bg-white
                text-xl
                md:text-3xl
                font-black
                text-black
                shadow-[0_0_20px_rgba(255,193,7,.35)]
                transition-all
                duration-300
                hover:scale-110
                hover:rotate-6
                "
              >
                ★{star}
              </div>

            ))}

          </div>

        </div>

        {/* INFO CARDS */}

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-5 text-center">

            <p className="text-xs uppercase tracking-[3px] text-slate-400">
              Draw
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {result.draw_date}
            </h3>

          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-5 text-center">

            <p className="text-xs uppercase tracking-[3px] text-slate-400">
              Numbers
            </p>

            <h3 className="mt-2 text-xl font-bold text-yellow-400">
              5 + 2
            </h3>

          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-5 text-center">

            <p className="text-xs uppercase tracking-[3px] text-slate-400">
              Status
            </p>

            <h3 className="mt-2 text-xl font-bold text-green-400">
              VERIFIED
            </h3>

          </div>

        </div>

        {/* Verification */}

        <div className="mt-10 rounded-3xl border border-green-500/30 bg-green-500/10 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[4px] text-green-300">
                Verification
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Official EuroMillions Result
              </h3>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-lg">
              ✓
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}