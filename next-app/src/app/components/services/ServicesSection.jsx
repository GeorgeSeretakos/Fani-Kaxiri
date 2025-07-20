import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🍽️",
    title: "Διατροφική Αξιολόγηση & Σχεδιασμός Γευμάτων",
    description:
      "Αναλύουμε τις διατροφικές σας ανάγκες και συνήθειες και σχεδιάζουμε υγιεινές και γευστικές επιλογές που εντάσσονται στη δική σας καθημερινότητα.",
    bgColor: "bg-cyan-500",
  },
  {
    icon: "🧘",
    title: "Συμβουλευτική Ευεξίας",
    description:
      "Με τη βοήθεια εξειδικευμένων εργαλείων και μεθόδων, βρίσκουμε μαζί τη ρίζα του προβλήματος και σας στηρίζουμε ώστε να ξεπεράσετε τα εμπόδια που επηρεάζουν τη διατροφή σας.",
    bgColor: "bg-yellow-500",
  },
  {
    icon: "👔",
    title: "Corporate Wellbeing",
    description:
      "Σχεδιάζουμε και υλοποιούμε προγράμματα wellbeing για το προσωπικό εταιρειών, με onsite συνεδρίες ή webinars, συνεργαζόμενοι και με ομάδες γιατρών, αθλητικών συλλόγων και οργανισμών.",
    bgColor: "bg-teal-500",
  },
  {
    icon: "🎓",
    title: "Εκπαιδεύσεις & Webinars",
    description:
      "Διοργανώνουμε εκπαιδευτικά προγράμματα και σεμινάρια – δια ζώσης και διαδικτυακά – για θέματα διατροφής, ευεξίας και συνολικής υγείας.",
    bgColor: "bg-white text-black",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Οι Υπηρεσίες μας</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
