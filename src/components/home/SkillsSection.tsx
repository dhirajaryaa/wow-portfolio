import Image from "next/image";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Express", icon: "/skills/express.svg" },
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
];

function SkillsSection() {
  return (
    <section className="flex flex-col mt-16">
      <SectionHeading title="Tools & Technologies" subtitle="tech stack 🛠️" />
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-muted/20 transition-colors duration-300 hover:bg-muted/60 cursor-pointer"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={28}
              height={28}
              className="size-7 object-contain dark:invert"
            />
            <span className="text-xs font-medium text-center text-muted-foreground/80">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
