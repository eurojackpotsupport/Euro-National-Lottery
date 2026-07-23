import Link from "next/link";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#081B33] pt-32 pb-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
            Official Membership
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-white">
            Become a EuroMillions Member
          </h1>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Complete the form below. After submitting, contact our support team
            to receive your official Member ID.
          </p>

        </div>

        {/* Form */}

        <form
          action="/membership-success"
          className="mt-16 rounded-3xl bg-[#0b2344] border border-yellow-500/20 p-10 space-y-8"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-white mb-2">
                First Name
              </label>

              <input
                required
                className="w-full rounded-xl bg-[#10284A] border border-slate-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Last Name
              </label>

              <input
                required
                className="w-full rounded-xl bg-[#10284A] border border-slate-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-white mb-2">
                Email
              </label>

              <input
                type="email"
                required
                className="w-full rounded-xl bg-[#10284A] border border-slate-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Phone Number
              </label>

              <input
                required
                className="w-full rounded-xl bg-[#10284A] border border-slate-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

          </div>

          <div>

            <label className="block text-white mb-2">
              Country
            </label>

            <input
              required
              className="w-full rounded-xl bg-[#10284A] border border-slate-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              required
              className="accent-yellow-500"
            />

            <p className="text-slate-300">
              I agree to the Membership Terms.
            </p>

          </div>

          <button
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
          >
            Submit Membership
          </button>

        </form>
        <section className="mt-20 mb-8">
  <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#112B4F] via-[#173A68] to-[#214F82] px-8 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

    {/* Glow */}
    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-yellow-400/10 blur-[100px]" />
    <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-sky-400/10 blur-[100px]" />

    <div className="relative z-10">

      <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">
        Official Membership Support
      </span>

      <h2 className="mt-8 text-4xl md:text-5xl font-black text-white">
        Need Help Completing Your Membership?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 leading-8">
        Our VIP membership team is available 24/7 to guide you through
        registration, verify your information, and provide your official
        EuroMillions Member ID after approval.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-white">

        <div className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3">
          ✅ Instant WhatsApp Support
        </div>

        <div className="rounded-full border border-yellow-400/40 bg-gradient-to-r from-yellow-500/10 to-yellow-400/20 px-5 py-3 shadow-[0_0_20px_rgba(255,193,7,0.15)]">
  <span className="flex items-center gap-2 font-semibold text-yellow-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z"
      />
    </svg>

    Official Verification
  </span>
</div>

        <div className="rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-3">
          ⚡ 24/7 Assistance
        </div>

      </div>

      <a
        href="https://wa.me/447529524093"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-flex items-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-10 py-5 text-xl font-black text-white shadow-[0_15px_40px_rgba(34,197,94,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        💬 WhatsApp Membership Support
      </a>

    </div>
  </div>
</section>

      </div>

    </main>
  );
}