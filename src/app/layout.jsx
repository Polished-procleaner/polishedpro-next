// src/app/layout.jsx

import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewFooter from "@/components/NewFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"], // incluye 700 para bold
  display: "swap",
});

export const metadata = {
  title: "PolishedPro Cleaners",
  description: "Leave the Cleaning to Us",
  icons: {
    icon: "/images/img1.png",
    shortcut: "/images/img1.png",
    apple: "/images/img1.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-[--color-surface] text-[--color-text-primary] pt-20">
        <Navbar />
        <main className="flex-1">{children}</main>
      
        <NewFooter />
      </body>
    </html>
  );
}