"use client";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const WhyQunatrix = () => {
  return (
    <section className="text-white lg:py-20 py-8 snap-start lg:h-screen flex items-center justify-center overflow-hidden relative bg-[#0A0914] border-t border-white/5">
      <div className="space-y-10 relative w-full">
        <div className="relative container mx-auto block lg:w-auto w-screen lg:overflow-visible overflow-hidden ">
          <div className="flex lg:flex-row flex-col-reverse lg:gap-20 gap-6 items-center container mx-auto relative z-20 h-full lg:px-0 px-6">
            <div className="text-left text-white space-y-8 w-full">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
                >
                  Why Qunatrix Labs
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                  className="xl:text-xl md:text-lg text-base text-white/80 font-light"
                >
                  Modern enterprises require tailor-made software solutions that run without compromises. Qunatrix Labs unites deep domain research, next-gen technology stacks, and reliable delivery practices to build high-performance systems.
                </motion.p>


                {[
                  { delay: 0.3, color: 'cyan' as const,   iconColor: 'text-cyan-400',   text: 'Production-Grade Security (Audit Ready)' },
                  { delay: 0.4, color: 'blue' as const,   iconColor: 'text-blue-400',   text: 'Flexible Cloud & On-Premises Deployments' },
                  { delay: 0.5, color: 'purple' as const, iconColor: 'text-indigo-400', text: 'Full API Synchronization & Documentation' },
                  { delay: 0.6, color: 'orange' as const, iconColor: 'text-purple-400', text: 'Dedicated Engineering Pods & Account Managers' },
                ].map((item) => (
                  <motion.div key={item.text} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: item.delay, ease: 'easeInOut' }}>
                    <GlowCard glowColor={item.color} customSize className="xl:text-lg md:text-base text-sm text-white font-light flex items-center space-x-3 lg:px-6 px-4 py-3 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler shrink-0 ${item.iconColor}`}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 12l5 5l10 -10" />
                        <path d="M2 12l5 5m5 -5l5 -5" />
                      </svg>
                      <p>{item.text}</p>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <img
                src="/img/about/why-qunatrix.webp"
                className="object-contain rounded-3xl shadow-2xl"
                alt="Qunatrix Labs Advantages"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyQunatrix;
