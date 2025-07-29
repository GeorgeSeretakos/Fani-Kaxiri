'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogTabs() {
  const pathname = usePathname();

  const tabs = [
    { href: "/blog", label: "Προβολή Όλων" },
    { href: "/blog/recipes", label: "Συνταγές" },
    { href: "/blog/articles", label: "Αρθρογραφία" },
    { href: "/blog/media", label: "Media" },
  ];

  return (
    <div className="w-full bg-teal-800 shadow-sm">
      <nav className="flex max-w-7xl mx-auto gap-6 px-4 py-2 text-sm md:text-base">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-2 py-1 border-b-2 transition ${
              pathname === tab.href
                ? "border-yellow-400 text-white font-medium"
                : "border-transparent hover:border-yellow-400 text-white"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
