"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hydrated, setHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // This code only runs on the client after hydration
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setHydrated(true);
  }, []);

  // Avoid rendering anything auth-related until hydration is done
  if (!hydrated) return null;

  return (
    <nav className="bg-white text-black shadow right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/icons/logo.png" alt="Logo" width={80} height={80} />
              <span className="text-4xl font-great-vibes whitespace-nowrap">
                Believe in Yourself
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden sm:flex sm:space-x-4 items-center font-semibold">
            <NavItem href="/" label="Αρχική Σελίδα" />
            <NavItem href="/about-us" label="Ποιοί Είμαστε" />
            <NavItem href="/office" label="Ο Χώρος" />
            <NavItem href="/services" label="Υπηρεσίες" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/contact" label="Επικοινωνία" />
            {isLoggedIn ? (
              <NavItem href="/personal-info" label="Τα Στοιχεία Μου" />
            ) : (
              <NavItem href="/login" label="Σύνδεση" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-1 rounded-md transition whitespace-nowrap
        ${isActive ? "text-teal-800 border-b-2 border-teal-800" : "hover:text-teal-800 hover:border-b-2 hover:border-teal-800"}
      `}
    >
      {label}
    </Link>
  );
}


