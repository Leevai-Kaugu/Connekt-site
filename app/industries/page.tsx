import Navbar from "../components/Navbar";
import ScrollNavigator from "../components/ScrollNavigator";

const industries = [
  {
    title: "Microfinance Institutions",
    body: "Scale your lending operations with automation built for high-volume, low-value loans across distributed agent networks.",
  },
  {
    title: "SACCOs & Credit Unions",
    body: "Manage member loans, savings, and group lending with compliance and transparency at every step.",
  },
  {
    title: "Digital Lenders",
    body: "Launch and scale digital loan products with real-time credit decisioning, mobile-first workflows, and open API infrastructure.",
  },
  {
    title: "Banks & Financial Institutions",
    body: "Modernize your lending stack without replacing core banking systems. Connekt integrates seamlessly with existing infrastructure.",
  },
  {
    title: "Agri-Finance",
    body: "Extend credit to smallholder farmers with seasonal repayment schedules, field agent tools, and commodity-linked financing.",
  },
  {
    title: "SME Lenders",
    body: "Offer working capital, invoice financing, and asset-backed loans to small businesses with streamlined underwriting.",
  },
];

export default function Industries() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33]">
      <Navbar />
      <ScrollNavigator />

      <div className="page-enter relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Built for Every Lending Vertical
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
          Whether you're a microfinance institution, a digital lender, or a full-scale bank,
          Connekt SaaS adapts to your industry's unique demands.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {industries.map(({ title, body }, i) => (
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
