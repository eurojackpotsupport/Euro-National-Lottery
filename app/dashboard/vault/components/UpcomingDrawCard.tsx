"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

type Jackpot = {
  next_draw: string;
  amount: string;
  time: string;
};
export default function UpcomingDrawCard() {
  const [jackpot, setJackpot] = useState<Jackpot | null>(null);

  useEffect(() => {
    loadJackpot();
  }, []);

  async function loadJackpot() {
    const { data, error } = await supabase
  .from("jackpot")
  .select("next_draw, amount, time")
  .single();

if (error) {
  console.error(error);
  return;
}

setJackpot(data);
  }

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
      {/* Heading */}
      {/* Heading */}
<div className="mb-8 text-center">

  {/* Upcoming Badge */}
  <div className="inline-flex items-center rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2">
    <span className="text-xs font-bold tracking-[0.25em] text-yellow-400">
      UPCOMING DRAW
    </span>
  </div>

  {/* Live Status */}
  <div className="mt-5 flex items-center justify-center gap-2">
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
    </span>

    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
      Live Official Draw Status
    </span>
  </div>

  {/* Title */}
  <h2 className="mt-5 text-3xl md:text-4xl font-black text-white md:text-3xl md:text-4xl md:text-5xl">
    Next EuroMillions Draw
  </h2>
</div>

      {/* Card */}
      <div
  className="
    relative
    overflow-hidden
    mx-auto
    w-full
    max-w-xl
    rounded-[34px]
    border
    border-yellow-400/30 before:absolute before:inset-0 before:rounded-[34px] before:p-[1px]
    bg-gradient-to-b
    from-[#183964]
    via-[#153359]
    to-[#10284B]
    p-3 md:p-3
    shadow-[0_35px_100px_rgba(0,0,0,.75),0_0_70px_rgba(255,193,7,.18)]
    transition-all
    duration-500
   hover:-translate-y-2
hover:scale-[1.01]
    hover:border-yellow-400/50
    hover:shadow-[0_25px_90px_rgba(255,193,7,.18)]
  "
>
  {/* Gold Ambient Glow */}
<div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[90px]" />

{/* Bottom Glow */}
<div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

{/* Gold Shine Border */}
<div className="pointer-events-none absolute inset-0 rounded-[34px] border border-yellow-300/10" />

<div className="pointer-events-none absolute inset-0 rounded-[34px] bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent opacity-40" />

{/* Floating Particles */}
<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[34px]">

  <div className="absolute left-[12%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-yellow-300/70 blur-[1px]" />

  <div className="absolute right-[15%] top-[28%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/70 blur-[1px]" style={{ animationDelay: "1s" }} />

  <div className="absolute left-[25%] bottom-[20%] h-2 w-2 animate-pulse rounded-full bg-yellow-400/60 blur-[1px]" style={{ animationDelay: "2s" }} />

  <div className="absolute right-[28%] bottom-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/60 blur-[1px]" style={{ animationDelay: "1.5s" }} />

</div>
<div className="relative z-10">
        {/* Locked Main Balls */}
        <div className="mx-auto mb-4 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
        {/* Premium Locked Balls */}
<div className="flex justify-center gap-3">
  {Array.from({ length: 5 }).map((_, i) => (
    <div
  key={i}
  className="
    relative
    flex
    h-12 
    w-12 
    md:h-16 
    md:w-16
    items-center
    justify-center
    rounded-full
    border
    border-yellow-300/60
    bg-gradient-to-br
    from-[#FFF3B0]
    via-[#FFD43B]
    to-[#E6A700]
    shadow-[0_0_18px_rgba(255,193,7,.45)]
    transition-all
    duration-500
    hover:-translate-y-2
    hover:scale-105
    hover:shadow-[0_0_35px_rgba(255,215,0,.8)]
    before:absolute
    before:inset-[3px]
    before:rounded-full
    before:border
    before:border-white/20
  "
>
  {/* Top Reflection */}
  <div className="absolute left-3 top-2 h-4 w-4 rounded-full bg-white/60 blur-[1px]" />

  {/* Bottom Reflection */}
  <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-yellow-100/70 blur-[1px]" />

  {/* Lock */}
  <Lock
    size={24}
    strokeWidth={2.8}
    className="relative z-10 text-[#081B33]"
  />
</div>
  ))}
</div>
        {/* Locked Lucky Stars */}
        <div className="mt-3 flex justify-center gap-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
  key={i}
  className="relative h-16 w-16 md:h-20 md:w-20 transition-all duration-300 transition-all
duration-500
hover:-translate-y-2
hover:scale-105
drop-shadow-[0_0_12px_rgba(255,215,0,.5)] drop-shadow-[0_0_10px_rgba(255,215,0,.45)]"
>
              <Image
  src="/star-ball.png"
  alt="Lucky Star"
  fill
  className="object-contain"
  priority
/>

              <div className="absolute inset-0 flex items-center justify-center">
                <Lock
                  size={18}
                  strokeWidth={2.8}
                  className="text-black"
                />
              </div>
            </div>
          ))}
        </div>

{/* VIP Status */}
<div className="mt-5 md:mt-8 rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

  <div className="flex items-center justify-between">

    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
        Vault Status
      </p>

      <h4 className="mt-1 text-lg font-bold text-yellow-400">
        SECURE LOCKED
      </h4>
    </div>

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/15 border border-yellow-400/30">
      <Lock
        size={22}
        className="text-yellow-400"
      />
    </div>

  </div>

  <div className="mt-3 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

  <p className="mt-3 text-sm leading-5 text-slate-300">
  <span className="font-bold text-white">
    Predictions become available exactly
  </span>{" "}
  <span className="font-bold text-yellow-400">
    5 hours before
  </span>{" "}
  <span className="font-bold text-white">
    the official EuroMillions draw.
  </span>
</p>
</div>
{/* Draw Information */}
<div className="mt-4 grid grid-cols-2 gap-3">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
      Draw Time
    </p>

    <p className="mt-2 text-lg font-black text-white">
  {jackpot?.time ?? "Loading..."}
</p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
      Status
    </p>

    <div className="mt-2 flex items-center justify-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>

      <span className="font-black text-emerald-400">
        Scheduled
      </span>
    </div>
  </div>

</div>
{/* Next Draw */}
<div className="mt-4 text-center">
          <p className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,.5)]">
  OFFICIAL DRAW DATE
</p>
<h3 className="mt-2 text-xl md:text-2xl font-extrabold text-white">
            {jackpot?.next_draw
  ? formatDrawDate(jackpot.next_draw)
  : "Loading..."}
          </h3>
        </div>

        {/* Divider */}
        <div className="relative my-5">
  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,.9)]" />
</div>

        {/* Jackpot */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-black uppercase tracking-[0.18em] text-yellow-400 drop-shadow-[0_0_8px_rgba(255,193,7,.45)]">
  ESTIMATED JACKPOT
</p>

<h3 className="mt-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-5xl md:text-6xl animate-pulse tracking-tight font-black text-transparent">
            {jackpot?.amount ?? "Loading..."}
          </h3>
          <div className="mx-auto mt-3 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>
      </div>
      </div>
    </section>
  );
}
