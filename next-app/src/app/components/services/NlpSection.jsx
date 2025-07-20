import Image from "next/image";

export default function NlpSection() {
  return (
    <section className="w-full bg-[#e0f7fa] py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Text */}
        <div>
          <h2 className="text-3xl text-black font-bold mb-4">Η Διαφορά μας: NLP στην Πράξη</h2>
          <p className="text-lg text-gray-700 leading-7 mb-4">
            Αυτό που ξεχωρίζει την Τόνια Καπαρελιώτη από έναν συνηθισμένο διατροφολόγο είναι η χρήση του
            <strong> NLP (Νευρογλωσσικός Προγραμματισμός)</strong>. Η συνεδρία αποκτά έναν υποστηρικτικό
            χαρακτήρα και εσείς αισθάνεστε ότι ο διατροφολόγος σας καταλαβαίνει πραγματικά. Άλλωστε, δεν
            τρώμε πάντα επειδή πεινάμε — τρώμε συχνά επηρεασμένοι από τα συναισθήματά μας.
          </p>

          <p className="text-lg text-gray-700 leading-7">
            Η ψυχολογία μπορεί να ανατρέξει στο παρελθόν, όμως το NLP εστιάζει στο τώρα. Δουλεύει άμεσα
            πάνω στο πρόβλημα που αντιμετωπίζετε σήμερα, ανεξάρτητα από το πού προέρχεται. Έτσι, μπορείτε
            να ξεπεράσετε γρήγορα τα εμπόδια που μπλοκάρουν τη διατροφή σας και να δείτε άμεσα
            αποτελέσματα.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/general/nlp.png"
            alt="NLP"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
