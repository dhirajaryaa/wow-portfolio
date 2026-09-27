import Link from "next/link";
import { LiveCurrentTime } from "@/components/common/live-comp";
import { CurvedArrow } from "@/components/home/arrow";
import { profile, socials } from "@/lib/config";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
    const navLinks = [
        { href: "/", label: "Home", external: false },
        { href: "/projects", label: "Work", external: false },
        { href: "/tools", label: "Tools", external: false },
        { href: "/gears", label: "Gears", external: false },
        { href: "/setup", label: "Setup", external: false },
        { href: "/books", label: "Books", external: false },
        { href: "/movies", label: "Movies", external: false },
        { href: "/rss.xml", label: "RSS", external: true },
        { href: "/llm.txt", label: "LLM", external: true },
    ];
    const icons = [
        { href: socials.github, label: "GitHub", icon: FaGithub },
        { href: socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
        { href: socials.x, label: "Twitter", icon: FaXTwitter },
        { href: socials.youtube, label: "Youtube", icon: FaYoutube },
        { href: "mailto:hello@dhirajarya.in", label: "Email", icon: MdEmail },
    ];

    return (
        <footer className="relative flex flex-col gap-4 pt-10">
            <div className="text-muted-foreground/20 pointer-events-none absolute inset-x-0 inset-y-auto mask-b-from-20% text-center text-5xl font-extrabold select-none md:text-8xl">
                Dhiraj Arya
            </div>
            <CurvedArrow className="text-muted-foreground/50 absolute top-0 left-0 hidden w-14 rotate-12 md:block md:w-fit" />
            {/* links  */}
            <div className="mt-14 md:mt-23">
                {/* nav links  */}
                <nav className="text-muted-foreground/60 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm ">
                    {navLinks.map(({ href, label, external }) =>
                        external ? (
                            <a key={label} href={href} className="hover:text-foreground transition-colors hover:underline">
                                {label}
                            </a>
                        ) : (
                            <Link key={label} href={href} className="hover:text-foreground transition-colors hover:underline">
                                {label}
                            </Link>
                        ),
                    )}
                </nav>
                {/* social links  */}
                <ul className="flex items-center gap-4 mt-4 flex-wrap justify-center w-full">
                    {icons.map(({ href, label, icon: Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                rel="noreferrer me"
                                aria-label={label}
                                className="social-link text-base text-muted-foreground hover:text-foreground flex gap-2 hover:underline"
                            >
                                <Icon aria-hidden="true" />
                                <span className="text-sm">{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-[12px] text-muted-foreground text-center">
                    © 2026 {profile.name} — built mostly from the internet.
                </p>
                <LiveCurrentTime />
            </div>
        </footer>
    );
};
