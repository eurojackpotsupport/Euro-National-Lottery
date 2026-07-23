"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export type WebsiteSettings = {
  id: number;

  // Website
  website_name: string;
  website_tagline: string;
  logo_url: string;

  // Contact
  whatsapp: string;
  support_email: string;
  office_address: string;

  // Social
  facebook: string;
  instagram: string;
  telegram: string;

  // Footer
  footer_text: string;

  // Hero
  hero_title: string;
  hero_subtitle: string;
  hero_button_text: string;
  hero_button_link: string;
  hero_second_button_text: string;
  hero_second_button_link: string;
  hero_background: string;
};

export function useSettings() {
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    setLoading(true);

    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .limit(1)
      .single();

    if (error) {
      console.error("Settings Error:", error);
      setLoading(false);
      return;
    }

    setSettings(data as WebsiteSettings);
    setLoading(false);
  }

  return {
    settings,
    loading,
    reload: loadSettings,
  };
}