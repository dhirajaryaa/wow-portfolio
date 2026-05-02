"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      animate={{
        boxShadow: scrolled ? "var(--shadow-base)" : "none",
        y: scrolled ? 14 : 0,
        // scale: scrolled ? 0.94 : 1,
        width: scrolled ? "70%" : "90%",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3,
        ease: "linear",
      }}
      className="fixed inset-x-0 top-1 z-10 mx-auto flex max-w-4xl items-center justify-between rounded-3xl bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-black/50"
    >
      <Link href={"/"}>
        <Image
          src={"/logo.webp"}
          loading="eager"
          width={"50"}
          height={"50"}
          alt="avatar"
          className={cn(
            "size-7 rounded-full border-yellow-700 object-cover transition-all duration-400 ease-in-out md:size-9",
          )}
        />
      </Link>
      {/* links  */}
      <div className="flex items-center">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="relative cursor-pointer px-2 py-1 text-sm sm:px-3 md:text-base"
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
                className="absolute inset-0 z-40 h-full w-full rounded-lg bg-neutral-100 shadow backdrop-blur-lg dark:bg-neutral-800"
              />
            )}
            <span className="relative z-50">{link.name}</span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
