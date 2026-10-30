"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

type ObserverPool = {
  observer: IntersectionObserver;
  callbacks: Map<Element, (entry: IntersectionObserverEntry) => void>;
};

const observers = new Map<number, ObserverPool>();

function observe(node: Element, threshold: number, callback: (entry: IntersectionObserverEntry) => void) {
  let pool = observers.get(threshold);
  if (!pool) {
    const callbacks: ObserverPool["callbacks"] = new Map();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) callbacks.get(entry.target)?.(entry);
    }, { threshold, rootMargin: "0px 0px -8% 0px" });
    pool = { observer, callbacks };
    observers.set(threshold, pool);
  }
  const current = pool;
  current.callbacks.set(node, callback);
  current.observer.observe(node);
  let observing = true;
  return () => {
    if (!observing) return;
    observing = false;
    current.observer.unobserve(node);
    current.callbacks.delete(node);
    if (!current.callbacks.size) {
      current.observer.disconnect();
      observers.delete(threshold);
    }
  };
}

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
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // SSR content is visible immediately. Only offscreen elements are prepared
    // for a reveal; initial content never waits for hydration or an observer.
    const stop = observe(node, threshold, entry => {
      if (entry.isIntersecting) {
        node.removeAttribute("data-reveal-pending");
        node.classList.add("is-visible");
        if (once) stop();
      } else {
        node.setAttribute("data-reveal-pending", "");
        node.classList.remove("is-visible");
      }
    });
    return () => {
      stop();
      node.removeAttribute("data-reveal-pending");
    };
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`vr-reveal ${DIR_CLASS[direction]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration * 1000}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
