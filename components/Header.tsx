"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  Layers,
  BookOpen,
  Users,
  Mail,
  Sparkles,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Layers },
  { name: "Case Studies", url: "/case-studies", icon: BookOpen },
  { name: "About", url: "/about", icon: Users },
  { name: "Contact", url: "/contact", icon: Mail },
  { name: "Get a Quote", url: "/contact", icon: Sparkles, highlight: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── LOGO (always visible, top-left) ───────────────────── */}
      <div className="fixed top-5 left-6 z-50">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl tracking-wider text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text font-black">
            QUNATRIX
          </span>
          <span className="text-white/70 font-light text-xs bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
            LABS
          </span>
        </Link>
      </div>

      {/* ── HAMBURGER (mobile only, top-right) ────────────────── */}
      <div className="fixed top-4 right-4 z-50 sm:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 bg-white/5 border border-white/10 rounded-md text-white hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ── TUBELIGHT NAVBAR (fixed, centers itself) ──────────── */}
      <NavBar items={navItems} />

      {/* ── MOBILE OVERLAY ────────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 sm:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── MOBILE SLIDE MENU ─────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0E0C15] text-white z-50 p-6 transition-transform duration-300 sm:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="flex items-center space-x-1.5 font-bold text-lg tracking-wider"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text font-black">
              QUNATRIX
            </span>
            <span className="text-white/80 font-light text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full border border-white/10">
              LABS
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6l-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-5 text-white/80">
          {navItems.slice(0, 5).map(({ name, url, icon: Icon }) => (
            <Link
              key={name}
              href={url}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 text-sm font-medium transition ${
                pathname === url ? "text-white" : "hover:text-white"
              }`}
            >
              <Icon size={17} strokeWidth={2} />
              {name}
            </Link>
          ))}
        </nav>

        <div className="mt-10">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] px-4 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
