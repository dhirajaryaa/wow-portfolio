"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <Container>
      <nav className="flex w-full items-center justify-between p-3">
        <Link href={"/"}>
          <Image
            src={"/logo.webp"}
            width={"50"}
            height={"50"}
            alt="avatar"
            className="size-9 rounded-lg object-cover"
          />
        </Link>
        {/* links  */}
        <div className="flex items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative cursor-pointer px-2 py-1 text-sm sm:px-3"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
}
