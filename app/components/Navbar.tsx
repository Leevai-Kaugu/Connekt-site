"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import OnboardingModal from "./OnboardingModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const PATH_TO_SECTION: Record<string, string> = {
  "/about":      "about",
  "/solution":   "solution",
  "/pricing":    "pricing",
  "/features": "features",
  "/developers": "developers",
};

export default function Navbar({ activeSection = "" }: { activeSection?: string }) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // On standalone route pages the caller doesn't pass activeSection,
  // so derive it from the current URL path.
  const resolvedActive = activeSection || PATH_TO_SECTION[pathname] || "";

  useEffect(() => {
    // The scroll container is the first overflow-y-scroll div on the page
    const container = document.querySelector<HTMLElement>("[data-scroll-container]");
    const el = container ?? window as unknown as HTMLElement;

    const onScroll = () => {
      const current = container ? container.scrollTop : window.scrollY;
      const delta = current - lastScrollY.current;
      if (delta > 8) {
        const isMobile = window.innerWidth < 768;
        setHidden(isMobile);       // scrolling down — hide only on mobile
        if (isMobile) setMenuOpen(false); // close menu on scroll down
      } else if (delta < -8) setHidden(false);     // scrolling up
      lastScrollY.current = current;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <nav
      className="fixed z-50 top-6 left-1/2 w-[90%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
      style={{
        transform: `translateX(-50%) translateY(${hidden ? "calc(-100% - 2rem)" : "0"})`,
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <Link href="#home" className="flex items-center gap-2.5 group">
        <Image
          src="/Connekt Icon.svg"
          alt="Connekt"
          width={32}
          height={32}
          priority
          className="w-8 h-8 group-hover:scale-105 transition"
        />
        <div className="flex flex-col leading-none">
          <span className="text-sm font-extrabold text-[#0A2A33] tracking-tight">Connekt SaaS</span>
          <span className="text-[10px] text-[#1F7A8C] font-medium tracking-wide">smart financing platform</span>
        </div>
      </Link>

      <div className="hidden md:flex gap-8 text-lg">
        {navLinks.map(({ label, href }) => {
          const sectionId = href.replace("#", "");
          const isActive = resolvedActive === sectionId;
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

      {/* Desktop: Start for Free button */}
      <button
        onClick={() => setModalOpen(true)}
        className="hidden md:block bg-white text-[#0A2A33] px-5 py-2 rounded-full text-sm font-medium shadow cursor-pointer hover:scale-105 transition"
      >
        Start for Free
      </button>

      {/* Mobile: Hamburger button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className="block h-0.5 w-6 bg-[#0A2A33] transition-all duration-300 origin-center"
          style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}
        />
        <span
          className="block h-0.5 w-6 bg-[#0A2A33] transition-all duration-300"
          style={menuOpen ? { opacity: 0 } : {}}
        />
        <span
          className="block h-0.5 w-6 bg-[#0A2A33] transition-all duration-300 origin-center"
          style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
        />
      </button>

    </nav>

    {/* Mobile: Slide-down menu — separate fixed element to avoid layout issues */}
    <div
      className="md:hidden fixed z-40 left-1/2 w-[90%] max-w-6xl rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 overflow-hidden flex flex-col"
      style={{
        top: "5.5rem",
        transform: `translateX(-50%) translateY(${hidden ? "calc(-200% - 4rem)" : "0"})`,
        maxHeight: menuOpen ? "400px" : "0",
        opacity: menuOpen ? 1 : 0,
        transition: "max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {navLinks.map(({ label, href }) => {
        const sectionId = href.replace("#", "");
        const isActive = resolvedActive === sectionId;
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 text-base font-medium border-b border-white/20 last:border-0 transition-colors duration-200 hover:bg-white/40"
            style={{ color: isActive ? "#1F7A8C" : "#0A2A33", fontWeight: isActive ? 600 : undefined }}
          >
            {label}
          </Link>
        );
      })}
      <div className="px-6 py-4">
        <button
            onClick={() => { setMenuOpen(false); setModalOpen(true); }}
            className="w-full bg-[#1F7A8C] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow cursor-pointer hover:opacity-90 transition"
          >
            Start for Free
          </button>
      </div>
    </div>
      <OnboardingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
