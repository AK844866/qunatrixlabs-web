"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set custom video speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 1) * 100; // horizontal movement range
      const y = (e.clientY / innerHeight - 1) * 100; // vertical movement range

      const layers =
        containerRef.current?.querySelectorAll<HTMLImageElement>(".float-img");
      layers?.forEach((layer, index) => {
        const speed = (index + 1) * 5; // different speed per image
        layer.style.transform = `translate(${x / speed}px, ${y / speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative z-0 h-screen w-full overflow-hidden snap-start "
      ref={containerRef}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover lg:aspect-video aspect-auto "
        src="/video/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0E0C15]/70 backdrop-blur-2xl"></div>

      {/* Floating Elements */}
      <img
        src="/img/passport-hero-element.svg"
        className="float-img lg:w-[15%] w-[25%] absolute top-[18%] left-[10%] z-10 transition-transform duration-200 ease-out lg:block hidden"
      />
      <img
        src="/img/job-hero-element.svg"
        className="float-img lg:w-[14%] w-[28%] absolute top-[16%] lg:right-[13%] right-[5%] z-10 transition-transform duration-200 ease-out lg:block hidden"
      />
      <img
        src="/img/assessment-hero-element.svg"
        className="float-img  lg:w-[22%] w-[44%] absolute lg:bottom-[18%] bottom-[14%] lg:left-[12%] left-[4%] z-10 transition-transform duration-200 ease-out lg:block hidden"
      />
      <img
        src="/img/survey-hero-element.svg"
        className="float-img  lg:w-[22%] w-[44%]  absolute lg:bottom-[18%] bottom-[10%] lg:right-[12%] right-[4%] z-10 transition-transform duration-200 ease-out lg:block hidden"
      />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full text-white space-y-8 md:px-0 px-4">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="2xl:text-4xl xl:text-3xl text-3xl font-medium viga"
          >
            Passport for growth
          </motion.h2>

          <p className="text-base text-white/70">Powered by</p>
          <h2 className="2xl:text-6xl xl:text-5xl text-5xl  font-semibold">
            Global Startup Ecosystem
          </h2>
          <p className="2xl:text-xl xl:text-lg text-base font-light">
            A growth accelerator for startups and verified talent.
          </p>
        </div>

        <button className="bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
          <div className="px-10 py-3 flex items-center bg-black rounded-full 2xl:text-xl text-lg space-x-2">
            <span>Get Verified</span>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7h9v9" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
