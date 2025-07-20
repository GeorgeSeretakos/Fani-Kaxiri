import Image from "next/image";
import Footer from "../components/Footer";

const officeImages = [
  "/images/office/4.jpg",
  "/images/office/7.jpg",
  "/images/office/10.jpg",
  "/images/office/16.jpg",
  "/images/office/17.jpg",
  "/images/office/24.jpg",
  "/images/office/23.jpg",
  "/images/office/25.jpg",
  "/images/office/27.jpg",
  "/images/office/28.jpg",
  "/images/office/32.jpg",
  "/images/office/34.jpg",
  "/images/office/38.jpg",
];

export default function OfficePage() {
  return (
    <>
      <main className="min-h-screen py-24 px-4 md:px-12">
        <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="">
            <h2 className="text-3xl font-bold mb-4">Ο Χώρος μας</h2>
            <p className="mb-4">
              Στη <strong className="font-great-vibes text-lg">Believe in Yourself</strong> σας υποδεχόμαστε σε έναν
              φωτεινό και ζεστό χώρο, στην καρδιά της
              Κηφισιάς.
              Το γραφείο μας έχει σχεδιαστεί για να προσφέρει ηρεμία και εμπιστοσύνη από την πρώτη στιγμή.
            </p>

            <h3 className="text-xl font-semibold mb-2">Εδώ μπορούμε μαζί:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Να γνωριστούμε και να συζητήσουμε για τις ανάγκες, τους στόχους και τις προτεραιότητές σας.</li>
              <li>Να χαράξουμε το προσωπικό σας πλάνο και να βρούμε λύσεις που ταιριάζουν στη δική σας καθημερινότητα.
              </li>
              <li>Να δουλέψουμε πάνω σε νέες συνήθειες και σκέψεις που ενισχύουν την αυτοπεποίθηση και την ισορροπία
                σας.
              </li>
            </ul>

            <p className="mt-6 font-medium">
              Σας περιμένουμε για να κάνουμε μαζί το πρώτο βήμα σε μια καλύτερη σχέση με τον εαυτό σας!
            </p>
          </div>

          <div className="relative w-full h-full m-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/office/30.jpg"
              alt="Ο χώρος μας"
              fill
              className="object-cover"
            />
          </div>
        </section>


        <div className="grid gap-6 md:grid-cols-1">
          {officeImages.map((src, index) => (
            <div key={index} className="relative w-full m-auto h-[80vh] rounded-lg overflow-hidden shadow-md">
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
