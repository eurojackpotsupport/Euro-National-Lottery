const stats = [
  {
    number: "15,248",
    label: "Active Members",
  },
  {
    number: "€487M+",
    label: "Prize Paid",
  },
  {
    number: "120+",
    label: "Countries",
  },
  {
    number: "99.9%",
    label: "Secure Platform",
  },
];

export default function Statistics() {
  return (
    <section className="bg-[#071A33] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400 md:text-sm">
            Live Statistics
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Trusted Across Europe
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 md:text-lg">
            Thousands of members use our official platform every draw.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-yellow-500/20
                bg-[#10284A]
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-400
                hover:shadow-[0_20px_45px_rgba(255,193,7,0.15)]
              "
            >
              <h3 className="text-4xl font-extrabold text-yellow-400 md:text-5xl">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}