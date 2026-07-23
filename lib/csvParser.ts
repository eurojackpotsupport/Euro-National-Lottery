import Papa from "papaparse";
import type { Result } from "@/types/result";

export function parseResultsCSV(file: File): Promise<Result[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete(results) {
        try {
          const parsed: Result[] = results.data.map((row: any, index) => ({
            id: index,

            draw_date: String(row.draw_date ?? "").trim(),

            jackpot: String(row.jackpot ?? "").trim(),

            number1: Number(row.number1),
            number2: Number(row.number2),
            number3: Number(row.number3),
            number4: Number(row.number4),
            number5: Number(row.number5),

            star1: Number(row.star1),
            star2: Number(row.star2),
          }));

          resolve(parsed);
        } catch (err) {
          reject(err);
        }
      },

      error(err) {
        reject(err);
      },
    });
  });
}