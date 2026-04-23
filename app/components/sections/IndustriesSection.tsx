"use client";

import { Banknote, Landmark, Smartphone, Building, Sprout, Briefcase } from "lucide-react";
import Section from "../Section";

export default function IndustriesSection() {
  return (
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
  );
}
