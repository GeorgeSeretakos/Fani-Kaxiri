'use client';

import Link from "next/link";
import testimonials from "../../../../public/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const reviewUrl = "https://share.google/PwkEt4rsWRqU4TMQr";

  return (
    <div className="relative bg-gradient-to-b from-[#E8D8C3] to-[#FAF6EF] px-4 flex justify-center items-center py-12 sm:py-16 md:py-20">
      {/* Content */}
      <div className="z-10 w-full">
        {/* Section Title + CTA */}
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-left text-3xl md:text-4xl font-semibold text-[#4A2A23]">
              Τι λένε για εμάς
            </h2>
            <p className="mt-2 max-w-xl text-left text-[#6A5852]">
              Λόγια από ανθρώπους που μας εμπιστεύτηκαν και βρήκαν ρυθμό με τη διατροφή τους.
            </p>
          </div>

          <Link
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-4 py-2 rounded-xl bg-[#A6653A] text-white hover:bg-[#4A2A23] transition self-start sm:self-auto"
          >
            Αφήστε κριτική
          </Link>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 10000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {testimonials.map((r, idx) => (
              <SwiperSlide key={idx} className="flex">
                <div className="flex flex-col justify-between flex-1 bg-[#FAF6EF] ring-1 ring-[#E6DDD3] rounded-xl p-4 md:p-5 shadow-sm text-left">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    {r.avatar ? (
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 ${r.color} text-white flex items-center justify-center rounded-full font-bold`}
                        aria-label={r.name?.[0] || "A"}
                        title={r.name}
                      >
                        {r.initial}
                      </div>
                    )}

                    <div className="flex flex-col">
                      <span className="font-semibold text-[#2B1C18]">{r.name}</span>
                      {r.years && (
                        <span className="text-xs text-[#6A5852]">{r.years}</span>
                      )}
                    </div>

                    <div className="ml-auto opacity-80">
                      <img
                        src="/icons/google.png"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="mt-2 text-sm md:text-base text-[#A6653A]">
                    {"★".repeat(r.stars || 5)}
                  </div>

                  {/* Review */}
                  <p className="mt-2 text-sm text-[#2B1C18]/85 leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>
        {`
          .swiper-slide {
            display: flex;
            height: auto;
          }
          .swiper-pagination {
            position: relative !important;
            margin-top: 1.5rem;
          }
          .swiper-pagination-bullet {
            background: #A6653A !important; /* terracotta */
            opacity: 0.35;
          }
          .swiper-pagination-bullet-active {
            background: #4A2A23 !important; /* espresso */
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
