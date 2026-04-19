import Navbar from "../components/Navbar";
import ScrollNavigator from "../components/ScrollNavigator";

export default function Solution() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33]">
      <Navbar />
      <ScrollNavigator />

      <div className="page-enter relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Our Solution
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
          Connekt SaaS delivers an end-to-end lending and financial operations platform —
          built for speed, built for scale, and designed to integrate with the tools you
          already use.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {[
            {
              title: "Loan Origination",
              body: "Automate the full loan lifecycle from application to disbursement with configurable workflows and real-time decisioning.",
            },
            {
              title: "Portfolio Management",
              body: "Monitor, manage, and optimize your loan portfolio with powerful dashboards and analytics built for lenders.",
            },
            {
              title: "Commerce Integrations",
              body: "Unlock optional buy-now-pay-later and embedded finance capabilities that connect your lending to commerce.",
            },
            {
              title: "Compliance & Risk",
              body: "Stay ahead of regulatory requirements with built-in compliance tools, audit trails, and automated risk scoring.",
            },
            {
              title: "API-First Infrastructure",
              body: "Every feature is accessible via a clean, well-documented API — integrate with any stack in minutes.",
            },
            {
              title: "White-Label Ready",
              body: "Deploy under your brand. Full white-labeling support so your customers see only you.",
            },
          ].map(({ title, body }, i) => (
            <div
              key={title}
              className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-8 text-left"
              style={{ animation: `slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s both` }}
            >
              <h3 className="text-lg font-bold mb-3">{title}</h3>
              <p className="text-sm text-[#0A2A33]/80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
