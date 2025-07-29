import IntroSection from "../components/about/IntroSection";
import FirstSession from "../components/services/FirstSession";
import DietApproach from "../components/services/DietApproach/DietApproach";
import NlpSection from "../components/services/NlpSection";
import ServicesSection from "../components/services/ServicesSection";
import OnlineSessions from "../components/services/OnlineSession";
import Footer from "../components/Footer";


export default function ServicesPage() {
  return (
    <main className="w-full">
      <IntroSection
        image="/images/office/25.jpg"
        title="Οι Υπηρεσίες μας"
        paragraph={
          <>
            Στη <strong className="font-great-vibes text-2xl">Believe in Yourself</strong>, οι υπηρεσίες μας δεν περιορίζονται
            σε τυπικά διαιτολόγια, αλλά αγγίζουν βαθύτερα τις συνήθειες και τα συναισθήματα
            που συνδέονται με τη διατροφή μας. Μαζί δημιουργούμε ρεαλιστικά, άμεσα εφαρμόσιμα πλάνα που ταιριάζουν στη δική σου ζωή,
            και αντιμετωπίζουμε τα βάρη που μπλοκάρουν τη ζωή και τη διατροφή σου.
          </>
        }
      />

      <DietApproach />

      <ServicesSection />

      <FirstSession />

      <OnlineSessions />

      <Footer />

    </main>
  );
}
