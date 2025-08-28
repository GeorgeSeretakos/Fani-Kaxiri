"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UnauthorizedRedirect() {
  const router = useRouter();

  useEffect(() => {
    alert("Δεν έχετε πρόσβαση. Παρακαλώ συνδεθείτε.");
    router.push("/login");
  }, [router]);

  return null;
}
