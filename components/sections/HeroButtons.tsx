import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <Link
        href="/membership"
        className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
      >
        Become a Member
      </Link>

      <Link
        href="/results"
        className="rounded-xl border border-slate-600 px-8 py-4 text-white transition hover:bg-slate-800"
      >
        View Results
      </Link>

    </div>
  );
}