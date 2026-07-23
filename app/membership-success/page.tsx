import Link from "next/link";

export default function MembershipSuccessPage() {
  return (
    <main className="min-h-screen bg-[#081B33] flex items-center justify-center px-6">

      <div className="max-w-2xl w-full rounded-3xl border border-yellow-500/20 bg-[#0b2344] p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-5xl">
          ✓
        </div>

        <h1 className="mt-8 text-4xl font-extrabold text-white">
          Membership Submitted Successfully
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Thank you for submitting your membership application.
        </p>

        <p className="mt-4 text-slate-400 leading-8">
          Please contact our support team to receive your
          <span className="font-bold text-yellow-400">
            {" "}Official Member ID
          </span>.
        </p>

        <div className="mt-10 space-y-4">

          <a
            href="https://wa.me/441234567890"
            target="_blank"
            className="block rounded-xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Contact via WhatsApp
          </a>

          <a
            href="mailto:support@euromembership.com"
            className="block rounded-xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Contact via Email
          </a>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-8">

          <p className="text-slate-400">
            Already received your Member ID?
          </p>

          <Link
            href="/login"
            className="mt-5 inline-block rounded-xl border border-yellow-500 px-8 py-3 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
          >
            Login Now
          </Link>

        </div>

      </div>

    </main>
  );
}