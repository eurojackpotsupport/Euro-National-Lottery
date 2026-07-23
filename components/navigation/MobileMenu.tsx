"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Trophy,
  BarChart3,
  UserPlus,
  Phone,
  LogIn,
} from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSettings } from "@/hooks/useSettings";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();
  const { settings } = useSettings();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Results",
      href: "/results",
      icon: BarChart3,
    },
    {
      name: "Winners",
      href: "/winners",
      icon: Trophy,
    },
    {
      name: "Membership",
      href: "/membership",
      icon: UserPlus,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Menu */}
      <aside
        className={`absolute top-0 right-0 h-full w-[76%] max-w-[350px] max-w-[360px] bg-[#071A33] border-l border-yellow-500/20 rounded-l-3xl shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-yellow-500/20 px-6 py-6">

          <div className="flex items-center gap-4">

            <Image
              src={settings?.logo_url || "/euro-logo-v2.png"}
              alt={settings?.website_name || "EuroMillions"}
              width={64}
              height={64}
              className="object-contain"
            />

            <div>

              <h2 className="text-lg font-bold text-white">
                {settings?.website_name || "EuroMillions"}
              </h2>

              <p className="text-xs text-yellow-400">
                {settings?.website_tagline || "Official Membership"}
              </p>

            </div>

          </div>

       

        </div>

        {/* Navigation */}
        <nav className="flex h-[calc(100%-96px)] flex-col px-8 py-7">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`mb-3 flex items-center gap-4 rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/30"
                    : "text-white hover:bg-[#10284A] hover:text-yellow-400"
                }`}
                style={{
                  transitionDelay: open ? `${index * 70}ms` : "0ms",
                }}
              >
                <Icon size={22} />

                <span>{item.name}</span>
              </Link>
            );
          })}
<div className="mt-auto">
  <div className="my-6 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

  <Link
    href="/login"
    onClick={onClose}
    className="flex items-center justify-center gap-3 rounded-xl bg-yellow-500 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
  >
    <LogIn size={20} />
    Login
  </Link>
</div>

{/* Login */}

        </nav>

      </aside>
    </div>
  );
}