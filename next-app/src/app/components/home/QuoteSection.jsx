import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="relative h-[60vh]">
      {/* Background Image */}
      <Image
        src="/images/food/5.jpg"
        alt="Quote Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 h-full text-white w-1/3 flex items-center px-4 ml-auto mr-[5%]">
        <p className="text-2xl md:text-3xl font-light max-w-3xl text-right">
          Η διατροφή δεν είναι μόνο θέμα θερμίδων, είναι θέμα συναισθημάτων
        </p>
      </div>
    </section>
  );
}
