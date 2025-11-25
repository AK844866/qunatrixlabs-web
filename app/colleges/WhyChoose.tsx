"use client";

import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section className="snap-start lg:h-screen container mx-auto lg:py-24 py-8 lg:space-y-16 space-y-6 w-full lg:px-0 px-4 relative ">
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
          Why Employees Choose Verifide
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="xl:text-xl md:text-lg text-base text-white/80 font-light"
        >
          Our streamlined process ensures seamless integration and maximum
          impact for your business operations.
        </motion.p>
      </div>

       <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-8 gap-2">
        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl  space-y-4 p-4 hover:scale-110 scale-100 transition-all cursor-pointer ">
          <div className="w-12 h-12 rounded-full bg-[#DA1D5D] shrink-0 flex items-center justify-center text-white ">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
          </div>
          <div className="space-y-0.5 ">
            <h1 className="lg:text-lg text-base font-medium">
              Verified Candidate Search
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Find candidates with trusted skill reports & certificates.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl  space-y-4 p-4 hover:scale-110 scale-100 transition-all cursor-pointer ">
          <div className="w-12 h-12 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center text-white">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">Faster Hiring</h1>
            <p className="text-sm  text-white/80 font-light">
              Cut down average hire time by 28% with ready-to-go verified
              talent.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl   space-y-4 p-4  hover:scale-110 scale-100 transition-all cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-[#FFC417] shrink-0 flex items-center justify-center text-white">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              Custom Assessments
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Create domain-specific tests tailored to your job roles.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl   space-y-4 p-4 hover:scale-110 scale-100 transition-all cursor-pointer ">
          <div className="w-12 h-12 rounded-full bg-[#4CAF50] shrink-0  flex items-center justify-center">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              Seamless Integration
            </h1>
            <p className="text-sm  text-white/80 font-light">
              Connect with your ATS or HR systems effortlessly.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-b from-[#FFFFFF]/10 to-[#ffffff]/0 border border-[#FFFFFF]/10 rounded-2xl  space-y-4 p-4 lg:col-span-1 col-span-2 hover:scale-110 scale-100 transition-all cursor-pointer ">
          <div className="w-12 h-12 rounded-full bg-[#5556D1] shrink-0 flex items-center justify-center text-white">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
          </div>
          <div>
            <h1 className="lg:text-lg text-base font-medium">
              Data & Analytics
            </h1>
            <p className="text-sm text-white/80 font-light">
              Insights into candidate performance and hiring outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
