"use client";

import { useState } from "react";
import {
  BarChart3, ShieldCheck, Brain, CreditCard,
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
    <Section id="home" className="!h-auto !min-h-[100dvh] !overflow-visible">
      {/* Decorative circles */}
      <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] aspect-square shrink-0 rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none sm:hidden" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
      <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] aspect-square shrink-0 rounded-full bg-white/20 blur-3xl pointer-events-none sm:hidden" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
      <div className="absolute z-0 top-[-230px] right-[-230px] w-[640px] h-[640px] sm:top-[-250px] sm:right-[-250px] sm:w-[840px] sm:h-[840px] md:top-[-320px] md:right-[-320px] md:w-[1060px] md:h-[1060px] lg:top-[-450px] lg:right-[-450px] lg:w-[1380px] lg:h-[1380px] aspect-square shrink-0 rounded-full pointer-events-none sm:hidden" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
      <div className="absolute z-0 bottom-[-220px] left-[-220px] w-[620px] h-[620px] sm:bottom-[-240px] sm:left-[-240px] sm:w-[760px] sm:h-[760px] md:bottom-[-300px] md:left-[-270px] md:w-[980px] md:h-[980px] lg:bottom-[-500px] lg:left-[-370px] lg:w-[1300px] lg:h-[1300px] aspect-square shrink-0 rounded-full pointer-events-none sm:hidden" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out 3s infinite" }} />

      <div className="hidden sm:block absolute z-0 top-[-180px] right-[-180px] md:top-[-230px] md:right-[-230px] lg:top-[-280px] lg:right-[-280px] w-[520px] h-[520px] md:w-[700px] md:h-[700px] lg:w-[860px] lg:h-[860px] aspect-square rounded-full pointer-events-none" style={{ border: "2px solid rgba(255,255,255,0.55)", boxShadow: "0 0 24px 6px rgba(255,255,255,0.28), inset 0 0 22px 4px rgba(255,255,255,0.12)", animation: "floatGentle 9s ease-in-out infinite" }} />
      <div className="hidden sm:block absolute z-0 bottom-[-180px] left-[-180px] md:bottom-[-230px] md:left-[-230px] lg:bottom-[-280px] lg:left-[-280px] w-[520px] h-[520px] md:w-[700px] md:h-[700px] lg:w-[860px] lg:h-[860px] aspect-square rounded-full pointer-events-none" style={{ border: "2px solid rgba(255,255,255,0.55)", boxShadow: "0 0 24px 6px rgba(255,255,255,0.28), inset 0 0 22px 4px rgba(255,255,255,0.12)", animation: "floatGentle 11s ease-in-out 2s infinite" }} />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 flex flex-col min-h-[100dvh]">

        {/* ── Desktop: Side-by-side layout ── */}
        <div className="hidden lg:flex flex-1 items-center justify-between gap-8 xl:gap-10 pt-20">
          
          {/* Left: Hero Text */}
          <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col text-left max-w-lg xl:max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1F7A8C]/20 border border-[#1F7A8C]/40 backdrop-blur-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0A2A33]">Meet Connekt</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.5rem] font-extrabold leading-tight">
              Run a Smarter Lending Business with Connekt
            </h1>
            <p className="mt-5 text-sm md:text-base lg:text-base xl:text-lg text-[#0A2A33]/80">
              Loan origination, repayments, field agents, underwriting, analytics, and compliance built for African lenders and proven through Fanaka's own portfolio.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
              >
                Get Started
              </button>
              <button 
                onClick={scrollToFeatures}
                className="px-8 py-3 rounded-full bg-[#BFDBF7] text-[#0A2A33] font-medium shadow-lg hover:scale-105 transition cursor-pointer"
              >
                Watch Platform Tour
              </button>
            </div>
          </div>

          {/* Right: Laptop + Phone */}
          <div className="relative w-full lg:w-[58%] xl:w-[60%] max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <LaptopMockup />

            {/* Phone — floats over bottom-right */}
            <div
              className="absolute bottom-8 right-0 w-36 lg:w-40 xl:w-44 z-30"
              style={{ animation: "floatGentle 7s ease-in-out infinite" }}
            >
              <PhoneMockup />
            </div>
          </div>

        </div>

        {/* ── Medium screens: Stacked layout (text first, mockups below) ── */}
        <div className="hidden sm:flex lg:hidden flex-col items-center text-center pt-28 pb-10 overflow-x-hidden">
          <div className="flex flex-col items-center max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1F7A8C]/20 border border-[#1F7A8C]/40 backdrop-blur-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0A2A33]">Meet Connekt</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
              Run a Smarter Lending Business with Connekt
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#0A2A33]/80">
              Loan origination, repayments, field agents, underwriting, analytics, and compliance built for African lenders and proven through Fanaka's own portfolio.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={scrollToFeatures}
                className="px-8 py-3 rounded-full bg-[#BFDBF7] text-[#0A2A33] font-medium shadow-lg hover:scale-105 transition cursor-pointer"
              >
                Watch Platform Tour
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-4xl md:max-w-5xl mt-10 px-0 md:px-2">
            <LaptopMockup />
            <div
              className="absolute bottom-8 right-1 w-36 md:w-40 z-30"
              style={{ animation: "floatGentle 7s ease-in-out infinite" }}
            >
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* ── Mobile: Centered layout ── */}
        <div className="sm:hidden flex flex-col items-center text-center pt-28 pb-8 overflow-x-hidden">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1F7A8C]/20 border border-[#1F7A8C]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#0A2A33]">Meet Connekt</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight max-w-xs">
            Run a Smarter Lending Business with Connekt
          </h1>
          <p className="mt-4 text-sm text-[#0A2A33]/80 max-w-xs">
            Loan origination, repayments, field agents, underwriting, analytics, and compliance built for African lenders and proven through Fanaka's own portfolio.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="mt-8 px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
            >
              Get Started
            </button>
            <button 
              onClick={scrollToFeatures}
              className="mt-4 px-8 py-3 rounded-full bg-[#BFDBF7] text-[#0A2A33] font-medium shadow-lg hover:scale-105 transition cursor-pointer"
            >
              Watch Platform Tour
            </button>
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
