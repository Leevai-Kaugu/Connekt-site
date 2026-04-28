"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SolutionSection from "./components/sections/SolutionSection";
import PricingSection from "./components/sections/PricingSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ProductsSection from "./components/sections/ProductsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const sections = ["home", "about", "solution", "pricing", "features", "products"];

    const getActive = () => {
      let best = sections[0];
      let bestOverlap = -Infinity;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const overlap = Math.min(root.clientHeight, rect.bottom) - Math.max(0, rect.top);
        if (overlap > bestOverlap) { bestOverlap = overlap; best = id; }
      }
      setActiveSection(best);
    };

    getActive();
    root.addEventListener("scroll", getActive, { passive: true });
    return () => root.removeEventListener("scroll", getActive);
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
        <FeaturesSection />
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
        @keyframes mobileShow1 {
          0%        { opacity: 1; transform: translateX(0); }
          21%       { opacity: 1; transform: translateX(0); }
          23%       { opacity: 0; transform: translateX(-110%); }
          24%, 97%  { opacity: 0; transform: translateX(110%); }
          98.5%     { opacity: 1; transform: translateX(4%); }
          100%      { opacity: 1; transform: translateX(0); }
        }
        @keyframes mobileShow2 {
          0%, 24%   { opacity: 0; transform: translateX(110%); }
          25.5%     { opacity: 1; transform: translateX(4%); }
          27%       { opacity: 1; transform: translateX(0); }
          46%       { opacity: 1; transform: translateX(0); }
          48%       { opacity: 0; transform: translateX(-110%); }
          49%, 100% { opacity: 0; transform: translateX(110%); }
        }
        @keyframes mobileShow3 {
          0%, 49%   { opacity: 0; transform: translateX(110%); }
          50.5%     { opacity: 1; transform: translateX(4%); }
          52%       { opacity: 1; transform: translateX(0); }
          71%       { opacity: 1; transform: translateX(0); }
          73%       { opacity: 0; transform: translateX(-110%); }
          74%, 100% { opacity: 0; transform: translateX(110%); }
        }
        @keyframes mobileShow4 {
          0%, 74%   { opacity: 0; transform: translateX(110%); }
          75.5%     { opacity: 1; transform: translateX(4%); }
          77%       { opacity: 1; transform: translateX(0); }
          96%       { opacity: 1; transform: translateX(0); }
          98%       { opacity: 0; transform: translateX(-110%); }
          100%      { opacity: 0; transform: translateX(-110%); }
        }
        @keyframes mobileDot1 {
          0%, 21%   { opacity: 1; transform: scale(1.3); }
          24%, 97%  { opacity: 0.3; transform: scale(1); }
          100%      { opacity: 1; transform: scale(1.3); }
        }
        @keyframes mobileDot2 {
          0%, 24%   { opacity: 0.3; transform: scale(1); }
          27%, 46%  { opacity: 1; transform: scale(1.3); }
          49%, 100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes mobileDot3 {
          0%, 49%   { opacity: 0.3; transform: scale(1); }
          52%, 71%  { opacity: 1; transform: scale(1.3); }
          74%, 100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes mobileDot4 {
          0%, 74%   { opacity: 0.3; transform: scale(1); }
          77%, 96%  { opacity: 1; transform: scale(1.3); }
          100%      { opacity: 0.3; transform: scale(1); }
        }
        @keyframes showCustomer {
          0%, 40%   { opacity: 1; }
          45%, 90%  { opacity: 0; }
          95%, 100% { opacity: 1; }
        }
        @keyframes showAgent {
          0%, 40%   { opacity: 0; }
          45%, 90%  { opacity: 1; }
          95%, 100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
