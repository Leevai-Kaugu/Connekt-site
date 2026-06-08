"use client";

import { useEffect, useRef, useState } from "react";

export default function Card({
  title,
  body,
  delay = 0,
  icon: Icon,
  accentColor = "#1F7A8C",
}: {
  title: string;
  body: string;
  delay?: number;
  icon?: React.ElementType;
  accentColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white/85 backdrop-blur-xl border border-[#0A2A33]/20 p-4 md:p-8 xl:p-10 text-left shadow-[0_18px_40px_rgba(10,42,51,0.14)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.82), inset 0 -1px 0 rgba(10,42,51,0.08), 0 18px 40px rgba(10,42,51,0.14), 0 0 0 1px ${accentColor}33`,
      }}
    >
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 flex-shrink-0" style={{ color: accentColor }} strokeWidth={1.8} />}
        <h3 className="text-sm md:text-lg xl:text-xl font-bold leading-snug">{title}</h3>
      </div>
      <p className="text-xs md:text-sm xl:text-base leading-relaxed text-[#0A2A33]/80">{body}</p>
    </div>
  );
}
