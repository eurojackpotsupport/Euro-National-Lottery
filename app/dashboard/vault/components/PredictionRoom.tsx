"use client";
import { Gem } from "lucide-react";
import PredictionCountdown from "./PredictionCountdown";
import { Lock, LockKeyhole } from "lucide-react";
import { useState } from "react";
import MembershipModal from "./MembershipModal";
const packages = [
  {
    title: "Gold Package A",
    locked: true,
    numbers: ["07", "14", "19", "28", "42"],
    stars: ["03", "09"],
  },
  {
    title: "Gold Package B",
    locked: true,
    numbers: ["05", "11", "23", "37", "49"],
    stars: ["01", "10"],
  },
  {
    title: "Platinum Package A",
    locked: true,
    numbers: ["02", "18", "27", "34", "50"],
    stars: ["06", "11"],
  },
  {
    title: "Platinum Package B",
    locked: true,
    numbers: ["", "", "", "", ""],
    stars: ["", ""],
  },
  {
    title: "Diamond Package A",
    locked: true,
    numbers: ["", "", "", "", ""],
    stars: ["", ""],
  },
  {
    title: "Diamond Package B",
    locked: true,
    numbers: ["", "", "", "", ""],
    stars: ["", ""],
  },
];

export default function PredictionRoom() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 xl:px-8">

        {/* Countdown */}
        <div className="mt-10">
  <PredictionCountdown />
</div>

        {/* Heading */}
        <h2 className="mt-20 mb-12 text-center text-4xl font-black text-yellow-400 md:mt-24 md:text-6xl">
  Exclusive Result Packages
</h2>

        {/* Package Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-3xl border border-yellow-500/20 bg-[#0D223F] p-8 shadow-xl transition-all duration-300 hover:border-yellow-400/40 hover:shadow-2xl"
            >
              {/* Package Title */}
              <h3 className="mb-5 text-center text-2xl font-bold text-white">
                {pkg.title}
              </h3>

              {/* Locked Badge */}
              <div className="mb-6 flex justify-center">
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold tracking-[0.25em] text-yellow-400">
                  🔒 RESULT LOCKED
                </span>
              </div>

              {/* Main Numbers */}
              <div className="flex flex-wrap justify-center gap-4">
                {pkg.numbers.map((num, index) => (
                  <div
                    key={index}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg"
                  >
                    <Lock size={20} />
                  </div>
                ))}
              </div>

              {/* Lucky Stars */}
              <div className="mt-8 flex justify-center gap-4">
                {pkg.stars.map((star, index) => (
                  <div
                    key={index}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg"
                  >
                    <Lock size={18} />
                  </div>
                ))}
              </div>

              {/* Members Notice */}
              <div className="mt-8 text-center">
                <p className="text-sm leading-6 text-slate-300">
                  Only{" "}
                  <span className="font-bold text-yellow-400">
                    Active Members
                  </span>
                  <br />
                  can unlock this package.
                </p>
              </div>

              {/* View Numbers Button */}
              <button
  onClick={() => setOpenModal(true)}
  className="
    gradient-btn-gold
    group
    mt-6
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    px-6
    py-4
    shadow-xl
  "
>
  <span className="diamond-float text-2xl">
    💎
  </span>

  <span
    className="
      gold-text
      whitespace-nowrap
      text-base
      font-black
      uppercase
      tracking-[0.08em]
      text-[#081B33]
      sm:text-lg
      sm:tracking-[0.18em]
    "
  >
    Unlock Numbers
  </span>
</button>
            </div>
          ))}
        </div>

      </div>
      <MembershipModal
  open={openModal}
  onClose={() => setOpenModal(false)}
/>
    </section>
  );
}