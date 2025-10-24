export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] min-h-[520px] md:min-h-[560px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/images/fani/61.png"
        alt="Φανή Καξηρή - Διατροφολόγος"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex items-center">
        <div className="text-[#FAF6EF]">
          <h1 className="leading-tight">
            Φανή Καξηρή
          </h1>

          {/* Narrower paragraph width using ch-based max-widths */}
          <p className="mt-2 font-semibold text-base text-[#E8D8C3] max-w-[30ch] sm:max-w-[34ch] md:max-w-[38ch]">
            Διαιτολόγος – Διατροφολόγος (BSc), M.P. on Eating Disorders &amp; Obesity (NCFED)
          </p>
        </div>
      </div>
    </section>
  );
}
