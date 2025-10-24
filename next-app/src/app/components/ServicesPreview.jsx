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
    <section className="max-w-6xl mx-auto px-4 py-8">
      {/* Header (desktop CTA only) */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4A2A23]">
            {title}
          </h2>
          {intro && <p className="mt-2 text-[#6A5852]">{intro}</p>}
        </div>

        {/* Show ONLY on md+ */}
        {sectionCtaText && sectionCtaHref && (
          <div className="hidden md:block">
            <Link href={sectionCtaHref} className="btn">
              {sectionCtaText}
            </Link>
          </div>
        )}
      </div>

      {/* Steps with icons */}
      <StepsSection steps={steps} />

      {/* Bottom teaser + mobile CTA */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {teaserText && teaserHref ? (
          <Link
            href={teaserHref}
            className="text-[#4A2A23] underline underline-offset-4 md:order-1"
          >
            {teaserText}
          </Link>
        ) : (
          <span />
        )}

        {/* Show ONLY on < md */}
        {sectionCtaText && sectionCtaHref && (
          <div className="block md:hidden mx-auto self-start">
            <Link href={sectionCtaHref} className="btn">
              {sectionCtaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
