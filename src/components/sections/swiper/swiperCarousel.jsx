"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";

export default function SwiperHi() {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      loop={true}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative]}
      className="mySwiper h-80" // Add height to Swiper
    >
      <SwiperSlide className="flex items-center justify-center bg-red-500">
        <h3 className="text-white">Slide 1</h3>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-green-500">
        <h3 className="text-white">Slide 2</h3>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-blue-500">
        <h3 className="text-white">Slide 3</h3>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-yellow-500">
        <h3 className="text-white">Slide 4</h3>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-purple-500">
        <h3 className="text-white">Slide 5</h3>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-orange-500">
        <h3 className="text-white">Slide 6</h3>
      </SwiperSlide>
    </Swiper>
  );
}
