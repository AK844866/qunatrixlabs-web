"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "User Engagement",
      header: "Maximize User Engagement",
      points: [
        "Ensure trust with transparency and contracts.",
        "Boost interaction with your assets and on-chain activities.",
        "Efficient incentives against time-frequency-amount weighted trading volume.",
      ],
      img: "/img/employers/user-engagement.webp",
    },
    {
      id: 2,
      title: "Brand Growth",
      header: "Accelerate Brand Growth",
      points: [
        "Strengthen your brand with verified user engagement data.",
        "Build credibility through transparent community interactions.",
        "Amplify visibility with reward-driven marketing loops.",
      ],
      img: "/img/employers/brand-growth.webp",
    },
    {
      id: 3,
      title: "User Adoption",
      header: "Drive Rapid User Adoption",
      points: [
        "Simplify onboarding through gamified reward experiences.",
        "Create value loops that retain and attract new users.",
        "Turn first-time visitors into loyal, verified participants.",
      ],
      img: "/img/employers/user-adoption.webp",
    },
    {
      id: 4,
      title: "Hiring Talents",
      header: "Simplify Talent Acquisition",
      points: [
        "Access verified professionals with proven on-chain credibility.",
        "Match candidates faster through performance-based metrics.",
        "Reduce hiring friction using smart contract–verified profiles.",
      ],
      img: "/img/employers/hiring-talents.webp",
    },
    {
      id: 5,
      title: "Reduce Cost",
      header: "Optimize and Reduce Operational Costs",
      points: [
        "Automate repetitive processes with blockchain-backed workflows.",
        "Cut middlemen expenses via direct peer-to-peer transactions.",
        "Leverage data-driven insights to optimize reward distribution.",
      ],
      img: "/img/employers/reduce-cost.webp",
    },
  ];

  return (
    <section className="bg-[#0E0C15] text-white py-20 relative z-0 h-screen w-full overflow-hidden snap-start ">
      <div className="lg:space-y-20 space-y-8 relative container mx-auto lg:px-0 px-4 z-20">
        <div className="space-y-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="xl:text-xl md:text-lg text-base text-white/80 font-light"
          >
            Explore Features That Work for Everyone — Empowering Students,
            Recruiters & Institutes
          </motion.p>
        </div>

        <div className="flex lg:flex-row flex-col 2xl:gap-10 gap-6 items-start lg:w-10/12 w-full mx-auto">
          {/* Left Side (Text) */}
          <div className="lg:gap-10 gap-0 shrink-0 2xl:w-96 lg:w-80 w-full overflow-x-auto flex lg:flex-col flex-row">
            {steps.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setStep(s.id)}
                className="cursor-pointer "
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`space-y-2 lg:px-10 px-4 py-3 rounded-xl w-full text-left transition-all duration-300 ${
                      step === s.id
                        ? "bg-white/5 font-semibold lg:text-lg text-base whitespace-nowrap"
                        : "border-white/40 font-light lg:text-lg text-base whitespace-nowrap  text-left"
                    }`}
                  >
                    <h3 className="">{s.title}</h3>
                    {/* <p className="text-white font-light text-base  ">
                      {s.desc}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Side (Image) */}
          <div className="relative flex justify-center items-center w-full lg:border-l border-white/10 lg:pl-16">
            {steps.map(
              (s) =>
                step === s.id && (
                  <div key={s.id} className="space-y-4 ">
                    <div className="space-y-2 ">
                      <p className="text-lg font-medium">{s.header}</p>
                      <ul className="list-disc text-base text-white/80 pl-4 font-light">
                        <li>{s.points[0]}</li>
                        <li>{s.points[1]}</li>
                        <li>{s.points[2]}</li>
                      </ul>
                    </div>
                    <img
                      key={s.id}
                      src={s.img}
                      alt={s.title}
                      className="rounded-2xl shadow-2xl transition-all duration-500 object-contain"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <img
        src="/shapes/for-startup-shape.svg"
        className="absolute -top-[15%] left-[20%] w-[60%] z-0 lg:block hidden"
        alt="Shape"
      />
    </section>
  );
}
