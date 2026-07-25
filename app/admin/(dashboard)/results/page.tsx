"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase-browser";
import ResultsTable from "@/components/admin/results/ResultsTable";
import ResultForm from "@/components/admin/results/ResultForm";
import type { Result } from "@/types/result";
import DeleteResultModal from "@/components/admin/results/DeleteResultModal";
import CsvImportModal from "@/components/admin/results/CsvImportModal";

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingResult, setEditingResult] =
  useState<Result | null>(null);

  const [search, setSearch] = useState("");
  const [deleteResultItem, setDeleteResultItem] =
  useState<Result | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [importLoading, setImportLoading] = useState(false);

const [deleteLoading, setDeleteLoading] =
  useState(false);

  useEffect(() => {
    loadResults();
  }, []);

  async function loadResults() {
    setLoading(true);

    const { data, error } = await supabase
      .from("results")
      .select("*")
      .order("draw_date", {
  ascending: false,
});

    setResults((data || []) as Result[]);
    setLoading(false);
  }

  async function saveResult(result: Result) {
    if (editingResult) {
      const { error } = await supabase
        .from("results")
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
        .eq("id", editingResult.id);

      if (error) {
        alert(error.message);
        return;
      }
    } else {
      const { error } = await supabase
        .from("results")
        .insert({
          draw_date: result.draw_date,
          jackpot: result.jackpot,

          number1: result.number1,
          number2: result.number2,
          number3: result.number3,
          number4: result.number4,
          number5: result.number5,

          star1: result.star1,
          star2: result.star2,
        });

      if (error) {
        alert(error.message);
        return;
      }
    }

    setShowForm(false);
    setEditingResult(null);

    await loadResults();
  }
async function importResults(resultsToImport: Result[]) {
  setImportLoading(true);

  const rows = resultsToImport.map((item) => ({
    draw_date: item.draw_date,
    jackpot: item.jackpot,

    number1: item.number1,
    number2: item.number2,
    number3: item.number3,
    number4: item.number4,
    number5: item.number5,

    star1: item.star1,
    star2: item.star2,
  }));

  const { error } = await supabase
    .from("results")
    .insert(rows);

  setImportLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  setShowImport(false);

  await loadResults();

  alert(`${rows.length} results imported successfully.`);
}
  async function deleteResult() {
  if (!deleteResultItem?.id) return;

  setDeleteLoading(true);

  const { error } = await supabase
    .from("results")
    .delete()
    .eq("id", deleteResultItem.id);

  setDeleteLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  setDeleteResultItem(null);

  await loadResults();
}

  const filteredResults = results.filter((result) =>
    result.draw_date
      .toLowerCase()
      .includes(search.toLowerCase())
  );
    return (
    <>
      <main className="min-h-screen bg-[#081B33] p-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-black text-white">
                Results Manager
              </h1>

              <p className="mt-2 text-slate-400">
                Manage EuroMillions Results History
              </p>

            </div>

            <div className="flex gap-3">

  <button
    onClick={() => setShowImport(true)}
    className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
  >
    Import CSV
  </button>

  <button
    onClick={() => {
      setEditingResult(null);
      setShowForm(true);
    }}
    className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400"
  >
    + Add Result
  </button>

</div>

          </div>

          <div className="mt-8">

            <input
              type="text"
              placeholder="Search Draw Date..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-yellow-500/20 bg-[#102b52] px-5 py-4 text-white outline-none"
            />

          </div>

          {loading ? (

            <div className="py-20 text-center text-white">
              Loading...
            </div>

          ) : filteredResults.length === 0 ? (

            <div className="py-20 text-center text-slate-400">
              No Results Found
            </div>

          ) : (

            <div className="mt-8">
  <ResultsTable
    results={filteredResults}
    onEdit={(item) => {
      setEditingResult(item);
      setShowForm(true);
    }}
    onDelete={(item) => setDeleteResultItem(item)}
  />
</div>

          )}

        </div>

      </main>

      <ResultForm
        open={showForm}
        result={editingResult}
        onClose={() => {
          setShowForm(false);
          setEditingResult(null);
        }}
        onSave={saveResult}
      />
      <CsvImportModal
  open={showImport}
  loading={importLoading}
  onClose={() => setShowImport(false)}
  onImport={importResults}
/>
      <DeleteResultModal
  open={!!deleteResultItem}
  result={deleteResultItem}
  loading={deleteLoading}
  onCancel={() => setDeleteResultItem(null)}
  onConfirm={deleteResult}
/>

    </>
  );
}