import { Settings, BookOpen, Monitor, Code, Terminal, Film } from "lucide-react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    label: "Gear",
    description: "PC setup, gadgets & tools I use daily",
    icon: Settings,
    href: "/gears",
  },
  {
    label: "Setup",
    description: "VSCode config, terminal & workflow",
    icon: Terminal,
    href: "/gears",
  },
  {
    label: "Books",
    description: "Books that shaped my thinking",
    icon: BookOpen,
    href: "/books",
  },
  {
    label: "Movies",
    description: "Films & shows I recommend",
    icon: Film,
    href: "/movies",
  },
];

function InterestsSection() {
  return (
    <section className="flex flex-col mt-16">
      <SectionHeading subtitle="interests 🎯" title="Beyond the Code" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">      
        {interests.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-muted/20 transition-colors group"
            >
              <Icon className="size-5 text-muted-foreground/50 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-xs text-muted-foreground/50">
                  {item.description}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default InterestsSection;
