import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type SearchCategory =
  | "Navigation"
  | "Projects"
  | "Tools"
  | "Writing"
  | "Gears & Setup"
  | "Social & Links"
  | "Actions";

export type SearchItem = {
  id: string;
  title: string;
  description?: string;
  category: SearchCategory;
  href?: string;
  external?: boolean;
  icon?: LucideIcon | IconType;
  keywords?: string[];
  perform?: () => void;
};
