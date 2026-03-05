/*
 * Design: Dark Premium Agency — Hero Section
 * Full-width dark hero with gradient mesh background image
 * Bold headline, subheadline, dual CTAs, trust stats
 * Animated word-by-word reveal on load
 */

import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/hero-bg-4EbkCpe3EtXsBG3KnXyDxj.webp";

const stats = [
  { value: "50+", label: "Websites Delivered" },
  { value: "12", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3×", label: "Avg. Lead Increase" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[oklch(0.09_0.005_260/0.72)]" />

      {/* Extra gradient mesh blobs */}
      <div
        className="mesh-blob"
        style={{
          width: "600px",
          height: "600px",
          background: "oklch(0.70 0.17 162)",
          top: "-200px",
          left: "-200px",
        }}
      />
      <div
        className="mesh-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "oklch(0.55 0.15 200)",
          bottom: "0px",
          right: "-100px",
          opacity: 0.12,
        }}
      />

      <div className="container relative z-10 pt-28 pb-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`section-label mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Freelance Web Designer · Niche Business Specialist
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Websites That{" "}
            <span className="text-[oklch(0.70_0.17_162)]">Convert</span>{" "}
            Visitors Into Clients
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            I design conversion-focused websites tailored to specific industries — from law firms and churches to roofing companies and home services. Every pixel is built to generate leads.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#portfolio"
              className="btn-emerald px-8 py-4 rounded-full text-base font-bold text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-ghost-white px-8 py-4 rounded-full text-base font-semibold text-center"
            >
              Request a Free Consultation
            </a>
          </div>

          {/* Trust stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-extrabold text-[oklch(0.70_0.17_162)]">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 mt-1 font-[Space_Grotesk] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.09_0.005_260)] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-20">
        <span className="text-xs text-white font-[Space_Grotesk] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
