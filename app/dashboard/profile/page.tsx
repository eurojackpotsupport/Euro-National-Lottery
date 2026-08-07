"use client";

import { useRouter } from "next/navigation";
import { Member } from "@/data/members";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter(); // <-- Add this line

  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    async function loadMember() {
      const id = localStorage.getItem("memberId");

      if (!id) return;

      const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setMember(data);
    }

    loadMember();
  }, []);

  return (

    <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}

      <div>

        <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">

</p>

<h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
  My Profile
</h1>

<p className="mt-3 text-slate-400">
  View your official EuroMillions membership information.
</p>
      </div>

 <div className="mx-auto max-w-7xl">

  {/* Profile Header */}

  <div className="lg:grid lg:grid-cols-[360px_1fr] lg:gap-10 lg:items-start">

<div
  className="
    relative
    flex
    flex-col
    items-center
    rounded-3xl
    border
    border-yellow-500/20
    bg-[#10284B]
    p-8
    lg:min-h-[575px]
    lg:justify-between
    lg:sticky
    lg:top-8
  "
>
  {/* Glow */}
  <div className="absolute inset-0 -z-10 rounded-full bg-yellow-400/20 blur-3xl" />

  <div className="relative h-44 w-44 lg:h-56 lg:w-56 overflow-visible">
  {/* Avatar */}
  <div className="relative h-44 w-44 lg:h-56 lg:w-56">
  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-yellow-400">
    <Image
      src={member?.avatar_url || "/default-avatar.png"}
      alt="Profile"
      fill
      className="object-cover"
    />
  </div>


  {/* Online Status */}
<div
  className="
    absolute
    bottom-3
    right-3
    lg:bottom-4
    lg:right-4
    h-6
    w-6
    lg:h-6
    lg:w-6
    rounded-full
    border-[3px]
    border-[#10284B]
    bg-emerald-400
    shadow-[0_0_12px_rgba(74,222,128,0.8)]
  "
>
  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
</div>
</div>
</div>

    <h2 className="mt-6 text-3xl lg:text-4xl font-black text-white text-center">
      {member?.full_name}
    </h2>

    <p className="mt-2 text-center text-lg font-semibold text-yellow-400">
      {member?.membership}
    </p>

    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-2 text-sm font-bold text-emerald-400">
  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
  <span>VERIFIED MEMBER</span>
</div>


  </div>

  {/* Information Cards */}
  <div className="mt-12 lg:mt-0">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

    {[
      ["👤","Full Name",member?.full_name || "Not Available","white"],
      ["🆔","Member ID",member?.id || "Not Available","yellow"],
      ["💎","Membership",member?.membership || "Not Available","white"],
      ["🟢","Status",member?.status || "Not Available","emerald"],
      ["🌍","Country",member?.country || "Not Available","white"],
      ["📅","Joined",member?.joined_date || "Not Available","white"],
      ["📧","Email",member?.email || "Not Available","white"],
      ["📱","Phone",member?.phone || "Not Available","white"],
    ].map(([icon,label,value,color])=>(
      <div
        key={String(label)}
        className="
          rounded-2xl
          border
          border-yellow-500/20
          bg-[#10284B]
          min-h-[120px] p-7
          transition-all
          duration-300
          hover:border-yellow-400/40
          hover:-translate-y-1
hover:border-yellow-400/50
hover:shadow-[0_20px_50px_rgba(250,204,21,.15)]
        "
      >

        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          {icon} {label}
        </p>

        <h3
  className={`mt-3 text-xl font-bold break-all leading-tight ${
    color === "yellow"
      ? "text-yellow-400"
      : color === "emerald"
      ? "text-emerald-400"
      : "text-white"
  }`}
>
  {value}
</h3>

      </div>
    ))}

  </div>
</div>

  {/* Buttons */}
 <div className="mt-8 w-full pb-2">
  <button
    onClick={() => router.push("/dashboard/support")}
    className="
      w-full
      rounded-2xl
      bg-yellow-400
      py-4
      font-bold
      text-black
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:bg-yellow-300
    "
  >
    Upgrade your Membership
  </button>
  </div>

</div>
        </div>
        </div>
  );
}