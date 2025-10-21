export default function SplitColumnsWithImage({
leftTitle,
leftBullets = [],
rightTitle,
rightBullets = [],
imageSrc,
imageAlt,
bulletIcon = "/icons/check-white.png",
bulletAlt = "bullet icon",
}) {
  return (
    <div className="w-full my-8 px-4 sm:px-6 lg:px-8">
      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="mb-3 !text-center font-semibold leading-tight">
            {leftTitle}
          </h2>

          <ul className="space-y-2.5 sm:space-y-3">
            {leftBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-left font-semibold leading-snug"
              >
                <img
                  src={bulletIcon}
                  alt={bulletAlt}
                  className="w-5 h-5 mt-0.5 shrink-0"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div className="flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="h-auto w-auto max-w-full max-h-64 sm:max-h-72 lg:max-h-[420px] object-contain rounded-md md:rounded-none shadow ring-1 ring-[#FAF6EF]/20"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="mb-3 !text-center leading-tight">
            {rightTitle}
          </h2>

          <ul className="space-y-2.5 sm:space-y-3">
            {rightBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-left font-semibold leading-snug"
              >
                <img
                  src={bulletIcon}
                  alt={bulletAlt}
                  className="w-5 h-5 mt-0.5 shrink-0"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
