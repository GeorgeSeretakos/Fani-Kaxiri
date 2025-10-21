import SocialSection from "../components/home/SocialSection";

export default function Footer() {
  return (
    <footer className="text-[#4A2A23]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Επικοινώνησε μαζί μας</h2>
          <p className="text-[#A6653A] font-semibold">
            Κλείσε ραντεβού ή στείλε μας μήνυμα· θα χαρούμε να βοηθήσουμε.
          </p>
        </div>
      </div>

      {/* Row: Contact Info + Form */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <section className="rounded-2xl ring-1 ring-[#E8D8C3]/30 bg-[#4A2A23] text-[#FAF6EF] p-6">
          <h3 className="text-lg font-semibold">Στοιχεία επικοινωνίας</h3>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <div className="font-semibold">Διεύθυνση</div>
              <div className="mt-1 text-[#E8D8C3]">
                Λεωφ. Μαραθώνος 73, Άνοιξη 145 69
              </div>
            </div>

            <div>
              <div className="font-semibold">Τηλέφωνα</div>
              <ul className="mt-1 space-y-1">
                <li>
                  <a href="tel:2106218010" className="hover:underline text-[#E8D8C3]">
                    21 0621 8010
                  </a>
                </li>
                <li>
                  <a href="tel:6949949668" className="hover:underline text-[#E8D8C3]">
                    694 994 9668
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Email</div>
              <ul className="mt-1 space-y-1">
                <li>
                  <a
                    href="mailto:fkaxiridiet@gmail.com"
                    className="hover:underline text-[#E8D8C3]"
                  >
                    fkaxiridiet@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social section aligned left */}
            <div className="pt-4 flex justify-start">
              <SocialSection />
            </div>
          </div>
        </section>

        {/* Quick Form */}
        <section className="rounded-2xl ring-1 ring-[#E8D8C3]/30 bg-[#4A2A23] text-[#FAF6EF] p-6">
          <h3 className="text-lg font-semibold">Γρήγορη φόρμα</h3>
          <p className="mt-1 text-sm text-[#E8D8C3]">
            Συμπλήρωσε τα βασικά και θα σε καλέσουμε.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you"
            className="mt-5 space-y-4"
          >
            <input type="hidden" name="form-name" value="footer-contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Όνομα"
                required
                className="w-full px-3 py-2 rounded-md bg-transparent text-white placeholder-white/70 border-b border-[#E6DDD3]/70 focus:outline-none focus:border-[#FAF6EF]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Επώνυμο"
                required
                className="w-full px-3 py-2 rounded-md bg-transparent text-white placeholder-white/70 border-b border-[#E6DDD3]/70 focus:outline-none focus:border-[#FAF6EF]"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Τηλέφωνο"
                required
                className="w-full px-3 py-2 rounded-md bg-transparent text-white placeholder-white/70 border-b border-[#E6DDD3]/70 focus:outline-none focus:border-[#FAF6EF]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 rounded-md bg-transparent text-white placeholder-white/70 border-b border-[#E6DDD3]/70 focus:outline-none focus:border-[#FAF6EF]"
              />
            </div>

            {/* Row 3 */}
            <textarea
              name="message"
              rows={4}
              placeholder="Μήνυμα"
              className="w-full px-3 py-2 rounded-md bg-transparent text-white placeholder-white/70 border-b border-[#E6DDD3]/70 focus:outline-none focus:border-[#FAF6EF] resize-y"
            />

            {/* Checkboxes + Submit */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2 text-xs text-[#E8D8C3]">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="bookIntent"
                    className="accent-[#A6653A] scale-110"
                  />
                  Επικοινωνώ για να κλείσω ραντεβού
                </label>

                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="acceptPolicy"
                    className="accent-[#A6653A] scale-110"
                    required
                  />
                  Αποδέχομαι την{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#FAF6EF] underline underline-offset-2 hover:no-underline"
                  >
                    Πολιτική Απορρήτου
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="inline-block px-6 py-2 border-b text-white bg-[#4A2A23] hover:cursor-pointer transition font-bold"
              >
                Αποστολή
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Full-width Map */}
      <section className="w-full">
        <iframe
          title="Χάρτης γραφείου"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.210644423368!2d23.854599475857068!3d38.13529469131094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1752d33770e31%3A0x95bf7cf05ad7359c!2zzqbOsc69zq4gzprOsc6-zrfPgc6uIC0gzpTOuc6xzrnPhM6_zrvPjM6zzr_PgiwgzpTOuc6xz4TPgc6_z4bOv867z4zOs86_z4I!5e0!3m2!1sel!2sgr!4v1758316352377!5m2!1sel!2sgr"
          className="w-full h-[360px] md:h-[420px] border-0"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Bottom strip */}
      <div className="border-t border-[#4A2A23]/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center justify-center text-center md:text-left gap-3 text-sm">
            <span className="font-semibold text-[#4A2A23] leading-tight">
              &copy; 2025 Φανή Καξηρή.
              <br className="sm:hidden" />
              <span className="sm:ml-1">Όλα τα δικαιώματα διατηρούνται.</span>
            </span>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center justify-center text-center gap-2 text-sm">
            <a href="/privacy-policy" className="hover:underline font-semibold text-[#4A2A23]">
              Πολιτική Απορρήτου
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
