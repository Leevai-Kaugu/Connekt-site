"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import {
  Building2, Workflow, ShieldCheck, Plug2, Users, Rocket,
  Banknote, TrendingUp, BarChart3, AlertTriangle,
  Landmark, CreditCard, Smartphone, Building, Sprout, Briefcase,
  CheckCircle, Brain, LayoutDashboard,
} from "lucide-react";

/* ─── Section wrapper ──────────────────────────────────────────── */
function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative h-[100dvh] w-full flex-shrink-0 snap-start bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33] overflow-hidden ${className}`}
      style={{ scrollSnapStop: "always", ...style } as React.CSSProperties}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
          transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────────── */
function Card({ title, body, delay = 0, icon: Icon }: { title: string; body: string; delay?: number; icon?: React.ElementType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 md:p-8 text-left"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />}
        <h3 className="text-sm md:text-lg font-bold leading-snug">{title}</h3>
      </div>
      <p className="text-xs md:text-sm leading-relaxed text-[#0A2A33]/80">{body}</p>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeApp, setActiveApp] = useState<"customer" | "agent">("customer");

  useEffect(() => {
    const t = setInterval(() => setActiveApp(a => a === "customer" ? "agent" : "customer"), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "solution", "pricing", "industries", "products"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.5 }
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
        data-scroll-container
        className="h-[100dvh] overflow-y-scroll overflow-x-hidden"
        style={{ scrollSnapType: "y proximity", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {/* ── HERO ── */}
        <Section id="home" className="!h-auto !overflow-visible">
          {/* Decorative circles */}
          <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
          <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl pointer-events-none" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
          <div className="absolute z-0 top-[-500px] right-[-500px] w-[1200px] h-[1200px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
          <div className="absolute z-0 bottom-[-500px] left-[-500px] w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out 3s infinite" }} />

          <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
            {/* ── CTA block ── */}
            <div className="flex flex-col items-center justify-center min-h-[100dvh] -mb-8 sm:-mb-20">
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
                Modern Financing Infrastructure.
                <br />
                <span className="block mt-2">Scale Every Opportunity.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-[#0A2A33]/80">
                Connekt is an online portal by Fanaka Technologies that ties together every customer, agent, and insight giving SACCOs, MFIs, and digital lenders through our apps from one command centre to manage the entire loan lifecycle and much more!
              </p>
              <button className="mt-8 px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer">
                Book a Demo
              </button>
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
            <div className="sm:hidden w-full px-4 pb-10 flex flex-col items-center gap-3">

              {/* Swap container */}
              <div className="relative w-full" style={{height:"280px"}}>

                {/* Laptop — visible first half */}
                <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileSwapOut 6s linear infinite"}}>
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

                {/* Phone — visible second half */}
                <div className="absolute inset-0 flex items-center justify-center" style={{animation:"mobileSwapIn 6s linear infinite"}}>
                  <div className="w-36">
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
              <div className="flex gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-[#0A2A33]/40" style={{animation:"mobileSwapDot1 6s linear infinite"}} />
                <div className="w-2 h-2 rounded-full bg-[#0A2A33]/20" style={{animation:"mobileSwapDot2 6s linear infinite"}} />
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
                  <div className="w-2 h-2 rounded-full bg-[#BFDBF7] animate-pulse" />
                  <span className="text-xs text-[#BFDBF7]/70">14 decisions today</span>
                </div>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex flex-col">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
                  <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">Applications</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center py-1">
                  <p className="text-3xl font-extrabold text-[#0A2A33]">24</p>
                  <p className="text-xs text-[#0A2A33]/50">pending review</p>
                </div>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex flex-col">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
                  <p className="text-xs font-bold text-[#0A2A33] uppercase tracking-wide leading-tight">100% Secure</p>
                </div>
                <p className="text-xs text-[#0A2A33]/60 mt-3 leading-snug flex-1 flex items-center">Bank-grade encryption & MFA</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#1F7A8C]" />
                  <span className="text-xs text-[#0A2A33]/60">End-to-end encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </Section>


        {/* ── ABOUT ── */}
        <Section id="about" style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #c8e8f0 50%, #a8d8e8 100%)" }}>
          {/* Financial doodles — commented out
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            ...doodles...
          </svg>
          */}
          <div className="mt-6 md:mt-0 relative z-10 flex flex-col items-center justify-center md:h-full text-center px-6 pt-24 pb-6 overflow-y-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">About Connekt SaaS</h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              Built to modernize financial services. We empower lenders, fintechs, and enterprises
              with infrastructure that is fast, flexible, and built for scale.
            </p>

            {/* ── Metric bars ── */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl w-full">
              {[
                { label: "Active Loans", value: "1,248", sub: "+8% this month", pct: 72, Icon: CreditCard },
                { label: "Total Disbursed", value: "$4.2M", sub: "across all clients", pct: 85, Icon: TrendingUp },
                { label: "Collection Rate", value: "96.3%", sub: "on-time repayments", pct: 96, Icon: BarChart3 },
                { label: "PAR 30", value: "2.1%", sub: "portfolio at risk", pct: 14, Icon: AlertTriangle },
              ].map(({ label, value, sub, pct, Icon }, i) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 text-left"
                  style={{
                    opacity: 1,
                    animation: `slideUpFade 0.5s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s both`,
                  }}
                >
                  <Icon className="w-5 h-5 mb-2 text-[#0A2A33]/70" strokeWidth={1.8} />
                  <p className="text-xs font-semibold text-[#0A2A33]/60 uppercase tracking-wide">{label}</p>
                  <p className="text-2xl md:text-3xl font-extrabold mt-1">{value}</p>
                  <p className="text-xs text-[#0A2A33]/60 mt-0.5">{sub}</p>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 w-full rounded-full bg-white/30">
                    <div
                      className="h-1.5 rounded-full bg-[#0A2A33]"
                      style={{ width: `${pct}%`, transition: "width 1s cubic-bezier(0.22,1,0.36,1)" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bar chart ── */}
            <div className="mt-12 max-w-5xl w-full p-4 md:p-6">
              <p className="text-xs font-semibold text-[#0A2A33]/60 uppercase tracking-wide text-left mb-4">Monthly Disbursements (KES '000)</p>
              <div className="flex items-end gap-2 md:gap-3 h-28 md:h-36 w-full">
                {[
                  { month: "Oct", val: 55 },
                  { month: "Nov", val: 68 },
                  { month: "Dec", val: 72 },
                  { month: "Jan", val: 60 },
                  { month: "Feb", val: 78 },
                  { month: "Mar", val: 91 },
                  { month: "Apr", val: 85 },
                  { month: "May", val: 95 },
                  { month: "Jun", val: 88 },
                  { month: "Jul", val: 100 },
                  { month: "Aug", val: 93 },
                  { month: "Sep", val: 97 },
                ].map(({ month, val }, i) => (
                  <div key={month} className="flex flex-col items-center flex-1 h-full justify-end gap-1">
                    <div
                      className="w-full rounded-t-md bg-[#0A2A33]/70 hover:bg-[#0A2A33] transition-all duration-300"
                      style={{
                        height: `${val}%`,
                        animation: `slideUpFade 0.5s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.04}s both`,
                      }}
                    />
                    <span className="text-[10px] md:text-xs text-[#0A2A33]/60">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── SOLUTION ── */}
        <Section id="solution">
          <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 pt-20 pb-4 md:pt-24 md:pb-6 overflow-y-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Our Solution</h1>
            <p className="mt-1.5 md:mt-4 max-w-2xl text-xs md:text-base text-[#0A2A33]/80">
              Designed for the realities of African lending — mobile-first borrowers, variable connectivity, and strict compliance demands.
            </p>
            <div className="mt-8 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl w-full pb-2 md:pb-8">
              {[
                { title: "Multi-Tenant Architecture", body: "Each lender gets their own isolated environment, separate data, roles, and configuration — all on shared infrastructure.", icon: Building2 },
                { title: "No-Code Workflow Builder", body: "Design custom approval chains, escalation rules, and notification triggers without writing a single line of code.", icon: Workflow },
                { title: "Bank-Grade Security", body: "End-to-end encryption, MFA, and role-based access controls keep sensitive financial data protected at every layer.", icon: ShieldCheck },
                { title: "Open Integrations", body: "REST API and webhooks connect Connekt to mobile money platforms, core banking systems, and credit bureaus.", icon: Plug2 },
                { title: "Team Collaboration", body: "Granular role permissions and built-in workflows keep every team member accountable and aligned.", icon: Users },
                { title: "Built to Scale", body: "Cloud-native infrastructure handles growth from dozens to hundreds of thousands of active loans without missing a beat.", icon: Rocket },
              ].map(({ title, body, icon }, i) => (
                <Card key={title} title={title} body={body} icon={icon} delay={0.05 + i * 0.07} />
              ))}
            </div>
          </div>
        </Section>

        {/* ── PRICING ── */}
        <Section id="pricing" className="text-white" style={{ background: "linear-gradient(135deg, #0a1f2e 0%, #0d2d3d 50%, #0f3a4a 100%)" }}>
          <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 pt-24 pb-4 md:pt-24 md:pb-6 overflow-y-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl text-white">Simple, Transparent Pricing</h1>
            <p className="mt-2 md:mt-4 max-w-2xl text-sm md:text-base text-white/70">
              Choose a plan that fits your scale. No hidden fees, no surprises.
            </p>
            {/* Mobile: horizontal scroll carousel; Desktop: 4-col grid */}
            <div className="mt-10 md:mt-8 w-full max-w-6xl">
              <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-3 px-1 -mx-1" style={{ scrollbarWidth: "none", height: "calc(100dvh - 20rem)" }}>
                {[
                  { name: "Starter / Demo", price: "Free", period: "", description: "Perfect for businesses looking to organize finances and take control of lending.", features: ["Simple loan tracking", "Monitor repayments with clarity", "Essential financial insights", "1–3 Users", "10 clients, 20 loans"], highlighted: false, cta: "Get Started" },
                  { name: "Growth", price: "$85", period: "/mo", description: "Designed for institutions ready to streamline operations and improve decisions.", features: ["Full loan lifecycle management", "Smart reporting & analytics", "Multi-user collaboration", "Fanaka Academy access", "Customer app access"], highlighted: true, cta: "Get Started", badge: "Most Popular", yearly: "$950/yr" },
                  { name: "Scale", price: "$250", period: "/mo", description: "For high-performing organizations needing deeper insights and automation.", features: ["Advanced underwriting with FanakaIQ", "Custom workflows & auto disbursement", "API integrations & push notifications", "Priority support", "Customer app & agent app"], highlighted: false, cta: "Get Started", yearly: "$2,900/yr" },
                  { name: "Enterprise", price: "Custom", period: "", description: "A fully customized solution for large institutions driving large-scale change.", features: ["Fully customizable platform", "Dedicated support & SLA", "Advanced integrations & dedicated servers", "Customised FanakaIQ model", "Complex lending ecosystems"], highlighted: false, cta: "Contact Sales" },
                ].map(({ name, price, period, description, features, highlighted, cta, badge, yearly }) => (
                  <div
                    key={name}
                    className={`rounded-2xl border p-5 text-left flex flex-col flex-shrink-0 w-[82vw] snap-center h-full text-white ${highlighted ? "bg-[#0A2A33] border-[#1F7A8C] shadow-2xl" : "bg-white/10 backdrop-blur-md border-white/20"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold">{name}</h3>
                      {badge && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#0A2A33] flex-shrink-0">{badge}</span>}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{description}</p>
                    <ul className="mt-3 space-y-1.5 flex-1">
                      {features.map((f) => (
                        <li key={f} className="text-xs flex items-start gap-2"><span>✓</span><span>{f}</span></li>
                      ))}
                    </ul>
                    <button className={`mt-4 px-5 py-2 rounded-full font-medium text-sm cursor-pointer ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#1F7A8C] text-white"}`}>
                      {cta}
                    </button>
                  </div>
                ))}
              </div>
              {/* Desktop grid */}
              <div className="hidden md:grid md:grid-cols-4 gap-4">
                {[
                  { name: "Starter / Demo", price: "Free", period: "", description: "Perfect for businesses looking to organize finances and take control of lending.", features: ["Simple loan tracking", "Monitor repayments with clarity", "Essential financial insights", "1–3 Users", "10 clients, 20 loans"], highlighted: false, cta: "Get Started" },
                  { name: "Growth", price: "$85", period: "/mo", description: "Designed for institutions ready to streamline operations and improve decisions.", features: ["Full loan lifecycle management", "Smart reporting & analytics", "Multi-user collaboration", "Fanaka Academy access", "Customer app access"], highlighted: true, cta: "Get Started", badge: "Most Popular", yearly: "$950/yr" },
                  { name: "Scale", price: "$250", period: "/mo", description: "For high-performing organizations needing deeper insights and automation.", features: ["Advanced underwriting with FanakaIQ", "Custom workflows & auto disbursement", "API integrations & push notifications", "Priority support", "Customer app & agent app"], highlighted: false, cta: "Get Started", yearly: "$2,900/yr" },
                  { name: "Enterprise", price: "Custom", period: "", description: "A fully customized solution for large institutions driving large-scale change.", features: ["Fully customizable platform", "Dedicated support & SLA", "Advanced integrations & dedicated servers", "Customised FanakaIQ model", "Complex lending ecosystems"], highlighted: false, cta: "Contact Sales" },
                ].map(({ name, price, period, description, features, highlighted, cta, badge, yearly }, i) => {
                  const ref = useRef<HTMLDivElement>(null);
                  const [vis, setVis] = useState(false);
                  useEffect(() => {
                    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
                    if (ref.current) ob.observe(ref.current);
                    return () => ob.disconnect();
                  }, []);
                  return (
                    <div
                      key={name}
                      ref={ref}
                      className={`rounded-2xl border p-6 text-left flex flex-col text-white ${highlighted ? "bg-[#0A2A33] border-[#1F7A8C] shadow-2xl scale-105" : "bg-white/10 backdrop-blur-md border-white/20"}`}
                      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold">{name}</h3>
                        {badge && <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#0A2A33] text-white"}`}>{badge}</span>}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/70">{description}</p>
                      <ul className="mt-3 space-y-1.5 flex-1">
                        {features.map((f) => (
                          <li key={f} className="text-xs flex items-start gap-2"><span>✓</span><span>{f}</span></li>
                        ))}
                      </ul>
                      <button className={`mt-5 px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition cursor-pointer ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#1F7A8C] text-white"}`}>
                        {cta}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* ── INDUSTRIES ── */}
        <Section id="industries" style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #c8e8f0 50%, #a8d8e8 100%)" }}>
          <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 pt-20 pb-4 md:pt-24 md:pb-6 overflow-y-auto mt-8 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Built for Every Lending Vertical</h1>
            <p className="mt-2 md:mt-4 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              Whether microfinance, digital lending, or full-scale banking — Connekt adapts.
            </p>
            <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl w-full">
              {[
                { title: "Microfinance Institutions", body: "Scale high-volume, low-value loans across distributed agent networks.", icon: Banknote },
                { title: "SACCOs & Credit Unions", body: "Manage member loans, savings, and group lending with full compliance.", icon: Landmark },
                { title: "Digital Lenders", body: "Launch digital loan products with real-time decisioning and open API infrastructure.", icon: Smartphone },
                { title: "Banks & Financial Institutions", body: "Modernize your lending stack without replacing core banking systems.", icon: Building },
                { title: "Agri-Finance", body: "Extend credit to smallholder farmers with seasonal schedules and field agent tools.", icon: Sprout },
                { title: "SME Lenders", body: "Offer working capital, invoice financing, and asset-backed loans to small businesses.", icon: Briefcase },
              ].map(({ title, body, icon: Icon }, i) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 p-4 md:p-8 text-left"
                  style={{
                    opacity: 1,
                    animation: `slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.07}s both`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />}
                    <h3 className="text-sm md:text-lg font-bold leading-snug text-[#0A2A33]">{title}</h3>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[#0A2A33]/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── PRODUCT SUITE ── */}
        <Section id="products" className="!h-auto !overflow-visible min-h-[100dvh]">
          <div className="relative z-10 flex flex-col w-full py-10 md:py-16">

            {/* ── Top: product cards ── */}
            <div className="flex flex-col items-center justify-start px-5 md:px-16 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3">The Full Product Suite</h1>
              <p className="max-w-2xl text-sm md:text-base text-[#0A2A33]/80 text-center mb-8">
                Every tool your team and borrowers need — from field to dashboard.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full max-w-6xl">
                {[
                  {
                    title: "Kula",
                    badge: "Learn Ink integrated",
                    Icon: Smartphone,
                    body: "A polished mobile app that puts loan management in every borrower's pocket — with built-in financial literacy powered by Learn Ink.",
                    features: ["Apply for loans & track status in real time", "Financial literacy via Learn Ink", "Repayment schedules & payment history", "Push notifications for approvals"],
                  },
                  {
                    title: "Zanga",
                    badge: "Works offline",
                    Icon: Users,
                    body: "Empower your loan officers with an offline-capable app built for last-mile lending in low-connectivity environments.",
                    features: ["Offline-first data capture & sync", "Client registration, KYC & photo capture", "GPS-verified field visit logging", "Group lending & meeting management"],
                  },
                  {
                    title: "Fanaka IQ",
                    badge: "Auto disbursement",
                    Icon: Brain,
                    body: "Machine-learning credit scoring trained on your own portfolio data — enabling instant decisions and automatic disbursement.",
                    features: ["AI-generated credit scores per borrower", "Automatic disbursement on score threshold", "Fraud signal & duplicate detection", "Model retraining as portfolio grows"],
                  },
                  {
                    title: "Redash Dashboards",
                    badge: "Your data, your dashboards",
                    Icon: LayoutDashboard,
                    body: "A dedicated Redash workspace, pre-configured for your organisation, so your team can build and share any analytics dashboard.",
                    features: ["Dedicated Redash profile per lender", "Drag-and-drop dashboard builder", "Scheduled report delivery via email", "Multi-team access controls"],
                  },
                ].map(({ title, badge, Icon, body, features }, i) => {
                  const ref = useRef<HTMLDivElement>(null);
                  const [vis, setVis] = useState(false);
                  useEffect(() => {
                    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
                    if (ref.current) ob.observe(ref.current);
                    return () => ob.disconnect();
                  }, []);
                  return (
                    <div
                      key={title}
                      ref={ref}
                      className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 flex flex-col min-h-[300px] md:min-h-[360px]"
                      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s` }}
                    >
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />
                          <h3 className="text-base md:text-lg font-bold leading-snug">{title}</h3>
                        </div>
                        <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-[#0A2A33]/10 text-[#0A2A33]">{badge}</span>
                      </div>
                      <p className="text-sm text-[#0A2A33]/80 leading-relaxed mb-4">{body}</p>
                      <ul className="mt-auto space-y-2">
                        {features.map(f => (
                          <li key={f} className="flex items-start gap-2 text-sm text-[#0A2A33]/90">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0A2A33]" strokeWidth={2} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Bottom: ecosystem write-up + diagram ── */}
            <div className="flex flex-col items-center gap-12 px-5 md:px-16 mt-16 pb-20 w-full">

              {/* Text block — full width, centred */}
              <div className="w-full max-w-4xl text-center">
                <p className="text-xs font-semibold text-[#0A2A33]/50 uppercase tracking-widest mb-3">The Connekt Ecosystem</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2A33] leading-snug mb-4">
                  One command centre for your entire lending operation
                </h2>
                <p className="text-sm md:text-base text-[#0A2A33]/70 leading-relaxed max-w-2xl mx-auto mb-8">
                  Every app in the Fanaka Technologies suite feeds into Connekt. From the moment a borrower submits an application to the day their loan is fully repaid, every touchpoint is visible and actionable from one place.
                </p>
                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-2.5">
                  {[
                    "Loan origination & underwriting",
                    "Portfolio management",
                    "Real-time risk scoring",
                    "Payment & repayment tracking",
                    "Compliance reporting",
                    "Custom workflows & automation",
                  ].map(item => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#0A2A33]/10 text-[#0A2A33] border border-[#0A2A33]/15 px-4 py-2 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-[#1F7A8C]" strokeWidth={2.5} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Diagram — full width */}
              <div className="w-full max-w-3xl">
                {/* Row 1: Kula + Zanga */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { name: "Kula", sub: "Borrower App", desc: "Loan applications & repayments" },
                    { name: "Zanga", sub: "Agent App", desc: "Field visits & client registration" },
                  ].map(({ name, sub, desc }) => (
                    <div key={name} className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl p-5 text-center shadow-md">
                      <div className="font-extrabold text-[#0A2A33] text-lg sm:text-xl">{name}</div>
                      <div className="text-[#1F7A8C] text-sm font-semibold mt-1">{sub}</div>
                      <div className="text-[#0A2A33]/60 text-xs mt-1.5">{desc}</div>
                    </div>
                  ))}
                </div>

                {/* Connector */}
                <div className="flex justify-center py-3">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                    <line x1="12" y1="0" x2="12" y2="24" stroke="#0A2A33" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 3"/>
                    <path d="M6 20 L12 28 L18 20" stroke="#0A2A33" strokeOpacity="0.4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Row 2: Connekt (hero node) */}
                <div className="relative bg-[#0A2A33] rounded-2xl p-6 text-center shadow-xl ring-1 ring-[#1F7A8C]/40">
                  <div className="absolute -top-3 -right-3 bg-[#1F7A8C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">Live</div>
                  <div className="font-extrabold text-[#BFDBF7] text-2xl sm:text-3xl mb-2">Connekt</div>
                  <div className="text-[#BFDBF7]/60 text-sm">Web Portal · Origination · Servicing · Collections · Compliance</div>
                </div>

                {/* Connector */}
                <div className="flex justify-center py-3">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                    <line x1="12" y1="0" x2="12" y2="24" stroke="#0A2A33" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 3"/>
                    <path d="M6 20 L12 28 L18 20" stroke="#0A2A33" strokeOpacity="0.4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Row 3: four modules */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { name: "Fanaka IQ",     sub: "AI auto-decisions" },
                    { name: "Portfolio Mgr", sub: "Collections & PAR" },
                    { name: "Learn Ink",     sub: "Financial literacy" },
                    { name: "Redash",        sub: "Custom dashboards" },
                  ].map(({ name, sub }) => (
                    <div key={name} className="bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl p-4 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-sm sm:text-base">{name}</div>
                      <div className="text-[#0A2A33]/60 text-xs mt-1">{sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── How it works ── */}
              <div className="w-full max-w-4xl mt-4">
                {/* Header */}
                <div className="text-center mb-8">
                  <p className="text-xs font-semibold text-[#0A2A33]/50 uppercase tracking-widest mb-2">How it works</p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0A2A33] leading-snug">
                    Up and running in three steps
                  </h2>
                  <p className="text-sm md:text-base text-[#0A2A33]/60 mt-2 max-w-xl mx-auto">
                    No lengthy implementation projects. Most lenders go live within a single business day.
                  </p>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                  {/* Dotted connectors — stop before/after each circle */}
                  <div className="hidden sm:block absolute top-7 left-[calc(16.67%+2rem)] right-[calc(50%+2rem)] border-t-2 border-dashed border-[#0A2A33]/25 z-0" />
                  <div className="hidden sm:block absolute top-7 left-[calc(50%+2rem)] right-[calc(16.67%+2rem)] border-t-2 border-dashed border-[#0A2A33]/25 z-0" />

                  {[
                    {
                      step: "01",
                      title: "Onboard your organisation",
                      body: "Register, configure your products, and invite your team in under 10 minutes. No IT resources required.",
                    },
                    {
                      step: "02",
                      title: "Process loan applications",
                      body: "Borrowers apply via the Kula mobile app; your team reviews, scores, and approves directly inside Connekt.",
                    },
                    {
                      step: "03",
                      title: "Manage the full lifecycle",
                      body: "Track repayments, trigger reminders, manage delinquencies, and generate compliance reports — all in one place.",
                    },
                  ].map(({ step, title, body }) => (
                    <div key={step} className="relative flex flex-col items-center text-center sm:items-center">
                      {/* Circled step number */}
                      <div className="relative z-10 w-14 h-14 rounded-full border-2 border-dashed border-[#0A2A33]/40 flex items-center justify-center mb-4 flex-shrink-0">
                        <span className="text-lg font-black text-[#0A2A33]/70 leading-none select-none">{step}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0A2A33] mb-2 leading-snug">{title}</h3>
                      <p className="text-sm text-[#0A2A33]/65 leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <div className="mt-6 flex items-center justify-center gap-3 bg-[#0A2A33]/8 border border-[#0A2A33]/15 rounded-2xl px-5 py-4">
                  <CheckCircle className="w-5 h-5 text-[#1F7A8C] flex-shrink-0" strokeWidth={2.5} />
                  <p className="text-sm text-[#0A2A33]/80">
                    <span className="font-bold text-[#0A2A33]">Average onboarding time: under 1 day.</span>{" "}
                    Our implementation team handles data migration and configuration so your staff can focus on lending.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Section>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes floatGentle {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-12px) translateX(8px) scale(1.04); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes mobileSwapOut {
          0%   { opacity: 1; transform: translateX(0) scale(1); }
          44%  { opacity: 1; transform: translateX(0) scale(1); }
          47%  { opacity: 0; transform: translateX(-24px) scale(0.97); }
          97%  { opacity: 0; transform: translateX(24px) scale(0.97); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes mobileSwapIn {
          0%   { opacity: 0; transform: translateX(24px) scale(0.97); }
          44%  { opacity: 0; transform: translateX(24px) scale(0.97); }
          47%  { opacity: 1; transform: translateX(0) scale(1); }
          97%  { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(-24px) scale(0.97); }
        }
        @keyframes mobileSwapDot1 {
          0%,44% { opacity: 1; transform: scale(1.2); }
          47%,97% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes mobileSwapDot2 {
          0%,44% { opacity: 0.3; transform: scale(1); }
          47%,97% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes mobileSwapLabel {
          0%,44% { opacity: 0.8; }
          47%,97% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </>
  );
}