"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const FORM_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

export const ThemeShortcut = () => {
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey || event.ctrlKey || event.altKey) return;
            if (event.repeat || event.key.toLowerCase() !== "t") return;

            const target = event.target as HTMLElement | null;
            if (target && (FORM_TAGS.has(target.tagName) || target.isContentEditable)) return;

            setTheme(resolvedTheme === "dark" ? "light" : "dark");
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [resolvedTheme, setTheme]);

    return null;
};
