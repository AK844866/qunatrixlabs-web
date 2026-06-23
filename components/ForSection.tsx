"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

// ── First card: gradient header + image ─────────────────────
function ColorCard({
  title,
  subtitle,
  gradient,
  src,
  alt,
}: {
  title: string;
  subtitle: string;
  gradient: string;
  src: string;
  alt: string;
}) {
  return (
    <GlowCard glowColor="blue" customSize className="hover:scale-[1.02] transition-all duration-200 flex flex-col w-full">
      {/* Gradient colour header */}
      <div className="p-6" style={{ background: gradient }}>
        <h1 className="lg:text-2xl text-xl font-semibold">{title}</h1>
        <p className="text-base text-white/80 font-light mt-1">{subtitle}</p>
      </div>
      {/* Image */}
      <img src={src} className="object-cover w-full flex-1" alt={alt} />
    </GlowCard>
  );
}

// ── Image cards ─────────────────────────────────────────────
function ImageCard({
  title,
  subtitle,
  src,
  alt,
  glowColor,
}: {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  glowColor: "blue" | "purple" | "green" | "cyan" | "orange" | "red";
}) {
  return (
    <GlowCard glowColor={glowColor} customSize className="overflow-hidden hover:scale-[1.02] transition-all duration-200 flex flex-col w-full">
      <div className="lg:p-6 p-4">
        <h1 className="lg:text-2xl text-xl font-medium">{title}</h1>
        <p className="text-base text-white/80 font-light mt-1">{subtitle}</p>
      </div>
      <img src={src} className="object-cover w-full flex-1" alt={alt} />
    </GlowCard>
  );
}

export default function ForSection() {
  return (
    <>
      {/* ── For Startups ──────────────────────────────────────── */}
      <section className="snap-start lg:h-screen flex items-center justify-center relative bg-[#0E0C15] text-white overflow-hidden lg:px-0 px-4">
        <img src="/shapes/for-startup-shape.svg" className="absolute -top-[20%] w-[60%] z-0 lg:block hidden" alt="shape" />
        <div className="container mx-auto lg:py-32 py-8 lg:space-y-16 space-y-6 z-10">
          <div className="text-center space-y-2">
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold">
              For Startups
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} viewport={{ once: true }} className="xl:text-xl md:text-lg text-base text-white/80 font-light">
              From Learning to Earning: The Verifide Path
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-4">
            {/* Card 1 — pure colour gradient */}
            <ColorCard
              title="Empowering Startups to Grow"
              subtitle="Engage, Innovate, Scale."
              gradient="linear-gradient(135deg, #0066FF 0%, #217AFF 50%, #6EA8FF 100%)"
              src="/img/home/empowering-startups.webp"
              alt="Empowering Startups"
            />
            <ImageCard title="Fueling Startup Success" subtitle="From Idea to Impact." src="/img/home/fueling-startup.webp" alt="Fueling Startup" glowColor="cyan" />
            <ImageCard title="Startups, Verified for Growth" subtitle="Engagement, Adoption, Opportunity." src="/img/home/startups-verified.webp" alt="Verified Startups" glowColor="purple" />
          </div>
        </div>
      </section>

      {/* ── For Individuals ───────────────────────────────────── */}
      <section className="snap-start lg:h-screen flex items-center justify-center relative bg-[#0E0C15] text-white overflow-hidden lg:px-0 px-4">
        <img src="/shapes/for-startup-shape.svg" className="absolute -top-[20%] right-[10%] w-[60%] z-0 lg:block hidden" alt="shape" />
        <div className="container mx-auto lg:py-32 py-8 lg:space-y-16 space-y-6 z-10">
          <div className="text-center space-y-2">
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold">
              For Individuals
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} viewport={{ once: true }} className="xl:text-xl md:text-lg text-base text-white/80 font-light">
              Learn. Connect. Build. Your Gateway to Startups.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-4">
            {/* Card 1 — pure colour gradient (teal/emerald) */}
            <ColorCard
              title="Your Gateway to Startups"
              subtitle="Learn. Connect. Build."
              gradient="linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)"
              src="/img/home/your-gateway.webp"
              alt="Your Gateway"
            />
            <ImageCard title="Opportunities Made Real" subtitle="Discover Projects, Internships, Jobs." src="/img/home/opportunities-made.webp" alt="Opportunities" glowColor="green" />
            <ImageCard title="Verified Individuals, Limitless Opportunities" subtitle="Learn, Apply, and Grow." src="/img/home/verified-individuals.webp" alt="Verified Individuals" glowColor="blue" />
          </div>
        </div>
      </section>

      {/* ── For Colleges ──────────────────────────────────────── */}
      <section className="snap-start lg:h-screen flex items-center justify-center relative bg-[#0E0C15] text-white overflow-hidden lg:px-0 px-4">
        <img src="/shapes/for-startup-shape.svg" className="absolute -top-[10%] -left-[10%] w-[60%] z-0 lg:block hidden" alt="shape" />
        <div className="container mx-auto lg:py-32 py-8 lg:space-y-16 space-y-6 z-10">
          <div className="text-center space-y-2">
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold">
              For Colleges
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} viewport={{ once: true }} className="xl:text-xl md:text-lg text-base text-white/80 font-light">
              Host Workshops. Hackathons. Build Networks.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-4">
            {/* Card 1 — pure colour gradient (orange/amber) */}
            <ColorCard
              title="Elevate Your Institution"
              subtitle="Host Workshops. Hackathons. Build Networks."
              gradient="linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FB923C 100%)"
              src="/img/home/elevate-your-institution.webp"
              alt="Elevate Your Institution"
            />
            <ImageCard title="Redefining Institutional Reputation" subtitle="Showcase Impact. Attract Talent. Lead Innovation." src="/img/home/redefining-institutional.webp" alt="Redefining Institutional" glowColor="orange" />
            <ImageCard title="Your Gateway to the Startup Ecosystem" subtitle="Connect. Collaborate. Innovate." src="/img/home/youe-startup-ecosystem.webp" alt="Startup Ecosystem" glowColor="green" />
          </div>
        </div>
      </section>
    </>
  );
}
