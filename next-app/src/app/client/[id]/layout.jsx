import { verifyClient } from "../../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import Link from "next/link";

export default async function ClientLayout({ children }) {
  const client = await verifyClient();

  if (!client) {
    return <UnauthorizedRedirect />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <header className="bg-teal-700 text-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Περιοχή Πελάτη</h1>

        <nav className="flex items-center space-x-6">
          <Link
            href="/client"
            className="hover:text-gray-200 transition-colors"
          >
            Αρχική
          </Link>
          <form action="/api/logout" method="post">
            <button
              type="submit"
              className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
            >
              Αποσύνδεση
            </button>
          </form>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
