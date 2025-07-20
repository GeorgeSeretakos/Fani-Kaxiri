import Image from "next/image";

export default function OfficePreviewSection() {
  const previewImages = [
    "/images/office/20.jpg",
    "/images/office/17.jpg",
    "/images/office/21.jpg",
    "/images/office/4.jpg",
    "/images/office/10.jpg",
    "/images/office/38.jpg"
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/*<h2 className="text-4xl font-bold mb-6">Ο Χώρος μας</h2>*/}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/3] shadow-lg rounded-xl overflow-hidden bg-white"
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

        {/*<Link*/}
        {/*  href="/office"*/}
        {/*  className="inline-block mt-4 bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition"*/}
        {/*>*/}
        {/*  Δείτε Περισσότερα*/}
        {/*</Link>*/}
      </div>
    </section>
  );
}
