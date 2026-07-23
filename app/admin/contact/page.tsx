"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import type { ContactSettings } from "@/types/contact";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] =
    useState<ContactSettings>({
      id: 1,

      phone_number: "",
      email_address: "",

      office_name: "",
      office_country: "",

      whatsapp_url: "",
      email_button_url: "",
    });

  useEffect(() => {
    loadContact();
  }, []);

  async function loadContact() {
  setLoading(true);

  const { data, error } = await supabase
    .from("contact_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (!error && data) {
    setForm(data);
  }

  setLoading(false);
}
  async function saveContact() {
    const { error } = await supabase
      .from("contact_settings")
      .update({
        phone_number: form.phone_number,
        email_address: form.email_address,

        office_name: form.office_name,
        office_country: form.office_country,

        whatsapp_url: form.whatsapp_url,
        email_button_url: form.email_button_url,
      })
      .eq("id", 1);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Contact settings updated successfully.");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#081B33] flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#081B33] p-8">

      <div className="mx-auto max-w-4xl rounded-3xl bg-[#102b52] p-8">

        <h1 className="text-4xl font-black text-white">
          Contact Manager
        </h1>

        <p className="mt-2 text-slate-400">
          Update Contact Page Information
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <label className="mb-2 block text-white">
              Phone Number
            </label>

            <input
              value={form.phone_number}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone_number: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Email Address
            </label>

            <input
              value={form.email_address}
              onChange={(e) =>
                setForm({
                  ...form,
                  email_address: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Office Name
            </label>

            <input
              value={form.office_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  office_name: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Office Country
            </label>

            <input
              value={form.office_country}
              onChange={(e) =>
                setForm({
                  ...form,
                  office_country: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              WhatsApp URL
            </label>

            <input
              value={form.whatsapp_url}
              onChange={(e) =>
                setForm({
                  ...form,
                  whatsapp_url: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Email Button URL
            </label>

            <input
              value={form.email_button_url}
              onChange={(e) =>
                setForm({
                  ...form,
                  email_button_url: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white outline-none"
            />
          </div>

          <button
            onClick={saveContact}
            className="mt-4 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400"
          >
            Save Contact Settings
          </button>

        </div>

      </div>

    </main>
  );
}