"use client";

import { useState } from "react";
import { LayoutDashboard, BarChart2, Layers, Users, CreditCard, Target, MessageSquare, ShieldCheck, Settings2, Wrench, CheckSquare } from "lucide-react";
import Section from "../Section";

const features = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    color: "#1F7A8C",
    demoUrl: "#",
    details: [
      "Real-time portfolio overview with live loan and collections data",
      "Charts for KPIs, disbursements, and repayments",
      "Agent performance snapshots at a glance",
      "Drill-down summaries linked directly to underlying financial records",
    ],
  },
  {
    title: "Analytics",
    icon: BarChart2,
    color: "#F97316",
    demoUrl: "#",
    details: [
      "Interactive charts for loan performance, repayment trends, and portfolio health",
      "Configurable custom reports exported to PDF, Excel, or CSV",
      "In-depth financial, collections, operations, portfolio, and risk analysis & tracking charts and tables"
    ],
  },
  {
    title: "Workspace",
    icon: Layers,
    color: "#22c55e",
    demoUrl: "#",
    details: [
      "Centralized hub for teams to collaborate on lending operations",
      "Shared inboxes, notes, and activity feeds per loan or client",
      "Role-based workspaces for agents, supervisors, and management",
      "Cross-team visibility with granular access controls",
    ],
  },
  {
    title: "Clients",
    icon: Users,
    color: "#1F7A8C",
    demoUrl: "#",
    details: [
      "Full client lifecycle management — onboarding, KYC, and credit profiling",
      "360° client view: loan history, repayment behaviour, and communication log",
      "Automated KYC document verification and scoring integrations",
      "Group lending and guarantor relationship mapping",
    ],
  },
  {
    title: "Loans",
    icon: CreditCard,
    color: "#F97316",
    demoUrl: "#",
    details: [
      "End-to-end loan lifecycle from application and approval to disbursement and closure",
      "Configurable approval workflows with multi-level sign-off",
      "Automated repayment scheduling, arrears tracking, and penalty calculation",
      "Mobile money and bank disbursement integrations",
    ],
  },
  {
    title: "Targets",
    icon: Target,
    color: "#22c55e",
    demoUrl: "#",
    details: [
      "Set disbursement, collection, and client acquisition targets per team or branch",
      "Real-time progress tracking against monthly and quarterly KPIs",
      "Leaderboards and performance alerts to drive accountability",
      "Historical target vs. actuals comparison for forecasting",
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    color: "#1F7A8C",
    demoUrl: "#",
    details: [
      "Automated SMS, email, and in-app notifications for loan milestones",
      "Repayment reminder campaigns with customizable schedules",
      "Broadcast messaging to client segments for promotions and updates",
      "Two-way communication log attached to every client record",
    ],
  },
  {
    title: "Administration",
    icon: ShieldCheck,
    color: "#F97316",
    demoUrl: "#",
    details: [
      "User management with granular role and permission controls",
      "Multi-branch and multi-entity hierarchy support",
      "Configurable approval chains and escalation paths",
      "Full audit trail for all system actions and changes",
    ],
  },
  {
    title: "Configs",
    icon: Settings2,
    color: "#22c55e",
    demoUrl: "#",
    details: [
      "Flexible loan product builder — interest models, fees, and tenors",
      "Define repayment frequency, grace periods, and penalty rules",
      "Custom field creation for clients, loans, and operational forms",
      "Version-controlled configuration changes with rollback support",
    ],
  },
  {
    title: "Operations",
    icon: Wrench,
    color: "#1F7A8C",
    demoUrl: "#",
    details: [
      "Field agent management with visit scheduling and geo-tracking",
      "Collections workflow tools with daily targets and cash reconciliation",
      "Operational checklists and SLA monitoring for loan processing steps",
      "Incident logging and resolution tracking across branches",
    ],
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    color: "#F97316",
    demoUrl: "#",
    details: [
      "Create, assign, and prioritize tasks linked to loans or clients",
      "Due-date tracking with automated reminders and escalations",
      "Team-level task queues with status visibility for managers",
      "Integration with loan workflow stages for seamless handoffs",
    ],
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const current = features[active];
  const Icon = current.icon;

  return (
    <Section id="features" style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #c8e8f0 50%, #a8d8e8 100%)" }}>
      <div className="relative z-10 h-full flex flex-col px-4 lg:px-12 xl:px-20 pt-20 md:pt-24 pb-4 md:pb-6">

        {/* Header */}
        <div className="text-center mb-3 md:mb-5 flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0A2A33]">
            Built for Every Lending Vertical
          </h1>
          <p className="mt-1.5 text-xs md:text-base text-[#0A2A33]/70">
            Purpose-built features covering every stage of the lending lifecycle and all possible operational needs.
          </p>
        </div>

        {/* Body — mobile: stacked, desktop: two-column split */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 flex-1 min-h-0">

          {/* Left: feature selector — horizontal scroll on mobile, vertical scroll on desktop */}
          <div className="flex flex-col md:flex-col gap-1.5 md:w-56 lg:w-64 xl:w-72 flex-shrink-0">
            {/* scroll container */}
            <div className="relative">
              <div
                className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto pb-1 md:pb-0 pr-10 md:pr-0"
                style={{ scrollbarWidth: "none" }}
              >
                {features.map(({ title, icon: ItemIcon, color }, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={title}
                      onClick={() => setActive(i)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left flex-shrink-0 transition-all duration-200 ${
                        isActive
                          ? "bg-white/60 backdrop-blur-md shadow-md border border-white/60"
                          : "bg-white/20 hover:bg-white/35 border border-transparent"
                      }`}
                    >
                      <ItemIcon
                        className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0"
                        style={{ color: isActive ? color : "#0A2A33", opacity: isActive ? 1 : 0.55 }}
                        strokeWidth={2}
                      />
                      <span
                        className="text-xs whitespace-nowrap"
                        style={{ color: "#0A2A33", opacity: isActive ? 1 : 0.65, fontWeight: isActive ? 700 : 500 }}
                      >
                        {title}
                      </span>
                      {isActive && (
                        <span
                          className="ml-auto w-1.5 h-4 rounded-full hidden md:block flex-shrink-0"
                          style={{ background: color }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              {/* Right-edge fade — mobile only */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#b8d8e8]/90 to-transparent md:hidden" />
            </div>
            {/* Swipe hint — mobile only */}
            <p className="md:hidden text-center text-[10px] text-[#0A2A33]/45 tracking-wide">
              ← swipe to see all features →
            </p>
          </div>

          {/* Right: detail panel */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <div
              key={active}
              className="h-full rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 p-4 md:p-8 xl:p-10 flex flex-col overflow-hidden"
              style={{ animation: "slideUpFade 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {/* Feature header */}
              <div className="flex items-center gap-3 mb-3 md:mb-6 flex-shrink-0">
                <div
                  className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${current.color}22` }}
                >
                  <Icon className="w-5 h-5 md:w-7 md:h-7" style={{ color: current.color }} strokeWidth={1.8} />
                </div>
                <div>
                  <h2 className="text-base md:text-2xl xl:text-3xl font-extrabold text-[#0A2A33]">{current.title}</h2>
                  <a
                    href={current.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] md:text-sm mt-0.5 hover:underline"
                    style={{ color: current.color }}
                  >
                    Watch demo →
                  </a>
                </div>
              </div>

              {/* Detail bullets — scrollable inside the panel if needed */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 flex-1 min-h-0 overflow-y-auto content-start"
                style={{ scrollbarWidth: "none" }}
              >
                {current.details.map((d, i) => (
                  <div
                    key={d}
                    className="flex items-start gap-2.5 rounded-xl bg-white/30 border border-white/40 px-3 md:px-4 py-2.5 md:py-3"
                    style={{ animation: `slideUpFade 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both` }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0"
                      style={{ background: current.color }}
                    />
                    <p className="text-xs md:text-sm text-[#0A2A33]/80 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
