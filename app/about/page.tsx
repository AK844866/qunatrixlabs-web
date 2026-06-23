import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectionOther from "@/components/HeroSectionOther";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonial";
import Mission from "./Mission";
import Vision from "./Vision";
import WhyQunatrix from "./WhyQunatrix";
import OurObjectives from "./OurObjectives";
import WhyChoose from "./WhyChoose";

export const metadata: Metadata = {
  title: "About Us | Qunatrix Labs",
  description: "Qunatrix Labs is a premier IT consulting and development firm specializing in custom enterprise applications, Blockchain & crypto engineering, AI integrations, and IoT systems.",
  openGraph: {
    title: "About Us | Qunatrix Labs",
    description: "Qunatrix Labs is a premier IT consulting and development firm specializing in custom enterprise applications, Blockchain & crypto engineering, AI integrations, and IoT systems.",
    type: "website",
    url: "https://qunatrixlabs.com/about",
    siteName: "Qunatrix Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Qunatrix Labs",
    description: "Qunatrix Labs is a premier IT consulting and development firm specializing in custom enterprise applications, Blockchain & crypto engineering, AI integrations, and IoT systems.",
  }
};

export default function Employee() {
  return (
    <>
      <Header />
      <HeroSectionOther
        title="Qunatrix Labs - About us"
        subtitle="Qunatrix Labs is a premier IT consulting and development firm specializing in custom enterprise applications, Blockchain & crypto engineering, AI integrations, IoT systems, and bespoke industry software."
        subtitle2="We enable businesses to automate and scale faster, optimize custom manufacturing flows, integrate smart hardware/POS terminals, and deploy robust next-gen networks. Our engineering philosophy centers around speed, reliability, and code elegance."
        subtitle3="At our core, Qunatrix Labs is a client-first engineering firm. We construct state-of-the-art technological architectures to solve real operational bottlenecks."
        button="Explore Services"
        buttonTwo="Get in Touch"
        img="/img/about/about-us-hero.webp"
        extraline={false}
      />
      <Mission />
      <Vision />
      <WhyChoose />
      <WhyQunatrix />
      <OurObjectives />
      <Testimonials />
      <div className="snap-start h-auto">
        {/* <Blog /> */}
        <Footer />
      </div>
    </>
  );
}
