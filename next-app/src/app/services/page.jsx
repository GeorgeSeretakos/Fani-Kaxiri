import IntroSection from "../components/IntroSection";
import ServicesPreview from "../components/ServicesPreview";
import serviceSteps from "../../../public/data/serviceSteps";
import AboutSection from "../components/AboutSection";
import SplitColumnsWithImage from "../components/SplitColumnsWithImage";
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
              Επίλεξε τον τρόπο που σου ταιριάζει· εγώ προσαρμόζω το πλάνο στη δική σου καθημερινότητα.
            </p>
            <p className="mt-3">
              Με μια ήρεμη, χωρίς ενοχές προσέγγιση, και μέσα από πρακτικά εργαλεία ενσυνειδητότητας, χτίζουμε μαζί βήμα–βήμα μικρές αλλά ουσιαστικές αλλαγές που ταιριάζουν στη δική σου καθημερινότητα.
            </p>
            <p className="mt-3">
              Είτε βρίσκεσαι κοντά είτε μακριά, μπορούμε να συνεργαστούμε δια ζώσης ή online, με συνεχή ανατροφοδότηση και καθοδήγηση.
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
        bulletIcon="/icons/bullet.png"
        imageSrc="/images/general/18.jpg"
        imageAlt="Συνεδρία στον χώρο της Φανής Καξηρή"
      />

      <FeatureGrid
        title="Σε τι μπορώ να σε βοηθήσω"
        items={servicesCases}
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


    </main>
  );
}
