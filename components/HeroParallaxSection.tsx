"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type HeroParallaxSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroParallaxSection({ children, className }: HeroParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const updateParallax = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const bounds = section.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    section.style.setProperty("--hero-parallax-x", (x * 2).toFixed(3));
    section.style.setProperty("--hero-parallax-y", (y * 2).toFixed(3));
  };

  const resetParallax = () => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    section.style.setProperty("--hero-parallax-x", "0");
    section.style.setProperty("--hero-parallax-y", "0");
  };

  return (
    <section
      ref={sectionRef}
      className={className}
      onPointerMove={updateParallax}
      onPointerLeave={resetParallax}
    >
      {children}
    </section>
  );
}
