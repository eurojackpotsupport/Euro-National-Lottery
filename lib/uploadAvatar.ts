import { supabase } from "@/lib/supabase";

export async function uploadAvatar(file: File) {
  const ext = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);

  return data.publicUrl;
}