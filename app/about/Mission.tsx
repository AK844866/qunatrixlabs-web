"use client";
import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="text-white lg:py-20 py-8 snap-start lg:h-screen flex items-center justify-center overflow-hidden relative bg-[#0A0914]">
      <div className="space-y-10 relative w-full">
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
          <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6">
            <div className="text-left text-white space-y-8 w-full">
              <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF]">
                <span>Our Mission</span>
              </button>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
                >
                  Engineered for Impact
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                  className="xl:text-xl md:text-lg text-base text-white/80 font-light"
                >
                  Our mission is to accelerate global digital transformation by delivering top-tier engineering and custom software:
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                  className="xl:text-lg md:text-base text-white/70 font-light pl-4 border-l border-cyan-500"
                >
                  <strong>Enterprise Innovation:</strong> Constructing highly tailored CRM, ERP (Odoo, ERPNext), and automated manufacturing workflows.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                  className="xl:text-lg md:text-base text-white/70 font-light pl-4 border-l border-blue-500"
                >
                  <strong>Deep Tech Integration:</strong> Deploying secure Blockchain ledgers, auditing smart contracts, and training AI/LLM interfaces.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  className="xl:text-lg md:text-base text-white/70 font-light pl-4 border-l border-indigo-500"
                >
                  <strong>Hardware & Telemetry:</strong> Architecting custom IoT device controls, remote telemetry brokers, and physical POS checkouts.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                  className="xl:text-lg md:text-base text-white/70 font-light pl-4 border-l border-purple-500"
                >
                  <strong>Bespoke Solutions:</strong> Launching domain-focused portals for air ticketing, hospital records, LMS courses, and high-conversion e-commerce.
                </motion.p>
              </div>
            </div>

            <div className="w-full">
              <img
                src="/img/about/our-mission.webp"
                className="object-contain rounded-3xl shadow-2xl"
                alt="Qunatrix Labs Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
