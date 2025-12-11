"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Infinite3DCarousel() {
  const slides = [
    "/src/assets/about3.jpg",
    "/src/assets/about2.jpg",
    "/src/assets/about1.png",
  ];

  return (
    <div className="">
      <Swiper
         modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        navigation
        pagination={{ clickable: true }}
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,      
          stretch: 0,      // spacing between slides
          depth: 150,      // 3D distance
          modifier: 1.2,   // intensity
          slideShadows: true
        }}
        style={{ paddingBottom: "40px" }}
      >
        {slides.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-[330px] md:!w-[380px] lg:!w-[420px] shadow-xl"
          >
            <img 
              src={src} 
              className="w-full h-full object-cover rounded-[40px]" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}