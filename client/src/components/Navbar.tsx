/*
 * Design: Dark Premium Agency — Frosted glass navbar
 * Sticky, transparent → frosted on scroll
 * Logo: "JD Studio" in Plus Jakarta Sans 700
 * Nav links: Space Grotesk 500
 * CTA: Emerald pill button
 */

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Why Me", href: "#why" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.09_0.005_260/0.92)] backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[oklch(0.70_0.17_162)] flex items-center justify-center">
            <span className="text-[oklch(0.09_0.005_260)] font-extrabold text-sm leading-none">JD</span>
          </div>
          <span className="font-bold text-lg text-white tracking-tight">
            JD Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[Space_Grotesk] text-sm font-500 text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-emerald px-5 py-2.5 rounded-full text-sm font-bold"
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.09_0.005_260/0.97)] backdrop-blur-xl border-t border-white/8 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white font-medium text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-emerald px-5 py-3 rounded-full text-sm font-bold text-center mt-2"
          >
            Start Your Project
          </a>
        </div>
      )}
    </header>
  );
}
