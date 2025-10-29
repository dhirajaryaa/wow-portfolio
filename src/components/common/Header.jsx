import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function Header() {
  return (
     <header className="w-full sticky top-0 left-0 right-0 backdrop-blur-sm z-50 bg-background/50 px-4">
        <nav className="flex items-center justify-between w-full max-w-4xl py-3 mx-auto">
          <Link href={"/"} className="underline text-2xl font-semibold">
            Dhiraj.dev
          </Link>
          <div className="flex gap-2 sm:gap-4 items-center">
            <Link
              href={"/blog"}
              className="text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href={"/pow"}
              className="text-muted-foreground hover:text-foreground"
            >
              pow
            </Link>
            <Button size={"icon"} variant={"outline"} className={"ml-1"}>
              {true ? <Sun /> : <Moon />}
            </Button>
          </div>
        </nav>
      </header>
  )
}

export default Header