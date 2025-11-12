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
              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-52 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-52 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden lg:h-60 h-52 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
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
              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-52 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden lg:h-60 h-52 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden lg:h-60 h-52 lg:w-96 w-80">
                <img
                  src="/img/home/image.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#1A1A24] text-white p-8 rounded-3xl shadow-lg lg:h-60 h-52 lg:w-96 w-80">
                {/* Quote Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold lg:text-lg text-base">
                    Emily R
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-300 ">
                    "Every time I use it, I feel more organized and focused than
                    ever!"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src="https://i.pravatar.cc/150?u=fake@pravatar.com" // replace with your image path
                    className="rounded-full object-cover size-12"
                  />

                  <div>
                    <h4 className="font-semibold text-base">Emily R</h4>
                    <p className="text-gray-400 text-sm">Graphic Designer</p>
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
