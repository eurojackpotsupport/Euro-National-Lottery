const winners = [
  {
    name: "James Wilson",
    country: "🇬🇧 United Kingdom",
    prize: "€2,000,000",
    date: "July 2026",
  },
  {
    name: "Marie Dubois",
    country: "🇫🇷 France",
    prize: "€850,000",
    date: "June 2026",
  },
  {
    name: "Carlos Garcia",
    country: "🇪🇸 Spain",
    prize: "€150,000",
    date: "June 2026",
  },
];

export default function LatestWinners() {
  return (
    <section className="bg-[#081B33] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
            Latest Winners
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Recent Winning Members
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            Congratulations to our latest members who won exciting prizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {winners.map((winner) => (
            <div
              key={winner.name}
              className="rounded-3xl bg-[#10284A] border border-yellow-500/20 p-8 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-500 text-black text-3xl font-bold flex items-center justify-center mx-auto">
                {winner.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-center text-white">
                {winner.name}
              </h3>

              <p className="mt-2 text-center text-slate-400">
                {winner.country}
              </p>

              <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm uppercase">
                  Prize Won
                </p>

                <p className="text-yellow-400 text-3xl font-bold mt-2">
                  {winner.prize}
                </p>
              </div>

              <p className="mt-8 text-center text-slate-500">
                {winner.date}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}