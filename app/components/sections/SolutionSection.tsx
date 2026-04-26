"use client";

import { Building2, Workflow, ShieldCheck, Plug2, Users, Rocket } from "lucide-react";
import Section from "../Section";
import Card from "../Card";

export default function SolutionSection() {
  return (
    <Section id="solution" className="!h-auto min-h-[100dvh]">
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 lg:px-12 xl:px-20 pt-24 pb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl xl:max-w-4xl">Our Solution</h1>
        <p className="mt-1.5 md:mt-4 max-w-2xl xl:max-w-3xl text-xs md:text-base xl:text-lg text-[#0A2A33]/80">
          Designed for the realities of African lending — mobile-first borrowers, variable connectivity, and strict compliance demands.
        </p>
        <div className="mt-8 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-7 max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full pb-2 md:pb-8">
          {[
            { title: "Multi-Tenant Architecture", body: "Each lender gets their own isolated environment, separate data, roles, and configuration — all on shared infrastructure.", icon: Building2, accent: "#1F7A8C" },
            { title: "No-Code Workflow Builder", body: "Design custom approval chains, escalation rules, and notification triggers without writing a single line of code.", icon: Workflow, accent: "#F97316" },
            { title: "Bank-Grade Security", body: "End-to-end encryption, MFA, and role-based access controls keep sensitive financial data protected at every layer.", icon: ShieldCheck, accent: "#22c55e" },
            { title: "Open Integrations", body: "REST API and webhooks connect Connekt to mobile money platforms, core banking systems, and credit bureaus.", icon: Plug2, accent: "#F97316" },
            { title: "Team Collaboration", body: "Granular role permissions and built-in workflows keep every team member accountable and aligned.", icon: Users, accent: "#22c55e" },
            { title: "Built to Scale", body: "Cloud-native infrastructure handles growth from dozens to hundreds of thousands of active loans without missing a beat.", icon: Rocket, accent: "#1F7A8C" },
          ].map(({ title, body, icon, accent }, i) => (
            <Card key={title} title={title} body={body} icon={icon} accentColor={accent} delay={0.05 + i * 0.07} />
          ))}
        </div>
      </div>
    </Section>
  );
}
