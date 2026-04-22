"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, CreditCard, AlertTriangle } from "lucide-react";

const metrics = [
  { label: "Active Loans",    value: "1,248",  sub: "+8% this month",       Icon: CreditCard,    pct: 72, pos: "top-[18%] left-[2%]" },
  { label: "Total Disbursed", value: "$4.2M",  sub: "across all clients",   Icon: TrendingUp,    pct: 85, pos: "top-[18%] right-[2%]" },
  { label: "Collection Rate", value: "96.3%",  sub: "on-time repayments",   Icon: BarChart3,     pct: 96, pos: "bottom-[18%] left-[2%]" },
  { label: "PAR 30",          value: "2.1%",   sub: "portfolio at risk",    Icon: AlertTriangle, pct: 14, pos: "bottom-[18%] right-[2%]" },
];

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function DashboardScrollHero({ containerRef }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  // Laptop rises from below the fold as user scrolls past the CTA
  const laptopY       = useTransform(scrollYProgress, [0, 0.35], [160, 0]);
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  // Exit: shrink + fade as About section approaches
  const laptopScale   = useTransform(scrollYProgress, [0.6, 1],  [1, 0.9]);
  const laptopFadeOut = useTransform(scrollYProgress, [0.65, 1], [1, 0]);
  const laptopFinal   = useTransform(
    [laptopOpacity, laptopFadeOut],
    ([a, b]) => Math.min(a as number, b as number)
  );

  // Cards: slightly delayed behind laptop, same exit
  const cardY       = useTransform(scrollYProgress, [0.08, 0.4],  [80, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.08, 0.38, 0.65, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-[200vh]"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 md:px-20">

        {/* Label */}
        <motion.p
          style={{ opacity: laptopOpacity }}
          className="text-xs font-semibold uppercase tracking-widest text-[#0A2A33]/60 mb-6"
        >
          See it in action
        </motion.p>

        {/* Laptop + floating cards wrapper */}
        <div className="relative w-full max-w-2xl mx-auto">

          {/* Laptop */}
          <motion.div
            style={{ y: laptopY, opacity: laptopFinal, scale: laptopScale }}
            className="relative w-full"
          >
            {/* Lid / screen */}
            <div className="relative w-full bg-[#0A2A33] rounded-t-2xl pt-4 px-3 pb-0 shadow-2xl ring-1 ring-white/10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="w-full rounded-t-xl overflow-hidden bg-[#0d1f26] aspect-[16/9]">
                <div className="w-full h-full flex flex-col p-3 gap-2">
                  {/* Top bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 rounded bg-[#1F7A8C]/70" />
                    <div className="flex-1" />
                    <div className="w-5 h-5 rounded-full bg-[#BFDBF7]/20" />
                    <div className="w-5 h-5 rounded-full bg-[#BFDBF7]/10" />
                  </div>
                  {/* KPI tiles */}
                  <div className="grid grid-cols-4 gap-2">
                    {[{l:"Loans",v:"1,248"},{l:"Disbursed",v:"$4.2M"},{l:"Rate",v:"96.3%"},{l:"PAR 30",v:"2.1%"}].map(({l,v}) => (
                      <div key={l} className="bg-white/10 rounded-lg p-2">
                        <div className="text-[8px] text-white/40 mb-1">{l}</div>
                        <div className="text-[10px] font-bold text-[#BFDBF7]">{v}</div>
                      </div>
                    ))}
                  </div>
                  {/* Bar chart */}
                  <div className="flex-1 bg-white/5 rounded-lg p-2 flex items-end gap-1">
                    {[55,68,72,60,78,91,85,95,88,100,93,97].map((v,i) => (
                      <div key={i} className="flex-1 rounded-t bg-[#1F7A8C]/80" style={{height:`${v}%`}} />
                    ))}
                  </div>
                  {/* Progress rows */}
                  <div className="grid grid-cols-3 gap-2">
                    {[{l:"Repaid",v:70},{l:"Active",v:45},{l:"Approved",v:88}].map(({l,v}) => (
                      <div key={l} className="bg-white/10 rounded-lg p-2">
                        <div className="text-[7px] text-white/40 mb-1">{l}</div>
                        <div className="w-full h-1.5 rounded-full bg-white/20">
                          <div className="h-1.5 rounded-full bg-[#BFDBF7]/70" style={{width:`${v}%`}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Base */}
            <div className="w-full h-3 bg-[#091c23] rounded-b-sm" />
            <div className="w-full h-3 bg-[#0A2A33]/90 rounded-b-xl flex justify-center items-center shadow-lg">
              <div className="w-14 h-1 rounded-full bg-white/10" />
            </div>
          </motion.div>

          {/* Floating metric cards */}
          {metrics.map(({ label, value, sub, Icon, pct, pos }, i) => (
            <motion.div
              key={label}
              style={{
                y: cardY,
                opacity: cardOpacity,
                transition: `all 0.1s`,
              }}
              className={`absolute ${pos} w-32 md:w-36 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-3 shadow-xl`}
              transition={{ delay: i * 0.06 }}
            >
              <Icon className="w-4 h-4 text-[#0A2A33]/70 mb-1.5" strokeWidth={1.8} />
              <p className="text-[9px] font-semibold text-[#0A2A33]/60 uppercase tracking-wide leading-tight">{label}</p>
              <p className="text-lg font-extrabold text-[#0A2A33] mt-0.5">{value}</p>
              <p className="text-[9px] text-[#0A2A33]/50 mt-0.5">{sub}</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/40">
                <div className="h-1.5 rounded-full bg-[#0A2A33]" style={{width:`${pct}%`}} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
