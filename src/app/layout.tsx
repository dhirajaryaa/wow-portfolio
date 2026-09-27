import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeShortcut } from "@/components/common/theme-shortcut";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/components/common/footer";
import { ogImages, profile, site, socials } from "@/lib/config";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortTitle}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.keywords],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${site.url}/rss.xml`,
      "text/plain": `${site.url}/llm.txt`,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.shortDescription,
    images: [...ogImages],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.shortDescription,
    creator: site.twitter,
    images: ["/og/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
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
          {/* footer is global — mounted once here instead of per page */}
          <div className="mx-auto w-full max-w-3xl px-10 pb-10">
            <hr />
            <Footer />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: site.name,
                url: site.url,
                image: `${site.url}/logo.webp`,
                email: `mailto:${profile.email}`,
                jobTitle: site.role,
                description: site.shortDescription,
                sameAs: [
                  socials.github,
                  socials.x,
                  socials.linkedin,
                  socials.youtube,
                  socials.instagram,
                ],
                knowsAbout: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Tailwind CSS",
                ],
              }),
            }}
          />
        </ThemeProvider>
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ty0etl4nzb");
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-F7KTJ9FCBK`}
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F7KTJ9FCBK');
          `}
        </Script>
      </body>
    </html>
  );
}
