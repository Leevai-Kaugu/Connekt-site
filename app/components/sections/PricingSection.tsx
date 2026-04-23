"use client";

import { useEffect, useRef, useState } from "react";
import Section from "../Section";

const plans = [
  { name: "Starter / Demo", price: "Free",  period: "",    description: "Perfect for businesses looking to organize finances and take control of lending.", features: ["Simple loan tracking", "Monitor repayments with clarity", "Essential financial insights", "1–3 Users", "10 clients, 20 loans"], highlighted: false, cta: "Get Started" },
  { name: "Growth",         price: "$85",   period: "/mo", description: "Designed for institutions ready to streamline operations and improve decisions.", features: ["Full loan lifecycle management", "Smart reporting & analytics", "Multi-user collaboration", "Fanaka Academy access", "Customer app access"], highlighted: true,  cta: "Get Started", badge: "Most Popular", yearly: "$950/yr" },
  { name: "Scale",          price: "$250",  period: "/mo", description: "For high-performing organizations needing deeper insights and automation.", features: ["Advanced underwriting with FanakaIQ", "Custom workflows & auto disbursement", "API integrations & push notifications", "Priority support", "Customer app & agent app"], highlighted: false, cta: "Get Started", yearly: "$2,900/yr" },
  { name: "Enterprise",     price: "Custom", period: "",   description: "A fully customized solution for large institutions driving large-scale change.", features: ["Fully customizable platform", "Dedicated support & SLA", "Advanced integrations & dedicated servers", "Customised FanakaIQ model", "Complex lending ecosystems"], highlighted: false, cta: "Contact Sales" },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
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
      className={`rounded-2xl border p-6 text-left flex flex-col text-white ${plan.highlighted ? "bg-[#0A2A33] border-[#1F7A8C] shadow-2xl scale-105" : "bg-white/10 backdrop-blur-md border-white/20"}`}
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.1}s` }}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold">{plan.name}</h3>
        {plan.badge && <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${plan.highlighted ? "bg-white text-[#0A2A33]" : "bg-[#0A2A33] text-white"}`}>{plan.badge}</span>}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/70">{plan.description}</p>
      <ul className="mt-3 space-y-1.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="text-xs flex items-start gap-2"><span>✓</span><span>{f}</span></li>
        ))}
      </ul>
      <button className={`mt-5 px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition cursor-pointer ${plan.highlighted ? "bg-white text-[#0A2A33]" : "bg-[#1F7A8C] text-white"}`}>
        {plan.cta}
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <Section id="pricing" className="text-white" style={{ background: "linear-gradient(135deg, #0a1f2e 0%, #0d2d3d 50%, #0f3a4a 100%)" }}>
      <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 pt-24 pb-4 md:pt-24 md:pb-6 overflow-y-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl text-white">Simple, Transparent Pricing</h1>
        <p className="mt-2 md:mt-4 max-w-2xl text-sm md:text-base text-white/70">
          Choose a plan that fits your scale. No hidden fees, no surprises.
        </p>

        {/* Mobile: horizontal scroll carousel */}
        <div className="mt-10 md:mt-8 w-full max-w-6xl">
          <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-3 px-1 -mx-1" style={{ scrollbarWidth: "none", height: "calc(100dvh - 20rem)" }}>
            {plans.map(({ name, price, period, description, features, highlighted, cta, badge }) => (
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
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
