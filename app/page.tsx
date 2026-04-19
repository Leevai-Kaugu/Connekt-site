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
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
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
        className="h-[100dvh] overflow-y-scroll"
        style={{ scrollSnapType: "y proximity", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {/* ── HERO ── */}
        <Section id="home">
          {/* Decorative circles */}
          <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
          <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl pointer-events-none" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
          <div className="absolute z-0 top-[-500px] right-[-500px] w-[1200px] h-[1200px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
          <div className="absolute z-0 bottom-[-500px] left-[-500px] w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out infinite", animationDelay: "3s" }} />

          <div className="relative flex flex-col items-center justify-center text-center px-6 h-full overflow-y-auto">
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
        </Section>

        {/* ── ABOUT ── */}
        <Section id="about">
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
        <Section id="pricing">
          <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 pt-24 pb-4 md:pt-24 md:pb-6 overflow-y-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Simple, Transparent Pricing</h1>
            <p className="mt-2 md:mt-4 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
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
                    className={`rounded-2xl border p-5 text-left flex flex-col flex-shrink-0 w-[82vw] snap-center h-full ${highlighted ? "bg-[#0A2A33] text-white border-[#0A2A33] shadow-2xl" : "bg-white/20 backdrop-blur-md border-white/30"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold">{name}</h3>
                      {badge && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#0A2A33] flex-shrink-0">{badge}</span>}
                    </div>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="text-3xl font-extrabold">{price}</span>
                      <span className="text-sm mb-1 opacity-70">{period}</span>
                    </div>
                    {yearly && <p className={`text-xs mt-0.5 ${highlighted ? "text-white/60" : "text-[#0A2A33]/50"}`}>or {yearly}</p>}
                    <p className={`mt-2 text-xs leading-relaxed ${highlighted ? "text-white/70" : "text-[#0A2A33]/70"}`}>{description}</p>
                    <ul className="mt-3 space-y-1.5 flex-1">
                      {features.map((f) => (
                        <li key={f} className="text-xs flex items-start gap-2"><span>✓</span><span>{f}</span></li>
                      ))}
                    </ul>
                    <button className={`mt-4 px-5 py-2 rounded-full font-medium text-sm cursor-pointer ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#0A2A33] text-white"}`}>
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
                      className={`rounded-2xl border p-6 text-left flex flex-col ${highlighted ? "bg-[#0A2A33] text-white border-[#0A2A33] shadow-2xl scale-105" : "bg-white/20 backdrop-blur-md border-white/30"}`}
                      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold">{name}</h3>
                        {badge && <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#0A2A33] text-white"}`}>{badge}</span>}
                      </div>
                      <div className="mt-2 flex items-end gap-1">
                        <span className="text-3xl font-extrabold">{price}</span>
                        <span className="text-sm mb-1 opacity-70">{period}</span>
                      </div>
                      {yearly && <p className={`text-xs mt-0.5 ${highlighted ? "text-white/60" : "text-[#0A2A33]/50"}`}>or {yearly}</p>}
                      <p className={`mt-2 text-xs leading-relaxed ${highlighted ? "text-white/70" : "text-[#0A2A33]/70"}`}>{description}</p>
                      <ul className="mt-3 space-y-1.5 flex-1">
                        {features.map((f) => (
                          <li key={f} className="text-xs flex items-start gap-2"><span>✓</span><span>{f}</span></li>
                        ))}
                      </ul>
                      <button className={`mt-5 px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition cursor-pointer ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#0A2A33] text-white"}`}>
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
        <Section id="industries">
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
              ].map(({ title, body, icon }, i) => (
                <Card key={title} title={title} body={body} icon={icon} delay={0.05 + i * 0.07} />
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
            <div className="flex flex-col md:flex-row items-start gap-6 px-6 md:px-16 mt-12 pb-16">
              <div className="w-full md:w-1/2">
              <h2 className="text-base sm:text-lg md:text-xl font-extrabold leading-snug mb-1">
                Connekt — the command centre for your entire lending ecosystem
              </h2>
              <p className="text-[10px] md:text-xs text-[#0A2A33]/80 leading-relaxed mb-2">
                Every app in the Fanaka Technologies suite feeds into Connekt. From the moment a borrower submits an application to the day their loan is fully repaid, every touchpoint is visible and actionable from one place.
              </p>
              <ul className="space-y-1 mb-2">
                {[
                  "Automated loan origination & underwriting",
                  "Portfolio management and servicing",
                  "Real-time risk scoring",
                  "Payment processing & repayment tracking",
                  "Regulatory compliance reporting",
                  "Custom workflows and automation rules",
                ].map(item => (
                  <li key={item} className="flex items-start gap-1.5 text-[10px] md:text-xs text-[#0A2A33]/90">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0 text-[#0A2A33]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              </div>

              {/* Diagram */}
              <div className="w-full md:w-1/2">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                  {/* Title */}
                  <div className="text-center mb-3">
                    <h2 className="text-base md:text-lg font-bold text-[#0A2A33] tracking-wide">THE CONNEKT ECOSYSTEM</h2>
                  </div>

                  {/* Kula and Zanga Row */}
                  <div className="flex justify-between items-stretch gap-3 w-full">
                    <div className="flex-1 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl p-3 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-sm mb-0.5">Kula</div>
                      <div className="text-[#0A2A33]/70 text-xs">Borrowers</div>
                    </div>
                    <div className="flex-1 bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl p-3 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-sm mb-0.5">Zanga</div>
                      <div className="text-[#0A2A33]/70 text-xs">Field Agents</div>
                    </div>
                  </div>

                  {/* Arrow down from top row */}
                  <div className="flex justify-center w-full py-1">
                    <svg width="16" height="20" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="0" x2="12" y2="24" stroke="#0A2A33" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 2"/>
                      <path d="M6 20 L12 28 L18 20" stroke="#0A2A33" strokeOpacity="0.5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Connekt Row */}
                  <div className="flex justify-center w-full">
                    <div className="w-full bg-[#0A2A33] rounded-xl p-3 text-center shadow-lg relative">
                      <div className="font-bold text-[#BFDBF7] text-lg mb-0.5">Connekt</div>
                      <div className="text-[#BFDBF7]/70 text-xs">Web portal · Origination · Servicing · Compliance</div>
                      <div className="absolute -top-3 -right-3 bg-[#1F7A8C] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        Live
                      </div>
                    </div>
                  </div>

                  {/* Arrow down from Connekt */}
                  <div className="flex justify-center w-full py-1">
                    <svg width="16" height="20" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="0" x2="12" y2="24" stroke="#0A2A33" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 2"/>
                      <path d="M6 20 L12 28 L18 20" stroke="#0A2A33" strokeOpacity="0.5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Fanaka IQ, Portfolio Mgr, Learn Ink, Redash Row */}
                  <div className="flex justify-between gap-2 w-full">
                    <div className="flex-1 bg-white/25 backdrop-blur-sm border border-white/40 rounded-lg p-2 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-xs mb-0.5">Fanaka IQ</div>
                      <div className="text-[#0A2A33]/70 text-[10px]">AI auto-decisions</div>
                    </div>
                    <div className="flex-1 bg-white/25 backdrop-blur-sm border border-white/40 rounded-lg p-2 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-xs mb-0.5">Portfolio Mgr</div>
                      <div className="text-[#0A2A33]/70 text-[10px]">Collections & PAR</div>
                    </div>
                    <div className="flex-1 bg-white/25 backdrop-blur-sm border border-white/40 rounded-lg p-2 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-xs mb-0.5">Learn Ink</div>
                      <div className="text-[#0A2A33]/70 text-[10px]">Financial literacy</div>
                    </div>
                    <div className="flex-1 bg-white/25 backdrop-blur-sm border border-white/40 rounded-lg p-2 text-center shadow-md">
                      <div className="font-bold text-[#0A2A33] text-xs mb-0.5">Redash</div>
                      <div className="text-[#0A2A33]/70 text-[10px]">Custom dashboards</div>
                    </div>
                  </div>
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
      `}</style>
    </>
  );
}