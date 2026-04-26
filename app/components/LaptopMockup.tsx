"use client";

import {
  LayoutDashboard,
  BarChart3,
  LayoutGrid,
  Users,
  Landmark,
  RefreshCcw,
  Target,
  MessageSquare,
  ShieldCheck,
  Settings,
  Search,
  Brain,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard",  active: true  },
  { icon: BarChart3,       label: "Analytics",  active: false },
  { icon: Users,           label: "Clients",    active: false },
  { icon: Landmark,        label: "Loans",      active: false },
  { icon: Target,          label: "Targets",    active: false },
  { icon: MessageSquare,   label: "Communication",   active: false },
  { icon: ShieldCheck,     label: "Administration",  active: false },
  { icon: Settings,        label: "Configurations",   active: false },
];

const BAR_DATA = [
  { agent: "L.K", val: 92, color: "bg-[#1F7A8C]"    },
  { agent: "A.O", val: 78, color: "bg-[#1F7A8C]"    },
  { agent: "F.N", val: 85, color: "bg-[#1F7A8C]"    },
  { agent: "J.M", val: 65, color: "bg-[#F97316]/80" },
  { agent: "P.W", val: 95, color: "bg-[#22c55e]"    },
];

const AI_HABITS = [
  { label: "Peak Repayment", value: "Mon 9–11 AM",  bar: 88, color: "bg-[#22c55e]"    },
  { label: "Loan Renewals",  value: "End of month", bar: 74, color: "bg-[#BFDBF7]/70" },
  { label: "Default Risk",   value: "Fridays",      bar: 42, color: "bg-[#F97316]"    },
  { label: "App Engagement", value: "7–9 PM daily", bar: 91, color: "bg-[#22c55e]"    },
];

export default function LaptopMockup() {
  return (
    <div
      className="relative w-full"
      style={{ animation: "floatSlow 9s ease-in-out infinite" }}
    >
      {/* ── Screen lid ── */}
      <div
        className="relative w-full rounded-t-2xl pt-5 px-4 pb-0"
        style={{
          background: "rgba(24, 74, 92, 0.12)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(55, 51, 51, 0.25)",
          borderLeft: "1px solid rgba(55, 51, 51, 0.25)",
          borderRight: "1px solid rgba(55, 51, 51, 0.25)",
          borderBottom: "none",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30), 0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        {/* Webcam dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/30" style={{ boxShadow: "0 0 4px rgba(120, 96, 96, 0.4)" }} />

        {/* Screen — layered glass bg */}
        <div
          className="w-full rounded-t-xl overflow-hidden aspect-[16/9] relative"
          style={{
            background: "rgba(28, 68, 93, 0.55)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {/* Ambient tint blobs */}
          <div className="absolute top-[-20%] left-[10%] w-[40%] h-[70%] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(31,122,140,0.18) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-10%] right-[15%] w-[30%] h-[50%] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />

          <div className="w-full h-full flex relative">

            {/* ── SIDEBAR ── */}
            <div
              className="flex flex-col h-full py-3 px-2 relative"
              style={{
                flex: "0 0 20%",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                borderRight: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "inset -1px 0 0 rgba(255,255,255,0.04), 1px 0 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Logo */}
              <div className="flex items-center mb-4 px-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Connekt Saas logo.svg"
                  alt="Connekt"
                  className="w-full max-w-[110px] h-auto"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
                />
              </div>

              {/* Nav items */}
              <nav className="flex flex-col gap-0.5 flex-1">
                {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg ${
                      active ? "bg-[#1F7A8C]/40 border border-[#1F7A8C]/50" : ""
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 ${active ? "text-[#BFDBF7]" : "text-white/35"}`}
                      strokeWidth={active ? 2.2 : 1.8}
                    />
                    <span className={`text-[12px] truncate ${active ? "text-[#BFDBF7] font-semibold" : "text-white/35"}`}>
                      {label}
                    </span>
                  </div>
                ))}
              </nav>

              {/* Bottom user chip */}
              <div
                className="flex items-center gap-2 mt-2 px-2 pt-2.5 pb-2 rounded-xl"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.06)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-7 h-7 rounded-full bg-[#1F7A8C]/60 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-[#BFDBF7]">LK</span>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-white/70 truncate">Levi Kaugu</div>
                  <div className="text-[9px] text-white/30 truncate">Admin</div>
                </div>
              </div>
            </div>

            {/* ── MAIN AREA ── */}
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

              {/* ── TOP NAVBAR ── */}
              <div
                className="flex items-center gap-3 px-4 py-2.5 flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 12px rgba(0,0,0,0.2)",
                }}
              >
                <span className="text-[15px] font-bold text-[#BFDBF7] tracking-wide">Dashboard</span>

                {/* Search bar */}
                <div className="flex items-center gap-1.5 bg-white/8 border border-white/10 rounded-lg px-2.5 py-1 flex-1 max-w-[160px]">
                  <Search className="w-3.5 h-3.5 text-white/30 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[11px] text-white/25">Search…</span>
                </div>

                <div className="flex-1" />

                {/* User info + avatar */}
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-[12px] font-semibold text-white/70 leading-none">Levi Kaugu</div>
                    <div className="text-[10px] text-[#1F7A8C] leading-none mt-0.5">Admin</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1F7A8C]/60 border border-[#1F7A8C]/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#BFDBF7]">LK</span>
                  </div>
                </div>
              </div>

              {/* ── CONTENT ── */}
              <div className="flex flex-col flex-1 min-h-0 p-3 gap-2.5 overflow-hidden">

                {/* ── STAT CARDS ── */}
                <div className="grid grid-cols-3 gap-2.5 flex-shrink-0">

                  {/* Applications */}
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(31,122,140,0.15)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(31,122,140,0.35)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 16px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-white/45 uppercase tracking-wider font-semibold">Applications</span>
                      <div className="flex items-center gap-0.5 text-[#22c55e]">
                        <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <span className="text-[10px] font-bold">+12%</span>
                      </div>
                    </div>
                    <div className="text-[26px] font-extrabold text-[#BFDBF7] leading-tight">7,216</div>
                    <div className="flex gap-1.5 mt-1">
                      <span className="text-[10px] text-[#22c55e]">957 active</span>
                      <span className="text-[10px] text-white/25">·</span>
                      <span className="text-[10px] text-[#F97316]/80">562 rejected</span>
                    </div>
                    <div className="mt-1.5 h-1 w-full rounded-full bg-white/10">
                      <div className="h-1 rounded-full bg-[#1F7A8C]" style={{ width: "75%" }} />
                    </div>
                  </div>

                  {/* Disbursements */}
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(34,197,94,0.10)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(34,197,94,0.30)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 16px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-white/45 uppercase tracking-wider font-semibold">Disbursements</span>
                      <div className="flex items-center gap-0.5 text-[#22c55e]">
                        <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <span className="text-[10px] font-bold">+8.4%</span>
                      </div>
                    </div>
                    <div className="text-[26px] font-extrabold text-[#22c55e] leading-tight">K 13.2M</div>
                    <div className="flex gap-1.5 mt-1">
                      <span className="text-[10px] text-[#BFDBF7]/55">14 today</span>
                      <span className="text-[10px] text-white/25">·</span>
                      <span className="text-[10px] text-[#BFDBF7]/40">avg K 23K</span>
                    </div>
                    <div className="mt-1.5 h-1 w-full rounded-full bg-white/10">
                      <div className="h-1 rounded-full bg-[#22c55e]" style={{ width: "88%" }} />
                    </div>
                  </div>

                  {/* Loans */}
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14), 0 4px 16px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-white/45 uppercase tracking-wider font-semibold">Loans</span>
                      <div className="flex items-center gap-0.5 text-[#F97316]">
                        <TrendingDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                        <span className="text-[10px] font-bold">-2.1%</span>
                      </div>
                    </div>
                    <div className="text-[26px] font-extrabold text-[#BFDBF7] leading-tight">6,528</div>
                    <div className="flex gap-1.5 mt-1">
                      <span className="text-[10px] text-[#22c55e]">956 active</span>
                      <span className="text-[10px] text-white/25">·</span>
                      <span className="text-[10px] text-red-400/80">858 overdue</span>
                    </div>
                    <div className="mt-1.5 h-1 w-full rounded-full bg-white/10">
                      <div className="h-1 rounded-full bg-[#BFDBF7]/60" style={{ width: "62%" }} />
                    </div>
                  </div>
                </div>

                {/* ── BOTTOM PANELS ── */}
                <div className="grid grid-cols-2 gap-2.5 flex-1 min-h-0">

                  {/* Agent Performance — bar chart */}
                  <div
                    className="rounded-xl p-3 flex flex-col min-h-0"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.13)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2 flex-shrink-0">
                      <div>
                        <div className="text-[14px] font-bold text-[#BFDBF7]">Agent Performance</div>
                        <div className="text-[10px] text-white/30 mt-0.5">Monthly disbursement targets</div>
                      </div>
                      <span className="text-[10px] bg-[#1F7A8C]/30 border border-[#1F7A8C]/40 text-[#BFDBF7]/60 px-2 py-0.5 rounded-full">This Month</span>
                    </div>

                    {/* Bars */}
                    <div className="flex items-end gap-2 flex-1 min-h-0">
                      {BAR_DATA.map(({ agent, val, color }) => (
                        <div key={agent} className="flex flex-col items-center gap-1 flex-1 h-full">
                          <span className="text-[9px] text-white/45 font-semibold flex-shrink-0">{val}%</span>
                          <div className="flex-1 w-full flex items-end">
                            <div
                              className={`w-full rounded-t-sm ${color}`}
                              style={{ height: `${val}%` }}
                            />
                          </div>
                          <span className="text-[9px] text-white/35 flex-shrink-0">{agent}</span>
                        </div>
                      ))}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-3 mt-2 pt-2 border-t border-white/8 flex-shrink-0">
                      <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]" /><span className="text-[9px] text-white/35">On target</span></div>
                      <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm bg-[#1F7A8C]" /><span className="text-[9px] text-white/35">Good</span></div>
                      <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm bg-[#F97316]/80" /><span className="text-[9px] text-white/35">Below</span></div>
                    </div>
                  </div>

                  {/* Client Habits — AI model */}
                  <div
                    className="rounded-xl p-3 flex flex-col min-h-0"
                    style={{
                      background: "rgba(31,122,140,0.12)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(31,122,140,0.30)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2 flex-shrink-0">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Brain className="w-4 h-4 text-[#BFDBF7]/80" strokeWidth={2} />
                          <span className="text-[14px] font-bold text-[#BFDBF7]">Connekt Ai</span>
                        </div>
                        <div className="text-[10px] text-white/30 mt-0.5">AI behavioural model · FanakaIQ</div>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] bg-[#22c55e]/20 border border-[#22c55e]/30 text-[#22c55e] px-2 py-0.5 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
                        Live
                      </span>
                    </div>

                    {/* Insight bars */}
                    <div className="flex flex-col gap-2.5 flex-1 justify-center">
                      {AI_HABITS.map(({ label, value, bar, color }) => (
                        <div key={label}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] text-white/55 font-medium">{label}</span>
                            <span className="text-[10px] text-[#BFDBF7]/55">{value}</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-white/8">
                            <div className={`h-2 rounded-full ${color}`} style={{ width: `${bar}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI recommendation chip */}
                    <div className="mt-2 pt-2 border-t border-white/8 flex-shrink-0">
                      <div
                        className="rounded-lg px-2.5 py-1.5"
                        style={{
                          background: "rgba(31,122,140,0.18)",
                          border: "1px solid rgba(31,122,140,0.35)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
                        }}
                      >
                        <div className="text-[9px] text-[#BFDBF7]/45 uppercase tracking-wider mb-0.5">AI Insight</div>
                        <div className="text-[10px] text-[#BFDBF7]/75 leading-snug">
                          Nudge Mon AM · flag Fri defaults early · high renewal propensity end-of-month
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Keyboard base ── */}
      <div
        className="w-full h-3"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderLeft: "1px solid rgba(255,255,255,0.20)",
          borderRight: "1px solid rgba(255,255,255,0.20)",
        }}
      />
      <div
        className="w-full h-4 rounded-b-2xl flex justify-center items-center"
        style={{
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "none",
          borderLeft: "1px solid rgba(255,255,255,0.20)",
          borderRight: "1px solid rgba(255,255,255,0.20)",
          borderBottom: "1px solid rgba(255,255,255,0.20)",
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.15), 0 12px 40px rgba(0,0,0,0.3)",
        }}
      >
        <div className="w-16 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
