import ServiceCard from "./ServiceCard";
import Link from "next/link";
import services from "../../../../public/data/services";

export default function ServicesSection({ preview = false }) {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="title-teal">Οι υπηρεσίες μας</h2>
        <div className="max-w-2xl mb-8">
          <p className="text-lg text-gray-700 max-w-3xl">
            Οι υπηρεσίες μας δεν είναι "<i>ένας ακόμα οδηγός διατροφής</i>", αλλά μια προσωπική διαδικασία αλλαγής που αγγίζει
            όχι μόνο το σώμα, αλλά και τον τρόπο που φροντίζεις τον εαυτό σου συνολικά.
          </p>

          {preview && (
            <div className="mt-4">
              <Link href="/services" className="btn">
                Προβολή όλων
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              />
            ))}
          </div>

        </div>
    </section>
);
}
