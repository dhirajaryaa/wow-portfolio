'use client'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ToggleTheme() {
    const { setTheme, theme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <Button size={"icon"} variant={"outline"} onClick={changeTheme} className={"ml-1"}>
            {true ? <Sun /> : <Moon />}
        </Button>
    )
}

export default ToggleTheme