import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className={`${playfair.className}`}>
        <div>
          <StickyNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
