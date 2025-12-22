"use client";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ForSection from "@/components/ForSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solution";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import WhyUs from "@/components/WhyUs";
import VerifideHero from "@/components/HeroSectionTest";

export default function Home() {
  return (
    <>
      <Header />
      {/* <VerifideHero /> */}
      <HeroSection />

      <ForSection />

      <WhyUs />

      <Solutions />

      <Testimonials />

      <div className="snap-start h-auto">
        {/* <Blog /> */}
        <Footer />
      </div>
    </>
  );
}
