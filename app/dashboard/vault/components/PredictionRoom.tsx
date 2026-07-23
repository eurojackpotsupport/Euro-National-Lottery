"use client";

const packages = [
  {
    title: "Package A",
    numbers: ["07", "14", "19", "28", "42"],
    stars: ["03", "09"],
  },
  {
    title: "Package B",
    numbers: ["05", "11", "23", "37", "49"],
    stars: ["01", "10"],
  },
  {
    title: "Package C",
    numbers: ["02", "18", "27", "34", "50"],
    stars: ["06", "11"],
  },
];

export default function PredictionRoom() {
  return (
    <div className="mt-12 w-full max-w-6xl">
      <h2 className="mb-8 text-center text-4xl font-black text-yellow-400">
        VIP Prediction Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="rounded-3xl border border-yellow-500/20 bg-[#0D223F] p-6 shadow-xl"
          >
            <h3 className="mb-6 text-center text-2xl font-bold text-white">
              {pkg.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {pkg.numbers.map((num) => (
                <div
                  key={num}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 font-bold text-black shadow-lg"
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {pkg.stars.map((star) => (
                <div
                  key={star}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-lg"
                >
                  ★ {star}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}