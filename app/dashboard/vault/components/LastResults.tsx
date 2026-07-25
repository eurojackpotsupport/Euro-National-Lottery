"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

type Result = {
  id: number;
  position: number;

  draw_date: string;
  jackpot: string;

  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;

  star1: number;
  star2: number;
};
export default function LastResults() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    loadResults();
  }, []);

  async function loadResults() {
    const { data, error } = await supabase
  .from("latest_results")
  .select(`
    id,
    position,
    draw_date,
    jackpot,
    number1,
    number2,
    number3,
    number4,
    number5,
    star1,
    star2
  `)
  .order("position", { ascending: true });

if (error) {
  console.error("Failed to load results:", error);
  return;
}

if (data) {
  setResults(data);
}
  }
const winnerMessages = [
  "Official VIP member successfully claimed this jackpot.",
  "Winning ticket verified by EuroMillions VIP.",
  "Prize successfully collected by a registered VIP member.",
  "VIP prediction matched the official winning numbers.",
  "Jackpot successfully paid to an active VIP member.",
  "Verified winner claim completed successfully.",
  "Another successful VIP prediction winner.",
  "Official prize claim verified and completed.",
  "Congratulations to our latest VIP winner.",
  "Verified EuroMillions VIP success story.",
];
function formatDrawDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
  return (
    <section className="mt-14">

      <div className="mb-8 text-center">

        <p className="text-sm font-bold tracking-[0.3em] text-yellow-400">
          OFFICIAL HISTORY
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Previous Jackpot Results
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {results.map((item, index) => (
          <div
            key={item.id}
            className="rounded-3xl border border-yellow-500/20 bg-[#10284B] p-6 shadow-xl"
          >

            <div className="text-center">

              <p className="text-sm text-slate-400">
                {formatDrawDate(item.draw_date)}
              </p>

              <div className="mt-6 flex justify-center gap-3 flex-wrap">

                {[item.number1, item.number2, item.number3, item.number4, item.number5].map((n, i) => (
                  <div
                    key={i}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-black"
                  >
                    {n}
                  </div>
                ))}

              </div>

              <div className="mt-6 flex justify-center items-center gap-2">

  {[item.star1, item.star2].map((n, i) => (
    <div
      key={i}
      className="relative flex h-20 w-20 items-center justify-center"
    >
      <img
  src="/star-ball.png"
  alt="Lucky Star"
  className="absolute inset-0 w-full h-full object-contain"
/>

      <span
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    pt-[2px]
    text-[24px]
    font-black
    leading-none
    text-[#081B33]
    drop-shadow-[0_1px_1px_rgba(255,255,255,0.35)]
  "
>
  {n}
</span>
    </div>
  ))}

</div>

              <div className="mt-8">

  {/* Premium Winner Badge */}
  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
    <span className="text-lg">✔</span>

    <span className="text-xs font-bold tracking-[0.18em] text-emerald-400 uppercase">
      VERIFIED VIP WINNER
    </span>
  </div>

  {/* Jackpot */}
  <div className="mt-5">
    <p className="text-xs tracking-[0.28em] text-slate-400 uppercase">
      JACKPOT
    </p>

    <h3 className="mt-2 text-2xl font-black text-yellow-400">
      {item.jackpot}
    </h3>
  </div>

  {/* Description */}
  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-300">
  {winnerMessages[index % winnerMessages.length]}
</p>

</div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}