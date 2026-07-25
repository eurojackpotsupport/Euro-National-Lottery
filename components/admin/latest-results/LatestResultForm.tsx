"use client";

import { useEffect, useState } from "react";
import type { LatestResult } from "@/types/latest-result";

type Props = {
  open: boolean;
  result: LatestResult | null;
  onClose: () => void;
  onSave: (result: LatestResult) => void;
};

export default function LatestResultForm({
  open,
  result,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<LatestResult | null>(null);

  useEffect(() => {
    if (result) {
      setForm(result);
    }
  }, [result]);

  if (!open || !form) return null;

  function update<K extends keyof LatestResult>(
  key: K,
  value: LatestResult[K]
) {
  if (!form) return;

  setForm({
    ...form,
    [key]: value,
  });
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-4xl rounded-2xl bg-[#102b52] p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Edit Position {form.position}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            value={form.draw_date}
            onChange={(e) => update("draw_date", e.target.value)}
            placeholder="Draw Date"
            className="rounded-lg bg-[#081B33] p-3 text-white"
          />

          <input
            value={form.jackpot}
            onChange={(e) => update("jackpot", e.target.value)}
            placeholder="Jackpot"
            className="rounded-lg bg-[#081B33] p-3 text-white"
          />

          {[1,2,3,4,5].map((n) => (
            <input
              key={n}
              type="number"
              value={form[`number${n}` as keyof LatestResult] as number}
              onChange={(e) =>
                update(
                  `number${n}` as keyof LatestResult,
                  Number(e.target.value)
                )
              }
              placeholder={`Number ${n}`}
              className="rounded-lg bg-[#081B33] p-3 text-white"
            />
          ))}

          {[1,2].map((n) => (
            <input
              key={n}
              type="number"
              value={form[`star${n}` as keyof LatestResult] as number}
              onChange={(e) =>
                update(
                  `star${n}` as keyof LatestResult,
                  Number(e.target.value)
                )
              }
              placeholder={`Star ${n}`}
              className="rounded-lg bg-[#081B33] p-3 text-white"
            />
          ))}

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-lg bg-gray-600 px-6 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}