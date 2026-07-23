"use client";

import { useState } from "react";
import type { Result } from "@/types/result";
import { parseResultsCSV } from "@/lib/csvParser";

type Props = {
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onImport: (results: Result[]) => Promise<void>;
};

export default function CsvImportModal({
  open,
  loading,
  onClose,
  onImport,
}: Props) {
  const [results, setResults] = useState<Result[]>([]);
  const [fileName, setFileName] = useState("");

  if (!open) return null;

  async function handleFile(file: File) {
    try {
      const parsed = await parseResultsCSV(file);
      setResults(parsed);
      setFileName(file.name);
    } catch (err) {
      console.error(err);
      alert("Unable to parse CSV.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

      <div className="w-full max-w-5xl rounded-3xl bg-[#102b52] p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-black text-white">
            Import CSV
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-700 px-4 py-2 text-white"
          >
            Close
          </button>

        </div>

        <div className="mt-8">

          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                handleFile(file);
              }
            }}
            className="block w-full text-white"
          />

        </div>

        {fileName && (
          <p className="mt-4 text-slate-300">
            File:
            <span className="ml-2 font-bold text-white">
              {fileName}
            </span>
          </p>
        )}

        {results.length > 0 && (

          <>
            <div className="mt-6 rounded-xl bg-[#081B33] p-4">

              <p className="text-white">
                {results.length} result(s) ready to import.
              </p>

            </div>

            <div className="mt-6 max-h-[400px] overflow-auto rounded-xl border border-slate-700">

              <table className="min-w-full">

                <thead className="bg-[#081B33]">

                  <tr>

                    <th className="p-3 text-left text-white">
                      Date
                    </th>

                    <th className="p-3 text-left text-white">
                      Jackpot
                    </th>

                    <th className="p-3 text-left text-white">
                      Numbers
                    </th>

                    <th className="p-3 text-left text-white">
                      Stars
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {results.map((item, index) => (

                    <tr
                      key={index}
                      className="border-t border-slate-700"
                    >

                      <td className="p-3 text-white">
                        {item.draw_date}
                      </td>

                      <td className="p-3 text-yellow-400">
                        {item.jackpot}
                      </td>

                      <td className="p-3 text-white">
                        {[
                          item.number1,
                          item.number2,
                          item.number3,
                          item.number4,
                          item.number5,
                        ].join(" - ")}
                      </td>

                      <td className="p-3 text-white">
                        {item.star1} - {item.star2}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            <button
              disabled={loading}
              onClick={() => onImport(results)}
              className="mt-8 w-full rounded-xl bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading
                ? "Importing..."
                : `Import ${results.length} Results`}
            </button>

          </>

        )}

      </div>

    </div>
  );
}