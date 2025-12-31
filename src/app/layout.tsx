import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Header from "@/components/common/Header";
import Quotes from "@/components/common/Quotes";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Dhiraj Arya – A self-taught developer",
    template: "%s | Dhiraj Arya",
  },

  description:
    "Dhiraj Arya is a self-taught full-stack web developer specializing in Next.js, MERN stack, and modern SaaS applications. I build fast, scalable, and user-focused web products.",

  keywords: [
    "Dhiraj Arya",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "React Developer",
    "Web Developer Portfolio",
    "SaaS Developer",
    "JavaScript Developer",
  ],

  authors: [{ name: "Dhiraj Arya", url: "https://dhirajarya.xyz" }],
  creator: "Dhiraj Arya",

  metadataBase: new URL("https://dhirajarya.xyz"),

  openGraph: {
    title: "Dhiraj Arya – A self-taught developer",
    description:
      "Portfolio of Dhiraj Arya, a full-stack web developer building modern web apps using Next.js, MERN stack, and SaaS-first architecture.",
    url: "https://dhirajarya.xyz",
    siteName: "Dhiraj Arya Portfolio",
    images: [
      {
        url: "/og/home_og.webp",
        width: 1200,
        height: 630,
        alt: "Dhiraj Arya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Arya – A self-taught developer",
    description:
      "Building fast, modern web apps with Next.js, MERN & SaaS architecture.",
    images: ["/og/home_twitter_og.webp"],
    creator: "@dhirajarya01",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://dhirajarya.xyz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full mx-auto max-w-3xl scroll-smooth relative">
            <Header />
            {children}
            <Quotes />
            <Footer />
          </div>
        </ThemeProvider>
        {/* clarity code  */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ty0etl4nzb");
          `}
        </Script>
      </body>
    </html>
  );
}
