"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSettings } from "@/hooks/useSettings";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { settings } = useSettings();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Results", href: "/results" },
    { name: "Winners", href: "/winners" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-yellow-500/20 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-[#071A33]/95 shadow-2xl"
            : "bg-[#071A33]/85"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={settings?.logo_url || "/euro-logo-v2.png"}
              alt={settings?.website_name || "EuroMillions"}
              width={90}
              height={90}
              className="object-contain"
              priority
            />

            <div>
              <h2 className="text-white font-bold text-lg">
                {settings?.website_name || "EuroMillions"}
              </h2>

              <p className="text-yellow-400 text-xs">
                {settings?.website_tagline || "Official Membership"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ${
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <Link
              href="/login"
              className="rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden rounded-lg p-2 text-white transition hover:bg-[#10284A] hover:text-yellow-400"
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}