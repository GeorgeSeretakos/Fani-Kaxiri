"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";

const logos = [
  "/images/companies/allianz.jpg",
  "/images/companies/bristol.png",
  "/images/companies/cenergy.jpg",
  "/images/companies/delta.png",
  "/images/companies/enercon.jpg",
  "/images/companies/ergonomia.jpg",
  "/images/companies/EY.jpg",
  "/images/companies/goldair.png",
  "/images/companies/janssen.jpg",
  "/images/companies/johnson&johnson.png",
  "/images/companies/kenvue.png",
  "/images/companies/legrand.png",
  "/images/companies/logicom.png",
  "/images/companies/marks&spencer.jpg",
  "/images/companies/papastratos.png",
  "/images/companies/pressious.jpg",
  "/images/companies/sabo.png",
  "/images/companies/up-hellas.jpg",
  "/images/companies/veluda.jpg",
  "/images/companies/wellbeing.png",
];

export default function CompaniesCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 5, spacing: 15 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 10 } },
      "(max-width: 640px)": { slides: { perView: 2, spacing: 5 } },
    },
    mode: "free-snap",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="title-black">Εταιρείες που μας εμπιστεύθηκαν</h2>
      <p className="text-lg text-gray-700 mb-8">
        Στο πέρασμα των χρόνων, πάνω από 30 εταιρείες μας εμπιστεύθηκαν για την ευεξία του προσωπικού τους.
      </p>

      <div ref={sliderRef} className="keen-slider px-4">
        {logos.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            {/* Logo box: consistent height & centered */}
            <div className="w-40 h-24 flex items-center justify-center">
              <img
                src={src}
                alt={`Company logo ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
