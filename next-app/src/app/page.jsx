export const metadata = {
  title: "Φανή Καξηρή – Διαιτολόγος Διατροφολόγος",
  description: "Mindful Eating, εξατομικευμένη υποστήριξη και γήινες ισορροπίες.",
};

import HeroSection from "./components/home/HeroSection";
import Advantages from "./components/services/Advantages/Advantages";
import TestimonialsCarousel from "./components/home/TestimonialsCarousel";
import QuoteSection from "./components/home/QuoteSection";
import ServicesPreview from "./components/ServicesPreview";
import OfficePreview from "./components/home/OfficePreviewSection";
import serviceSteps from "../../public/data/serviceSteps";
import AboutTextOnly from "./components/AboutTextOnly";

export default function Page() {
  return (
    <main className="bg-[#FAF6EF] text-[#2B1C18]">
      <HeroSection />

      <AboutTextOnly
        title="Η Διατροφολόγος"
        description={[
          "Είμαι η Φανή Καξηρή, Διαιτολόγος – Διατροφολόγος (BSc) με πιστοποίηση Master Practitioner στις Διατροφικές Διαταραχές &amp; Παχυσαρκία (NCFED/ΚΕΑΔΔ). Εργάζομαι με την προσέγγιση της Ενσυνείδητης Διατροφής (Mindful Eating), ώστε να καλλιεργήσεις μια υγιή, ήρεμη και ρεαλιστική σχέση με το φαγητό — με πλάνα που προσαρμόζονται στη ζωή σου, όχι το αντίστροφο."
        ]}
        ctaText="Γνώρισε τη Φανή & τον χώρο"
        ctaLink="/about"
      />

      <Advantages />

      <ServicesPreview
        title="Υπηρεσίες"
        intro="Επίλεξε τον τρόπο που σου ταιριάζει· εμείς προσαρμόζουμε το πλάνο σε σένα."
        steps={serviceSteps}
        sectionCtaText="Δες όλες τις υπηρεσίες"
        sectionCtaHref="/services"
      />;

      <QuoteSection />

      <OfficePreview
        title="Ο χώρος"
        intro="Ζεστός, φωτεινός και γήινος — για να νιώθεις άνετα από το πρώτο λεπτό."
        images={[
          { src: "/images/office/8.png", alt: "Χώρος αναμονής με φυσικό φως και φυτά" },
          { src: "/images/office/5.png", alt: "Γραφείο συμβουλευτικής με ξύλινη επιφάνεια" },
          { src: "/images/office/11.png", alt: "Χώρος λιπομέτρησης με τον εξοπλισμό" },
        ]}
        bullets={[
          "Εύκολη πρόσβαση & άνετος χώρος αναμονής",
          "Διακριτικότητα και ηρεμία κατά τη συνεδρία",
          "Σύγχρονος εξοπλισμός για λιπομέτρηση",
        ]}
      />;


      <TestimonialsCarousel />
    </main>
  );
}