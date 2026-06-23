import { Metadata } from "next";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ForSection from "@/components/ForSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solution";
import Testimonials from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "Qunatrix Labs | Enterprise Software, Web3 & IoT Engineering",
  description: "Qunatrix Labs engineers robust custom software solutions, high-throughput backend pipelines, IoT systems, and verified Web3 decentralized credential registries.",
  openGraph: {
    title: "Qunatrix Labs | Enterprise Software, Web3 & IoT Engineering",
    description: "Qunatrix Labs engineers robust custom software solutions, high-throughput backend pipelines, IoT systems, and verified Web3 decentralized credential registries.",
    type: "website",
    url: "https://qunatrixlabs.com",
    siteName: "Qunatrix Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qunatrix Labs | Enterprise Software, Web3 & IoT Engineering",
    description: "Qunatrix Labs engineers robust custom software solutions, high-throughput backend pipelines, IoT systems, and verified Web3 decentralized credential registries.",
  }
};

export default function Home() {
  return (
    <>
      <Header />
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
