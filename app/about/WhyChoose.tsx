"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const Data = [
  {
    id: 1,
    title: "Integrity",
    subtitle: "We write clean, secure, and auditable code adhering to strict global engineering standards.",
  },
  {
    id: 2,
    title: "Transparency",
    subtitle: "Open communication with full visibility into project sprints, code repositories, and tasks.",
  },
  {
    id: 3,
    title: "Domain Mastery",
    subtitle: "Deep specialization across diverse enterprise verticals from aviation networks to billing systems.",
  },
  {
    id: 4,
    title: "Adaptability",
    subtitle: "A team skilled in bridging legacy banking rails, physical POS APIs, and remote IoT device layers.",
  },
  {
    id: 5,
    title: "Innovation",
    subtitle: "Pioneering state-of-the-art custom solutions in Blockchain, AI/LLMs, and telemetry networks.",
  },
];

export default function WhyChoose() {
  return (
    <section className="snap-start lg:h-screen w-full lg:py-20 py-8 lg:space-y-10 space-y-6 relative bg-[#0A0914]">
      <img
        src="/shapes/for-startup-shape.svg"
        className="absolute -top-[15%] left-[20%] w-[60%] z-0 lg:block hidden"
        alt="Shape"
      />
      <div className="container mx-auto lg:px-0 px-4 space-y-10">
        <div className="text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold text-white"
          >
            Our Core Values
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="xl:text-xl md:text-lg text-base text-white/80 font-light"
          >
            Our engineering principles ensure seamless software delivery and operational impact for your enterprise.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-2">
          {Data.map((item, index) => (
            <GlowCard
              key={index}
              glowColor="orange"
              customSize
              className="lg:space-y-4 space-y-2 2xl:p-6 p-4 last:lg:col-span-1 last:col-span-2"
            >
              {/* noise texture overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `url('/img/about/nosie-bg.png')`,
                  backgroundSize: "cover",
                }}
              />
              <div className="w-12 h-12 rounded-lg border border-white/10 shrink-0 flex items-center justify-center text-orange-400 bg-white/5 relative z-10">
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

              <div className="space-y-1 relative z-10">
                <h1 className="lg:text-xl text-lg font-semibold text-white">
                  {item.title}
                </h1>
                <p className="lg:text-sm text-xs text-white/70 font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>

        <div>
          <img
            src="/img/about/growth.webp"
            className="rounded-3xl 2xl:h-96 lg:h-80 w-full object-cover shadow-2xl"
            alt="Qunatrix Labs Growth"
          />
        </div>
      </div>
    </section>
  );
}
