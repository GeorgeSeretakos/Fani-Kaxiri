import Link from "next/link";

export default function OfficePreview({
title = "Ο χώρος",
intro = "Ζεστός, φωτεινός και γήινος — για να νιώθεις άνετα από το πρώτο λεπτό.",
images = [], // [{src, alt}]
ctaText = "Δες τον χώρο",
ctaHref = "/office",
bullets = [],
}) {
  return (
    <section className="px-4 py-16 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto">
        {/* Header row: title + intro + CTA στην ίδια γραμμή */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#4A2A23]">
              {title}
            </h2>
            {intro && <p className="mt-2 text-[#6A5852]">{intro}</p>}
          </div>

          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex px-4 py-2 rounded-xl bg-[#A6653A] text-white hover:bg-[#4A2A23] transition self-start sm:self-auto"
            >
              {ctaText}
            </Link>
          )}
        </div>

        {/* Optional bullets */}
        {bullets?.length > 0 && (
          <ul className="mt-6 grid sm:grid-cols-3 gap-3">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[#2B1C18]/85"
              >
                <span className="mt-1 text-[#A6653A]">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Gallery grid */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden ring-1 ring-[#E6DDD3] bg-white">
              <img
                src={img.src}
                alt={img.alt || "office image"}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
