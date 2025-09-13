import HeroSection from "./components/home/HeroSection";
import PhilosophySection from "./components/home/PhilosophySection";
import TestimonialsCarousel from "@/app/components/home/TestimonialsCarousel";
import OfficePreviewSection from "@/app/components/home/OfficePreviewSection";
import QuoteSection from "@/app/components/home/QuoteSection";
import StatsSection from "@/app/components/home/StatsSection";
import CompaniesCarousel from "@/app/components/home/CompaniesCarousel";
import Footer from "@/app/components/Footer";
import ServicesSection from "@/app/components/services/ServicesSection";
import BlogPreviewSection from "@/app/components/home/BlogPreviewSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import services from "../../public/data/services";

export default function Home() {
  return (
      <main className="mt-16">
          <Navbar />
          <HeroSection />
          <PhilosophySection />
          <AboutSection
              title="Η διατροφή σου δεν είναι το πρόβλημα — Είναι το σύμπτωμα"
              image="/images/tonia/5.webp"
              reverse={false}
              fullWidthTitle={false}
              description={[
                  `Δεν πιστεύω στις "στερητικές δίαιτες". Πιστεύω στη <strong>φροντίδα</strong>. Με πολυετή εμπειρία στη διατροφολογία, ξεκινώντας πρώτα από διαιτώμενη και συνεχίζοντας ως Διατροφολόγος, ονειρεύτηκα να βοηθώ ανθρώπους να σταματήσουν να ζουν με ενοχές γύρω από το φαγητό και να αποκτήσουν ξανά <strong>ισορροπία</strong> και <strong>σύνδεση</strong> με τον εαυτό τους.`,
                  `Η διατροφική διαχείριση καθοδηγείται από τα συναισθήματα, τις επαναλαμβανόμενες συμπεριφορές, τα εσωτερικά και εξωτερικά εμπόδια. Γι' αυτό προτεραιότητά μου είναι πρώτα να <strong>σε ακούσω και να σε καταλάβω ουσιαστικά</strong>, ώστε να μπορώ να σε στηρίξω με τρόπο που πραγματικά σου ταιριάζει.`,
                  `Με τη βοήθεια εργαλείων που μου δίνουν οι σπουδές μου πάνω στον Νευρογλωσσικό Προγραμματισμό (NLP), οι αλλαγές δεν αργούν να φανούν. Όταν βρούμε μαζί το γιατί και όχι το πρέπει, τότε πίστεψέ με <strong>απελευθερώνεσαι πραγματικά</strong>. Και αυτό δεν αλλάζει μόνο τη διατροφή σου — αλλάζει τη <strong>ζωή σου!</strong>`,
              ]}
              ctaText="Μάθε περισσότερα για εμένα"
              ctaLink="/about-us"
          />

          <ServicesSection
              title="Οι υπηρεσίες μας"
              paragraphs={[
                  `Οι υπηρεσίες μας δεν είναι "ένας ακόμα οδηγός διατροφής", αλλά μια <strong>προσωπική διαδικασία αλλαγής</strong> που αγγίζει όχι μόνο το σώμα, αλλά και τον τρόπο που <strong>φροντίζεις τον εαυτό σου</strong> συνολικά.`
              ]}
              services={services}
              ctaText="Προβολή όλων"
              ctaHref="/services"
          />

          <AboutSection
              title="Φεύγοντας, πάρε κάτι μαζί σου!"
              image="/images/general/laptop.webp"
              reverse={true}
              fullWidthTitle={false}
              description={[
                  `Η σχέση μας δεν τελειώνει στο γραφείο. Με την <strong>προσωπική ηλεκτρονική πλατφόρμα</strong> που δημιουργήσαμε, κάθε πελάτης μας έχει τον δικό του λογαριασμό και πρόσβαση σε όλα τα αρχεία του – <strong>διατροφές</strong>, <strong>μετρήσεις</strong> και <strong>φωτογραφίες προόδου</strong>. Έτσι, οποιαδήποτε στιγμή χρειαστεί να ανατρέξεις στα δικά σου και μόνο δικά σου αρχεία, έχεις πρόσβαση στον φάκελό σου από όπου κι αν βρίσκεσαι!`,
                  `Η πλατφόρμα μας σου παρέχει:`
              ]}
              ticks={[
                  "Πρόσβαση στα διατροφικά σου πλάνα, τις μετρήσεις σου & τις φωτογραφίες σου",
                  "Προσωπικός λογαριασμός για κάθε μεμονωμένο πελάτη μας με σεβασμό στα προσωπικά δεδομένα",
                  "Συνεχής παρακολούθηση της προόδου σου",
                  "Εύκολη πρόσβαση από παντού και για πολύ καιρό μετά το τέλος της συνεργασίας μας"
              ]}
              ctaText="Συνδέσου στην πλατφόρμα"
              ctaLink="/login"
          />


          <QuoteSection />
          <OfficePreviewSection />
          <TestimonialsCarousel />
          <StatsSection />
          <BlogPreviewSection />
          <CompaniesCarousel />
          <Footer />
      </main>
  );
}
