export default function StatsSection() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/office/29.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2>2000+</h2>
            <p className="font-semibold mt-1">Ευχαριστημένοι Πελάτες</p>
          </div>
          <div>
            <h2>8000+</h2>
            <p className="font-semibold mt-1">Συνεδρίες</p>
          </div>
          <div>
            <h2>30+</h2>
            <p className="font-semibold mt-1">Διαφορετικές Συνεργασίες</p>
          </div>
          <div>
            <h2>5</h2>
            <p className="font-semibold mt-1">Βασικοί Συνεργάτες</p>
          </div>
        </div>
      </div>
    </section>
  );
}
