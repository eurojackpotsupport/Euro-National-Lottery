"use client";

type Props = {
  results: any;
};

export default function LatestDrawCard({ results }: Props) {
  if (!results) return null;

  return (
    <div className="rounded-3xl border border-yellow-500/20 bg-[#102C57]/80 p-8">

      <p className="text-sm uppercase tracking-[5px] text-yellow-400 font-semibold">
        Latest Draw
      </p>

      <h2 className="mt-2 text-xl font-bold text-white">
        {results.draw_date}
      </h2>

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
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-[#081B33]"
          >
            {num}
          </div>
        ))}

      </div>

      <div className="mt-8 flex gap-4">
  {[results.star1, results.star2].map((star, index) => (
    <div
      key={index}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black"
    >
      {star}
    </div>
  ))}
</div>

      <div className="mt-8 rounded-2xl bg-[#0B1E39] p-5">

        <p className="text-xs uppercase tracking-[3px] text-slate-400">
          Jackpot
        </p>

        <h3 className="mt-2 text-3xl font-black text-yellow-400">
          {results.jackpot}
        </h3>

      </div>

    </div>
  );
}