import {
  Atom,
  BadgeCheck,
  BookOpen,
  ChartLine,
  Cpu,
  GraduationCap,
  Landmark,
  Microscope,
  School,
  WalletCards,
} from "lucide-react";

const iconMap = {
  atom: Atom,
  microscope: Microscope,
  landmark: Landmark,
  cpu: Cpu,
  "badge-check": BadgeCheck,
  "wallet-cards": WalletCards,
  "chart-line": ChartLine,
  school: School,
  "book-open": BookOpen,
  "graduation-cap": GraduationCap,
};

export default function ExamIcon({ name, size = 22 }) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon size={size} aria-hidden="true" />;
}
