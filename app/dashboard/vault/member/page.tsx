"use client";

import PredictionCountdown from "../components/PredictionCountdown";
import UpcomingDrawCard from "../components/UpcomingDrawCard";
import LastResults from "../components/LastResults";

export default function VipMemberPage() {
  return (
    <main className="min-h-screen bg-[#081B33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Access Verified */}
        <div className="flex justify-center">
          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-400">
              ● ACCESS VERIFIED
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-black md:text-6xl">
            Official EuroMillions
          </h1>

          <h2 className="mt-2 text-3xl font-black text-yellow-400 md:text-5xl">
            VIP Result Center
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            Welcome to your exclusive VIP area.
          </p>
        </div>

        {/* Prediction Countdown */}
        <div className="mt-12">
          <PredictionCountdown />
        </div>

        {/* Upcoming Draw */}
        <div className="mt-16">
          <UpcomingDrawCard />
        </div>

        {/* Last Results */}
        <div className="mt-16">
          <LastResults />
        </div>

      </div>
    </main>
  );
}