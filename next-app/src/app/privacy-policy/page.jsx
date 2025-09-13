"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Πολιτική Απορρήτου &amp; Όροι Χρήσης</h1>
          <p className="text-sm text-gray-600">Τελευταία ενημέρωση: 12 Σεπτεμβρίου 2025</p>
        </header>

        {/* In-page navigation */}
        <nav className="mb-10">
          <p className="font-semibold mb-2">Περιεχόμενα</p>
          <ul className="list-disc list-inside space-y-1">
            <li><a className="text-teal-700 hover:underline" href="#privacy">Πολιτική Απορρήτου &amp; Cookies</a></li>
            <li><a className="text-teal-700 hover:underline" href="#terms">Όροι &amp; Προϋποθέσεις Χρήσης</a></li>
            <li><a className="text-teal-700 hover:underline" href="#datamap">Παράρτημα: Data Map</a></li>
          </ul>
        </nav>

        {/* PRIVACY POLICY */}
        <article id="privacy" className="space-y-8">
          <h2 className="text-2xl font-bold">Πολιτική Απορρήτου &amp; Cookies</h2>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Εισαγωγή</h3>
            <p>
              Η παρούσα Πολιτική περιγράφει πώς η <strong>Τόνια Καπαρελιώτη</strong> («εμείς», «η Εταιρεία») επεξεργάζεται τα προσωπικά δεδομένα των επισκεπτών και χρηστών της ιστοσελίδας και εφαρμογής<strong> tonia-kaparelioti.gr</strong> (εφεξής «Ιστότοπος» και «Εφαρμογή»). Δεσμευόμαστε στην προστασία της ιδιωτικότητας σύμφωνα με τον <strong>GDPR (2016/679)</strong> και την ελληνική νομοθεσία.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Υπεύθυνος Επεξεργασίας &amp; Επικοινωνία</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Υπεύθυνος Επεξεργασίας:</strong> Τόνια Καπαρελιώτη</li>
              <li>
                <strong>Email για θέματα απορρήτου (αιτήματα GDPR):</strong>{" "}
                <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                  t.believeinyourself@gmail.com
                </a>
              </li>
              <li><strong>Διεύθυνση έδρας/γραφείου:</strong> Ελαιών 25 και Ρέμβης, Κηφισιά 145 64</li>
              <li><strong>Φόρμα επικοινωνίας:</strong> διαθέσιμη στον Ιστότοπο</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Περιγραφή υπηρεσιών &amp; προέλευση δεδομένων</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Χάρτης:</strong> Ενσωματωμένος (iframe) <em>Google Maps</em>. Ενδέχεται να τοποθετούνται cookies/να
                συλλέγονται τεχνικά στοιχεία από την Google (βλ. ενότητα Cookies).
              </li>
              <li>
                <strong>Φόρμα Επικοινωνίας (Netlify Forms):</strong> Συλλογή <em>Ονόματος</em> (υποχρεωτικό), <em>Επωνύμου</em> (υποχρεωτικό),
                <em> Τηλεφώνου</em> (υποχρεωτικό), <em>Μηνύματος</em> (προαιρετικό) και επιλογής «επικοινωνώ για να κλείσω ραντεβού»
                (προαιρετικό). <strong>Η αποδοχή της Πολιτικής Απορρήτου είναι υποχρεωτική</strong> για υποβολή.
              </li>
              <li>
                <strong>Εφαρμογή με αυθεντικοποίηση:</strong> Λογαριασμοί χρηστών δημιουργούνται αρχικά από Διαχειριστή και
                αποθηκεύονται στοιχεία για παροχή υπηρεσίας (βλ. §4).
              </li>
              <li>
                <strong>Αποθήκευση δεδομένων:</strong> Τα <strong>αρχεία/έγγραφα</strong> (Δίαιτες, Μετρήσεις, Φωτογραφίες προόδου)
                φιλοξενούνται αποκλειστικά για <strong>file storage</strong> σε <strong>Backblaze B2</strong> (S3-compatible) σε
                <strong> ιδιωτικό (private) bucket</strong> εντός <strong>ΕΕ</strong>. Η <strong>βάση δεδομένων</strong> (προσωπικά στοιχεία,
                ρυθμίσεις λογαριασμού κ.λπ.) φιλοξενείται στο <strong>Supabase</strong> (managed PostgreSQL) σε <strong>AWS eu-central-1</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Κατηγορίες δεδομένων που επεξεργαζόμαστε</h3>
            <p className="mb-2"><strong>A. Στοιχεία λογαριασμού (clients/admins):</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Όνομα, Επώνυμο, Email, Τηλέφωνο</li>
              <li>Κωδικός πρόσβασης (αποθηκεύεται <strong>κρυπτογραφημένος</strong>)</li>
              <li>Ημερομηνία &amp; ώρα τελευταίας τροποποίησης</li>
            </ul>

            <p className="mb-2"><strong>Β. Περιεχόμενο φακέλου πελάτη (ειδικές κατηγορίες):</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Δίαιτες, Μετρήσεις, Φωτογραφίες προόδου — <strong>δεδομένα υγείας</strong> κατά GDPR άρθ. 9</li>
            </ul>

            <p className="mb-2"><strong>Γ. Δεδομένα επικοινωνίας μέσω φόρμας (Netlify):</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Όνομα, Επώνυμο, Τηλέφωνο, Μήνυμα, επιλογή ραντεβού</li>
              <li>Ενδεχομένως IP/τεχνικά μεταδεδομένα από την πλατφόρμα υποδοχής</li>
            </ul>

            <p className="mb-2"><strong>Δ. Τεχνικά/λειτουργικά δεδομένα:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>IP διεύθυνση, User-Agent (π.χ. πρόγραμμα περιήγησης/έκδοση/λειτουργικό), log αρχεία (ημερομηνία/ώρα, endpoint, status), τεχνικά IDs συνεδρίας, JWT tokens, προσωρινοί υπογεγραμμένοι σύνδεσμοι πρόσβασης (signed URLs).</li>
            </ul>

            <p className="mb-2"><strong>Ε. Πολιτική εικόνων/εικονιδίων:</strong></p>
            <p>Μέρος του υλικού είναι ιδιοκτησία μας. Άλλο υλικό έχει ληφθεί από <em>Pexels</em>, <em>Unsplash</em>, <em>Flaticon</em>, <em>Freepik</em> με δωρεάν άδειες που συχνά απαιτούν απόδοση. Οι αποδόσεις παρατίθενται μόνο στη σελίδα αυτή (βλ. §13).</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Σκοποί &amp; Νομικές Βάσεις (GDPR art. 6 &amp; 9)</h3>
            <div className="overflow-x-auto border rounded-md">
              <table className="min-w-full text-sm">
                <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 font-semibold">Ενέργεια</th>
                  <th className="p-3 font-semibold">Δεδομένα</th>
                  <th className="p-3 font-semibold">Σκοπός</th>
                  <th className="p-3 font-semibold">Νομική Βάση</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t">
                  <td className="p-3">Διαχείριση λογαριασμού (create/login)</td>
                  <td className="p-3">Ονοματεπώνυμο, email, τηλέφωνο, hash κωδικού</td>
                  <td className="p-3">Παροχή πρόσβασης στην Εφαρμογή</td>
                  <td className="p-3"><strong>Σύμβαση</strong> (άρθ. 6(1)(β))</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Τήρηση/προβολή φακέλου</td>
                  <td className="p-3">Δίαιτες, Μετρήσεις, Φωτογραφίες</td>
                  <td className="p-3">Παροχή διατροφικών υπηρεσιών</td>
                  <td className="p-3"><strong>Ρητή συγκατάθεση</strong> για ευαίσθητα (άρθ. 9(2)(α)) + Σύμβαση (6(1)(β))</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Επικοινωνία αιτημάτων</td>
                  <td className="p-3">Στοιχεία φόρμας</td>
                  <td className="p-3">Απάντηση σε αίτημα / ραντεβού</td>
                  <td className="p-3">Σύμβαση/προ-συμβατικά (6(1)(β)) ή Συγκατάθεση</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Ειδοποιήσεις υπηρεσίας</td>
                  <td className="p-3">Email/τηλέφωνο</td>
                  <td className="p-3">Ενημέρωση για νέα αρχεία/ενημερώσεις</td>
                  <td className="p-3"><strong>Σύμβαση</strong> (λειτουργικές ενημερώσεις)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Ασφάλεια &amp; logs</td>
                  <td className="p-3">IP διεύθυνση</td>
                  <td className="p-3">User-Agent</td>
                  <td className="p-3">Τεχνικά δεδομένα</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Google Maps</td>
                  <td className="p-3">Cookies/τεχνικά τρίτου</td>
                  <td className="p-3">Προβολή τοποθεσίας</td>
                  <td className="p-3"><strong>Συγκατάθεση cookies</strong> (όπου απαιτείται)</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              Δεν αποστέλλουμε προωθητικές επικοινωνίες (marketing) χωρίς προηγούμενη συγκατάθεση. Οι ενημερώσεις για ανεβάσματα/αλλαγές φακέλων είναι λειτουργικές.
            </p>
          </section>

          {/* NEW: Explicit special-category consent embedded in policy */}
          <section>
            <h3 className="text-xl font-semibold mb-2">6. Ρητή συγκατάθεση για ειδικές κατηγορίες (δεδομένα υγείας)</h3>
            <p className="mb-2">
              Με τη δημιουργία/χρήση λογαριασμού και την αποδοχή των παρόντων Όρων/Πολιτικής κατά τη σύνδεση, ο χρήστης δηλώνει ρητά ότι <strong>παρέχει ελεύθερη, συγκεκριμένη, ενημερωμένη και σαφή συγκατάθεση </strong>για την επεξεργασία των δεδομένων υγείας του (ενδεικτικά: διαιτολόγια, μετρήσεις, φωτογραφίες προόδου) αποκλειστικά για σκοπούς παροχής των υπηρεσιών. Η συγκατάθεση μπορεί να <strong>ανακληθεί οποτεδήποτε </strong>χωρίς αναδρομική ισχύ, με αίτημα στο{" "}
              <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                t.believeinyourself@gmail.com
              </a>.
            </p>
            <p className="text-sm text-gray-700">
              Η αποδοχή των Όρων & της Πολιτικής Απορρήτου αποτελεί προϋπόθεση για τη σύνδεση. Η αποδοχή χρησιμοποιείται μόνο για την ολοκλήρωση της σύνδεσης και δεν αποθηκεύεται μόνιμα πέραν τυχόν τεχνικών αρχείων καταγραφής ασφαλείας. Η μη αποδοχή συνεπάγεται αδυναμία χρήσης της Εφαρμογής.
            </p>
          </section>

          {/* NEW: Consent mechanism at login (no second checkbox required, but clear statement) */}
          <section>
            <h3 className="text-xl font-semibold mb-2">7. Μηχανισμός συγκατάθεσης κατά τη σύνδεση</h3>
            <p>
              Κατά κάθε σύνδεση εμφανίζεται σαφής δήλωση/checkbox αποδοχής των Όρων & της Πολιτικής Απορρήτου, η οποία περιλαμβάνει ρητή αναφορά στην επεξεργασία δεδομένων υγείας όπως ανωτέρω. Χωρίς την αποδοχή, η σύνδεση δεν ολοκληρώνεται. Η αποδοχή δεν αποθηκεύεται μόνιμα πέραν τυχόν τεχνικών logs ασφαλείας.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Ρόλοι &amp; Πρόσβαση</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>CLIENT:</strong> Πρόσβαση αποκλειστικά στα δικά του στοιχεία/αρχεία. Δεν ανεβάζει/επεξεργάζεται περιεχόμενο· το κάνει ο Διαχειριστής κατ’ εντολή του.
              </li>
              <li>
                <strong>ADMIN</strong> (π.χ. Τόνια Καπαρελιώτη, Μαρία Κοκορέ, Διαχειριστής συστήματος): Πρόσβαση σε δεδομένα όλων των πελατών, αποκλειστικά για σκοπούς παροχής υπηρεσίας/υποστήριξης/ασφάλειας. Διέπεται από αρχή ελαχιστοποίησης και ρήτρες εμπιστευτικότητας.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">9. Αποθήκευση &amp; Τοποθεσίες</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Βάση δεδομένων:</strong> Supabase (managed PostgreSQL) σε <strong>AWS eu-central-1</strong>.</li>
              <li><strong>Αρχεία/έγγραφα:</strong> Backblaze B2 (S3-compatible) σε <strong>ιδιωτικό (private) bucket</strong> εντός <strong>ΕΕ</strong> (μόνο file storage).</li>
              <li>Όλη η δικτυακή επικοινωνία πραγματοποιείται μέσω <strong>TLS</strong>. Τα δεδομένα αποθηκεύονται κρυπτογραφημένα at-rest βάσει πρακτικών των παρόχων.</li>
              <li>Πρόσβαση μέσω backend/προσωρινών signed URLs και ελέγχων δικαιωμάτων (least-privilege, logging).</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              Για λόγους ασφάλειας, <strong>δεν δημοσιεύουμε λεπτομέρειες βάσης (π.χ. ακριβή σχήματα πινάκων) ή API endpoints</strong>. Παρέχουμε μόνο τις αναγκαίες πληροφορίες διαφάνειας/συμμόρφωσης.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">10. Αυθεντικοποίηση με JWT &amp; Logout</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Χρήση <strong>JSON Web Tokens (JWT)</strong> για ταυτοποίηση/εξουσιοδότηση.</li>
              <li>Πρακτική: <strong>access token</strong> σε <strong>HttpOnly, Secure, SameSite=Strict</strong> cookie. Το JWT φέρει exp και το cookie ορίζεται με ίδιο Max-Age (επί του παρόντος 4 ώρες), ώστε η λήξη να είναι ταυτόχρονη. Δεν χρησιμοποιούμε μηχανισμό refresh token.</li>
              <li>Σε κάθε αίτημα επαληθεύεται υπογραφή JWT και δικαιώματα (ρόλοι/claims).</li>
              <li><strong>Logout:</strong> διαγραφή/ακύρωση session cookie (και τυχόν refresh token στον server/blacklist). Οι signed URLs λήγουν με τη διάρκειά τους.</li>
              <li>Πρόσθετα μέτρα: rate limiting, αυστηρό token expiry, επανέκδοση σε αλλαγή κωδικού/ρόλου, ανίχνευση ασυνήθιστης δραστηριότητας.</li>
            </ul>
          </section>

          {/* NEW: Breach notification */}
          <section>
            <h3 className="text-xl font-semibold mb-2">11. Γνωστοποίηση περιστατικών παραβίασης</h3>
            <p>
              Σε περίπτωση περιστατικού παραβίασης προσωπικών δεδομένων που ενδέχεται να επιφέρει κίνδυνο για τα δικαιώματα/ελευθερίες φυσικών προσώπων, διενεργούμε αξιολόγηση και, όπου απαιτείται, <strong>γνωστοποιούμε στην ΑΠΔΠΧ εντός 72 ωρών</strong> από τη διαπίστωση (άρθ. 33 GDPR) και <strong>ενημερώνουμε</strong> χωρίς αδικαιολόγητη καθυστέρηση τα υποκείμενα (άρθ. 34 GDPR). Τηρούμε αρχεία περιστατικών και διορθωτικών ενεργειών.
            </p>
          </section>

          {/* NEW: DPAs & Transfers emphasis */}
          <section>
            <h3 className="text-xl font-semibold mb-2">12. Εκτελούντες την επεξεργασία &amp; διεθνείς διαβιβάσεις</h3>
            <p className="mb-2">
              Συνάπτουμε <strong>Συμφωνίες Επεξεργασίας Δεδομένων (DPAs)</strong> με όλους τους εκτελούντες που χρησιμοποιούμε (ενδεικτικά: Supabase για DB σε AWS eu-central-1, Backblaze B2 για file storage σε ΕΕ, Netlify για φόρμες/hosting). Όπου απαιτούνται διαβιβάσεις εκτός ΕΟΧ, εφαρμόζονται <strong>Τυποποιημένες Συμβατικές Ρήτρες (SCCs)</strong> και κατάλληλα τεχνικά/οργανωτικά μέτρα.
            </p>
            <p className="text-sm text-gray-700">
              Η βάση βρίσκεται σε AWS <strong>eu-central-1</strong>, ενώ τα αρχεία σε Backblaze B2 εντός <strong>ΕΕ</strong>. Η ενσωμάτωση Google Maps ενεργοποιείται μόνο κατόπιν συγκατάθεσης.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">13. Cookies &amp; παρόμοιες τεχνολογίες</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Απολύτως απαραίτητα:</strong> cookie συνεδρίας για αυθεντικοποίηση (JWT σε HttpOnly, Secure, SameSite=Strict cookie). Διάρκεια: 4 ώρες (ευθυγραμμισμένη με το exp του JWT). Δεν χρησιμοποιείται για marketing/προφίλ.</li>
              <li><strong>Λειτουργικότητας/Προτιμήσεων:</strong> π.χ. απομνημόνευση ρυθμίσεων.</li>
              <li><strong>Τρίτων (Google Maps):</strong> ενδέχεται να τοποθετούνται cookies για προβολή/χρήση χάρτη. Η ενσωμάτωση ενεργοποιείται μόνο μετά από συγκατάθεση.</li>
            </ul>
            <p>
              Χρησιμοποιούμε επίσης προσωρινό sessionStorage για την εμφάνιση μηνυμάτων σύνδεσης/λήξης συνεδρίας· το περιεχόμενό του διαγράφεται αμέσως μετά την εμφάνιση του μηνύματος ή τη λήξη της συνεδρίας.
            </p>
            <p>
              Η καταγραφή IP και User-Agent γίνεται στα server logs αποκλειστικά για λόγους ασφάλειας/αποσφαλμάτωσης, δεν χρησιμοποιείται για marketing/προφίλ και διατηρείται για περιορισμένο διάστημα.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">14. Πνευματικά δικαιώματα – Αποδόσεις</h3>
            <p>Ιδιοκτησία μας: κείμενα, λογότυπα, μέρος φωτογραφιών/εικονιδίων.</p>
            <p className="mt-2">Υλικό τρίτων (με άδειες/αποδόσεις):</p>
            <ul className="list-disc list-inside">
              <li>Pexels — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
              <li>Unsplash — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
              <li>Flaticon — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
              <li>Freepik — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">15. Ασφάλεια</h3>
            <p>
              Εφαρμόζουμε τεχνικά (κρυπτογράφηση, TLS, hashing κωδικών, least-privilege access, role-based controls, logging) και οργανωτικά μέτρα (πολιτικές, εμπιστευτικότητα διαχειριστών, εκπαίδευση). Για λόγους ασφάλειας,<strong> δεν δημοσιεύουμε πλήρη τεχνικά σχήματα βάσης ή API endpoints</strong>. Καμία μέθοδος δεν εγγυάται απόλυτη ασφάλεια· καταβάλουμε κάθε εύλογη προσπάθεια ελαχιστοποίησης κινδύνου.
            </p>
            <p>
              Τα αρχεία καταγραφής (logs) είναι προσβάσιμα μόνο από εξουσιοδοτημένο προσωπικό, περιέχουν ελάχιστα αναγκαία στοιχεία (π.χ. IP, User-Agent) και τηρούνται για περιορισμένο χρόνο σύμφωνα με την αρχή ελαχιστοποίησης.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">16. Δικαιώματα υποκειμένων</h3>
            <p>
              Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, φορητότητας, εναντίωσης και ανάκλησης συγκατάθεσης (όπου εφαρμόζεται) χωρίς αναδρομική ισχύ. Αιτήματα στο{" "}
              <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                t.believeinyourself@gmail.com
              </a>. Απαντούμε εντός ενός μήνα (με δυνατότητα παράτασης όπου επιτρέπεται).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">17. Ανηλίκοι</h3>
            <p>Η υπηρεσία δεν απευθύνεται σε άτομα κάτω των 16 ετών. Αν διαπιστωθεί συλλογή δεδομένων χωρίς κατάλληλη γονική συναίνεση, τα διαγράφουμε άμεσα.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">18. Αλλαγές στην Πολιτική</h3>
            <p>Ενδέχεται να ενημερώνουμε την Πολιτική. Η ημερομηνία «Τελευταία ενημέρωση» αναθεωρείται και, όπου απαιτείται, ζητούμε εκ νέου συγκατάθεση.</p>
          </section>
        </article>

        {/* TERMS */}
        <article id="terms" className="space-y-8 mt-14">
          <h2 className="text-2xl font-bold">Όροι &amp; Προϋποθέσεις Χρήσης</h2>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Αποδοχή Όρων &amp; Δήλωση Συγκατάθεσης</h3>
            <p>
              Με την πρόσβαση/χρήση του Ιστότοπου/Εφαρμογής συμφωνείς να δεσμεύεσαι από τους παρόντες Όρους και την Πολιτική Απορρήτου. Κατά τη σύνδεση εμφανίζεται δήλωση αποδοχής που περιλαμβάνει ρητή αναφορά στην επεξεργασία δεδομένων υγείας· με την επιλογή «Αποδέχομαι» <strong>δηλώνεις ρητή συγκατάθεση</strong> για την επεξεργασία αυτών, αποκλειστικά για σκοπούς παροχής υπηρεσιών. Η συγκατάθεση μπορεί να ανακληθεί οποτεδήποτε χωρίς αναδρομική ισχύ.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Περιγραφή Υπηρεσίας</h3>
            <p>
              Παρέχουμε διαδικτυακή πλατφόρμα υποστήριξης/οργάνωσης διατροφικών υπηρεσιών. Οι χρήστες <strong>CLIENT</strong> βλέπουν τον προσωπικό τους φάκελο (Δίαιτες/Μετρήσεις/Φωτογραφίες). <strong>Μόνο Admins</strong> ανεβάζουν/τροποποιούν περιεχόμενο κατ’ εντολή πελάτη.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Λογαριασμοί &amp; Ασφάλεια</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ο λογαριασμός δημιουργείται από Διαχειριστή, με email ως μοναδικό αναγνωριστικό.</li>
              <li>Στην πρώτη είσοδο ορίζεις προσωπικό κωδικό (αποθήκευση <strong>κρυπτογραφημένη</strong>).</li>
              <li>Αν ξεχάσεις κωδικό, ενημερώνεις Διαχειριστή για επαναφορά (διαγραφή παλιού hash και ρύθμιση νέου).</li>
              <li>Είσαι υπεύθυνος για τη μυστικότητα των διαπιστευτηρίων και την άμεση ειδοποίηση για μη εξουσιοδοτημένη χρήση.</li>
            </ul>
          </section>

          {/* NEW: Storage acceptance wording */}
          <section>
            <h3 className="text-xl font-semibold mb-2">4. Τοποθεσίες &amp; Αποθήκευση δεδομένων</h3>
            <p>
              Με τη χρήση της υπηρεσίας αποδέχεσαι ότι τα δεδομένα σου αποθηκεύονται/επεξεργάζονται από τους παρόχους που αναφέρονται στην Πολιτική Απορρήτου, συγκεκριμένα: <strong>Supabase</strong> (βάση δεδομένων σε AWS <strong>eu-central-1</strong>) και <strong>Backblaze B2</strong> (file storage σε <strong>ιδιωτικό bucket εντός ΕΕ</strong>), καθώς και <strong>Netlify</strong> για φόρμες/hosting. Όπου απαιτείται, εφαρμόζονται DPAs/SCCs και τεχνικά/οργανωτικά μέτρα ασφάλειας.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Αποδεκτή Χρήση</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Απαγορεύεται μη εξουσιοδοτημένη πρόσβαση/παράκαμψη ελέγχων, σάρωση ευπαθειών, κακόβουλη χρήση.</li>
              <li>Απαγορεύεται αντιγραφή/αναδιανομή περιεχομένου τρίτων χωρίς άδεια.</li>
              <li>Απαγορεύεται χρήση για παράνομες/βλαπτικές ενέργειες ή DoS.</li>
              <li>Απαγορεύεται προσπάθεια εξαγωγής/αποκρυπτογράφησης κώδικα/λογικής ασφαλείας.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Περιεχόμενο &amp; Δικαιώματα</h3>
            <p>
              Ο φάκελος πελάτη παρέχεται για προσωπική χρήση. Δεν επιτρέπεται δημοσίευση/διαμοιρασμός χωρίς άδεια. Πνευματικά δικαιώματα για κείμενα/λογότυπα/μέρος πολυμέσων ανήκουν σε εμάς. Υλικό τρίτων χρησιμοποιείται με τις σχετικές άδειες/αποδόσεις (βλ. Πολιτική §14).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Υπηρεσίες τρίτων</h3>
            <p>Η χρήση Google Maps, Netlify, Supabase και Backblaze B2 διέπεται επιπλέον από τους όρους/πολιτικές των αντίστοιχων παρόχων.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Ιατρική αποποίηση ευθύνης</h3>
            <p>Οι παρεχόμενες πληροφορίες/υλικό δεν αποτελούν ιατρική διάγνωση ή θεραπεία και δεν υποκαθιστούν ιατρική γνωμάτευση. Συμβουλεύσου τον θεράποντα ιατρό πριν από ουσιώδεις αλλαγές, ειδικά αν υφίσταται ιατρικό ιστορικό.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">9. Διαθεσιμότητα υπηρεσίας</h3>
            <p>Καταβάλλουμε εύλογες προσπάθειες για απρόσκοπτη λειτουργία, χωρίς εγγύηση αδιάλειπτης διαθεσιμότητας. Διατηρούμε δικαίωμα τροποποίησης/αναστολής λειτουργιών για συντήρηση/ασφάλεια.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">10. Περιορισμός ευθύνης</h3>
            <p>Στο μέγιστο επιτρεπτό από τον νόμο βαθμό, δεν ευθυνόμαστε για έμμεσες, παρεπόμενες ή αποθετικές ζημίες από χρήση/αδυναμία χρήσης. Τίποτε δεν περιορίζει ευθύνη που δεν μπορεί να περιοριστεί από τον νόμο.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">11. Αποζημίωση</h3>
            <p>Συμφωνείς να αποζημιώσεις την Εταιρεία για αξιώσεις/ζημίες/δαπάνες (συμπερ. εύλογων νομικών αμοιβών) από παραβίαση των Όρων ή κατάχρηση της υπηρεσίας.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">12. Τερματισμός</h3>
            <p>Διατηρούμε δικαίωμα άμεσης αναστολής/διακοπής πρόσβασης για παραβίαση Όρων, κινδύνους ασφάλειας ή κατά νόμο απαίτηση. Μπορείς να ζητήσεις διαγραφή λογαριασμού ανά πάσα στιγμή.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">13. Τροποποιήσεις Όρων</h3>
            <p>Μπορούμε να ενημερώνουμε τους Όρους. Η συνέχιση χρήσης μετά την ανάρτηση νέας έκδοσης συνιστά αποδοχή αυτής.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">14. Εφαρμοστέο δίκαιο &amp; δικαιοδοσία</h3>
            <p>Οι Όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια τα Δικαστήρια Αθηνών, εκτός αν ορίζεται διαφορετικά από αναγκαστικό δίκαιο.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">15. Επικοινωνία</h3>
            <p>
              Για ερωτήσεις επί των Όρων ή θεμάτων απορρήτου:{" "}
              <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                t.believeinyourself@gmail.com
              </a>.
            </p>
          </section>
        </article>

        {/* DATA MAP */}
        <article id="datamap" className="space-y-6 mt-14">
          <h2 className="text-2xl font-bold">Παράρτημα: Πίνακας Αντιστοίχισης Δεδομένων (Data Map)</h2>
          <div className="overflow-x-auto border rounded-md">
            <table className="min-w-full text-sm">
              <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 font-semibold">Κατηγορία</th>
                <th className="p-3 font-semibold">Παράδειγμα περιεχομένου</th>
                <th className="p-3 font-semibold">Σκοπός</th>
                <th className="p-3 font-semibold">Διατήρηση</th>
                <th className="p-3 font-semibold">Παραλήπτες</th>
              </tr>
              </thead>
              <tbody>
              <tr className="border-t">
                <td className="p-3">Λογαριασμός</td>
                <td className="p-3">Ονοματεπώνυμο, email, τηλέφωνο, κρυπτογραφημένος κωδικός</td>
                <td className="p-3">Ταυτοποίηση &amp; πρόσβαση</td>
                <td className="p-3">Διάρκεια σχέσης + έως 5 έτη</td>
                <td className="p-3">Supabase (DB hosting), Εσωτερικά (Admins), IT support</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Φάκελος πελάτη</td>
                <td className="p-3">Δίαιτες, Μετρήσεις, Φωτογραφίες προόδου</td>
                <td className="p-3">Παροχή υπηρεσίας</td>
                <td className="p-3">Διάρκεια σχέσης + έως 5 έτη</td>
                <td className="p-3">Backblaze B2 (file storage – ΕΕ), Εσωτερικά</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Φόρμα</td>
                <td className="p-3">Ονοματεπώνυμο, τηλέφωνο, μήνυμα, IP/μεταδεδομένα</td>
                <td className="p-3">Απάντηση αιτήματος/ραντεβού</td>
                <td className="p-3">Έως 12 μήνες</td>
                <td className="p-3">Netlify (processor), Εσωτερικά</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Τεχνικά</td>
                <td className="p-3">IP/User-Agent, JWT/cookies, logs, signed URLs</td>
                <td className="p-3">Ασφάλεια/λειτουργία</td>
                <td className="p-3">Έως 12 μήνες</td>
                <td className="p-3">Εσωτερικά, πάροχοι hosting/ασφάλειας</td>
              </tr>
              </tbody>
            </table>
          </div>

          {/* Security best practice note */}
          <section className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Σημείωση ασφαλείας</h3>
            <p className="text-sm text-gray-700">
              Για την προστασία του συστήματος και των υποκειμένων, δεν δημοσιεύονται <strong>ακριβή τεχνικά σχήματα βάσης</strong>(ονόματα πινάκων/πεδίων) ή <strong>ρητά API endpoints</strong>. Οι παρούσες πληροφορίες επαρκούν για διαφάνεια, συμμόρφωση και άσκηση δικαιωμάτων χωρίς να θίγεται η ασφάλεια.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
