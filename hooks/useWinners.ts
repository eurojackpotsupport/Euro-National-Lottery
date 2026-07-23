"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export type Winner = {
  id: number;
  winner_name: string;
  winner_photo: string;
  member_id: string;
  prize: string;
  country: string;
  draw_date: string;
};

export function useWinners() {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWinners();
  }, []);

  async function loadWinners() {
  try {
    setLoading(true);

    const { data, error } = await supabase
      .from("winners")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    setWinners(data ?? []);
  } catch (err) {
    console.error("LOAD WINNERS FAILED:", err);
  } finally {
    setLoading(false);
  }
}

  return {
    winners,
    loading,
    reload: loadWinners,
  };
}