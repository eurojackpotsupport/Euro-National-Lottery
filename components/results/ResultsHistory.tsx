"use client";

import { useMemo } from "react";
import type { Result } from "@/types/result";
import ResultRow from "./ResultRow";
import NumberBall from "./NumberBall";

type Props = {
  results: Result[];
};

export default function ResultsHistory({ results }: Props) {
  const groupedResults = useMemo(() => {
    const groups: Record<string, Result[]> = {};

    results.forEach((result) => {
      const month = new Date(result.draw_date).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      if (!groups[month]) {
        groups[month] = [];
      }

      groups[month].push(result);
    });

    return groups;
  }, [results]);

  return (
    <section className="mt-16">
      {Object.entries(groupedResults).map(([month, draws]) => (
        <div key={month} className="mb-14">

          {/* Month Title */}

          <h2 className="mb-6 border-b border-blue-500/60 pb-3 text-3xl font-black uppercase tracking-wide text-white">
            {month}
          </h2>

          {/* Desktop */}

<div className="hidden lg:block">
  <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-[#0d2343] shadow-xl">

    <table className="w-full border-collapse">

      <thead className="sticky top-0 z-10 bg-[#102b52]">
        <tr>

          <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[3px] text-slate-300">
            Date
          </th>

          <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-[3px] text-slate-300">
            Winning Numbers
          </th>

          <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-[3px] text-slate-300">
            Jackpot
          </th>

        </tr>
      </thead>

      <tbody>
        {draws.map((draw) => (
          <ResultRow
            key={draw.id}
            draw={draw}
          />
        ))}
      </tbody>

    </table>

  </div>
</div>

          {/* Mobile */}

          <div className="space-y-5 lg:hidden">
            {draws.map((draw) => (
              <div
                key={draw.id}
                className="rounded-2xl border border-slate-700 bg-[#102b52] p-6 shadow-lg"
              >
                <p className="mb-5 text-lg font-bold text-white">
                  {new Date(draw.draw_date).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <div className="mb-4 flex flex-wrap gap-3">
                  <NumberBall number={draw.number1} />
                  <NumberBall number={draw.number2} />
                  <NumberBall number={draw.number3} />
                  <NumberBall number={draw.number4} />
                  <NumberBall number={draw.number5} />
                </div>

                <div className="mb-6 flex gap-3">
                  <NumberBall number={draw.star1} type="star" />
                  <NumberBall number={draw.star2} type="star" />
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <p className="text-xs uppercase tracking-[3px] text-slate-400">
                    Jackpot
                  </p>

                  <p className="mt-2 text-3xl font-black text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,.45)]">
                    {draw.jackpot}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </section>
  );
}