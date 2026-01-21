import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/sections/Footer";



export const metadata = {
  title: "Afaq Technologies",
  description: "Software Development Agency",
  icons: {
    icon: "/images/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="min-h-screen bg-background text-foreground antialiased ">
       <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
