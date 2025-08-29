"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white text-black shadow right-0 z-50 fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/icons/logo.jpg"
                alt="Logo"
                className="h-10 sm:h-12 lg:h-16 w-auto"
              />
              <img
                src="/icons/Believe-in-Yourself-2.png"
                alt="Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-4 lg:space-x-5 items-center font-semibold text-xs lg:text-sm">
            <NavItem href="/" label="Αρχική Σελίδα" />
            <NavItem href="/about-us" label="Ποιοί Είμαστε" />
            <NavItem href="/services" label="Υπηρεσίες" />
            <NavItem href="/office" label="Ο Χώρος" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/contact" label="Επικοινωνία" />
            <NavItem href="/login" label="Σύνδεση" />
          </div>


          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800"
            >
              {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileOpen && (
        <div className="sm:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-2 px-4 py-4 font-medium">
            <NavItem href="/" label="Αρχική Σελίδα" />
            <NavItem href="/about-us" label="Ποιοί Είμαστε" />
            <NavItem href="/office" label="Ο Χώρος" />
            <NavItem href="/services" label="Υπηρεσίες" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/contact" label="Επικοινωνία" />
            <NavItem href="/login" label="Σύνδεση" />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({href, label}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-1 rounded-sm transition whitespace-nowrap
        ${isActive
        ? "text-teal-800 border-b-2 border-teal-800"
        : "hover:text-teal-800 hover:border-b-2 hover:border-teal-800"}
      }`}
    >
      {label}
    </Link>
  );
}
