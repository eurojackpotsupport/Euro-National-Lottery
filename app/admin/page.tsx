"use client";

import Link from "next/link";

const cards = [
  {
    title: "Members",
    description: "Manage Member IDs",
    href: "/admin/members",
  },
  {
    title: "Jackpot",
    description: "Update Jackpot Amount",
    href: "/admin/jackpot",
  },
  {
    title: "Results",
    description: "Publish Draw Results",
    href: "/admin/results",
  },
  {
    title: "Winners",
    description: "Manage Winners",
    href: "/admin/winners",
  },
  {
    title: "Notifications",
    description: "Send Notifications",
    href: "/admin/notifications",
  },
  {
    title: "Settings",
    description: "Website Settings",
    href: "/admin/settings",
  },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl">

      {/* Header */}

      <div className="rounded-3xl border border-yellow-500/20 bg-[#102b52] p-8">

        <p className="text-sm uppercase tracking-[6px] text-yellow-400">
          EuroMillions
        </p>

        <h1 className="mt-3 text-5xl font-black text-white">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Welcome back, Administrator.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => (

          <div
            key={card.href}
            className="rounded-2xl border border-yellow-500/20 bg-[#102b52] p-6"
          >

            <h2 className="text-2xl font-bold text-white">
              {card.title}
            </h2>

            <p className="mt-3 text-slate-400">
              {card.description}
            </p>

            <Link
              href={card.href}
              className="mt-8 inline-flex rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
            >
              Open
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}