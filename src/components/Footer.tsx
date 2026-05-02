"use client";

import Container from "./Container";
import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="relative z-10">
      <Container className="h-full items-center justify-center bg-white py-10 md:py-16">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="via-primary h-px w-full origin-center rounded-full bg-linear-to-r from-transparent to-transparent mask-x-from-1 blur-[0.4px]"
        />

        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          className="text-secondary mt-6 py-6 text-sm"
        >
          &copy; 2025
          {new Date().getFullYear() > 2025 &&
            ` - ${new Date().getFullYear()}`}{" "}
          All rights reserved.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="xs:text-[7rem] pointer-events-none w-fit mask-t-from-4 font-sans text-6xl font-extrabold tracking-tight text-neutral-200 select-none sm:text-[8.5rem] md:text-[11rem] dark:text-neutral-800"
        >
          Portfolio
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          className="text-secondary pt-6 text-sm"
        >
          Crafted with <span className="font-semibold">❤️</span> by{" "}
          <a
            href="https://github.com/dhirajaryaa"
            className="hover:text-primary cursor-pointer underline transition-colors duration-300"
          >
            Dhiraj Arya
          </a>
        </motion.p>
      </Container>
    </footer>
  );
}

export default Footer;
