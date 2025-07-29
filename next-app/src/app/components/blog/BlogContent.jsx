import posts from "../../../../public/data/blog";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function BlogContent({ category }) {
  const filteredPosts =
    category === "all"
      ? posts
      : posts.filter((post) => post.category === category);

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${category}/${post.slug}`}
            className="block"
          >
            <BlogCard
              image={post.image}
              title={post.title}
              description={post.description}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
