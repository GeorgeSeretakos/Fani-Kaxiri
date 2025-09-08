export default function NlpSection() {
  return (
    <section className="w-full py-12 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="title-teal">Το NLP μας πάει ένα βήμα παραπέρα — <i>πιο γρήγορα</i></h2>
          <p className="leading-7 mb-4">
            Αυτό που κάνει τη δική μου προσέγγιση διαφορετική είναι η αξιοποίηση του <strong> Νευρογλωσσικού Προγραμματισμού (NLP)</strong>.
          </p>

          <p className="leading-7 mb-4">
            Μέσα από τις συνεδρίες, θα χτίσουμε μια σχέση εμπιστοσύνης και σύνδεσης — και θα βρεις έναν άνθρωπο που ΠΡΑΓΜΑΤΙΚΑ σε καταλαβαίνει.
          </p>

          <p className="leading-7">
            Δεν αντικαθιστώ τον ψυχοθεραπευτή. Δεν διεκδικώ και δεν αγγίζω τέτοια μονοπάτια. Σε αντίθεση με άλλες προσεγγίσεις, με το NLP δουλεύουμε με ό,τι σε απασχολεί <strong>τώρα</strong>. Εστιάζουμε άμεσα στα εμπόδια που δυσκολεύουν τη διατροφή σου, για να τα ξεπεράσεις και να δεις αποτέλεσμα <strong>χωρίς καθυστέρηση</strong>.
          </p>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/general/nlp.png"
            alt="NLP"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
