"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const solutionData = [
  {
    id: 1,
    title: "Alumni & Student Tracking",
    subtitle: `Monitor achievements, career paths, and skill development.`,
  },
  {
    id: 2,
    title: "Event & Program Management",
    subtitle: `Organize hackathons, job fairs, webinars, and other growth initiatives.`,
  },
  {
    id: 3,
    title: "Institution Branding",
    subtitle: `Showcase verified alumni success stories to enhance institutional reputation.`,
  },
  {
    id: 4,
    title: "Industry Collaboration",
    subtitle: `Connect students with companies and startups for internships and projects.`,
  },
  {
    id: 5,
    title: "Data Insights",
    subtitle: `Access analytics to understand student and alumni outcomes, trends, and engagement.`,
  },
];

const Featured = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="text-white lg:py-20 py-8 snap-start h-screen flex items-center justify-center overflow-hidden relative">
      <div className="space-y-10 relative w-full">
        {/* Header */}
        <div className="text-center container mx-auto lg:px-0 px-6 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
          >
            Feature for Employers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="xl:text-xl md:text-lg text-base text-white/80 font-light"
          >
            Explore Features That Work for Everyone — Empowering Students,
            Recruiters & Institutes
          </motion.p>
        </div>

        {/* Swiper */}
        <div className="relative container mx-auto block w-full ">
          {/* Custom Vertical Pagination (RIGHT SIDE) */}
          <div className="custom-pagination absolute -left-24! top-1/2! -translate-y-1/2! flex flex-col items-center z-50 "></div>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            direction={"vertical"}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} w-3 h-3 cursor-pointer block rounded-full my-2  bg-white/30 transition-all duration-300"></span>`;
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="2xl:h-160 h-120"
          >
            {solutionData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex items-center space-x-20 container mx-auto relative z-20 h-full">
                  <div className="text-left text-white space-y-8 w-6/12">
                    <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF]">
                      <span>Feature {slide.id}</span>
                    </button>

                    <div className="space-y-4">
                      <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: "easeInOut",
                        }}
                        className="xl:text-xl md:text-lg text-base text-white/80 font-light"
                      >
                        {slide.subtitle}
                      </motion.p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button className="px-10 py-3 flex items-center border border-white rounded-full 2xl:text-xl text-lg space-x-2 hover:bg-white/10 transition">
                        <span>Try Now</span>
                      </button>
                    </div>
                  </div>

                  <div className="w-6/12 flex justify-center">
                    <img
                      src="/img/universities/alumni-student.png"
                      className="object-contain"
                      alt="Feature"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          opacity: 0.4;
          background-color: white;
          
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #217aff;
          transform: scale(1.4);
          box-shadow: 0 0 10px #217aff;
        }
      `}</style>
    </section>
  );
};

export default Featured;
