"use client";

import { Member } from "@/data/members";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function ProfilePage() {
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

<div className="rounded-3xl border border-yellow-500/20 bg-[#112B52] p-5 shadow-[0_0_35px_rgba(250,204,21,0.25)] sm:p-8 lg:p-10">


  <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Avatar */}

<div className="flex w-full flex-col items-center lg:w-auto">

  <div className="relative">

    {/* Avatar */}

    <div className="relative h-36 w-36 rounded-full sm:h-44 sm:w-44 lg:h-48 lg:w-48 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-1 shadow-[0_0_35px_rgba(250,204,21,0.35)]">

      <div className="relative h-full w-full overflow-hidden rounded-full bg-white">

        <Image
          src={member?.avatar_url || "/default-avatar.png"}
          alt="Member Profile"
          fill
          sizes="160px"
          priority
          className="object-cover"
        />

      </div>

    </div>

  </div>

  {/* Verified Badge */}

  <div className="mt-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-5 py-2 text-sm font-semibold text-emerald-400">
  ✓ VERIFIED ACCOUNT
</div>

  {/* Change Photo */}

  <button className="mt-5 w-full rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-yellow-400">
    📷 Change Photo
  </button>

</div>

          {/* Details */}

          <div className="w-full flex-1">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">

              <div>
                <p className="text-slate-400 text-sm">
                  Full Name
                </p>

                <h3 className="break-words text-xl font-bold text-white sm:text-2xl">
                {member?.full_name || "Not Available"}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Member ID
                </p>

                <h3 className="text-2xl font-bold text-yellow-400">
                  {member?.id}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Membership
                </p>

                <h3 className="text-white font-bold">
                  {member?.membership}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Status
                </p>

                <h3 className="text-green-400 font-bold">
                  {member?.status}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Country
                </p>

                <h3 className="text-white">
                  {member?.country}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Joined
                </p>

                <h3 className="text-white">
                  {member?.joined_date}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Email
                </p>

                <h3 className="text-white">
  {member?.email || "Not Available"}
</h3>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Phone
                </p>

                <h3 className="text-white">
                 {member?.phone || "Not Available"}
                 </h3>
              </div>

            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="w-full rounded-xl border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black sm:w-auto">
                Download Member Card
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}