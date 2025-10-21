"use client";
import { useState } from "react";
import posts from "../../../public/data/blog";
import BlogCard from "../components/blog/BlogCard";
import Navbar from "../components/Navbar";

export default function BlogPage() {
  const [category, setCategory] = useState("recipes");

  const tabs = [
    { value: "recipes", label: "Συνταγές" },
    { value: "articles", label: "Άρθρα" },
  ];

  const filteredPosts = posts.filter((p) => p.category === category);

  return (
    <main className="mt-16">
      <Navbar />
      {/* Tabs */}
      <div className="w-full bg-[#4A2A23] shadow-sm">
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
                  ? "border-white text-white font-medium"
                  : "border-transparent hover:border-white text-white"
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
