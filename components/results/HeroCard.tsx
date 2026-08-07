"use client";

import { useEffect, useState } from "react";

type Props = {
  jackpot: string;
  nextDraw: string;
  time: string;
};

export default function HeroCard({
  jackpot,
  nextDraw,
  time,
}: Props) {
  const whatsapp = "https://wa.me/1234567890";
  const [countdown, setCountdown] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const timer = setInterval(() => {
    const target = new Date(
  `${nextDraw}T${time}:00+02:00`
).getTime();

const now = Date.now();

const distance = target - now;

if (isNaN(target) || distance <= 0) return;

    setCountdown({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (distance % (1000 * 60)) /
          1000
      ),
    });
  }, 1000);

  return () => clearInterval(timer);
}, [nextDraw]);

  return (
    <section
  className="
relative
overflow-hidden
rounded-[32px]
border
border-yellow-500/20
shadow-[0_25px_80px_rgba(0,0,0,0.45)]
bg-gradient-to-br
from-[#071B34]
via-[#10345E]
to-[#1A4C80]
"
>
{/* Background Glow */}

  <div className="absolute inset-0 overflow-hidden">

  <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-[170px]" />

  <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-yellow-400/10 blur-[130px]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/stardust.png')",
    }}
  />

  {/* Decorative Stars */}

  <div className="absolute left-[10%] top-[18%] h-2 w-2 rounded-full bg-white/40" />
  <div className="absolute left-[75%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/40" />
  <div className="absolute left-[35%] bottom-[28%] h-2 w-2 rounded-full bg-yellow-300/40" />
  <div className="absolute right-[18%] bottom-[18%] h-2 w-2 rounded-full bg-white/30" />

</div>
      <div className="relative z-10 p-6 md:p-10">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
            Official EuroMillions Jackpot
          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-black text-yellow-400">
            {jackpot}
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Current Estimated Jackpot Prize
          </p>

        </div>

<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">

  {/* Status */}

  <div className="flex h-[150px] flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-[#081B33] p-6">

    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
      Status
    </p>

    <div className="mt-5 flex items-center gap-3">

      <span className="relative flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
      </span>

      <span className="text-4xl font-black text-emerald-400">
        LIVE
      </span>

    </div>

  </div>

{/* Countdown */}

<div className="flex h-[150px] flex-col items-center justify-center rounded-2xl border border-yellow-500/20 bg-[#081B33] p-6">

  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-slate-400">
    Countdown
  </p>

  <div className="flex items-center justify-center gap-1 sm:gap-2">

    {[
  { value: countdown.days, label: "D" },
  { value: countdown.hours, label: "H" },
  { value: countdown.minutes, label: "M" },
  { value: countdown.seconds, label: "S" },
    ].map((item) => (
      <div key={item.label} className="text-center">

        <div className="flex h-16 w-16 lg:h-18 lg:w-18 items-center justify-center rounded-xl bg-[#10284A] text-2xl font-black text-yellow-400">
          {String(item.value).padStart(2, "0")}
        </div>

        <p className="mt-2 text-[10px] uppercase text-slate-400">
          {item.label}
        </p>

      </div>
    ))}

  </div>

</div>

  {/* Draw Time */}

<div className="flex h-[150px] flex-col items-center justify-center rounded-2xl border border-yellow-500/20 bg-[#081B33] p-6">

  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
    Draw Time
  </p>

  <h3 className="mt-4 text-2xl xl:text-3xl font-black text-white whitespace-nowrap">
    {time}
  </h3>

<p className="mt-2 text-sm uppercase tracking-[0.2em] font-semibold text-slate-300">
  UTC+2 (CEST)
</p>

</div>

</div>
        <div className="mt-16">

          <p className="mb-6 text-center text-slate-400">
            Official Winning Number Format
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 text-2xl font-black text-black shadow-[0_8px_20px_rgba(255,193,7,0.45)] ring-2 ring-yellow-300/60 transition-all duration-300 hover:scale-110"
               >
                ?
              </div>
            ))}

            {[1, 2].map((n) => (
              <div
                key={n}
                className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-yellow-400 bg-gradient-to-br from-white to-slate-100 text-2xl font-black text-black shadow-[0_8px_18px_rgba(255,193,7,0.25)] transition-all duration-300 hover:scale-110"
              >
                ★
              </div>
            ))}

          </div>

        </div>

        <div className="mt-14 flex justify-center">

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
rounded-2xl
bg-gradient-to-r
from-yellow-400
to-yellow-500
px-12
py-5
text-xl
font-black
text-black
shadow-[0_15px_35px_rgba(255,193,7,0.45)]
transition-all
duration-300
hover:-translate-y-1
hover:scale-105
hover:shadow-[0_20px_45px_rgba(255,193,7,0.7)]
"
          >
            Play EuroMillions
          </a>

        </div>

      </div>

    </section>
  );
}