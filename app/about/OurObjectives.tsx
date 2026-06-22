"use client";
import { motion } from "framer-motion";

const OurObjectives = () => {
  const objectives = [
    "Deliver highly scalable and modular custom enterprise ERP, CRM, and HRMS systems.",
    "Deploy secure, audited, and high-performance Blockchain networks and DeFi rails.",
    "Configure custom MQTT/Websocket IoT bridges and smart POS terminal integrations.",
    "Design specialized software architectures for Aviation reservation, EHR diagnostics, and LMS portals.",
    "Maintain long-term code health through clean architecture, thorough audits, and automated pipelines."
  ];

  return (
    <section className="bg-[#0C0A15] text-white lg:py-20 py-8 snap-start lg:h-screen flex items-center justify-center overflow-hidden relative border-t border-white/5">
      <div className="space-y-10 relative w-full">
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
          <div className="flex lg:flex-row flex-col lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6">
            <div className="w-full">
              <img
                src="/img/about/our-objectives.webp"
                className="object-contain rounded-3xl shadow-2xl"
                alt="Qunatrix Labs Objectives"
              />
            </div>
            <div className="text-left text-white space-y-8 w-full">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
                >
                  Our Objectives
                </motion.h1>

                <div className="space-y-4 pt-4">
                  {objectives.map((obj, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 * index,
                        ease: "easeInOut",
                      }}
                      className="xl:text-lg md:text-base text-sm text-white/80 font-light flex items-start space-x-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
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
                        className="icon icon-tabler shrink-0 text-cyan-400"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 12l5 5l10 -10" />
                        <path d="M2 12l5 5m5 -5l5 -5" />
                      </svg>
                      <p>{obj}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurObjectives;
