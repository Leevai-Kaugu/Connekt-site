"use client";

import { useEffect, useState } from "react";
import {
  BarChart3, ShieldCheck, Brain, Briefcase, CreditCard,
} from "lucide-react";
import Section from "../Section";
import OnboardingModal from "../OnboardingModal";
import LaptopMockup from "../LaptopMockup";
import PhoneMockup from "../PhoneMockup";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section id="home" className="!h-auto !overflow-visible">
      {/* Decorative circles */}
      <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
      <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl pointer-events-none" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
      <div className="hidden sm:block absolute z-[15] top-[-500px] right-[-500px] w-[1200px] h-[1200px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
      <div className="hidden sm:block absolute z-[15] bottom-[-500px] left-[-500px] w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out 3s infinite" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 xl:px-20 w-full">

        {/* ── CTA block ── */}
        <div className="flex flex-col items-center justify-center min-h-[85dvh] -mb-28 sm:-mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1F7A8C]/20 border border-[#1F7A8C]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#0A2A33]">Meet Connekt</span>
          </div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight max-w-4xl xl:max-w-6xl">
            Run a Smarter Lending Business with Connekt
            <br />
          </h1>
          <p className="mt-5 max-w-2xl xl:max-w-3xl text-base md:text-lg xl:text-xl text-[#0A2A33]/80">
            Loan origination, repayments, field agents, underwriting, analytics, and compliance — built for African lenders and proven through Fanaka’s own portfolio.

          </p>
          <div className="md:mt-8 flex flex-col sm:flex-row items-center md:gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="mt-8 px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
            >
              Get Started
            </button>
            <button 
              onClick={scrollToFeatures}
              className="mt-4 md:mt-8 px-8 py-3 rounded-full bg-[#BFDBF7] text-[#0A2A33] font-medium shadow-lg hover:scale-105 transition cursor-pointer"
            >
              Watch Platform Tour
            </button>
          </div>
        </div>

        {/* ── Laptop + Phone (desktop) ── */}
        <div className="hidden sm:block relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto pb-8 sm:pb-28 px-2 sm:px-4 xl:px-6">

          <LaptopMockup />

          {/* Phone — floats over bottom-right, above everything */}
          <div
            className="absolute bottom-10 sm:bottom-16 right-0 sm:right-2 xl:right-4 w-40 lg:w-44 xl:w-52 z-30"
            style={{ animation: "floatGentle 7s ease-in-out infinite" }}
          >
            <PhoneMockup />
          </div>

        </div>

        {/* ── Mobile device showcase (small screens only) ── */}
        <div className="sm:hidden w-screen -mx-6 pb-10 flex flex-col items-center gap-3">
          <div className="relative w-full overflow-hidden" style={{height:"460px"}}>

            {/* Slide 1: Customer phone */}
            <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileShow1 20s linear infinite", animationFillMode:"both"}}>
              <div className="w-48">
                <PhoneMockup mode="customer" />
              </div>
            </div>

            {/* Slide 2: Laptop */}
            <div className="absolute inset-0" style={{animation:"mobileShow2 20s linear infinite", animationFillMode:"both"}}>
              <div style={{
                position: "absolute",
                left: "50%",
                top: "42%",
                width: "800px",
                transform: "translate(-50%, -50%) scale(0.44)",
                transformOrigin: "center center",
              }}>
                <LaptopMockup />
              </div>
            </div>

            {/* Slide 3: Agent phone */}
            <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileShow3 20s linear infinite", animationFillMode:"both"}}>
              <div className="w-48">
                <PhoneMockup mode="agent" />
              </div>
            </div>

            {/* Slide 4: Laptop again */}
            <div className="absolute inset-0" style={{animation:"mobileShow4 20s linear infinite", animationFillMode:"both"}}>
              <div style={{
                position: "absolute",
                left: "50%",
                top: "32%",
                width: "800px",
                transform: "translate(-50%, -50%) scale(0.44)",
                transformOrigin: "center center",
              }}>
                <LaptopMockup />
              </div>
            </div>

          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]" style={{animation:"mobileDot1 20s linear infinite"}} />
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]" style={{animation:"mobileDot2 20s linear infinite"}} />
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]" style={{animation:"mobileDot3 20s linear infinite"}} />
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]" style={{animation:"mobileDot4 20s linear infinite"}} />
          </div>
        </div>

        {/* ── Mobile metric cards ── */}
        <div className="sm:hidden grid grid-cols-2 gap-3 w-full px-1 pb-10">
          <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">Analytics</p>
            </div>
            <p className="text-xs text-[#0A2A33]/60 mt-3 leading-snug flex-1 flex items-center">Real-time portfolio insights</p>
          </div>
          <div className="bg-[#0A2A33] border border-[#1F7A8C]/60 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 flex-shrink-0 text-[#BFDBF7]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#BFDBF7] uppercase tracking-wide leading-tight">FanakaIQ</p>
            </div>
            <div className="mt-3 flex items-center gap-1.5 flex-1">
              <span className="text-xs text-[#BFDBF7]/70">AI credit scoring & auto-disbursement active</span>
            </div>
          </div>
          <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">Applications</p>
            </div>
            <p className="text-xs text-[#0A2A33]/50 mt-3 leading-snug flex-1 flex items-center">Real-time disbursement trends, loan tracking & portfolio insights</p>
          </div>
          <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">100% Secure</p>
            </div>
            <p className="text-xs text-[#0A2A33]/60 mt-3 leading-snug flex-1 flex items-center">Bank-grade encryption & MFA</p>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#0A2A33]/60">End-to-end encrypted</span>
            </div>
          </div>
        </div>

      </div>
      <OnboardingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Section>
  );
}
