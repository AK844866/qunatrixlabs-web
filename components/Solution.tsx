"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlowCard } from "@/components/ui/spotlight-card";

const slideColors: Array<'blue' | 'purple' | 'cyan' | 'green'> = ['blue', 'purple', 'cyan', 'green'];

const solutionData = [
  {
    id: 1,
    img: "/img/passport-hero-element.svg",
    title: "Aviation & Ticketing Hub",
    subtitle:
      "Multi-GDS integrations, real-time seat inventory mapping, baggage control telemetry, and high-frequency booking workflows.",
    buttonLink: "/contact",
  },
  {
    id: 2,
    img: "/img/assessment-hero-element.svg",
    title: "Fintech & Billing Systems",
    subtitle:
      "PCI-compliant transaction ledgers, digital wallet integrations, automated invoicing engines, and real-time transaction processing.",
    buttonLink: "/contact",
  },
  {
    id: 3,
    img: "/img/home/client-portal.webp",
    title: "Enterprise Odoo / ERP Next",
    subtitle:
      "Centralized warehouse tracking, automated manufacturing supply runs, double-entry bookkeeping, and custom HRMS workflows.",
    buttonLink: "/contact",
  },
  {
    id: 4,
    img: "/img/survey-hero-element.svg",
    title: "Blockchain & Web3",
    subtitle:
      "Custom smart contract development, DeFi liquidity rails, secure multisig crypto custody, and Web3 browser app integrations.",
    buttonLink: "/contact",
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
              Key Client Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Tailored software suites engineered to solve complex operational challenges across specialized business domains.
            </motion.p>
          </div>
          <div className="items-center space-x-4 lg:flex hidden">
            <button
            aria-label="Prev"
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
              aria-label="Next"
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
            {solutionData.map((slide, idx) => (
              <SwiperSlide key={slide.id}>
                <GlowCard
                  glowColor={slideColors[idx % slideColors.length]}
                  customSize
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="font-semibold lg:text-2xl text-xl">
                        {slide.title}
                      </h3>
                      <p className="lg:text-base text-white/80 font-light">
                        {slide.subtitle}
                      </p>
                      <Link href="/contact" className="flex items-center space-x-2">
                        <span>Request Demo</span>
                        <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
