import "./globals.css";
import Script from "next/script";
import { Poppins, Dynalight } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Header from "@/components/common/Header";
import Quotes from "@/components/common/Quotes";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import { Toaster } from "@/components/ui/sonner";

export const geistSans = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-geist-sans", // 🔥 KEEP shadcn default
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
        className={` 
         ${geistSans.variable}
    ${handFont.variable}
           antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="w-full mx-auto max-w-3xl scroll-smooth relative">
            <Header />
            {children}
            <Quotes />
            <Footer />
          </div>
        </ThemeProvider>

        <Toaster position="top-center" richColors={true} closeButton={true} />

        {/* clarity code  */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ty0etl4nzb");
          `}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-F7KTJ9FCBK`}
        ></Script>
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F7KTJ9FCBK');`}
        </Script>
      </body>
    </html>
  );
}
