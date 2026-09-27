import { IconBadge } from "../common/icon-badge";

import { AiFillYoutube } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
} from "react-icons/si";

export const AboutSection = () => {
    return (
        <section className="mt-4 flex flex-col gap-4 text-sm leading-[1.55] text-foreground/70 md:text-[15px]">
            <p>
                I'm a self-taught developer. I learn by building, breaking,
                and figuring things out. My degree so far is from{" "}
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
                    <FaReact className="size-[1em] text-[#61DAFB]" />
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

            <p className="text-foreground/60">
                ~ still learning...
            </p>
        </section>
    );
};