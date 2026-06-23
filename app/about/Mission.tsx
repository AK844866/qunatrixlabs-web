"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const missionPoints = [
  {
    color: "cyan" as const,
    borderClass: "border-cyan-500",
    label: "Enterprise Innovation:",
    text: "Constructing highly tailored CRM, ERP (Odoo, ERPNext), and automated manufacturing workflows.",
  },
  {
    color: "blue" as const,
    borderClass: "border-blue-500",
    label: "Deep Tech Integration:",
    text: "Deploying secure Blockchain ledgers, auditing smart contracts, and training AI/LLM interfaces.",
  },
  {
    color: "purple" as const,
    borderClass: "border-indigo-500",
    label: "Hardware & Telemetry:",
    text: "Architecting custom IoT device controls, remote telemetry brokers, and physical POS checkouts.",
  },
  {
    color: "orange" as const,
    borderClass: "border-purple-500",
    label: "Bespoke Solutions:",
    text: "Launching domain-focused portals for air ticketing, hospital records, LMS courses, and high-conversion e-commerce.",
  },
];

const Mission = () => {
  return (
    <section className="text-white lg:py-20 py-8 snap-start lg:h-screen flex items-center justify-center overflow-hidden relative bg-[#0A0914]">
      <div className="space-y-10 relative w-full">
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden">
          <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6">
            <div className="text-left text-white space-y-6 w-full">
              <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF]">
                <span>Our Mission</span>
              </button>

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

              <div className="space-y-3">
                {missionPoints.map((pt, i) => (
                  <motion.div
                    key={pt.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeInOut" }}
                  >
                    <GlowCard glowColor={pt.color} customSize className="w-full px-4 py-3">
                      <p className={`xl:text-lg md:text-base text-white/80 font-light pl-4 border-l-2 ${pt.borderClass}`}>
                        <strong>{pt.label}</strong> {pt.text}
                      </p>
                    </GlowCard>
                  </motion.div>
                ))}
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
