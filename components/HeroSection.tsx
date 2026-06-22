"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
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

    
 {/* Card 1: Collaborate & Build (Top Right) */}
      <div className="absolute 2xl:top-44 top-36 2xl:left-[10%] left-[8%] hidden xl:block 2xl:scale-100 scale-[90%]  ">
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

     

      {/* Card 2: Enterprise ERP & CRM */}
      <div className="absolute 2xl:top-36 top-32 2xl:right-[10%] right-[7%]   hidden xl:block 2xl:scale-100 scale-[90%]">
        <GlassCard className="w-64 float-img transition-all duration-300 ease-out transform-gpu">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">💼</span>
            <span className="text-xs bg-blue-500/20 text-blue-300 font-mono px-2 py-0.5 rounded border border-blue-500/30">Scalable</span>
          </div>
          <h4 className="font-bold text-white text-base mb-1">
            Odoo & ERP Next
          </h4>
          <p className="text-sm text-white/80 leading-relaxed">
            Tailored CRM, automated manufacturing workflows, and full-stack HRMS integrations.
          </p>
        </GlassCard>
      </div>

    

      {/* Card 3: Aviation & Air Ticketing */}
      <div className="absolute bottom-24 left-[12%] hidden xl:block 2xl:scale-100 scale-[90%]">
        <GlassCard className="w-64 float-img transition-all duration-300 ease-out transform-gpu">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">✈️</span>
            <span className="text-xs bg-indigo-500/20 text-indigo-300 font-mono px-2 py-0.5 rounded border border-indigo-500/30">Verticals</span>
          </div>
          <h4 className="font-bold text-base text-white mb-1">
            Aviation Systems
          </h4>
          <p className="text-sm text-white/80 leading-relaxed">
            High-performance air ticketing networks, baggage tracking, and reservation workflows.
          </p>
        </GlassCard>
      </div>

      

      {/* Card 4: AI & IoT Devices */}
      <div className="absolute bottom-16 right-[15%] hidden xl:block 2xl:scale-100 scale-[90%]">
        <GlassCard className="w-72 overflow-hidden group/card float-img transition-all duration-300 ease-out transform-gpu">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">🤖</span>
            <span className="text-xs bg-purple-500/20 text-purple-300 font-mono px-2 py-0.5 rounded border border-purple-500/30">Cognitive</span>
          </div>
          <div className="">
            <h4 className="font-bold text-base text-white mb-1">
              AI & IoT Devices
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Smart POS machine integrations, connected IoT device telemetry, and predictive model APIs.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white space-y-8 md:px-0 px-4">
        <div className="space-y-4">
          <span className="text-sm font-semibold tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20 uppercase">
            Next-Gen Software Development Studio
          </span>
          <h1 className="2xl:text-7xl xl:text-6xl text-4xl font-extrabold tracking-tight leading-tight pt-2">
            We Engineer High-Performance <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
              Custom Tech Solutions
            </span>
          </h1>
          <p className="2xl:text-xl xl:text-lg text-base font-light text-white/80 max-w-2xl mx-auto">
            From Blockchain & AI-powered models to custom ERPs, Odoo, IoT, and domain-specific aviation/hospital workflows.
          </p>
        </div>

        <Link
          href="/services"
          className="bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full transition duration-300 hover:shadow-[0_0_20px_#3b82f6]"
        >
          <div className="px-10 py-4 flex items-center bg-[#0C0A15] hover:bg-transparent transition-all rounded-full 2xl:text-xl text-lg space-x-2">
            <span>Explore Services</span>
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
        </Link>
      </div>
    </section>
  );
}
