"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

type HeroTwoContent = {
  title: string;
  subtitle: string;
  button: string;
  buttonTwo: string;
  img: string;
};

export default function HeroSectionOther({
  title,
  subtitle,
  button,
  buttonTwo,
  img,
}: HeroTwoContent) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Set custom video speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <section className="relative z-0 h-screen w-full overflow-hidden snap-start ">
      {/* Hero Text */}
      <div className="flex items-center space-x-20 container mx-auto relative z-20 h-full  ">
        <div className="  text-left  text-white space-y-8 ">
          <button className="bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full  transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
            <div className="px-8 py-2 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 ">
              <span>Over 20,000 Employee hired last 6 month </span>
            </div>
          </button>
          <div className="space-y-4  ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              {subtitle}
            </motion.p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-10 py-3 flex items-center bg-black rounded-full 2xl:text-xl text-lg space-x-2 transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
              <span>{button}</span>
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
            </button>

            <button className="px-10 py-3 flex items-center border border-white rounded-full 2xl:text-xl text-lg space-x-2">
              <span>{buttonTwo}</span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={img}
            className="rounded-3xl "
          />
        </div>
      </div>
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover lg:aspect-video aspect-auto z-0 "
        src="/video/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0E0C15]/70 backdrop-blur-2xl z-10"></div>
    </section>
  );
}
