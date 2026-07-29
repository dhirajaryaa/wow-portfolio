import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

const skills = [
  { name: "Next.js", icon: "/skills/nextjs.svg", invert: true, border: "hover:border-black/30 dark:hover:border-white/30" },
  { name: "React", icon: "/skills/react.svg", border: "hover:border-cyan-400/50" },
  { name: "TypeScript", icon: "/skills/typescript.svg", border: "hover:border-blue-500/50" },
  { name: "Node.js", icon: "/skills/nodejs.svg", border: "hover:border-green-500/50" },
  { name: "Express", icon: "/skills/express.svg", invert: true, border: "hover:border-neutral-400/50" },
  { name: "MongoDB", icon: "/skills/mongodb.svg", border: "hover:border-green-600/50" },
];

function SkillsSection() {
  return (
    <section className="flex flex-col mt-16">
      <Heading hint="tech stack 🛠️" title="Tools & Technologies" as="h2" />
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            image={skill.icon}
            imageAlt={skill.name}
            imageClassName={skill.invert ? "dark:invert" : undefined}
            title={skill.name}
            center
            variant="muted"
            className={skill.border}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
