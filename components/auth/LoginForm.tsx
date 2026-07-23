"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const [memberId, setMemberId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const id = memberId.trim().toUpperCase();

    const { data: member, error } = await supabase
      .from("members")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (!member) {
      setError("Invalid Member ID. Please contact support.");
      return;
    }

    localStorage.setItem("memberId", member.id);
    localStorage.setItem("member", JSON.stringify(member));

    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-3xl font-bold text-black shadow-xl">
          €
        </div>

        <h1 className="mt-5 text-4xl font-extrabold text-white">
          EuroMillions
        </h1>

        <p className="mt-2 text-sm uppercase tracking-widest text-yellow-400">
          Official Member Login
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-500/20 bg-[#0b2344]/90 p-10">
        <h2 className="text-center text-3xl font-bold text-white">
          Enter Member ID
        </h2>

        <p className="mt-3 text-center text-slate-400">
          Enter the Member ID you received from our support team.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-slate-300">
              Member ID
            </label>

            <input
              type="text"
              value={memberId}
              onChange={(e) => {
                setMemberId(e.target.value.toUpperCase());
                setError("");
              }}
              placeholder="EM26-XXXX-XXXX"
              className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-5 py-4 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <p className="text-center text-slate-400">
            Don't have a Member ID?
          </p>

          <Link
            href="/membership"
            className="mt-4 block text-center font-semibold text-yellow-400 hover:underline"
          >
            Apply for Membership
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        © 2026 EuroMillions Membership
      </p>
    </div>
  );
}