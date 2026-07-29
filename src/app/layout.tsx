import "./globals.css";
import Script from "next/script";
import { Poppins, Dynalight } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

export const geistSans = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const handFont = Dynalight({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-handwriting",
});

export const metadata: Metadata = getMetaData("/");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${handFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full mx-auto max-w-3xl">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>

        <Toaster position="top-center" richColors={true} closeButton={true} />

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
