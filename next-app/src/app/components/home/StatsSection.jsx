import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="relative h-[60vh]">
      {/* Background image */}
      <Image
        src="/images/office/29.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/*<h2 className="text-2xl md:text-3xl font-semibold mb-4">*/}
        {/*  Η Ομάδα μας με Αξιοσημείωτα Επιτεύγματα*/}
        {/*</h2>*/}
        {/*<p className="max-w-2xl text-sm md:text-base text-white/80 mb-8">*/}
        {/*  Με πολυετή εμπειρία και αμέτρητες συνεργασίες, έχουμε βοηθήσει ανθρώπους να πετύχουν τους στόχους τους και να ζήσουν καλύτερα.*/}
        {/*</p>*/}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold">10+</p>
            <p className="mt-1 text-m">Χρόνια Εμπειρίας</p>
          </div>
          <div>
            <p className="text-5xl font-bold">500+</p>
            <p className="mt-1 text-m">Ευχαριστημένοι Πελάτες</p>
          </div>
          <div>
            <p className="text-5xl font-bold">20+</p>
            <p className="mt-1 text-m">Συνεργάτες</p>
          </div>
          <div>
            <p className="text-5xl font-bold">1000+</p>
            <p className="mt-1 text-m">Συνεδρίες</p>
          </div>
        </div>

        {/* Button */}
        {/*<button className="mt-8 px-6 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition rounded">*/}
        {/*  Μάθε Περισσότερα*/}
        {/*</button>*/}
      </div>
    </section>
  );
}
