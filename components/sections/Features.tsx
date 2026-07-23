export default function Features() {
  const features = [
    {
      icon: "🏆",
      title: "Official Membership",
      description:
        "Become an official EuroMillions member with secure registration.",
    },
    {
      icon: "🔒",
      title: "Secure & Trusted",
      description:
        "Protected membership with modern security and encrypted data.",
    },
    {
      icon: "⚡",
      title: "Fast Results",
      description:
        "Receive official draw results quickly after every draw.",
    },
  ];

  return (
    <section className="bg-[#0A1E39] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold uppercase tracking-[0.3em]">
            Why Join
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Why Choose Our Membership
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto text-lg">
            Enjoy official membership benefits, trusted access and fast draw
            information through our secure platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-[#11284A] border border-yellow-500/20 p-10 text-center hover:-translate-y-2 hover:border-yellow-400 transition duration-300"
            >
              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-400 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}