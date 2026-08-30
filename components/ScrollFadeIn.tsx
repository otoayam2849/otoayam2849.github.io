"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  transitionDelay?: number;
  className?: string;
};

export default function ScrollFadeIn({
  children,
  direction = "up",
  delay = 0,
  transitionDelay,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeDelay, setActiveDelay] = useState(delay);

  useEffect(() => {
    // 初回ローディング済みならtransitionDelayを使う
    if (transitionDelay !== undefined && (window as any).__initialLoadDone) {
      setActiveDelay(transitionDelay);
    }
  }, [transitionDelay, delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastY = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.boundingClientRect.top < 0 || window.scrollY < lastY) {
            el.style.transition = "none";
          }
          el.classList.add("is_visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    lastY = window.scrollY;
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll_fade scroll_fade_${direction} ${className}`}
      style={{ transitionDelay: `${activeDelay}ms` }}
    >
      {children}
    </div>
  );
}
