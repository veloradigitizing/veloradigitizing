const PATHS: Record<string, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  stitch: (
    <>
      <path d="M2 12h3l2-6 3 12 3-12 2 6h6" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v.5a3.5 3.5 0 0 1-3.5 3.5H13" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 3.5v6c0 5-3.4 8.4-8 10.5-4.6-2.1-8-5.5-8-10.5v-6L12 2z" />
      <path d="M8.5 12l2.5 2.5 4.5-4.5" />
    </>
  ),
  "cloud-upload": (
    <>
      <path d="M7 18a4.5 4.5 0 0 1-1-8.9A5.5 5.5 0 0 1 16.6 8H17a4 4 0 0 1 1 7.9" />
      <path d="M12 21v-8m0 0-3 3m3-3 3 3" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 21h8M12 16v5" />
    </>
  ),
  "badge-check": (
    <>
      <path d="M12 2l2.4 1.3 2.7-.3 1.3 2.4 2.4 1.3-.3 2.7L21.8 12l-1.3 2.4.3 2.7-2.4 1.3-1.3 2.4-2.7-.3L12 22l-2.4-1.3-2.7.3-1.3-2.4-2.4-1.3.3-2.7L2.2 12l1.3-2.4-.3-2.7 2.4-1.3 1.3-2.4 2.7.3L12 2z" />
      <path d="M8.5 12.2l2.3 2.3 4.5-4.6" />
    </>
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1 1-1.5 4-1.5 4s3-.5 4-1.5 1-2.5 0-3.5-2.5-.1-2.5 1z" />
      <path d="M12 15l-3-3c1.5-4 4-7.5 8-9.5 2 4 2.5 8 -1.5 12L12 15z" />
      <path d="M9 12l-3-1 3-4M12 15l1 3-4 3" />
    </>
  ),
  refresh: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 12.1 12.9 4.4A2 2 0 0 0 11.5 3.8H5.5a2 2 0 0 0-2 2v6a2 2 0 0 0 .6 1.4l7.7 7.7a2 2 0 0 0 2.8 0l6-6a2 2 0 0 0 0-2.8z" />
      <circle cx="7.8" cy="8.2" r="1.3" />
    </>
  ),
  star: (
    <>
      <path d="M12 2.5l3 6.1 6.7.9-4.9 4.7 1.2 6.7L12 17.7l-6 3.2 1.2-6.7-4.9-4.7 6.7-.9z" />
    </>
  ),
  quote: (
    <>
      <path d="M9.5 8.5H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.2c0 2-1 3-2.7 3.4v1.6c3.3-.4 5-2.5 5-5.7V9.5a1 1 0 0 0-1-1z" />
      <path d="M20 8.5h-4.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.2c0 2-1 3-2.7 3.4v1.6c3.3-.4 5-2.5 5-5.7V9.5a1 1 0 0 0-1-1z" />
    </>
  ),
  phone: (
    <>
      <path d="M4 4.5C4 14.2 9.8 20 19.5 20l1-3.6-4.4-1.3-1.2 1.6a11.6 11.6 0 0 1-5.6-5.6l1.6-1.2L9.6 5 6 4z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.3 7-12.5a7 7 0 1 0-14 0C5 15.7 12 22 12 22z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  heart: (
    <path d="M12 21s-7.5-4.6-10-9.4C.4 8 2 4.5 5.5 4c2-.3 3.8.7 6.5 3 2.7-2.3 4.5-3.3 6.5-3 3.5.5 5.1 4 3.5 7.6C19.5 16.4 12 21 12 21z" />
  ),
  award: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </>
  ),
  diamond: <path d="M6 3h12l4 6-10 12L2 9z" />,
  infinity: (
    <path d="M18.2 8.5a3.7 3.7 0 0 0 0 7c2 0 3.3-1.7 4.8-3.5-1.5-1.8-2.8-3.5-4.8-3.5zM5.8 8.5a3.7 3.7 0 0 0 0 7c2 0 3.3-1.7 4.8-3.5-1.5-1.8-2.8-3.5-4.8-3.5z" />
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5z" />
      <path d="m3 12 9 5 9-5M3 16.5l9 5 9-5" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.5 8.5 20 20M20 4 12.2 11.8M8.5 15.5 6.5 17.5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  shirt: (
    <path d="M8 3 4 6.5 6 9.5l1.5-1v13h9v-13l1.5 1 2-3L16 3l-1.5 1.7a3 3 0 0 1-5 0z" />
  ),
  cap: (
    <>
      <path d="M2 13c0-3.9 4.5-7 10-7s10 3.1 10 7" />
      <path d="M2 13h20l-2 2H4l-2-2z" />
      <path d="M12 6V4" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0-4-4m4 4 4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="2.3" />
      <circle cx="6" cy="12" r="2.3" />
      <circle cx="18" cy="19" r="2.3" />
      <path d="M8 10.8 16 6.2M8 13.2l8 4.6" />
    </>
  ),
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h13M20 18h0" />
      <circle cx="15" cy="6" r="2" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  paperclip: (
    <path d="M8.5 12.5 15 6a3 3 0 1 1 4.2 4.2l-8.4 8.3a5 5 0 1 1-7-7l7.9-7.8" />
  ),
};

export type IconName = keyof typeof PATHS;

export default function Icon({
  name,
  className = "",
  strokeWidth = 1.8,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
