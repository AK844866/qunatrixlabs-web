"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconServer,
  IconCoin,
  IconDatabase,
  IconSettings,
  IconShoppingCart,
  IconPlaneDeparture,
  IconTicket,
  IconCreditCard,
  IconFileText,
  IconUsers,
  IconBrain,
  IconSchool,
  IconBuildingHospital,
  IconReceipt2,
  IconDeviceDesktop,
  IconCpu,
  IconBuildingFactory2,
  IconMessageCircle,
} from "@tabler/icons-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "enterprise" | "blockchain" | "industries" | "integrations";
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
}

const serviceItems: ServiceItem[] = [
  // Enterprise & ERP
  {
    id: "crm",
    title: "Custom CRM Solutions",
    category: "enterprise",
    icon: IconUsers,
    description: "Tailored Customer Relationship Management platforms designed to optimize lead conversion, client pipeline tracking, and automated service reminders.",
    features: ["Interactive dashboards", "Sales pipeline visualizer", "Automated email sequences", "Unified customer timelines"],
  },
  {
    id: "odoo",
    title: "Odoo Custom Development",
    category: "enterprise",
    icon: IconSettings,
    description: "Certified Odoo implementations customized to match your business processes exactly. Module creation, data migration, and third-party integrations.",
    features: ["Bespoke Odoo apps", "API synchronization", "Custom report printouts", "Version migration"],
  },
  {
    id: "erpnext",
    title: "ERP Next Integration",
    category: "enterprise",
    icon: IconDatabase,
    description: "Rapidly deploy ERPNext to unify manufacturing, distribution, financials, and CRM. Lightweight, open-source, and highly robust.",
    features: ["Frappe custom scripts", "Automated stock journals", "Accounting ledger configs", "Custom print templates"],
  },
  {
    id: "hrms",
    title: "HRMS Portals",
    category: "enterprise",
    icon: IconUsers,
    description: "Human Resource Management Systems to organize payroll, tracking timesheets, handling leave requests, and tracking candidate recruitment.",
    features: ["Automated payroll calculators", "Biometric terminal sync", "Employee self-service portals", "Interactive recruitment funnel"],
  },
  {
    id: "doc-management",
    title: "Document Management Solutions",
    category: "enterprise",
    icon: IconFileText,
    description: "Secure, version-controlled enterprise cloud storage for files, including digital signing workflows, document OCR, and granular user roles.",
    features: ["Granular access permissions", "Full-text search indexing", "Crypto signature signing", "Automatic change tracking"],
  },
  {
    id: "manufacturing-workflow",
    title: "Manufacturing Workflows",
    category: "enterprise",
    icon: IconBuildingFactory2,
    description: "Automate supply runs, manage Bill of Materials (BOM), trace raw materials, and optimize shop-floor scheduling for industrial businesses.",
    features: ["Multi-level BOM management", "Machine loading schedules", "Quality control loops", "Real-time cost tracking"],
  },

  // Blockchain & AI
  {
    id: "blockchain",
    title: "Blockchain Architecture",
    category: "blockchain",
    icon: IconServer,
    description: "Private and public blockchain systems. Experience with Hyperledger, Ethereum, EVM layers, smart contract optimization, and consensus protocols.",
    features: ["Smart contract security audits", "Token economics design", "Cross-chain bridge setup", "Private consortium networks"],
  },
  {
    id: "crypto",
    title: "Crypto Payment Rails & Wallets",
    category: "blockchain",
    icon: IconCoin,
    description: "Integrate crypto merchant services, build secure multi-signature custodian wallets, and deploy automated trading bots or liquidity scripts.",
    features: ["Custodial & non-custodial apps", "Instant crypto swap routes", "Fiat-on/off ramps", "Automated settlement ledgers"],
  },
  {
    id: "ai-services",
    title: "AI-Based Applications",
    category: "blockchain",
    icon: IconBrain,
    description: "Harness LLMs, machine learning models, retrieval-augmented generation (RAG), and neural classifiers to build predictive tools and cognitive bots.",
    features: ["Custom RAG vector search", "Predictive churn analytics", "Automated document summary bots", "Computer vision model training"],
  },
  {
    id: "iot-solutions",
    title: "IoT Devices Solution",
    category: "blockchain",
    icon: IconCpu,
    description: "Write firmwares, configure event-driven telemetry message brokers, and build dashboards to monitor and control remote physical hardware.",
    features: ["MQTT/Websocket connections", "Low-power hardware firmware", "Predictive maintenance notifications", "Visual device mesh networks"],
  },

  // Industry Verticals
  {
    id: "ecommerce",
    title: "E-Commerce Engines",
    category: "industries",
    icon: IconShoppingCart,
    description: "High-performance headless e-commerce stores equipped with elastic search catalogs, tailored checkout tunnels, and automated stock triggers.",
    features: ["Headless API storefronts", "Multi-vendor platform setup", "Dynamic price algorithms", "Abandoned cart recoverers"],
  },
  {
    id: "aviation",
    title: "Aviation Control Systems",
    category: "industries",
    icon: IconPlaneDeparture,
    description: "Complex software for passenger manifest logs, hangar scheduling, pilot logs, baggage routing telemetry, and aircraft maintenance reminders.",
    features: ["Real-time terminal maps", "Flight crew rosters", "Hangar asset allocators", "Compliance safety tracking"],
  },
  {
    id: "air-ticketing",
    title: "Air Ticketing GDS Services",
    category: "industries",
    icon: IconTicket,
    description: "Connect to Sabre, Amadeus, or Travelport. Build modern reservation interfaces, flight fare search indexes, and ticket issuing queues.",
    features: ["Multi-GDS search engines", "Dynamic seat map rendering", "Automated ticket cancellations", "Fare markup engines"],
  },
  {
    id: "fintech",
    title: "Fintech Solutions",
    category: "industries",
    icon: IconCreditCard,
    description: "Advanced money transfer networks, micro-lending portals with automated credit scores, escrow engines, and secure Open Banking APIs.",
    features: ["Secure KYC verification flow", "Interest rate schedules", "Multi-currency accounts", "Fraud pattern detectors"],
  },
  {
    id: "lms",
    title: "LMS & Learning Portals",
    category: "industries",
    icon: IconSchool,
    description: "Next-gen Learning Management Systems. Interactive course builders, quiz generators, video course portals, and custom PDF certificate issuing.",
    features: ["Interactive video tracks", "Automatic grading scripts", "SCORM compliance standard", "Certificate generation engines"],
  },
  {
    id: "hospital-services",
    title: "Hospital & EHR Systems",
    category: "industries",
    icon: IconBuildingHospital,
    description: "Electronic Health Records (EHR) platforms, patient appointment schedules, OPD logs, digital pharmacy prescriptions, and diagnostic lab reports.",
    features: ["HL7 compliance ready", "Pharmacy stock trackers", "Doctor schedule boards", "Secure patient portals"],
  },

  // Integrations
  {
    id: "billing",
    title: "Automated Billing Engines",
    category: "integrations",
    icon: IconReceipt2,
    description: "Custom subscription billing engines, dynamic invoice templates, automatic payment retries, and local country tax calculator configs.",
    features: ["Dynamic subscription logic", "PDF invoice generators", "Dunning auto-retry system", "GST/VAT taxation engines"],
  },
  {
    id: "pos-integration",
    title: "POS Machine Integrations",
    category: "integrations",
    icon: IconDeviceDesktop,
    description: "Bridges web-based checkouts with physical POS hardware. Sync swipe cards, receipt printers, customer displays, and cash drawers in real time.",
    features: ["Verifone & Pax API bridges", "USB/Serial device drivers", "Offline cache synchronizer", "Interactive checkout views"],
  },
];

const categories = [
  { id: "all", label: "All Tech" },
  { id: "enterprise", label: "Enterprise & ERP" },
  { id: "blockchain", label: "Blockchain & AI" },
  { id: "industries", label: "Industry Verticals" },
  { id: "integrations", label: "Integrations" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<ServiceItem[]>(serviceItems);

  useEffect(() => {
    let result = serviceItems;
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim() !== "") {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredItems(result);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="bg-[#0A0914] min-h-screen text-white pt-28 pb-16 relative overflow-hidden">
        {/* Subtle glowing elements */}
        <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 space-y-12 relative z-10">
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                Services & Development
              </span>
            </h1>
            <p className="text-lg text-white/70 font-light">
              Explore our extensive technology portfolio. From deep-tech blockchain ledgers to specialized enterprise workflows, we code with precision.
            </p>
          </div>

          {/* Search and Category Filter controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl">
            {/* Tabs */}
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

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/40 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">🔍</span>
            </div>
          </div>

          {/* Grid layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={service.id}
                    className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 rounded-3xl flex flex-col justify-between hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={24} />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/70 font-light leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {service.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium bg-white/5 border border-white/5 px-2 py-0.5 rounded text-white/80"
                          >
                            ✓ {feat}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="mt-4 flex items-center justify-center space-x-2 text-xs font-semibold bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white hover:text-white py-2 rounded-full border border-white/10 hover:border-transparent transition-all w-full"
                      >
                        <span>Request Customization</span>
                        <span>➔</span>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty search results fallback */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 space-y-4"
            >
              <span className="text-5xl block">🔎</span>
              <h3 className="text-2xl font-bold">No tech matching found</h3>
              <p className="text-white/60 font-light">
                Try searching with different terms or reset your category selection.
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center space-y-6 mt-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[#0A0914]/40 z-0" />
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold">Need a bespoke solution not listed here?</h2>
              <p className="text-white/70 font-light text-sm">
                Our engineering team has custom integration experience across legacy banking cores, raw serial protocols, custom firmware compilers, and dynamic logistics trackers.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 rounded-full font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:opacity-90 transition-all"
              >
                Discuss Custom Architecture
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
