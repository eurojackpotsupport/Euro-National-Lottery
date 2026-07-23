"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import HeroCard from "@/components/results/HeroCard";
import ResultsHistory from "@/components/results/ResultsHistory";
import YearFilter from "@/components/results/YearFilter";
import Navbar from "@/components/navigation/Navbar";
import type { Result } from "@/types/result";

type Jackpot = {
  amount: string;
  next_draw: string;
  time: string;
};

export default function ResultsPage() {
  const currentYear = new Date().getFullYear();

  const [results, setResults] = useState<Result[]>([]);
  const [jackpot, setJackpot] = useState<Jackpot | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    loadPage();
  }, []);

  async function loadPage() {
    setLoading(true);

    const [{ data: resultsData }, { data: jackpotData }] =
      await Promise.all([
        supabase
          .from("results")
          .select("*")
          .order("draw_date", { ascending: false }),

        supabase
          .from("jackpot")
          .select("*")
          .eq("id", 1)
          .maybeSingle(),
      ]);

    setResults((resultsData || []) as Result[]);
    setJackpot(jackpotData);

    setLoading(false);
  }

  const filteredResults = results.filter((result) => {
    return (
      new Date(result.draw_date).getFullYear() === selectedYear
    );
  });

  const years = Array.from(
    new Set(
      results.map((result) =>
        new Date(result.draw_date).getFullYear()
      )
    )
  ).sort((a, b) => b - a);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#081B33]">
        <p className="text-2xl text-white">
          Loading...
        </p>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081B33] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-28">

          <p className="text-sm uppercase tracking-[6px] text-yellow-400">
            Official Results
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            EuroMillions Results
          </h1>

          <p className="mt-3 text-slate-400">
            Latest official EuroMillions winning numbers.
          </p>

          <div className="mt-10">
            <HeroCard
              jackpot={jackpot?.amount ?? "€0"}
              nextDraw={jackpot?.next_draw ?? ""}
              time={jackpot?.time ?? ""}
            />
          </div>



          {/* Results History */}

          <section className="mt-20">

            <YearFilter
              years={years}
              selectedYear={selectedYear}
              onChange={setSelectedYear}
            />

            <ResultsHistory
              results={filteredResults}
            />

          </section>

        </div>
      </main>
    </>
  );
}