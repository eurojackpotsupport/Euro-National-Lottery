"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

export default function JackpotPage() {
  const [amount, setAmount] = useState("");
  const [nextDraw, setNextDraw] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadJackpot();
  }, []);

  async function loadJackpot() {
  const { data, error } = await supabase
    .from("jackpot")
    .select("*")
    .eq("id", 1)
    .maybeSingle();

  console.log("Loaded jackpot:", data);
  console.log("Load error:", error);

  if (data) {
    setAmount(data.amount);
    setNextDraw(data.next_draw);
    setTime(data.time);
  }
}

  async function saveJackpot() {
  setLoading(true);
  
  const { data: { session } } = await supabase.auth.getSession();

console.log(session);
alert(session?.user?.email || "No session");
  const { data, error } = await supabase
    .from("jackpot")
    .update({
      amount,
      next_draw: nextDraw,
      time,
    })
    .eq("id", 1)
    .select();

  console.log("Updated rows:", data);
  console.log("Error:", error);

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Done");
}
  return (
    <main className="min-h-screen bg-[#081B33] p-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-[#102b52] p-8">
        <h1 className="text-4xl font-black text-white">
          Jackpot Manager
        </h1>

        <p className="mt-2 text-slate-400">
          Update the jackpot information.
        </p>

        <div className="mt-8 space-y-6">

          <div>
            <label className="mb-2 block text-white">
              Jackpot Amount
            </label>

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Next Draw
            </label>

            <input
              value={nextDraw}
              onChange={(e) => setNextDraw(e.target.value)}
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Draw Time
            </label>

            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white"
            />
          </div>

          <button
            onClick={saveJackpot}
            disabled={loading}
            className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Jackpot"}
          </button>

        </div>
      </div>
    </main>
  );
}