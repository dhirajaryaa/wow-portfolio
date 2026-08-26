import type { LucideIcon } from "lucide-react";
import { Mail, FileArchive, Inbox, Shield, Zap, Image, FileDown, MousePointerClick } from "lucide-react";

export type ToolStatus = "live" | "coming-soon" | "beta";

export type ToolFeature = {
  icon: LucideIcon;
  label: string;
};

export type Tool = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: ToolStatus;
  icon: LucideIcon;
  link?: string;
  features: ToolFeature[];
  useCases: string[];
};

export const tools: Tool[] = [
  {
    name: "Temp Mail",
    slug: "temp-mail",
    tagline: "Disposable email for quick, hassle-free sign-ups",
    description:
      "Generate a temporary email address instantly. Perfect for testing sign-up flows, avoiding spam, and keeping your real inbox clean. View received messages in a simple, real-time inbox.",
    status: "live",
    icon: Mail,
    link: "https://tempmail.dhirajarya.in",
    features: [
      { icon: Zap, label: "Instant email generation" },
      { icon: Inbox, label: "Real-time inbox viewer" },
      { icon: Shield, label: "No sign-up required" },
    ],
    useCases: [
      "Testing sign-up & verification flows",
      "Avoiding unnecessary marketing emails",
      "Quick disposable email for one-time use",
    ],
  },
  {
    name: "Compressly",
    slug: "compressly",
    link: "https://compressly.dhirajarya.in",
    tagline: "Smart compression for smaller files, better quality",
    description:
      "Compress images and files while maintaining excellent quality. Supports popular formats with a simple drag-and-drop interface. Reduce file sizes without compromising on clarity.",
    status: "live",
    icon: FileArchive,
    features: [
      { icon: Image, label: "Image & file compression" },
      { icon: FileDown, label: "PNG, JPG, WebP, PDF support" },
      { icon: MousePointerClick, label: "Drag-and-drop experience" },
    ],
    useCases: [
      "Optimizing images for web & apps",
      "Reducing file sizes for faster uploads",
      "Batch compression for multiple files",
    ],
  },
  {
    name: "Snapshot",
    slug: "snapshot",
    link: "https://snapshot.dhirajarya.in",
    tagline: "Turn screenshots into beautiful, share-ready visuals",
    description:
      "Create polished, attention-grabbing visuals from your screenshots. Add beautiful backgrounds, frames, shadows, text, and more — all processed directly in your browser.",
    status: "live",
    icon: Image,
    features: [
      { icon: Image, label: "Beautiful screenshot styling" },
      { icon: Zap, label: "100% client-side processing" },
      { icon: MousePointerClick, label: "One-click export & sharing" },
    ],
    useCases: [
      "Sharing projects on social media",
      "Creating polished product showcases",
      "Presenting websites and apps beautifully",
    ],
  },
];
