"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Announcement = {
  text: string;
  background: string;
  color: string;
  speed: number;
  enabled: boolean;
};

export default function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    loadAnnouncement();
  }, []);

  async function loadAnnouncement() {
    const { data, error } = await supabase
      .from("announcement_bar")
      .select("*")
      .single();

    if (!error && data) {
      setAnnouncement(data);
    }
  }

  if (!announcement || !announcement.enabled) {
    return null;
  }

  return (
    <div
      style={{
        background: announcement.background,
        color: announcement.color,
      }}
      className="overflow-hidden whitespace-nowrap"
    >
      <div
        className="flex w-max py-3 font-bold text-xl"
        style={{
          animation: `ticker ${announcement.speed}s linear infinite`,
        }}
      >
        <span className="mx-16">{announcement.text}</span>
        <span className="mx-16">{announcement.text}</span>
        <span className="mx-16">{announcement.text}</span>
      </div>

      <style jsx>{`
        @keyframes ticker {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}