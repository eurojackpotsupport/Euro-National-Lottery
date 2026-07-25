"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";
import type { LatestResult } from "@/types/latest-result";
import LatestResultForm from "@/components/admin/latest-results/LatestResultForm";

export default function LatestResultsPage() {
  const [results, setResults] = useState<LatestResult[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingResult, setEditingResult] =
    useState<LatestResult | null>(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadResults();
  }, []);

  async function loadResults() {
    setLoading(true);

    const { data, error } = await supabase
      .from("latest_results")
      .select("*")
      .order("position", { ascending: true });

    if (error) {
      alert(error.message);
    }

    setResults((data || []) as LatestResult[]);
    setLoading(false);
  }

  async function saveResult(result: LatestResult) {
    const { error } = await supabase
      .from("latest_results")
      .update({
        draw_date: result.draw_date,
        jackpot: result.jackpot,

        number1: result.number1,
        number2: result.number2,
        number3: result.number3,
        number4: result.number4,
        number5: result.number5,

        star1: result.star1,
        star2: result.star2,
      })
      .eq("id", result.id);

    if (error) {
      alert(error.message);
      return;
    }

    setShowForm(false);
    setEditingResult(null);

    await loadResults();

    alert("Latest result updated successfully.");
  }

  return (
    <>
      <main className="min-h-screen bg-[#081B33] p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-black text-white">
            Latest Results
          </h1>

          <p className="mt-2 text-slate-400">
            Manage the 10 latest EuroMillions results
          </p>

          {loading ? (
            <div className="py-20 text-center text-white">
              Loading...
            </div>
          ) : (
            <div className="mt-8 overflow-hidden rounded-2xl border border-yellow-500/20">
              <table className="w-full">
                <thead className="bg-[#102b52] text-white">
                  <tr>
                    <th className="p-4 text-left">Position</th>
                    <th className="p-4 text-left">Draw Date</th>
                    <th className="p-4 text-left">Jackpot</th>
                    <th className="p-4 text-left">Winning Numbers</th>
                    <th className="p-4 text-left">Lucky Stars</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {results.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t border-white/10 text-white"
                    >
                      <td className="p-4 font-bold">
                        {item.position}
                      </td>

                      <td className="p-4">
                        {item.draw_date}
                      </td>

                      <td className="p-4">
                        {item.jackpot}
                      </td>

                      <td className="p-4">
                        <div className="flex gap-2 flex-wrap">
                          {[item.number1, item.number2, item.number3, item.number4, item.number5].map(
                            (num, index) => (
                              <div
                                key={index}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-[#081B33]"
                              >
                                {num}
                              </div>
                            )
                          )}
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="flex gap-2">
                          {[item.star1, item.star2].map(
                            (star, index) => (
                              <div
                                key={index}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#081B33]"
                              >
                                {star}
                              </div>
                            )
                          )}
                        </div>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => {
                            setEditingResult(item);
                            setShowForm(true);
                          }}
                          className="rounded-lg bg-yellow-500 px-4 py-2 font-bold text-black transition hover:bg-yellow-400"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <LatestResultForm
        open={showForm}
        result={editingResult}
        onClose={() => {
          setShowForm(false);
          setEditingResult(null);
        }}
        onSave={saveResult}
      />
    </>
  );
}