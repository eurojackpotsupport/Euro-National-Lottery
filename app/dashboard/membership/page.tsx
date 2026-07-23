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
  <div className="w-full min-h-screen bg-[#081B33]">
    <div className="mx-auto w-full px-6 pt-6 pb-8 lg:px-8 lg:pt-8 space-y-8">
      {/* Page Header */}

      <div className="text-center lg:text-left">

        <p className="text-xs sm:text-sm font-bold uppercase tracking-[6px] text-yellow-400">
          Official Membership
        </p>

        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white">
          My Membership
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Your official EuroMillions membership details.
        </p>

      </div>

      {/* Membership Card */}

      <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 shadow-[0_25px_80px_rgba(0,0,0,.35)]">

        <div className="relative p-6 sm:p-8 lg:p-10">

          {/* Verified Badge */}

          <div className="mb-8 flex justify-center lg:absolute lg:right-8 lg:top-8 lg:mb-0">

            <div className="rounded-full border border-black bg-[#081B33] px-5 py-3 shadow-xl">

              <span className="font-bold text-green-400">
                ● VERIFIED
              </span>

            </div>

          </div>

          {/* Header */}

          <div className="text-center lg:text-left">

            <p className="text-[11px] font-bold uppercase tracking-[6px]">
              Official Member
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl lg:text-6xl">
              EuroMillions
            </h2>

          </div>

          {/* Main Content */}

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">

            {/* LEFT */}

            <div>

              {/* Avatar + Member ID */}

              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">

                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-black bg-white shadow-xl">

                  <Image
                    src={member?.avatar_url || "/default-avatar.png"}
                    alt="Member"
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="text-center sm:text-left">

                  <p className="text-sm opacity-70">
                    Member ID
                  </p>

                  <h3 className="mt-1 break-all text-3xl font-black leading-tight lg:text-5xl">
                    {member?.id}
                  </h3>

                </div>

              </div>

              {/* Information */}

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">

                <div>

                  <p className="text-xs opacity-70">
                    Membership
                  </p>

                  <h4 className="mt-1 text-lg font-bold lg:text-2xl">
                    {member?.membership}
                  </h4>

                </div>

                <div>

                  <p className="text-xs opacity-70">
                    Status
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-green-900 lg:text-2xl">
                    {member?.status}
                  </h4>

                </div>

                <div>

                  <p className="text-xs opacity-70">
                    Country
                  </p>

                  <h4 className="mt-1 text-lg font-bold lg:text-2xl">
                    {member?.country}
                  </h4>

                </div>

                <div>

                  <p className="text-xs opacity-70">
                    Join Date
                  </p>

                  <h4 className="mt-1 text-lg font-bold lg:text-2xl">
                    {member?.joined_date}
                  </h4>

                </div>

              </div>

              {/* Full Name */}

              <div className="mt-10 rounded-2xl border border-black/10 bg-white/20 p-5 backdrop-blur-sm">

                <p className="text-xs uppercase tracking-[3px] opacity-70">
                  Member Name
                </p>

                <h3 className="mt-2 break-words text-2xl font-black lg:text-4xl">
                  {member?.full_name}
                </h3>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col items-center justify-center">

              <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-black bg-[#081B33] shadow-2xl sm:h-44 sm:w-44 lg:h-52 lg:w-52">

                <div className="text-center">

                  <div className="text-5xl text-yellow-400">
                    ★
                  </div>

                  <h3 className="mt-2 text-2xl font-black text-yellow-400 lg:text-3xl">
                    OFFICIAL
                  </h3>

                  <p className="tracking-[3px] text-white">
                    VERIFIED
                  </p>

                </div>

              </div>

              <div className="mt-6 text-center">

                <p className="text-xs uppercase tracking-[5px]">
                  Official Seal
                </p>

                <h3 className="mt-2 text-5xl font-black lg:text-6xl">
                  VIP
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
            {/* Action Buttons */}

      <div className="flex flex-col gap-4 sm:flex-row">

        <button
          className="
            w-full
            sm:w-auto

            rounded-2xl

            bg-gradient-to-r
            from-yellow-400
            to-yellow-500

            px-8
            py-4

            font-bold
            text-black

            shadow-lg

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-yellow-500/40
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
            border-white/40

            bg-white/5

            px-8
            py-4

            font-bold
            text-white

            backdrop-blur-sm

            transition-all
            duration-300

            hover:bg-white
            hover:text-black
          "
        >
          Print Card
        </button>

            </div>

    </div>
  </div>
);
}