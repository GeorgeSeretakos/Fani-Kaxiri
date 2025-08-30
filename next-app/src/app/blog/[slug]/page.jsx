import posts from "../../../../public/data/blog";
import Link from "next/link";

export default function BlogSlugPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    // If [slug] not found (e.g. it's a PDF-only post), show a simple message
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 prose prose-lg">
        <h2>Το άρθρο δεν βρέθηκε</h2>
        <p>Αυτό το περιεχόμενο είναι διαθέσιμο μόνο ως PDF.</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 prose prose-lg">
      <h2 className="mb-6">{post.title}</h2>

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

      {post.content?.map((paragraph, idx) => (
        <p key={idx} className="mb-4">
          {paragraph}
        </p>
      ))}

      {post.externalUrl && (
        <Link
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-teal-800 font-medium hover:underline"
        >
          Δες περισσότερα →
        </Link>
      )}
    </article>
  );
}
