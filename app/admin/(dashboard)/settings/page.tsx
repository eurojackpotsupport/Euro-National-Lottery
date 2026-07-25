"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

type Settings = {
  id: number;

  website_name: string;
  website_tagline: string;

  whatsapp: string;
  support_email: string;
  office_address: string;

  facebook: string;
  instagram: string;
  telegram: string;

  footer_text: string;

  hero_title: string;
  hero_subtitle: string;
  hero_button_text: string;
  hero_button_link: string;
  hero_second_button_text: string;
  hero_second_button_link: string;
  hero_background: string;
};

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState<Settings>({
  id: 1,

  website_name: "",
  website_tagline: "",

  whatsapp: "",
  support_email: "",
  office_address: "",

  facebook: "",
  instagram: "",
  telegram: "",

  footer_text: "",

  hero_title: "",
  hero_subtitle: "",
  hero_button_text: "",
  hero_button_link: "",
  hero_second_button_text: "",
  hero_second_button_link: "",
  hero_background: "",
});
  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const { data } = await supabase
      .from("settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (data) setSettings(data);
  }

  async function saveSettings() {
    setLoading(true);

    const { error } = await supabase
      .from("settings")
      .update(settings)
      .eq("id", 1);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Settings saved successfully.");
  }

  function update(
    key: keyof Settings,
    value: string
  ) {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const input =
    "mt-2 w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none";

  return (
    <main className="min-h-screen bg-[#081B33] p-8">

      <div className="mx-auto max-w-4xl rounded-3xl bg-[#102b52] p-8">

        <h1 className="text-4xl font-black text-white">
          Website Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Control website information from one place.
        </p>

        <div className="mt-8 grid gap-6">

          <div>
            <label className="text-white">
              Website Name
            </label>

            <input
              className={input}
              value={settings.website_name}
              onChange={(e) =>
                update("website_name", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Website Tagline
            </label>

            <input
              className={input}
              value={settings.website_tagline}
              onChange={(e) =>
                update("website_tagline", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              WhatsApp Number
            </label>

            <input
              className={input}
              value={settings.whatsapp}
              onChange={(e) =>
                update("whatsapp", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Support Email
            </label>

            <input
              className={input}
              value={settings.support_email}
              onChange={(e) =>
                update("support_email", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Office Address
            </label>

            <input
              className={input}
              value={settings.office_address}
              onChange={(e) =>
                update("office_address", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Facebook
            </label>

            <input
              className={input}
              value={settings.facebook}
              onChange={(e) =>
                update("facebook", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Instagram
            </label>

            <input
              className={input}
              value={settings.instagram}
              onChange={(e) =>
                update("instagram", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Telegram
            </label>

            <input
              className={input}
              value={settings.telegram}
              onChange={(e) =>
                update("telegram", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-white">
              Footer Text
              
            </label>

            <textarea
              rows={3}
              className={input}
              value={settings.footer_text}
              onChange={(e) =>
                update("footer_text", e.target.value)
              }
            />
          </div>
          <div>
  <label className="text-white">
    Hero Title
  </label>

  <input
    className={input}
    value={settings.hero_title}
    onChange={(e) => update("hero_title", e.target.value)}
  />
</div>

<div>
  <label className="text-white">
    Hero Subtitle
  </label>

  <textarea
    rows={3}
    className={input}
    value={settings.hero_subtitle}
    onChange={(e) => update("hero_subtitle", e.target.value)}
  />
</div>

<div>
  <label className="text-white">
    Hero Button Text
  </label>

  <input
    className={input}
    value={settings.hero_button_text}
    onChange={(e) => update("hero_button_text", e.target.value)}
  />
</div>

<div>
  <label className="text-white">
    Hero Button Link
  </label>

  <input
    className={input}
    value={settings.hero_button_link}
    onChange={(e) => update("hero_button_link", e.target.value)}
  />
</div>

<div>
  <label className="text-white">
    Second Button Text
  </label>

  <input
    className={input}
    value={settings.hero_second_button_text}
    onChange={(e) => update("hero_second_button_text", e.target.value)}
  />
</div>

<div>
  <label className="text-white">
    Second Button Link
  </label>

  <input
    className={input}
    value={settings.hero_second_button_link}
    onChange={(e) => update("hero_second_button_link", e.target.value)}
  />
</div>

<div>
  <label className="text-white">
    Hero Background
  </label>

  <input
    className={input}
    value={settings.hero_background}
    onChange={(e) => update("hero_background", e.target.value)}
  />
</div>
          <button
            onClick={saveSettings}
            disabled={loading}
            className="mt-4 rounded-xl bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Settings"}
          </button>

        </div>

      </div>

    </main>
  );
}