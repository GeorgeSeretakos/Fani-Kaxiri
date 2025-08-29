import Image from "next/image";
import Link from "next/link";

export default function OfficePreviewSection() {
  const previewImages = [
    "/images/office/20.webp",
    "/images/office/17.webp",
    "/images/office/21.webp",
    "/images/office/4.webp",
    "/images/office/10.webp",
    "/images/office/38.webp"
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-teal">Ο χώρος μας</h2>
          <div className="max-w-xl mb-8">
            <p className="text-gray-700 text-lg">
              Φροντίζουμε ο χώρος μας να σε κάνει να νιώθεις άνετα και ευχάριστα κάθε φορά που έρχεσαι.
            </p>
            <div className="mt-4">
              <Link href="/office" className="btn">
                Μάθε περισσότερα
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[5/3] shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={src}
                alt={`Office ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
