import { IconBadge, LinkIconBadge } from "@/components/common/icon-badge";
import { links } from "@/lib/config";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section className="text-foreground/70 flex flex-col gap-4 py-10 text-sm leading-[1.55] md:pt-14 md:text-[15px]">
      <p>
        I&rsquo;m a self-taught developer. I learn by building,{" "}
        <span className="line-through">breaking</span>, and figuring things out.
        My <span className="underline">degree</span> so far is from{" "}
        <IconBadge className="mx-[0.2em]">
          <AiFillYoutube className="size-[1em] text-red-600" />
          YouTube University
        </IconBadge>
        .
      </p>

      <p>
        I build SaaS products, developer tools, and small utilities — mostly
        with{" "}
        <IconBadge>
          <FaReact className="size-[1em] text-sky-300" />
          React
        </IconBadge>
        ,{" "}
        <IconBadge>
          <SiNextdotjs className="size-[1em]" />
          Next.js
        </IconBadge>
        ,{" "}
        <IconBadge>
          <SiTypescript className="size-[1em] text-blue-500" />
          TypeScript
        </IconBadge>
        ,{" "}
        <IconBadge>
          <FaNodeJs className="size-[1em] text-green-600" />
          Node.js
        </IconBadge>
        , and{" "}
        <IconBadge>
          <BiLogoPostgresql className="size-[1em] text-blue-900" />
          PostgreSQL
        </IconBadge>
        .
      </p>

      <p>
        Lately, I&rsquo;ve been exploring AI and building things that solve
        problems I actually have.
      </p>

      <p>I like computers, learning, and shipping small things.</p>

      <p>
        Open to interesting projects, collaborations, or just a good
        conversation.
      </p>

      <div>
        Find me on
        <LinkIconBadge link={links.github} className="px-0.5 pl-2">
          <FaGithub className="size-[0.9em]" />
          <span className="sr-only">Github</span>
        </LinkIconBadge>
        <LinkIconBadge link={links.x} className="px-0.5">
          <FaXTwitter className="size-[0.9em]" />
          <span className="sr-only">Twitter</span>
        </LinkIconBadge>
        <LinkIconBadge link={links.linkedin} className="px-0.5">
          <FaLinkedin className="size-[0.9em] text-[#0A66C2]" />
          <span className="sr-only">Linkedin</span>
        </LinkIconBadge>
        You can also
        <LinkIconBadge link={links.resume} className="px-0.5">
          <IoDocumentText className="text-foreground/80 size-[0.9em]" />
          <span className="sr-only">Resume</span>
        </LinkIconBadge>
        grab my resume .
      </div>

      <p className="text-muted-foreground mt-2">~ still learning...</p>
    </section>
  );
};
