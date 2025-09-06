import ContactFormTab from "@/Components/ContactFormTab";
import React from "react";
import { generateMetadata as generateSEOMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact | Gyanranjan Patra Portfolio",
  description: "Get in touch with Gyanranjan Patra, a VSSUT Burla graduate and full-stack developer. Available for freelance projects, job opportunities, and collaboration. Contact via email or social media.",
  keywords: [
    "Contact Gyanranjan Patra",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla contact",
    "hire developer",
    "freelance developer",
    "web developer contact",
    "full-stack developer contact",
    "React developer contact",
    "Next.js developer contact",
    "Node.js developer contact",
    "software developer contact",
    "programming services",
    "web development services"
  ],
  canonicalUrl: "https://your-portfolio-domain.com/contact", 
  ogImage: "/profile/og.png",
  ogType: "website",
  twitterCard: "summary_large_image",
});

export default function ContactPage() {
  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Contact</h1>
        <h1 className="description">
          Get in touch before I hit `npm start` again!
        </h1>
        <div className="w-full flex items-center max-sm:justify-center">
          <ContactFormTab/>
        </div>
      </div>
    </div>
  );
}
