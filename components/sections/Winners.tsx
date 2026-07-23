"use client";

import { useWinners } from "@/hooks/useWinners";

export default function Winners() {
  const { winners, loading } = useWinners();

  if (loading) {
    return (
      <section className="bg-[#081B33] py-24 text-center text-white">
        <h2 className="text-3xl font-bold">Loading winners...</h2>
      </section>
    );
  }

  if (winners.length === 0) {
    return (
      <section className="bg-[#081B33] py-24 text-center text-white">
        <h2 className="text-3xl font-bold">No winners found.</h2>
      </section>
    );
  }

  return (
    <section className="bg-[#081B33] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
            VERIFIED MEMBERS
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Winners
          </h2>

          <p className="mt-6 text-slate-300">
            Meet our latest EuroMillions winners.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className="rounded-3xl bg-[#102b52] border border-yellow-500 p-8"
            >
              <img
                src={winner.winner_photo}
                alt={winner.winner_name}
                className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-yellow-500"
              />

              <h3 className="mt-6 text-center text-3xl font-bold text-white">
                {winner.winner_name}
              </h3>

              <p className="mt-2 text-center text-slate-300">
                {winner.country}
              </p>

              <h4 className="mt-6 text-center text-4xl font-bold text-yellow-400">
                {winner.prize}
              </h4>

              <p className="mt-4 text-center text-slate-400">
                {winner.draw_date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}