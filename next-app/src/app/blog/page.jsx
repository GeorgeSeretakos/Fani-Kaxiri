"use client";
import { useState } from "react";
import posts from "../../../public/data/blog";
import BlogCard from "../components/blog/BlogCard";

export default function BlogPage() {
  const [category, setCategory] = useState("recipes");

  const tabs = [
    { value: "recipes", label: "Συνταγές" },
    { value: "articles", label: "Αρθρογραφία" },
    { value: "media", label: "Media" },
  ];

  const filteredPosts = posts.filter((p) => p.category === category);

  return (
    <main>
      {/* Tabs */}
      <div className="w-full bg-teal-800 shadow-sm">
        <nav
          className="
            flex
            max-w-7xl
            mx-auto
            gap-4
            p-4
            overflow-x-auto
            scrollbar-hide
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setCategory(tab.value)}
              className={`whitespace-nowrap px-3 py-1 border-b-2 transition cursor-pointer ${
                category === tab.value
                  ? "border-yellow-400 text-white font-medium"
                  : "border-transparent hover:border-yellow-400 text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.filter(Boolean).map((post) => (
            <div key={post.slug || post.pdfUrl || post.title}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
