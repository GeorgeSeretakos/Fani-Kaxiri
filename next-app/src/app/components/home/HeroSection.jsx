export default function HeroSection() {
  return (
    <section className="relative h-[95vh]">
      {/* Background Image */}
      <img
        src="/images/tonia/7.jpg"
        alt="Tonia Kaparelioti"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0  z-10"></div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-lg">
          <h1 className="font-serif mb-4">
            Τόνια Καπαρελιώτη
          </h1>
          <h4>
            Διαιτολόγος – Διατροφολόγος
          </h4>
          <h4>
            Wellbeing & NLP Coach
          </h4>
        </div>
      </div>
    </section>
  );
}
