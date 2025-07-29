import Image from "next/image";
import Footer from "../components/Footer";
import IntroSection from "../components/about/IntroSection"; // το generic component

const officeImages = [
  "/images/office/4.jpg",
  "/images/office/7.jpg",
  "/images/office/16.jpg",
  "/images/office/17.jpg",
  "/images/office/24.jpg",
  "/images/office/23.jpg",
  "/images/office/25.jpg",
  "/images/office/32.jpg",
  "/images/office/34.jpg",
  "/images/office/38.jpg",
];

export default function OfficePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* IntroSection */}
        <IntroSection
          image="/images/office/13.jpg"
          title="Ο Χώρος μας"
          paragraph={
            <>
              <div>
                Στη <strong className="font-great-vibes text-2xl">Believe in Yourself</strong> σε υποδεχόμαστε σε έναν
                φωτεινό και ζεστό χώρο, στην καρδιά της Κηφισιάς. Το γραφείο μας έχει σχεδιαστεί για να προσφέρει ηρεμία και εμπιστοσύνη από την πρώτη στιγμή.
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
                <i>Σε περιμένουμε για να κάνουμε μαζί το πρώτο βήμα σε μια καλύτερη σχέση με τον εαυτό σου!</i>
              </p>
            </>
          }
        />



        {/* Φωτογραφίες */}
        <div className="grid gap-6 md:grid-cols-1 px-4 py-12 md:px-12">
          {officeImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full m-auto h-[80vh] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Office photo ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
