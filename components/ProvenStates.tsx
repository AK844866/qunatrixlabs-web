"use client";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type SlideItem = {
  id: number;
  icon: string;
  title: number;
  subtitle: string;
  bgcolor: string;
};

type ProvenStatesProps = {
  DataState: SlideItem[];
};

// ✅ Animated number triggers when visible
function AnimatedNumber({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView) return;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to, duration, isInView]);

  return <span ref={ref} />;
}

export default function ProvenStates({ DataState }: ProvenStatesProps) {
  return (
    <section className="text-white lg:py-20 py-6 snap-start lg:h-screen z-0 flex flex-col justify-center">
      <div className="lg:space-y-16 space-y-6 my-auto">
        {/* Header */}
        <div className="text-center container mx-auto flex items-end justify-center lg:px-0 px-4">
          <div className="text-center space-y-4">
            <button className="bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
              <div className="px-10 py-2 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2">
                <span>Proven Stats</span>
              </div>
            </button>

            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              Data & Trust Metrics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Showcase your skills with AI-powered assessments and immutable
              certificates that boost credibility.
            </motion.p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 grid-cols-2 w-4xl mx-auto">
          {DataState.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#E0F2FE]/10 p-6 py-8 flex items-center space-x-6 rounded-3xl border border-white/10"
            >
              <div
                className="w-20 h-20 rounded-full shrink-0 flex items-center justify-center"
                style={{ background: slide.bgcolor }}
              >
                <img src={slide.icon} className="size-10" alt="icon" />
              </div>

              <div className="space-y-2">
                <h3 className="text-5xl font-semibold">
                  <AnimatedNumber to={slide.title} />+
                </h3>
                <p className="text-lg font-light">{slide.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
