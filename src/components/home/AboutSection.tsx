import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "India",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "2+ Years",
  },
  {
    icon: GraduationCap,
    label: "Focus",
    value: "Full-Stack Web",
  },
  {
    icon: Briefcase,
    label: "Status",
    value: "Open to Work",
  },
];

function AboutSection() {
  return (
    <section className="flex flex-col mt-24">
      <SectionHeading subtitle="about me 👋" title="Behind the Code"/>
      <div className="mt-6 flex flex-col gap-6">

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-muted/30 hover:bg-muted/60 transition-colors duration-300"
            >
              <Icon className="size-5 text-muted-foreground/60" />
              <span className="text-xs text-muted-foreground/60">
                {item.label}
              </span>
              <span className="text-sm font-semibold">{item.value}</span>
            </div>
          );
        })}
      </div>

      <p className="text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
        A self-taught developer passionate about building modern, performant web
        applications. I specialize in the MERN stack and Next.js ecosystem,
        focusing on creating clean, scalable solutions with great user
        experiences. I believe in writing code that is not just functional but
        elegant and maintainable.
      </p>
      </div>
    </section>
  );
}

export default AboutSection;
