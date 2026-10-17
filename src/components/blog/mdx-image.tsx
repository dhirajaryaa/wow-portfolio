"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
    ImageErrorFallback,
    ImagePlaceholder,
    useImageReveal,
} from "@/components/common/image-loader";

/* blog images can point anywhere, so this one stays a plain <img> — */
/* but it still gets the shimmer skeleton and the blur reveal       */
export const MdxImage = ({
    alt = "",
    className,
    src = "",
    ...props
}: ComponentPropsWithoutRef<"img">) => {
    const { imageRef, status, onLoad, onError } = useImageReveal(
        typeof src === "string" ? src : "",
    );

    return (
        <span className="border-muted relative my-6 block w-full overflow-hidden rounded-xl border border-dashed">
            <ImagePlaceholder status={status} />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                onLoad={onLoad}
                onError={onError}
                className={cn(
                    "block h-auto w-full transition-[opacity,filter,transform,scale] duration-700 ease-out motion-reduce:transition-none",
                    status === "loaded"
                        ? "scale-100 opacity-100 blur-0"
                        : "scale-[1.02] opacity-0 blur-md",
                    className,
                )}
                {...props}
            />

            {status === "error" && <ImageErrorFallback />}
        </span>
    );
};
