import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dhiraj Arya's Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Dhiraj Arya, a software developer specializing in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased light`}>
      <body className="min-h-screen w-full bg-neutral-100 relative">
        <Navbar />
        {children}</body>
    </html>
  );
}
