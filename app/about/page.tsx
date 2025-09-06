import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import React from "react";
import { getAbout } from "../actions/getAboutPage";
import EditAbout from "@/Components/AboutpageEdit/EditAbout";
import { generateMetadata as generateSEOMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Gyanranjan Patra | VSSUT Burla Developer",
  description: "Learn about Gyanranjan Patra, a passionate full-stack developer and VSSUT Burla graduate. Discover my journey, skills, and passion for creating innovative web solutions.",
  keywords: [
    "About Gyanranjan Patra",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla developer",
    "full-stack developer",
    "software engineer",
    "web developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "developer story",
    "programming journey"
  ],
  canonicalUrl: "https://your-portfolio-domain.com/about", // Replace with actual domain
  ogImage: "/profile/profile.jpeg",
  ogType: "profile",
  twitterCard: "summary_large_image",
});

const code = `const superpower = () => {
  return "Crafting full-stack solutions with MERN, delivering clean UI, efficient APIs, and developer-friendly tools!";
};

const skills = [
  "Next.js & React",
  "Node.js & Express",
  "MongoDB & PostgreSQL",
  "Tailwind & ShadCN UI",
];

const motto = "Turning complex problems into simple, scalable solutions.";

console.log("My superpower is: " + superpower());
console.log("My core skills are:", skills.join(", "));
console.log("My motto:", motto);
`;

const links = {
  preLinkName: "Introduction",
  postLinkName: "projects",
  preLink: "/",
  postLink: "/projects",
};

export default async function AboutPage() {
  const data = await getAbout();
  const aboutPageData = data.data.aboutPage;
  if (!aboutPageData) {
    return (
      <div className="container">
        <h1>Nothing Found !</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="contentContainer">
          <EditAbout/>
          <h1 className="heading">About Gyanranjan</h1>
          <h1 className="description">{aboutPageData.aboutHeading}</h1>
          <p className="content">{aboutPageData.about}</p>

          <h1>aboutMe.ts</h1>
          <div className="overflow-x-scroll">
            <CodeComponent code={code} />
          </div>

          <div>
            <BottomNav links={links} />
          </div>
        </div>
      </div>
    );
  }
}
