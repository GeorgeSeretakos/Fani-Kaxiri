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
    setMobileOpen(false); // close drawer on route change
  }, [pathname]);

  // Menu items per role (easy to extend)
  const items =
    role === "admin"
      ? [{ href: "/admin", label: "Πελάτες" }]
      : [];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-teal-800/95 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand (left) */}
            <div
              className="inline-flex items-center gap-2 rounded-md px-2 py-1 -mx-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
            >
              <span className="text-white font-semibold tracking-tight">
                {role === "admin"
                  ? "Believe in Yourself · Admin Panel"
                  : "Believe in Yourself · Nutrition Portal"}
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex items-center gap-2">
              {items.map((it) => (
                <NavItem key={it.href} href={it.href} label={it.label} />
              ))}

              {showLogout && (
                <form action={logoutAction} method="post">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
                    title="Αποσύνδεση"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden md:inline">Αποσύνδεση</span>
                  </button>
                </form>
              )}
            </div>

            {/* Mobile toggle */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
                className="p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden bg-white text-gray-900 border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col px-4 py-3">
              {items.map((it) => (
                <MobileItem key={it.href} href={it.href} label={it.label} />
              ))}

              {showLogout && (
                <form action={logoutAction} method="post" className="mt-1.5">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
                               text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
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

      {/* Spacer to compensate for fixed navbar height */}
      <div className="h-14" aria-hidden="true" />
    </>
  );
}

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition",
        "text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800",
        isActive ? "bg-white/10 text-white" : "",
      ].join(" ")}
    >
      <span>{label}</span>
      {/* underline accent on hover/active */}
      <span
        className={[
          "ml-2 h-[2px] w-0 bg-white/70 rounded-full transition-all duration-200",
          isActive ? "w-4" : "group-hover:w-4",
        ].join(" ")}
      />
    </Link>
  );
}

function MobileItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "inline-flex items-center justify-between rounded-md px-3 py-2 text-sm transition",
        "hover:bg-gray-100 active:bg-gray-200",
        isActive ? "text-teal-700 font-semibold" : "text-gray-800",
      ].join(" ")}
    >
      <span>{label}</span>
      {isActive && <span className="h-1 w-1 rounded-full bg-teal-600" />}
    </Link>
  );
}
