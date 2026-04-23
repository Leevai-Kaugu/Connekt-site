"use client";

import { Building2, Workflow, ShieldCheck, Plug2, Users, Rocket } from "lucide-react";
import Section from "../Section";
import Card from "../Card";

export default function SolutionSection() {
  return (
    <Section id="solution">
      <div className="relative z-10 flex flex-col items-center justify-start md:justify-center md:h-full text-center px-4 pt-20 pb-4 md:pt-24 md:pb-6 overflow-y-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">Our Solution</h1>
        <p className="mt-1.5 md:mt-4 max-w-2xl text-xs md:text-base text-[#0A2A33]/80">
          Designed for the realities of African lending — mobile-first borrowers, variable connectivity, and strict compliance demands.
        </p>
        <div className="mt-8 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl w-full pb-2 md:pb-8">
          {[
            { title: "Multi-Tenant Architecture", body: "Each lender gets their own isolated environment, separate data, roles, and configuration — all on shared infrastructure.", icon: Building2 },
            { title: "No-Code Workflow Builder", body: "Design custom approval chains, escalation rules, and notification triggers without writing a single line of code.", icon: Workflow },
            { title: "Bank-Grade Security", body: "End-to-end encryption, MFA, and role-based access controls keep sensitive financial data protected at every layer.", icon: ShieldCheck },
            { title: "Open Integrations", body: "REST API and webhooks connect Connekt to mobile money platforms, core banking systems, and credit bureaus.", icon: Plug2 },
            { title: "Team Collaboration", body: "Granular role permissions and built-in workflows keep every team member accountable and aligned.", icon: Users },
            { title: "Built to Scale", body: "Cloud-native infrastructure handles growth from dozens to hundreds of thousands of active loans without missing a beat.", icon: Rocket },
          ].map(({ title, body, icon }, i) => (
            <Card key={title} title={title} body={body} icon={icon} delay={0.05 + i * 0.07} />
          ))}
        </div>
      </div>
    </Section>
  );
}
