import {
  BookOpen,
  Brain,
  Code2,
  GraduationCap,
  Landmark,
  LineChart,
  Microscope,
  School,
  ShieldCheck,
  Target,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

export const exams = [
  { name: "JEE", description: "Engineering entrance", icon: Brain },
  { name: "NEET", description: "Medical entrance", icon: Microscope },
  { name: "UPSC", description: "Civil services", icon: Landmark },
  { name: "GATE", description: "Graduate aptitude", icon: Code2 },
  { name: "SSC", description: "Government careers", icon: ShieldCheck },
  { name: "Banking", description: "Banking exams", icon: WalletCards },
  { name: "CAT", description: "Business aptitude", icon: LineChart },
  { name: "School", description: "Classes 6 - 12", icon: School },
  { name: "Coding", description: "Build real skills", icon: BookOpen },
];

export const stats = [
  { end: 1, suffix: "M+", label: "Learners", prefix: "", icon: GraduationCap, tone: "tone-blue", sub: "Active learners" },
  { end: 500, suffix: "+", label: "Courses", prefix: "", icon: BookOpen, tone: "tone-orange", sub: "Video curricula" },
  { end: 100, suffix: "+", label: "Expert educators", prefix: "", icon: Users, tone: "tone-teal", sub: "Top 1% mentors" },
  { end: 50, suffix: "K+", label: "Practice questions", prefix: "", icon: Zap, tone: "tone-emerald", sub: "With AI solutions" },
];

export const reasons = [
  {
    title: "Learn from experts",
    description:
      "Clear explanations from educators who know how to make complex ideas click.",
    icon: GraduationCap,
  },
  {
    title: "Practice with purpose",
    description:
      "Build confidence through focused practice that mirrors your real goals.",
    icon: Target,
  },
  {
    title: "Track your progress",
    description:
      "See your momentum, find your gaps, and keep moving forward with clarity.",
    icon: Users,
  },
];
