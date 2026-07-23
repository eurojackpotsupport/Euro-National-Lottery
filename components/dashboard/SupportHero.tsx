export default function Page() {
  return (
    <main className="min-h-screen bg-[#081B33] p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        {/* Hero */}
        <section className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#102b52] to-[#0b1f3c] p-8">

          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-400">
            🎧 Premium Member Support
          </span>

          <h1 className="mt-5 text-4xl font-black text-white">
            Need Help?
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Our dedicated support team is available to assist you with your
            membership, account, draw information and any questions regarding
            your EuroMillions membership.
          </p>

        </section>

        {/* Support Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-[#102b52] p-6">
            <div className="text-4xl">💬</div>

            <h2 className="mt-4 text-xl font-bold text-white">
              Live Chat
            </h2>

            <p className="mt-2 text-slate-400">
              Chat directly with our support team for the fastest assistance.
            </p>

            <button className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-400">
              Start Chat
            </button>

          </div>

          <div className="rounded-2xl bg-[#102b52] p-6">
            <div className="text-4xl">📧</div>

            <h2 className="mt-4 text-xl font-bold text-white">
              Email Support
            </h2>

            <p className="mt-2 text-slate-400">
              Send us an email and we'll get back to you as soon as possible.
            </p>

            <button className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-400">
              Send Email
            </button>

          </div>

          <div className="rounded-2xl bg-[#102b52] p-6">
            <div className="text-4xl">❓</div>

            <h2 className="mt-4 text-xl font-bold text-white">
              Help Center
            </h2>

            <p className="mt-2 text-slate-400">
              Browse answers to the most frequently asked questions.
            </p>

            <button className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-400">
              View FAQ
            </button>

          </div>

        </div>

        {/* FAQ */}
        <section className="rounded-3xl bg-[#102b52] p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <details className="rounded-xl bg-[#081B33] p-5">
              <summary className="cursor-pointer font-semibold text-white">
                How do I receive my membership numbers?
              </summary>

              <p className="mt-4 text-slate-400">
                Your membership numbers are available in your dashboard before each draw.
              </p>
            </details>

            <details className="rounded-xl bg-[#081B33] p-5">
              <summary className="cursor-pointer font-semibold text-white">
                When are results published?
              </summary>

              <p className="mt-4 text-slate-400">
                Results are updated immediately after the official draw is confirmed.
              </p>
            </details>

            <details className="rounded-xl bg-[#081B33] p-5">
              <summary className="cursor-pointer font-semibold text-white">
                How do I renew my membership?
              </summary>

              <p className="mt-4 text-slate-400">
                Contact our support team before your membership expires.
              </p>
            </details>

          </div>

        </section>

      </div>

    </main>
  );
}