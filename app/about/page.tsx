import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollNavigator from "../components/ScrollNavigator";

export default function About() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33]">

      <Navbar />
      <ScrollNavigator />

      {/* Page Content */}
      <div className="page-enter relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          About Connekt SaaS
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-[#0A2A33]/80">
          Connekt SaaS was built to modernize the financial services landscape. We empower
          lenders, fintechs, and enterprises with infrastructure that is fast, flexible, and
          built for scale — so you can focus on growth, not complexity.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {[
            { title: "Our Mission", body: "To simplify lending and financial operations through intelligent automation and seamless integrations." },
            { title: "Our Vision", body: "A world where every business, regardless of size, has access to enterprise-grade financial infrastructure." },
            { title: "Our Values", body: "Transparency, reliability, and innovation — in everything we build and every partnership we form." },
          ].map(({ title, body }, i) => (
            <div
              key={title}
              className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-8 text-left"
              style={{ animation: `slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.1}s both` }}
            >
              <h3 className="text-lg font-bold mb-3">{title}</h3>
              <p className="text-sm text-[#0A2A33]/80">{body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-12 px-8 py-3 rounded-full bg-[#0A2A33] text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
