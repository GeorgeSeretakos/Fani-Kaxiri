export default function FirstSession() {
  return (
    <section className="relative py-12 px-4 text-white flex items-center h-[50vh]">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/images/food/2.webp"
          alt="Η Πρώτη Συνάντηση"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Η Πρώτη Συνάντηση</h2>
        <p className="text-lg leading-7">
          Η πρώτη επαφή αφιερώνεται στο να γνωρίσουμε τη ζωή, τις συνήθειες και τα ενδιαφέροντά σου. Δηλαδή εσένα! Συλλέγουμε το ιατρικό ιστορικό σου και εντοπίζουμε τις προσωπικές σου ανάγκες. Στη συνέχεια, πραγματοποιούμε ζύγισμα ώστε να σχεδιάσουμε μαζί ένα πλάνο διατροφής που ανταποκρίνεται στις προτιμήσεις και τους στόχους σου.
        </p>
      </div>
    </section>
  );
}
