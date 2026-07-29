"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();

  const changeTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      size="icon-sm"
      variant="ghost"
      onClick={changeTheme}
      className="text-muted-foreground/70 hover:text-foreground"
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}

export default ToggleTheme;
