"use client";

import Link from "next/link";
import { Lock, ShieldCheck } from "lucide-react";

export default function VaultCard() {
  return (
    <section className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#081B33] via-[#102C57] to-[#071426] p-10 shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 shadow-[0_0_40px_rgba(255,215,0,0.45)]">
          <Lock className="h-14 w-14 text-black" />
        </div>

        <h2 className="mt-8 text-4xl font-extrabold text-white">
          VIP Prediction Vault
        </h2>

        <p className="mt-3 text-yellow-300">
          Military Grade Encryption
        </p>

        <p className="mt-6 max-w-2xl text-slate-300">
          Your exclusive prediction package for the next EuroMillions draw has
          been securely encrypted inside the VIP Vault. Click below to access
          the secure prediction room.
        </p>

        <Link
          href="/dashboard/vault"
          className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 text-lg font-bold text-black transition duration-300 hover:scale-105"
        >
          <ShieldCheck className="h-6 w-6" />
          Unlock Prediction
        </Link>
      </div>
    </section>
  );
}