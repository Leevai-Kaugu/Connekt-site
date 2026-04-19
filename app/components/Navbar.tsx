"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "Industries", href: "#industries" },
  { label: "Developers", href: "#developers" },
];

export default function Navbar({ activeSection = "" }: { activeSection?: string }) {
  return (
    <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
      <div className="flex items-center">
        <Link href="#home">
          <Image
            src="/Connekt Saas logo.svg"
            alt="Connekt SaaS"
            width={140}
            height={36}
            priority
            style={{ width: "auto", height: "28px" }}
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-8 text-lg">
        {navLinks.map(({ label, href }) => {
          const sectionId = href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <Link
              key={href}
              href={href}
              className="cursor-pointer transition-colors duration-300 hover:opacity-70"
              style={{ color: isActive ? "#1F7A8C" : "#0A2A33", fontWeight: isActive ? 600 : undefined }}
            >
              {label}
            </Link>
          );
        })}
      </div>

      <button className="bg-white text-[#0A2A33] px-5 py-2 rounded-full text-sm font-medium shadow cursor-pointer hover:scale-105 transition">
        Start for Free
      </button>
    </nav>
  );
}
