import Image from "next/image";

export default function AboutOwnerSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Image */}
        <div className="flex-1">
          <Image
            src="/images/tonia/5.jpg"
            alt="Owner"
            width={500}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Τόνια Καπαρελιώτη
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-300 font-semibold mb-4">
            Διαιτολόγος – Διατροφολόγος
          </h3>
          <div className="mb-4">
            <p className="mb-4">
              Η Τόνια Καπαρελιώτη είναι η ιδρύτρια του <span className="font-great-vibes font-bold text-xl">Believe in Yourself</span>, με πολυετή εμπειρία στη διατροφολογία και με το χάρισμα να καταλαβαίνει πραγματικά τον άνθρωπο που έχει απέναντί της. Η επικοινωνία και η σχέση που χτίζει με κάθε πελάτη είναι το δυνατό της χαρτί — γιατί ξέρει ότι <strong>η διατροφή δεν είναι μόνο θέμα θερμίδων, αλλά και συναισθημάτων</strong>.
            </p>
            <p className="mb-4">
              Έχει συνεργαστεί με περισσότερες από 20 εταιρείες σε Ελλάδα, Κύπρο και Βουλγαρία, σχεδιάζοντας προγράμματα για το προσωπικό τους και προσφέροντας υποστήριξη on-site. Παράλληλα, μοιράζεται τις γνώσεις και την εμπειρία της ως ομιλήτρια σε webinars και σεμινάρια, ενώ η παρουσία της σε τηλεοπτικές εκπομπές, podcasts και social media την κάνει προσιτή και σε όσους αναζητούν έμπνευση και πρακτικές συμβουλές από απόσταση.
            </p>
            <p className="mb-4">
              Με τη βοήθεια του NLP (Νευρογλωσσικού Προγραμματισμού), θα καταλάβεις όχι μόνο τι να φας, αλλά και γιατί τρως, ώστε να ξεπεράσεις τα εμπόδια που σε κρατούν πίσω και να φτάσεις στους στόχους σου με τρόπο που ταιριάζει στη δική σου ζωή.
            </p>
            <p>
              ✨ Όταν λυθούν τα ψυχικά βάρη που σας κρατούν πίσω, ανοίγει ο δρόμος για να αγαπήσετε ξανά το σώμα και τη διατροφή σας. Με τη στήριξη και την καθοδήγησή μας, θα χτίσετε μια καθημερινότητα που σας γεμίζει και σας ταιριάζει.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
