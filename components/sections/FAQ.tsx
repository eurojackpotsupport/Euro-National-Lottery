const faqs = [
  {
    question: "How do I become a member?",
    answer:
      "Click the 'Become a Member' button and complete the official registration process.",
  },
  {
    question: "When are EuroMillions draws held?",
    answer:
      "EuroMillions draws take place every Tuesday and Friday evening.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. All member information is protected using modern security standards.",
  },
  {
    question: "Can I check results online?",
    answer:
      "Yes. Members can view official results directly from the platform.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#071A33] py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-400">
            Everything you need to know before becoming a member.
          </p>
        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-yellow-500/20 bg-[#10284A] p-8"
            >
              <h3 className="text-white text-xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}