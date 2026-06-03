"use client";

import { useEffect, useRef, useState } from "react";

export default function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative h-[100dvh] w-full flex-shrink-0 bg-gradient-to-br from-[#BFDBF7] to-[#1F7A8C] text-[#0A2A33] overflow-hidden ${className}`}
      style={style}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
          transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </section>
  );
}
