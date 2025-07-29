import styles from "./DietApproach.module.css";

export default function DietApproach() {
  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="title-black">
          Η προσέγγισή μας στη διατροφή
        </h2>
        <div className={styles["advantage-grid"]}>
          <div
            className={`${styles.card} ${styles.large}`}
            style={{backgroundImage: "url('/images/food/14.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Ρεαλισμός</h3>
              <p>
                Με διάρκεια. Σχεδιάζουμε κάτι που θα αντέξει — όχι κάτι που θα σε εξαντλήσει.              </p>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.small}`}
            style={{backgroundImage: "url('/images/food/20.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Ισορροπία</h3>
              <p>
                Οι απολαύσεις χωράνε. Ακόμα και οι "cheat days" έχουν θέση — χωρίς τύψεις.
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.small}`}
            style={{backgroundImage: "url('/images/food/12.jpg')"}}
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
            style={{backgroundImage: "url('/images/food/11.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Σταθερή Υποστήριξη</h3>
              <p>
                Επικοινωνούμε τακτικά — συνήθως κάθε 15 ημέρες — για να εξελίσσεται το πλάνο μαζί σου.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
