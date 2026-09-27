import { IconBadge } from "@/components/common/icon-badge";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si";

export const AboutSection = () => {
    return (
        <section className="py-10 md:pt-14 flex flex-col gap-4 text-sm leading-[1.55] text-foreground/70 md:text-[15px] border-b border-muted">
            <p>
                I'm a self-taught developer. I learn by building, <span className="line-through">breaking</span>,
                and figuring things out. My <span className="underline">degree</span> so far is from{" "}
                <IconBadge className="mx-[0.2em]">
                    <AiFillYoutube className="size-[1em] text-red-600" />
                    YouTube University
                </IconBadge>
                .
            </p>

            <p>
                I build SaaS products, developer tools, and small utilities —
                mostly with{" "}
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
                Lately, I've been exploring AI and building things that
                solve problems I actually have.
            </p>

            <p>
                I like computers, learning, and shipping small things.
            </p>

            <p>
                Open to interesting projects, collaborations, or just a good
                conversation.
            </p>

            <p className="mt-2 text-muted-foreground">
                ~ still learning...
            </p>
        </section>
    );
};