"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMail, IconPhone, IconUser, IconX, IconCheck } from "@tabler/icons-react";

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenLeadModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenLeadModal", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2500);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission error. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-[#0F0C1B]/90 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden backdrop-blur-md"
          >
            {/* Glowing lights */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-600/20 blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-600/20 blur-[60px] pointer-events-none" />

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <IconX size={20} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Request a Feasibility Study
                  </h3>
                  <p className="text-xs text-white/60 font-light">
                    Enter your contact details and our team will get in touch with you shortly.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-white/50">Your Name</label>
                    <div className="relative">
                      <IconUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-white/50">Email Address *</label>
                    <div className="relative">
                      <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-white/50">Mobile Number *</label>
                    <div className="relative">
                      <IconPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <input
                        type="tel"
                        required
                        placeholder="+91 99999 99999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity text-white font-medium py-3.5 rounded-xl text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 space-y-4 relative z-10"
              >
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400">
                  <IconCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Request Submitted!</h3>
                <p className="text-sm text-white/60 font-light max-w-xs mx-auto">
                  We have forwarded your details to Qunatrix Labs. Our team will contact you soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
