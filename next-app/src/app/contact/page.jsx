import SocialSection from "../components/home/SocialSection";

export default function Contact() {
  return (
    <main className="flex flex-col">

      {/* Contact Section */}
      <section
        className="relative text-white py-16 px-4 h-[100vh] mt-[4%] flex items-center"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/office/32.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Επικοινωνήστε Μαζί μας
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="mb-4">
                <strong>Διεύθυνση</strong><br />
                <ul className="list-disc pl-5">
                  <li>
                    Ελαιών 25 και Ρέμβης, Κηφισιά 145 64
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Τηλέφωνα</strong><br />
                <ul className="list-disc pl-5">
                  <li>213 0478 022</li>
                  <li>6932762720</li>
                  <li>6972774734</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Email</strong><br />
                <ul className="list-disc pl-5">
                  <li>
                    <a href="mailto:t.believeinyourself@gmail.com" className="text-teal-400 hover:underline">
                      t.believeinyourself@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:maria.believeinyourself@gmail.com" className="text-teal-400 hover:underline">
                      maria.believeinyourself@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <strong>Ώρες Λειτουργίας</strong><br />
                <ul className="list-disc pl-5">
                  <li>Δευτέρα & Τετάρτη: 09:00 - 19:00</li>
                  <li>Τρίτη, Πέμπτη, Παρασκευή: 09:00 - 20:00</li>
                  <li>Σάββατο: Κλειστά</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="mb-4 text-sm">
                Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο.
              </p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Όνομα"
                    required
                    className="flex-1 p-2 rounded bg-black/30 border border-gray-700 text-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Επώνυμο"
                    required
                    className="flex-1 p-2 rounded bg-black/30 border border-gray-700 text-white"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Τηλέφωνο"
                  required
                  className="w-full p-2 rounded bg-black/30 border border-gray-700 text-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Μήνυμα"
                  required
                  className="w-full p-2 rounded bg-black/30 border border-gray-700 text-white"
                />

                {/* Λόγος επικοινωνίας */}
                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="appointment"
                    id="appointment"
                    className="accent-teal-500 scale-125"
                  />
                  <label htmlFor="appointment" className="text-xs">
                    Επικοινωνώ για να κλείσω ραντεβού
                  </label>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      required
                      className="accent-teal-500 scale-125"
                    />
                    Αποδέχομαι την{" "}
                    <a href="/privacy-policy" className="text-teal-400 hover:underline">
                      Πολιτική Απορρήτου
                    </a>
                  </label>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
                  >
                    Αποστολή
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


      </section>

      {/* Map Section */}
      <section className="map bg-gradient-to-b from-black to-zinc-900 py-12">
        <footer className="py-4">
          <div className="max-w-6xl mx-auto text-center flex flex-col gap-2">
            <p className="text-sm">
              &copy; 2025 Believe in Yourself. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <a href="mailto:t.believeinyourself@gmail.com" className="hover:underline">
                t.believeinyourself@gmail.com
              </a>
              <span>·</span>
              <a href="tel:2102289929" className="hover:underline">
                2130478022
              </a>
              <span>·</span>
              <a href="/privacy-policy" className="hover:underline">
                Πολιτική Απορρήτου
              </a>
            </div>
          </div>
        </footer>

        <SocialSection/>


        <div className="mx-auto w-1/2 md:w-2/3 sm:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1567385292055!2d23.79469867585517!3d38.09001529393853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f0fc0ec198d%3A0xb2392dc40dec8949!2zzpXOu86xzrnPjs69IDI1LCDOms63z4bOuc-DzrnOrCAxNDUgNjQ!5e0!3m2!1sel!2sgr!4v1752897940956!5m2!1sel!2sgr"
            className="rounded-lg w-full"
            height="450"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
