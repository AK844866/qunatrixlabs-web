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
        title="Build, Collaborate, and Grow with Verified Talent"
        subtitle="Skip the guesswork. Connect with verified talent and startups to collaborate, hire, execute projects, and unlock new growth opportunities."
        button=" Request a Demo"
        buttonTwo="Explore the Ecosystem"
        img="/img/employers/employers-hero.webp"
        tagline="Where startups find people, partners, and growth"
        extraline={true}

      />
      <WhyChoose />
      <Featured/>
      <HowItWorks />
      <Testimonials />
      <div className="snap-start h-auto">
        {/* <Blog /> */}
        <Footer />
      </div>
    </>
  );
}
