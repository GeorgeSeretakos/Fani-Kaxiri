import { verifyClient } from "../../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default async function ClientLayout({ children }) {
  const client = await verifyClient();

  if (!client) {
    return <UnauthorizedRedirect />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <header className="bg-blue-600 text-white shadow px-6 py-4 flex justify-between items-center">
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded hover:cursor-pointer text-white transition-colors"
              title="Αποσύνδεση"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Αποσύνδεση</span>
            </button>
          </form>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
