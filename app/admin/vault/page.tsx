"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VaultAdminPage() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    draw_date: "",
    draw_time: "",
    status: "locked",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const { data, error } = await supabase
      .from("vault_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (data) {
      setForm({
        title: data.title ?? "",
        subtitle: data.subtitle ?? "",
        draw_date: data.draw_date ?? "",
        draw_time: data.draw_time ?? "",
        status: data.status ?? "locked",
      });
    }

    setLoading(false);
  }

  async function saveSettings() {
    const { error } = await supabase
      .from("vault_settings")
      .update(form)
      .eq("id", 1);

    if (!error) {
      alert("Vault settings updated successfully.");
    } else {
      alert(error.message);
    }
  }

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-xl font-bold text-white">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-8">

      <h1 className="mb-8 text-center text-5xl font-black text-yellow-400">
        Vault Settings
      </h1>

      <div className="rounded-3xl border border-yellow-500/20 bg-[#0B2345] p-8 shadow-2xl">

        <div className="space-y-6">

          {/* Title */}

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Title
            </label>

            <input
              className="w-full rounded-2xl border border-yellow-500/20 bg-[#10284A] px-5 py-4 text-lg text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              placeholder="Result Release"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />
          </div>

          {/* Subtitle */}

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Subtitle
            </label>

            <textarea
              rows={4}
              className="w-full rounded-2xl border border-yellow-500/20 bg-[#10284A] px-5 py-4 text-lg text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              placeholder="Results are released exactly 5 hours before every official EuroMillions draw."
              value={form.subtitle}
              onChange={(e) =>
                setForm({
                  ...form,
                  subtitle: e.target.value,
                })
              }
            />
          </div>

          {/* Draw Date */}

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Draw Date
            </label>

            <input
              type="date"
              className="w-full rounded-2xl border border-yellow-500/20 bg-[#10284A] px-5 py-4 text-lg text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              value={form.draw_date}
              onChange={(e) =>
                setForm({
                  ...form,
                  draw_date: e.target.value,
                })
              }
            />
          </div>

          {/* Draw Time */}

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Draw Time
            </label>

            <input
              type="time"
              className="w-full rounded-2xl border border-yellow-500/20 bg-[#10284A] px-5 py-4 text-lg text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              value={form.draw_time}
              onChange={(e) =>
                setForm({
                  ...form,
                  draw_time: e.target.value,
                })
              }
            />
          </div>

          {/* Status */}

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Vault Status
            </label>

            <select
              className="w-full rounded-2xl border border-yellow-500/20 bg-[#10284A] px-5 py-4 text-lg text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
            >
              <option value="locked">
                🔒 Locked
              </option>

              <option value="live">
                🟢 Live
              </option>

            </select>
          </div>

          {/* Button */}

          <button
            onClick={saveSettings}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-xl font-black text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]"
          >
            💾 Save Vault Settings
          </button>

        </div>

      </div>

    </div>
  );
}