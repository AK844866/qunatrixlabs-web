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
    title: "Opportunity Marketplace",
    subtitle: ` Personalized recommendations for internships, jobs, freelance gigs, and volunteer roles.`,
    buttonLink: "",
  },
  {
    id: 2,
    img: "/img/home/skill-check.svg",
    title: "Verified Profile Passport",
    subtitle: `Showcase your verified skills, education, projects, and experiences in one place.
`,
    buttonLink: "",
  },

  {
    id: 3,
    img: "/img/home/client-portal.svg",
    title: "Networking & Mentorship",
    subtitle: `Connect with professionals, mentors, and peers to build meaningful relationships.`,
    buttonLink: "",
  },

  {
    id: 4,
    img: "/img/home/opportunities-hub.svg",
    title: "Skill Verification & Endorsements",
    subtitle: `Gain credibility with verified skills and project validations`,
    buttonLink: "",
  },
  {
    id: 5,
    img: "/img/home/opportunities-hub.svg",
    title: "Events & Learning",
    subtitle:
      "Access hackathons, workshops, webinars, and upskilling programs.",
    buttonLink: "",
  },
];

const FeaturedforEmployee = () => {
  const swiperRef = useRef<SwiperType | null>(null); // ✅ Properly typed ref

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className=" text-white lg:py-20 py-8  snap-start h-screen flex items-center justify-center overflow-hidden">
      <div className="space-y-10 relative">
        <div className="text-center  container mx-auto  lg:px-0 px-6 ">
          <div className="space-y-2 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              Featured for Employee
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
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden lg:pl-0 pl-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            direction={"vertical"}
            loop={true}
            autoplay={{
              delay: 2500,
              // disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1.1 }, // small phones
              640: { slidesPerView: 1.5 }, // larger phones
              768: { slidesPerView: 2.1 }, // tablets
              1024: { slidesPerView: 3.5 }, // desktops
              1920: { slidesPerView: 1 }, // desktops
            }}
            className="pb-10 "
          >
            {solutionData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex items-center space-x-20 container mx-auto relative z-20 h-full  ">
                  <div className="text-left  text-white space-y-8 w-5/12">
                    <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF ">
                      <span>Feature {slide.id} </span>
                    </button>

                    <div className="space-y-4  ">
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
                      <button className="px-10 py-3 flex items-center border border-white rounded-full 2xl:text-xl text-lg space-x-2">
                        <span>Try Now</span>
                      </button>
                    </div>
                  </div>

                  <div className="w-7/12">
                    <img
                      src="/img/employee/your-dream-Jobs.png"
                      className="object-contain "
                    />
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

export default FeaturedforEmployee;
