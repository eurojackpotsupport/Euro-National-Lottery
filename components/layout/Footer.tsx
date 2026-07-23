"use client";

import Image from "next/image";
import Link from "next/link";
import { useSettings } from "@/hooks/useSettings";
import { ChevronUp, Mail, MapPin, ShieldCheck } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const { settings, loading } = useSettings();

  if (loading) {
    return (
      <div className="bg-blue-600 text-white p-10">
        Loading...
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="bg-red-600 text-white p-10">
        Settings is NULL
      </div>
    );
  }

return (
  <footer className="bg-gradient-to-b from-[#071A33] to-[#04101E] border-t border-yellow-500/20">

    {/* Trust Bar */}
    <div className="border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-5">

        {[
          "Official Membership",
          "SSL Secured",
          "Trusted Worldwide",
          "Secure Payments",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 text-sm text-slate-300"
          >
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            {item}
          </div>
        ))}

      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Logo */}
        <div>

          <Image
            src={settings.logo_url || "/euro-logo-v2.png"}
            alt={settings.website_name}
            width={75}
            height={75}
            className="object-contain"
          />

          <h2 className="mt-5 text-2xl font-bold text-yellow-400">
            {settings.website_name}
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            {settings.website_tagline}
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-4">

            <li>
              <Link className="text-slate-400 transition hover:text-yellow-400 hover:translate-x-1 inline-block" href="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="text-slate-400 transition hover:text-yellow-400 hover:translate-x-1 inline-block" href="/results">
                Results
              </Link>
            </li>

            <li>
              <Link className="text-slate-400 transition hover:text-yellow-400 hover:translate-x-1 inline-block" href="/winners">
                Winners
              </Link>
            </li>

            <li>
              <Link className="text-slate-400 transition hover:text-yellow-400 hover:translate-x-1 inline-block" href="/membership">
                Membership
              </Link>
            </li>

            <li>
              <Link className="text-slate-400 transition hover:text-yellow-400 hover:translate-x-1 inline-block" href="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Support */}
        <div>

          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
            Support
          </h3>

          <ul className="space-y-4 text-slate-400">

            <li className="transition hover:text-yellow-400 cursor-pointer">
              Help Center
            </li>

            <li className="transition hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </li>

            <li className="transition hover:text-yellow-400 cursor-pointer">
              Terms & Conditions
            </li>

            <li className="transition hover:text-yellow-400 cursor-pointer">
              FAQs
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>{settings.support_email}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span>{settings.office_address}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <FaWhatsapp className="text-green-500 text-xl" />

              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-yellow-400"
              >
                +{settings.whatsapp}
              </a>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            {[
              {
                href: settings.facebook,
                icon: <FaFacebookF />,
              },
              {
                href: settings.instagram,
                icon: <FaInstagram />,
              },
              {
                href: settings.telegram,
                icon: <FaTelegramPlane />,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:scale-110 hover:bg-yellow-400"
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

      </div>

    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

      <p className="text-center text-slate-500">
        {settings.footer_text}
      </p>

      <div className="flex gap-6 text-slate-500">

        <Link href="#" className="hover:text-yellow-400">
          Privacy
        </Link>

        <Link href="#" className="hover:text-yellow-400">
          Terms
        </Link>

        <Link href="#" className="hover:text-yellow-400">
          Cookies
        </Link>

      </div>

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="rounded-full bg-yellow-500 p-3 text-black transition hover:scale-110 hover:bg-yellow-400"
      >
        <ChevronUp size={20} />
      </button>

    </div>

    </footer>
  );
}