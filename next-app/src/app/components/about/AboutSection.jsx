export default function AboutSection({ title, text, image, reverse = false, bgColor="" }) {
  return (
    <section className={`${bgColor} w-full px-4 py-12 rounded-xl`}>
      <div
        className={`flex flex-col md:flex-row max-w-6xl mx-auto ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-8 items-center`}
      >
        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
