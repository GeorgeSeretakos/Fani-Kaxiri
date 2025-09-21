import IntroSection from "../components/IntroSection";
import ServicesPreview from "../components/ServicesPreview";
import serviceSteps from "../../../public/data/serviceSteps";
import AboutSection from "../components/AboutSection";
import SplitColumnsWithImage from "../components/SplitColumnsWithImage";
import VisitFrequencyNotice from "../components/home/VisitFrequencyNotice";
import servicesCases from "../../../public/data/serviceCases";
import FeatureGrid from "../components/FeatureGrid";

export default function ServicesPage() {
  return (
    <main>
      <IntroSection
        image="/images/general/7.jpg"
        title="Υπηρεσίες"
        paragraph={
          <>
            <p>
              Επίλεξε τον τρόπο που σου ταιριάζει· εγώ προσαρμόζω το πλάνο στη
              δική σου καθημερινότητα.
            </p>
            <p className="mt-3">
              Με ήρεμη, μη-τιμωρητική προσέγγιση και εργαλεία ενσυνειδητότητας,
              σχεδιάζουμε βήμα–βήμα ρεαλιστικές αλλαγές. Είτε ζεις κοντά είτε
              μακριά, μπορείς να δουλέψεις μαζί μου δια ζώσης ή online, με
              σταθερή ανατροφοδότηση και καθοδήγηση.
            </p>
          </>
        }
      />

      <ServicesPreview
        title="Υπηρεσίες"
        intro="Επίλεξε τον τρόπο που σου ταιριάζει· εμείς προσαρμόζουμε το πλάνο σε σένα."
        steps={serviceSteps}
      />

      <SplitColumnsWithImage
        leftTitle="Πρώτο ραντεβού"
        leftBullets={[
          "Πλήρες ιατρικό & διατροφικό ιστορικό",
          "Λιπομέτρηση (εφόσον δεν υπάρχει αντένδειξη)",
          "Συζήτηση στόχων & αρχικές οδηγίες",
        ]}
        rightTitle="Επαναληπτικές συνεδρίες"
        rightBullets={[
          "Συζήτηση για την πορεία από την προηγούμενη συνεδρία",
          "Επανάληψη λιπομέτρησης",
          "Καταγραφή διατροφής: μέσω λογισμικού ή χειρόγραφου ημερολογίου",
        ]}
        imageSrc="/images/general/12.jpg"
        imageAlt="Συνεδρία στον χώρο της Φανής Καξηρή"
      />


      <AboutSection
        title="Νευρική Ανορεξία"
        image="/images/disorders/3.jpg"
        fullWidthTitle={false}
        reverse={false}
        description={[
          "Υποστηρικτική, σταδιακή προσέγγιση με στόχο την ασφάλεια και την επανασύνδεση με τις ανάγκες του σώματος. Δημιουργούμε σταθερό ρυθμό γευμάτων και δουλεύουμε στην ποικιλία χωρίς φόβο ή ενοχές."
        ]}
        ticks={[
          "Καθοδήγηση για δημιουργία πλάνου γευμάτων & επιλογή κατάλληλων τροφών",
          "Κατανόηση διατροφικών αναγκών & αύξηση της ποικιλίας",
          "Εστίαση στον ρόλο της διατροφής στην υγεία πέρα από το βάρος",
        ]}
      />

      <AboutSection
        title="Νευρική Βουλιμία"
        image="/images/disorders/4.jpg"
        fullWidthTitle={false}
        reverse={true}
        description={[
          "Δουλεύουμε τη σταθεροποίηση των γευμάτων, τη διαχείριση υπερφαγικών επεισοδίων και την απενοχοποίηση τροφών, με πρακτικές τεχνικές και ξεκάθαρη εκπαίδευση."
        ]}
        ticks={[
          "Διαμόρφωση ισορροπημένου διατροφικού πλάνου",
          "Έλεγχος πρόσληψης & στήριξη στη διατροφική συμπεριφορά",
          "Αποκατάσταση υγιούς βάρους",
          "Εκπαίδευση: ρύθμιση βάρους, ενεργειακό ισοζύγιο, επιπτώσεις ασιτίας",
          "Αποδόμηση διαστρεβλωμένων πεποιθήσεων & απενοχοποίηση «απαγορευμένων» τροφών",
        ]}
      />

      <AboutSection
        title="Αδηφαγική Διαταραχή"
        image="/images/disorders/6.jpg"
        fullWidthTitle={false}
        reverse={false}
        description={[
          "Χτίζουμε ρυθμό γευμάτων και εργαλεία αυτοπαρατήρησης, ώστε να μειωθούν τα επεισόδια υπερφαγίας. Στόχος: περισσότερη ηρεμία και επαφή με το σώμα, χωρίς τιμωρητικές λογικές."
        ]}
        ticks={[
          "Σταθερός ρυθμός γευμάτων & ήπιος δομημένος οδηγός",
          "Αναγνώριση triggers & διαχείριση συναισθηματικής πείνας",
          "Mindful Eating & απενοχοποίηση τροφών",
          "Πρακτικές, ρεαλιστικές επιλογές για την καθημερινότητα",
        ]}
      />

      <FeatureGrid
        title="Σε τι μπορώ να σε βοηθήσω"
        items={servicesCases}
      />

      <AboutSection
        title="Yoga & Mindful Eating Retreat"
        image="/images/yoga/1.jpg"
        fullWidthTitle={false}
        reverse={false}
        description={[
          "Ένα βιωματικό Σαββατοκύριακο όπου <strong>γιόγκα</strong>, <strong>αναπνοή</strong> και <strong>Mindful Eating</strong> συναντιούνται. Αποσυνδέεσαι, ακούς τις ανάγκες του σώματός σου και μαθαίνεις πρακτικές για να τρέφεσαι με παρουσία και φροντίδα — χωρίς ενοχές ή «κανόνες».",
          "Κατάλληλο για <em>όλα τα επίπεδα</em>, σε μικρές ομάδες και γήινο, ήρεμο περιβάλλον — ιδανικό για reset σώματος και νου."
        ]}
        ticks={[
          "Μικρές ομάδες",
          "Όλα τα επίπεδα",
          "Πρακτικές Mindful Eating"
        ]}
        ctaText="Δες ημερομηνίες στο Facebook"
        ctaLink="https://www.facebook.com/events/710109801862006/?__cft__[0]=AZVM0GzgZdX5jT7TSOVcQg-dsL3MvJQKXD_9E-DwveEvvnKVDCrmVsvGxsabw8u57aYjzBmjtJtbMk4okiuSEvb-dwyi-e-7kaf0__XdcmCyjfoSqSxzt2GLCM4ISExhfP0qBnxZR2pJhCAi5InHwFN_Mzrg0cyeKKaxJHkU8VXtQpKwEld4qlSjXZBa-wMZbI0&__tn__=-UK-R"
      />


    </main>
  );
}
