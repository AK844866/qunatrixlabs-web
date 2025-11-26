"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // 👈 import Swiper type
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const solutionData = [
  {
    id: 1,
    img: "/img/employers/verified-talent-profiles.webp",
    title: "Verified Talent Profiles",
    subtitle: `Access detailed profiles with validated skills, projects, education, and experience.
`,
    buttonLink: "",
  },
  {
    id: 2,
    img: "/img/employers/streamlined-recruitment.webp",
    title: "Streamlined Recruitment",
    subtitle: `Save time with pre-verified candidates and automated onboarding tools.
`,
    buttonLink: "",
  },

  {
    id: 3,
    img: "/img/employers/community-building.webp",
    title: "Community Building",
    subtitle: `Launch products, host events, and engage with your target audience.`,
    buttonLink: "",
  },

  {
    id: 4,
    img: "/img/employers/talent-insights.webp",
    title: "Talent Insights",
    subtitle: `Analyze industry-specific talent pools for better hiring decisions. `,
    buttonLink: "",
  },
  {
    id: 5,
    img: "/img/employers/employer-branding.webp",
    title: "Employer Branding",
    subtitle:
      "Highlight your company as a trusted partner for growth and opportunity.",
    buttonLink: "",
  },
];

const Featured = () => {
  const swiperRef = useRef<SwiperType | null>(null); // ✅ Properly typed ref

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className=" text-white lg:py-20 py-8 relative snap-start h-screen flex items-center justify-center overflow-hidden">
      <div className="space-y-10 ">
        <div className="text-center  container mx-auto  lg:px-0 px-6 ">
          <div className="space-y-2 ">
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
        </div>
        <div className=" container mx-auto 2xl:px-0 lg:px-10 block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            // direction={"vertical"}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination-desktop3",
              renderBullet: (index, className) => {
                return `<span class="${className} w-2 h-2 cursor-pointer m-1.5 block rounded-full bg-white/30 transition-all duration-300"></span>`;
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="2xl:h-160 md:h-120"
            // 👇 BREAKPOINTS ADDED HERE
            breakpoints={{
              0: {
                direction: "horizontal", // Mobile = left/right slide
              },
              1024: {
                direction: "vertical", // Desktop = up/down slide
              },
            }}
          >
            {solutionData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex md:flex-row flex-col-reverse 2xl:gap-20 lg:gap-10 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6  ">
                  <div className="text-left  text-white space-y-8 lg:w-5/12 w-full">
                    <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF ">
                      <span>Feature {slide.id} </span>
                    </button>

                    <div className="2xl:space-y-4 space-y-2  ">
                      <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl font-semibold"
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
                      <button className="lg:px-10 px-8 lg:py-3 py-2 flex items-center border border-white rounded-full 2xl:text-xl lg:text-lg text-base space-x-2">
                        <span>Try Now</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-7/12 w-full">
                    <img
                      src={slide.img}
                      className="object-contain "
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Pagination – vertical right side */}
          <div className="custom-pagination-desktop3 absolute 2xl:-left-[6%] lg:left-[2%]! -left-1/2 lg:w-auto w-full lg:justify-center  justify-center  lg:top-1/2 bottom-6 lg:-translate-y-1/2 translate-x-1/2 flex lg:flex-col flex-row z-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
