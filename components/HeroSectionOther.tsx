"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { string } from "three/tsl";
import Link from "next/link";

type HeroTwoContent = {
  title: string;
  subtitle: string;
  subtitle2?: string;
  subtitle3?: string;
  button?: string;
  buttonTwo?: string;
  img: string;
  extraline?: boolean;
  tagline?: string;
};

export default function HeroSectionOther({
  title,
  subtitle,
  subtitle2,
  subtitle3,
  button,
  buttonTwo,
  tagline,
  extraline,
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
    <section className="relative z-0 lg:h-screen w-full overflow-hidden snap-start lg:pt-0 pt-16">
      {/* Hero Text */}
      <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-20 gap-6 container mx-auto relative z-20 h-full lg:px-0 px-6 lg:py-0 py-6">
        <div className="lg:text-left text-center  text-white lg:space-y-8 space-y-4 w-full ">
          {extraline && (
            <button className="bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full  transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
              <div className="px-8 py-2 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-xs space-x-2 ">
                <span>{tagline} </span>
              </div>
            </button>
          )}
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
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              {subtitle2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              {subtitle3}
            </motion.p>
          </div>

          <div className="flex lg:flex-row flex-col gap-4 items-center">
            {/* <button className="px-10 py-3 lg:flex hidden items-center bg-black rounded-full 2xl:text-xl text-lg space-x-2 transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
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
            </button> */}

            <Link
              href="/contact"
              className="px-10 py-3 flex items-center border border-white rounded-full 2xl:text-xl lg:text-lg text-sm space-x-2 hover:bg-white/10 hover:backdrop-blur-md transition-all duration-150"
            >
              <span>{buttonTwo}</span>
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
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src={img}
            className="rounded-3xl lg:aspect-auto aspect-video object-cover"
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
