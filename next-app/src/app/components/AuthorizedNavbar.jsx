"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";

export default function AuthorizedNavbar({
role,
showLogout = true,
logoutAction = "/api/logout",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Menu items per role
  const items =
    role === "admin"
      ? [ { href: "/admin", label: "Πελάτες" },] : [];

  return (
    <nav className="bg-teal-800 text-white fixed top-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-4 font-semibold text-xs lg:text-sm">
            {items.map((it) => (
              <NavItem key={it.href} href={it.href} label={it.label}/>
            ))}

            {showLogout && (
              <form action={logoutAction} method="post">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-sm text-white hover:font-bold transition"
                  title="Αποσύνδεση"
                >
                  <LogOut className="w-4 h-4"/>
                  <span className="hidden md:inline">Αποσύνδεση</span>
                </button>
              </form>
            )}
          </div>

          {/* Mobile toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800"
            >
              {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-2 px-4 py-4 font-medium">
            {items.map((it) => (
              <NavItem key={it.href} href={it.href} label={it.label}/>
            ))}

            {showLogout && (
              <form action={logoutAction} method="post">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-sm text-gray-700 hover:text-teal-800 hover:bg-gray-50 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Αποσύνδεση
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-1 rounded-sm transition whitespace-nowrap
        ${
        isActive
          ? "text-teal-800 border-b-2 border-teal-800"
          : "hover:text-teal-800 hover:border-b-2 hover:border-teal-800"
      }`}
    >
      {label}
    </Link>
  );
}
