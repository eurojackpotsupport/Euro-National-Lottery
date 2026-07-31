"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    name: "My Membership",
    href: "/dashboard/membership",
    icon: "🎫",
  },
  {
    name: "VIP Vault",
    href: "/dashboard/vault",
    icon: "💎",
    badge: "dot",
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: "🔔",
  },
  {
    name: "Support",
    href: "/dashboard/support",
    icon: "💬",
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: "👤",
  },
];

export default function Sidebar({
  open,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("memberId");
    router.push("/login");
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-yellow-500/20 bg-[#061529] transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-5 lg:px-7 lg:pt-8 lg:pb-6">
          <h2 className="text-3xl font-black text-yellow-400">
            EuroMillions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Official Membership
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto px-3 py-1 lg:py-2">
          <div className="space-y-1 lg:space-y-2">
            {menus.map((menu) => {
              const active = pathname === menu.href;

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  onClick={onClose}
                  className={`flex w-full items-center rounded-xl px-5 py-3 lg:py-4 transition-all duration-200 ${
                    active
                      ? "bg-yellow-500 text-black shadow-lg"
                      : "text-slate-300 hover:bg-[#10284a]"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-6 w-6 items-center justify-center text-xl">
                        {menu.icon}
                      </span>

                      <span
                        className={`text-[15px] lg:text-[16px] ${
                          active ? "font-bold" : "font-medium"
                        }`}
                      >
                        {menu.name}
                      </span>
                    </div>

                    {menu.badge && (
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>

                        <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,.9)]"></span>
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-700 p-3 lg:p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-4 rounded-xl border border-slate-700 bg-[#0B1F3A] px-5 py-3 lg:py-4 text-white transition hover:border-yellow-500 hover:bg-[#132B4D]"
          >
            <span className="text-xl text-yellow-400">
              🚪
            </span>

            <span className="font-semibold">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}