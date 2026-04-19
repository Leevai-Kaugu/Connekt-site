import Navbar from "../components/Navbar";
import ScrollNavigator from "../components/ScrollNavigator";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for early-stage lenders getting started.",
    features: [
      "Up to 500 loan accounts",
      "Core origination workflows",
      "Basic reporting & analytics",
      "Email support",
      "API access",
    ],
  },
  {
    name: "Growth",
    price: "$799",
    period: "/month",
    description: "For scaling teams that need more power and flexibility.",
    features: [
      "Up to 5,000 loan accounts",
      "Advanced workflow automation",
      "Full portfolio analytics",
      "Priority support",
      "Webhooks & integrations",
      "White-label branding",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Built for large institutions with complex requirements.",
    features: [
      "Unlimited loan accounts",
      "Custom workflow configuration",
      "Dedicated success manager",
      "SLA guarantees",
      "On-premise or private cloud",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33]">
      <Navbar />
      <ScrollNavigator />

      <div className="page-enter relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Simple, Transparent Pricing
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
          Choose a plan that fits your scale. No hidden fees, no surprises.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {plans.map(({ name, price, period, description, features, highlighted }, i) => (
            <div
              key={name}
              className={`rounded-2xl border p-8 text-left flex flex-col ${
                highlighted
                  ? "bg-[#0A2A33] text-white border-[#0A2A33] shadow-2xl scale-105"
                  : "bg-white/20 backdrop-blur-md border-white/30"
              }`}
              style={{ animation: `slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s both` }}
            >
              <h3 className="text-lg font-bold">{name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{price}</span>
                <span className="text-sm mb-1 opacity-70">{period}</span>
              </div>
              <p className={`mt-3 text-sm ${highlighted ? "text-white/70" : "text-[#0A2A33]/70"}`}>
                {description}
              </p>
              <ul className="mt-6 space-y-2 flex-1">
                {features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 px-6 py-2.5 rounded-full font-medium text-sm transition hover:scale-105 cursor-pointer ${
                  highlighted
                    ? "bg-white text-[#0A2A33]"
                    : "bg-[#0A2A33] text-white"
                }`}
              >
                {name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
