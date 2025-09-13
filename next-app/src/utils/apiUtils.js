// Mask email for logs (avoid PII in plain text)
export function maskEmail(e = "") {
  const [u, d] = String(e).split("@");
  if (!d) return "masked";
  const m = u.length <= 2 ? u[0] + "*" : u[0] + "*".repeat(u.length - 2) + u[u.length - 1];
  return `${m}@${d}`;
}

// Grab minimal request metadata for logs/monitoring
export function getRequestMeta(req) {
  const ua = req.headers.get("user-agent") || "";
  const fwd = req.headers.get("x-forwarded-for") || "";
  const realIp = req.headers.get("x-real-ip") || "";
  const ip = (fwd.split(",")[0] || realIp || "").trim();
  return { ip, ua };
}
