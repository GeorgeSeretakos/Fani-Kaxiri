import posts from "../../../../public/data/blog";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";

export default function BlogPreviewSection() {
  // keep only posts that have slug (exclude PDFs/studies)
  const blogPosts = posts.filter((post) => post.slug);

  // unique categories
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  // one post per category (first found)
  const previewPosts = categories
    .map((category) => blogPosts.find((post) => post.category === category))
    .filter(Boolean)
    .slice(0, 3);

  console.log("Preview Posts: ", previewPosts);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="title-teal">Blog</h2>
      <div className="max-w-2xl mb-8">
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Μοιραζόμαστε συνταγές, συμμετοχές σε άρθρα και περιοδικά, εμφανίσεις σε μέσα, αλλά και
          στιγμές από την παρουσία μας στα social media — με στόχο πάντα να σε εμπνέουμε να φροντίζεις
          τον εαυτό σου με απλό και ρεαλιστικό τρόπο.
        </p>
        <div className="mt-4">
          <Link href="/blog" className="btn">
            Προβολή όλων
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
