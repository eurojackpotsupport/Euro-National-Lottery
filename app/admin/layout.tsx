"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Members",
    href: "/admin/members",
  },
  {
    name: "Jackpot",
    href: "/admin/jackpot",
  },
  {
    name: "Results",
    href: "/admin/results",
  },
  {
    name: "Winners",
    href: "/admin/winners",
  },
  {
    name: "Contact",
    href: "/admin/contact",
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
  },
  {
    name: "Announcement Bar",
    href: "/admin/announcement",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      router.replace("/admin/login");
    }
  }, [router]);

  function logout() {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-[#081B33]">

      {/* Sidebar */}

      <aside className="w-72 border-r border-yellow-500/20 bg-[#061529]">

        <div className="p-8">

          <h2 className="text-3xl font-black text-yellow-400">
            EuroMillions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Admin Panel
          </p>

        </div>

        <nav className="space-y-2 px-4">

          {menus.map((menu) => (

            <Link
              key={menu.href}
              href={menu.href}
              className={`block rounded-xl px-5 py-4 transition ${
                pathname === menu.href
                  ? "bg-yellow-500 font-bold text-black"
                  : "text-slate-300 hover:bg-[#10284a]"
              }`}
            >
              {menu.name}
            </Link>

          ))}

        </nav>

        <div className="mt-auto p-4">

          <button
            onClick={logout}
            className="w-full rounded-xl bg-red-600 px-5 py-4 font-bold text-white hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </aside>

      {/* Main */}

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}