import BlogTabs from "../components/blog/BlogTabs";
import BlogContent from "../components/blog/BlogContent";

export default function BlogPage() {
  return (
    <main className="">
      <BlogTabs />
      <BlogContent category="all" />
    </main>
  );
}
