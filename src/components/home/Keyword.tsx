"use client";

import { useEffect, useState } from "react";

const keywords = [
    { text: "performance", color: "bg-amber-400" },
    { text: "scalability", color: "bg-blue-400" },
    { text: "clean architecture", color: "bg-emerald-400" },
    { text: "AI-powered features", color: "bg-violet-400" },
];

export function RotatingKeyword() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % keywords.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <span
            key={index}
            className={`${keywords[index].color} inline-block px-2 py-0.5 font-semibold rounded-sm animate-highlight-pop`}
        >
            {keywords[index].text}
        </span>
    );
}