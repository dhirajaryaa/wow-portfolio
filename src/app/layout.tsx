import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeShortcut } from "@/components/common/theme-shortcut";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Dhiraj Arya's Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Dhiraj Arya, a software developer specializing in web development and design.",
};

// font setup
const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body
        className={cn(
          "font-brand min-h-screen w-full relative bg-background text-foreground",
          schibstedGrotesk.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider >{children}</TooltipProvider>
          <ThemeShortcut />
        </ThemeProvider>
      </body>
    </html>
  );
}
