"use client";

import { useEffect, useState } from "react";
import {
  BarChart3, ShieldCheck, Brain, Smartphone, Briefcase, CreditCard,
} from "lucide-react";
import Section from "../Section";
import OnboardingModal from "../OnboardingModal";

export default function HeroSection() {
  const [activeApp, setActiveApp] = useState<"customer" | "agent">("customer");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActiveApp(a => a === "customer" ? "agent" : "customer"), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <Section id="home" className="!h-auto !overflow-visible">
      {/* Decorative circles */}
      <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
      <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl pointer-events-none" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
      <div className="absolute z-0 top-[-500px] right-[-500px] w-[1200px] h-[1200px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
      <div className="absolute z-0 bottom-[-500px] left-[-500px] w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out 3s infinite" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
        {/* ── CTA block ── */}
        <div className="flex flex-col items-center justify-center min-h-[100dvh] -mb-28 sm:-mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1F7A8C]/20 border border-[#1F7A8C]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#0A2A33]">Meet Connekt</span>
          </div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
            Modern Financing Infrastructure.
            <br />
            <span className="block mt-2">Scale Every Opportunity.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[#0A2A33]/80">
            Connekt is an online portal by Fanaka Technologies that ties together every customer, agent, and insight giving SACCOs, MFIs, and digital lenders through our apps from one command centre to manage the entire loan lifecycle and much more!
          </p>
          <div className="md:mt-8 flex flex-col sm:flex-row items-center md:gap-4 ">
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

        {/* ── Laptop + floating overlay cards ── */}
        <div className="hidden sm:block relative w-full max-w-4xl mx-auto pb-8 sm:pb-28 px-2 sm:px-16">

          {/* Laptop */}
          <div
            className="relative w-full"
            style={{ animation: "floatSlow 9s ease-in-out infinite" }}
          >
            {/* Screen lid */}
            <div className="relative w-full bg-[#0A2A33] rounded-t-2xl pt-5 px-4 pb-0 shadow-2xl ring-1 ring-white/20">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/25" />
              <div className="w-full rounded-t-xl overflow-hidden bg-[#071419] aspect-[16/9]">
                <div className="w-full h-full flex flex-col p-3 gap-2">

                  {/* Nav bar */}
                  <div className="flex items-center gap-2 pb-1 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                      <div className="w-2 h-2 rounded-full bg-green-400/50" />
                    </div>
                    <div className="h-2 rounded bg-white/10 w-20" />
                    <div className="flex-1" />
                    <div className="text-[7px] text-[#BFDBF7]/40 font-medium">Levi Kaugu</div>
                    <div className="w-5 h-5 rounded-full bg-[#1F7A8C]/40 ml-1" />
                  </div>

                  {/* Main 2-col layout */}
                  <div className="flex gap-2 flex-1 min-h-0">

                    {/* Left col: bar chart + applications tray */}
                    <div className="flex flex-col gap-2 flex-1 min-w-0">

                      {/* Bar chart */}
                      <div className="bg-white/5 rounded-xl p-2.5 flex flex-col" style={{flex:"0 0 44%"}}>
                        <div className="text-[8px] text-[#BFDBF7]/60 font-semibold mb-1.5 uppercase tracking-wider">Monthly Disbursements</div>
                        <div className="flex items-end gap-0.5 flex-1">
                          {[45,62,55,70,58,80,74,88,76,100,90,95].map((v,i) => (
                            <div key={i} className="flex-1 rounded-t-sm bg-[#1F7A8C]/70" style={{height:`${v}%`}} />
                          ))}
                        </div>
                        <div className="flex justify-between mt-1.5">
                          {["Oct","Dec","Feb","Apr","Jun","Sep"].map(m => (
                            <span key={m} className="text-[6px] text-white/30">{m}</span>
                          ))}
                        </div>
                      </div>

                      {/* Loan Tracking table */}
                      <div className="bg-white/5 rounded-xl p-2 flex-1 flex flex-col min-h-0 overflow-hidden">
                        <div className="text-[8px] text-[#BFDBF7]/60 font-semibold mb-1.5 uppercase tracking-wider flex-shrink-0">Loan Tracking</div>
                        <div className="flex-1 overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: "thin", scrollbarColor: "#1F7A8C33 transparent" }}>
                          <div style={{minWidth:"520px"}} className="h-full flex flex-col">
                            {/* Header */}
                            <div className="grid gap-x-1 mb-1 border-b border-white/10 pb-1" style={{gridTemplateColumns:"1.8fr 1.8fr 1.8fr 1.6fr 1.8fr 1.4fr 1.4fr 1.4fr 1.2fr 1fr"}}>
                              {["Type","Client","Agent","ID No.","Mobile","Principal","Total Due","Total Paid","Balance","Penalty"].map(h => (
                                <span key={h} className="text-[5px] text-white/30 font-semibold uppercase tracking-wider truncate">{h}</span>
                              ))}
                            </div>
                            {/* Rows */}
                            {[
                              { type:"Personal", client:"J. Mwangi",  agent:"M. Otieno",  idNo:"12345678", mobile:"0712***", principal:"50,000",  due:"55,000",  paid:"34,200", balance:"20,800", penalty:"0"     },
                              { type:"Business", client:"A. Ochieng", agent:"N. Wanjiru", idNo:"87654321", mobile:"0756***", principal:"120,000", due:"132,000", paid:"66,000", balance:"66,000", penalty:"1,200" },
                              { type:"Salary",   client:"F. Njeri",   agent:"P. Kamau",  idNo:"23456789", mobile:"0700***", principal:"30,000",  due:"32,500",  paid:"32,500", balance:"0",      penalty:"0"     },
                              { type:"Group",    client:"B. Kamau",   agent:"M. Otieno",  idNo:"34567890", mobile:"0731***", principal:"80,000",  due:"88,000",  paid:"22,000", balance:"66,000", penalty:"880"   },
                            ].map((row) => (
                              <div key={row.idNo} className="grid gap-x-1 py-0.5 items-center hover:bg-white/5 rounded transition-colors" style={{gridTemplateColumns:"1.8fr 1.8fr 1.8fr 1.6fr 1.8fr 1.4fr 1.4fr 1.4fr 1.2fr 1fr"}}>
                                <span className="text-[5.5px] text-[#BFDBF7]/60 truncate">{row.type}</span>
                                <span className="text-[5.5px] text-white/80 font-medium truncate">{row.client}</span>
                                <span className="text-[5.5px] text-white/50 truncate">{row.agent}</span>
                                <span className="text-[5px] text-white/35 font-mono truncate">{row.idNo}</span>
                                <span className="text-[5px] text-white/35 font-mono truncate">{row.mobile}</span>
                                <span className="text-[5.5px] text-[#BFDBF7]/70 font-semibold truncate">{row.principal}</span>
                                <span className="text-[5.5px] text-white/50 truncate">{row.due}</span>
                                <span className="text-[5.5px] text-[#BFDBF7]/70 truncate">{row.paid}</span>
                                <span className="text-[5.5px] text-white/60 font-semibold truncate">{row.balance}</span>
                                <span className={`text-[5.5px] font-semibold truncate ${row.penalty !== "0" ? "text-red-400/80" : "text-white/25"}`}>{row.penalty}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right col: FanakaIQ panel */}
                    <div className="flex flex-col gap-2" style={{flex:"0 0 38%"}}>

                      {/* FanakaIQ header */}
                      <div className="bg-[#1F7A8C]/20 border border-[#1F7A8C]/30 rounded-xl p-2.5">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Brain className="w-3 h-3 text-[#BFDBF7]/80" strokeWidth={2} />
                          <span className="text-[8px] font-bold text-[#BFDBF7] tracking-widest uppercase">FanakaIQ</span>
                          <span className="ml-auto text-[6px] bg-[#1F7A8C]/50 text-[#BFDBF7] px-1.5 py-0.5 rounded-full border border-[#1F7A8C]/40">Live</span>
                        </div>
                        {[
                          { label: "Customer Health",    val: 92, color: "bg-[#BFDBF7]/80",  text: "text-[#BFDBF7]" },
                          { label: "Application Health", val: 78, color: "bg-[#1F7A8C]",      text: "text-[#1F7A8C]" },
                          { label: "Loan Health",        val: 85, color: "bg-[#BFDBF7]/50",   text: "text-[#BFDBF7]/70" },
                        ].map(({ label, val, color, text }) => (
                          <div key={label} className="mb-1.5 last:mb-0">
                            <div className="flex justify-between mb-0.5">
                              <span className="text-[6.5px] text-white/50">{label}</span>
                              <span className={`text-[6.5px] font-bold ${text}`}>{val}%</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/10">
                              <div className={`h-1.5 rounded-full ${color}`} style={{width:`${val}%`}} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* New Applications tray */}
                      <div className="bg-white/5 rounded-xl p-2 flex flex-col">
                        <div className="text-[7px] text-[#BFDBF7]/60 font-semibold mb-1 uppercase tracking-wider">New Applications</div>
                        <div className="space-y-1">
                          {[
                            { name:"J. Mwangi",  type:"Personal", amt:"50K",  dot:"bg-yellow-300", status:"Review"   },
                            { name:"A. Ochieng", type:"Business", amt:"120K", dot:"bg-[#BFDBF7]",  status:"Approved" },
                            { name:"F. Njeri",   type:"Salary",   amt:"30K",  dot:"bg-[#1F7A8C]",  status:"Pending"  },
                          ].map(({name,type,amt,dot,status}) => (
                            <div key={name} className="flex items-center gap-1">
                              <div className={`w-1 h-1 rounded-full flex-shrink-0 ${dot}`} />
                              <span className="text-[6px] text-white/70 flex-1 truncate">{name}</span>
                              <span className="text-[5.5px] text-white/35">{type}</span>
                              <span className="text-[6px] text-[#BFDBF7]/70 font-semibold w-8 text-right">{amt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Auto-decision strip */}
                      <div className="bg-[#1F7A8C]/15 border border-[#1F7A8C]/30 rounded-xl p-2">
                        <div className="text-[6.5px] text-[#BFDBF7]/60 font-semibold mb-0.5 uppercase tracking-wider">Auto-Disbursed Today</div>
                        <div className="text-[11px] font-extrabold text-[#BFDBF7]">14 loans</div>
                        <div className="text-[6px] text-white/30">KES 840,000 total</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Keyboard base */}
            <div className="w-full h-3 bg-[#091c23] rounded-b-sm" />
            <div className="w-full h-4 bg-[#0A2A33] rounded-b-2xl flex justify-center items-center shadow-xl">
              <div className="w-16 h-1 rounded-full bg-white/10" />
            </div>
          </div>

          {/* ── Floating cards — straddle the laptop edges (hidden on mobile) ── */}

          {/* Analytics & Tracking — top-left, half outside */}
          <div
            className="hidden sm:block absolute z-20 top-[7%] -left-2 w-52 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-5 shadow-2xl flex flex-col"
            style={{ animation: "floatSlow 8s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">Analytics & Tracking</p>
            </div>
            <p className="text-[11px] text-[#0A2A33]/60 mt-3 leading-snug flex-1 flex items-center">Real-time disbursement trends & portfolio insights</p>
            <div className="absolute -bottom-2 left-8 w-2.5 h-2.5 rounded-full bg-[#1F7A8C] ring-2 ring-white/70" />
          </div>

          {/* FanakaIQ badge — top-right, half outside */}
          <div
            className="hidden sm:block absolute z-20 top-[8%] -right-2 w-52 bg-[#0A2A33] backdrop-blur-md border border-[#1F7A8C]/60 rounded-2xl p-5 shadow-2xl flex flex-col"
            style={{ animation: "floatSlow 11s ease-in-out 1.5s infinite" }}
          >
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 flex-shrink-0 text-[#BFDBF7]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#BFDBF7] uppercase tracking-wide leading-tight">FanakaIQ</p>
            </div>
            <p className="text-[11px] text-[#BFDBF7]/60 mt-3 leading-snug flex-1 flex items-center">AI credit scoring & auto-disbursement active</p>
            <div className="mt-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#BFDBF7] animate-pulse" />
              <span className="text-[11px] text-[#BFDBF7]/70">14 decisions today</span>
            </div>
          </div>

          {/* 100% Secure — bottom-right, half outside */}
          <div
            className="hidden sm:block absolute z-20 bottom-[14%] -right-2 w-52 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-5 shadow-2xl flex flex-col"
            style={{ animation: "floatSlow 10s ease-in-out 3s infinite" }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
              <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">100% Secure</p>
            </div>
            <p className="text-[11px] text-[#0A2A33]/60 mt-3 leading-snug flex-1 flex items-center">Bank-grade encryption & MFA protect every transaction</p>
            <div className="mt-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#1F7A8C]" />
              <span className="text-[11px] text-[#0A2A33]/60">End-to-end encrypted</span>
            </div>
          </div>

          {/* Phone mockup — bottom-left */}
          <div
            className="hidden sm:block absolute z-20 bottom-[6%] -left-4 w-44"
            style={{ animation: "floatSlow 9s ease-in-out 2s infinite" }}
          >
            {/* Phone shell */}
            <div className="relative w-full bg-[#122d3a] rounded-[2rem] shadow-2xl ring-1 ring-white/20 pt-3 pb-2 px-2">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="w-5 h-1.5 rounded-full bg-white/15" />
              </div>
              {/* Screen */}
              <div className="w-full rounded-[1.4rem] overflow-hidden bg-[#0d2130] aspect-[9/19]">
                <div className="w-full h-full flex flex-col p-2 gap-1.5">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-0.5">
                    <span className="text-[5px] text-white/40 font-medium">9:41</span>
                    <div className="flex gap-0.5 items-center">
                      <div className="w-2 h-1 rounded-sm bg-white/30" />
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                    </div>
                  </div>
                  {/* App toggle pill */}
                  <div className="flex gap-0.5 rounded-full bg-white/10 p-0.5">
                    <div className={`flex-1 text-center rounded-full text-[4.5px] py-0.5 font-semibold transition-all duration-500 ${activeApp === "customer" ? "bg-[#1F7A8C] text-white" : "text-white/30"}`}>Customer</div>
                    <div className={`flex-1 text-center rounded-full text-[4.5px] py-0.5 font-semibold transition-all duration-500 ${activeApp === "agent" ? "bg-[#F59E0B]/90 text-white" : "text-white/30"}`}>Agent</div>
                  </div>
                  {activeApp === "customer" ? (
                    <>
                      {/* App header */}
                      <div className="flex items-center gap-1 px-0.5">
                        <Smartphone className="w-2.5 h-2.5 text-[#BFDBF7]/70" strokeWidth={2} />
                        <span className="text-[6px] font-bold text-[#BFDBF7] tracking-wide">Customer App</span>
                        <span className="ml-auto text-[5px] bg-[#1F7A8C]/50 text-[#BFDBF7] px-1 py-0.5 rounded-full">Borrower</span>
                      </div>
                      {/* Loan status card */}
                      <div className="bg-[#1F7A8C]/20 border border-[#1F7A8C]/30 rounded-lg p-1.5">
                        <div className="text-[5.5px] text-white/40 mb-0.5">Active Loan</div>
                        <div className="text-[9px] font-extrabold text-[#BFDBF7]">KES 50,000</div>
                        <div className="mt-1 h-1 w-full rounded-full bg-white/10">
                          <div className="h-1 rounded-full bg-[#BFDBF7]/60" style={{ width: "62%" }} />
                        </div>
                        <div className="flex justify-between mt-0.5">
                          <span className="text-[4.5px] text-white/30">62% repaid</span>
                          <span className="text-[4.5px] text-white/30">Due Jun 10</span>
                        </div>
                      </div>
                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-1">
                        {[
                          { l: "Apply", icon: "+" },
                          { l: "Pay Now", icon: "→" },
                          { l: "History", icon: "↓" },
                          { l: "Support", icon: "?" },
                        ].map(({ l, icon }) => (
                          <div key={l} className="bg-white/8 border border-white/10 rounded-md p-1 flex flex-col items-center gap-0.5">
                            <span className="text-[7px] text-[#BFDBF7]/60">{icon}</span>
                            <span className="text-[5px] text-white/40">{l}</span>
                          </div>
                        ))}
                      </div>
                      {/* Recent */}
                      <div className="flex-1">
                        <div className="text-[5px] text-white/25 uppercase tracking-wider mb-1">Recent</div>
                        {[
                          { label: "Repayment", amt: "-2,500", color: "text-red-300/70" },
                          { label: "Disbursed", amt: "+50,000", color: "text-[#BFDBF7]/70" },
                        ].map(({ label, amt, color }) => (
                          <div key={label} className="flex justify-between items-center mb-0.5">
                            <span className="text-[5px] text-white/35">{label}</span>
                            <span className={`text-[5.5px] font-semibold ${color}`}>{amt}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* App header */}
                      <div className="flex items-center gap-1 px-0.5">
                        <Briefcase className="w-2.5 h-2.5 text-[#F59E0B]/70" strokeWidth={2} />
                        <span className="text-[6px] font-bold text-[#BFDBF7] tracking-wide">Agent App</span>
                        <span className="ml-auto text-[5px] bg-[#F59E0B]/30 text-[#F59E0B] px-1 py-0.5 rounded-full">Agent</span>
                      </div>
                      {/* Monthly target card */}
                      <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-lg p-1.5">
                        <div className="text-[5.5px] text-white/40 mb-0.5">Monthly Target</div>
                        <div className="text-[9px] font-extrabold text-[#F59E0B]">85% Achieved</div>
                        <div className="mt-1 h-1 w-full rounded-full bg-white/10">
                          <div className="h-1 rounded-full bg-[#F59E0B]/70" style={{ width: "85%" }} />
                        </div>
                        <div className="flex justify-between mt-0.5">
                          <span className="text-[4.5px] text-white/30">KES 340K / 400K</span>
                          <span className="text-[4.5px] text-[#F59E0B]/60">Target</span>
                        </div>
                      </div>
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-0.5">
                        {[{ l: "Loans", v: "12" }, { l: "Clients", v: "28" }, { l: "Rate", v: "94%" }].map(({ l, v }) => (
                          <div key={l} className="bg-white/8 border border-white/10 rounded-md p-1 flex flex-col items-center gap-0.5">
                            <span className="text-[7px] font-bold text-[#BFDBF7]/80">{v}</span>
                            <span className="text-[4.5px] text-white/35">{l}</span>
                          </div>
                        ))}
                      </div>
                      {/* Targets */}
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="text-[5px] text-white/25 uppercase tracking-wider">Targets</div>
                        {[{ l: "New Loans", v: 70 }, { l: "Collections", v: 85 }, { l: "Referrals", v: 50 }].map(({ l, v }) => (
                          <div key={l}>
                            <div className="flex justify-between mb-0.5">
                              <span className="text-[5px] text-white/40">{l}</span>
                              <span className="text-[5px] text-[#F59E0B]/80 font-semibold">{v}%</span>
                            </div>
                            <div className="h-1 w-full rounded-full bg-white/10">
                              <div className="h-1 rounded-full bg-[#F59E0B]/60" style={{ width: `${v}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Home bar */}
              <div className="flex justify-center mt-1.5">
                <div className="w-8 h-0.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

        </div>

        {/* ── Mobile device showcase — looping swap (shown only on small screens) ── */}
        <div className="sm:hidden w-full px-2 pb-10 flex flex-col items-center gap-3">

          {/* Swap container */}
          <div className="relative w-full overflow-hidden" style={{height:"480px"}}>

            {/* Laptop — visible first, then slides left */}
            <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileSlideOut 6s ease-in-out infinite"}}>
              <div className="w-full max-w-xs">
                <div className="relative w-full bg-[#0A2A33] rounded-t-2xl pt-4 px-3 pb-0 shadow-2xl ring-1 ring-white/20">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/25" />
                  <div className="w-full rounded-t-xl overflow-hidden bg-[#071419] aspect-[16/9]">
                    <div className="w-full h-full flex flex-col p-2 gap-1.5">
                      <div className="flex items-center gap-1.5 pb-1 border-b border-white/5">
                        <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400/50" /><div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" /><div className="w-1.5 h-1.5 rounded-full bg-green-400/50" /></div>
                        <div className="h-1.5 rounded bg-white/10 w-16" />
                        <div className="flex-1" />
                        <span className="text-[6px] text-[#BFDBF7]/40">Connekt Portal</span>
                      </div>
                      <div className="flex gap-1.5 flex-1 min-h-0">
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                          <div className="bg-white/5 rounded-lg p-1.5 flex flex-col" style={{flex:"0 0 45%"}}>
                            <div className="text-[6px] text-[#BFDBF7]/50 mb-1 uppercase tracking-wider">Disbursements</div>
                            <div className="flex items-end gap-0.5 flex-1">{[45,62,55,70,58,80,74,88,76,100,90,95].map((v,i)=><div key={i} className="flex-1 rounded-t-sm bg-[#1F7A8C]/70" style={{height:`${v}%`}} />)}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-1.5 flex-1">
                            <div className="text-[6px] text-[#BFDBF7]/50 mb-1 uppercase tracking-wider">Loan Tracking</div>
                            {[{c:"J. Mwangi",a:"50K",s:"Review",d:"bg-yellow-300"},{c:"A. Ochieng",a:"120K",s:"Active",d:"bg-[#BFDBF7]"},{c:"F. Njeri",a:"30K",s:"Paid",d:"bg-[#1F7A8C]"}].map(r=>(
                              <div key={r.c} className="flex items-center gap-1 mb-0.5"><div className={`w-1 h-1 rounded-full flex-shrink-0 ${r.d}`}/><span className="text-[5.5px] text-white/60 flex-1 truncate">{r.c}</span><span className="text-[5.5px] text-[#BFDBF7]/70 font-semibold">{r.a}</span></div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5" style={{flex:"0 0 38%"}}>
                          <div className="bg-[#1F7A8C]/20 border border-[#1F7A8C]/30 rounded-lg p-1.5">
                            <div className="flex items-center gap-1 mb-1"><Brain className="w-2 h-2 text-[#BFDBF7]/80" strokeWidth={2}/><span className="text-[5.5px] font-bold text-[#BFDBF7] tracking-widest uppercase">FanakaIQ</span><span className="ml-auto text-[5px] bg-[#1F7A8C]/50 text-[#BFDBF7] px-1 rounded-full">Live</span></div>
                            {[{l:"Customer",v:92},{l:"Loan",v:85}].map(({l,v})=>(
                              <div key={l} className="mb-1"><div className="flex justify-between mb-0.5"><span className="text-[5px] text-white/40">{l}</span><span className="text-[5px] font-bold text-[#BFDBF7]">{v}%</span></div><div className="h-1 w-full rounded-full bg-white/10"><div className="h-1 rounded-full bg-[#BFDBF7]/70" style={{width:`${v}%`}}/></div></div>
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
                <div className="w-full h-3 bg-[#0A2A33] rounded-b-xl flex justify-center items-center"><div className="w-12 h-0.5 rounded-full bg-white/10" /></div>
              </div>
            </div>

            {/* Phone — slides in from the right */}
            <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileSlideIn 6s ease-in-out infinite"}}>
              <div className="w-48">
                <div className="relative w-full bg-[#122d3a] rounded-[2rem] shadow-2xl ring-1 ring-white/20 pt-3 pb-2 px-2">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="w-4 h-1.5 rounded-full bg-white/15" />
                  </div>
                  <div className="w-full rounded-[1.4rem] overflow-hidden bg-[#0d2130] aspect-[9/19]">
                    <div className="w-full h-full flex flex-col p-2 gap-1.5">
                      <div className="flex justify-between items-center px-0.5">
                        <span className="text-[5px] text-white/40 font-medium">9:41</span>
                        <div className="flex gap-0.5"><div className="w-2 h-1 rounded-sm bg-white/30" /><div className="w-1 h-1 rounded-full bg-white/30" /></div>
                      </div>
                      {/* App toggle pill */}
                      <div className="flex gap-0.5 rounded-full bg-white/10 p-0.5">
                        <div className={`flex-1 text-center rounded-full text-[4.5px] py-0.5 font-semibold transition-all duration-500 ${activeApp === "customer" ? "bg-[#1F7A8C] text-white" : "text-white/30"}`}>Customer</div>
                        <div className={`flex-1 text-center rounded-full text-[4.5px] py-0.5 font-semibold transition-all duration-500 ${activeApp === "agent" ? "bg-[#F59E0B]/90 text-white" : "text-white/30"}`}>Agent</div>
                      </div>
                      {activeApp === "customer" ? (
                        <>
                          <div className="flex items-center gap-1 px-0.5">
                            <Smartphone className="w-2.5 h-2.5 text-[#BFDBF7]/70" strokeWidth={2} />
                            <span className="text-[6px] font-bold text-[#BFDBF7] tracking-wide">Customer App</span>
                            <span className="ml-auto text-[5px] bg-[#1F7A8C]/50 text-[#BFDBF7] px-1 py-0.5 rounded-full">Borrower</span>
                          </div>
                          <div className="bg-[#1F7A8C]/20 border border-[#1F7A8C]/30 rounded-lg p-1.5">
                            <div className="text-[5.5px] text-white/40 mb-0.5">Active Loan</div>
                            <div className="text-[9px] font-extrabold text-[#BFDBF7]">KES 50,000</div>
                            <div className="mt-1 h-1 w-full rounded-full bg-white/10"><div className="h-1 rounded-full bg-[#BFDBF7]/60" style={{width:"62%"}} /></div>
                            <div className="flex justify-between mt-0.5"><span className="text-[4.5px] text-white/30">62% repaid</span><span className="text-[4.5px] text-white/30">Due Jun 10</span></div>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {[{l:"Apply",icon:"+"},{l:"Pay Now",icon:"→"},{l:"History",icon:"↓"},{l:"Support",icon:"?"}].map(({l,icon})=>(
                              <div key={l} className="bg-white/8 border border-white/10 rounded-md p-1 flex flex-col items-center gap-0.5">
                                <span className="text-[7px] text-[#BFDBF7]/60">{icon}</span>
                                <span className="text-[5px] text-white/40">{l}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex-1">
                            <div className="text-[5px] text-white/25 uppercase tracking-wider mb-1">Recent</div>
                            {[{label:"Repayment",amt:"-2,500",color:"text-red-300/70"},{label:"Disbursed",amt:"+50,000",color:"text-[#BFDBF7]/70"}].map(({label,amt,color})=>(
                              <div key={label} className="flex justify-between items-center mb-0.5">
                                <span className="text-[5px] text-white/35">{label}</span>
                                <span className={`text-[5.5px] font-semibold ${color}`}>{amt}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1 px-0.5">
                            <Briefcase className="w-2.5 h-2.5 text-[#F59E0B]/70" strokeWidth={2} />
                            <span className="text-[6px] font-bold text-[#BFDBF7] tracking-wide">Agent App</span>
                            <span className="ml-auto text-[5px] bg-[#F59E0B]/30 text-[#F59E0B] px-1 py-0.5 rounded-full">Agent</span>
                          </div>
                          <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-lg p-1.5">
                            <div className="text-[5.5px] text-white/40 mb-0.5">Monthly Target</div>
                            <div className="text-[9px] font-extrabold text-[#F59E0B]">85% Achieved</div>
                            <div className="mt-1 h-1 w-full rounded-full bg-white/10"><div className="h-1 rounded-full bg-[#F59E0B]/70" style={{width:"85%"}} /></div>
                            <div className="flex justify-between mt-0.5"><span className="text-[4.5px] text-white/30">KES 340K / 400K</span><span className="text-[4.5px] text-[#F59E0B]/60">Target</span></div>
                          </div>
                          <div className="grid grid-cols-3 gap-0.5">
                            {[{l:"Loans",v:"12"},{l:"Clients",v:"28"},{l:"Rate",v:"94%"}].map(({l,v})=>(
                              <div key={l} className="bg-white/8 border border-white/10 rounded-md p-1 flex flex-col items-center gap-0.5">
                                <span className="text-[7px] font-bold text-[#BFDBF7]/80">{v}</span>
                                <span className="text-[4.5px] text-white/35">{l}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex-1 flex flex-col gap-1">
                            <div className="text-[5px] text-white/25 uppercase tracking-wider">Targets</div>
                            {[{l:"New Loans",v:70},{l:"Collections",v:85},{l:"Referrals",v:50}].map(({l,v})=>(
                              <div key={l}>
                                <div className="flex justify-between mb-0.5"><span className="text-[5px] text-white/40">{l}</span><span className="text-[5px] text-[#F59E0B]/80 font-semibold">{v}%</span></div>
                                <div className="h-1 w-full rounded-full bg-white/10"><div className="h-1 rounded-full bg-[#F59E0B]/60" style={{width:`${v}%`}} /></div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-1.5"><div className="w-8 h-0.5 rounded-full bg-white/20" /></div>
                </div>
              </div>
            </div>

          </div>

          {/* Dots indicator */}
          <div className="flex items-center gap-3 mt-2">
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]/40" style={{animation:"mobileSwapDot1 6s ease-in-out infinite"}} />
            <div className="w-2 h-2 rounded-full bg-[#0A2A33]/20" style={{animation:"mobileSwapDot2 6s ease-in-out infinite"}} />
          </div>

        </div>

        {/* ── Mobile metric cards (shown only on small screens) ── */}
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
            <div className="flex-1 flex flex-col items-center justify-center py-1">
              <p className="text-xs text-[#0A2A33]/50">Real-time disbursement trends, loan tracking & portfolio insights</p>
            </div>
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
