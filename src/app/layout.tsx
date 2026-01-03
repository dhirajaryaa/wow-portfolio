import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Header from "@/components/common/Header";
import Quotes from "@/components/common/Quotes";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";
import { getMetaData } from "@/config/meta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = getMetaData("/");

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
          defaultTheme="dark"
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
