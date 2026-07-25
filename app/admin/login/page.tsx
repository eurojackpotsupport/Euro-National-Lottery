"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";

const ADMIN_EMAIL = "cpamegahub@gmail.com";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (
        session &&
        session.user.email?.trim().toLowerCase() ===
          ADMIN_EMAIL.toLowerCase()
      ) {
        router.replace("/admin");
      }
    }

    checkSession();
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const userEmail =
      data.user?.email?.trim().toLowerCase();

    if (userEmail !== ADMIN_EMAIL.toLowerCase()) {
      await supabase.auth.signOut();

      setError("Unauthorized account.");
      setLoading(false);
      return;
    }

    router.replace("/admin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#081B33] px-6">
      <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-[#102b52] p-10 shadow-2xl">

        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500">
            <ShieldCheck
              size={48}
              className="text-black"
            />
          </div>
        </div>

        <h1 className="mt-8 text-center text-4xl font-black text-white">
          Admin Login
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Sign in with your administrator account
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-yellow-500/40 bg-[#0B1F3A] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter your password"
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
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 py-4 font-bold text-black transition hover:scale-[1.02] hover:shadow-lg active:scale-100 disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

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