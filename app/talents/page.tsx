import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectionOther from "@/components/HeroSectionOther";
import FeaturedforEmployee from "./FeaturedforEmployee";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonial";
import HowItWorks from "./HowItWork";
import WhyChoose from "./WhyChoose";
import ProvenStates from "@/components/ProvenStates";

 

const DataMatric = [
  {
    id: 1,
    title: 10000,
    subtitle: `Verified Profiles`,
    icon: "/img/employee/verified-profiles.svg",
    bgcolor: "#FED2F1",
  },
  {
    id: 2,
    title: 200,
    subtitle: `Companies Trust Verifide`,
    icon: "/img/employee/companies-trust-verifide.svg",
    bgcolor: "#F7FD8E",
  },

  {
    id: 3,
    title: 35,
    subtitle: `Better Placement Outcomes`,
    icon: "/img/employee/better-placement-outcomes.svg",
    bgcolor: "#ACA0F8",
  },
  {
    id: 4,
    title: 20000,
    subtitle: `Verifide Active Users Profiles`,
    icon: "/img/employee/active-users.svg",
    bgcolor: "#51A280",
  },
];

export default function Employee() {
  return (
    <>
      <Header />
      <HeroSectionOther
        title="Build Verified Credentials Employers Trust"
        subtitle="Showcase your skills with AI-powered assessments and immutable certificates that boost your credibility with recruiters worldwide."
        button="Create Your Profile"
        buttonTwo="Browse Assessments"
        img="./img/employee/employees-hero.webp"
      />
      <WhyChoose />
      <FeaturedforEmployee />
      <HowItWorks />
      <Testimonials />
      <ProvenStates DataState={DataMatric} />
      <div className="snap-start h-auto">
        <Blog />
        <Footer />
      </div>
    </>
  );
}
