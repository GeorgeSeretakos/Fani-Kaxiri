import Link from "next/link";
import Image from "next/image";

export default function MediaPreviewSection() {
  const categories = [
    {
      title: "Τηλεόραση",
      description: "Συμμετοχές σε τηλεοπτικές εκπομπές με θέματα διατροφής και ευεξίας.",
      img: "/images/media/tv/1.png",
      link: "/media#tv",
    },
    {
      title: "Podcast",
      description: "Συζητήσεις και συνεντεύξεις σε podcasts με ειδικούς και επαγγελματίες.",
      img: "/images/media/podcast/0.jpg",
      link: "/media#podcast",
    },
    {
      title: "Αρθρογραφία",
      description: "Άρθρα και κείμενα που καλύπτουν θέματα διατροφής, ψυχολογίας και wellbeing.",
      img: "/images/media/articles/0.jpg",
      link: "/media#articles",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Παρουσία στα Media</h2>
        <p className="text-lg text-gray-600 mb-8">
          Μάθετε περισσότερα για τη δράση μας στην τηλεόραση, τα podcasts και την αρθρογραφία.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link
              href={cat.link}
              key={idx}
              className="rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col"
            >
              <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                <p className="text-sm flex-grow">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
