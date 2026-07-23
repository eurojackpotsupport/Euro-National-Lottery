"use client";
import { uploadAvatar } from "@/lib/uploadAvatar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Member } from "@/data/members";

type Props = {
  member?: Member | null;
  nextMemberId: string;
  onSave: (member: Member) => void;
  onClose: () => void;
};

export default function MemberForm({
  member,
  nextMemberId,
  onSave,
  onClose,
}: Props) {
  const [id, setId] = useState("");
const [avatarFile, setAvatarFile] = useState<File | null>(null);
const [uploading, setUploading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Europe");

  const [membership, setMembership] = useState("VIP GOLD");
  const [status, setStatus] = useState("ACTIVE");

  const [joinedDate, setJoinedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [avatarUrl, setAvatarUrl] = useState("/default-avatar.png");
function handleAvatarChange(
  e: React.ChangeEvent<HTMLInputElement>
) {
  const file = e.target.files?.[0];

  if (!file) return;

  setAvatarFile(file);

  setAvatarUrl(URL.createObjectURL(file));
}
  useEffect(() => {
    if (member) {
      setId(member.id);
      setFullName(member.full_name || "");
      setEmail(member.email || "");
      setPhone(member.phone || "");
      setCountry(member.country || "Europe");

      setMembership(member.membership);
      setStatus(member.status);

      setJoinedDate(
        member.joined_date || new Date().toISOString().split("T")[0]
      );

      setAvatarUrl(member.avatar_url || "/default-avatar.png");
    } else {
      setId(nextMemberId);

      setFullName("");
      setEmail("");
      setPhone("");
      setCountry("Europe");

      setMembership("VIP GOLD");
      setStatus("ACTIVE");

      setJoinedDate(new Date().toISOString().split("T")[0]);

      setAvatarUrl("/default-avatar.png");
    }
  }, [member, nextMemberId]);

 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  let finalAvatar = avatarUrl;

  if (avatarFile) {
    try {
      setUploading(true);

      finalAvatar = await uploadAvatar(avatarFile);
    } catch (err: any) {
      console.error(err);

      alert(err?.message || JSON.stringify(err));

      return;
    } finally {
      setUploading(false);
    }
  }

  onSave({
    id,
    full_name: fullName,
    email,
    phone,
    country,
    membership,
    status,
    joined_date: joinedDate,
    avatar_url: finalAvatar,
  });
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-3xl rounded-3xl border border-yellow-500/20 bg-[#102b52] p-8">

        <h2 className="text-3xl font-black text-white">
          {member ? "Edit Member" : "Add Member"}
        </h2>
        <form
  onSubmit={handleSubmit}
  className="mt-8 max-h-[75vh] space-y-6 overflow-y-auto pr-2"
>

  {/* Profile Photo */}

  <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-6">

    <h3 className="mb-5 text-lg font-bold text-yellow-400">
      Profile Photo
    </h3>

    <div className="flex flex-col items-center gap-5">

      <Image
        src={avatarUrl}
        alt="Avatar"
        width={120}
        height={120}
        className="h-28 w-28 rounded-full border-4 border-yellow-500 object-cover"
      />

      <input
       type="file"
       accept="image/png,image/jpeg,image/webp"
       onChange={handleAvatarChange}
       className="block w-full text-sm text-white
             file:mr-4 file:rounded-lg file:border-0
             file:bg-yellow-500 file:px-4 file:py-2
             file:font-semibold file:text-black
             hover:file:bg-yellow-400"
/>

      <p className="text-center text-xs text-slate-400">
        Paste an image URL or keep the default avatar.
      </p>

    </div>

  </div>

  {/* Personal Information */}

  <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-6">

    <h3 className="mb-5 text-lg font-bold text-yellow-400">
      Personal Information
    </h3>

    <div className="grid gap-5 md:grid-cols-2">

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Full Name
        </label>

        <input
  type="text"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  placeholder="John Smith"
  className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
  required
/>

      </div>

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@email.com"
          className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
          required
        />

      </div>

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Phone Number
        </label>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+44..."
          className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Country
        </label>

        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="United Kingdom"
          className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

    </div>

  </div>

  {/* Membership Information */}

  <div className="rounded-2xl border border-yellow-500/20 bg-[#081B33] p-6">

    <h3 className="mb-5 text-lg font-bold text-yellow-400">
      Membership Information
    </h3>

    <div className="grid gap-5 md:grid-cols-2">

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Member ID
        </label>

        <input
          value={id}
          readOnly
          className="w-full cursor-not-allowed rounded-xl border border-yellow-500 bg-[#102b52] px-4 py-3 font-bold text-yellow-400"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Joined Date
        </label>

        <input
          type="date"
          value={joinedDate}
          onChange={(e) => setJoinedDate(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Membership
        </label>

        <select
          value={membership}
          onChange={(e) => setMembership(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
        >
          <option>VIP GOLD</option>
          <option>VIP PLATINUM</option>
          <option>VIP DIAMOND</option>
        </select>

      </div>

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-[#102b52] px-4 py-3 text-white outline-none focus:border-yellow-500"
        >
          <option>ACTIVE</option>
          <option>PENDING</option>
          <option>SUSPENDED</option>
          <option>EXPIRED</option>
        </select>

      </div>

    </div>

  </div>
    <div className="flex gap-4 pt-2">

    <button
  type="submit"
  disabled={uploading}
  className="flex-1 rounded-xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {uploading
    ? "Uploading..."
    : member
    ? "Update Member"
    : "Save Member"}
</button>

    <button
      type="button"
      onClick={onClose}
      className="flex-1 rounded-xl bg-slate-700 py-4 font-bold text-white transition hover:bg-slate-600"
    >
      Cancel
    </button>

  </div>

</form>

      </div>
    </div>
  );
}