"use client";

import { CreditCard } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div
      className="relative w-full rounded-[2rem] shadow-2xl pt-3 pb-2 px-2"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.28)",
        borderLeft: "1px solid rgba(255,255,255,0.22)",
        borderRight: "1px solid rgba(255,255,255,0.22)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30), 0 8px 32px rgba(0,0,0,0.35)",
      }}
    >
      {/* Notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1">
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <div className="w-5 h-1.5 rounded-full bg-white/15" />
      </div>

      {/* Screen — both app UIs stacked, swapped by CSS opacity */}
      <div className="w-full rounded-[1.4rem] overflow-hidden aspect-[9/19] relative"
        style={{ background: "rgba(30, 74, 101, 0.88)" }}>

        {/* ── CUSTOMER APP ── */}
        <div className="absolute inset-0 flex flex-col text-left" style={{ animation: "showCustomer 8s ease-in-out infinite", animationFillMode: "both" }}>
          {/* Status bar */}
          <div className="flex justify-between items-center px-3 pt-2 pb-1">
            <span className="text-[9px] font-semibold text-white/80">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="flex gap-px items-end h-2.5">
                {[30,55,75,100].map((h,i)=><div key={i} className="w-0.5 bg-white/70 rounded-sm" style={{height:`${h}%`}}/>)}
              </div>
              <div className="w-3 h-2 rounded-sm border border-white/60 flex items-center px-px"><div className="h-1.5 bg-white/70 rounded-sm flex-1"/></div>
            </div>
          </div>
          {/* Header */}
          <div className="flex items-center justify-between px-3 pt-1 pb-0.5">
            <span className="text-[13px] font-extrabold text-[#22c55e]">Customer App</span>
            <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center border border-[#22c55e]/30">
              <div className="w-3.5 h-3.5 rounded-full bg-[#22c55e]/50" />
            </div>
          </div>

          {/* Loan balance card */}
          <div className="mx-2.5 mb-2 rounded-2xl p-2.5 flex items-start gap-2"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
            }}>
            <div className="flex-1 min-w-0 text-left">
              <div className="text-[9px] text-white/60 font-medium mb-0.5">Current Loan Balance</div>
              <div className="text-[20px] font-extrabold text-[#BFDBF7] leading-tight">k3,750</div>
              <div className="text-[9px] text-white/55 mt-0.5">Fanaka super weekly</div>
              <div className="text-[9px] text-white/55">Principal: <span className="font-semibold text-white/80">k5,000</span></div>
              <div className="text-[9px] mt-0.5">Status: <span className="text-[#22c55e] font-semibold">On track</span></div>
              <div className="mt-1.5 h-1 w-full rounded-full bg-white/10">
                <div className="h-1 rounded-full bg-[#22c55e]" style={{width:"75%"}} />
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0 border border-[#22c55e]/30">
              <CreditCard className="w-5 h-5 text-[#22c55e]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Next payment card */}
          <div className="mx-2.5 mb-2 rounded-2xl p-2.5 flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}>
            <div className="w-7 h-7 rounded-xl bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0 border border-[#22c55e]/25">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="w-4 h-4"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] text-white/60">Next Payment</div>
              <div className="text-[13px] font-extrabold text-[#BFDBF7]">k1,250 <span className="text-[10px] text-[#22c55e] font-semibold">expected</span></div>
              <div className="text-[8px] text-white/50">Click to pay</div>
            </div>
            <div className="w-8 h-8 rounded-full flex flex-col items-center justify-center flex-shrink-0"
              style={{ border: "2px solid rgba(34,197,94,0.6)" }}>
              <span className="text-[9px] font-extrabold text-[#22c55e] leading-none">03</span>
              <span className="text-[7px] text-white/55 leading-none">days</span>
            </div>
          </div>

          {/* Academy row */}
          <div className="mx-2.5 mb-2">
            <div className="rounded-2xl p-2.5 flex items-center gap-3"
              style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", backdropFilter:"blur(12px)" }}>
              <div className="w-7 h-7 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0 border border-[#22c55e]/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" className="w-4 h-4"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] text-white/60 mb-0.5">Academy</div>
                <div className="text-[11px] font-extrabold text-[#22c55e] mb-1">FANAKA</div>
                <div className="h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 rounded-full bg-[#22c55e]" style={{width:"70%"}} />
                </div>
                <div className="text-[8px] text-white/55 mt-0.5">70% complete</div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex items-center justify-around px-3 py-2"
            style={{ background:"rgba(34,197,94,0.18)", borderTop:"1px solid rgba(34,197,94,0.25)", backdropFilter:"blur(12px)" }}>
            {[
              <svg key="home" viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/></svg>,
              <svg key="brief" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
              <svg key="dollar" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h4.5a1.5 1.5 0 010 3H10.5a1.5 1.5 0 000 3H15"/></svg>,
              <svg key="plant" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><path d="M12 22V12M12 12C12 7 7 5 3 6c0 4 2 8 9 6M12 12c0-5 5-7 9-6 0 4-2 8-9 6"/></svg>,
              <svg key="user" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
            ].map((icon, i) => (
              <div key={i} className={`flex items-center justify-center ${i === 0 ? "w-6 h-6 rounded-full bg-white/20" : ""}`}>{icon}</div>
            ))}
          </div>
        </div>

        {/* ── AGENT APP ── */}
        <div className="absolute inset-0 flex flex-col text-left" style={{ animation: "showAgent 8s ease-in-out infinite", animationFillMode: "both" }}>
          {/* Status bar */}
          <div className="flex justify-between items-center px-3 pt-2 pb-1">
            <span className="text-[9px] font-semibold text-white/80">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="flex gap-px items-end h-2.5">
                {[30,55,75,100].map((h,i)=><div key={i} className="w-0.5 bg-white/70 rounded-sm" style={{height:`${h}%`}}/>)}
              </div>
              <div className="w-3 h-2 rounded-sm border border-white/60 flex items-center px-px"><div className="h-1.5 bg-white/70 rounded-sm flex-1"/></div>
            </div>
          </div>
          {/* Header */}
          <div className="flex items-center justify-between px-3 pt-1 pb-0.5">
            <span className="text-[13px] font-extrabold text-[#F97316]">Agent App</span>
            <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center border border-[#F97316]/30">
              <div className="w-3.5 h-3.5 rounded-full bg-[#F97316]/50" />
            </div>
          </div>

          {/* Target card */}
          <div className="mx-2.5 mb-2 rounded-2xl p-2.5"
            style={{
              background: "rgba(249,115,22,0.18)",
              border: "1px solid rgba(249,115,22,0.35)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
            }}>
            <div className="text-[9px] text-white/65 font-medium mb-0.5">Monthly Target</div>
            <div className="text-[20px] font-extrabold text-[#BFDBF7] leading-tight">85% <span className="text-[10px] font-semibold text-white/60">achieved</span></div>
            <div className="text-[9px] text-white/60 mb-1.5">KES 340K / 400K</div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-[#F97316]" style={{width:"85%"}} />
            </div>
          </div>

          {/* Stats row */}
          <div className="mx-2.5 mb-2 grid grid-cols-3 gap-1.5">
            {[{l:"Loans",v:"12"},{l:"Clients",v:"28"},{l:"Rate",v:"94%"}].map(({l,v})=>(
              <div key={l} className="rounded-2xl p-2 text-center"
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", backdropFilter:"blur(12px)" }}>
                <div className="text-[14px] font-extrabold text-[#BFDBF7]">{v}</div>
                <div className="text-[9px] text-white/60">{l}</div>
              </div>
            ))}
          </div>

          {/* Float balance */}
          <div className="mx-2.5 mb-2 rounded-2xl p-2.5 flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}>
            <div className="w-7 h-7 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0 border border-[#F97316]/30">
              <CreditCard className="w-4 h-4 text-[#F97316]" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="text-[9px] text-white/60">Float Balance</div>
              <div className="text-[14px] font-extrabold text-[#BFDBF7]">KES 45,200</div>
            </div>
            <span className="text-[10px] text-[#22c55e] font-bold">Active</span>
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex items-center justify-around px-3 py-2"
            style={{ background:"rgba(249,115,22,0.18)", borderTop:"1px solid rgba(249,115,22,0.25)", backdropFilter:"blur(12px)" }}>
            {[
              <svg key="home" viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/></svg>,
              <svg key="brief" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
              <svg key="users" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87"/></svg>,
              <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
              <svg key="user" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
            ].map((icon, i) => (
              <div key={i} className={`flex items-center justify-center ${i === 0 ? "w-6 h-6 rounded-full bg-white/20" : ""}`}>{icon}</div>
            ))}
          </div>
        </div>

      </div>
      {/* Home bar */}
      <div className="flex justify-center mt-1.5">
        <div className="w-8 h-0.5 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
