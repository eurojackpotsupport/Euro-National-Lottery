"use client";

export default function PredictionPackage() {
  return (
    <section className="mt-16">
      <div className="text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-yellow-400">
          TODAY'S PREDICTION
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Premium Prediction Package
        </h2>

        <p className="mt-4 text-slate-300">
          Your verified membership package will appear here once the vault is opened.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-[#10284B] p-8">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm tracking-[0.25em] text-slate-400">
              STATUS
            </p>

            <h3 className="mt-2 text-3xl font-black text-yellow-400">
              LOCKED
            </h3>
          </div>

          <div className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2">
            <span className="text-sm font-bold text-yellow-400">
              VIP MEMBERS
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex h-16 items-center justify-center rounded-full bg-slate-700 text-2xl font-black text-slate-500"
            >
              ?
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-slate-300"
            >
              ★
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-[#17335c] p-5 text-center">
          <p className="text-slate-300">
            Predictions will automatically appear here when the vault status changes to{" "}
            <span className="font-bold text-yellow-400">OPEN</span>.
          </p>
        </div>
      </div>
    </section>
  );
}