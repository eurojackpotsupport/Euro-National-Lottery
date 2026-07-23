const prizes = [
  { match: "⭐⭐⭐⭐⭐⭐⭐", prize: "Jackpot", color: "text-yellow-400" },
  { match: "⭐⭐⭐⭐⭐⭐", prize: "€1,000,000" },
  { match: "⭐⭐⭐⭐⭐", prize: "€50,000" },
  { match: "⭐⭐⭐⭐", prize: "€2,000" },
  { match: "⭐⭐⭐", prize: "€200" },
];

export default function PrizeBreakdown() {
  return (
    <section className="bg-[#0A1E39] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
            Prize Structure
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            EuroMillions Prize Breakdown
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            Multiple prize tiers give every member exciting opportunities to win.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#10284A]">

          <div className="grid grid-cols-2 bg-yellow-500 text-black font-bold text-xl px-8 py-6">
            <div>Matching Numbers</div>
            <div className="text-right">Prize</div>
          </div>

          {prizes.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 px-8 py-6 border-t border-white/10 hover:bg-[#16355E] transition"
            >
              <div className="text-white text-xl">
                {item.match}
              </div>

              <div className={`text-right font-bold text-xl ${item.color ?? "text-white"}`}>
                {item.prize}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}