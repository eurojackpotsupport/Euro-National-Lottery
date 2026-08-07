"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";

const ADMIN_EMAIL = "cpamegahub@gmail.com";

const menus = [
  { name: "Dashboard", href: "/admin" },
  { name: "Members", href: "/admin/members" },
  { name: "Membership Codes", href: "/admin/membership-codes" },
  { name: "Jackpot", href: "/admin/jackpot" },
  { name: "VIP Vault", href: "/admin/vault" },
   { name: "Upcoming Card", href: "/admin/upcoming-card" },
  { name: "Results", href: "/admin/results" },
  { name: "Latest Results", href: "/admin/latest-results" },
  { name: "Winners", href: "/admin/winners" },
  { name: "Contact", href: "/admin/contact" },
  { name: "Notifications", href: "/admin/notifications" },
  { name: "Announcement Bar", href: "/admin/announcement" },
  { name: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      if (session.user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      setChecking(false);
    }

    checkAdmin();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#081B33]">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
          <p className="mt-6 text-lg font-semibold text-white">
            Verifying Administrator...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#081B33]">

      {/* Fixed Sidebar */}
      <aside
        className="
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-yellow-500/20
          bg-[#061529]
        "
      >
        <div className="p-8">
          <h2 className="text-3xl font-black text-yellow-400">
            EuroMillions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto space-y-2 px-4 pb-4">
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

        <div className="border-t border-yellow-500/20 p-4">
          <button
            onClick={logout}
            className="w-full rounded-xl bg-red-600 px-5 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="
          ml-72
          h-screen
          overflow-y-auto
          bg-[#081B33]
          px-10
          py-8
        "
      >
        {children}
      </main>

    </div>
  );
}