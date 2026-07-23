"use client";

import { useEffect, useState } from "react";
import { defaultJackpot, Jackpot } from "@/data/jackpot";

export default function JackpotForm() {
  const [jackpot, setJackpot] = useState<Jackpot>(defaultJackpot);

  useEffect(() => {
    const saved = localStorage.getItem("jackpot");

    if (saved) {
      setJackpot(JSON.parse(saved));
    }
  }, []);

  function saveJackpot(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem(
      "jackpot",
      JSON.stringify(jackpot)
    );

    alert("Jackpot updated successfully.");
  }

  return (
    <main className="min-h-screen bg-[#081B33] p-8">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-black text-white">
          Jackpot Manager
        </h1>

        <p className="mt-2 text-slate-400">
          Update weekly jackpot information.
        </p>

        <form
          onSubmit={saveJackpot}
          className="mt-10 space-y-6 rounded-3xl border border-yellow-500/20 bg-[#102b52] p-8"
        >

          <div>

            <label className="mb-2 block text-slate-300">
              Jackpot Amount
            </label>

            <input
              value={jackpot.amount}
              onChange={(e) =>
                setJackpot({
                  ...jackpot,
                  amount: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-slate-300">
              Next Draw
            </label>

            <input
              value={jackpot.nextDraw}
              onChange={(e) =>
                setJackpot({
                  ...jackpot,
                  nextDraw: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-slate-300">
              Draw Time
            </label>

            <input
              value={jackpot.drawTime}
              onChange={(e) =>
                setJackpot({
                  ...jackpot,
                  drawTime: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-500"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400"
          >
            Save Jackpot
          </button>

        </form>

      </div>

    </main>
  );
}