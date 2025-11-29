"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const solutionData = [
  {
    id: 1,
    img: "/img/home/profile-passport.svg",
    title: "Profile Passport",
    subtitle:
      "Your digital flex — a verified profile that proves who you are and what you can do. Skills, projects, and wins — all legit, all in one place.",
    buttonLink: "",
  },
  {
    id: 2,
    img: "/img/home/skill-check.svg",
    title: "Skill Check",
    subtitle:
      "No fluff, just proof. Test your skills, get verified, and show you’ve got the chops startups actually need.",
    buttonLink: "",
  },

  {
    id: 3,
    img: "/img/home/client-portal.svg",
    title: "Client Portal",
    subtitle:
      "Step into what’s next. Explore trending skills, unlock learning paths, and level up to stay startup-ready — all from one hub.",
    buttonLink: "",
  },

  {
    id: 4,
    img: "/img/home/opportunities-hub.svg",
    title: "Opportunities Hub",
    subtitle:
      "Find your next big move — internships, gigs, or full-time roles. Startups can discover pre-vetted talent, handle screening, interviews, and hiring — all in one smooth flow.",
    buttonLink: "",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0E0C15] text-white lg:py-20 py-6 snap-start lg:h-screen z-0 flex flex-col justify-center ">
      <div className=" lg:space-y-16 space-y-6 my-auto ">
        <div className="text-center  container mx-auto flex items-end justify-center lg:px-0 px-4">
          <div className="text-center space-y-4">
            <button className="bg-linear-to-r  from-[#0066FF] via-[#217AFF] to-[#A1BEFF] p-[1px] rounded-full  transition duration-300 hover:shadow-[0_0_20px_#3b82f6]">
              <div className="px-10 py-2 flex items-center bg-[#0E0C15] rounded-full lg:text-base text-sm space-x-2 ">
                <span>What people say About us</span>
              </div>
            </button>

            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-semibold"
            >
              Build Verified Credentials Employers Trust
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="xl:text-xl md:text-lg text-base text-white/80 font-light"
            >
              Showcase your skills with AI-powered assessments and immutable
              certificates that boost your credibility with recruiters
              worldwide.
            </motion.p>
          </div>
        </div>
        <div className="lg:space-y-6 space-y-4 w-full">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            className="text-xl font-medium text-gray-300"
          >
            <div className="flex flex-row lg:gap-6 gap-4 lg:pl-6 pl-4">
              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "Verifide made learning engaging and results-driven. I
                    landed my dream job 3 weeks faster"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/female/40.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base"> Ananya Desai</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                  alt="image"
                />
              </div>

              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "I completed 5 verified courses in 3 months through
                    Verifide. My LinkedIn profile views increased by 180%
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 ">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/72.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Sanjay Nair</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
                <img
                  src="/img/testi2.webp"
                  className="w-full h-full object-cover"
                  alt="testi2"
                />
              </div>

              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "Verifide's digital passport helped me showcase my skills to
                    recruiters instantly. I landed my dream job 3 weeks faster"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 ">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/29.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Rahul Kapoor</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
                <img
                  src="/img/testi3.webp"
                  className="w-full h-full object-cover"
                  alt="testi3"
                />
              </div>

              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "Startup quests gave me real-world experience. I moved from
                    junior to senior product manager in 4 months."
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Arjun Sharma</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
          <Marquee
            direction="right"
            gradient={false}
            speed={50}
            pauseOnHover={true}
            className="text-xl font-medium text-gray-300"
          >
            <div className="flex flex-row lg:gap-6 gap-4 lg:pl-6 pl-4">
              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "I received 12 job offers after completing Verifide's
                    learning quests. The verified credentials made my skills
                    instantly credible 1."
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 ">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/female/54.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Sneha Patel </h4>
                    <p className="text-gray-400 text-sm"> HR Director</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
                <img
                  src="/img/testi4.webp"
                  className="w-full h-full object-cover"
                  alt="testi4"
                />
              </div>

              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "Verifide's community feature connected me with 50+
                    designers across India. Recruiters now reach out to me
                    directly"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 ">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/24.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Vikram Reddy</h4>
                    <p className="text-gray-400 text-sm">Data Analyst</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                  alt="image"
                />
              </div>
              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "The verified learning paths ensured everyone had the exact
                    skills we needed. We launched our MVP 2 months faster"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 ">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/female/71.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base"> Kavya Iyer</h4>
                    <p className="text-gray-400 text-sm">UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden lg:h-60 h-48 lg:w-96 w-80">
                <img
                  src="/img/testi5.webp"
                  className="w-full h-full object-cover"
                  alt="testi5"
                />
              </div>

              <div className="bg-[#1A1A24] text-white lg:p-8 p-6 rounded-3xl shadow-lg lg:h-60 h-48 lg:w-96 w-80 flex flex-col justify-between">
                {/* Quote Section */}
                <div className="space-y-4">
                  <p className="lg:text-base text-sm text-gray-300 ">
                    "Verifide's verified credentials increased my freelance
                    rates by 35%. Clients trust my skills immediately"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 ">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/28.jpg" // replace with your image path
                    className="rounded-full object-cover size-12"
                    alt="avatars"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Rohan Gupta</h4>
                    <p className="text-gray-400 text-sm">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
