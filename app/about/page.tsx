import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectionOther from "@/components/HeroSectionOther";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonial";  
import Mission from "./Mission";
import Vision from "./Vision";
import WhyVerifide from "./WhyVerifide";
import OurObjectives from "./OurObjectives";
import WhyChoose from "./WhyChoose";

export default function Employee() {
  return (
    <>
      <Header />
      <HeroSectionOther
        title="Verifide - About us"
        subtitle="Verifide is a trusted startup ecosystem platform designed to connect verified individuals, emerging startups, and reputed institutions on a single, credible network.
"
        subtitle2="We enable startups to grow faster, individuals to build verified digital identities, and educational institutions to enhance their reputation through real-world engagement, collaboration, and innovation.
"
        subtitle3="At its core, Verifide is more than a platform — it’s a movement towards trust-driven growth in the global startup community."
        button="Login"
        buttonTwo="Sign up"
        img="/img/about/about-us-hero.webp"
        extraline={false}
      />
      <Mission />
      <Vision />
      <WhyChoose />
      <WhyVerifide />
      <OurObjectives />
      <Testimonials />
      <div className="snap-start h-auto">
        <Blog />
        <Footer />
      </div>
    </>
  );
}
