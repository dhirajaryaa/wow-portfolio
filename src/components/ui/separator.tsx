import * as React from "react";
import { cn } from "@/lib/utils";

function Separator({ className, ...props }: any) {
  return <div className={cn("h-px bg-border w-full", className)} {...props} />;
}

export { Separator };
