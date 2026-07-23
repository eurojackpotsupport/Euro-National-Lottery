"use client";

import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

import { supabase } from "@/lib/supabase";
import type { ContactSettings } from "@/types/contact";

export default function ContactPage() {
  const [contact, setContact] = useState<ContactSettings>({
  id: 1,

  phone_number: "",
  email_address: "",

  office_name: "",
  office_country: "",

  whatsapp_url: "",
  email_button_url: "",
});

useEffect(() => {
  loadContact();
}, []);

async function loadContact() {
  const { data } = await supabase
    .from("contact_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (data) {
    setContact(data);
  }
}
  const countries = [
  { code: "GB", name: "United Kingdom" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "PT", name: "Portugal" },
  { code: "BE", name: "Belgium" },
  { code: "IE", name: "Ireland" },
  { code: "LU", name: "Luxembourg" },
  { code: "CH", name: "Switzerland" },
  { code: "AT", name: "Austria" },
  { code: "MC", name: "Monaco" },
];
  return (
    <main className="min-h-screen bg-[#081B33]">

      {/* Hero */}

      <section className="relative overflow-hidden">

        {/* Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Existing Glow */}
  <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[170px]" />

  <div className="absolute -bottom-20 left-0 h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-[130px]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

  {/* Extra Premium Glow */}
  <div className="absolute top-24 left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[180px]" />

  <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-[180px]" />

  <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[200px]" />

  {/* Floating Dots */}
  <div className="absolute left-20 top-36 h-2 w-2 animate-pulse rounded-full bg-yellow-400/60" />

  <div className="absolute right-40 top-52 h-3 w-3 animate-pulse rounded-full bg-blue-300/60" />

  <div className="absolute left-1/3 bottom-24 h-2 w-2 animate-pulse rounded-full bg-white/40" />

</div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
              Official Support
            </span>

            <h1 className="mt-8 text-5xl font-black text-white md:text-7xl drop-shadow-[0_0_20px_rgba(255,193,7,0.18)]">
              Contact Us
            </h1>
            <div className="mx-auto mt-8 h-[2px] w-88 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_20px_rgba(255,193,7,0.7)]" />
            <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
              Need help with your membership, draw results or general enquiries?
              Our support team is available to assist you.
            </p>

          </div>

        </div>

      </section>
      {/* Contact Cards */}

<section className="relative mx-auto max-w-7xl px-6 pb-20">

  <div className="grid gap-6 md:grid-cols-3">

    {/* Phone */}

    <div className="group rounded-[30px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_45px_rgba(255,193,7,0.18)]">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        📞
      </div>

      <h3 className="text-2xl font-black text-white">
        Phone Support
      </h3>

      <p className="mt-4 text-lg font-semibold text-yellow-400">
        {contact.phone_number}
      </p>

      <p className="mt-3 text-slate-400">
        Available 24 Hours
      </p>

    </div>

    {/* Email */}

    <div className="group rounded-[30px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_45px_rgba(255,193,7,0.18)]">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        ✉️
      </div>

      <h3 className="text-2xl font-black text-white">
        Email Support
      </h3>

      <p className="mt-4 break-all text-lg font-semibold text-yellow-400">
        {contact.email_address}
      </p>

      <p className="mt-3 text-slate-400">
        Reply within 24 hours
      </p>

    </div>

    {/* Office */}

    <div className="group rounded-[30px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_45px_rgba(255,193,7,0.18)]">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        📍
      </div>

      <h3 className="text-2xl font-black text-white">
        Office
      </h3>

      <p className="mt-4 text-lg font-semibold text-yellow-400">
        {contact.office_name}
      </p>

      <p className="mt-3 text-slate-400">
        {contact.office_country}
      </p>

    </div>

  </div>

</section>
{/* Why Choose Us */}

<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="text-center">

    <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
      Why Choose Us
    </span>

    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
      Trusted EuroMillions Support
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
      We provide professional assistance for membership, draw information,
      account enquiries and general customer support.
    </p>

  </div>

  <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

    {/* Card 1 */}

    <div className="rounded-[28px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_40px_rgba(255,193,7,0.18)]">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        🛡️
      </div>

      <h3 className="mt-6 text-2xl font-black text-white">
        Secure Service
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Your enquiries are handled with professionalism and care.
      </p>

    </div>

    {/* Card 2 */}

    <div className="rounded-[28px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_40px_rgba(255,193,7,0.18)]">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        ⚡
      </div>

      <h3 className="mt-6 text-2xl font-black text-white">
        Fast Response
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Most questions receive a response within 24 hours.
      </p>

    </div>

    {/* Card 3 */}

    <div className="rounded-[28px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_40px_rgba(255,193,7,0.18)]">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        🌍
      </div>

      <h3 className="mt-6 text-2xl font-black text-white">
        Global Support
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Supporting members from participating EuroMillions countries.
      </p>

    </div>

    {/* Card 4 */}

    <div className="rounded-[28px] border border-yellow-500/20 bg-[#10284A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_15px_40px_rgba(255,193,7,0.18)]">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl">
        🏆
      </div>

      <h3 className="mt-6 text-2xl font-black text-white">
        Trusted Support
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Dedicated assistance for membership and official draw enquiries.
      </p>

    </div>

  </div>

</section>
{/* Support Statistics */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#10284A] to-[#081B33] p-10 shadow-2xl">

    <div className="text-center">

      <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
        Support Statistics
      </span>

      <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
        Trusted By Thousands
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
        We are committed to providing professional customer support and
        reliable assistance for all members.
      </p>

    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {/* Card 1 */}

      <div className="rounded-3xl border border-yellow-500/20 bg-[#081B33]/70 p-8 text-center">

        <div className="text-5xl">💬</div>

        <h3 className="mt-5 text-5xl font-black text-yellow-400">
          15K+
        </h3>

        <p className="mt-3 text-slate-300">
          Support Requests
        </p>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl border border-yellow-500/20 bg-[#081B33]/70 p-8 text-center">

        <div className="text-5xl">⏰</div>

        <h3 className="mt-5 text-5xl font-black text-yellow-400">
          24/7
        </h3>

        <p className="mt-3 text-slate-300">
          Customer Support
        </p>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl border border-yellow-500/20 bg-[#081B33]/70 p-8 text-center">

        <div className="text-5xl">⭐</div>

        <h3 className="mt-5 text-5xl font-black text-yellow-400">
          99%
        </h3>

        <p className="mt-3 text-slate-300">
          Satisfaction Rate
        </p>

      </div>

      {/* Card 4 */}

      <div className="rounded-3xl border border-yellow-500/20 bg-[#081B33]/70 p-8 text-center">

        <div className="text-5xl">🏆</div>

        <h3 className="mt-5 text-5xl font-black text-yellow-400">
          10+
        </h3>

        <p className="mt-3 text-slate-300">
          Years Experience
        </p>

      </div>

    </div>

  </div>

</section>
{/* Global Support */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="rounded-[36px] border border-yellow-500/20 bg-[#10284A] p-10 shadow-2xl">

    <div className="text-center">

      <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
        Global Support
      </span>

      <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
        Supporting EuroMillions Players Across Europe
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
        Our support team provides assistance for members from participating EuroMillions countries.
      </p>

    </div>

   <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">

  {countries.map((country) => (

    <div
      key={country.code}
      className="group rounded-3xl border border-yellow-500/20 bg-[#0C2342] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_20px_40px_rgba(255,193,7,0.25)]"
    >

      <ReactCountryFlag
        countryCode={country.code}
        svg
        style={{
          width: "46px",
          height: "46px",
          margin: "0 auto",
          display: "block",
        }}
      />

      <h3 className="mt-4 text-lg font-bold text-white">
        {country.name}
      </h3>

    </div>

  ))}

</div>
    </div>

</section>
{/* Contact Form */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="grid gap-10 lg:grid-cols-2">

    {/* Left */}

    <div>

      <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
        Get In Touch
      </span>

      <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
        We're Here To Help
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Whether you have questions about membership, draw results, payments,
        or general enquiries, our support team is ready to assist you.
      </p>

      <div className="mt-10 space-y-6">

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-2xl">
            ✓
          </div>

          <div>
            <h3 className="font-bold text-white">
              Fast Response
            </h3>

            <p className="text-slate-400">
              Most enquiries are answered within 24 hours.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-2xl">
            🛡️
          </div>

          <div>
            <h3 className="font-bold text-white">
              Secure Communication
            </h3>
            

            <p className="text-slate-400">
              Your information is handled securely.
            </p>
            
          </div>
          
        </div>
        <div className="mt-8 flex items-start gap-4">

  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-2xl">
    🎧
  </div>

  <div>

    <h3 className="font-bold text-white">
      Dedicated Support
    </h3>

    <p className="text-slate-400">
      Our experienced support team is ready to assist with your enquiries.
    </p>

  </div>

</div>

<div className="mt-8 flex items-start gap-4">

  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-2xl">
    🌍
  </div>

  <div>

    <h3 className="font-bold text-white">
      Europe Wide Service
    </h3>

    <p className="text-slate-400">
      Assistance available for members from every participating EuroMillions country.
    </p>

  </div>

</div>

      </div>

    </div>

    {/* Right */}

    <div className="rounded-[32px] border border-yellow-500/20 bg-[#10284A] p-8 shadow-2xl">

      <h3 className="text-3xl font-black text-white">
        Send Us A Message
      </h3>

      <div className="mt-8 space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full rounded-2xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-2xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full rounded-2xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none focus:border-yellow-400"
        />

        <button
          className="
w-full
rounded-2xl
bg-gradient-to-r
from-yellow-400
to-yellow-500
py-5
text-lg
font-black
text-black
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_15px_35px_rgba(255,193,7,0.45)]
"
        >
          Send Message
        </button>

      </div>

    </div>

  </div>

</section>
{/* FAQ */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="text-center">

    <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
      Frequently Asked Questions
    </span>

    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
      Common Questions
    </h2>

    <p className="mt-5 text-lg text-slate-400">
      Everything you need to know before contacting support.
    </p>

  </div>

  <div className="mx-auto mt-14 max-w-4xl space-y-5">

    <details className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-6">

      <summary className="cursor-pointer text-xl font-bold text-white">
        How do I become a member?
      </summary>

      <p className="mt-5 leading-8 text-slate-300">
        Register through the official membership process and complete all required verification steps.
      </p>

    </details>

    <details className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-6">

      <summary className="cursor-pointer text-xl font-bold text-white">
        When are draw results published?
      </summary>

      <p className="mt-5 leading-8 text-slate-300">
        Results are published immediately after the official draw has been verified.
      </p>

    </details>

    <details className="rounded-3xl border border-yellow-500/20 bg-[#10284A] p-6">

      <summary className="cursor-pointer text-xl font-bold text-white">
        How do I claim a prize?
      </summary>

      <p className="mt-5 leading-8 text-slate-300">
        Follow the official prize claim instructions provided after the winning ticket has been verified.
      </p>

    </details>

  </div>

</section>
{/* CTA */}

<section className="mx-auto max-w-7xl px-6 pb-28">

  <div className="overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#10284A] to-[#081B33] p-12 text-center shadow-2xl">

    <span className="inline-flex rounded-full bg-yellow-500 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-black">
      24/7 Support
    </span>

    <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
      Need Immediate Help?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
      Our support team is ready to help you with membership, results,
      account questions and general enquiries.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <a
        href={contact.whatsapp_url}
        className="rounded-2xl bg-green-500 px-10 py-5 text-lg font-black text-white transition hover:scale-105"
      >
        WhatsApp Support
      </a>

      <a
        href={contact.email_button_url}
        className="rounded-2xl bg-yellow-500 px-10 py-5 text-lg font-black text-black transition hover:scale-105"
      >
        Email Support
      </a>

    </div>

  </div>

</section>

    </main>
  );
}