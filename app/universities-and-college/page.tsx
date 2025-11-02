import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectionOther from "@/components/HeroSectionOther"; 
import FeaturedforEmployee from "./Featured";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonial";
import HowItWorks from "./HowItWork";
import WhyChoose from "./WhyChoose";
import Featured from "./Featured";

export default function Employee() {
  return (
    <>
      <Header />
      <HeroSectionOther
        title="Campus-Grade Assessment & Placement Integration"
        subtitle="Equip your students with verified credentials, run bulk assessments, and boost placement outcomes with AI-powered reports and analytics."
        button="Partner with Verifide"
        buttonTwo="Request a Demo"
        img="/img/universities/universities-and-college-hero.png"
      />
      <WhyChoose />
      <Featured/>
      <HowItWorks />
      <Testimonials />
      <div className="snap-start h-auto">
        <Blog />
        <Footer />
      </div>
    </>
  );
}
