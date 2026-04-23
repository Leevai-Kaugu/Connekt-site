"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const PAGE_ORDER = ["/", "/about", "/solution", "/pricing", "/industries", "/developers"];
type Direction = "next" | "prev";

export default function ScrollNavigator() {
  const router = useRouter();
  const transitioning = useRef(false);
  const lastWheel = useRef(0);
  const [overlayState, setOverlayState] = useState<{ phase: "in" | "out"; dir: Direction } | null>(null);

  const navigate = useCallback(
    (direction: Direction) => {
      if (transitioning.current) return;

      const currentPath = window.location.pathname;
      const currentIndex = PAGE_ORDER.indexOf(currentPath);
      const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0 || nextIndex >= PAGE_ORDER.length) return;

      transitioning.current = true;
      setOverlayState({ phase: "in", dir: direction });
      // Store direction so the arriving page knows which way to reveal
      sessionStorage.setItem("navDir", direction);

      setTimeout(() => {
        router.push(PAGE_ORDER[nextIndex]);
      }, 420);
    },
    [router]
  );

  useEffect(() => {
    // On mount: reveal the page by sweeping overlay away in the correct direction
    const dir = (sessionStorage.getItem("navDir") as Direction | null) ?? "next";
    setOverlayState({ phase: "out", dir });
    const timer = setTimeout(() => setOverlayState(null), 750);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheel.current < 900) return;
      lastWheel.current = now;
      if (e.deltaY > 40) navigate("next");
      else if (e.deltaY < -40) navigate("prev");
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigate]);

  if (!overlayState) return null;

  const { phase, dir } = overlayState;

  // "in"  = covering screen before navigation
  // "out" = sweeping away on the new page to reveal content
  const animName =
    phase === "in"
      ? dir === "next" ? "overlaySlideInNext" : "overlaySlideInPrev"
      : dir === "next" ? "overlaySlideOutNext" : "overlaySlideOutPrev";

  // Cover fast (snappy exit), reveal slow (graceful landing)
  const duration = phase === "in" ? "0.42s" : "0.68s";
  const easing   = phase === "in"
    ? "cubic-bezier(0.55, 0, 1, 0.45)"          // accelerate into cover
    : "cubic-bezier(0.16, 1, 0.3, 1)";           // spring-out on reveal

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none will-change-transform"
      style={{
        background: "linear-gradient(160deg, #0A2A33 0%, #1F7A8C 55%, #BFDBF7 100%)",
        animation: `${animName} ${duration} ${easing} forwards`,
      }}
    />
  );
}
