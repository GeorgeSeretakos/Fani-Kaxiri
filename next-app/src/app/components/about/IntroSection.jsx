export default function IntroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-justify text-white">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/images/office/18.jpg"
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ποιοι Είμαστε
        </h1>
        <p className="text-lg md:text-xl">
          Στο <strong className="font-great-vibes">Believe in Yourself</strong> πιστεύουμε ότι η διατροφή είναι κάτι
          πολύ περισσότερο από ένα πρόγραμμα με κανόνες. Είναι μια βαθιά προσωπική
          διαδρομή που ξεκινά από την κατανόηση του εαυτού σου, των αναγκών και των
          συναισθημάτων σου, και καταλήγει σε μια ζωή πιο ελαφριά, υγιή και χαρούμενη.
        </p>
      </div>
    </section>
  );
}
