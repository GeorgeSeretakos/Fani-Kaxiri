export default function ServiceCard({ iconSrc, iconAlt, title, description }) {
  return (
    <div
      className="border border-teal-400 bg-white rounded-xl p-6 shadow-lg transition
                 w-full flex flex-col items-start
                 min-h-[14rem] sm:min-h-[16rem]"  // shorter than before
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full mb-3">
        <img
          src={iconSrc}
          alt={iconAlt || title}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="text-teal-800 mb-2 text-left font-semibold">
        {title}
      </h4>

      {/* Description */}
      <p className="!text-sm sm:!text-base text-gray-700 text-left">
        {description}
      </p>
    </div>
  );
}