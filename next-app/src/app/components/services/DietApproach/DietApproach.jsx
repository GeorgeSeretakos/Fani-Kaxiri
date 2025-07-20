import styles from "./DietApproach.module.css";

export default function DietApproach() {
  return (
    <section className={styles.advantage}>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold text-center mb-6">
          Η Προσέγγισή μας στη Διατροφή
        </h1>
        <div className={styles["advantage-grid"]}>
          {/* Card 1 */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{backgroundImage: "url('/images/food/14.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Ρεαλισμός</h3>
              <p>
                Οι διατροφές βασίζονται στη δική σας πραγματική ζωή και προσαρμόζονται στις συνθήκες και τις ανάγκες
                σας.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{backgroundImage: "url('/images/food/5.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Ισορροπία</h3>
              <p>
                Περιλαμβάνονται ακόμα και cheat days ώστε να μην χρειάζεται να τις αναζητάτε κρυφά.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{backgroundImage: "url('/images/food/12.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Προσαρμογή</h3>
              <p>
                Λαμβάνονται υπόψη το πρόγραμμά σας, οι υποχρεώσεις, τα ταξίδια, η άθληση και γενικά ο τρόπος ζωής σας.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{backgroundImage: "url('/images/food/11.jpg')"}}
          >
            <div className={styles.content}>
              <h3>Σταθερή Υποστήριξη</h3>
              <p>
                Η επικοινωνία γίνεται συνήθως κάθε 15 ημέρες ώστε να υπάρχει σταθερή υποστήριξη και αναπροσαρμογή του
                πλάνου.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
