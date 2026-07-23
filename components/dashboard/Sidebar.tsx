"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const menus: {
  name: string;
  href: string;
  icon: string;
  badge?: string;
}[] = [
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
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 flex h-screen w-72 flex-col bg-[#061529] border-r border-yellow-500/20 transform transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Header */}

        <div className="flex items-center justify-between p-8">

          <div>

            <h2 className="text-3xl font-black text-yellow-400">
              EuroMillions
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Official Membership
            </p>

          </div>

          
        </div>

        {/* Navigation */}

        <nav className="flex-1 px-4 space-y-2">

          {menus.map((menu) => (

            <Link
              key={menu.href}
              href={menu.href}
              onClick={onClose}
              className={`group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${
                pathname === menu.href
                  ? "bg-yellow-500 text-black font-bold shadow-lg"
                  : "text-slate-300 hover:bg-[#10284a] hover:translate-x-1"
              }`}
            >
              <div className="flex w-full items-center justify-between">
  <div className="flex items-center gap-4">
    <span className="text-xl transition-transform duration-300 group-hover:scale-110">
      {menu.icon}
    </span>

    <span>{menu.name}</span>
  </div>

  {menu.badge && (
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
    <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]"></span>
  </span>
)}
</div>

            </Link>

          ))}

        </nav>

        {/* Logout */}

        <div className="border-t border-slate-700 p-4">

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-4 rounded-xl border border-slate-700 bg-[#0B1F3A] px-5 py-4 text-white transition-all duration-300 hover:bg-[#132B4D] hover:border-yellow-500"
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