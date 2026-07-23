"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Jackpot = {
  amount: string;
  next_draw: string;
  time: string;
};

export default function HomeHeroCard() {
  const [jackpot, setJackpot] = useState<Jackpot | null>(null);

  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    loadJackpot();
  }, []);

  useEffect(() => {
    if (!jackpot?.next_draw) return;

    const updateCountdown = () => {
      const target = new Date(jackpot.next_draw).getTime();
      const now = Date.now();

      const distance = target - now;

      if (distance <= 0) {
        setCountdown({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setCountdown({
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [jackpot]);

  async function loadJackpot() {
    const { data } = await supabase
      .from("jackpot")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    setJackpot(data);
  }

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#071B34] via-[#10345E] to-[#1A4C80] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-sky-400/10 blur-[120px]" />

        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-yellow-400/10 blur-[100px]" />

        <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-white/40" />
        <div className="absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-white/40" />
        <div className="absolute left-[30%] bottom-[22%] h-2 w-2 rounded-full bg-yellow-300/40" />
        <div className="absolute right-[14%] bottom-[18%] h-2 w-2 rounded-full bg-white/30" />

      </div>

      <div className="relative z-10">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
            Official EuroMillions Jackpot
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-yellow-400">
            {jackpot?.amount ?? "€0"}
          </h2>

          <p className="mt-3 text-slate-300">
            Current Estimated Jackpot Prize
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_0.9fr_1fr]">

          {/* Status */}

          <div className="rounded-2xl border border-emerald-500/30 bg-[#081B33] p-5 text-center flex flex-col justify-center min-h-[130px]">

            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Status
            </p>

            <div className="mt-5 flex justify-center items-center gap-3">

              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
              </span>

              <span className="text-3xl font-black text-emerald-400">
                LIVE
              </span>

            </div>

          </div>

          {/* Countdown */}

          <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-4 min-h-[130px]">

            <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-slate-400">
              Countdown
            </p>

            <div className="flex items-center justify-center gap-4">

              {[
                { value: countdown.hours, label: "H" },
                { value: countdown.minutes, label: "M" },
                { value: countdown.seconds, label: "S" },
              ].map((item) => (
                <div key={item.label} className="text-center">

                   <div className="flex h-14 w-14 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#10284A] text-2xl sm:text-lg font-black text-yellow-400">
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <p className="mt-1 text-[10px] sm:text-[9px] uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Draw */}

          <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-5 flex flex-col justify-center items-center min-h-[130px]">

  <div className="text-center">

    <p className="text-sm sm:text-xs uppercase tracking-[0.35em] text-slate-400">
      Draw Time
    </p>

    <h3 className="mt-4 text-3xl sm:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">
  {jackpot?.time ?? "--"}
</h3>

  </div>

</div>
        </div>

        {/* Winning Numbers */}

        <div className="mt-12">

          <p className="mb-6 text-center text-slate-400">
            Official Winning Number Format
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {[1,2,3,4,5].map((n)=>(
              <div
                key={n}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 text-2xl font-black text-black shadow-[0_8px_20px_rgba(255,193,7,0.45)] ring-2 ring-yellow-300/60 transition hover:scale-110"
              >
                ?
              </div>
            ))}

            {[1,2].map((n)=>(
              <div
                key={n}
                className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-yellow-400 bg-white text-2xl font-black text-black shadow-lg transition hover:scale-110"
              >
                ★
              </div>
            ))}

          </div>

        </div>

        {/* Button */}

        <div className="mt-12 flex justify-center">

          <a
            href="/membership"
            className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-10 py-4 text-xl font-black text-black shadow-[0_15px_35px_rgba(255,193,7,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Play EuroMillions
          </a>

        </div>

      </div>

    </div>
  );
}