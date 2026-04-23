"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone, Users, Brain, LayoutDashboard, CheckCircle } from "lucide-react";
import Section from "../Section";

function ProductCard({
  title,
  badge,
  Icon,
  body,
  features,
  index,
}: {
  title: string;
  badge: string;
  Icon: React.ElementType;
  body: string;
  features: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 flex flex-col min-h-[300px] md:min-h-[360px]"
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + index * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + index * 0.08}s` }}
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
}

export default function ProductsSection() {
  return (
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
            ].map(({ title, badge, Icon, body, features }, i) => (
              <ProductCard key={title} title={title} badge={badge} Icon={Icon} body={body} features={features} index={i} />
            ))}
          </div>
        </div>

        {/* ── Bottom: ecosystem write-up + diagram ── */}
        <div className="flex flex-col items-center gap-12 px-5 md:px-16 mt-16 pb-20 w-full">

          {/* Text block */}
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

          {/* Diagram */}
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
              {/* Dotted connectors */}
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
  );
}
