"use client";

import { motion } from "motion/react";

function GhostText() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="xs:text-[7rem] pointer-events-none w-fit mask-t-from-4 font-sans text-6xl font-extrabold tracking-tight text-neutral-200 select-none sm:text-[8.5rem] md:text-[11rem] dark:text-neutral-800"
    >
      {" "}
      Portfolio{" "}
    </motion.div>
  );
}

export default GhostText;
