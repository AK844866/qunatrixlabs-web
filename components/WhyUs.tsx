"use client";

import { motion } from "framer-motion";
import ElectricCube from "./ElectricCube";

export default function WhyUs() {
  return (
    <section className="snap-start lg:h-screen container mx-auto lg:py-20 py-8 lg:space-y-20 space-y-6  w-full lg:px-0 px-4 relative ">
      <img
        src="/shapes/for-startup-shape.svg"
        className="absolute -top-[15%] left-[20%] w-[60%] z-0 lg:block hidden"
        alt="Shape"
      />
      <div className="text-center space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
        >
          Why Verifide?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="xl:text-xl md:text-lg text-base text-white/80 font-light"
        >
          Verifide Talent Community Focused on Startup Growth
        </motion.p>
      </div>

      <div className="relative  justify-center h-full lg:flex hidden">
        <ElectricCube /> 
        {/* <img src="/img/home/why-verifide-cube.svg" className="w-[45%] mb-60" /> */}

        <div
          className="w-[30%] bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl absolute top-[0%] left-[6.5%] flex items-start space-x-4 p-4
     transition-all duration-500 hover:border-[#217AFF] hover:shadow-[0_0_20px_2px_#217AFF]/60"
        >
          <div className="w-16 h-16 rounded-full bg-[#DA1D5D] shrink-0 flex items-center justify-center">
            <img src="/img/home/verified-digital.svg" className="size-8" />
          </div>
          <div className="space-y-0.5">
            <h1 className="text-lg font-medium">
              1. Verified Digital Passport
            </h1>
            <p className="text-sm text-white/80 font-light">
              Build instant trust with a verified identity — showcasing verified
              credentials like education, experience and achievements.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl absolute -top-4 right-[7%] flex items-start space-x-4 p-4 w-[30%]">
          <div className="w-16 h-16 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center">
            <img src="/img/home/skill-validation.svg" className="size-8" />
          </div>
          <div>
            <h1 className="text-xl font-medium">2. Skill Validation & Proof</h1>
            <p className="text-sm  text-white/80 font-light">
              Skills assessed and verified, creating transparent credibility for
              employers and collaborators.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl absolute top-[34%] left-[2%] flex items-start space-x-4 p-4 w-[30%]">
          <div className="w-16 h-16 rounded-full bg-[#FFC417] shrink-0 flex items-center justify-center">
            <img src="/img/home/smarter-faster.svg" className="size-8" />
          </div>
          <div>
            <h1 className="text-lg font-medium">3. Smarter, Faster Hiring</h1>
            <p className="text-sm  text-white/80 font-light">
              Enable easy hiring through automated skill-matching , screening &
              shortlisting— saving time and effort for both sides.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl absolute top-[36%] right-[5%] flex items-start space-x-4 p-4 w-[30%]">
          <div className="w-16 h-16 rounded-full bg-[#4CAF50] shrink-0  flex items-center justify-center">
            <img src="/img/home/real-world.svg" className="size-8" />
          </div>
          <div>
            <h1 className="text-lg font-medium">4. Smarter, Faster Hiring</h1>
            <p className="text-sm  text-white/80 font-light">
               Stay ahead of the curve with startup-led workshops, projects, and
              practical tech experiences.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl absolute bottom-[18%] right-[34%] flex items-start space-x-4 p-4 w-[32rem]">
          <div className="w-16 h-16 rounded-full bg-[#5556D1] shrink-0 flex items-center justify-center">
            <img src="/img/home/community-driven.svg" className="size-8" />
          </div>
          <div>
            <h1 className="text-lg font-medium">5. Community-Driven Growth</h1>
            <p className="text-sm text-white/80 font-light">
              Connecting startups, users, and mentors to exchange feedback,
              drive adoption, and grow together via Quests.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden bloack grid grid-cols-1 gap-3">
        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl  space-y-4 p-4  ">
          <div className="w-12 h-12 rounded-full bg-[#DA1D5D] shrink-0 flex items-center justify-center ">
            <img src="/img/home/verified-digital.svg" className="size-6" />
          </div>
          <div className="space-y-0.5 ">
            <h1 className="lg:text-lg text-base font-medium">
              1. Verified Digital Passport
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Build instant trust with a verified identity — showcasing verified
              credentials like education, experience and achievements.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl  space-y-4 p-4  ">
          <div className="w-12 h-12 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center">
            <img src="/img/home/skill-validation.svg" className="size-6" />
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              2. Skill Validation & Proof
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Skills assessed and verified, creating transparent credibility for
              employers and collaborators.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl   space-y-4 p-4  ">
          <div className="w-12 h-12 rounded-full bg-[#FFC417] shrink-0 flex items-center justify-center">
            <img src="/img/home/smarter-faster.svg" className="size-6" />
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              3. Smarter, Faster Hiring
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Enable easy hiring through automated skill-matching , screening &
              shortlisting— saving time and effort for both sides.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl   space-y-4 p-4  ">
          <div className="w-12 h-12 rounded-full bg-[#4CAF50] shrink-0  flex items-center justify-center">
            <img src="/img/home/real-world.svg" className="size-6" />
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              4. Smarter, Faster Hiring
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Stay ahead of the curve with startup-led workshops, projects, and
              practical tech experiences.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl  space-y-4 p-4 col-span-1  ">
          <div className="w-12 h-12 rounded-full bg-[#5556D1] shrink-0 flex items-center justify-center">
            <img src="/img/home/community-driven.svg" className="size-6" />
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              5. Community-Driven Growth
            </h1>
            <p className="text-sm text-white/80 font-light">
              Connecting startups, users, and mentors to exchange feedback,
              drive adoption, and grow together via Quests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
