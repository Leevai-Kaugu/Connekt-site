"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";

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
      className={`relative h-screen w-full flex-shrink-0 snap-start bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33] overflow-hidden ${className}`}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
          transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────────── */
function Card({ title, body, delay = 0 }: { title: string; body: string; delay?: number }) {
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
      className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-8 text-left"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm text-[#0A2A33]/80">{body}</p>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "solution", "pricing", "industries", "developers"];
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
        className="h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
      >
        {/* ── HERO ── */}
        <Section id="home">
          {/* Decorative circles */}
          <div className="absolute z-0 -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C6E7F]/30 blur-3xl pointer-events-none" style={{ animation: "floatSlow 8s ease-in-out infinite" }} />
          <div className="absolute z-0 top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl pointer-events-none" style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
          <div className="absolute z-0 top-[-500px] right-[-500px] w-[1200px] h-[1200px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 9s ease-in-out infinite" }} />
          <div className="absolute z-0 bottom-[-500px] left-[-500px] w-[1000px] h-[1000px] rounded-full pointer-events-none" style={{ border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 0 18px 5px rgba(255,255,255,0.3), inset 0 0 18px 5px rgba(255,255,255,0.1)", animation: "floatGentle 11s ease-in-out infinite", animationDelay: "3s" }} />

          <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
              Modern Financing Infrastructure.
              <br />
              <span className="block mt-2">Scale Every Opportunity.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#0A2A33]/80">
              Connekt SaaS is a powerful financial platform designed to simplify lending,
              automate operations, and unlock scalable growth with optional commerce integrations.
            </p>
            <button className="mt-8 px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer">
              Book a Demo
            </button>
          </div>
        </Section>

        {/* ── ABOUT ── */}
        <Section id="about">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">About Connekt SaaS</h1>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              Built to modernize financial services. We empower lenders, fintechs, and enterprises
              with infrastructure that is fast, flexible, and built for scale.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
              <Card title="Our Mission" body="To simplify lending and financial operations through intelligent automation and seamless integrations." delay={0.1} />
              <Card title="Our Vision" body="A world where every business, regardless of size, has access to enterprise-grade financial infrastructure." delay={0.2} />
              <Card title="Our Values" body="Transparency, reliability, and innovation — in everything we build and every partnership we form." delay={0.3} />
            </div>
          </div>
        </Section>

        {/* ── SOLUTION ── */}
        <Section id="solution">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24 overflow-y-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Our Solution</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              End-to-end lending and financial operations — built for speed, scale, and seamless integration.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full pb-8">
              {[
                { title: "Loan Origination", body: "Automate the full loan lifecycle with configurable workflows and real-time decisioning." },
                { title: "Portfolio Management", body: "Monitor and optimize your loan portfolio with powerful dashboards built for lenders." },
                { title: "Commerce Integrations", body: "Unlock BNPL and embedded finance capabilities connecting lending to commerce." },
                { title: "Compliance & Risk", body: "Built-in compliance tools, audit trails, and automated risk scoring." },
                { title: "API-First Infrastructure", body: "Every feature is accessible via a clean, well-documented API — integrate in minutes." },
                { title: "White-Label Ready", body: "Deploy under your brand. Full white-labeling support so customers see only you." },
              ].map(({ title, body }, i) => (
                <Card key={title} title={title} body={body} delay={0.05 + i * 0.07} />
              ))}
            </div>
          </div>
        </Section>

        {/* ── PRICING ── */}
        <Section id="pricing">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Simple, Transparent Pricing</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              Choose a plan that fits your scale. No hidden fees, no surprises.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
              {[
                { name: "Starter", price: "$199", period: "/mo", description: "For early-stage lenders.", features: ["500 loan accounts", "Core origination", "Basic analytics", "Email support"], highlighted: false },
                { name: "Growth", price: "$799", period: "/mo", description: "For scaling teams.", features: ["5,000 loan accounts", "Advanced automation", "Full analytics", "Priority support", "White-label"], highlighted: true },
                { name: "Enterprise", price: "Custom", period: "", description: "For large institutions.", features: ["Unlimited accounts", "Custom workflows", "Dedicated manager", "SLA guarantees"], highlighted: false },
              ].map(({ name, price, period, description, features, highlighted }, i) => {
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
                    className={`rounded-2xl border p-8 text-left flex flex-col ${highlighted ? "bg-[#0A2A33] text-white border-[#0A2A33] shadow-2xl scale-105" : "bg-white/20 backdrop-blur-md border-white/30"}`}
                    style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s` }}
                  >
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="text-4xl font-extrabold">{price}</span>
                      <span className="text-sm mb-1 opacity-70">{period}</span>
                    </div>
                    <p className={`mt-2 text-sm ${highlighted ? "text-white/70" : "text-[#0A2A33]/70"}`}>{description}</p>
                    <ul className="mt-4 space-y-2 flex-1">
                      {features.map((f) => (
                        <li key={f} className="text-sm flex items-start gap-2"><span>✓</span><span>{f}</span></li>
                      ))}
                    </ul>
                    <button className={`mt-6 px-6 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition cursor-pointer ${highlighted ? "bg-white text-[#0A2A33]" : "bg-[#0A2A33] text-white"}`}>
                      {name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── INDUSTRIES ── */}
        <Section id="industries">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Built for Every Lending Vertical</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              Whether microfinance, digital lending, or full-scale banking — Connekt adapts.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
              {[
                { title: "Microfinance Institutions", body: "Scale high-volume, low-value loans across distributed agent networks." },
                { title: "SACCOs & Credit Unions", body: "Manage member loans, savings, and group lending with full compliance." },
                { title: "Digital Lenders", body: "Launch digital loan products with real-time decisioning and open API infrastructure." },
                { title: "Banks & Financial Institutions", body: "Modernize your lending stack without replacing core banking systems." },
                { title: "Agri-Finance", body: "Extend credit to smallholder farmers with seasonal schedules and field agent tools." },
                { title: "SME Lenders", body: "Offer working capital, invoice financing, and asset-backed loans to small businesses." },
              ].map(({ title, body }, i) => (
                <Card key={title} title={title} body={body} delay={0.05 + i * 0.07} />
              ))}
            </div>
          </div>
        </Section>

        {/* ── DEVELOPERS ── */}
        <Section id="developers">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Build on Connekt</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
              Everything you need to integrate and extend the Connekt SaaS platform — sandbox to production.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap justify-center">
              <button className="px-7 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer text-sm">View API Docs</button>
              <button className="px-7 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#0A2A33] font-medium hover:scale-105 transition cursor-pointer text-sm">Get API Key</button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full">
              {[
                { title: "REST API", body: "Fully documented RESTful API. Authenticate with API keys and integrate in minutes.", badge: "v2.0" },
                { title: "Webhooks", body: "Subscribe to real-time events — approvals, repayments, disbursements.", badge: "Live" },
                { title: "SDKs", body: "Official SDKs for JavaScript, Python, and PHP. Community libraries for Go and Ruby.", badge: "Open Source" },
                { title: "Sandbox", body: "Test your integration in a safe, isolated sandbox with mock data and simulated events.", badge: "Free" },
                { title: "API Reference", body: "Comprehensive endpoint documentation with examples, error codes, and rate limits.", badge: "Docs" },
                { title: "Developer Support", body: "Access our Slack community, GitHub discussions, and dedicated technical support.", badge: "Community" },
              ].map(({ title, body, badge }, i) => {
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
                    className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-6 text-left"
                    style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.07}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.07}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-bold">{title}</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0A2A33]/10 text-[#0A2A33]">{badge}</span>
                    </div>
                    <p className="text-sm text-[#0A2A33]/80">{body}</p>
                  </div>
                );
              })}
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