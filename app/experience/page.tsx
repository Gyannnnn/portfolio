import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import Timeline from "@/Components/Timeline";
import React from "react";
import { experienceSection } from "@/app/types/type";
import axios from "axios";
import EditExperience from "@/Components/ExperiencepageEdit/EditExperience";
import { auth } from "@/auth";
import { generateMetadata as generateSEOMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Experience | Gyanranjan Patra Portfolio",
  description: "Explore the professional experience and career journey of Gyanranjan Patra, a VSSUT Burla graduate. Discover work experience, internships, and professional achievements in software development.",
  keywords: [
    "Gyanranjan Patra experience",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla experience",
    "software developer experience",
    "web developer experience",
    "full-stack developer experience",
    "programming experience",
    "professional experience",
    "work experience",
    "career journey",
    "developer career",
    "software engineering experience"
  ],
  canonicalUrl: "https://gyanpatra.dev.iitkirba.xyz/experience", 
  ogImage: "/profile/og.png",
  ogType: "website",
  twitterCard: "summary_large_image",
});

const code = `
const experience = [
  {
    role: "Senior Coffee Consumer",
    company: "Remote Office (My Desk)",
    duration: "Forever",
    skills: ["Caffeine Management", "Bug Staring", "Keyboard Jamming"],
  },
  {
    role: "Full-Stack Developer",
    company: "Stack Overflow Solutions Inc.",
    duration: "When Google is Available",
    skills: ["Copy-Pasting", "Fixing Bugs with console.log", "Deploying & Praying"],
  },
  {
    role: "Intern",
    company: "My Own Side Projects",
    duration: "Since Birth",
    skills: ["Breaking Code", "Googling Errors", "Naming Variables Creatively"],
  },
];

experience.forEach((job) => {
  console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration})\\n🚀 Skills: \${job.skills.join(", ")}\`);
});
`;

const links = {
  preLinkName: "Skills & Tools",
  postLinkName: "Education",
  preLink: "/skill",
  postLink: "/education",
};
export default async function ExperiancePage() {
  const res = await axios.get<experienceSection>(
    "https://portfolio-be-flame.vercel.app/api/v1/experience/get"
  );
  const data = res.data;
  console.log(data.experienceSection.experience);
  const session = await auth();
  const timelineData = data.experienceSection.experience.map((exp) => ({
    title: exp.experienceName,
    date: new Date(exp.joiningDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    }),
    description: exp.experienceDescription,
  }));

  return (
    <div className="container">
      {session?.user ? (
        <EditExperience
          experienceSectionProps={{
            portfolioId: data.experienceSection.portfolioId,
            experienceSectionId: data.experienceSection.id,
          }}
        />
      ) : (
        ""
      )}
      <div className="contentContainer">
        <h1 className="heading">Experience</h1>
        <h1 className="description">
          {data.experienceSection.experienceHeading}
        </h1>
        <p className="content">
          {data.experienceSection.experienceDescription}
        </p>
        <div>
          <Timeline data={timelineData} />
        </div>
        <div>
          <h1>experience.ts</h1>
          <CodeComponent code={code} />
        </div>
        <BottomNav links={links} />
      </div>
    </div>
  );
}
