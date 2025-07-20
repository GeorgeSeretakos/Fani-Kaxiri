export default function IntroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-justify text-white">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/images/office/25.jpg"
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Η Τόνια Καπαρελιώτη</h2>
        <p className="text-lg md:text-xl leading-7">
          Οι υπηρεσίες μας δεν περιορίζονται σε τυπικά διαιτολόγια, αλλά αγγίζουν βαθύτερα τις συνήθειες και τα συναισθήματα
          που συνδέονται με τη διατροφή μας. Μαζί δημιουργούμε ρεαλιστικά, άμεσα εφαρμόσιμα πλάνα που ταιριάζουν στη δική σας ζωή,
          και αντιμετωπίζουμε τα βάρη που μπλοκάρουν τη ζωή και τη διατροφή σας.
        </p>
      </div>
    </section>
  );
}
