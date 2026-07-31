"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

type Props = {
  memberId: string;
};

type Member = {
  id: string;
  full_name: string;
  avatar_url: string;
  membership: string;
  status: string;
  country: string;
  joined_date: string;
};

export default function HeroCard({ memberId }: Props) {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    loadMember();
  }, [memberId]);

  async function loadMember() {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .eq("id", memberId)
      .single();

    if (!error) {
      setMember(data);
    }
  }

  const statusClass =
    member?.status === "ACTIVE"
      ? "bg-green-500/15 border-green-500 text-green-400"
      : member?.status === "PENDING"
      ? "bg-yellow-500/15 border-yellow-500 text-yellow-400"
      : "bg-red-500/15 border-red-500 text-red-400";

  return (
    <section
  className="
    relative
    overflow-hidden

    bg-transparent
    border-0
    shadow-none
    rounded-none

    px-1
    py-1

    lg:rounded-[36px]
    lg:border
    lg:border-yellow-400/20
    lg:bg-gradient-to-br
    lg:from-[#081B33]
    lg:via-[#12345A]
    lg:to-[#0B1F3D]
    lg:px-8
    lg:py-7
    lg:shadow-[0_25px_80px_rgba(0,0,0,.45)]
    lg:backdrop-blur-xl
  "
>
{/* Background Glow */}
<div className="pointer-events-none absolute hidden lg:block -left-32 -top-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

<div className="pointer-events-none absolute hidden lg:block -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

{/* Grid Pattern - Desktop Only */}
<div
  className="absolute inset-0 hidden lg:block opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
/>

{/* Gold Shine - Desktop Only */}
<div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
  <div className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
</div>
       <div className="relative z-10 flex flex-col gap-8 pt-2 lg:pt-0 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

<div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:gap-8 lg:text-left">

  {/* Avatar */}

  <div className="relative shrink-0">

    {/* Outer Gold Glow */}
    <div className="absolute inset-0 scale-125 rounded-full bg-yellow-400/20 blur-3xl"></div>

    {/* Decorative Ring */}
    <div className="absolute -inset-2 rounded-full border border-yellow-400/20"></div>

    {/* Avatar */}
    <div className="relative h-32 w-32 overflow-hidden rounded-full border-[5px] border-yellow-400 shadow-[0_0_45px_rgba(250,204,21,0.25)] sm:h-36 sm:w-36 lg:h-44 lg:w-44">

      <Image
        src={member?.avatar_url || "/default-avatar.png"}
        alt="Member"
        fill
        sizes="176px"
        className="object-cover"
      />

    </div>

    {/* Online Dot */}
    <div className="absolute bottom-3 right-3 h-6 w-6 rounded-full border-4 border-[#081B33] bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>

  </div>

  {/* Content */}

  <div>

    <p className="text-xs font-bold uppercase tracking-[6px] text-yellow-400">
      WELCOME BACK
    </p>

    <h1 className="mt-3 text-4xl font-black  text-white sm:text-5xl lg:text-7xl">
      {member?.full_name || "Member"}
    </h1>

    <p className="mt-3 text-sm uppercase tracking-[4px] text-slate-300">
      Official EuroMillions Premium Member
    </p>

    <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">

      <span
  className="
    group
    relative
    overflow-hidden
    rounded-full
    border
    border-yellow-300/40
    bg-gradient-to-r
    from-yellow-500/20
    via-yellow-300/10
    to-yellow-500/20
    px-7
    py-3
    font-bold
    text-yellow-200
    backdrop-blur-xl
    shadow-[0_0_30px_rgba(250,204,21,.15)]
  "
>

  <span className="relative z-10 flex items-center gap-2">
    💎 {member?.membership}
  </span>

  <span
    className="
      absolute
      -left-1/2
      top-0
      h-full
      w-1/3
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      transition-all
      duration-1000
      group-hover:left-[140%]
    "
  />

</span>
      <span
  className={`
    rounded-full
    border
    px-7
    py-3
    font-bold
    backdrop-blur-xl
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    ${statusClass}
  `}
>
  ● {member?.status}
</span>

    </div>

  </div>

</div>
        {/* Right */}

<div className="grid w-full grid-cols-1 gap-6 text-center sm:grid-cols-2 sm:text-left">

  <div>
    <p className="text-xs uppercase tracking-[3px] text-slate-400">
      Member ID
    </p>

    <h3 className="mt-2 break-all text-xl font-bold text-yellow-400">
      {member?.id}
    </h3>
  </div>

  <div>
    <p className="text-xs uppercase tracking-[3px] text-slate-400">
      Country
    </p>

    <h3 className="mt-2 text-xl font-bold text-white">
      {member?.country}
    </h3>
  </div>

  <div>
    <p className="text-xs uppercase tracking-[3px] text-slate-400">
      Joined
    </p>

    <h3 className="mt-2 text-xl font-bold text-white">
      {member?.joined_date}
    </h3>
  </div>

  <div className="flex items-end justify-center sm:justify-start">
    <Link
  href="/dashboard/membership"
  className="
    group
    relative
    overflow-hidden
    flex
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-r
    from-yellow-500
    via-yellow-400
    to-yellow-500
    px-8
    py-6
    font-bold
    text-[#081B33]
    shadow-[0_15px_45px_rgba(250,204,21,.30)]
    transition-all
    duration-300
    hover:scale-[1.03]
  "
>
<div
  className="
    pointer-events-none
    absolute
    right-8
    bottom-2
    hidden
    lg:block
    text-[170px]
    font-black
    leading-none
    text-white/[0.03]
    select-none
  "
>
  VIP
</div>

  <span className="relative z-10">
    View Membership →
  </span>

  <span
    className="
      absolute
      -left-1/2
      top-0
      h-full
      w-1/3
      -skew-x-12
      bg-white/40
      transition-all
      duration-700
      group-hover:left-[130%]
    "
  />

</Link>
  </div>

</div>

            </div>

      {/* Premium Status Strip */}

      <div className="relative z-10 mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:grid-cols-4">

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_15px_rgba(34,197,94,.8)]" />
          <div>
            <p className="text-[11px] uppercase tracking-[4px] text-slate-400">
              Verification
            </p>
            <h4 className="font-bold text-white">
              Verified Member
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <div className="text-2xl">💎</div>
          <div>
            <p className="text-[11px] uppercase tracking-[4px] text-slate-400">
              Package
            </p>
            <h4 className="font-bold text-yellow-300">
              {member?.membership}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <div className="text-2xl">🌍</div>
          <div>
            <p className="text-[11px] uppercase tracking-[4px] text-slate-400">
              Country
            </p>
            <h4 className="font-bold text-white">
              {member?.country}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <div className="text-2xl">🔒</div>
          <div>
            <p className="text-[11px] uppercase tracking-[4px] text-slate-400">
              Security
            </p>
            <h4 className="font-bold text-green-400">
              Protected
            </h4>
          </div>
        </div>

      </div>

    </section>
    
  );
}