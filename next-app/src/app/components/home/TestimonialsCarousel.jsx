'use client';

import testimonials from "@/../public/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  return (
    <section
      className="relative bg-cover bg-center py-12 h-[70vh] flex justify-center items-center"
      style={{ backgroundImage: "url('/images/food/2.jpg')" }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center my-12 px-4">
          <h2 className="text-3xl font-bold text-white">
            Ξεκίνα{" "}
            <span className="text-teal-400 font-handwriting">
              την αλλαγή σήμερα
            </span>
          </h2>
          {/*<h3 className="mt-2 text-lg text-gray-200">Είπαν για εμάς</h3>*/}
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white shadow rounded-xl p-4 text-left h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    {r.avatar ? (
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 ${r.color} text-white flex items-center justify-center rounded-full font-bold`}
                      >
                        {r.initial}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-gray-800">
                        {r.name}
                      </span>
                      <span className="text-xs text-gray-500">{r.years}</span>
                    </div>
                    <div className="ml-auto">
                      <img
                        src="/icons/google.png"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  <div className="text-yellow-400 mt-2 text-lg">
                    {"★".repeat(r.stars)}
                  </div>

                  <p className="text-sm mt-2 text-gray-700">{r.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>
        {`
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.4;
          }
          .swiper-pagination {
            position: relative !important;
            margin-top: 1rem;
            text-align: center;
          }
          .swiper-pagination-bullet-active {
            background: white !important;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
}
