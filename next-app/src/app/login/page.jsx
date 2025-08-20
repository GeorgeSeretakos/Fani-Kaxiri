'use client';
import { useState } from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/about/IntroSection";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);

        if (data.role === "ADMIN") {
          window.location.href = "/admin";
        } else if (data.role === "CLIENT") {
          window.location.href = `/client/${data.id}`;
        }
      } else if (data.status === "invalid_password") {
        setError("Λάθος κωδικός.");
      } else if (data.status === "first_login") {
        window.location.href = `/set-password?email=${encodeURIComponent(email)}`;
      } else {
        setError("Δεν υπάρχει λογαριασμός με αυτό το email.");
      }
    } catch {
      setError("Σφάλμα δικτύου. Δοκίμασε ξανά.");
    }
  };


  return (
    <main className="min-h-screen">
      <Navbar />
      <IntroSection
        image="/images/office/17.jpg"
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
        />
        <input
          type="password"
          placeholder="Κωδικός"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-4 w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Συνέχεια
        </button>

        <a
          href="/set-password"
          className="block text-center text-blue-600 mt-4 underline"
        >
          Πρώτη φορά σύνδεση; Ορίστε κωδικό εδώ.
        </a>

        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </main>
  );
}
