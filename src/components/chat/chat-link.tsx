"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/config";

interface ChatLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ChatLink: React.FC<ChatLinkProps> = ({
  href,
  children,
  className,
}) => {
  let targetHref = href;

  if (targetHref.startsWith(site.url)) {
    targetHref = targetHref.replace(site.url, "") || "/";
  } else if (targetHref.startsWith("https://dhirajarya.in")) {
    targetHref = targetHref.replace("https://dhirajarya.in", "") || "/";
  }

  if (
    !targetHref.startsWith("/") &&
    !targetHref.startsWith("#") &&
    !targetHref.startsWith("http://") &&
    !targetHref.startsWith("https://") &&
    !targetHref.startsWith("mailto:") &&
    !targetHref.startsWith("tel:")
  ) {
    targetHref = "/" + targetHref;
  }

  const isExternal =
    targetHref.startsWith("http://") ||
    targetHref.startsWith("https://") ||
    targetHref.startsWith("mailto:") ||
    targetHref.startsWith("tel:");

  const isHash = targetHref.startsWith("#");

  const baseClassName =
    "inline-flex items-center gap-0.5 font-medium text-foreground underline underline-offset-2 decoration-foreground/40 hover:decoration-foreground transition-colors";

  if (isHash) {
    return (
      <a href={targetHref} className={className || baseClassName}>
        <span>{children}</span>
      </a>
    );
  }

  if (isExternal) {
    return (
      <a
        href={targetHref}
        target="_blank"
        rel="noopener noreferrer"
        className={className || baseClassName}
      >
        <span>{children}</span>
        <ExternalLink className="size-2.5 opacity-70" />
      </a>
    );
  }

  return (
    <Link href={targetHref} className={className || baseClassName}>
      <span>{children}</span>
      {targetHref.startsWith("/") && targetHref !== "/" && (
        <ArrowUpRight className="size-2.5 opacity-60" />
      )}
    </Link>
  );
};
