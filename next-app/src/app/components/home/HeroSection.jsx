export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[540px] w-full overflow-hidden">
      <img
        src="/images/office/5.jpg"
        alt="Φανή Καξηρή - Διατροφολόγος"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#4A2A23]/60" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="text-[#FAF6EF]">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Φανή Καξηρή
          </h1>

          <p className="mt-2 text-lg md:text-xl text-[#E8D8C3]">
            Διαιτολόγος – Διατροφολόγος (BSc), M.P. on Eating Disorders &amp; Obesity (NCFED)
          </p>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#E8D8C3]">
            Mindful Eating, εξατομίκευση και σταθερή υποστήριξη σε κάθε βήμα.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#A6653A] text-white hover:bg-[#4A2A23] transition"
            >
              Κλείσε ραντεβού
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-white/10 text-[#E8D8C3] ring-1 ring-white/30 hover:bg-white/20 transition"
            >
              Δες τις υπηρεσίες
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
