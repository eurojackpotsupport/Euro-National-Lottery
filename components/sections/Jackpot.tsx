export default function Jackpot() {
  return (
    <section className="bg-[#06182f] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#0b2344] p-12 text-center shadow-2xl">

          <p className="text-yellow-400 font-semibold tracking-[0.3em] uppercase">
            Current Jackpot
          </p>

          <h2 className="mt-5 text-6xl md:text-8xl font-extrabold text-yellow-400">
            €150,000,000
          </h2>

          <p className="mt-6 text-slate-300 text-xl">
            Official EuroMillions Jackpot
          </p>

          <div className="mt-10 flex justify-center gap-8 flex-wrap">

            <div className="bg-[#102b52] rounded-xl px-8 py-5">
              <p className="text-slate-400 text-sm uppercase">
                Next Draw
              </p>

              <p className="text-white text-2xl font-bold">
                Friday
              </p>
            </div>

            <div className="bg-[#102b52] rounded-xl px-8 py-5">
              <p className="text-slate-400 text-sm uppercase">
                Time
              </p>

              <p className="text-white text-2xl font-bold">
                9:00 PM CET
              </p>
            </div>

          </div>

          <button className="mt-12 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition">
            Become a Member
          </button>

        </div>

      </div>
    </section>
  );
}