"use client";

import { Member } from "@/data/members";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MembershipPage() {
  const [memberId, setMemberId] = useState("");
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    async function loadMember() {
      const id = localStorage.getItem("memberId");

      if (!id) return;

      setMemberId(id);

      const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("id", id)
        .single();

      setMember(data);
    }

    loadMember();
  }, []);

  return (
  <div className="w-full min-h-screen bg-gradient-to-br from-[#081B33] via-[#0B2546] to-[#061626]">
    <div className="mx-auto w-full px-4 pt-4 pb-6 lg:px-8 lg:pt-8 space-y-3 lg:space-y-8">
      {/* Page Header */}

      <div className="text-center lg:text-left">

        
        <h1
 className="
mt-1
text-3xl
sm:text-4xl
lg:text-5xl
font-black
bg-gradient-to-r
from-white
via-yellow-100
to-yellow-400
bg-clip-text
text-transparent
"
>
          My Membership
        </h1>

      </div>

      {/* Membership Card */}

<div
  className="
    relative
    overflow-hidden
    rounded-3xl lg:rounded-[32px]
    border
    border-yellow-300/30
  ring-1
ring-white/5
    bg-black
    transition-all
duration-500
shadow-[0_25px_80px_rgba(0,0,0,.45)]
hover:-translate-y-1
hover:shadow-[0_35px_100px_rgba(250,204,21,.15)]
  "
>
  {/* Desktop Background Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 z-0 hidden h-full w-full object-cover lg:block"
>
  <source
    src="/videos/membership-desktop.mp4"
    type="video/mp4"
  />
</video>

{/* Mobile Background Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 z-0 h-full w-full object-cover lg:hidden"
>
  <source
    src="/videos/membership-mobile.mp4"
    type="video/mp4"
  />
</video>

{/* Dark Overlay */}
<div className="absolute inset-0 z-[1] bg-[#081B33]/70" />

{/* Gold Overlay */}
<div className="absolute inset-0 z-[2] bg-gradient-to-br from-yellow-400/10 via-transparent to-blue-900/40" />

  {/* Background Effects */}

  {/* Main Gold Light */}
<div className="absolute -top-48 -left-36 h-[260px] w-[260px] lg:h-[520px] lg:w-[520px] rounded-full bg-yellow-300/25 blur-[170px]" />

  {/* White Reflection */}
 <div className="absolute top-10 right-20 h-[320px] w-[320px] rounded-full bg-white/10 blur-[130px]" />

  {/* Blue Glow */}
  <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[170px]" />

  {/* Bottom Gold */}
  <div className="absolute bottom-0 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[90px]" />
  <div
    className="
      absolute
      inset-0
      pointer-events-none
      opacity-20
      bg-[linear-gradient(115deg,transparent_25%,rgba(255,255,255,.14)_45%,transparent_60%)]
    "
  />

  {/* 6. Noise Texture */}
  <Image
    src="/textures/metal-noise.png"
    alt=""
    fill
    className="
      pointer-events-none
      object-cover
      opacity-[0.035]
      mix-blend-soft-light
    "
  />
  {/* Glass Reflection */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
  "
>
  <div
    className="
      glass-reflection
      absolute
      -top-1/2
      -left-1/3
      h-[220%]
      w-[45%]
      rotate-12
      rounded-full
      bg-white/8
      blur-3xl
    "
  />
</div>
{/* Top Glass Highlight */}
<div
  className="
    pointer-events-none
    absolute
    top-0
    left-10
    h-px
    w-2/3
    bg-gradient-to-r
    from-transparent
    via-white/50
    to-transparent
  "
/>
  {/* Card Content */}

{/* Premium Inner Border */}
<div className="pointer-events-none absolute inset-[6px] lg:inset-[10px] rounded-[24px] border border-white/5" />

  <div className="relative z-10 p-3 sm:p-5 lg:p-10">

    {/* Verified Badge */}

    <div className="mb-4 lg:mb-0 flex justify-center lg:absolute lg:right-8 lg:top-8 lg:mb-0">
      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/10 px-3 py-1.5 lg:px-5 lg:py-2 backdrop-blur-xl">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs lg:text-sm font-bold tracking-wide text-emerald-300">
          VERIFIED MEMBER
        </span>
      </div>
    </div>

    {/* Header */}

    <div className="text-center lg:text-left">
      

     <h2 className="mt-1 text-lg lg:text-3xl
sm:text-3xl
lg:text-5xl font-black text-white sm:text-4xl lg:text-5xl">
        EuroMillions
      </h2>
    </div>

    {/* Main Content */}

    <div className="mt-5 lg:mt-5 lg:mt-10 grid gap-5 lg:gap-10 lg:grid-cols-[1.2fr_.8fr]">

      {/* LEFT */}

      <div>

        {/* Avatar + Member ID */}

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5 sm:items-center">

          <div className="relative h-20 w-20
sm:h-24 sm:w-24
lg:h-28 lg:w-28 overflow-hidden rounded-full border-4 border-yellow-300 bg-white shadow-[0_0_35px_rgba(250,204,21,.35)]">

            <Image
              src={member?.avatar_url || "/default-avatar.png"}
              alt="Member"
              fill
              className="object-cover"
            />

          </div>

          <div className="text-center sm:text-left">

            <p className="text-xs lg:text-sm text-slate-300">
              Member ID
            </p>

            <h3 className="mt-1 break-all text-lg lg:text-3xl
sm:text-3xl
lg:text-5xl font-black leading-tight text-white lg:text-5xl">
              {member?.id}
            </h3>

          </div>

        </div>

        {/* Information */}

{/* Information */}

<div className="mt-5 lg:mt-10 grid grid-cols-2 gap-y-5 lg:gap-y-8">

  <div className="pl-6 pr-2 lg:pl-0">
    <p className="text-xs uppercase tracking-[2px] text-slate-300">
      Membership
    </p>

    <h4 className="mt-2 text-base lg:text-2xl font-bold text-white">
      {member?.membership}
    </h4>
  </div>

  <div className="pl-18 lg:pl-0">
    <p className="text-xs uppercase tracking-[2px] text-slate-300">
      Status
    </p>

    <h4 className="mt-2 inline-flex items-center gap-2 text-base lg:text-2xl font-bold text-emerald-400">
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
      {member?.status}
    </h4>
  </div>

 <div className="pl-6 pr-2 lg:pl-0">
    <p className="text-xs uppercase tracking-[2px] text-slate-300">
      Country
    </p>

    <h4 className="mt-2 text-base lg:text-2xl font-bold text-white">
      {member?.country}
    </h4>
  </div>

  <div className="pl-18 lg:pl-0">
    <p className="text-xs uppercase tracking-[2px] text-slate-300">
      Join Date
    </p>

    <h4 className="mt-2 text-base lg:text-2xl font-bold text-white">
      {member?.joined_date}
    </h4>
  </div>

</div>
{/* Full Name */}

<div className="mt-5 lg:mt-5 lg:mt-10 rounded-3xl border border-white/10 bg-white/8 p-4 lg:p-6 backdrop-blur-xl">

  <p className="text-xs uppercase tracking-[4px] text-slate-300">
    Member Name
  </p>

  <h3 className="mt-3 break-words text-lg lg:text-4xl font-black text-white">
    {member?.full_name}
  </h3>

</div>

</div>

{/* RIGHT */}

<div className="flex flex-col items-center justify-center">

  {/* VIP Seal */}

  <div
  className="
    relative
    flex
    h-36
    w-36
    items-center
    justify-center
    rounded-full
    border-[4px]
    border-yellow-300/90
    bg-gradient-to-br
    from-[#13345E]
    via-[#0C2342]
    to-[#081B33]
    shadow-[0_0_25px_rgba(250,204,21,.18)]
    ring-1
    ring-white/10
    sm:h-44
    sm:w-44
    lg:h-56
    lg:w-56
  "
>
  {/* Inner Ring */}
<div className="absolute inset-3 rounded-full border border-yellow-300/20" />

  {/* Soft Center Glow */}
  <div className="absolute h-24 w-24 rounded-full bg-yellow-300/10 blur-3xl" />

  <div className="relative z-10 text-center">
    <div className="text-4xl lg:text-6xl text-yellow-300 drop-shadow-[0_0_18px_rgba(250,204,21,.45)]">
      ★
    </div>

   <h3 className="mt-1 text-sm sm:text-lg lg:text-4xl font-black tracking-wide text-yellow-300">
  OFFICIAL
</h3>

<p className="mt-0.5 text-[9px] sm:text-xs lg:text-sm tracking-[2px] lg:tracking-[5px] text-white">
  VERIFIED
</p>
  </div>
</div>

  <div className="mt-4 lg:mt-5 lg:mt-8 text-center">

    <p className="text-xs uppercase tracking-[6px] text-slate-300">
      Official Seal
    </p>

    <h3 className="mt-3 text-4xl lg:text-6xl font-black text-white">
      VIP
    </h3>

  </div>

</div>

</div>

</div>

</div>

{/* Action Buttons */}

<div className="mt-4 lg:mt-8 flex flex-col gap-4 sm:flex-row">

  <button
  className="
    w-full
    sm:w-auto
    rounded-2xl
    bg-gradient-to-b
    from-[#F6C21A]
    via-[#F2B705]
    to-[#E8A900]
    border
    border-[#FFD75A]/30
    px-8
    py-3
    lg:py-4
    font-bold
    text-[#111111]
    transition-all
    duration-300
    shadow-[0_6px_18px_rgba(242,183,5,.18)]
    hover:brightness-105
    hover:shadow-[0_8px_22px_rgba(242,183,5,.25)]
  "
>
  Download Membership Card
</button>

  <button
    className="
      w-full
      sm:w-auto
      rounded-2xl
      border
      border-white/20
      bg-white/10
      px-8
     py-3 lg:py-4
      font-bold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-white
      hover:text-[#081B33]
    "
  >
    Print Card
  </button>

</div>

</div>

</div>
);
}