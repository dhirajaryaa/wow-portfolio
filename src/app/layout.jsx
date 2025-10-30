import "./globals.css";
import Script from 'next/script';
import { Poppins } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Quotes from "@/components/common/Quotes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Dhiraj Arya - A self-taught developer",
  description: "Personal website of Dhiraj Arya, a self-taught developer",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} antialiased`}>
        <div className="w-full mx-auto max-w-3xl scroll-smooth relative">
          <Header />
          {children}
          <Quotes />
          <Footer />
        </div>
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
