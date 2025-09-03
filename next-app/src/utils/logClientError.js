export async function logClientError(scope, details = {}) {
  try {
    await fetch("/api/logClientError", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        scope,
        details,
        ts: new Date().toISOString(),
      }),
    });
  } catch (e) {
    // σε περίπτωση που αποτύχει ούτε αυτό, γράφουμε μόνο στον browser console
    console.warn("Failed to report client error", e);
  }
}
