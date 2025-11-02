import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectionOther from "@/components/HeroSectionOther";
import FeaturedforEmployee from "./FeaturedforEmployee";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonial";
import HowItWorks from "./HowItWork";
import WhyChoose from "./WhyChoose";

export default function Employee() {
  return (
    <>
      <Header />
      <HeroSectionOther
        title="Build Verified Credentials Employers Trust"
        subtitle="Showcase your skills with AI-powered assessments and immutable certificates that boost your credibility with recruiters worldwide."
        button="Create Your Profile"
        buttonTwo="Browse Assessments"
        img="./img/employee/employees-hero.png"
      />
      <WhyChoose />
      <FeaturedforEmployee />
      <HowItWorks />
      <Testimonials />
      <div className="snap-start h-auto">
        <Blog />
        <Footer />
      </div>
    </>
  );
}
