import BlogTabs from "../components/blog/BlogTabs";
import BlogContent from "../components/blog/BlogContent";
import Navbar from "../components/Navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar/>
      <main className="">
        <BlogTabs/>
        <BlogContent category="all"/>
      </main>
    </>
  );
}
