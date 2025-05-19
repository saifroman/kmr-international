import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar, NavMenu } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KMR International",
  description: "Created by Asif Munshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid min-h-screen grid-flow-row content-start font-[family-name:var(--font-geist-sans)]">
          <div className="grid h-fit w-full grid-flow-row">
            <Navbar />
            <div className="grid w-full justify-center">
              <NavMenu />
            </div>
          </div>

          {children}

          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
