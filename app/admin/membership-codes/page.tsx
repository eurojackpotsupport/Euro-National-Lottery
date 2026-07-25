"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

type MembershipCode = {
  id: number;
  membership_code: string;
  package_type: string;
  active: boolean;
};

export default function MembershipCodesPage() {
  const [codes, setCodes] = useState<MembershipCode[]>([]);
  const [loading, setLoading] = useState(false);

  const [packageType, setPackageType] = useState("gold");
  const [membershipCode, setMembershipCode] = useState("");

  function generateCode() {
    const random = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    let prefix = "";

    if (packageType === "gold") {
      prefix = "GOLD";
    } else if (packageType === "platinum") {
      prefix = "PLAT";
    } else {
      prefix = "DIA";
    }

    setMembershipCode(`${prefix}-${random}`);
  }
    async function loadCodes() {
    const { data } = await supabase
      .from("membership_codes")
      .select("*")
      .order("id", { ascending: false });

    if (data) {
      setCodes(data);
    }
  }

  async function saveCode() {
    if (!membershipCode.trim()) {
      alert("Generate a membership code first.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("membership_codes")
      .insert({
        membership_code: membershipCode,
        package_type: packageType,
        active: true,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setMembershipCode("");
    loadCodes();
  }

  useEffect(() => {
    loadCodes();
  }, []);
    async function deleteCode(id: number) {
    const ok = confirm("Delete this membership code?");

    if (!ok) return;

    const { error } = await supabase
      .from("membership_codes")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadCodes();
  }

  return (
        <div className="min-h-screen bg-[#081B33] p-8 text-white">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-4xl font-black text-yellow-400">
          Membership Code Manager
        </h1>

        {/* Form */}
        <div className="mb-10 rounded-2xl border border-yellow-500/20 bg-[#10284A] p-6">

          <div className="grid gap-6 md:grid-cols-3">

            {/* Package */}
            <div>
              <label className="mb-2 block text-sm font-bold text-yellow-400">
                Package
              </label>

              <select
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="w-full rounded-xl bg-[#081B33] p-3 outline-none"
              >
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>

            {/* Membership Code */}
            <div>
              <label className="mb-2 block text-sm font-bold text-yellow-400">
                Membership Code
              </label>

              <input
                value={membershipCode}
                onChange={(e) => setMembershipCode(e.target.value)}
                className="w-full rounded-xl bg-[#081B33] p-3 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-end gap-3">

              <button
                onClick={generateCode}
                className="rounded-xl bg-blue-600 px-5 py-3 font-bold"
              >
                Generate
              </button>

              <button
                onClick={saveCode}
                disabled={loading}
                className="rounded-xl bg-yellow-500 px-5 py-3 font-bold text-black"
              >
                {loading ? "Saving..." : "Save"}
              </button>

            </div>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-yellow-500/20">

          <table className="w-full">

            <thead className="bg-[#10284A]">
              <tr>
                <th className="p-4 text-left">Membership Code</th>
                <th className="p-4 text-left">Package</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>

              {codes.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-white/10"
                >
                  <td className="p-4 font-mono">
                    {item.membership_code}
                  </td>

                  <td className="p-4 capitalize">
                    {item.package_type}
                  </td>

                  <td className="p-4">
                    {item.active ? "Active" : "Inactive"}
                  </td>

                  <td className="p-4 text-center">

                    <button
                      onClick={() => deleteCode(item.id)}
                      className="rounded-lg bg-red-600 px-4 py-2"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}

              {codes.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="p-8 text-center text-slate-400"
                  >
                    No membership codes found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}