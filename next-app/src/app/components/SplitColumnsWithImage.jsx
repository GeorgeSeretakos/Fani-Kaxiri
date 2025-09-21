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
    <div className="w-full my-12 bg-[#4A2A23] px-4 sm:px-6 lg:px-8">
      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="mb-4 !text-center text-2xl sm:text-3xl font-semibold text-[#FAF6EF]">
            {leftTitle}
          </h2>

          <ul className="space-y-3 sm:space-y-4">
            {leftBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-left font-semibold text-[#E8D8C3]"
              >
                <img
                  src={bulletIcon}
                  alt={bulletAlt}
                  className="w-5 h-5 mt-1 shrink-0"
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
            className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain lg:object-cover rounded-md md:rounded-none shadow ring-1 ring-[#FAF6EF]/20"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="mb-4 !text-center text-2xl sm:text-3xl font-semibold text-[#FAF6EF]">
            {rightTitle}
          </h2>

          <ul className="space-y-3 sm:space-y-4">
            {rightBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-left font-semibold text-[#E8D8C3]"
              >
                <img
                  src={bulletIcon}
                  alt={bulletAlt}
                  className="w-5 h-5 mt-1 shrink-0"
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
