import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar"; // το generic component

const officeImages = [
  "/images/office/4.webp",
  "/images/office/7.webp",
  "/images/office/16.webp",
  "/images/office/17.webp",
  "/images/office/24.webp",
  "/images/office/23.webp",
  "/images/office/25.webp",
  "/images/office/32.webp",
  "/images/office/34.webp",
  "/images/office/38.webp",
];

export default function OfficePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-16">
        <IntroSection
          image="/images/office/13.webp"
          title="Ο Χώρος μας"
          paragraph={
            <>
              <div>
                Στη <strong className="font-great-vibes text-2xl">Believe in Yourself</strong> σε υποδεχόμαστε σε έναν φωτεινό και ζεστό χώρο, στην περιοχή της Κηφισιάς. Το γραφείο μας έχει σχεδιαστεί για να προσφέρει ηρεμία και εμπιστοσύνη από την πρώτη στιγμή, χωρίς πρόβλημα parking!
              </div>

              <div className="mt-6">
                <strong>Εδώ μπορούμε μαζί:</strong>
              </div>

              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Να γνωριστούμε και να συζητήσουμε για τις ανάγκες, τους στόχους και τις προτεραιότητές σου.</li>
                <li>Να χαράξουμε το προσωπικό σου πλάνο και να βρούμε λύσεις που ταιριάζουν στη δική σου καθημερινότητα.</li>
                <li>Να δουλέψουμε πάνω σε νέες συνήθειες και σκέψεις που ενισχύουν την αυτοπεποίθηση και την ισορροπία σου.</li>
              </ul>

              <p className="mt-6">
                <i>Σε περιμένουμε για να κάνουμε μαζί το πρώτο βήμα!</i>
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

      <Footer/>
    </>
  );
}
