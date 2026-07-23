const testimonials = [
  {
    name: "James Wilson",
    country: "United Kingdom",
    text: "The membership platform is very professional. Results are always updated on time.",
  },
  {
    name: "Marie Dubois",
    country: "France",
    text: "Registration was easy and the member area is excellent. Highly recommended.",
  },
  {
    name: "Carlos Garcia",
    country: "Spain",
    text: "I really like the clean interface and secure membership process.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#081B33] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            What Our Members Say
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            Thousands of members across Europe trust our official membership platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-[#10284A] border border-yellow-500/20 p-8 hover:border-yellow-400 transition duration-300"
            >

              <div className="flex text-yellow-400 text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-slate-300 leading-8">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="text-white font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  {item.country}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}