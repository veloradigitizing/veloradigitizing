"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

// Tiny client island for the 3D mouse-tilt hover effect. The card's content is
// passed in as children, so it stays server-rendered and ships no extra JS.
export default function TiltCard({
  children,
  className,
  style,
  maxDeg = 8,
  hover = "scale3d(1.02, 1.02, 1.02)",
  rest = "scale3d(1, 1, 1)",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxDeg?: number;
  hover?: string;
  rest?: string;
}) {
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((e.clientY - rect.top - cy) / cy) * -maxDeg;
    const rotateY = ((e.clientX - rect.left - cx) / cx) * maxDeg;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${hover}`;
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) ${rest}`;
  };

  return (
    <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className} style={style}>
      {children}
    </div>
  );
}
