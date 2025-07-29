import BlogTabs from "./BlogTabs";
import BlogContent from "./BlogContent";

export default function BlogCategoryPage({ category }) {
  return (
    <main className="">
      <BlogTabs />
      <BlogContent category={category} />
    </main>
  );
}
