import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Sidebar from "@/Components/Sidebar";
import { ReactLenis } from "@/lib/Lenis/Lenis";
import { ThemeProvider } from "@/components/theme-provider";
import { generateMetadata as generateSEOMetadata, generatePersonStructuredData } from "@/components/seo";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Gyanranjan Patra | VSSUT Burla Developer Portfolio",
  description: "Portfolio of Gyanranjan Patra, a skilled developer and VSSUT Burla graduate. Showcasing full-stack development projects, skills, and experience in React, Next.js, Node.js, and modern web technologies.",
  keywords: [ 
    "Gyanranjan Patra",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla",
    "portfolio",
    "developer",
    "software engineer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "web development",
    "frontend developer",
    "backend developer"
  ],
  canonicalUrl: "https://your-portfolio-domain.com", 
  ogImage: "/profile/og.png",
  ogType: "website",
  twitterCard: "summary_large_image",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={generatePersonStructuredData()} />
      </head>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              <main className="flex justify-between  pt-16 sm:px-16 ">
                <Sidebar />
                {children}
              </main>
              <Footer />
            </ThemeProvider>
        
        </body>
      </ReactLenis>
    </html>
  );
}
