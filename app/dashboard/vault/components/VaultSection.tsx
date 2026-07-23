"use client";

import Image from "next/image";
import { Lock, Gem } from "lucide-react";
import GoldParticles from "./GoldParticles";

export default function VaultSection() {
  return (
    <div className="relative flex flex-col items-center">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Soft Radial Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]

            -translate-x-1/2
            -translate-y-1/2

            w-[900px]
            h-[900px]

            rounded-full

            bg-[radial-gradient(circle,rgba(255,191,36,.18)_0%,rgba(255,191,36,.08)_35%,transparent_72%)]
          "
        />

        {/* Decorative Rings */}
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border border-yellow-500/10" />

        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-yellow-500/10" />

        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-yellow-500/10" />

        <GoldParticles />
      </div>

      {/* Vault */}
      <div className="relative z-10 translate-x-6 translate-y-4 lg:translate-x-10 lg:translate-y-6">
     <Image
    src="/ccc.png"
    alt="Vault"
    width={1500}
    height={1500}
    priority
    draggable={false}
    className="
      w-full

      max-w-[420px]
      sm:max-w-[520px]
      md:max-w-[620px]
      lg:max-w-[700px]
      xl:max-w-[760px]

      object-contain

      drop-shadow-[0_30px_80px_rgba(0,0,0,.55)]

      animate-[float_6s_ease-in-out_infinite]
    "
      />

      {/* Floor Light */}
      <div
        className="
          -mt-10

          h-10
          w-[420px]

          rounded-full

          bg-yellow-400/40

          blur-2xl
        "
      />
      </div>
      {/* Button */}
      <button
  className="
    relative
    z-20
    mt-4

    flex
    items-center
    justify-center
    gap-3

    h-16
    w-full
    max-w-[320px]

    rounded-2xl

    border
    border-yellow-300/40

    gradient-button

    text-black
    font-bold
    text-xl

    shadow-[0_15px_40px_rgba(245,158,11,.45)]

    transition-transform
    duration-300

    hover:scale-[1.02]

    animate-[gradientSlide_2.5s_linear_infinite]
  "
      >
        <Lock size={22} />
        Unlock Secure Vault
      </button>

      {/* Member */}
      <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
        <Gem size={16} className="text-yellow-400" />
        <span>
          Only{" "}
          <span className="font-semibold text-yellow-400">
            ACTIVE MEMBER
          </span>{" "}
          can access the vault.
        </span>
      </div>

    </div>
  );
}