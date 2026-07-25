"use client";

import UpcomingDrawCard from "../components/UpcomingDrawCard";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

import PredictionCountdown from "./PredictionCountdown";
import LastResults from "./LastResults";

type Jackpot = {
  id: number;
  jackpot_amount: string;
  draw_date: string;
  draw_time: string;
};

export default function VipPredictionCenter() {
  const [jackpot, setJackpot] = useState<Jackpot | null>(null);

  useEffect(() => {
    loadJackpot();
  }, []);

  async function loadJackpot() {
    const { data, error } = await supabase
      .from("jackpot")
      .select("*")
      .order("draw_date", { ascending: true })
      .limit(1)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setJackpot(data);
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* VERIFIED */}
        <div className="flex justify-center">
          <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-400">
              ● ACCESS VERIFIED
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-black text-white md:text-6xl">
            Official EuroMillions
          </h1>

          <h2 className="mt-2 text-3xl font-black text-yellow-400 md:text-5xl">
            VIP Result Center
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-300 leading-8">
            Your membership has been successfully verified.
            Premium predictions become available exactly
            <span className="font-bold text-yellow-400">
              {" "}5 hours before every official EuroMillions draw.
            </span>
          </p>
        </div>

        {/* Upcoming Jackpot */}
        <div className="mt-14 rounded-3xl border border-yellow-500/30 bg-[#10284B] p-8 shadow-2xl">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.35em] text-yellow-400">
              NEXT JACKPOT
            </p>

            <h3 className="mt-5 text-5xl font-black text-white md:text-7xl">
              {jackpot?.jackpot_amount ?? "Loading..."}
            </h3>

            <p className="mt-6 text-xl text-slate-200">
              {jackpot?.draw_date ?? "Loading..."}
            </p>

            <p className="mt-1 text-slate-400">
              Draw Time • {jackpot?.draw_time ?? "--:--"}
            </p>
          </div>

          {/* Countdown */}
          <div className="mt-10">
            <PredictionCountdown />
          </div>
        </div>

        {/* Last 10 Results */}
        <UpcomingDrawCard />
        <LastResults />
      </div>
    </section>
  );
}