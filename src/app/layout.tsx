import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Dhiraj Arya's Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Dhiraj Arya, a software developer specializing in web development and design.",
};

// font setup 
const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("w-full min-h-screen font-brand", schibstedGrotesk.variable)}>
        {children}
      </body>
    </html>
  );
}
