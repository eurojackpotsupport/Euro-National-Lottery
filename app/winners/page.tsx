"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";

type Winner = {
  id: number;
  winner_name: string;
  winner_photo: string;
  member_id: string;
  country: string;
  prize: string;
  draw_date: string;
  is_visible: boolean;
  display_order: number;
};

export default function WinnersPage() {

const [winners, setWinners] = useState<Winner[]>([]);

useEffect(() => {
  loadWinners();
}, []);

async function loadWinners() {
  const { data, error } = await supabase
    .from("winners")
    .select("*")
    .eq("is_visible", true)
    .order("display_order", { ascending: true });
  setWinners(data ?? []);
}

/* 👇 PASTE HERE */

const featuredWinner =
  winners.find((w: any) => w.is_featured) || winners[0];

const otherWinners = winners.filter(
  (w) => w.id !== featuredWinner?.id
);

/* 👆 END */

  return (
    <>
      <Navbar />

      <main className="bg-[#071A33] min-h-screen">

        {/* Hero */}

        <section className="relative overflow-hidden pt-36 pb-24">

          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 text-center">

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Official EuroMillions Winners
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black text-white">
              Hall of
              <span className="block text-yellow-400">
                Winners
              </span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-slate-300">
              Meet our verified members who have successfully claimed
              EuroMillions prizes through the official membership program.
            </p>

          </div>

        </section>

        {/* Statistics */}

<section className="pb-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-8 text-center hover:border-yellow-400 transition">
        <p className="text-5xl mb-4">👑</p>
        <h3 className="text-4xl font-black text-yellow-400">
          12,548+
        </h3>
        <p className="mt-3 text-slate-300">
          Verified Winners
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-8 text-center hover:border-yellow-400 transition">
        <p className="text-5xl mb-4">💰</p>
        <h3 className="text-4xl font-black text-yellow-400">
          €487M+
        </h3>
        <p className="mt-3 text-slate-300">
          Prize Paid
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-8 text-center hover:border-yellow-400 transition">
        <p className="text-5xl mb-4">🌍</p>
        <h3 className="text-4xl font-black text-yellow-400">
          120+
        </h3>
        <p className="mt-3 text-slate-300">
          Countries
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-8 text-center hover:border-yellow-400 transition">
        <p className="text-5xl mb-4">🏆</p>
        <h3 className="text-4xl font-black text-yellow-400">
          €210M
        </h3>
        <p className="mt-3 text-slate-300">
          Biggest Jackpot
        </p>
      </div>

    </div>

  </div>
</section>

{/* Winners List */}

{/* Winners List */}

<section className="pb-28">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
        Verified Members
      </span>

      <h2 className="mt-4 text-5xl font-black text-white">
        Latest Winners
      </h2>

      <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
        Every winner below has successfully claimed their official
        EuroMillions prize.
      </p>
    </div>
    {featuredWinner && (
  <div className="mb-16 overflow-hidden rounded-3xl border border-yellow-500/30 bg-[#10284A] shadow-2xl">

    <div className="grid grid-cols-1 lg:grid-cols-2">

      <div className="relative">
        <img
  src={featuredWinner.winner_photo || "/images/no-image.jpg"}
  alt={featuredWinner.winner_name}
  className="h-[280px] sm:h-[420px] lg:h-[520px] w-full object-cover"
/>

        <div className="absolute left-6 top-6 rounded-full bg-yellow-500 px-5 py-2 font-bold text-black">
          🏆 FEATURED WINNER
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">

  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white break-words">
    {featuredWinner.winner_name}
  </h2>

  <p className="mt-2 sm:mt-3 text-lg sm:text-xl text-slate-300">
    {featuredWinner.country}
  </p>

  <h3 className="mt-6 sm:mt-8 text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-400 break-all">
    {featuredWinner.prize}
  </h3>

  <div className="mt-8 sm:mt-10 space-y-3">

    <p className="text-base sm:text-lg text-slate-300 break-words">
      📅 Draw Date: {featuredWinner.draw_date}
    </p>

    <p className="text-base sm:text-lg text-slate-300 break-all">
      🆔 Member ID: {featuredWinner.member_id}
    </p>

    <p className="text-base sm:text-lg font-bold text-green-400">
      ✔ Prize Successfully Claimed
    </p>

  </div>

</div>

    </div>

  </div>
)}

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {otherWinners.map((winner) => (
        <div
          key={winner.id}
          className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#10284A] hover:border-yellow-400 transition duration-300 hover:-translate-y-1"
        >
          <div className="relative h-72 bg-slate-800">
            <img
  src={winner.winner_photo || "/images/no-image.jpg"}
  alt={winner.winner_name}
  className="w-full h-full object-cover"
/>
          </div>

          <div className="p-8">

            <span className="inline-block rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
              ✓ VERIFIED WINNER
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              {winner.winner_name}
            </h3>

            <p className="mt-2 text-slate-400">
              {winner.country}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div>
                <p className="text-slate-500 text-sm">
                  Prize
                </p>

                <h4 className="text-yellow-400 text-2xl font-bold">
                  {winner.prize}
                </h4>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Draw
                </p>

                <h4 className="text-white font-semibold">
                  {winner.draw_date}
                </h4>
              </div>

            </div>

            <div className="mt-6 border-t border-slate-700 pt-4">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Member ID
              </p>

              <p className="font-semibold text-white">
                {winner.member_id}
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

      </main>

    </>
  );
}