"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const PAGE_ORDER = ["/", "/about", "/solution", "/pricing", "/industries", "/developers"];

export default function ScrollNavigator() {
  const router = useRouter();
  const transitioning = useRef(false);
  const lastWheel = useRef(0);
  const [overlay, setOverlay] = useState<"in" | "out" | null>(null);

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (transitioning.current) return;

      const currentPath = window.location.pathname;
      const currentIndex = PAGE_ORDER.indexOf(currentPath);
      const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0 || nextIndex >= PAGE_ORDER.length) return;

      transitioning.current = true;
      setOverlay("in");

      setTimeout(() => {
        router.push(PAGE_ORDER[nextIndex]);
      }, 450);
    },
    [router]
  );

  useEffect(() => {
    // Fade overlay out on mount (arriving at a new page)
    setOverlay("out");
    const timer = setTimeout(() => setOverlay(null), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheel.current < 1200) return;
      lastWheel.current = now;
      if (e.deltaY > 40) navigate("next");
      else if (e.deltaY < -40) navigate("prev");
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigate]);

  if (!overlay) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, #BFDBF7 0%, #1F7A8C 100%)",
        animation:
          overlay === "in"
            ? "overlayFadeIn 0.45s ease forwards"
            : "overlayFadeOut 0.5s ease forwards",
      }}
    />
  );
}
