"use client";

import { Banknote, Landmark, Smartphone, Building, Sprout, Briefcase } from "lucide-react";
import Section from "../Section";

export default function IndustriesSection() {
  return (
    <Section id="industries" style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #c8e8f0 50%, #a8d8e8 100%)" }}>
      <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 lg:px-12 xl:px-20 pt-20 pb-4 md:pt-24 md:pb-6 overflow-y-auto mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl xl:max-w-4xl">Built for Every Lending Vertical</h1>
        <p className="mt-2 md:mt-4 max-w-2xl xl:max-w-3xl text-sm md:text-base xl:text-lg text-[#0A2A33]/80">
          Whether microfinance, digital lending, or full-scale banking — Connekt adapts.
        </p>
        <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full">
          {[
            { title: "Microfinance Institutions", body: "Scale high-volume, low-value loans across distributed agent networks.", icon: Banknote, accent: "text-[#1F7A8C]", border: "border-l-4 border-l-[#1F7A8C]" },
            { title: "SACCOs & Credit Unions", body: "Manage member loans, savings, and group lending with full compliance.", icon: Landmark, accent: "text-[#F97316]", border: "border-l-4 border-l-[#F97316]" },
            { title: "Digital Lenders", body: "Launch digital loan products with real-time decisioning and open API infrastructure.", icon: Smartphone, accent: "text-[#22c55e]", border: "border-l-4 border-l-[#22c55e]" },
            { title: "Banks & Financial Institutions", body: "Modernize your lending stack without replacing core banking systems.", icon: Building, accent: "text-[#1F7A8C]", border: "border-l-4 border-l-[#1F7A8C]" },
            { title: "Agri-Finance", body: "Extend credit to smallholder farmers with seasonal schedules and field agent tools.", icon: Sprout, accent: "text-[#22c55e]", border: "border-l-4 border-l-[#22c55e]" },
            { title: "SME Lenders", body: "Offer working capital, invoice financing, and asset-backed loans to small businesses.", icon: Briefcase, accent: "text-[#F97316]", border: "border-l-4 border-l-[#F97316]" },
          ].map(({ title, body, icon: Icon, accent, border }, i) => (
            <div
              key={title}
              className={`rounded-2xl bg-white/30 backdrop-blur-md border-t border-r border-b border-white/40 ${border} p-4 md:p-8 text-left`}
              style={{
                opacity: 1,
                animation: `slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.07}s both`,
              }}
            >
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                {Icon && <Icon className={`w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 flex-shrink-0 ${accent}`} strokeWidth={1.8} />}
                <h3 className="text-sm md:text-lg xl:text-xl font-bold leading-snug text-[#0A2A33]">{title}</h3>
              </div>
              <p className="text-xs md:text-sm xl:text-base leading-relaxed text-[#0A2A33]/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
