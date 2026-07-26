"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out function
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 3. Update ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Synchronize Lenis with GSAP's Ticker RAF
    // This provides perfect sync between GSAP animations and the scroll animation, eliminating jitter.
    function update(time: number) {
      lenis.raf(time * 1000); // GSAP Ticker provides time in seconds, Lenis expects milliseconds
    }

    gsap.ticker.add(update);

    // Disable lag smoothing in GSAP to avoid discrepancies
    gsap.ticker.lagSmoothing(0);

    // Clean up on component unmount to prevent memory leaks
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

