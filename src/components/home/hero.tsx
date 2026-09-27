import Image from "next/image";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { CurvedArrow } from "@/components/home/arrow";
import { profile } from "@/lib/config";

export const HeroSection = () => {
    return <section className="flex flex-col gap-4 sm:gap-6 relative">
        {/* arrow  */}
        <CurvedArrow dashed className="hidden md:block absolute -left-24 -top-4 rotate-12 z-10 text-muted-foreground" />
        {/* avatar + intro + theme  */}
        <div className="flex items-center justify-between h-fit flex-1 relative" >
            <div className="flex gap-4 items-center relative">
                <div className="flex items-center justify-center size-14 md:size-18 p-0.5 ring-2 ring-primary rounded-2xl overflow-hidden">
                    <Image
                        src={"/logo.webp"}
                        alt="Logo - Dhraj Arya"
                        width={150}
                        height={150}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-serif  font-medium leading-7 drop-shadow-sm">{profile.name}</h1>
                    <p className="text-[13px] font-normal text-muted-foreground">{profile.role}</p>
                </div>

            </div>
            {/* theme toggle  */}
            <ThemeToggle />

        </div>
    </section>;
};
