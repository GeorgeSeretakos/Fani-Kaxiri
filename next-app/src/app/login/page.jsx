'use client';

import { useState } from "react";
import IntroSection from "../components/about/IntroSection";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:1338/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        window.location.href = "/personal-info";
        alert("Login successful!");
      } else {
        setError(data?.error?.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen">
      {/* Intro section */}
      <IntroSection
        image="/images/office/17.jpg"
        title="Είσοδος στην Υπηρεσία"
        paragraph={
          <>
            <p>
              Είσαι ήδη πελάτης μας;
            </p>
            <p>
              Πλέον μπορείς να δεις την πρόοδό σου καθώς και τις ενημερωμένες δίαιτες που προκύπτουν από τις συνεδρίες μας.
            </p>
            <p>
              Βάλε τα στοιχεία σου και συνδέσου στην υπηρεσία!
            </p>
          </>
        }
      />

      {/* Login Form */}
      <div className="max-w-md mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">Σύνδεση</h2>
        <input
          type="text"
          placeholder="Username ή Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
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
          Σύνδεση
        </button>
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </main>
  );
}
