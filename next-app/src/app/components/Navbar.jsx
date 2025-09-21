"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white text-[#2B1C18] shadow fixed top-0 right-0 z-50 w-full border-b border-[#E6DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20 sm:h-24">
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex items-center space-x-2 shrink-0" aria-label="Home">
              <img
                src="/icons/logo_circle.png"
                alt="Fani Kaxiri"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
              {/* Mobile: short name only, same styling as nav items */}
              <span className="sm:hidden truncate font-semibold text-sm lg:text-base text-[#2B1C18] leading-none">
                Φανή Καξηρή
              </span>
                          {/* Tablet/Desktop: full title, same styling as nav items */}
                          <span className="hidden sm:inline-block truncate font-semibold text-sm lg:text-base text-[#2B1C18] leading-none">
                Φανή Καξηρή Διατολόγος-Διατροφολόγος
              </span>
            </Link>

          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-4 lg:space-x-5 items-center font-semibold text-sm lg:text-base">
            <NavItem href="/" label="Αρχική"/>
            <NavItem href="/about" label="Η Διαιτολόγος"/>
            <NavItem href="/services" label="Υπηρεσίες"/>
            <NavItem href="/office" label="Ο Χώρος"/>
            <NavItem href="/blog" label="Blog"/>
            <NavItem href="/contact" label="Επικοινωνία"/>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6653A]"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Links */}
      {mobileOpen && (
        <div className="sm:hidden bg-white shadow-md border-t border-[#E6DDD3]">
          <div className="flex flex-col space-y-2 px-4 py-4 font-medium">
            <NavItem href="/" label="Home"/>
            <NavItem href="/about" label="About"/>
            <NavItem href="/services" label="Services"/>
            <NavItem href="/office" label="Office"/>
            <NavItem href="/blog" label="Blog"/>
            <NavItem href="/contact" label="Contact"/>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({href, label}) {
  const pathname = usePathname();

  // Normalize trailing slashes for active state; treat "/services/..." as active for "/services"
  const normalize = (p) => (p && p !== "/" ? p.replace(/\/+$/, "") : "/");
  const isActive =
    normalize(pathname) === normalize(href) ||
    (href !== "/" && normalize(pathname).startsWith(normalize(href)));

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-1 rounded-sm transition whitespace-nowrap border-b-2 ${
        isActive
          ? "text-[#4A2A23] border-[#A6653A]"
          : "text-[#2B1C18] border-transparent hover:text-[#4A2A23] hover:border-[#A6653A]"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
