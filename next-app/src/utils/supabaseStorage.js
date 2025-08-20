import supabaseClient from "../../lib/supabaseClient";

const BUCKET = "documents"; // name of your private bucket

// 🔹 Generate a signed URL for downloading
export async function getSignedUrl(filePath, expiresIn = 60) {
  const { data, error } = await supabaseClient.storage
    .from(BUCKET)
    .createSignedUrl(filePath, expiresIn);

  if (error) throw error;
  return data.signedUrl;
}

// 🔹 Create an upload URL (so frontend can PUT the file directly)
export async function createUploadUrl(filePath, expiresIn = 60) {
  const { data, error } = await supabaseClient.storage
    .from(BUCKET)
    .createSignedUploadUrl(filePath);

  if (error) throw error;
  return data.signedUrl; // frontend will use this with fetch PUT
}
