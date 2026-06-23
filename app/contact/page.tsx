"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: initialService,
    budget: "medium",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormState((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const servicesList = [
    { id: "blockchain", label: "Blockchain & Crypto Solutions" },
    { id: "crm", label: "Custom CRM Setup" },
    { id: "odoo", label: "Odoo ERP customization" },
    { id: "erpnext", label: "ERPNext Deployment" },
    { id: "manufacturing-workflow", label: "Manufacturing workflow automation" },
    { id: "ecommerce", label: "Ecommerce platform" },
    { id: "aviation", label: "Aviation Control systems" },
    { id: "air-ticketing", label: "Air Ticketing GDS" },
    { id: "fintech", label: "Fintech solutions" },
    { id: "doc-management", label: "Document management systems" },
    { id: "hrms", label: "HRMS Portal" },
    { id: "ai-services", label: "AI & LLM Services" },
    { id: "lms", label: "Learning Management System (LMS)" },
    { id: "hospital-services", label: "Hospital management & EHR" },
    { id: "billing", label: "Subscription billing systems" },
    { id: "pos-integration", label: "POS Machine integration" },
    { id: "iot-solutions", label: "IoT hardware control" },
    { id: "other", label: "Other custom software" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
      {/* Contact Information Sidebar */}
      <div className="lg:col-span-4 space-y-8">
        <div className="space-y-4">
          <span className="text-sm font-semibold tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 uppercase">
            Let's Collaborate
          </span>
          <h2 className="text-3xl font-bold">Connect with Our Architects</h2>
          <p className="text-white/70 font-light leading-relaxed">
            Have an intricate backend setup or a hardware deployment plan? Drop us a query. Our software architects respond within 24 business hours.
          </p>
        </div>

        <div className="space-y-6">
          {/* Email Card */}
          <GlowCard glowColor="red" customSize className="p-6 flex items-start space-x-4 w-full">
            <span className="text-2xl mt-1">📧</span>
            <div>
              <h4 className="font-bold text-white">Email Inquiries</h4>
              <p className="text-sm text-cyan-400 font-light mt-1">Sales@qunatrixlabs.com</p>
              <p className="text-sm text-white/60 font-light">info@qunatrixlabs.com</p>
            </div>
          </GlowCard>

          {/* India Card */}
          <GlowCard glowColor="orange" customSize className="p-6 flex items-start space-x-4 w-full">
            <span className="text-2xl mt-1">🇮🇳</span>
            <div>
              <h4 className="font-bold text-white">India Office</h4>
              <p className="text-sm text-white/70 font-light mt-1">
                5th Floor, Cloud-9, Office no. S-538, Ghaziabad, Uttar Pradesh 201010
              </p>
              <p className="text-sm text-cyan-400 font-mono mt-1.5 font-semibold">+91-8448665756</p>
            </div>
          </GlowCard>

          {/* USA Card */}
          <GlowCard glowColor="blue" customSize className="p-6 flex items-start space-x-4 w-full">
            <span className="text-2xl mt-1">🇺🇸</span>
            <div>
              <h4 className="font-bold text-white">USA Office</h4>
              <p className="text-sm text-white/70 font-light mt-1">
                1510 clear circle garden, Houston, Texas 77047
              </p>
              <p className="text-sm text-cyan-400 font-mono mt-1.5 font-semibold">+1 (877) 209-6488</p>
            </div>
          </GlowCard>
        </div>
      </div>

      {/* Quote Form */}
      <GlowCard glowColor="purple" customSize className="lg:col-span-8 p-8 shadow-2xl relative overflow-hidden">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 space-y-6"
          >
            <span className="text-6xl block animate-bounce">🎉</span>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white">RFP Submitted Successfully!</h3>
              <p className="text-white/70 font-light max-w-md mx-auto">
                Thank you for reaching out, <span className="text-cyan-400 font-medium">{formState.name}</span>. One of our Senior Solutions Architects will contact you shortly.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-2 rounded-full text-sm font-semibold transition-all text-white"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/85 uppercase tracking-wider block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/35 transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/85 uppercase tracking-wider block">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/35 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/85 uppercase tracking-wider block">Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/35 transition-all"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/85 uppercase tracking-wider block">Primary Technology / Service</label>
                <select
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full bg-[#0E0C15] border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 text-white transition-all cursor-pointer"
                >
                  <option value="">Select a service category...</option>
                  {servicesList.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Budget Radio Groups */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-white/85 uppercase tracking-wider block">Estimated Project Scale</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: "low", label: "MVP Scale", range: "< $15k" },
                  { id: "medium", label: "Growth Build", range: "$15k - $50k" },
                  { id: "high", label: "Enterprise Stack", range: "$50k+" },
                ].map((tier) => (
                  <label
                    key={tier.id}
                    className={`border rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all ${
                      formState.budget === tier.id
                        ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={tier.id}
                      checked={formState.budget === tier.id}
                      onChange={() => setFormState({ ...formState, budget: tier.id })}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold">{tier.label}</span>
                    <span className="text-[11px] opacity-60 font-mono mt-1">{tier.range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/85 uppercase tracking-wider block">Project Scope & Requirements</label>
              <textarea
                required
                rows={5}
                placeholder="Please outline the functionalities you require. For example: Custom Odoo module to sync with Pax POS machine logs via MQTT broker..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/35 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:opacity-95 transition-all flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Synthesizing RFP...</span>
                </>
              ) : (
                <>
                  <span>⚡</span>
                  <span>Request Free Feasibility Analysis</span>
                </>
              )}
            </button>
          </form>
        )}
      </GlowCard>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A0914] min-h-screen text-white pt-28 pb-16 relative overflow-hidden">
        {/* Glowing background highlights */}
        <div className="absolute top-[20%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-15%] w-[45rem] h-[45rem] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl">
          <Suspense fallback={<div className="text-center py-20">Loading form context...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
