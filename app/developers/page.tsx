import Navbar from "../components/Navbar";
import ScrollNavigator from "../components/ScrollNavigator";

const resources = [
  {
    title: "REST API",
    body: "Fully documented RESTful API with JSON responses. Authenticate with API keys and integrate in minutes.",
    badge: "v2.0",
  },
  {
    title: "Webhooks",
    body: "Subscribe to real-time events — loan approvals, repayments, disbursements — and react instantly in your systems.",
    badge: "Live",
  },
  {
    title: "SDKs",
    body: "Official SDKs for JavaScript, Python, and PHP. Community libraries for Go, Ruby, and more.",
    badge: "Open Source",
  },
  {
    title: "Sandbox Environment",
    body: "Test your full integration in a safe, isolated sandbox with mock data and simulated loan events.",
    badge: "Free",
  },
  {
    title: "API Reference",
    body: "Comprehensive endpoint documentation with request/response examples, error codes, and rate limit details.",
    badge: "Docs",
  },
  {
    title: "Developer Support",
    body: "Access our developer Slack community, GitHub discussions, and dedicated technical support for integration questions.",
    badge: "Community",
  },
];

export default function Developers() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33]">
      <Navbar />
      <ScrollNavigator />

      <div className="page-enter relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Build on Connekt
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
          Everything you need to integrate, extend, and build on top of the Connekt SaaS
          platform — from sandbox to production.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-7 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer text-sm">
            View API Docs
          </button>
          <button className="px-7 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#0A2A33] font-medium hover:scale-105 transition cursor-pointer text-sm">
            Get API Key
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {resources.map(({ title, body, badge }, i) => (
            <div
              key={title}
              className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-8 text-left"
              style={{ animation: `slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s both` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">{title}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0A2A33]/10 text-[#0A2A33]">
                  {badge}
                </span>
              </div>
              <p className="text-sm text-[#0A2A33]/80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
