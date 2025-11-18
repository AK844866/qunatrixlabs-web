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

const Mission = () => {
  return (
    <section className="text-white lg:py-20 py-8 snap-start h-screen flex items-center justify-center overflow-hidden relative">
      <div className="space-y-10 relative w-full">
        {/* Header */}
      

        {/* Swiper */}
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
          <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6  ">
            <div className="text-left  text-white space-y-8  w-full">
              <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF ">
                <span> Mission</span>
              </button>

              <div className="space-y-4  ">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
                >
                  Our Mission
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
                  To empower every stakeholder in the startup journey through:
                </motion.p>
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
                  Verified Identities: Establishing trust with a secure digital
                  identity passport for individuals and startups.
                </motion.p>
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
                  Opportunity Access: Enabling seamless discovery of jobs,
                  internships, collaborations, and projects.
                </motion.p>
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
                  Institutional Partnerships: Helping colleges and universities
                  strengthen reputation through startup engagement and practical
                  learning exposure.
                </motion.p>

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
                  Ecosystem Growth: Fostering engagement, mentorship, and
                  adoption through events, workshops, and verified interactions.
                </motion.p>
              </div>

             
            </div>

            <div className="  w-full">
              <img
                src="/img/about/our-mission.webp"
                className="object-contain "
              />
            </div>
          </div>

          {/* Custom Vertical Pagination (RIGHT SIDE) */}
          <div className="custom-pagination absolute -left-24! top-1/2! -translate-y-1/2! lg:flex hidden flex-col items-center z-50 "></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
