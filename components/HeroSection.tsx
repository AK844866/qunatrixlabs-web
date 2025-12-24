"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "./Header"; 

 
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-left shadow-2xl transition-all hover:border-white/20 ${className}`}
  >
    {children}
  </div>
);

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Set custom video speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 1) * 100; // horizontal movement range
      const y = (e.clientY / innerHeight - 1) * 100; // vertical movement range

      const layers =
        containerRef.current?.querySelectorAll<HTMLImageElement>(".float-img");
      layers?.forEach((layer, index) => {
        const speed = (index + 1) * 5; // different speed per image
        layer.style.transform = `translate(${x / speed}px, ${y / speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [flipped, setFlipped] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  return (
    <section
      className="relative z-0 h-screen w-full overflow-hidden snap-start "
      ref={containerRef}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover lg:aspect-video aspect-auto "
        src="/video/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0E0C15]/70 backdrop-blur-2xl"></div>

      {/* Floating Elements */}
      {/* <img
        src="/img/passport-hero-element.svg"
        alt="passport-hero-element"
        className="float-img lg:w-[15%] w-[25%] absolute top-[18%] left-[10%] z-10 transition-transform duration-200 ease-out lg:block hidden"
      /> */}

      <div className="absolute top-44 left-[10%] hidden xl:block animate-[bounce_4s_ease-in-out_infinite]">
        <GlassCard className="w-64 float-img transition-all duration-300 ease-out transform-gpu">
          <div className="flex -space-x-2 mb-4">
            <img src="/img/verified-community.webp" />
          </div>
          <h4 className="font-bold text-base mb-1 text-white">
            Verified Community
          </h4>
          <p className="text-sm text-white/80 leading-relaxed">
            A trusted space for startups and talent to work together.
          </p>
        </GlassCard>
      </div>

      {/* <motion.div
        className="float-img lg:w-[14%] w-[28%] absolute top-[16%] lg:right-[13%] right-[5%]  z-20 cursor-pointer   lg:block hidden "
        onMouseEnter={() => setFlipped3(true)}
        onMouseLeave={() => setFlipped3(false)}
      >
        <motion.img
          key={flipped3 ? "hover" : "default"} // 👈 makes Framer treat them as different elements
          src={
            flipped3
              ? "/img/job-hero-element-flip.webp" // hover image
              : "/img/job-hero-element.webp" // default image
          }
          alt="job-hero-element"
          // initial={{ rotateY: 0 }}
          animate={{ opacity: flipped3 ? 100 : 50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={` float-img transition-all duration-300 ease-out transform-gpu rounded-xl shadow-lg backface-hidden ${
            flipped && "w-[80%]"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div> */}

      {/* Card 2: Collaborate & Build (Top Right) */}
      <div className="absolute top-36 right-[10%] hidden xl:block animate-[pulse_5s_ease-in-out_infinite]">
        <GlassCard className="w-64 float-img transition-all duration-300 ease-out transform-gpu">
          <div className="flex justify-between items-center mb-4">
            <img src="/img/collaborate-build.webp" />
          </div>
          <h4 className="font-bold text-white text-base mb-1">
            Collaborate & Build
          </h4>
          <p className="text-sm text-white/80 leading-relaxed">
            Work together on real projects and shared goals.
          </p>
        </GlassCard>
      </div>

      {/* <motion.div
        className="lg:w-[21%] w-[44%] absolute lg:bottom-[18%] bottom-[14%] lg:left-[12%] left-[4%] z-20 cursor-pointer perspective-1000 lg:block hidden "
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <motion.img
          key={flipped ? "hover" : "default"} // 👈 makes Framer treat them as different elements
          src={
            flipped
              ? "/img/assessment-hero-element-flip.webp" // hover image
              : "/img/assessment-hero-element.webp" // default image
          }
          alt="assessment-hero-element"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className={` float-img object-contain    obtransition-all duration-300 ease-out transform-gpu rounded-xl shadow-lg backface-hidden ${
            flipped && ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div> */}

      {/* Card 3: Real Opportunities (Bottom Left) */}
      <div className="absolute bottom-24 left-[12%] hidden xl:block">
        <GlassCard className="w-70 float-img transition-all duration-300 ease-out transform-gpu">
          <h4 className="font-bold text-base text-white ">
            Real Opportunities
          </h4>
          <p className="text-sm text-white/80 mb-5">
            Hands-on work that leads to meaningful outcomes.
          </p>
          <img src="/img/real-opportunities.webp" />
        </GlassCard>
      </div>

      {/* <motion.div
        className="float-img  lg:w-[22%] w-[44%]  absolute lg:bottom-[18%] bottom-[10%] lg:right-[12%] right-[4%] z-20 transition-transform duration-200 ease-out lg:block hidden"
        onMouseEnter={() => setFlipped2(true)}
        onMouseLeave={() => setFlipped2(false)}
      >
        <motion.img
          key={flipped2 ? "hover" : "default"} // 👈 makes Framer treat them as different elements
          src={
            flipped2
              ? "/img/survey-hero-element-flip.webp" // hover image
              : "/img/survey-hero-element.webp" // default image
          }
          alt="survey-hero-element-flip"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped2 ? 180 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className={` float-img transition-all duration-300 ease-out transform-gpu rounded-xl shadow-lg backface-hidden ${
            flipped2 && " "
          }`}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div> */}

      {/* Card 4: Ecosystem Growth (Bottom Right) */}
      <div className="absolute bottom-16 right-[15%] hidden xl:block">
        <GlassCard className="w-72  overflow-hidden group/card float-img transition-all duration-300 ease-out transform-gpu">
          <div className="flex justify-between items-center mb-4">
            <img src="/img/ecosystem-growth.webp" />
          </div>

          <div className="">
            <h4 className="font-bold text-base text-white mb-1">
              Ecosystem Growth
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Grow through connections, collaboration, and learning.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white space-y-8 md:px-0 px-4">
        <div className="space-y-4">
          {/* <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="2xl:text-4xl xl:text-3xl text-3xl font-medium viga"
          >
            Should reflect that it belongs to boty Startup and Student
          </motion.h2> */}

          {/* <p className="text-base text-white/70">Powered by</p> */}
          <h2 className="2xl:text-7xl xl:text-6xl text-5xl  font-semibold">
            A Collaborative <br /> Ecosystem for <br />
            Startups and Talent
          </h2>
          <p className="2xl:text-2xl xl:text-lg text-base font-light">
            Build, collaborate, and grow — together
          </p>
        </div>

        <button className="bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
          <div className="px-10 py-3 flex items-center bg-black rounded-full 2xl:text-xl text-lg space-x-2">
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7h9v9" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
