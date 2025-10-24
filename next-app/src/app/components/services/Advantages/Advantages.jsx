import styles from "./Advantages.module.css";

export default function Advantages() {
  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="text-center title-teal">Η προσέγγισή μου στη διατροφή</h2>

        <div className={styles["advantage-grid"]}>
          {/* Large */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/general/3.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Εξατομίκευση</h3>
              <p>
                Το πλάνο χτίζεται πάνω στις προτιμήσεις και την καθημερινότητά σου, χωρίς καμία έτοιμη δίαιτα
              </p>
            </div>
          </div>

          {/* Small */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/general/13.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Προσαρμοστικότητα</h3>
              <p>
                On-the-go αλλαγές και ρεαλιστικές λύσεις για να ‘δουλεύει’ στη ζωή σου
              </p>
            </div>
          </div>

          {/* Small */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/general/5.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Ψυχολογική ματιά</h3>
              <p>
                Κατανόηση της σχέσης συναισθήματος–διατροφής, χωρίς ενοχές και απαγορεύσεις
              </p>
            </div>
          </div>

          {/* Large */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/general/12.jpg')" }}
          >
            <div className={styles.content}>
              <h3>Συνεχής υποστήριξη</h3>
              <p>
                Ανατροφοδότηση σε κάθε συνεδρία και καθοδήγηση μεταξύ των ραντεβού
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
