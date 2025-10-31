"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // add bg after scroll
      setIsScrolled(currentScrollY > 50);

      // hide header while scrolling down, show on scroll up or stop
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // show again after scroll stops
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="w-full relative">
      {/* HEADER */}
      <header
        className={`fixed w-screen top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0E0C15]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex justify-between items-center py-4 lg:py-6 lg:container lg:mx-auto px-4 w-full">
          {/* Logo */}
          <div>
            <img src="/img/verifide-logo.svg" className="lg:w-40 w-32" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-white/70">
            <a className="text-white font-medium cursor-pointer">Home</a>
            <a className="hover:text-white transition">Employees</a>
            <a className="hover:text-white transition">Employers</a>
            <a className="hover:text-white transition">Institutions</a>
            <a className="hover:text-white transition">Students</a>
            <a className="hover:text-white transition">Blog</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-6">
            <button className="cursor-pointer text-white/80 hover:text-white transition">
              Login
            </button>
            <button className="bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition">
              Sign in
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden block p-2 bg-white/5 rounded-md text-white hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0E0C15] text-white z-50 p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex justify-between items-center mb-8 w-full">
          <img src="/img/verifide-logo.svg" className="w-32" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-6 text-white/80 w-full">
          <a onClick={() => setMenuOpen(false)} className="hover:text-white">
            Home
          </a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-white">
            Employees
          </a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-white">
            Employers
          </a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-white">
            Institutions
          </a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-white">
            Students
          </a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-white">
            Blog
          </a>
        </nav>

        <div className="mt-10 flex flex-col gap-3 w-full">
          <button className="w-full text-center px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition">
            Login
          </button>
          <button className="w-full bg-linear-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] px-4 py-2 rounded-full font-medium hover:opacity-90 transition">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
