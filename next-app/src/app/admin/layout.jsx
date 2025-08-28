import { verifyAdmin } from "../api/_lib/auth";
import Link from "next/link";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";

export default async function AdminLayout({ children }) {
  const admin = await verifyAdmin();

  if (!admin) {
    return <UnauthorizedRedirect />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <header className="bg-gray-800 text-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Σύστημα Διαχείρισης Πελατών</h1>

        <nav className="flex items-center space-x-6">
          <Link
            href="/admin"
            className="hover:text-gray-300 transition-colors"
          >
            Όλοι οι πελάτες
          </Link>
          <form action="/api/logout" method="post">
            <button
              type="submit"
              className="px-4 py-1.5 rounded-md bg-red-500 hover:bg-red-600 transition-colors"
            >
              Αποσύνδεση
            </button>
          </form>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
