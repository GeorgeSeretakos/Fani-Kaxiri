export default function PhilosophySection() {
  return (
    <section className="relative py-24 px-4 bg-cover bg-center flex items-center justify-center">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">

        {/* Title */}
        <div className="text-center md:text-left md:w-1/4">
          <h2>
            <span className="font-bold">
              Η Φιλοσοφία της <br />
            </span>
            <span className="font-great-vibes text-4xl sm:text-5xl">
              Believe in yourself
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 flex-1">
          {/* Card 1 */}
          <div className="bg-cyan-500 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="mb-2">Συμπεριφορά</h3>
              <p>
                Αναγνωρίζουμε και δουλεύουμε μαζί τις διατροφικές και
                συναισθηματικές συμπεριφορές που σε κρατούν μακριά από τους στόχους σου.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="mb-2">Εξατομίκευση</h3>
              <p>
                Δημιουργούμε διατροφικά πλάνα που ταιριάζουν απόλυτα στις
                ανάγκες, τις προτιμήσεις και τη ρουτίνα της ζωής σου.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-teal-800 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="mb-2">Βιωσιμότητα</h3>
              <p>
                Χτίζουμε υγιεινές συνήθειες που διαρκούν στον χρόνο — όχι δίαιτες, αλλά μια
                ισορροπημένη σχέση με το φαγητό.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
