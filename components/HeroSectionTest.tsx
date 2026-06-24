import React from "react";
// import { ArrowUpRight } from 'lucide-react';

// Types for our GlassCard component props
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-left shadow-2xl transition-all hover:border-white/20 ${className}`}
  >
    {children}
  </div>
);

const QunatrixHero: React.FC = () => {
  return (
    <section className="h-screen snap-start bg-[#020203] text-white font-sans overflow-hidden relative selection:bg-blue-500/30">
      {/* --- BACKGROUND AMBIENCE --- */}
      {/* Deep Blue Glow (Top Left) */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      {/* Subtle Purple Glow (Bottom Right) */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[700px] h-[700px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      {/* --- HERO MAIN CONTENT --- */}
      <main className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-[80vh] text-center">
        {/* --- FLOATING CARDS (Desktop Only) --- */}

        {/* Card 1: Verified Community (Top Left) */}
        <div className="absolute top-12 left-[8%] hidden xl:block animate-[bounce_4s_ease-in-out_infinite]">
          <GlassCard className="w-64">
            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#151515] bg-zinc-800 shadow-inner"
                ></div>
              ))}
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-xs shadow-lg">
                ✓
              </div>
            </div>
            <h4 className="font-bold text-[15px] mb-1">Verified Community</h4>
            <p className="text-[12px] text-gray-400 leading-relaxed">
              A trusted space for startups and talent to work together.
            </p>
          </GlassCard>
        </div>

        {/* Card 2: Collaborate & Build (Top Right) */}
        <div className="absolute top-24 right-[10%] hidden xl:block animate-[pulse_5s_ease-in-out_infinite]">
          <GlassCard className="w-64">
            <div className="flex justify-between items-center mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-[#151515]"
                  ></div>
                ))}
              </div>
              <div className="text-[10px] font-bold bg-white/10 px-2.5 py-1 rounded-full text-blue-300 border border-white/5">
                Anaya
              </div>
            </div>
            <h4 className="font-bold text-[15px] mb-1">Collaborate & Build</h4>
            <p className="text-[12px] text-gray-400 leading-relaxed">
              Work together on real projects and shared goals.
            </p>
          </GlassCard>
        </div>

        {/* --- CENTER HEADLINE --- */}
        <div className="max-w-4xl mx-auto relative group">
          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
            A Collaborative Ecosystem <br />
            <span className="text-zinc-200">for Startups and Talent</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto">
            Build, collaborate, and grow — together
          </p>

          <button className="mt-12 px-10 py-4 bg-black border border-white/10 hover:border-blue-500/50 rounded-full inline-flex items-center gap-3 group transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 active:scale-95">
            <span className="font-semibold text-lg tracking-tight">
              Get Started
            </span>
            {/* <ArrowUpRight size={22} className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
          </button>
        </div>

        {/* Card 3: Real Opportunities (Bottom Left) */}
        <div className="absolute bottom-20 left-[12%] hidden xl:block">
          <GlassCard className="w-60">
            <h4 className="font-bold text-[15px] mb-2">Real Opportunities</h4>
            <p className="text-[12px] text-gray-400 mb-5">
              Hands-on work that leads to meaningful outcomes.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/10 rounded-full border border-white/10"></div>
              <div className="w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
          </GlassCard>
        </div>

        {/* Card 4: Ecosystem Growth (Bottom Right) */}
        <div className="absolute bottom-10 right-[15%] hidden xl:block">
          <GlassCard className="w-72 !p-0 overflow-hidden group/card">
            <div className="h-28 bg-gradient-to-t from-blue-600/30 to-transparent w-full relative">
              <svg
                viewBox="0 0 100 40"
                className="w-full h-full stroke-blue-400/80 fill-none"
              >
                <path
                  d="M0 35 Q 20 30 35 20 T 60 25 T 100 5"
                  strokeWidth="2.5"
                  className="drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                />
              </svg>
            </div>
            <div className="p-5 bg-white/[0.02]">
              <h4 className="font-bold text-[15px] mb-1">Ecosystem Growth</h4>
              <p className="text-[12px] text-gray-400 leading-relaxed">
                Grow through connections, collaboration, and learning.
              </p>
            </div>
          </GlassCard>
        </div>
      </main>

      {/* Small Ambient Glow for the "Get Started" button */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-24 bg-blue-500/20 blur-[80px] -z-0 pointer-events-none"></div>
    </section>
  );
};

export default QunatrixHero;
