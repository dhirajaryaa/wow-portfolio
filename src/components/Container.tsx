import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn(
          "mx-auto flex max-w-4xl flex-col items-start justify-start bg-white text-black relative",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
