export default function PhilosophySection() {
  return (
    <section
      className="relative min-h-[100vh] px-4 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/office/32.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Η Φιλοσοφία της{" "}
            <span className="font-great-vibes">
              Believe in yourself
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 w-full">
          {/* Card 1 */}
          <div className="bg-cyan-400 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 rounded-xl z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Συμπεριφορά</h3>
              <p>
                Αναγνωρίζουμε τις συμπεριφορές που μπλοκάρουν την επίτευξη των στόχων σας
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-400 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 rounded-xl z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Εξατομίκευση</h3>
              <p>
                Κάθε πρόγραμμα είναι μοναδικό, προσαρμοσμένο στις πραγματικές συνθήκες της καθημερινότητάς σας
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-teal-800 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 rounded-xl z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Βιωσιμότητα</h3>
              <p>
                Χτίζουμε μαζί συνήθειες οι οποίες διαρκούν στον χρόνο
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
