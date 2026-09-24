"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type HeroParallaxSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroParallaxSection({ children, className }: HeroParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  const setParallax = (x: number, y: number) => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }
    section.style.setProperty("--px", x.toFixed(3));
    section.style.setProperty("--py", y.toFixed(3));
  };

  const updateParallax = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || frameRef.current !== null) {
      return;
    }

    const { clientX, clientY } = event;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const section = sectionRef.current;
      if (!section) {
        return;
      }
      const bounds = section.getBoundingClientRect();
      setParallax(
        ((clientX - bounds.left) / bounds.width - 0.5) * 2,
        ((clientY - bounds.top) / bounds.height - 0.5) * 2,
      );
    });
  };

  const resetParallax = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setParallax(0, 0);
  };

  return (
    <section
      ref={sectionRef}
      className={`hero-parallax ${className ?? ""}`}
      onPointerMove={updateParallax}
      onPointerLeave={resetParallax}
    >
      {children}
    </section>
  );
}
