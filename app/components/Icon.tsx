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
  GraduationCap,
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
  type LucideIcon,
} from "lucide-react";

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
  cap: GraduationCap,
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
