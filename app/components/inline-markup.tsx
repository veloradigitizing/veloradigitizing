import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders inline markdown-style links `[text](/href)` and `**bold**` inside
 * a paragraph. Internal links use next/link.
 */
export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      const href = match[2];
      const isInternal = href.startsWith("/");
      parts.push(
        isInternal ? (
          <Link
            key={key++}
            href={href}
            className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
          >
            {match[1]}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            {match[1]}
          </a>
        ),
      );
    } else {
      parts.push(
        <strong key={key++} className="font-semibold text-navy-950">
          {match[3]}
        </strong>,
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Removes inline markup, for plain-text contexts such as JSON-LD. */
export function stripInline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}
