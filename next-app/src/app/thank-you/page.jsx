import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1>
        Ευχαριστούμε για την επικοινωνία σας!
      </h1>
      <p className="mb-6">
        Θα σας απαντήσουμε το συντομότερο δυνατό.
      </p>
      <Link
        href="/"
        className="text-sky-400 underline hover:text-sky-300 transition"
      >
        Επιστροφή στην αρχική σελίδα
      </Link>
    </main>
  );
}
