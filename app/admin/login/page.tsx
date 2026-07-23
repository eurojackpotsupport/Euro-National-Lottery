"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

import { ADMIN_ID } from "@/data/admin";

export default function AdminLoginPage() {
  const router = useRouter();

  const [adminId, setAdminId] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (adminId.trim() !== ADMIN_ID) {
      setError("Invalid Admin ID");
      return;
    }

    localStorage.setItem("admin", "true");
    router.push("/admin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#081B33] px-6">
      <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-[#102b52] p-10 shadow-2xl">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500">
            <ShieldCheck
              size={48}
              className="text-black"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-center text-4xl font-black text-white">
          Admin Panel
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Official EuroMillions Administration
        </p>

        {/* Admin ID */}
        <div className="mt-5 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Admin ID
          </p>

          <p className="mt-1 font-bold text-yellow-400">
            {ADMIN_ID}
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Admin ID
            </label>

            <input
              type="text"
              value={adminId}
              onChange={(e) => {
                setAdminId(e.target.value);
                setError("");
              }}
              placeholder="Enter Admin ID"
              className="w-full rounded-xl border border-yellow-500/40 bg-[#0B1F3A] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 py-4 font-bold text-black transition hover:scale-[1.02] hover:shadow-lg active:scale-100"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 border-t border-slate-700 pt-5 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Authorized Personnel Only
          </p>

          <p className="mt-1 text-sm text-slate-400">
            EuroMillions Internal Administration
          </p>
        </div>

      </div>
    </main>
  );
}