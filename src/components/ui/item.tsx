import * as React from "react";
import { cn } from "@/lib/utils";

function Item({ className, ...props }: any) {
  return (
    <div
      data-slot="item"
      className={cn("flex items-start gap-4", className)}
      {...props}
    />
  );
}

function ItemMedia({ className, ...props }: any) {
  return (
    <div
      data-slot="item-media"
      className={cn("min-w-[48px]", className)}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: any) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex-1", className)}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }: any) {
  return (
    <div
      data-slot="item-title"
      className={cn("font-semibold", className)}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: any) {
  return (
    <div
      data-slot="item-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }: any) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
};
