import { Settings, BookOpen, Terminal, Film } from "lucide-react";
import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

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
      <Heading hint="interests 🎯" title="Beyond the Code" as="h2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {interests.map((item) => (
          <Card
            key={item.label}
            icon={item.icon}
            title={item.label}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}

export default InterestsSection;
