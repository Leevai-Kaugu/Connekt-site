"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SolutionSection from "./components/sections/SolutionSection";
import PricingSection from "./components/sections/PricingSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import ProductsSection from "./components/sections/ProductsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const sections = ["home", "about", "solution", "pricing", "industries", "products"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { root, threshold: 0.2 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((ob) => ob?.disconnect());
  }, []);

  return (
    <>
      {/* Single floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Scroll container */}
      <div
        ref={scrollRef}
        data-scroll-container
        className="h-[100dvh] overflow-y-scroll overflow-x-hidden"
        style={{ scrollSnapType: "y proximity", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        <HeroSection />
        <AboutSection />
        <SolutionSection />
        <PricingSection />
        <IndustriesSection />
        <ProductsSection />
      </div>


      {/* Animations */}
      <style jsx global>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%   { transform: translateY(0px) translateX(0px); }
          50%  { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes floatGentle {
          0%   { transform: translateY(0px) translateX(0px) scale(1); }
          50%  { transform: translateY(-12px) translateX(8px) scale(1.04); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes mobileSlideOut {
          /* Laptop: hold → wind-up → shoot left → wait → enter cleanly after phone is gone */
          0%   { opacity: 1; transform: translateX(0); }
          40%  { opacity: 1; transform: translateX(0); }
          42%  { opacity: 1; transform: translateX(17%); }
          49%  { opacity: 0; transform: translateX(-105%); }
          50%  { opacity: 0; transform: translateX(105%); }
          95%  { opacity: 0; transform: translateX(105%); }
          99%  { opacity: 1; transform: translateX(-2%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes mobileSlideIn {
          /* Phone: slide in with bounce → hold → exit fully before laptop returns */
          0%   { opacity: 0; transform: translateX(105%); }
          42%  { opacity: 0; transform: translateX(105%); }
          47%  { opacity: 1; transform: translateX(-4%); }
          51%  { opacity: 1; transform: translateX(0); }
          90%  { opacity: 1; transform: translateX(0); }
          92%  { opacity: 1; transform: translateX(4%); }
          95%  { opacity: 0; transform: translateX(-105%); }
          100% { opacity: 0; transform: translateX(-105%); }
        }
        @keyframes mobileSwapDot1 {
          0%,40%  { opacity: 1; transform: scale(1.2); }
          51%,90% { opacity: 0.3; transform: scale(1); }
          100%    { opacity: 1; transform: scale(1.2); }
        }
        @keyframes mobileSwapDot2 {
          0%,40%  { opacity: 0.3; transform: scale(1); }
          51%,90% { opacity: 1; transform: scale(1.2); }
          100%    { opacity: 0.3; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
