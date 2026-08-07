"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";


export default function UpcomingCardPage() {

  const [settings, setSettings] = useState({
    ball1: 0,
    ball2: 0,
    ball3: 0,
    ball4: 0,
    ball5: 0,

    star1: 0,
    star2: 0,

    showNumbers: false,
  });
  useEffect(() => {
  loadUpcomingCard();
}, []);
  async function loadUpcomingCard() {
  const { data, error } = await supabase
    .from("upcoming_draw_card")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !data) return;

  setSettings({
    ball1: data.ball1,
    ball2: data.ball2,
    ball3: data.ball3,
    ball4: data.ball4,
    ball5: data.ball5,
    star1: data.star1,
    star2: data.star2,
    showNumbers: data.show_numbers,
  });
}
async function saveUpcomingCard() {
  const result = await supabase
    .from("upcoming_draw_card")
    .update({
      ball1: settings.ball1,
      ball2: settings.ball2,
      ball3: settings.ball3,
      ball4: settings.ball4,
      ball5: settings.ball5,
      star1: settings.star1,
      star2: settings.star2,
      show_numbers: settings.showNumbers,
    })
    .eq("id", 1)
    .select();

  console.log(result);

  if (result.error) {
    alert(result.error.message);
    return;
  }

  alert(JSON.stringify(result.data));
}
  return (
    <div className="max-w-5xl">
      <h1 className="mb-8 text-6xl font-black text-yellow-400">
        Upcoming Card
      </h1>

      <div className="rounded-3xl border border-yellow-500/20 bg-[#10284a] p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          VIP Vault Upcoming Draw Card
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Ball 1
            </label>

            <input
  type="number"
  value={settings.ball1}
  onChange={(e) =>
    setSettings({
      ...settings,
      ball1: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Ball 2
            </label>

            <input
  type="number"
  value={settings.ball2}
  onChange={(e) =>
    setSettings({
      ...settings,
      ball2: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Ball 3
            </label>

            <input
  type="number"
  value={settings.ball3}
  onChange={(e) =>
    setSettings({
      ...settings,
      ball3: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Ball 4
            </label>

            <input
  type="number"
  value={settings.ball4}
  onChange={(e) =>
    setSettings({
      ...settings,
      ball4: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Ball 5
            </label>

            <input
  type="number"
  value={settings.ball5}
  onChange={(e) =>
    setSettings({
      ...settings,
      ball5: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Lucky Star 1
            </label>

            <input
  type="number"
  value={settings.star1}
  onChange={(e) =>
    setSettings({
      ...settings,
      star1: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block font-bold text-yellow-400">
              Lucky Star 2
            </label>

            <input
  type="number"
  value={settings.star2}
  onChange={(e) =>
    setSettings({
      ...settings,
      star2: Number(e.target.value),
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
/>
          </div>

        </div>

        <select
  value={settings.showNumbers ? "true" : "false"}
  onChange={(e) =>
    setSettings({
      ...settings,
      showNumbers: e.target.value === "true",
    })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#18355f] p-4 text-white"
>
  <option value="false">Locked</option>
  <option value="true">Show Numbers</option>
</select>

        <button  onClick={saveUpcomingCard}
  className="mt-10 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400">

          Save Upcoming Card

        </button>

      </div>
    </div>
  );
}