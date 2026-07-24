"use client";

type Props = {
  text: string;
};

export default function VaultLoadingOverlay({ text }: Props) {
  return (
    <div className="fixed inset-0 z-[99998] flex items-center justify-center bg-[#030712]">
      <div className="w-[360px] rounded-3xl border border-yellow-500/20 bg-[#09192E] p-8 shadow-2xl">

        <div className="mb-6 flex justify-center">
          <div className="h-4 w-4 animate-pulse rounded-full bg-emerald-400" />
        </div>

        <h2 className="text-center text-2xl font-black tracking-wide text-yellow-400">
          {text}
        </h2>

        <p className="mt-4 text-center text-slate-300">
          Secure encrypted connection...
        </p>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-700">
          <div className="h-full w-full animate-[loading_0.8s_linear_forwards] bg-gradient-to-r from-yellow-400 to-yellow-300" />
        </div>

      </div>
    </div>
  );
}