"use client";
import { motion } from "framer-motion";

const OurObjectives = () => {
  return (
    <section className="bg-[#2563EB] text-white lg:py-20 py-8 snap-start h-screen flex items-center justify-center overflow-hidden relative">
      <div className="space-y-10 relative w-full">
        {/* Header */}

        {/* Swiper */}
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
          <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6  ">
            <div className="w-full">
              <img
                src="/img/about/our-objectives.webp"
                className="object-contain  "
              />
            </div>
            <div className="text-left  text-white space-y-8  w-full">
              <div className="space-y-4  ">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
                >
                 Our Objectives
                </motion.h1>

               
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                  className="xl:text-xl md:text-lg text-base text-white font-light flex items-start space-x-2  rounded-lg"
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
                    className="icon icon-tabler shrink-0  icons-tabler-outline icon-tabler-checks"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <p> Build a global verification framework for skills, education, and projects.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                  className="xl:text-xl md:text-lg text-base text-white font-light flex items-start space-x-2  rounded-lg"
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
                    className="icon icon-tabler shrink-0  icons-tabler-outline icon-tabler-checks"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <p> Create a marketplace of opportunities connecting verified startups and individuals.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                  className="xl:text-xl md:text-lg text-base text-white font-light flex items-start space-x-2  rounded-lg"
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
                    className="icon icon-tabler shrink-0  icons-tabler-outline icon-tabler-checks"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <p> Strengthen the reputation of educational institutions through collaboration and innovation exposure.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                  className="xl:text-xl md:text-lg text-base text-white font-light flex items-start space-x-2  rounded-lg"
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
                    className="icon icon-tabler shrink-0  icons-tabler-outline icon-tabler-checks"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <p> Drive real-world learning and employability through startup-led programs, hackathons, and events.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                  className="xl:text-xl md:text-lg text-base text-white font-light flex items-start space-x-2  rounded-lg"
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
                    className="icon icon-tabler shrink-0  icons-tabler-outline icon-tabler-checks"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <p>
                  Encourage community-driven feedback and adoption for growth and innovation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurObjectives;
