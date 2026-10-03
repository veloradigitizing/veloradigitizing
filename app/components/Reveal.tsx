"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ElementType,
  type ReactNode,
} from "react";

const subscribeNoop = () => () => {};
const hasIntersectionObserver = () => typeof IntersectionObserver !== "undefined";
const assumeSupportedOnServer = () => true;

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
  const [inView, setInView] = useState(false);
  const ioSupported = useSyncExternalStore(
    subscribeNoop,
    hasIntersectionObserver,
    assumeSupportedOnServer,
  );
  // If IO is unsupported, just show.
  const visible = inView || !ioSupported;

  useEffect(() => {
    const node = ref.current;
    if (!node || !ioSupported) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, once, ioSupported]);

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
