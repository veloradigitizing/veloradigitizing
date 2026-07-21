import {
  Clock,
  Activity,
  Headphones,
  ShieldCheck,
  CloudUpload,
  Monitor,
  BadgeCheck,
  Send,
  Star,
  Quote,
  Phone,
  Mail,
  Globe,
  MapPin,
  ChevronDown,
  Search,
  Heart,
  Award,
  Smile,
  Gem,
  Infinity as InfinityIcon,
  Layers,
  Scissors,
  Grid3x3,
  Shirt,
  Download,
  Share2,
  Box,
  ShoppingCart,
  SlidersHorizontal,
  Paperclip,
  Tag,
  Rocket,
  RefreshCw,
  X,
  Trash2,
  Plus,
  Minus,
  Check,
  PawPrint,
  Badge,
  Type,
  Trophy,
  Compass,
  Gamepad2,
  Zap,
  PenTool,
  Square,
  TowelRack,
  Sticker,
  PanelTop,
  Feather,
  type LucideIcon,
} from "lucide-react";

type BasicIconProps = {
  className?: string;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
};

// Lucide has no baseball-cap icon (only GraduationCap, ChefHat, HardHat) —
// hand-drawn to match lucide's stroke style so it sits cleanly in the same set.
function BaseballCap({
  className,
  strokeWidth = 1.8,
  stroke = "currentColor",
  fill = "none",
}: BasicIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M2 12c3 2.2 6.5 3 10 3s7-.8 10-3" />
      <path d="M12 4v3" />
    </svg>
  );
}

// Full shirt silhouette (lucide's Shirt path) with the embroidered mark
// placed on the sleeve/shoulder wing instead of the chest.
function SleevePatch({
  className,
  strokeWidth = 1.8,
  stroke = "currentColor",
  fill = "none",
}: BasicIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      <circle cx="4.1" cy="7" r="1.1" fill={stroke} stroke="none" />
    </svg>
  );
}

// Lucide's Shirt icon has no logo mark — reused its exact path and added a
// chest badge so "left chest logo" placement is visible at a glance.
function ShirtLogo({
  className,
  strokeWidth = 1.8,
  stroke = "currentColor",
  fill = "none",
}: BasicIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      <circle cx="9.3" cy="13.2" r="1.3" fill={stroke} stroke="none" />
    </svg>
  );
}

const ICONS = {
  clock: Clock,
  stitch: Activity,
  headset: Headphones,
  shield: ShieldCheck,
  "cloud-upload": CloudUpload,
  monitor: Monitor,
  "badge-check": BadgeCheck,
  send: Send,
  star: Star,
  quote: Quote,
  phone: Phone,
  mail: Mail,
  globe: Globe,
  pin: MapPin,
  "chevron-down": ChevronDown,
  search: Search,
  heart: Heart,
  award: Award,
  smile: Smile,
  diamond: Gem,
  infinity: InfinityIcon,
  layers: Layers,
  scissors: Scissors,
  grid: Grid3x3,
  shirt: Shirt,
  "shirt-logo": ShirtLogo as unknown as LucideIcon,
  cap: BaseballCap as unknown as LucideIcon,
  "sleeve-patch": SleevePatch as unknown as LucideIcon,
  download: Download,
  share: Share2,
  box: Box,
  cart: ShoppingCart,
  sliders: SlidersHorizontal,
  paperclip: Paperclip,
  tag: Tag,
  rocket: Rocket,
  refresh: RefreshCw,
  close: X,
  trash: Trash2,
  plus: Plus,
  minus: Minus,
  check: Check,
  // Patch category icons
  paw: PawPrint,
  badge: Badge,
  type: Type,
  trophy: Trophy,
  // New category icons
  compass: Compass,
  "gamepad-2": Gamepad2,
  zap: Zap,
  "pen-tool": PenTool,
  square: Square,
  "towel-rack": TowelRack,
  sticker: Sticker,
  "panel-top": PanelTop,
  feather: Feather,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

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
  const Cmp = ICONS[name];
  return (
    <Cmp
      className={className}
      strokeWidth={strokeWidth}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
    />
  );
}
