"use client";

import { useEffect, useRef, useState } from "react";

export default function Card({
  title,
  body,
  delay = 0,
  icon: Icon,
}: {
  title: string;
  body: string;
  delay?: number;
  icon?: React.ElementType;
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
      className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 md:p-8 text-left"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#0A2A33]" strokeWidth={1.8} />}
        <h3 className="text-sm md:text-lg font-bold leading-snug">{title}</h3>
      </div>
      <p className="text-xs md:text-sm leading-relaxed text-[#0A2A33]/80">{body}</p>
    </div>
  );
}
