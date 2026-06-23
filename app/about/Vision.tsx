"use client";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const visionPoints = [
  {
    color: "cyan" as const,
    iconColor: "text-cyan-400",
    label: "Technical Integrity:",
    text: "Writing clean, secure, and fully auditable code that remains scalable for decades.",
  },
  {
    color: "blue" as const,
    iconColor: "text-blue-400",
    label: "Seamless Automation:",
    text: "Bridging physical hardware (IoT, POS) and digital workflows (ERP, CRM) to unlock operational speed.",
  },
  {
    color: "purple" as const,
    iconColor: "text-indigo-400",
    label: "Custom Precision:",
    text: "Eliminating out-of-the-box compromises by engineering features built specifically around domain workflows.",
  },
  {
    color: "orange" as const,
    iconColor: "text-purple-400",
    label: "Global Reliability:",
    text: "Backing critical aviation schedules, financial transactions, and medical software with rock-solid uptime.",
  },
];

const Vision = () => {
  return (
    <section className="text-white lg:py-20 py-8 snap-start lg:h-screen flex items-center justify-center overflow-hidden relative bg-[#0A0914]">
      <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6 lg:py-0 py-6">
          <div className="w-full">
            <img
              src="/img/about/our-vision.webp"
              className="object-contain rounded-3xl shadow-2xl"
              alt="Qunatrix Labs Vision"
            />
          </div>

          <div className="text-left text-white space-y-6 w-full">
            <button className="px-8 py-1.5 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF]">
              <span>Our Vision</span>
            </button>

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
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              To be the premier global choice for custom-built enterprise systems and advanced engineering, empowering companies to operate at peak digital capability.
            </motion.p>

            <div className="space-y-3">
              {visionPoints.map((pt, i) => (
                <motion.div
                  key={pt.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeInOut" }}
                >
                  <GlowCard glowColor={pt.color} customSize className="w-full px-4 py-3 flex items-start space-x-3">
                    <span className={`${pt.iconColor} font-bold mt-0.5 shrink-0`}>✦</span>
                    <p className="xl:text-lg md:text-base text-white/80 font-light">
                      <strong>{pt.label}</strong> {pt.text}
                    </p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
