"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ForSection() {  
  return (
    <>
      <section className="snap-start lg:h-screen flex  items-center justify-center relative bg-[#0E0C15] text-white overflow-hidden lg:px-0 px-4">
        <img
          src="/shapes/for-startup-shape.svg"
          className="absolute -top-[20%] w-[60%] z-0 lg:block hidden"
          alt="Shape"
        />
        <div className="container mx-auto lg:py-32 py-8 lg:space-y-16 space-y-6 z-10">
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              For Startups
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              From Learning to Earning: The Verifide Path
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-4">
            <div className="bg-[#2563EB] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Empowering Startups to Grow
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Engage, Innovate, Scale.
                </p>
              </div>
              <img
                src="/img/home/empowering-startups.webp"
                className="object-cover w-full"
                alt="Empowering Startups"
              />
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Fueling Startup Success
                </h1>
                <p className="text-lg text-white/80 font-light">
                  From Idea to Impact.
                </p>
              </div>
              <img
                src="/img/home/fueling-startup.webp"
                className="object-cover w-full"
                alt="Fueling Startup"
              />
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Startups, Verified for Growth
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Engagement, Adoption, Opportunity.
                </p>
              </div>
              <img
                src="/img/home/startups-verified.webp"
                className="object-cover w-full"
                alt="Verified Startups"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start lg:h-screen flex  items-center justify-center relative bg-[#0E0C15] text-white overflow-hidden lg:px-0 px-4">
        <img
          src="/shapes/for-startup-shape.svg"
          className="absolute -top-[20%] right-[10%] w-[60%] z-0 lg:block hidden"
          alt="Shape"
        />
        <div className="container mx-auto lg:py-32 py-8 lg:space-y-16 space-y-6 z-10">
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              For Individuals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Learn. Connect. Build. Your Gateway to Startups.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-4">
            <div className="bg-[#2563EB] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Your Gateway to Startups
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Learn. Connect. Build.
                </p>
              </div>
              <img
                src="/img/home/your-gateway.webp"
                className="object-cover w-full"
                alt="Gateway"
              />
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Opportunities Made Real
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Discover Projects, Internships, Jobs.
                </p>
              </div>
              <img
                src="/img/home/opportunities-made.webp"
                className="object-cover w-full"
                alt="Opportunities"
              />
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Verified Individuals, Limitless Opportunities
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Learn, Apply, and Grow.
                </p>
              </div>
              <img
                src="/img/home/verified-individuals.webp"
                className="object-cover w-full"
                alt="Verified Individuals"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start lg:h-screen flex  items-center justify-center relative bg-[#0E0C15] text-white overflow-hidden lg:px-0 px-4">
        <img
          src="/shapes/for-startup-shape.svg"
          className="absolute -top-[10%] -left-[10%] w-[60%] z-0 lg:block hidden"
          alt="Shape"
        />
        <div className="container mx-auto lg:py-32 py-8 lg:space-y-16 space-y-6 z-10">
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              For Colleges
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Host Workshops. Hackathons. Build Networks.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-4">
            <div className="bg-[#2563EB] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Elevate Your Institution
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Host Workshops. Hackathons. Build Networks.
                </p>
              </div>
              <img
                src="/img/home/elevate-your-institution.webp"
                className="object-cover w-full"
                alt="Elevate"
              />
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Redefining Institutional Reputation
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Showcase Impact. Attract Talent. Lead Innovation.
                </p>
              </div>
              <img
                src="/img/home/redefining-institutional.webp"
                className="object-cover w-full"
                alt="Reputation"
              />
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200">
              <div className="lg:p-6 p-4">
                <h1 className="lg:text-2xl text-2xl font-medium">
                  Your Gateway to the Startup Ecosystem
                </h1>
                <p className="text-lg text-white/80 font-light">
                  Connect. Collaborate. Innovate.
                </p>
              </div>
              <img
                src="/img/home/youe-startup-ecosystem.webp"
                className="object-cover w-full"
                alt="Ecosystem"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
