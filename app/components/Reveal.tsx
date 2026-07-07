"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const DIR_CLASS: Record<Direction, string> = {
  up: "vr-up",
  down: "vr-down",
  left: "vr-left",
  right: "vr-right",
  scale: "vr-scale",
  fade: "",
};

export function Reveal({
  children,
  as,
  direction = "up",
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  [key: string]: unknown;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IO unsupported, just show.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`vr-reveal ${DIR_CLASS[direction]} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionDuration: visible ? `${duration * 1000}ms` : "0ms",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
