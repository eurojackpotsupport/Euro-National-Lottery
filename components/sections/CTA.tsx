import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-extrabold text-black">
          Ready to Become an Official Member?
        </h2>

        <p className="mt-6 text-black/80 text-xl max-w-3xl mx-auto">
          Join thousands of trusted EuroMillions members across Europe and
          enjoy official membership benefits, fast results, and secure access.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <Link
            href="/membership"
            className="bg-[#081B33] hover:bg-[#10284A] text-white px-10 py-4 rounded-xl font-bold text-lg transition duration-300"
          >
            Become a Member
          </Link>

          <Link
            href="/results"
            className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition duration-300"
          >
            View Results
          </Link>

        </div>

      </div>
    </section>
  );
}