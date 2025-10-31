"use client"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ToggleTheme() {
    const { setTheme,resolvedTheme } = useTheme();
    
    const changeTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")};

    return (
        <Button size="icon" variant="outline" onClick={changeTheme} className="ml-1">
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
    )
}

export default ToggleTheme
