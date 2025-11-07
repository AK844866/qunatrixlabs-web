"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "User Engement",
      desc: "Access a pool of verified profiles.",
      img: "/img/employers/user-engement.png", // change this to your own image
    },
    {
      id: 2,
      title: "Brand Growth",
      desc: "Use Verifide’s custom or pre-built assessments.",
      img: "/img/employers/brand-growth.png", // change this to your own image
    },
    {
      id: 3,
      title: "User Adoption",
      desc: "Interview only candidates who meet your skill criteria.",
      img: "/img/employers/user-adoption.png", // change this to your own image
    },
    {
      id: 4,
      title: "Hiring Talents",
      desc: "Interview only candidates who meet your skill criteria.",
      img: "/img/employers/hiring-talents.png", // change this to your own image
    },
    {
      id: 5,
      title: "Reduce Cost",
      desc: "Interview only candidates who meet your skill criteria.",
      img: "/img/employers/user-adoption.png", // change this to your own image
    },
  ];

  return (
    <section className="bg-[#0E0C15] text-white py-20   relative z-0 h-screen w-full overflow-hidden snap-start ">
      <div className="lg:space-y-20 space-y-8 relative  container mx-auto  lg:px-0 px-6 z-20 ">
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

        <div className="flex lg:flex-row flex-col 2xl:gap-10 gap-6 items-start w-10/12 mx-auto ">
          {/* Left Side (Text) */}
          <div className="space-y-10 shrink-0 2xl:w-96 w-80">
            {steps.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setStep(s.id)}
                className="cursor-pointer "
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`space-y-2 px-10 py-3 rounded-xl w-full text-left transition-all duration-300 ${
                      step === s.id ? "bg-white/5 font-semibold text-lg" : "border-white/40 font-light text-lg  text-left"
                    }`}
                  >
                    <h3 className="">
                      {s.title}
                    </h3>
                    {/* <p className="text-white font-light text-base  ">
                      {s.desc}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Side (Image) */}
          <div className="relative flex justify-center items-center w-full border-l border-white/10 pl-16">
            {steps.map(
              (s) =>
                step === s.id && (
                  <div key={s.id} className="space-y-4 ">
                    <div className="space-y-2 ">
                      <p className="text-lg font-medium">
                        Maximize User Engagement
                      </p>
                      <ul className="list-disc text-base text-white/80 pl-4 font-light">
                        <li>Ensure trust with transparency and contracts.· </li>
                        <li>
                          Boost interaction with your assets and on-chain
                          activities.·{" "}
                        </li>
                        <li>
                          Efficient incentives against time-frequency-amount
                          weighted trading volume.
                        </li>
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
