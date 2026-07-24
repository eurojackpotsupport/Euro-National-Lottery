"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import VaultSection from "./VaultSection";
import FeatureBar from "./FeatureBar";

export default function VaultHero() {
  return (
    <section
      className="
        relative
        mx-auto

        w-full
        max-w-[1600px]

        px-6
        pt-10
        pb-20

        lg:px-12
      "
    >
      {/* Back Button */}
      <div className="flex justify-center">
        <Link
          href="/dashboard"
          className="
            inline-flex
            items-center
            gap-2

            text-sm
            text-slate-400

            transition-colors
            hover:text-white
          "
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
      </div>

      {/* Badge */}
      <div className="mt-8 flex justify-center">
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-500/30

            bg-emerald-500/10

            px-6
            py-3
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          <span
            className="
              text-sm
              font-bold
              tracking-[0.15em]
              text-emerald-400
            "
          >
            ACCESS VERIFIED
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="mx-auto mt-6 max-w-4xl text-center">

        <h1
          className="
            text-3xl
            font-black
            leading-none
            tracking-tight

            text-white

            md:text-4xl
            xl:text-5xl
          "
        >
          100% Accurate Results
        </h1>

        <p
          className="
            mx-auto
            mt-8

            max-w-3xl

            text-lg
            leading-9

            text-slate-300

            md:text-xl
          "
        >
          Your exclusive package has been securely encrypted
          inside the VIP Vault.
        </p>

        <p
          className="
            mt-3

            text-lg

            text-slate-300
          "
        >
          Access is available only to{" "}
          <span className="font-bold text-yellow-400">
            ACTIVE MEMBER.
          </span>
        </p>

      </div>

      {/* Vault */}
      <div className="mt-08">
        <VaultSection />
      </div>
    </section>
  );
}