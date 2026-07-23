"use client";

import type { Result } from "@/types/result";

type Props = {
  results: Result[];
  onEdit: (result: Result) => void;
  onDelete: (result: Result) => void;
};

export default function ResultsTable({
  results,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-[#102b52] shadow-xl">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-[#081B33]">

            <tr>

              <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[3px] text-slate-400">
                Date
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-[3px] text-slate-400">
                Winning Numbers
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-[3px] text-slate-400">
                Stars
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-[3px] text-slate-400">
                Jackpot
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-[3px] text-slate-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {results.map((result) => (

              <tr
                key={result.id}
                className="border-t border-slate-700 transition hover:bg-[#14345d]"
              >

                <td className="px-6 py-5 font-semibold text-white whitespace-nowrap">
                  {new Date(result.draw_date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-2">

                    {[
                      result.number1,
                      result.number2,
                      result.number3,
                      result.number4,
                      result.number5,
                    ].map((num) => (

                      <div
                        key={num}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-700 text-sm font-black text-white shadow"
                      >
                        {num}
                      </div>

                    ))}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-2">

                    {[result.star1, result.star2].map((star) => (

                      <div
                        key={star}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-sm font-black text-black shadow"
                      >
                        {star}
                      </div>

                    ))}

                  </div>

                </td>

                <td className="px-6 py-5 text-right font-black text-yellow-400 whitespace-nowrap">
                  {result.jackpot}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-end gap-3">

                    <button
                      onClick={() => onEdit(result)}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(result)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}