import type { Result } from "@/types/result";
import NumberBall from "./NumberBall";

type ResultRowProps = {
  draw: Result;
};

export default function ResultRow({ draw }: ResultRowProps) {
  return (
    <tr className="group border-b border-slate-700 transition-all duration-300 hover:bg-[#163765]">
      {/* Date */}
      <td className="whitespace-nowrap px-6 py-7">
        <div className="flex flex-col">
          <span className="font-semibold text-white">
            {new Date(draw.draw_date).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </span>

          <span className="text-sm text-slate-400">
            {new Date(draw.draw_date).getFullYear()}
          </span>
        </div>
      </td>

      {/* Winning Numbers */}
      <td className="px-6 py-7">
        <div className="flex items-center justify-center gap-3">
          <NumberBall number={draw.number1} />
          <NumberBall number={draw.number2} />
          <NumberBall number={draw.number3} />
          <NumberBall number={draw.number4} />
          <NumberBall number={draw.number5} />

          <div className="mx-3 h-8 w-px bg-slate-600" />

          <NumberBall number={draw.star1} type="star" />
          <NumberBall number={draw.star2} type="star" />
        </div>
      </td>

      {/* Jackpot */}
      <td className="px-6 py-7 text-right">
        <div className="flex flex-col items-end">
          <span className="text-xs uppercase tracking-[3px] text-slate-400">
            Jackpot
          </span>

          <span className="mt-1 text-2xl font-black text-yellow-300 transition-all duration-300 group-hover:text-yellow-200">
            {draw.jackpot}
          </span>
        </div>
      </td>
    </tr>
  );
}