"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [step, setStep] = useState(1);

  const steps = [  
    {
      id: 1,
      title: "Register Institution",
      desc: "Onboard your college & training officers (TPOs).",
      img: "/img/universities/register-your-institution.webp", // change this to your own image
    },
    {
      id: 2,
      title: "Run Bulk Assessments",
      desc: "Onboard your college & training officers (TPOs).",
      img: "/img/universities/run-bulk-assessments.webp", // change this to your own image
    },
    {
      id: 3,
      title: "Boost Placements",
      desc: "Share verified student profiles with recruiters & track outcomes.",
      img: "/img/employers/search-discover.webp", // change this to your own image
    },
  ];

  return (
   <section className="bg-[#0D6EFD] text-white lg:py-20 py-8 relative z-0 h-screen w-full overflow-hidden snap-start ">
      <div className="lg:space-y-20 space-y-8  container mx-auto  lg:px-0 px-6 ">
        <div className="space-y-2 text-center  ">
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

        <div className="flex lg:flex-row flex-col lg:gap-20 gap-6 items-center ">
          {/* Right Side (Image) */}
          <div className="relative flex justify-center items-center w-full bg-white/5 rounded-2xl aspect-video ">
            {steps.map(
              (s) =>
                step === s.id && (
                  <img
                    key={s.id}
                    src={s.img}
                    alt={s.title}
                    className="rounded-2xl shadow-2xl transition-all duration-500 w-full"
                  />
                )
            )}
          </div>
          {/* Left Side (Text) */}

          <div className="lg:space-y-10 space-y-6  w-full">
            {steps.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setStep(s.id)}
                className="cursor-pointer select-none "
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`border-l-4 lg:space-y-2 lg:pl-6 pl-4 py-2 transition-all duration-300 ${
                      step === s.id ? "border-white" : "border-white/40"
                    }`}
                  >
                    <button className="lg:block hidden lg:text-sm text-xs text-white rounded-full border border-white lg:px-6 px-4 py-1.5">
                      Step {s.id}
                    </button>
                    <h3 className="lg:text-2xl text-lg font-semibold">{s.title}</h3>
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
