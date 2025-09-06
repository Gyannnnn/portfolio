import Error from "@/Components/Error";
import SkillPage from "@/Components/SkillPage";
import EditSkill from "@/Components/SkillPageEdit/EditSkill";
import axios from "axios";
import { SkillSection } from "../types/type";
import { generateMetadata as generateSEOMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Skills & Technologies | Gyanranjan Patra",
  description: "Discover the technical skills and technologies mastered by Gyanranjan Patra, a VSSUT Burla graduate. Expertise in React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and modern web development tools.",
  keywords: [
    "Gyanranjan Patra skills",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla skills",
    "technical skills",
    "programming skills",
    "web development skills",
    "React skills",
    "Next.js skills",
    "Node.js skills",
    "TypeScript skills",
    "JavaScript skills",
    "MongoDB skills",
    "PostgreSQL skills",
    "full-stack skills",
    "frontend skills",
    "backend skills",
    "software development skills"
  ],
  canonicalUrl: "https://your-portfolio-domain.com/skill", // Replace with actual domain
  ogImage: "/profile/profile.jpeg",
  ogType: "website",
  twitterCard: "summary_large_image",
});

interface skillPageResposne {
  skillSection: SkillSection;
}


export default async function Skill() {
  try {
    const res = await axios.get<skillPageResposne>(
      "https://portfolio-be-flame.vercel.app/api/v1/skillsection/get"
    );
    const data = res.data;
    const id = data.skillSection.id;
    const skillHeading = data.skillSection.skillHeading;
    const skillDescription = data.skillSection.skillDescription;
    const portfolioId = data.skillSection.portfolioId;
    console.log("Skills : " + data.skillSection.skills[0].skillName);

    return (
      <div className="w-screen">
        <EditSkill
          skillPageData={{ id, skillHeading, skillDescription, portfolioId }}
        />
        <SkillPage skillSection={data.skillSection} />
      </div>
    );
  } catch (error) {
    const err = error as Error;
    return <Error error={err.message} />;
  }
}
