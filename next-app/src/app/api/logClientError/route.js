// src/app/api/logClientError/route.js
export async function POST(req) {
  const { scope, details, ts } = await req.json();

  console.error(
    JSON.stringify({
      level: "client-error",
      scope,
      ts,
      ...details,
    })
  );

  return Response.json({ ok: true });
}
