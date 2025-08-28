import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyAdmin() {
  try {
    const cookieStore = await cookies(); // ✅ must await
    const token = cookieStore.get("token")?.value; // name of your cookie

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "ADMIN") return null;

    return decoded;
  } catch (err) {
    return null;
  }
}


export async function verifyClient(expectedId = null) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "CLIENT") return null;

    // If an expectedId is passed, enforce ownership
    if (expectedId && decoded.id !== Number(expectedId)) {
      return null;
    }

    return decoded; // contains { id, email, role }
  } catch {
    return null;
  }
}
