"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Verification",
      desc: "More Opportunities. More Rewards. Stronger Brand.",
      img: "/img/employee/sign-create-profile.gif", // change this to your own image
    },
    {
      id: 2,
      title: "Quests",
      desc: "Redeemable for higher visibility and in-app tokens.",
      img: "/img/employee/quests.webp", // change this to your own image
    },
    {
      id: 3,
      title: "Job Opportunity",
      desc: "higher recognition and more visible opportunity.",
      img: "/img/employee/job-opportunity.webp", // change this to your own image
    },
     {
      id: 4,
      title: "Assessment",
      desc: "Higher trust. Smarter job recommendations. Greater opportunities.",
      img: "/img/employee/assessment.webp", // change this to your own image
    },
  ];

  return (
    <section className="bg-[#062555] text-white lg:py-20 py-8 relative z-0 h-screen w-full overflow-hidden snap-start ">
      <div className="lg:space-y-20 space-y-4  container mx-auto  lg:px-0 px-6 ">
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

        <div className="flex lg:flex-row flex-col 2xl:gap-16 lg:gap-10 gap-6 items-center">
          {/* Right Side (Image) */}
          <div className="relative flex justify-center items-center w-full bg-white/5 rounded-2xl aspect-video  ">
            {steps.map(
              (s) =>
                step === s.id && (
                  <img
                    key={s.id}
                    src={s.img}
                    alt={s.title}
                    className="rounded-2xl shadow-2xl transition-all duration-500 w-full object-contain "
                  />
                )
            )}
          </div>
          {/* Left Side (Text) */}

          <div className="2xl:space-y-2 space-y-3 w-full">
            {steps.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setStep(s.id)}
                className="cursor-pointer "
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`border-l-2 lg:space-y-2 lg:pl-6 pl-4 2xl:py-6 lg:py-3 py-1 transition-all select-none duration-300 ${
                      step === s.id ? "border-white" : "border-white/40"
                    }`}
                  >
                   
                    <h3 className="2xl:lg:text-2xl xl:text-xl text-lg font-semibold">{s.title}</h3>
                    <p className="text-white font-light lg:text-base text-sm  ">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
