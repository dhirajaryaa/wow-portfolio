"use client";

import { useCallback, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type LoadStatus = "loading" | "loaded" | "error";

const getSrcKey = (src: ImageProps["src"]) =>
    typeof src === "string" ? src : "src" in src ? src.src : src.default.src;

/* ------------------------------------------------------------------ */
/* hook — tracks load status, incl. images that finish before hydration */
/* ------------------------------------------------------------------ */

export const useImageReveal = (src: ImageProps["src"]) => {
    const srcKey = getSrcKey(src);
    const [state, setState] = useState<{ src: string; status: LoadStatus }>({
        src: srcKey,
        status: "loading",
    });

    /* a new src = a new image, so it goes back to "loading" on its own */
    const status: LoadStatus =
        state.src === srcKey ? state.status : "loading";

    const update = useCallback(
        (next: LoadStatus) => {
            setState((prev) =>
                prev.src === srcKey && prev.status === next
                    ? prev
                    : { src: srcKey, status: next },
            );
        },
        [srcKey],
    );

    /* callback ref instead of an effect — cached images are already */
    /* complete when the node mounts, so onLoad never fires for them */
    const imageRef = useCallback(
        (node: HTMLImageElement | null) => {
            if (!node?.complete) return;
            update(node.naturalWidth > 0 ? "loaded" : "error");
        },
        [update],
    );

    const onLoad = useCallback(() => update("loaded"), [update]);
    const onError = useCallback(() => update("error"), [update]);

    return { imageRef, status, onLoad, onError };
};

/* ------------------------------------------------------------------ */
/* placeholder — blur preview if available, shimmer skeleton otherwise  */
/* ------------------------------------------------------------------ */

export const ImagePlaceholder = ({
    status,
    blurDataURL,
    className,
}: {
    status: LoadStatus;
    blurDataURL?: string;
    className?: string;
}) => (
    <span
        aria-hidden
        className={cn(
            "pointer-events-none absolute inset-0 block overflow-hidden transition-opacity duration-700 ease-out",
            status === "loading" ? "opacity-100" : "opacity-0",
            className,
        )}
    >
        {blurDataURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={blurDataURL}
                alt=""
                className="block size-full scale-110 object-cover blur-xl"
            />
        ) : (
            <span className="bg-muted block size-full overflow-hidden">
                <span className="block h-full w-1/2 animate-[image-shimmer_1.8s_ease-in-out_infinite] bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
            </span>
        )}
    </span>
);

/* ------------------------------------------------------------------ */
/* fallback — shown when the image fails to load                        */
/* ------------------------------------------------------------------ */

export const ImageErrorFallback = ({ className }: { className?: string }) => (
    <span
        className={cn(
            "bg-muted text-muted-foreground/60 absolute inset-0 flex items-center justify-center",
            className,
        )}
    >
        <ImageOff className="size-5" strokeWidth={1.5} />
    </span>
);

/* ------------------------------------------------------------------ */
/* ImageWithLoader — next/image + skeleton + smooth blur reveal         */
/* ------------------------------------------------------------------ */

export type ImageWithLoaderProps = ImageProps & {
    wrapperClassName?: string;
    placeholderClassName?: string;
};

export const ImageWithLoader = ({
    wrapperClassName,
    placeholderClassName,
    className,
    blurDataURL,
    alt,
    onLoad,
    onError,
    ...props
}: ImageWithLoaderProps) => {
    const { imageRef, status, onLoad: revealLoad, onError: revealError } =
        useImageReveal(props.src);

    return (
        <div className={cn("relative overflow-hidden", wrapperClassName)}>
            {/* skeleton / blur layer, fades out as the image reveals */}
            <ImagePlaceholder
                status={status}
                blurDataURL={blurDataURL}
                className={placeholderClassName}
            />

            <Image
                {...props}
                alt={alt}
                ref={imageRef}
                onLoad={(event) => {
                    onLoad?.(event);
                    revealLoad();
                }}
                onError={(event) => {
                    onError?.(event);
                    revealError();
                }}
                className={cn(
                    "transition-[opacity,filter,transform,scale] duration-700 ease-out motion-reduce:transition-none",
                    status === "loaded"
                        ? "scale-100 opacity-100 blur-0"
                        : "scale-[1.04] opacity-0 blur-md",
                    className,
                )}
            />

            {status === "error" && <ImageErrorFallback />}
        </div>
    );
};
