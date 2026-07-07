/**
 * Stagger helper for scroll-reveal delays.
 *
 * This is a PLAIN module (no "use client") so it can be imported and
 * called from BOTH server components and client components.
 */
export function stagger(index: number, base = 90, start = 0): number {
  return start + index * base;
}
