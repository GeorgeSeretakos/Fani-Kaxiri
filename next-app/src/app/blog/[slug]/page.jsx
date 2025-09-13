// app/blog/[slug]/page.jsx
import posts from "../../../../public/data/blog";
import Link from "next/link";

export default function BlogSlugPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  console.log("Slug: ", slug);
  console.log("Post: ", post);

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

      {/* Instagram links (custom layout) */}
      {post.instagramPostUrl && post.instagramProfileUrl && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/icons/annaliciouslogo.png"
              alt="Annalicious Healthy Bites"
              width={56}
              height={56}
              className="inline-block w-14 h-14 object-contain"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                Συνεργατικό περιεχόμενο από την Anna — Annalicious Healthy Bites
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Link
              href={post.instagramPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm md:text-base font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-100 transition"
            >
              <span>Δες τη δημοσίευση της <b>@annalicious_healthybites</b> για την παραπάνω συνταγή!</span>
              <span className="ml-4">→</span>
            </Link>

            <Link
              href={post.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm md:text-base font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-100 transition"
            >
              <span>Δες το προφίλ της Άννας στο Instagram</span>
              <span className="ml-4">→</span>
            </Link>
          </div>
        </div>
      )}

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
