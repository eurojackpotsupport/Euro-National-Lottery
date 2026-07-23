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

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-20"></div>

            <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-yellow-400">

              <Image
                src={member?.avatar_url || "/default-avatar.png"}
                alt="Member"
                fill
                className="object-cover"
              />

            </div>

            <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-2 border-[#102C57] bg-green-400"></div>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[5px] text-yellow-400 font-semibold">
              Welcome Back
            </p>

            <h1 className="mt-2 text-5xl font-black text-white">
              {member?.full_name || "Member"}
            </h1>

            <div className="mt-4 flex flex-wrap gap-3">

              <span className="rounded-full bg-yellow-500/15 border border-yellow-500 px-5 py-2 text-yellow-400 font-bold">
                {member?.membership}
              </span>

              <span className={`rounded-full border px-5 py-2 font-bold ${statusClass}`}>
                {member?.status}
              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-xs uppercase tracking-[3px] text-slate-400">
              Member ID
            </p>

            <h3 className="mt-2 text-xl font-bold text-yellow-400">
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

          <div className="flex items-end">
            <Link
              href="/dashboard/membership"
              className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
            >
              View Membership →
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}