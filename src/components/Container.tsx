import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-start bg-white p-4 text-black md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
