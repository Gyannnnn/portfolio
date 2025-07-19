import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/Components/Sidebar";
import { ReactLenis } from "@/lib/Lenis/Lenis";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gyanaranjan Patra",
  description: "Portfolio of Gyanranjan Patra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              <main className="flex justify-between pt-16 ">
                <Sidebar />
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </SessionProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
