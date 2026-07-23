"use client";

const draws = [
  {
    draw: "Friday • 10 Jul 2026",
    jackpot: "€150,000,000",
    numbers: ["4", "12", "19", "26", "41"],
    stars: ["3", "11"],
  },
  {
    draw: "Tuesday • 7 Jul 2026",
    jackpot: "€128,000,000",
    numbers: ["6", "15", "18", "33", "45"],
    stars: ["2", "9"],
  },
  {
    draw: "Friday • 3 Jul 2026",
    jackpot: "€102,000,000",
    numbers: ["1", "8", "24", "37", "48"],
    stars: ["5", "12"],
  },
];

export default function ResultsPage() {
  return (
    <div className="space-y-8">

      <div>
        <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
          Official Results
        </p>

        <h1 className="mt-2 text-5xl font-extrabold text-white">
          EuroMillions Results
        </h1>

        <p className="mt-3 text-slate-400">
          Latest official EuroMillions winning numbers.
        </p>
      </div>

      {draws.map((draw, index) => (
        <div
          key={index}
          className="rounded-3xl border border-yellow-500/20 bg-[#112B52] p-8 shadow-xl"
        >

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>

              <h2 className="text-2xl font-bold text-white">
                {draw.draw}
              </h2>

              <p className="mt-2 text-yellow-400 font-bold text-xl">
                Jackpot: {draw.jackpot}
              </p>

            </div>

          </div>

          <div className="mt-8">

            <p className="text-slate-400 mb-4">
              Winning Numbers
            </p>

            <div className="flex flex-wrap gap-4">

              {draw.numbers.map((number) => (
                <div
                  key={number}
                  className="h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xl font-black"
                >
                  {number}
                </div>
              ))}

            </div>

          </div>

          <div className="mt-8">

            <p className="text-slate-400 mb-4">
              Lucky Stars
            </p>

            <div className="flex gap-4">

              {draw.stars.map((star) => (
                <div
                  key={star}
                  className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-black text-xl font-black"
                >
                  {star}
                </div>
              ))}

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}