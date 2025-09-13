// app/login/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false); // required privacy acceptance
  const [error, setError] = useState("");

  // Show a one-time alert when redirected here (e.g., session expired / unauthorized)
  const alertedRef = useRef(false);
  useEffect(() => {
    if (alertedRef.current) return;
    alertedRef.current = true;
    try {
      const msg = sessionStorage.getItem("authNotice");
      if (msg) {
        alert(msg);
        sessionStorage.removeItem("authNotice");
      }
    } catch {}
  }, []);

  const handleLogin = async () => {
    setError("");

    if (!accepted) {
      setError("Για να συνεχίσεις, αποδέξου την Πολιτική Απορρήτου.");
      return;
    }

    try {
      const res = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          acceptedPrivacy: accepted,
        }),
      });

      // Read request id for monitoring/debugging
      const rid = res.headers.get("X-Request-ID") || "";

      const data = await res.json();

      if (data.status === "success") {
        if (data.role === "ADMIN") {
          window.location.href = "/admin";
        } else if (data.role === "CLIENT") {
          window.location.href = `/client/${data.id}`;
        } else {
          window.location.href = "/";
        }
        return;
      }

      if (data.status === "first_login") {
        window.location.href = `/set-password?email=${encodeURIComponent(email)}`;
        return;
      }

      // Map backend statuses to friendly UI messages
      const messages = {
        privacy_not_accepted: "Για να συνεχίσεις, αποδέξου την Πολιτική Απορρήτου.",
        invalid_credentials: "Συμπλήρωσε σωστά email και κωδικό.",
        not_found: "Δεν υπάρχει λογαριασμός με αυτό το email.",
        invalid_password: "Λάθος κωδικός.",
        error: "Παρουσιάστηκε σφάλμα. Δοκίμασε ξανά.",
      };

      setError(messages[data.status] || "Παρουσιάστηκε σφάλμα. Δοκίμασε ξανά.");
      if (rid) console.warn(`[login] status=${data.status} requestId=${rid}`);
    } catch {
      setError("Σφάλμα δικτύου. Δοκίμασε ξανά.");
    }
  };

  return (
    <main className="min-h-screen mt-16">
      <Navbar />
      <IntroSection
        image="/images/office/17.webp"
        title="Είσοδος στην Υπηρεσία"
        paragraph={
          <>
            <p>Είσαι ήδη πελάτης μας;</p>
            <p>Μπες για να δεις την πρόοδό σου και τις ενημερωμένες δίαιτες.</p>
            <p>Βάλε το email και τον κωδικό σου για να συνεχίσεις.</p>
          </>
        }
      />

      <div className="max-w-md mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">Σύνδεση</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded"
          autoComplete="username"
        />

        <input
          type="password"
          placeholder="Κωδικός"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-2 w-full p-2 border border-gray-300 rounded"
          autoComplete="current-password"
        />

        {/* Required acceptance checkbox (like contact form) */}
        <label className="flex items-start gap-2 mb-4">
          <input
            type="checkbox"
            className="mt-1"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            required
          />
          <span className="text-sm text-gray-800">
            Δηλώνω ότι έχω διαβάσει και αποδέχομαι την{" "}
            <a
              href="/privacy-policy#privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Πολιτική Απορρήτου
            </a>
            .
          </span>
        </label>

        <button
          onClick={handleLogin}
          disabled={!accepted}
          className={`w-full text-white py-2 rounded transition ${
            accepted ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
          }`}
          aria-disabled={!accepted}
        >
          Συνέχεια
        </button>

        {error && (
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <a
          href="/set-password"
          className="block text-center text-blue-600 mt-4 underline"
        >
          Πρώτη φορά σύνδεση; Ορίστε κωδικό εδώ.
        </a>
      </div>
    </main>
  );
}