"use client";

import { useEffect, useState } from "react";
import type { Result } from "@/types/result";

type Props = {
  open: boolean;
  result?: Result | null;
  onClose: () => void;
  onSave: (result: Result) => Promise<void>;
};

const emptyResult: Result = {
  id: 0,
  draw_date: "",
  jackpot: "",
  number1: 0,
  number2: 0,
  number3: 0,
  number4: 0,
  number5: 0,
  star1: 0,
  star2: 0,
};

export default function ResultForm({
  open,
  result,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<Result>(emptyResult);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (result) {
      setForm(result);
    } else {
      setForm(emptyResult);
    }
  }, [result]);

  function updateField(key: keyof Result, value: string) {
    setForm((prev) => ({
      ...prev,
      [key]:
        key === "draw_date" || key === "jackpot"
          ? value
          : Number(value),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);

  const sortedNumbers = [
    form.number1,
    form.number2,
    form.number3,
    form.number4,
    form.number5,
  ].sort((a, b) => a - b);

  const resultToSave = {
    ...form,
    number1: sortedNumbers[0],
    number2: sortedNumbers[1],
    number3: sortedNumbers[2],
    number4: sortedNumbers[3],
    number5: sortedNumbers[4],
  };

  await onSave(resultToSave);

  setLoading(false);

  onClose();
}

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-[#102b52] p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-black text-white">
          {result ? "Edit Result" : "Add Result"}
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-white">
              Draw Date
            </label>

            <input
  type="date"
  value={form.draw_date}
  onChange={(e) => updateField("draw_date", e.target.value)}
  className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white"
/>
          </div>

          <div>
            <label className="mb-2 block text-white">
              Jackpot
            </label>

            <input
  type="text"
  placeholder="€49,675,417"
  value={form.jackpot}
  onChange={(e) => updateField("jackpot", e.target.value)}
  className="w-full rounded-xl bg-[#081B33] px-5 py-4 text-white placeholder:text-slate-500"
/>
          </div>

          <div>
  <label className="mb-3 block font-semibold text-white">
    Winning Numbers
  </label>

  <div className="grid grid-cols-5 gap-3">
    {[1, 2, 3, 4, 5].map((n) => (
      <input
  key={n}
  type="number"
  min={1}
  max={50}
  value={
    (form[`number${n}` as keyof Result] as number) || ""
  }
        onChange={(e) =>
          updateField(
            `number${n}` as keyof Result,
            e.target.value
          )
        }
        className="rounded-xl bg-[#081B33] py-4 text-center text-xl font-bold text-white placeholder:text-slate-500"
      />
    ))}
  </div>
</div>
          <div>
  <label className="mb-3 block font-semibold text-white">
    Lucky Stars
  </label>

  <div className="grid grid-cols-2 gap-3">
    {[1, 2].map((n) => (
      <input
  key={n}
  type="number"
  min={1}
  max={12}
  value={
    (form[`star${n}` as keyof Result] as number) || ""
  }
        onChange={(e) =>
          updateField(
            `star${n}` as keyof Result,
            e.target.value
          )
        }
        className="rounded-xl bg-[#081B33] py-4 text-center text-xl font-bold text-white placeholder:text-slate-500"
      />
    ))}
  </div>
</div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-xl bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl bg-slate-700 py-4 font-bold text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}