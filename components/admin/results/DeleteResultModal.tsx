"use client";

import type { Result } from "@/types/result";

type Props = {
  open: boolean;
  result: Result | null;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function DeleteResultModal({
  open,
  result,
  loading = false,
  onCancel,
  onConfirm,
}: Props) {
  if (!open || !result) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6">

      <div className="w-full max-w-md rounded-3xl border border-red-500/30 bg-[#102b52] p-8 shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
          <span className="text-3xl">🗑️</span>
        </div>

        <h2 className="mt-6 text-center text-3xl font-black text-white">
          Delete Result?
        </h2>

        <p className="mt-4 text-center text-slate-300">
          Are you sure you want to permanently delete this draw?
        </p>

        <div className="mt-8 rounded-2xl bg-[#081B33] p-5">

          <p className="text-xs uppercase tracking-[3px] text-slate-400">
            Draw Date
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            {result.draw_date}
          </p>

          <p className="mt-5 text-xs uppercase tracking-[3px] text-slate-400">
            Jackpot
          </p>

          <p className="mt-2 text-2xl font-black text-yellow-400">
            {result.jackpot}
          </p>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-xl bg-slate-700 py-4 font-bold text-white hover:bg-slate-600 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-xl bg-red-600 py-4 font-bold text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}