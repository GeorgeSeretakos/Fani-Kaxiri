// app/blog/[slug]/page.jsx
import posts from "../../../../public/data/blog";
import Link from "next/link";

export default function BlogSlugPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h2>Το άρθρο δεν βρέθηκε</h2>
        <p>Αυτό το περιεχόμενο είναι διαθέσιμο μόνο ως PDF.</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h3 className="title-black text-center">{post.title}</h3>

      {post.image && (
        <div className="mb-6">
          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {post.contentHtml ? (
        <div
          className="content blog"
          dangerouslySetInnerHTML={{__html: post.contentHtml}}
        />

      ) : (
        post.content?.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
      )}

      {post.externalUrl && (
        <Link
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-medium hover:underline"
        >
          Δες περισσότερα →
        </Link>
      )}

    </article>
  );
}
