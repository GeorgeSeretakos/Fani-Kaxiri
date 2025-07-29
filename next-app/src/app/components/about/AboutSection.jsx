export default function AboutSection({ title, text, image, reverse = false, imageDimensions = "" }) {
  return (
    <section className="w-full px-4 py-12 rounded-xl">
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
            className={`rounded-lg shadow-md object-cover ${imageDimensions || "w-full"}`}
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="title-black">{title}</h2>
          <div className="leading-relaxed space-y-4">
            {text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p> // JSX paragraph
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
