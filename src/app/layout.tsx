import type { Metadata } from "next";
import { Fredoka, Noto_Sans } from "next/font/google";
import "./globals.tailwind.css";

import logo from "@/assets/logo.svg";
import { SiteFooter } from "@/components/site-footer";
import { Navbar } from "@/components/navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Thuto Ke Bokamoso",
  description: "Skills Today • Brighter Tomorrow",
  icons: {
    icon: logo.src,
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${notoSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
