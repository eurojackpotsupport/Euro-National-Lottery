"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";
export default function PredictionCountdown() {
 

  const [timeLeft, setTimeLeft] = useState(0);
  const [settings, setSettings] = useState({
  title: "RESULT RELEASE",
  subtitle:
    "Results are released exactly 5 hours before every official EuroMillions Draw.",
  draw_date: "",
  draw_time: "",
  status: "locked",
});

useEffect(() => {
  let countdownTimer: NodeJS.Timeout;
  let refreshTimer: NodeJS.Timeout;

  async function loadSettings() {
    const { data, error } = await supabase
      .from("vault_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    console.log("Vault data:", data);
    console.log("Vault error:", error);

    if (!data) return;

    setSettings({
      title: data.title ?? "RESULT RELEASE",
      subtitle:
        data.subtitle ??
        "Results are released exactly 5 hours before every official EuroMillions Draw.",
      draw_date: data.draw_date ?? "",
      draw_time: data.draw_time ?? "",
      status: data.status ?? "locked",
    });

    if (!data.draw_date || !data.draw_time) {
      setTimeLeft(0);
      return;
    }

    const updateCountdown = () => {
      const drawDate = new Date(
        `${data.draw_date}T${data.draw_time}`
      );

      // Prediction release = Draw - 5 hours
      drawDate.setHours(drawDate.getHours() - 5);

      const now = Date.now();
      let target = drawDate.getTime();

      if (target < now) {
        drawDate.setDate(drawDate.getDate() + 1);
        target = drawDate.getTime();
      }

      setTimeLeft(Math.max(0, target - now));
    };

    updateCountdown();

    if (countdownTimer) clearInterval(countdownTimer);

    countdownTimer = setInterval(updateCountdown, 1000);
  }

  loadSettings();

  // Reload settings every 5 seconds so admin changes appear
  refreshTimer = setInterval(loadSettings, 5000);

  return () => {
    if (countdownTimer) clearInterval(countdownTimer);
    if (refreshTimer) clearInterval(refreshTimer);
  };
}, []);

const hours = Math.floor(timeLeft / (1000 * 60 * 60));

const minutes = Math.floor(
  (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
);

const seconds = Math.floor(
  (timeLeft % (1000 * 60)) / 1000
);

const live = settings.status === "live";

const countdown = [
  {
    value: String(hours).padStart(2, "0"),
    label: "Hours",
  },
  {
    value: String(minutes).padStart(2, "0"),
    label: "Minutes",
  },
  {
    value: String(seconds).padStart(2, "0"),
    label: "Seconds",
  },
];

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#081B33] via-[#0B2345] to-[#06182F] p-5 shadow-2xl sm:p-8 lg:p-10">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Hero */}

      <div className="relative text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/5 px-5 py-2 backdrop-blur-xl">

          <Lock className="h-4 w-4 text-yellow-400" />

          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400">
            Official VIP Vault
          </span>

        </div>

        <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl lg:text-6xl">
          {settings.title}
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-semibold leading-8 text-white sm:text-xl lg:text-2xl lg:leading-10">
  {settings.subtitle}
</p>

      </div>

      {/* Timer starts here */}
            <div className="relative mt-10">

        <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-8">

          {countdown.map((item) => (

            <div
              key={item.label}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-yellow-400/40 hover:bg-white/10"
            >

              {/* Gold Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Shimmer */}
              <div className="absolute inset-y-0 -left-24 w-16 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[120%]" />

              <div className="relative text-center">

                <div className="text-4xl font-black text-yellow-400 sm:text-5xl lg:text-7xl">

                  {item.value}

                </div>

                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-xs">

                  {item.label}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Divider */}

      <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      {/* Information Cards */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Status */}

        <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10">

          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Status
          </div>

          <div
            className={`mt-4 text-3xl font-black ${
              live ? "text-emerald-400" : "text-yellow-400"
            }`}
          >
            {settings.status.toUpperCase()}
          </div>

          <div className="mt-2 text-sm text-slate-400">
            {settings.status === "live"
  ? "Results Released"
  : "Vault Secured"}
          </div>

        </div>

        {/* Prediction Time */}

        <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10">

          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Prediction Time
          </div>

          <div className="mt-4 text-3xl font-black text-white">
           {settings.draw_time
  ? (() => {
      const d = new Date(
        `2000-01-01T${settings.draw_time}`
      );

      d.setHours(d.getHours() - 5);

      return d.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
    })()
  : "--"}
          </div>

          <div className="mt-2 text-sm text-slate-400">
            GMT +1
          </div>

        </div>

        {/* Draw Time */}

        <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10">

          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Official Draw
          </div>

          <div className="mt-4 text-3xl font-black text-white">
            {settings.draw_time
  ? new Date(`2000-01-01T${settings.draw_time}`).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    })
  : "--"}
          </div>

          <div className="mt-2 text-sm text-slate-400">
            GMT +1
          </div>

        </div>

        {/* Access */}

        <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10">

          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Access
          </div>

          <div className="mt-4 text-3xl font-black text-yellow-400">
            VIP
          </div>

          <div className="mt-2 text-sm text-slate-400">
            Members Only
          </div>

        </div>

      </div>

      {/* Bottom Notice */}

      <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 p-5">

        <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <Lock className="h-5 w-5 text-yellow-400" />

          <p className="text-sm leading-7 text-slate-300">

            Winning predictions become available
            <span className="font-bold text-yellow-400">
              {" "}exactly 5 hours before{" "}
            </span>
            every official EuroMillions draw.

          </p>

        </div>

      </div>

      {/* Premium Footer Glow */}
            {/* Decorative Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-32 w-[80%] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* Floating Light */}
      <div className="pointer-events-none absolute left-8 top-8 h-3 w-3 animate-pulse rounded-full bg-yellow-400/70" />
      <div className="pointer-events-none absolute right-10 top-16 h-2 w-2 animate-ping rounded-full bg-yellow-300/60" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/50" />
      <div className="pointer-events-none absolute bottom-16 right-1/3 h-3 w-3 animate-pulse rounded-full bg-yellow-300/40" />

    </section>
  );
}