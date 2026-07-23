"use client";

import VaultBackground from "./components/VaultBackground";
import VaultHero from "./components/VaultHero";

export default function VaultPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071426] text-white">
      <VaultBackground />

      <div className="relative z-10">
        <VaultHero />
      </div>
    </main>
  );
}