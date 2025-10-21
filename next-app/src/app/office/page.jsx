import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";

const officeImages = [
  "/images/office/4.png",
  "/images/office/5.png",
  "/images/office/6.png",
  "/images/office/8.png",
  "/images/office/9.png",
  "/images/office/10.png",
  "/images/office/11.png",
  "/images/office/12.png",
  "/images/office/13.png",
  "/images/office/14.png",

];

export default function OfficePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-16">
        <IntroSection
          image="/images/office/6.png"
          title="Ο Χώρος μας"
          paragraph={
            <>
              <p>
                Καλώς ήρθες στο γραφείο μας!.
                Έναν χώρο φτιαγμένο με φροντίδα, που αποπνέει ζεστασιά και ηρεμία — ώστε να νιώθεις οικεία και ασφαλής από την πρώτη στιγμή.
              </p>

              <p className="mt-6">
                Το περιβάλλον έχει σχεδιαστεί με γνώμονα την ιδιωτικότητα, την άνεση και τη λειτουργικότητα·
                προσφέρει εύκολη πρόσβαση και διαθέτει άνετο parking.
                Κάθε συνάντηση έχει στόχο να δημιουργεί μια αίσθηση εμπιστοσύνης, ηρεμίας και φροντίδας.
              </p>

              <p className="mt-6">
                Εδώ θα δουλέψουμε μαζί, με σεβασμό στις δικές σου ανάγκες και ρυθμούς,
                σχεδιάζοντας μια πορεία που ταιριάζει στη ζωή σου και σε βοηθά να ανακαλύψεις ξανά την ισορροπία και την αυτοπεποίθησή σου.
              </p>

              <p className="mt-6 italic">
                Σε περιμένω να γνωριστούμε και να κάνουμε μαζί το πρώτο βήμα προς μια πιο ήρεμη, συνειδητή σχέση με τη διατροφή σου.
              </p>
            </>

          }
        />


        <div className="grid gap-6 md:grid-cols-1 px-0 md:px-12 py-12">
          {officeImages.map((src, index) => (
            <div
              key={index}
              className="
                relative w-full m-auto h-[40vh]
                md:h-[80vh]
                overflow-hidden
                shadow-none md:shadow-md
                rounded-none md:rounded-lg
              "
            >
              <img
                src={src}
                alt={`Office photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
