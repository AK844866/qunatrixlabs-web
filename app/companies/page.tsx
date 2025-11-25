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
        title="Hire Perfect Candidate Faster with Verified Skills"
        subtitle="Skip the guesswork — access verified candidate profiles with AI-powered skill reports, immutable certificates, and ATS integrations."
        button=" Request a Demo"
        buttonTwo="Search Candidates"
        img="/img/employers/employers-hero.webp"
        tagline="Hire smarter with verified skills."
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
