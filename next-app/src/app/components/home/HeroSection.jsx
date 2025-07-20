export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <img
        src="/images/tonia/7.jpg"
        alt="Tonia Kaparelioti"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Tonia Kaparelioti
          </h1>
          <p className="text-lg md:text-xl">
            Διαιτολόγος – Διατροφολόγος
          </p>
          <p className="text-lg md:text-xl">
            Wellbeing & NLP Coach
          </p>
        </div>
      </div>
    </section>
  );
}
