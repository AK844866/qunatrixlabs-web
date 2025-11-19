"use client";

import { motion } from "framer-motion";

const Data = [
  {
    id: 1,
    title: "Trust",
    subtitle: `MThe foundation of every connection within the Verifide ecosystem.
`,
  },
  {
    id: 2,
    title: "Transparency",
    subtitle: `Open, honest validation of skills, achievements, and partnerships.
`,
  },
  {
    id: 3,
    title: "Growth",
    subtitle: `Empowering every user to progress personally, professionally, and collectively.`,
  },
  {
    id: 4,
    title: "Collaboration",
    subtitle: `Building bridges between startups, students, and institutions worldwide.`,
  },
  {
    id: 5,
    title: "Innovation",
    subtitle: `Encouraging creativity, technology adoption, and forward-thinking approaches.`,
  },
];

export default function WhyChoose() {
  return (
    <section className="snap-start lg:h-screen container mx-auto lg:py-20 py-8 lg:space-y-10 space-y-6  w-full lg:px-0 px-4 relative ">
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
          Our Core Values
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="xl:text-xl md:text-lg text-base text-white/80 font-light"
        >
          Our streamlined process ensures seamless integration and maximum
          impact for your business operations.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-2">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-cover rounded-2xl lg:space-y-4 space-y-2 2xl:p-6 p-3 last:lg:col-span-1 last:col-span-2"
            style={{
              backgroundImage: `url('/img/about/nosie-bg.png')`,
            }}
          >
            <div className="w-12 h-12 rounded-lg border  shrink-0 flex items-center justify-center text-[#212121]">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"
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

            <div className="space-y-0.5">
              <h1 className="lg:text-xl text-lg font-semibold text-black!">
                {item.title}
              </h1>
              <p className="lg:text-base text-sm text-[#212121]">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img
          src="/img/about/growth.webp"
          className="rounded-3xl 2xl:h-96 lg:h-80 w-full object-cover"
        />
      </div>
    </section>
  );
}
