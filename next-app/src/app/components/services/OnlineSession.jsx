import Image from "next/image";

export default function OnlineSessions() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Online Συνεδρίες</h2>

        <p className="mb-4">
          Η σύγχρονη τεχνολογία μας επιτρέπει να συνεργαστούμε από όπου κι αν βρίσκεστε — στο σπίτι, στο γραφείο ή ακόμα και στο εξωτερικό — με την ίδια άνεση και αποτελεσματικότητα.
        </p>

        <p className="mb-4">
          Τα ραντεβού πραγματοποιούνται μέσω <strong>Skype</strong>, <strong>Viber</strong>, <strong>Messenger</strong> ή άλλης πλατφόρμας της επιλογής σας, με εύκολη σύνδεση και χωρίς πολύπλοκες διαδικασίες.
        </p>

        <p className="mb-4">
          Η εμπειρία είναι εξίσου προσωπική και υποστηρικτική με τη δια ζώσης συνεδρία, χωρίς να επηρεάζεται από την απόσταση ή τον τόπο διαμονής σας.
        </p>

        <p className="mt-6 font-medium">
          Μαζί μπορούμε να ξεπεράσουμε κάθε εμπόδιο — όπου κι αν βρίσκεστε!
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-full m-auto rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/online-meetings/1.jpg"
          alt="Online Συνεδρίες"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}