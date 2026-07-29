import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

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
      <Heading hint="tech stack 🛠️" title="Tools & Technologies" as="h2" />
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            image={skill.icon}
            imageAlt={skill.name}
            imageClassName={skill.name === "Next.js" || skill.name === "Express" ? "dark:invert" : undefined}
            title={skill.name}
            center
            variant="muted"
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
