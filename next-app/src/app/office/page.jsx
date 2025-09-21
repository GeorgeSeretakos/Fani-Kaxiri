import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";

const officeImages = [
  "/images/office/2.jpg",
  "/images/office/2.webp",
  "/images/office/3.jpg",
  "/images/office/4.jpg",
  "/images/office/5.jpg",
  "/images/office/6.jpg",
];

export default function OfficePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-16">
        <IntroSection
          image="/images/office/6.jpg"
          title="Ο Χώρος μας"
          paragraph={
            <>
              <p>
                Καλώς ήρθες στο γραφείο της <strong>Φανής Καξηρή</strong>.
                Δημιουργήσαμε έναν χώρο που αποπνέει ζεστασιά και ηρεμία, για να μπορείς να αισθάνεσαι άνετα από την πρώτη στιγμή.
              </p>

              <p className="mt-6">
                Το περιβάλλον έχει σχεδιαστεί ώστε να προσφέρει ιδιωτικότητα,
                ασφάλεια και πρακτικότητα, με εύκολη πρόσβαση και άνετο parking.
                Θέλω κάθε συνάντηση να αποτελεί μια εμπειρία που ενισχύει την αίσθηση εμπιστοσύνης και φροντίδας.
              </p>

              <p className="mt-6">
                Εδώ θα δουλέψουμε μαζί, με σεβασμό στις δικές σου ανάγκες,
                για να σχεδιάσουμε μια πορεία που θα ταιριάζει στον τρόπο ζωής σου και θα σε βοηθήσει να πετύχεις ισορροπία και αυτοπεποίθηση.
              </p>

              <p className="mt-6 italic">
                Σε περιμένω για να γνωριστούμε και να ξεκινήσουμε αυτό το ταξίδι με τον καλύτερο τρόπο!
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
