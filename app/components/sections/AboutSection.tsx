"use client";

import { CreditCard, TrendingUp, BarChart3, AlertTriangle } from "lucide-react";
import Section from "../Section";

export default function AboutSection() {
  return (
    <Section id="about" className="!h-auto min-h-[100dvh]" style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #c8e8f0 50%, #a8d8e8 100%)" }}>
      <div className="mt-6 md:mt-0 relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-12 xl:px-20 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl xl:max-w-4xl">About Connekt SaaS</h1>
        <p className="mt-3 max-w-2xl xl:max-w-3xl text-sm md:text-base xl:text-lg text-[#0A2A33]/80">
          Built to modernize financial services. We empower lenders, fintechs, and enterprises
          with infrastructure that is fast, flexible, and built for scale.
        </p>

        {/* ── Metric bars ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full">
          {[
            { label: "Loans processed", value: "6,400+", sub: "+119 this month", pct: 72, Icon: CreditCard, barColor: "bg-[#1F7A8C]", iconColor: "text-[#1F7A8C]", border: "border-[#1F7A8C]/30" },
            { label: "Repayment", value: "95%+", sub: "on-time repayments", pct: 85, Icon: TrendingUp, barColor: "bg-[#22c55e]", iconColor: "text-[#22c55e]", border: "border-[#F97316]/30" },
            { label: "MSMEs served", value: "3,200+", sub: "more everyday", pct: 96, Icon: BarChart3, barColor: "bg-[#F97316]", iconColor: "text-[#F97316]", border: "border-[#22c55e]/30" },
          ].map(({ label, value, sub, pct, Icon, barColor, iconColor, border }, i) => (
            <div
              key={label}
              className={`rounded-2xl bg-white/20 backdrop-blur-md border ${border} p-4 text-left`}
              style={{
                opacity: 1,
                animation: `slideUpFade 0.5s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s both`,
              }}
            >
              <Icon className={`w-5 h-5 mb-2 ${iconColor}`} strokeWidth={1.8} />
              <p className="text-xs font-semibold text-[#0A2A33]/60 uppercase tracking-wide">{label}</p>
              <p className="text-2xl md:text-3xl xl:text-4xl font-extrabold mt-1">{value}</p>
              <p className="text-xs text-[#0A2A33]/60 mt-0.5">{sub}</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/30">
                <div
                  className={`h-1.5 rounded-full ${barColor}`}
                  style={{ width: `${pct}%`, transition: "width 1s cubic-bezier(0.22,1,0.36,1)" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bar chart ── */}
        <div className="mt-12 max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full p-4 md:p-6 xl:p-8">
          <p className="text-xs font-semibold text-[#0A2A33]/60 uppercase tracking-wide text-left mb-4">Monthly Disbursements (USD 500,000)</p>
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
                  className="w-full rounded-t-md bg-[#1F7A8C]/70 hover:bg-[#F97316] transition-all duration-300"
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
  );
}
