"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import {
  IconShieldCheck,
  IconMail,
  IconPlane,
  IconTruck,
  IconActivity,
  IconSettings,
  IconDevices,
  IconTrophy,
  IconExternalLink,
} from "@tabler/icons-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "blockchain" | "enterprise" | "logistics" | "iot";
  description: string;
  url: string;
  stack: string[];
  highlights: string[];
  icon: React.ComponentType<any>;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "verified",
    title: "Verified Credentials",
    subtitle: "verified.xyz",
    category: "blockchain",
    url: "https://verified.xyz",
    description: "Decentralized digital credentials passport, identity validation registry, and verifiable startup database using cryptographic security signatures.",
    stack: ["Next.js", "Solidity", "Ethereum", "Ethers.js", "Web3Auth"],
    highlights: ["25,000+ digital identity passports issued", "Gas-optimized ERC-721 smart contracts", "Secure third-party API verification"],
    icon: IconShieldCheck,
    image: "/img/case-studies/verified.png",
  },
  {
    id: "mailtrail",
    title: "Mailtrail Engine",
    subtitle: "mailtrail.io",
    category: "enterprise",
    url: "https://mailtrail.io",
    description: "High-throughput transaction email delivery backend with real-time log pipelines, SMTP configurations, and analytics trackers.",
    stack: ["Go", "React", "Rust", "PostgreSQL", "Redis"],
    highlights: ["Processes 15M+ transaction emails daily", "Under 100ms processing and queueing dispatch", "Interactive analytics graphs with CanvasJS"],
    icon: IconMail,
    image: "/img/case-studies/mailtrail.png",
  },
  {
    id: "kendrag",
    title: "KendraG Aviation Manifest",
    subtitle: "Private Charter Logistics",
    category: "logistics",
    url: "#",
    description: "Specialized aircraft manifest log, private charter fleet coordinator, and pilot roster compliance scheduling application.",
    stack: ["Python", "Django", "React", "Tailwind CSS", "AWS"],
    highlights: ["Optimized manifests for 12 charter fleets", "Instant PDF load calculations", "FAA audit-ready compliance reporter"],
    icon: IconPlane,
    image: "/img/case-studies/kendrag.png",
  },
  {
    id: "eliteprime",
    title: "Elite Prime Logistics",
    subtitle: "eliteprime-logistics.com",
    category: "logistics",
    url: "https://www.eliteprime-logistics.com",
    description: "Cross-border logistics tracking database, automated route optimization engine, and dispatcher cargo reservation CRM.",
    stack: ["Node.js", "React", "Google Maps API", "PostgreSQL", "Docker"],
    highlights: ["Dynamic GPS route updates every 3 seconds", "Automated broker load match matching", "30% reduction in average container dwell time"],
    icon: IconTruck,
    image: "/img/case-studies/eliteprime.png",
  },
  {
    id: "eyision",
    title: "Eyision Clinical Board",
    subtitle: "eyision.com",
    category: "iot",
    url: "https://www.eyision.com",
    description: "Hospital management diagnostics logs, patient health files, real-time doctor dashboards, and medical video streaming.",
    stack: ["React", "Fastify", "MongoDB", "WebRTC", "HL7 Standards"],
    highlights: ["HL7 compliance integration with zero leaks", "RTC peer-to-peer clinical teleconsultations", "99.99% clinical database uptime"],
    icon: IconActivity,
    image: "/img/case-studies/eyision.png",
  },
  {
    id: "diarchgo",
    title: "Diarchgo ERP & Assembly",
    subtitle: "diarchgo.com",
    category: "enterprise",
    url: "https://www.diarchgo.com",
    description: "Modular factory supply workflow automation, Bill of Materials calculation engine, and warehouse inventory scheduler.",
    stack: ["Python", "Odoo", "ERPNext", "PostgreSQL", "Frappe"],
    highlights: ["Real-time supply sync with barcode scanners", "Dynamic cost calculation for 5,000+ items", "Custom inventory forecasts using simple stats"],
    icon: IconSettings,
    image: "/img/case-studies/diarchgo.png",
  },
  {
    id: "gold-manufacturing",
    title: "Gold Manufacturing ERP",
    subtitle: "Industrial Manufacturing Workflow",
    category: "enterprise",
    url: "http://101.53.146.19/#login",
    description: "Custom enterprise manufacturing ERP for gold tracking, refining processes, stock management, and purity verification logs.",
    stack: ["Next.js", "Odoo", "PostgreSQL", "MQTT", "Python"],
    highlights: ["Automated refining workflow and purity audits", "Real-time stock ledger for gold bars", "Weighing scale hardware integration via serial protocol"],
    icon: IconSettings,
    image: "/img/case-studies/gold_manufacturing.png",
  },
  {
    id: "eyeaddon",
    title: "EyeAddon Telemetry",
    subtitle: "eyeaddon.ddns.net",
    category: "iot",
    url: "https://eyeaddon.ddns.net",
    description: "Telemetry data receiver and dynamic device control dashboard with surveillance feed overlays.",
    stack: ["Node.js", "MQTT", "WebSockets", "Raspberry Pi", "Python"],
    highlights: ["MQTT message latency kept under 5ms", "Dynamic hardware terminal configuration", "Live hardware health telemetry"],
    icon: IconDevices,
    image: "/img/case-studies/eyeaddon.png",
  },
  {
    id: "dream11",
    title: "Dream11 Sync Engine",
    subtitle: "Fantasy Match Synchronizer",
    category: "blockchain",
    url: "http://173.208.188.172:8080/",
    description: "High-performance match squad synchronizer and live scoring ledger consuming third-party soccer APIs.",
    stack: ["Next.js", "Spring Boot", "Redis", "RabbitMQ", "PostgreSQL"],
    highlights: ["Syncs 1,200+ player states concurrently", "Under 1s updates during match highlights", "Fully automated fallback match scheduler"],
    icon: IconTrophy,
    image: "/img/case-studies/dream11.png",
  },
  {
    id: "aiirtkt",
    title: "AIIRTKT Flight Portal",
    subtitle: "aiirtkt.com",
    category: "logistics",
    url: "https://www.aiirtkt.com",
    description: "High-performance flight booking and reservation engine connected to global GDS platforms with automated ticketing queues.",
    stack: ["Next.js", "Node.js", "Sabre API", "PostgreSQL", "Redis"],
    highlights: ["Real-time GDS ticket issuing queue", "Dynamic fare markup engine", "Automated PDF boarding pass generator"],
    icon: IconPlane,
    image: "/img/case-studies/aiirtkt.png",
  },
];

const categories = [
  { id: "all", label: "All Cases" },
  { id: "blockchain", label: "Blockchain & Web3" },
  { id: "enterprise", label: "Enterprise ERP/CRM" },
  { id: "logistics", label: "Logistics & Transport" },
  { id: "iot", label: "IoT & Healthcare" },
];

const categoryGlow: Record<string, 'blue' | 'purple' | 'green' | 'cyan'> = {
  blockchain: 'purple',
  enterprise: 'blue',
  logistics: 'green',
  iot: 'cyan',
};

export default function CaseStudiesContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCases, setFilteredCases] = useState<CaseStudy[]>(caseStudies);

  useEffect(() => {
    let result = caseStudies;
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim() !== "") {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredCases(result);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="bg-[#0A0914] min-h-screen text-white pt-28 pb-16 relative overflow-hidden">
        {/* Glowing background elements */}
        <div className="absolute top-[15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[15%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 space-y-12 relative z-10">
          {/* Page Title */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                Case Studies
              </span>
            </h1>
            <p className="text-lg text-white/70 font-light">
              Discover how Qunatrix Labs engineers robust architectures, resolves complex data synchronization pipelines, and designs enterprise workflows.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/5 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/40 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">🔍</span>
            </div>
          </div>

          {/* Case Studies Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCases.map((project) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                  >
                    <GlowCard
                      glowColor={categoryGlow[project.category] ?? 'blue'}
                      customSize
                      className="flex flex-col justify-between h-full group overflow-hidden"
                    >
                      <div>
                        {/* Card Image Banner */}
                        <div className="relative h-52 w-full overflow-hidden bg-white/5">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0914] via-[#0A0914]/20 to-transparent" />
                          
                          {/* Visit Website button floating on top right of the image */}
                          {project.url !== "#" && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="absolute top-4 right-4 z-20 text-white/80 hover:text-cyan-400 transition-colors p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:border-cyan-500/30" 
                              title="Visit Website"
                            >
                              <IconExternalLink size={18} />
                            </a>
                          )}

                          {/* Floating Category Tag on top left */}
                          <span className="absolute top-4 left-4 z-20 text-[10px] uppercase font-mono tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-cyan-400">
                            {project.category}
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 space-y-6 pt-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                              <IconComponent size={24} />
                            </div>
                            <div className="space-y-0.5">
                              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">{project.title}</h3>
                              <p className="text-xs text-cyan-400 font-mono tracking-wider font-semibold">{project.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-white/70 font-light leading-relaxed min-h-[60px]">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.stack.map((tech) => (
                              <span key={tech} className="text-[11px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded text-white/60">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="px-8 pb-8">
                        <div className="pt-6 border-t border-white/5 space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">Key Accomplishments</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                              <li key={index} className="text-xs text-white/80 font-light flex items-start space-x-2">
                                <span className="text-cyan-400 font-bold mt-0.5">✦</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty Results Fallback */}
          {filteredCases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 space-y-4"
            >
              <span className="text-5xl block">🔎</span>
              <h3 className="text-2xl font-bold">No projects matching found</h3>
              <p className="text-white/60 font-light">
                Try searching with different terms or reset your category filter.
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center space-y-6 mt-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[#0A0914]/40 z-0" />
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to build your success story?</h2>
              <p className="text-white/70 font-light text-sm">
                Discuss custom software solutions, backend synchronization flows, or hardware terminal setup with our expert engineering team.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 rounded-full font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:opacity-90 transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
