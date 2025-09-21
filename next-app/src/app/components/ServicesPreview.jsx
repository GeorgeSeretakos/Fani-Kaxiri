import Link from "next/link";
import StepsSection from "./StepsSection";

export default function ServicesPreview({
title = "Υπηρεσίες",
intro = "Επίλεξε τον τρόπο που σου ταιριάζει· εμείς προσαρμόζουμε το πλάνο σε σένα.",
steps = [],
sectionCtaText,
sectionCtaHref,
teaserText,
teaserHref,
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header + main CTA (μένουν ως έχουν) */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4A2A23]">
            {title}
          </h2>
          {intro && <p className="mt-2 text-[#6A5852]">{intro}</p>}
        </div>

        {sectionCtaText && sectionCtaHref && (
          <Link
            href={sectionCtaHref}
            className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-[#A6653A] text-white hover:bg-[#4A2A23] transition"
          >
            {sectionCtaText}
          </Link>
        )}
      </div>

      {/* Steps with icons */}
      <StepsSection steps={steps} />

      {/* Bottom teaser + mobile CTA */}
      <div className="mt-2 flex items-center justify-between">
        {teaserText && teaserHref ? (
          <Link
            href={teaserHref}
            className="text-[#4A2A23] underline underline-offset-4"
          >
            {teaserText}
          </Link>
        ) : (
          <span />
        )}

        {sectionCtaText && sectionCtaHref && (
          <Link
            href={sectionCtaHref}
            className="sm:hidden inline-flex px-4 py-2 rounded-xl bg-[#A6653A] mx-auto text-white hover:bg-[#4A2A23] transition"
          >
            {sectionCtaText}
          </Link>
        )}
      </div>
    </section>
  );
}
