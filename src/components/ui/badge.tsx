import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, children, variant, ...props }: any) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
