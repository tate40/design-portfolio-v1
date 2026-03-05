/*
 * Design: Dark Premium Agency
 * Home page — assembles all sections in order:
 * Navbar → Hero → About → Portfolio → Why → Testimonials → CTA → Footer
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  // Initialize scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.005_260)]">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
