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
    <section className="rounded-[32px] border border-yellow-500/15 bg-gradient-to-br from-[#102C57] via-[#153866] to-[#0A1F3D] p-8 shadow-2xl">

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-6">

  <div className="relative">

    <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-20"></div>

    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-yellow-400 sm:h-32 sm:w-32 lg:h-36 lg:w-36">

      <Image
        src={member?.avatar_url || "/default-avatar.png"}
        alt="Member"
        fill
        sizes="144px"
        className="object-cover"
      />

    </div>

    <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-[#102C57] bg-green-400 sm:h-6 sm:w-6"></div>

  </div>

  <div className="w-full">

    <p className="text-xs uppercase tracking-[5px] text-yellow-400 font-semibold sm:text-sm">
      Welcome Back
    </p>

    <h1 className="mt-2 break-words text-4xl font-black text-white sm:text-5xl lg:text-6xl">
      {member?.full_name || "Member"}
    </h1>

    <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">

      <span className="rounded-full border border-yellow-500 bg-yellow-500/15 px-5 py-2 font-bold text-yellow-400">
        {member?.membership}
      </span>

      <span className={`rounded-full border px-5 py-2 font-bold ${statusClass}`}>
        {member?.status}
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
              className="w-full rounded-xl bg-yellow-500 px-6 py-3 text-center font-bold text-black transition hover:bg-yellow-400 sm:w-auto"
            >
              View Membership →
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}