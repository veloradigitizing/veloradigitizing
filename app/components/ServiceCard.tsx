"use client";

import Link from "next/link";
import { IconCircle } from "./Section";
import Icon from "./Icon";
import { SERVICES } from "./services-data";

export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  count?: number;
};

// Map service slugs to portfolio categories
const SERVICE_TO_CATEGORY: Record<string, string> = {
  "patch-digitizing": "patches",
  "custom-patches": "custom-patches",
  "cap-logo-digitizing": "cap-logo",
  "chenille-digitizing": "chenille",
  "jacket-back-digitizing": "jacket-back",
  "left-chest-logo": "left-chest-logo",
  "3d-puff-digitizing": "3d-puff",
  "towel-embroidery": "towel-design",
  "applique-digitizing": "applique-design",
  "vector-art": "vector-art",
  "shoulder-embroidery": "shoulder-design",
  "bundle-packages": "bundles",
};

export default function ServiceCard({ service }: { service: Service }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Get the portfolio category for this service
  const portfolioCategory = SERVICE_TO_CATEGORY[service.slug] || "all";
  const portfolioLink = `/portfolio?category=${portfolioCategory}`;

  return (
    <Link href={portfolioLink} className="group block h-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex h-full cursor-pointer flex-col rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:shadow-xl hover:shadow-brand-500/10"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out, box-shadow 0.3s ease' }}
      >
        {/* Icon - Fixed Size */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-brand-500/30" style={{ transform: 'translateZ(20px)' }}>
          <IconCircle icon={service.icon as any} size="sm" className="text-white" />
        </div>
        
        {/* Title - Fixed Height */}
        <div className="mt-5 shrink-0">
          <h3 className="text-lg font-bold leading-tight text-navy-950 transition-colors group-hover:text-brand-600 line-clamp-2" style={{ minHeight: '2.5rem' }}>
            {service.title}
          </h3>
        </div>
        
        {/* Description - Fixed Height with line clamp */}
        <div className="mt-3 grow shrink-0">
          <p className="text-sm leading-relaxed text-navy-950/60 line-clamp-3" style={{ minHeight: '3.75rem' }}>
            {service.description}
          </p>
        </div>
        
        {/* Footer - Fixed at bottom */}
        <div className="mt-auto flex shrink-0 items-center justify-between pt-4 border-t border-navy-950/5" style={{ transform: 'translateZ(10px)' }}>
          {service.count && (
            <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-600">
              {service.count}+ Designs
            </span>
          )}
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/10 text-navy-950/40 transition-all group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
        
        {/* Hover Glow Effect */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/10 via-transparent to-brand-600/5" />
        </div>
      </div>
    </Link>
  );
}