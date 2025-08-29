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
      <main>
          <Navbar />
          <HeroSection />
          <PhilosophySection />
          <AboutSection
              title="Η διατροφή σου δεν είναι το πρόβλημα — Είναι το σύμπτωμα"
              image="/images/tonia/5.jpg"
              reverse={false}
              fullWidthTitle={false}
              description={[
                  `Δεν πιστεύω στις "δίαιτες". Πιστεύω στη <strong>φροντίδα</strong>. Με πολυετή εμπειρία στη διατροφολογία, έχω βοηθήσει πολλούς ανθρώπους να σταματήσουν να ζουν με ενοχές γύρω από το φαγητό και να αποκτήσουν ξανά <strong>ισορροπία</strong> και <strong>σύνδεση</strong> με τον εαυτό τους.`,
                  `Η διατροφή δεν είναι απλώς θέμα θερμίδων — είναι και θέμα συναισθημάτων, συμπεριφορών και εσωτερικών εμποδίων. Γι' αυτό προτεραιότητά μου είναι να <strong>σε ακούσω και να σε καταλάβω ουσιαστικά</strong>, ώστε να μπορώ να σε στηρίξω με τρόπο που πραγματικά σου ταιριάζει.`,
                  `Με τη βοήθεια εργαλείων όπως ο Νευρογλωσσικός Προγραμματισμός (NLP), οι αλλαγές δεν αργούν να φανούν. Όταν καταλάβεις όχι μόνο τι να φας, αλλά και γιατί τρως, τότε <strong>απελευθερώνεσαι πραγματικά</strong>. Και αυτό δεν αλλάζει μόνο τη διατροφή σου — αλλάζει τη <strong>ζωή σου συνολικά</strong>.`,
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
                  `Η διατροφή δεν τελειώνει στο γραφείο. Με την <strong>προσωπική ηλεκτρονική πλατφόρμα</strong> που δημιουργήσαμε, κάθε πελάτης μας έχει τον δικό του λογαριασμό και πρόσβαση σε όλα τα αρχεία του – <strong>διατροφές</strong>, <strong>μετρήσεις</strong> και <strong>φωτογραφίες προόδου</strong>. Έτσι, κάθε φορά που φεύγεις από το ραντεβού, «παίρνεις» μαζί σου κάτι χειροπιαστό, που μπορείς να δεις και να αξιοποιήσεις ανά πάσα στιγμή.`,
                  `Η πλατφόρμα δεν είναι απλώς αποθήκευση αρχείων. Είναι ένα <strong>εργαλείο παρακολούθησης και εξέλιξης</strong>, που σου δείχνει καθαρά την πρόοδό σου, σε κρατά οργανωμένο και σου δίνει συνεχή υποστήριξη. Με αυτόν τον τρόπο, η συνεργασία μας γίνεται πιο ουσιαστική, πιο διαδραστική και προσαρμοσμένη στους ρυθμούς σου.`
              ]}
              ticks={[
                  "Πρόσβαση σε διατροφές, μετρήσεις & φωτογραφίες",
                  "Προσωπικός λογαριασμός για κάθε πελάτη",
                  "Συνεχής παρακολούθηση της προόδου"
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
