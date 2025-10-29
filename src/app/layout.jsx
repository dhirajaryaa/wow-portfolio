import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

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
        <div className="w-full min-h-screen overflow-auto overflow-x-hidden mx-auto max-w-3xl scroll-smooth relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
