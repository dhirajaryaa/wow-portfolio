import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

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
      <Heading hint="about me 👋" title="Behind the Code" as="h2" />
      <div className="flex flex-col gap-6">

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {highlights.map((item) => (
          <Card
            key={item.label}
            icon={item.icon}
            title={item.value}
            description={item.label}
            center
            variant="muted"
            className="rounded-xl"
          />
        ))}
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
