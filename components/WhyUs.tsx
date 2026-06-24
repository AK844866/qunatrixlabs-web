"use client";

import { motion } from "framer-motion";
import ElectricCube from "./ElectricCube";
import { GlowCard } from "@/components/ui/spotlight-card";

const cards = [
  {
    emoji: "🏗️",
    color: "#DA1D5D",
    title: "1. End-to-End Delivery",
    desc: "From initial system design, rapid prototyping, production UI/UX engineering, to secure deployment pipelines.",
    glowColor: "blue" as const,
    // desktop absolute coords
    top: "0%", left: "6.5%", right: "auto", bottom: "auto", width: "30%",
  },
  {
    emoji: "🚀",
    color: "#2563EB",
    title: "2. Cutting-Edge Tech",
    desc: "Advanced implementation in AI/LLM applications, custom Blockchain systems, crypto wallets, and interactive web apps.",
    glowColor: "cyan" as const,
    top: "0", left: "auto", right: "7%", bottom: "auto", width: "30%",
    extraTop: "-16px",
  },
  {
    emoji: "⚙️",
    color: "#FFC417",
    title: "3. Odoo & ERP Next",
    desc: "Full lifecycle customization of Odoo, ERP Next, CRM configurations, HRMS databases, and document management flows.",
    glowColor: "orange" as const,
    top: "34%", left: "2%", right: "auto", bottom: "auto", width: "30%",
  },
  {
    emoji: "📟",
    color: "#4CAF50",
    title: "4. Hardware & POS",
    desc: "Connecting IoT devices, programming billing solutions, POS machine API integrations, and custom manufacturing automation.",
    glowColor: "green" as const,
    top: "36%", left: "auto", right: "5%", bottom: "auto", width: "30%",
  },
  {
    emoji: "🌐",
    color: "#5556D1",
    title: "5. Multi-Domain Industry Expertise",
    desc: "Custom software tailored to Aviation & ticketing, fintech pipelines, LMS learning portals, Hospital Services, and E-commerce.",
    glowColor: "purple" as const,
    top: "auto", left: "auto", right: "34%", bottom: "-2%", width: "32rem",
  },
];

export default function WhyUs() {
  return (
    <section className="snap-start lg:h-screen container mx-auto lg:py-20 py-8 lg:space-y-20 space-y-6 w-full lg:px-0 px-4 relative">
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
          Why Choose Qunatrix Labs?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="xl:text-xl md:text-lg text-base text-white/80 font-light"
        >
          We Combine Advanced Engineering With Seamless Industry Domain Integrations
        </motion.p>
      </div>

      {/* ── Desktop ─────────────────────────────────────────────── */}
      <div className="relative justify-center h-full lg:flex hidden">
        <ElectricCube />
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              position: "absolute",
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
              width: card.width,
              marginTop: card.extraTop ?? 0,
            }}
          >
            <GlowCard glowColor={card.glowColor} customSize className="w-full flex items-start space-x-4 p-4">
              <div
                className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center font-bold text-xl text-white"
                style={{ backgroundColor: card.color }}
              >
                {card.emoji}
              </div>
              <div className="space-y-0.5">
                <h1 className="text-lg font-medium">{card.title}</h1>
                <p className="text-sm text-white/80 font-light">{card.desc}</p>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <div className="lg:hidden grid grid-cols-1 gap-3">
        {cards.map((card) => (
          <GlowCard key={card.title} glowColor={card.glowColor} customSize className="flex items-start space-x-4 p-4 w-full">
            <div
              className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold text-lg text-white"
              style={{ backgroundColor: card.color }}
            >
              {card.emoji}
            </div>
            <div className="space-y-0.5">
              <h1 className="text-base font-medium">{card.title}</h1>
              <p className="text-sm text-white/80 font-light">{card.desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
