"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-browser";
import ImageUploader from "@/components/admin/ImageUploader";

type Winner = {
  id: number;
  winner_name: string;
  winner_photo: string;
  member_id: string;
  country: string;
  prize: string;
  draw_date: string;
};
export default function AdminWinnersPage() {
  const [open, setOpen] = useState(false);

const [winners, setWinners] = useState<Winner[]>([]);
const [loading, setLoading] = useState(true);
// Form State
  const [winnerName, setWinnerName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [country, setCountry] = useState("");
  const [prize, setPrize] = useState("");
  const [drawDate, setDrawDate] = useState("");
  const [winnerPhoto, setWinnerPhoto] = useState("");

  const [isFeatured, setIsFeatured] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [displayOrder, setDisplayOrder] = useState(1);

  const [editingId, setEditingId] = useState<number | null>(null);

useEffect(() => {
  loadWinners();
}, []);

async function loadWinners() {
  setLoading(true);

  const { data, error } = await supabase
    .from("winners")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    alert(error.message);
    setLoading(false);
    return;
  }

  setWinners(data ?? []);

  setLoading(false);
}

async function saveWinner() {
  const { error } = await supabase
    .from("winners")
    .insert({
      winner_name: winnerName,
      member_id: memberId,
      country,
      prize,
      draw_date: drawDate,
      winner_photo: winnerPhoto,
      is_featured: isFeatured,
      is_visible: isVisible,
      display_order: displayOrder,
    });

  if (error) {
    alert(error.message);
    return;
  }

  // Clear form
  setWinnerName("");
  setMemberId("");
  setCountry("");
  setPrize("");
  setDrawDate("");
  setWinnerPhoto("");
  setIsFeatured(false);
  setIsVisible(true);
  setDisplayOrder(1);

  // Close modal
  setOpen(false);

  // Reload table
  await loadWinners();
}
async function updateWinner() {
  if (editingId === null) return;

  const { error } = await supabase
    .from("winners")
    .update({
      winner_name: winnerName,
      member_id: memberId,
      country,
      prize,
      draw_date: drawDate,
      winner_photo: winnerPhoto,
      is_featured: isFeatured,
      is_visible: isVisible,
      display_order: displayOrder,
    })
    .eq("id", editingId);

  if (error) {
    alert(error.message);
    return;
  }

  setWinnerName("");
  setMemberId("");
  setCountry("");
  setPrize("");
  setDrawDate("");
  setWinnerPhoto("");
  setIsFeatured(false);
  setIsVisible(true);
  setDisplayOrder(1);

  setEditingId(null);
  setOpen(false);

  await loadWinners();
}
async function deleteWinner(id: number) {
  if (!confirm("Delete this winner?")) return;

  const { error } = await supabase
    .from("winners")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  await loadWinners();
}
  return (
    <main className="min-h-screen bg-[#081B33] p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-4xl font-black text-white">
            Winners
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all EuroMillions winners.
          </p>

        </div>

        <button
          onClick={() => {
  setEditingId(null);

  setWinnerName("");
  setMemberId("");
  setCountry("");
  setPrize("");
  setDrawDate("");
  setWinnerPhoto("");
  setIsFeatured(false);
  setIsVisible(true);
  setDisplayOrder(1);

  setOpen(true);
}}
          className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
        >
          + Add Winner
        </button>

      </div>

      {/* Winners Table */}

      <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#10284A]">

        <table className="w-full">

          <thead className="border-b border-yellow-500/20">

            <tr className="text-left text-yellow-400">

              <th className="w-28 p-5">Photo</th>
              <th>Name</th>
              <th>Member ID</th>
              <th>Country</th>
              <th>Prize</th>
              <th>Draw Date</th>
              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>
           {loading ? (
            <tr>
          <td
          colSpan={7}
          className="p-8 text-center text-slate-400"
          >
         Loading winners...
         </td>
         </tr>
        ) : winners.length === 0 ? (
        <tr>
        <td
        colSpan={7}
        className="p-8 text-center text-slate-400"
      >
        No winners found.
      </td>
      </tr>
       ) : (
        winners.map((winner) => (
        <tr
         key={winner.id}
         className="border-b border-slate-700"
      >
        <td className="w-28 p-5">
  <a
    href={winner.winner_photo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={winner.winner_photo}
      alt={winner.winner_name}
      className="h-20 w-20 rounded-xl object-cover border border-yellow-500/20 hover:scale-105 transition"
    />
  </a>
</td>

        <td className="font-semibold text-white">
          {winner.winner_name}
        </td>

        <td className="text-slate-300">
          {winner.member_id}
        </td>

        <td className="text-slate-300">
          {winner.country}
        </td>

        <td className="font-bold text-yellow-400">
          {winner.prize}
        </td>

        <td className="text-slate-300">
          {winner.draw_date}
        </td>

        <td>
           < div className="flex justify-center gap-3">
            <button
  onClick={() => {
    setEditingId(winner.id);

    setWinnerName(winner.winner_name);
    setMemberId(winner.member_id);
    setCountry(winner.country);
    setPrize(winner.prize);
    setDrawDate(winner.draw_date);
    setWinnerPhoto(winner.winner_photo);

    setOpen(true);
  }}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
>
  Edit
</button>

            <button
  onClick={() => deleteWinner(winner.id)}
  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500"
>
  Delete
</button>
          </div>
         </td>
         </tr>
         ))
         )}
       </tbody>

        </table>

      </div>

      {/* Add Winner Modal */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

          <div className="w-full max-w-3xl rounded-2xl bg-[#10284A] p-8">

            <h2 className="mb-6 text-3xl font-black text-white">
              Add Winner
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                  value={winnerName}
                  onChange={(e) => setWinnerName(e.target.value)}
                  placeholder="Winner Name"
                  className="rounded-lg bg-[#081B33] p-3 text-white outline-none"
                 />

              <input
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                placeholder="Member ID"
                className="rounded-lg bg-[#081B33] p-3 text-white outline-none"
              />

              <input
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
                placeholder="Prize"
                className="rounded-lg bg-[#081B33] p-3 text-white outline-none"
               />

              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                className="rounded-lg bg-[#081B33] p-3 text-white outline-none"
              />

              <input
                placeholder="Country Flag"
                className="rounded-lg bg-[#081B33] p-3 text-white outline-none"
              />

              <input
                value={drawDate}
                onChange={(e) => setDrawDate(e.target.value)}
                placeholder="Draw Date"
                className="rounded-lg bg-[#081B33] p-3 text-white outline-none"
              />
              <ImageUploader
  bucket="winners"
  value={winnerPhoto}
  onUpload={setWinnerPhoto}
/>
              <label className="flex items-center gap-3 text-white">
                <input
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
             />
                Featured
              </label>

              <label className="flex items-center gap-3 text-white">
                <input
                  type="checkbox"
                  checked={isVisible}
                  onChange={(e) => setIsVisible(e.target.checked)}
                />
                Visible
              </label>

              <input
                type="number"
                value={displayOrder}
                onChange={(e) => setDisplayOrder(Number(e.target.value))}
                placeholder="Display Order"
                className="rounded-lg bg-[#081B33] p-3 text-white outline-none md:col-span-2"
              />
              
            </div>

            <div className="mt-8 flex justify-end gap-4">

              <button
                onClick={() => {
                setOpen(false);
                setEditingId(null);
                }}
                className="rounded-lg bg-slate-600 px-6 py-3 text-white"
              >
                Cancel
              </button>

              <button
  onClick={editingId === null ? saveWinner : updateWinner}
  className="rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400"
>
  {editingId === null ? "Save Winner" : "Update Winner"}
</button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}