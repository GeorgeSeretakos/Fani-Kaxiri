'use client';

import SocialSection from "./home/SocialSection";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-white py-12 border-t border-gray-700">
      {/* Top Section */}
      <div className="py-4">
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
      </div>

      <SocialSection />

      {/* Bottom Section */}
      <section className="map">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white/5 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <strong>Διεύθυνση</strong><br />
                <ul className="list-disc pl-5">
                  <li>Ελαιών 25 και Ρέμβης, Κηφισιά 145 64</li>
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
          </div>

          {/* Map */}
          <div className="flex rounded-lg overflow-hidden shadow-lg h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1567385292055!2d23.79469867585517!3d38.09001529393853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f0fc0ec198d%3A0xb2392dc40dec8949!2zzpXOu86xzrnPjs69IDI1LCDOms63z4bOuc-DzrnOrCAxNDUgNjQ!5e0!3m2!1sel!2sgr!4v1752897940956!5m2!1sel!2sgr"
              className="w-full rounded-lg"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
