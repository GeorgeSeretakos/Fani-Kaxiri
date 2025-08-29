import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="relative h-[60vh]">
      {/* Background Image */}
      <img
        src="/images/food/5.webp"
        alt="Quote Background"
        className="absolute inset-0 fill w-full h-full object-cover object-center z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 h-full text-white flex items-center justify-center">
        <h2 className="font-semibold max-w-3/4 text-center">
          Η διατροφή δεν είναι μόνο θέμα θερμίδων, είναι θέμα συναισθημάτων
        </h2>
      </div>
    </section>
  );
}
