"use client";

import PackageEditor from "@/components/vault/PackageEditor";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

export default function VaultAdminPage() {
  const [loading, setLoading] = useState(true);

  const [packages, setPackages] = useState<any[]>([]);
  const [codes, setCodes] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    draw_date: "",
    draw_time: "",
    status: "locked",
  });

 useEffect(() => {
  async function init() {
    await loadSettings();
    await loadPackages();
  }

  init();
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
async function loadPackages() {
  const {
    data: packageData,
    error: packageError,
  } = await supabase
    .from("vault_packages")
    .select("*")
    .order("id", { ascending: true });

  console.log("Packages:", packageData);
  console.log("Package Error:", packageError);

  const {
    data: codeData,
    error: codeError,
  } = await supabase
    .from("vault_codes")
    .select("*");

  console.log("Codes:", codeData);
  console.log("Code Error:", codeError);

  if (packageError) {
    console.error(packageError);
    return;
  }

  if (codeError) {
    console.error(codeError);
    return;
  }

  setPackages(packageData ?? []);
  setCodes(codeData ?? []);
}

async function saveSettings() {
  const { error } = await supabase
    .from("vault_settings")
    .update({
      title: form.title,
      subtitle: form.subtitle,
      draw_date: form.draw_date,
      draw_time: form.draw_time,
      status: form.status,
    })
    .eq("id", 1);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Vault settings updated successfully.");
}
  async function savePackage(pkg: any) {
  const { error: packageError } = await supabase
    .from("vault_packages")
    .update({
      ball1: pkg.ball1,
      ball2: pkg.ball2,
      ball3: pkg.ball3,
      ball4: pkg.ball4,
      ball5: pkg.ball5,
      star1: pkg.star1,
      star2: pkg.star2,
      draw_date: pkg.draw_date,
      active: pkg.active,
    })
    .eq("id", pkg.id);

  if (packageError) {
    alert(packageError.message);
    return;
  }

  const codeRow = codes.find(
    (c) => c.package_type === pkg.package_type
  );

  if (codeRow) {
    const { error: codeError } = await supabase
      .from("vault_codes")
      .update({
        code: pkg.code,
        draw_date: pkg.draw_date,
        active: pkg.active,
      })
      .eq("id", codeRow.id);

    if (codeError) {
      alert(codeError.message);
      return;
    }
  }

  await loadPackages();

  alert(`${pkg.package_name} updated successfully.`);
}

function updatePackage(
  index: number,
  field: string,
  value: any
) {
  const updatedPackages = [...packages];

  updatedPackages[index] = {
    ...updatedPackages[index],
    [field]: value,
  };

  setPackages(updatedPackages);

  if (field === "code") {
    const updatedCodes = [...codes];
    const codeIndex = updatedCodes.findIndex(
      (c) =>
        c.package_type === updatedPackages[index].package_type
    );

    if (codeIndex !== -1) {
      updatedCodes[codeIndex] = {
        ...updatedCodes[codeIndex],
        code: value,
      };

      setCodes(updatedCodes);
    }
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
console.log("packages state:", packages);
console.log("codes state:", codes);
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

      {/* VIP Packages */}

      <div className="mt-16">
        <h2 className="mb-8 text-center text-4xl font-black text-yellow-400">
          VIP Packages
        </h2>

        {packages.map((pkg, index) => (
          <PackageEditor
            key={pkg.id}
            data={{
              ...pkg,
              code:
                codes.find(
                  (c) => c.package_type === pkg.package_type
                )?.code || "",
            }}
            onChange={(field, value) =>
              updatePackage(index, field as string, value)
            }
            onSave={() => savePackage(packages[index])}
          />
        ))}
      </div>

    </div>
  );
}