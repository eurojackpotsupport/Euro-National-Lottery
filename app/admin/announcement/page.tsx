"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AnnouncementAdmin() {
  const [rowId, setRowId] = useState("");

const [text, setText] = useState("");
const [background, setBackground] = useState("#F4B400");
const [color, setColor] = useState("#000000");
const [speed, setSpeed] = useState(35);
const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    loadAnnouncement();
  }, []);

 async function loadAnnouncement() {
  const { data, error } = await supabase
    .from("announcement_bar")
    .select("*")
    .single();

  if (error || !data) return;

  setRowId(data.id);
  setText(data.text ?? "");
  setBackground(data.background ?? "#F4B400");
  setColor(data.color ?? "#000000");
  setSpeed(data.speed ?? 35);
  setEnabled(data.enabled ?? true);
}

async function saveAnnouncement() {
  const { data, error } = await supabase
    .from("announcement_bar")
    .update({
      text,
      background,
      color,
      speed,
      enabled,
    })
    .eq("id", "00000000-0000-0000-0000-000000000001")
    .select();

  

  if (error) {
    alert(error.message);
    return;
  }

  alert(JSON.stringify(data));
}
  return (
    <div className="min-h-screen bg-[#081B33] p-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-500/20 bg-[#102b52] p-8">

        <h1 className="text-4xl font-black text-white">
          Announcement Bar
        </h1>

        <div className="mt-8 space-y-6">

          <div>
            <label className="mb-2 block text-slate-300">
              Announcement Text
            </label>

            <textarea
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-[#081B33] p-4 text-white outline-none focus:border-yellow-500"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-slate-300">
                Background Color
              </label>

              <input
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-slate-300">
                Text Color
              </label>

              <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-white"
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-slate-300">
              Animation Speed (seconds)
            </label>

            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-white"
            />
          </div>

          <label className="flex items-center gap-3 text-white">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />

            Enable Announcement Bar
          </label>

          <button
            onClick={saveAnnouncement}
            className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Save Changes
          </button>

        </div>
      </div>
    </div>
  );
}