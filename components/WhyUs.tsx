"use client";

import { motion } from "framer-motion";
import ElectricCube from "./ElectricCube";

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

      {/* Desktop Layout with 3D ElectricCube */}
      <div className="relative justify-center h-full lg:flex hidden">
        <ElectricCube />

        {/* Card 1: End-to-End Development */}
        <div
          className="w-[30%] bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl absolute top-[0%] left-[6.5%] flex items-start space-x-4 p-4
          transition-all duration-500 hover:border-[#DA1D5D] hover:shadow-[0_0_20px_2px_#DA1D5D]/60"
        >
          <div className="w-16 h-16 rounded-full bg-[#DA1D5D] shrink-0 flex items-center justify-center font-bold text-xl text-white">
            🏗️
          </div>
          <div className="space-y-0.5">
            <h1 className="text-lg font-medium">1. End-to-End Delivery</h1>
            <p className="text-sm text-white/80 font-light">
              From initial system design, rapid prototyping, production UI/UX engineering, to secure deployment pipelines.
            </p>
          </div>
        </div>

        {/* Card 2: Cutting-Edge Tech */}
        <div
          className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl absolute -top-4 right-[7%] flex items-start space-x-4 p-4 w-[30%]
          transition-all duration-500 hover:border-[#2563EB] hover:shadow-[0_0_20px_2px_#2563EB]/60"
        >
          <div className="w-16 h-16 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center font-bold text-xl text-white">
            🚀
          </div>
          <div>
            <h1 className="text-xl font-medium">2. Cutting-Edge Tech</h1>
            <p className="text-sm text-white/80 font-light">
              Advanced implementation in AI/LLM applications, custom Blockchain systems, crypto wallets, and interactive web apps.
            </p>
          </div>
        </div>

        {/* Card 3: Odoo & ERP Next */}
        <div
          className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl absolute top-[34%] left-[2%] flex items-start space-x-4 p-4 w-[30%]
          transition-all duration-500 hover:border-[#FFC417] hover:shadow-[0_0_20px_2px_#FFC417]/60"
        >
          <div className="w-16 h-16 rounded-full bg-[#FFC417] shrink-0 flex items-center justify-center font-bold text-xl text-white">
            ⚙️
          </div>
          <div>
            <h1 className="text-lg font-medium">3. Odoo & ERP Next</h1>
            <p className="text-sm text-white/80 font-light">
              Full lifecycle customization of Odoo, ERP Next, CRM configurations, HRMS databases, and document management flows.
            </p>
          </div>
        </div>

        {/* Card 4: Hardware & POS */}
        <div
          className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl absolute top-[36%] right-[5%] flex items-start space-x-4 p-4 w-[30%]
          transition-all duration-500 hover:border-[#4CAF50] hover:shadow-[0_0_20px_2px_#4CAF50]/60"
        >
          <div className="w-16 h-16 rounded-full bg-[#4CAF50] shrink-0 flex items-center justify-center font-bold text-xl text-white">
            📟
          </div>
          <div>
            <h1 className="text-lg font-medium">4. Hardware & POS</h1>
            <p className="text-sm text-white/80 font-light">
              Connecting IoT devices, programming billing solutions, POS machine API integrations, and custom manufacturing automation.
            </p>
          </div>
        </div>

        {/* Card 5: Industry Verticals */}
        <div
          className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl absolute bottom-[18%] right-[34%] flex items-start space-x-4 p-4 w-[32rem]
          transition-all duration-500 hover:border-[#5556D1] hover:shadow-[0_0_20px_2px_#5556D1]/60"
        >
          <div className="w-16 h-16 rounded-full bg-[#5556D1] shrink-0 flex items-center justify-center font-bold text-xl text-white">
            🌐
          </div>
          <div>
            <h1 className="text-lg font-medium">5. Multi-Domain Industry Expertise</h1>
            <p className="text-sm text-white/80 font-light">
              Custom software tailored to Aviation & ticketing, fintech pipelines, LMS learning portals, Hospital Services, and E-commerce.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden block grid grid-cols-1 gap-3">
        <div className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl space-y-4 p-4">
          <div className="w-12 h-12 rounded-full bg-[#DA1D5D] shrink-0 flex items-center justify-center font-bold text-lg text-white">
            🏗️
          </div>
          <div className="space-y-0.5">
            <h1 className="text-base font-medium">1. End-to-End Delivery</h1>
            <p className="text-sm text-white/80 font-light">
              Complete product design, rapid prototyping, development, and secure deployment pipelines.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl space-y-4 p-4">
          <div className="w-12 h-12 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center font-bold text-lg text-white">
            🚀
          </div>
          <div>
            <h1 className="text-base font-medium">2. Cutting-Edge Tech</h1>
            <p className="text-sm text-white/80 font-light">
              Next-gen implementation in AI/LLMs, Blockchain ledgers, crypto wallets, and rich web applications.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl space-y-4 p-4">
          <div className="w-12 h-12 rounded-full bg-[#FFC417] shrink-0 flex items-center justify-center font-bold text-lg text-white">
            ⚙️
          </div>
          <div>
            <h1 className="text-base font-medium">3. Odoo & ERP Next</h1>
            <p className="text-sm text-white/80 font-light">
              Robust CRM integration, ERP customization, HRMS portals, and automated business workflows.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl space-y-4 p-4">
          <div className="w-12 h-12 rounded-full bg-[#4CAF50] shrink-0 flex items-center justify-center font-bold text-lg text-white">
            📟
          </div>
          <div>
            <h1 className="text-base font-medium">4. Hardware & POS Integrations</h1>
            <p className="text-sm text-white/80 font-light">
              Smart IoT telemetry, billing APIs, POS hardware setups, and industrial manufacturing triggers.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/0 border border-white/10 rounded-2xl space-y-4 p-4">
          <div className="w-12 h-12 rounded-full bg-[#5556D1] shrink-0 flex items-center justify-center font-bold text-lg text-white">
            🌐
          </div>
          <div>
            <h1 className="text-base font-medium">5. Multi-Domain Industry Expertise</h1>
            <p className="text-sm text-white/80 font-light">
              Bespoke systems built for Aviation & ticketing, Fintech, LMS, Hospitals, and high-conversion E-commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
