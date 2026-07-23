const steps = [
  {
    number: "01",
    icon: "📝",
    title: "Register",
    description:
      "Create your official EuroMillions membership account in just a few minutes.",
  },
  {
    number: "02",
    icon: "💳",
    title: "Complete Membership",
    description:
      "Finish the membership process securely with our trusted platform.",
  },
  {
    number: "03",
    icon: "🆔",
    title: "Receive Member ID",
    description:
      "Your official membership ID will be issued after successful registration.",
  },
  {
    number: "04",
    icon: "🎉",
    title: "Play & Win",
    description:
      "Join the draw, check official results, and claim your prizes.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#081B33] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
            Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            How Membership Works
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            Become an official EuroMillions member in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl bg-[#10284A] border border-yellow-500/20 p-8 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="absolute top-5 right-6 text-6xl font-black text-white/5">
                {step.number}
              </div>

              <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-4xl shadow-lg">
                {step.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-5 text-slate-400 leading-8">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}