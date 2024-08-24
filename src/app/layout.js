import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "normal",
  weight: "500",
});

export const metadata = {
  title: "Eddy Stiches",
  description: "Home of Fashion",
  icons: {
    icon: "/favicon.png", // /public/favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.className}`}>
        <div>
          <Toaster position="bottom-center" />
          <StickyNavbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
