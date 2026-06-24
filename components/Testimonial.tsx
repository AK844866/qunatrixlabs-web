"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

// ── Quote card wrapped in GlowCard ──────────────────────────
function QuoteCard({
  quote,
  avatar,
  name,
  role,
  glowColor,
}: {
  quote: string;
  avatar: string;
  name: string;
  role: string;
  glowColor: "blue" | "purple" | "cyan" | "green" | "orange" | "red";
}) {
  return (
    <GlowCard
      glowColor={glowColor}
      customSize
      className="lg:p-8 p-6 lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between"
    >
      <p className="lg:text-base text-sm text-gray-300">{quote}</p>
      <div className="flex items-center gap-3 mt-4">
        <img src={avatar} className="rounded-full object-cover size-12" alt={name} />
        <div>
          <h4 className="font-semibold text-base">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </GlowCard>
  );
}

// ── Photo tile (plain, no glow) ──────────────────────────────
function PhotoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
      <img src={src} className="w-full h-full object-cover" alt={alt} />
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="bg-[#0E0C15] text-white lg:py-20 py-6 snap-start lg:h-screen z-0 flex flex-col justify-center">
      <div className="lg:space-y-16 space-y-6 my-auto">
        {/* Header */}
        <div className="text-center container mx-auto flex items-end justify-center lg:px-0 px-4">
          <div className="text-center space-y-4">
            <button className="bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
              <div className="px-10 py-2 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2">
                <span>What people say About us</span>
              </div>
            </button>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              Build Verified Credentials Employers Trust
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Showcase your skills with AI-powered assessments and immutable certificates that boost your credibility with recruiters worldwide.
            </motion.p>
          </div>
        </div>

        {/* ── Row 1 → right ──────────────────────────────────── */}
        <div className="lg:space-y-6 space-y-4 w-full">
          <Marquee gradient={false} speed={50} pauseOnHover className="text-xl font-medium text-gray-300">
            <div className="flex flex-row lg:gap-6 gap-4 lg:pl-6 pl-4">
              <QuoteCard
                glowColor="blue"
                quote='"Qunatrix Labs made learning engaging and results-driven. I landed my dream job 3 weeks faster"'
                avatar="https://xsgames.co/randomusers/assets/avatars/female/40.jpg"
                name="Ananya Desai"
                role="Graphic Designer"
              />
              <PhotoTile src="/img/home/image.png" alt="testimonial" />
              <QuoteCard
                glowColor="cyan"
                quote='"I completed 5 verified courses in 3 months through Qunatrix Labs. My LinkedIn profile views increased by 180%"'
                avatar="https://xsgames.co/randomusers/assets/avatars/male/72.jpg"
                name="Sanjay Nair"
                role="Graphic Designer"
              />
              <PhotoTile src="/img/testi2.webp" alt="testi2" />
              <QuoteCard
                glowColor="purple"
                quote={`"Qunatrix Labs' digital passport helped me showcase my skills to recruiters instantly. I landed my dream job 3 weeks faster"`}
                avatar="https://xsgames.co/randomusers/assets/avatars/male/29.jpg"
                name="Rahul Kapoor"
                role="Graphic Designer"
              />
              <PhotoTile src="/img/testi3.webp" alt="testi3" />
              <QuoteCard
                glowColor="green"
                quote='"Startup quests gave me real-world experience. I moved from junior to senior product manager in 4 months."'
                avatar="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
                name="Arjun Sharma"
                role="Graphic Designer"
              />
            </div>
          </Marquee>

          {/* ── Row 2 ← left ─────────────────────────────────── */}
          <Marquee direction="right" gradient={false} speed={50} pauseOnHover className="text-xl font-medium text-gray-300">
            <div className="flex flex-row lg:gap-6 gap-4 lg:pl-6 pl-4">
              <QuoteCard
                glowColor="orange"
                quote={`"I received 12 job offers after completing Qunatrix Labs' learning quests. The verified credentials made my skills instantly credible."`}
                avatar="https://xsgames.co/randomusers/assets/avatars/female/54.jpg"
                name="Sneha Patel"
                role="HR Director"
              />
              <PhotoTile src="/img/testi4.webp" alt="testi4" />
              <QuoteCard
                glowColor="red"
                quote={`"Qunatrix Labs' community feature connected me with 50+ designers across India. Recruiters now reach out to me directly"`}
                avatar="https://xsgames.co/randomusers/assets/avatars/male/24.jpg"
                name="Vikram Reddy"
                role="Data Analyst"
              />
              <PhotoTile src="/img/home/image.png" alt="image" />
              <QuoteCard
                glowColor="cyan"
                quote='"The verified learning paths ensured everyone had the exact skills we needed. We launched our MVP 2 months faster"'
                avatar="https://xsgames.co/randomusers/assets/avatars/female/71.jpg"
                name="Kavya Iyer"
                role="UX Designer"
              />
              <PhotoTile src="/img/testi5.webp" alt="testi5" />
              <QuoteCard
                glowColor="blue"
                quote={`"Qunatrix Labs' verified credentials increased my freelance rates by 35%. Clients trust my skills immediately"`}
                avatar="https://xsgames.co/randomusers/assets/avatars/male/28.jpg"
                name="Rohan Gupta"
                role="Developer"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
