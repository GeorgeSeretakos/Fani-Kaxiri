import styles from "./Advantages.module.css";

export default function Advantages() {
  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="text-center title-black">
          Η προσέγγισή μας στη διατροφή
        </h2>


        <div className={styles["advantage-grid"]}>
          <div
            className={`${styles.card} ${styles.large}`}
            style={{backgroundImage: "url('/images/food/17.webp')"}}
          >
            <div className={styles.content}>
              <h3>Ρεαλισμός</h3>
              <p>
                Με διάρκεια, χωρίς να περιμένω να έχει αρχή και τέλος. Σχεδιάζουμε κάτι που θα αντέξει — όχι κάτι που θα σε εξαντλήσει.
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.small}`}
            style={{backgroundImage: "url('/images/food/1.webp')"}}
          >
            <div className={styles.content}>
              <h3>Ισορροπία</h3>
              <p>
                Οι απολαύσεις χωράνε! Σημαντικό: να μάθω και πως να το απολαμβάνω χωρίς τύψεις              </p>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.small}`}
            style={{backgroundImage: "url('/images/food/18.webp')"}}
          >
            <div className={styles.content}>
              <h3>Προσαρμογή</h3>
              <p>
                Κάθε πλάνο προσαρμόζεται στις ανάγκες σου: ωράριο, ρυθμός ζωής, δραστηριότητες, ταξίδια.
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.large}`}
            style={{backgroundImage: "url('/images/food/11.webp')"}}
          >
            <div className={styles.content}>
              <h3>Σταθερή Υποστήριξη</h3>
              <p>
                Επικοινωνούμε όποτε νιώθεις ότι το χρειάζεσαι και πέραν των ραντεβού. Με ενδιαφέρει πώς περνάς, αν σου ταίριαξε το πλάνο, δεν περιμένω να έχω νέα σου στο επόμενο ραντεβού.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
