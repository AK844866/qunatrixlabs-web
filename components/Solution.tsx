"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // 👈 import Swiper type
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const solutionData = [
  {
    id: 1,
    img: "/img/home/profile-passport.svg",
    title: "Profile Passport",
    subtitle:
      "Your digital flex — a verified profile that proves who you are and what you can do. Skills, projects, and wins — all legit, all in one place.",
    buttonLink: "",
  },
  {
    id: 2,
    img: "/img/home/skill-check.svg",
    title: "Skill Check",
    subtitle:
      "No fluff, just proof. Test your skills, get verified, and show you’ve got the chops startups actually need.",
    buttonLink: "",
  },

  {
    id: 3,
    img: "/img/home/client-portal.svg",
    title: "Client Portal",
    subtitle:
      "Step into what’s next. Explore trending skills, unlock learning paths, and level up to stay startup-ready — all from one hub.",
    buttonLink: "",
  },

  {
    id: 4,
    img: "/img/home/opportunities-hub.svg",
    title: "Opportunities Hub",
    subtitle:
      "Find your next big move — internships, gigs, or full-time roles. Startups can discover pre-vetted talent, handle screening, interviews, and hiring — all in one smooth flow.",
    buttonLink: "",
  },
];

const Solutions = () => {
  const swiperRef = useRef<SwiperType | null>(null); // ✅ Properly typed ref

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className=" text-white lg:py-20 py-8  snap-start h-screen flex items-center justify-center overflow-hidden">
      <div className="space-y-10">
        <div className="text-left  container mx-auto flex items-end justify-between lg:px-0 px-6 ">
          <div className="space-y-2 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Empowering startups, talents, and institutions to grow together —
              through trust, verification, and real-world opportunity.
            </motion.p>
          </div>
          <div className="items-center space-x-4 lg:flex hidden">
            <button
              onClick={handlePrev}
              className="lg:size-12 size-10 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/5 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="lg:size-12 size-10 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/5 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden lg:pl-0 pl-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1.1 }, // small phones
              640: { slidesPerView: 1.5 }, // larger phones
              768: { slidesPerView: 2.1 }, // tablets
              1024: { slidesPerView: 3.5 }, // desktops
              1920: { slidesPerView: 3 }, // desktops
            }}
            className="pb-10 !overflow-visible"
          >
            {solutionData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-[#FFFFFF]/5 border border-white/10 rounded-3xl text-white flex flex-col justify-between overflow-hidden h-full">
                  <div>
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full object-cover  "
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="font-semibold lg:text-2xl text-xl">
                        {slide.title}
                      </h3>
                      <p className="lg:text-base text-white/80 font-light">
                        {slide.subtitle}
                      </p>
                      <button className="flex items-center space-x-2">
                        <span>Try Now</span>
                        <span className="w-5 h-5 rounded-full bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
