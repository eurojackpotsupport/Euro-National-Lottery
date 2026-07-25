"use client";

import { useEffect, useState } from "react";

import MemberForm from "@/components/admin/forms/MemberForm";
import { Member } from "@/data/members";
import { generateUniqueMemberId } from "@/lib/generateMemberId";
import { supabase } from "@/lib/supabase-browser";

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadMembers();
  }, []);

  async function loadMembers() {
  setLoading(true);

  const { data, error } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    alert(error.message);
    setLoading(false);
    return;
  }

  setMembers(data ?? []);

  setLoading(false);
}

  async function saveMember(member: Member) {
  if (editingMember) {
    const { error } = await supabase
      .from("members")
      .update({
        full_name: member.full_name,
        email: member.email,
        phone: member.phone,
        country: member.country,
        membership: member.membership,
        status: member.status,
        joined_date: member.joined_date,
        avatar_url: member.avatar_url,
      })
      .eq("id", editingMember.id);

    if (error) {
      alert(error.message);
      return;
    }
  } else {
    const { error } = await supabase
      .from("members")
      .insert([member]);

    if (error) {
      alert(error.message);
      return;
    }
  }

  await loadMembers();

  setEditingMember(null);
  setShowForm(false);
}
  async function deleteMember(id: string) {
    if (!confirm("Delete this member?")) return;

    const { error } = await supabase
      .from("members")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    await loadMembers();
  }

  function editMember(member: Member) {
    setEditingMember(member);
    setShowForm(true);
  }

  const filteredMembers = members.filter((member) =>
  (member.id ?? "").toLowerCase().includes(search.toLowerCase()) ||
  (member.full_name ?? "").toLowerCase().includes(search.toLowerCase()) ||
  (member.email ?? "").toLowerCase().includes(search.toLowerCase())
);

  const nextMemberId = generateUniqueMemberId(
    members.map((m) => m.id)
  );

  return (
    <main className="min-h-screen bg-[#081B33] p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black text-white">
          Members
        </h1>

        <p className="mt-2 text-slate-400">
          Manage EuroMillions members.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search by Member ID, Name or Email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-xl border border-yellow-500/20 bg-[#102b52] px-5 py-3 text-white outline-none"
          />

          <button
            onClick={() => {
              setEditingMember(null);
              setShowForm(true);
            }}
            className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400"
          >
            + Add Member
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-yellow-500/20">
          <table className="w-full">
            <thead className="bg-[#102b52]">
              <tr>
                <th className="px-6 py-4 text-left text-yellow-400">
                  Member ID
                </th>
                <th className="px-6 py-4 text-left text-yellow-400">
                  Membership
                </th>
                <th className="px-6 py-4 text-left text-yellow-400">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-yellow-400">
                  Country
                </th>
                <th className="px-6 py-4 text-left text-yellow-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#0B1F3A]">
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-10 text-center text-white"
                  >
                    Loading members...
                  </td>
                </tr>
              ) : filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="border-t border-slate-700"
                  >
                    <td className="px-6 py-4 text-white">
                      {member.id}
                    </td>

                    <td className="px-6 py-4 text-white">
                      {member.membership}
                    </td>

                    <td className="px-6 py-4 text-green-400">
                      {member.status}
                    </td>

                    <td className="px-6 py-4 text-white">
                      {member.country}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => editMember(member)}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteMember(member.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-slate-400"
                  >
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <MemberForm
          member={editingMember}
          nextMemberId={nextMemberId}
          onSave={saveMember}
          onClose={() => {
            setEditingMember(null);
            setShowForm(false);
          }}
        />
      )}
    </main>
  );
}