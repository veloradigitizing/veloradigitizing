"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Cover image slot for blog posts.
 * - When `image` is set, renders the real image.
 * - Otherwise renders a dashed placeholder box that shows the AI image prompt,
 *   so the image can be generated later and dropped into /public.
 */
export default function BlogImagePlaceholder({
  image,
  alt,
  prompt,
  priority = false,
  compact = false,
  className = "",
}: {
  image?: string;
  alt: string;
  prompt: string;
  priority?: boolean;
  /** Smaller text for card thumbnails */
  compact?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  if (image) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden ${className}`}>
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
        />
      </div>
    );
  }

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable, ignore */
    }
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-navy-950/20 bg-navy-950/[0.03] ${
        compact ? "p-3" : "p-5 sm:p-8"
      } ${className}`}
    >
      <span
        className={`mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 font-bold uppercase tracking-wider text-brand-600 ${
          compact ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[10px]"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className={compact ? "h-3 w-3" : "h-3.5 w-3.5"}
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        Image prompt
      </span>

      <p
        className={`max-w-2xl text-center leading-relaxed text-navy-950/60 ${
          compact ? "line-clamp-4 text-[11px]" : "text-xs sm:text-sm"
        }`}
      >
        {prompt}
      </p>

      {!compact && (
        <button
          type="button"
          onClick={copyPrompt}
          className="vr-btn mt-4 rounded-md border border-navy-950/15 bg-white px-4 py-2 text-xs font-semibold text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600"
        >
          {copied ? "Copied!" : "Copy prompt"}
        </button>
      )}
    </div>
  );
}
