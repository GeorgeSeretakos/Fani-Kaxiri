import Link from "next/link";

export default function AboutSection({
title,
image,
reverse = false,
fullWidthTitle = true,
description = [],
ticks = [],
features = [],
tickIcon = "/icons/check.png",
ctaText = "",
ctaLink = "",
}) {
  return (
    <section className="max-w-6xl m-auto px-4 py-12 rounded-xl">
      {/* Full width title */}
      {fullWidthTitle && (
        <div className="p-4 rounded-none md:rounded-xl text-xl sm:text-2xl font-bold text-white text-center mb-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] md:w-auto md:relative md:left-0 md:right-0 md:ml-0">
          {title}
        </div>
      )}

      <div
        className={`flex flex-col md:flex-row max-w-6xl mx-auto ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-8 items-center`}
      >

        {/* Image */}
        <div className="w-full md:flex-1">
          <div className="block md:hidden w-screen relative left-1/2 right-1/2 -ml-[50vw]">
            <img
              src={image}
              alt={title}
              className="w-full object-cover rounded-none"
            />
          </div>

          <div className="hidden md:block w-full">
            <img
              src={image}
              alt={title}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>


        {/* Content */}
        <div className="w-full md:flex-1">
          {!fullWidthTitle && (
            <h2
              className="title-teal mb-6"
              // allow simple HTML like <br>; normalize common </br> to <br>
              dangerouslySetInnerHTML={{
                __html: typeof title === "string" ? title.replace(/<\/br>/gi, "<br>") : title,
              }}
            />
          )}

          {/* Description */}
          <div className="leading-relaxed space-y-4">
            {description.map((item, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>


          {/* Ticks */}
          {ticks.length > 0 && (
            <ul className="mt-6 space-y-2">
              {ticks.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    src={tickIcon}
                    alt=""
                    className="w-5 h-5 mt-0.5 select-none"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={f.icon}
                    alt=""
                    className="w-14 h-14 object-contain mb-3 select-none"
                    aria-hidden="true"
                  />
                  <div className="text-gray-600 font-semibold leading-snug !text-sm">
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {ctaText && (
            <div className="my-10 flex justify-center md:justify-start">
              <Link href={ctaLink || "#"} className="btn">
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
