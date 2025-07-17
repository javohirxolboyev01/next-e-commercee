"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

const slides = [
  {
    id: 1,
    img: "https://marketudachi.ru/upload/shop_15/2/item_21665/a402356af9fe11e72186005056899a29_9324ef04c6d511e84184005056899a29.jpg",
    title: "Summer Deals",
    subtitle: "Up to 50% off",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/ad/7f/d0/ad7fd082f78034deff22fe04cdfa2145.jpg",
    title: "Fresh Groceries",
    subtitle: "Delivered to your door",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/originals/ff/9a/4d/ff9a4dcab58ec4942b9d79992ddd7760.jpg",
    title: "Daily Essentials",
    subtitle: "Best Prices Guaranteed",
  },
];

const HeroSwiper = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mb-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        className="overflow-hidden rounded-b-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[300px] md:h-[385px]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 md:px-16 text-white">
                <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                <p className="text-sm md:text-lg mt-1">{slide.subtitle}</p>
                <button className="mt-4 px-4 py-2 bg-white text-black rounded text-sm font-medium w-max hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(HeroSwiper);
