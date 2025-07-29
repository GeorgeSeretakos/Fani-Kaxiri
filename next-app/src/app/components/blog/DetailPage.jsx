import Image from "next/image";
import Link from "next/link";
import data from "../../../../public/data/blog";
import BlogCard from "./BlogCard";

export default function DetailPage({ category, slug }) {
  const post = data.find(
    (item) => item.slug === slug && item.category === category
  );

  if (!post) {
    return <p className="text-center mt-24">Post not found</p>;
  }

  const relatedPosts = data
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, 3);

  return (
    <main className="mt-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
          <Link href="/blog" className="hover:underline">Blog</Link> &gt;{" "}
          <Link href={`/blog/${category}`} className="hover:underline capitalize">{category}</Link> &gt;{" "}
          {post.title}
        </nav>

        {/* Title & meta */}
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {post.date} | {category}
        </p>

        {/* Image */}
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-xl shadow mb-6"
        />

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        {/* Conditional link */}
        {post.link && (
          <div className="mt-6">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
            >
              {category === "media" ? "Watch Video" : "Read More"}
            </a>
          </div>
        )}

        {/* Read also */}
        <section className="mt-12">
          <h3 className="text-xl font-bold mb-4">Read Also</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map((r) => (
              <BlogCard
                key={r.slug}
                image={r.image}
                title={r.title}
                description={r.description}
                href={`/blog/${category}/${r.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
