import type { ElementType, ReactNode } from "react";

/** Static wrapper. Legacy animation options never reach the DOM. */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  [key: string]: unknown;
}) {
  for (const option of ["direction", "delay", "duration", "threshold", "once"]) {
    delete rest[option];
  }
  return <Tag className={className} {...rest}>{children}</Tag>;
}
