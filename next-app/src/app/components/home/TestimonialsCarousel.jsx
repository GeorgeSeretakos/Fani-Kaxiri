'use client';

import Link from "next/link";
import testimonials from "../../../../public/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const reviewUrl = "https://www.google.com/search?sca_esv=5e581a6313517469&rlz=1C1KNTJ_elGR1073GR1075&sxsrf=AE3TifNYKW0FjN49Ls0bH2Nj5iC79YV8Zw:1761047573094&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6HgjZUc8aUICv_Mv78omF29idZ79jnVYobC4ZMt6_EAhDy0qSmDLs7Ds12131PWFbkaX-dV9gSFj3QpiwFGDcRu_5ZzDR8icF5k_WTzC-9u8Skr_z8sAHZY53JR1NKl9No7SuzEzwFi_-aNvFxMFDAN1Y40GSawAPfx0pcWeJBW8QjjDGVgQYc22RNmdFPK4f1-j_k%3D&q=%CE%A6%CE%B1%CE%BD%CE%AE+%CE%9A%CE%B1%CE%BE%CE%B7%CF%81%CE%AE+-+%CE%94%CE%B9%CE%B1%CE%B9%CF%84%CE%BF%CE%BB%CF%8C%CE%B3%CE%BF%CF%82,+%CE%94%CE%B9%CE%B1%CF%84%CF%81%CE%BF%CF%86%CE%BF%CE%BB%CF%8C%CE%B3%CE%BF%CF%82+%CE%9A%CF%81%CE%B9%CF%84%CE%B9%CE%BA%CE%AD%CF%82&sa=X&ved=2ahUKEwiopJu4nbWQAxWFBdsEHW_mGqgQ0bkNegQIIxAD&cshid=1761047612889952&biw=1440&bih=791&dpr=1.5";

  return (
    <div className="relative px-4 flex justify-center items-center">
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
            className="btn self-start sm:self-auto"
          >
            Άφησε κριτική
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
