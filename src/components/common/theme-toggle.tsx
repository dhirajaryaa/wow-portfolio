"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const subscribe = () => () => { };

const useIsMounted = () => useSyncExternalStore(subscribe, () => true, () => false);

export const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useIsMounted();

    const isDark = mounted && resolvedTheme === "dark";
    const label = isDark ? "Switch to light theme" : "Switch to dark theme";

    return (
        <div className="flex items-center gap-2">
            <div className="text-xs px-1.5 py-0.5 bg-muted  ring ring-foreground/40 rounded-sm">D</div>
            <Button
                variant="ghost"
                size="icon"
                aria-label={label}
                title={label}
                suppressHydrationWarning
                onClick={() => setTheme(isDark ? "light" : "dark")}
            >
                {isDark ? <Moon /> : <Sun />}
            </Button>
        </div>
    );
};
