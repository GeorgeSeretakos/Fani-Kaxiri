'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";

export default function SetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSetPassword = async () => {
    if (!email) {
      setError("Συμπλήρωσε το email σου.");
      return;
    }
    if (!password || password !== confirm) {
      setError("Οι κωδικοί δεν ταιριάζουν.");
      return;
    }

    try {
      const res = await fetch("/api/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword: password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setSuccess("Ο κωδικός ορίστηκε επιτυχώς. Μπορείς να συνδεθείς τώρα.");
        setError("");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else if (data.status === "not_found") {
        setError("Δεν υπάρχει χρήστης με αυτό το email.");
      } else if (data.status === "already_set") {
        setError("Ο κωδικός έχει ήδη οριστεί. Δοκίμασε να συνδεθείς.");
      } else {
        setError("Κάτι πήγε στραβά.");
      }
    } catch {
      setError("Σφάλμα δικτύου. Δοκίμασε ξανά.");
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <IntroSection
        image="/images/office/18.webp"
        title="Ορισμός Κωδικού"
        paragraph={
          <>
            <p>Είναι η πρώτη σου σύνδεση;</p>
            <p>Επίλεξε έναν ασφαλή κωδικό για το λογαριασμό σου.</p>
          </>
        }
      />

      <div className="max-w-md mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">Ορισμός Κωδικού</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Νέος Κωδικός"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Επιβεβαίωση Κωδικού"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded"
        />

        <button
          onClick={handleSetPassword}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Αποθήκευση
        </button>

        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </div>
    </main>
  );
}
