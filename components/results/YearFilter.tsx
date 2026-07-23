"use client";

import { CalendarDays, ChevronDown } from "lucide-react";

type Props = {
  years: number[];
  selectedYear: number;
  onChange: (year: number) => void;
};

export default function YearFilter({
  years,
  selectedYear,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h2 className="text-4xl font-black text-white">
          EuroMillions Results History
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          Browse official EuroMillions draw results by year. All winning
          numbers and jackpot amounts are listed in chronological order.
        </p>
      </div>

      <div className="w-full lg:w-72">
        <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-slate-400">
          <CalendarDays size={16} />
          Select Year
        </label>

        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => onChange(Number(e.target.value))}
            className="
              h-14
              w-full
              appearance-none
              rounded-2xl
              border
              border-blue-500/40
              bg-[#102b52]
              px-5
              pr-12
              text-lg
              font-bold
              text-white
              outline-none
              transition-all
              duration-300
              hover:border-blue-400
              focus:border-yellow-400
              focus:ring-4
              focus:ring-yellow-400/20
            "
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <ChevronDown
            size={20}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-yellow-400"
          />
        </div>
      </div>
    </div>
  );
}