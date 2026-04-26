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

  return (
    <Section id="home" className="!h-auto !overflow-visible">
      {/* Decorative circles */}
      <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
      <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl pointer-events-none" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
      <div className="absolute z-[15] top-[-500px] right-[-500px] w-[1200px] h-[1200px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
      <div className="absolute z-[15] bottom-[-500px] left-[-500px] w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out 3s infinite" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 xl:px-20 w-full">

        {/* ── CTA block ── */}
        <div className="flex flex-col items-center justify-center min-h-[100dvh] -mb-28 sm:-mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1F7A8C]/20 border border-[#1F7A8C]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#0A2A33]">Meet Connekt</span>
          </div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight max-w-4xl xl:max-w-6xl">
            A Modern Finance Infrastructure.
            <br />
          </h1>
          <p className="mt-5 max-w-2xl xl:max-w-3xl text-base md:text-lg xl:text-xl text-[#0A2A33]/80">
            Connekt is an online portal by Fanaka Technologies that ties together every customer, agent, and insight giving SACCOs, MFIs, and digital lenders through our apps from one command centre to manage the entire loan lifecycle and much more!
          </p>
          <div className="md:mt-8 flex flex-col sm:flex-row items-center md:gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="mt-8 px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
            >
              Get Started
            </button>
            <button className="mt-4 md:mt-8 px-8 py-3 rounded-full bg-[#BFDBF7] text-[#0A2A33] font-medium shadow-lg hover:scale-105 transition cursor-pointer">
              Watch Demo
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
        <div className="sm:hidden w-full px-2 pb-10 flex flex-col items-center gap-3">
          <div className="relative w-full overflow-hidden" style={{height:"480px"}}>

            {/* Laptop — visible first, slides left */}
            <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileSlideOut 6s ease-in-out infinite"}}>
              <div className="w-full max-w-xs">
                <div className="relative w-full bg-[#0A2A33] rounded-t-2xl pt-4 px-3 pb-0 shadow-2xl ring-1 ring-white/20">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/25" />
                  <div className="w-full rounded-t-xl overflow-hidden bg-[#071419] aspect-[16/9]">
                    <div className="w-full h-full flex flex-col p-2 gap-1.5">
                      <div className="flex items-center gap-1.5 pb-1 border-b border-white/5">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                        </div>
                        <div className="h-1.5 rounded bg-white/10 w-16" />
                        <div className="flex-1" />
                        <span className="text-[6px] text-[#BFDBF7]/40">Connekt Portal</span>
                      </div>
                      <div className="flex gap-1.5 flex-1 min-h-0">
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                          <div className="bg-white/5 rounded-lg p-1.5 flex flex-col" style={{flex:"0 0 45%"}}>
                            <div className="text-[6px] text-[#BFDBF7]/50 mb-1 uppercase tracking-wider">Disbursements</div>
                            <div className="flex items-end gap-0.5 flex-1">
                              {[45,62,55,70,58,80,74,88,76,100,90,95].map((v,i)=>(
                                <div key={i} className="flex-1 rounded-t-sm bg-[#1F7A8C]/70" style={{height:`${v}%`}} />
                              ))}
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-1.5 flex-1">
                            <div className="text-[6px] text-[#BFDBF7]/50 mb-1 uppercase tracking-wider">Loan Tracking</div>
                            {[{c:"J. Mwangi",a:"50K",d:"bg-yellow-300"},{c:"A. Ochieng",a:"120K",d:"bg-[#BFDBF7]"},{c:"F. Njeri",a:"30K",d:"bg-[#1F7A8C]"}].map(r=>(
                              <div key={r.c} className="flex items-center gap-1 mb-0.5">
                                <div className={`w-1 h-1 rounded-full flex-shrink-0 ${r.d}`} />
                                <span className="text-[5.5px] text-white/60 flex-1 truncate">{r.c}</span>
                                <span className="text-[5.5px] text-[#BFDBF7]/70 font-semibold">{r.a}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5" style={{flex:"0 0 38%"}}>
                          <div className="bg-[#1F7A8C]/20 border border-[#1F7A8C]/30 rounded-lg p-1.5">
                            <div className="flex items-center gap-1 mb-1">
                              <Brain className="w-2 h-2 text-[#BFDBF7]/80" strokeWidth={2} />
                              <span className="text-[5.5px] font-bold text-[#BFDBF7] tracking-widest uppercase">FanakaIQ</span>
                              <span className="ml-auto text-[5px] bg-[#1F7A8C]/50 text-[#BFDBF7] px-1 rounded-full">Live</span>
                            </div>
                            {[{l:"Customer",v:92},{l:"Loan",v:85}].map(({l,v})=>(
                              <div key={l} className="mb-1">
                                <div className="flex justify-between mb-0.5">
                                  <span className="text-[5px] text-white/40">{l}</span>
                                  <span className="text-[5px] font-bold text-[#BFDBF7]">{v}%</span>
                                </div>
                                <div className="h-1 w-full rounded-full bg-white/10">
                                  <div className="h-1 rounded-full bg-[#BFDBF7]/70" style={{width:`${v}%`}} />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="bg-[#1F7A8C]/15 border border-[#1F7A8C]/30 rounded-lg p-1.5">
                            <div className="text-[5px] text-[#BFDBF7]/50 uppercase tracking-wider mb-0.5">Auto-Disbursed</div>
                            <div className="text-[9px] font-extrabold text-[#BFDBF7]">14 loans</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-[#091c23] rounded-b-sm" />
                <div className="w-full h-3 bg-[#0A2A33] rounded-b-xl flex justify-center items-center">
                  <div className="w-12 h-0.5 rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            {/* Phone — slides in from the right */}
            <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileSlideIn 6s ease-in-out infinite"}}>
              <div className="w-48">
                <PhoneMockup />
              </div>
            </div>

          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]/40" style={{animation:"mobileSwapDot1 6s ease-in-out infinite"}} />
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]/20" style={{animation:"mobileSwapDot2 6s ease-in-out infinite"}} />
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
