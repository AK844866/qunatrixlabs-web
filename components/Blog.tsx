"use client";
import { motion } from "framer-motion";
export default function Blog() {
  const BlogPostData = [
    {
      id: 1,
      title: "Content AI - Your Personal AI Assistant by Rank Math",
      img: "/img/home/blog-sample-img.png",
      category: "Business",
      color: "#D9F99D",
    },
    {
      id: 2,
      title: "Content AI - Your Personal AI Assistant by Rank Math",
      img: "/img/home/blog-sample-img.png",
      category: "Business",
      color: "#FEF08A",
    },
    {
      id: 3,
      title: "Content AI - Your Personal AI Assistant by Rank Math",
      img: "/img/home/blog-sample-img.png",
      category: "Business",
      color: "#A5B4FC",
    },
    {
      id: 4,
      title: "Content AI - Your Personal AI Assistant by Rank Math",
      img: "/img/home/blog-sample-img.png",
      category: "Business",
      color: "#DB5C98",
    },
  ];

  return (
    <section className="container mx-auto space-y-10 lg:py-20 py-6 xl:px-0 px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
           className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
        >
          Our Recent Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
           className="xl:text-xl md:text-lg text-base text-white/80 font-light"
        >
          Start with 7-day free trial. No credit card needed. Cancel at anytime.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-4">
        {BlogPostData.map((items) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={items.id}
            className={` text-white p-4 space-y-4 rounded-2xl scale-100 transition-all cursor-pointer hover:scale-105 bg-[#FFFFFF]/5 `}
            // style={{ background: `${items.color}` }}
          >
            <button className="px-4 py-1.5 font-medium text-sm rounded-full border border-white/10 text-white/70">
              {items.category}
            </button>
            <h2 className="font-medium text-xl">
              Content AI - Your Personal AI Assistant by Rank Math
            </h2>
            <div>
              <img src={items.img} className="rounded-2xl " />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
