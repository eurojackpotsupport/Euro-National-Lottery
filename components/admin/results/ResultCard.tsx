import type { Result } from "@/types/result";

type Props = {
  result: Result;
  onEdit: (result: Result) => void;
  onDelete: (result: Result) => void;
};

export default function ResultCard({
  result,
  onEdit,
  onDelete,
}: Props) {
  const numbers = [
    result.number1,
    result.number2,
    result.number3,
    result.number4,
    result.number5,
  ];

  const stars = [result.star1, result.star2];

  return (
    <div className="rounded-3xl border border-slate-700 bg-[#102b52] p-6 shadow-xl transition-all duration-300 hover:border-yellow-500/50 hover:shadow-2xl">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

        <div>
          <p className="text-xs uppercase tracking-[3px] text-slate-400">
            Draw Date
          </p>

          <h2 className="mt-1 text-2xl font-black text-white">
            {result.draw_date}
          </h2>

          <p className="mt-3 text-xs uppercase tracking-[3px] text-slate-400">
            Jackpot
          </p>

          <p className="mt-1 text-2xl font-black text-yellow-400">
            {result.jackpot}
          </p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-center">
          <p className="text-xs uppercase tracking-[3px] text-slate-400">
            Result ID
          </p>

          <p className="mt-1 text-lg font-bold text-white">
            #{result.id}
          </p>
        </div>

      </div>

      {/* Winning Numbers */}

      <div className="mt-8">

        <p className="mb-3 text-xs uppercase tracking-[3px] text-slate-400">
          Winning Numbers
        </p>

        <div className="flex flex-wrap gap-3">
          {numbers.map((num) => (
            <div
              key={num}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-700 text-xl font-black text-white shadow-lg"
            >
              {num}
            </div>
          ))}
        </div>

      </div>

      {/* Lucky Stars */}

      <div className="mt-8">

        <p className="mb-3 text-xs uppercase tracking-[3px] text-slate-400">
          Lucky Stars
        </p>

        <div className="flex gap-3">
          {stars.map((star) => (
            <div
              key={star}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-xl font-black text-black shadow-lg"
            >
              {star}
            </div>
          ))}
        </div>

      </div>

      {/* Actions */}

      <div className="mt-8 flex gap-4">

        <button
          onClick={() => onEdit(result)}
          className="flex-1 rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Edit Result
        </button>

        <button
          onClick={() => onDelete(result)}
          className="flex-1 rounded-xl bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"
        >
          Delete Result
        </button>

      </div>

    </div>
  );
}