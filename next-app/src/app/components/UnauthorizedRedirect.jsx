"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GENERIC_MSG =
  "Η συνεδρία σας έληξε ή δεν έχετε πρόσβαση σε αυτή τη σελίδα. Παρακαλώ συνδεθείτε.";

export default function UnauthorizedRedirect({
exp = null,            // UNIX seconds; if provided, we schedule redirect at exp
immediate = true,      // if true (default) or no exp -> redirect now
message = GENERIC_MSG, // generic Greek message
}) {
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      try { sessionStorage.setItem("authNotice", message); } catch {}
      router.replace("/login");
    };

    // Immediate redirect (unauthorized case)
    if (immediate || !exp) {
      redirect();
      return;
    }

    // Scheduled redirect at token expiry (authorized-but-watching case)
    const msLeft = exp * 1000 - Date.now();
    if (msLeft <= 0) { redirect(); return; }

    const timer = setTimeout(redirect, msLeft);

    // Also check on focus/visibility in case the tab was sleeping
    const onWake = () => { if (Date.now() >= exp * 1000) redirect(); };
    window.addEventListener("focus", onWake);
    document.addEventListener("visibilitychange", onWake);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", onWake);
      document.removeEventListener("visibilitychange", onWake);
    };
  }, [exp, immediate, message, router]);

  return null;
}