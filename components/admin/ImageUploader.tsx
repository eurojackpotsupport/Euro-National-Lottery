"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type Props = {
  bucket: string;
  value: string;
  onUpload: (url: string) => void;
};

export default function ImageUploader({
  bucket,
  value,
  onUpload,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function uploadImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    onUpload(data.publicUrl);

    setUploading(false);
  }

  return (
    <div className="md:col-span-2">

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={uploadImage}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full rounded-lg bg-[#081B33] p-3 text-left text-white hover:bg-[#0E2242]"
      >
        {uploading ? "Uploading..." : "Choose Winner Image"}
      </button>

      {value && (
        <div className="mt-4">

          <Image
            src={value}
            alt="Winner"
            width={180}
            height={180}
            className="rounded-xl border border-yellow-500/20 object-cover"
          />

        </div>
      )}

    </div>
  );
}