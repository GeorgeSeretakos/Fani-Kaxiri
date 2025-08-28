import supabaseClient from "../../lib/supabaseClient";

const BUCKET = "documents";

// -------- CLIENT-SAFE (via anon key) --------

/**
 * Client gets a signed URL for viewing their own file.
 * This must be filtered by your backend route (only return
 * URLs for files owned by the logged-in user).
 */
export async function getSignedUrl(filePath, expiresIn = 60) {
  console.log("Requesting signed URL for path:", filePath);

  const { data, error } = await supabaseClient.storage
    .from(BUCKET)
    .createSignedUrl(filePath, expiresIn);

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  console.log("Signed URL created:", data.signedUrl);
  return data.signedUrl;
}
