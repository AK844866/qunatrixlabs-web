"use client";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="text-white lg:py-20 py-8 snap-start h-screen flex items-center justify-center overflow-hidden relative">
      {/* Swiper */}
      <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6  ">
          <div className="  w-full">
            <img
              src="/img/about/our-vision.webp"
              className="object-contain "
            />
          </div>
          <div className="text-left  text-white space-y-8  w-full">
            <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF ">
              <span> Vision</span>
            </button>

            <div className="space-y-4  ">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
              >
                Our Vision
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
                To become the world’s most trusted ecosystem that connects
                startups, individuals, and institutions through verified
                credibility, opportunities, and innovation.
              </motion.p>
              <ul className="list-disc pl-6 space-y-2 ">
                <motion.li
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
                </motion.li>
                <motion.li
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
                </motion.li>
                <motion.li
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
                </motion.li>

                <motion.li
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
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
