import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("mx-auto max-w-4xl px-6 sm:px-12 w-full min-h-svh", className)}>
            {children}
        </div>
    );
};
