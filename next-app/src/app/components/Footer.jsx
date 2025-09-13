import SocialSection from "../components/home/SocialSection";

export default function Contact() {
  return (
    <main className="flex flex-col">
      {/* Contact Section */}
      <section className="relative text-white py-12 px-4 min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/office/32.webp')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            Επικοινώνησε Μαζί μας
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/5 p-6 rounded-lg text-sm sm:text-base">
              <div className="mb-4">
                <strong>Διεύθυνση</strong>
                <ul className="list-disc pl-5">
                  <li>Ελαιών 25 και Ρέμβης, Κηφισιά 145 64</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Τηλέφωνα</strong>
                <ul className="list-disc pl-5">
                  <li>213 0478 022</li>
                  <li>6932762720</li>
                  <li>6972774734</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Email</strong>
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
              {/*<div>*/}
              {/*  <strong>Ώρες Λειτουργίας</strong>*/}
              {/*  <ul className="list-disc pl-5">*/}
              {/*    <li>Δευτέρα - Παρασκευή: 09:00 – 21:00</li>*/}
              {/*    <li>Σάββατο: 10:00 - 15.00</li>*/}
              {/*    <li>Κυριακή: Κλειστά</li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-6 rounded-lg text-sm sm:text-base">
              <p className="mb-4 font-bold">Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact"/>
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field"/>
                  </label>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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
                  className="w-full p-2 rounded bg-black/30 border border-gray-700 text-white"
                />

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
                  <label className="flex items-center gap-2 text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      required
                      className="accent-blue-500 scale-110"
                    />
                    Αποδέχομαι την{" "}
                    <a
                      href="/privacy-policy"
                      className="text-teal-400 hover:underline"
                    >
                      Πολιτική Απορρήτου
                    </a>
                  </label>
                  <button type="submit" className="btn">
                    Αποστολή
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start gap-6 px-4">
          {/* Logo always on top */}
          <div className="w-full flex justify-center">
            <img
              src="/icons/logo.png"
              alt="Believe in Yourself Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>


          {/* Text + Social */}
          <div className="content flex font-bold flex-col items-center gap-3 w-full">
            <p>&copy; 2025 Believe in Yourself. All rights reserved.</p>

            <div className="flex flex-wrap justify-center gap-2">
              <a href="mailto:t.believeinyourself@gmail.com" className="hover:underline">
                t.believeinyourself@gmail.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="tel:2102289929" className="hover:underline">
                2130478022
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="/privacy-policy" className="hover:underline">
                Πολιτική Απορρήτου
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-2">
              <SocialSection/>
            </div>
          </div>
        </div>
      </footer>


      {/* Map Section */}
      <section className="w-full">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1567385292055!2d23.79469867585517!3d38.09001529393853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f0fc0ec198d%3A0xb2392dc40dec8949!2zzpXOu86xzrnPjs69IDI1LCDOms63z4bOuc-DzrnOrCAxNDUgNjQ!5e0!3m2!1sel!2sgr!4v1752897940956!5m2!1sel!2sgr"
            className="rounded-none md:rounded-lg w-full"
            height="400"
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
