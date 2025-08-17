"use client";

import React from "react";
import { useTheme } from "next-themes";

import { FaReact, FaGithub, FaGitAlt, FaNpm, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiPrisma,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import CodeComponent from "@/Components/CodeComponent";
import BottomNav from "@/Components/BottomNav";

import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";

const skillData = [
  { icon: FaHtml5, skill: "HTML", iconColor: "#e44d26" },
  { icon: FaCss3, skill: "CSS", iconColor: "#264de4" },
  { icon: FaJs, skill: "JavaScript", iconColor: "#f0db4f" },
  { icon: RiTailwindCssFill, skill: "Tailwind", iconColor: "#38bdf8" },
  { icon: FaReact, skill: "React", iconColor: "#61dbfb" },
  { icon: IoLogoNodejs, skill: "Node.js", iconColor: "#68a063" },
  { icon: SiExpress, skill: "Express", iconColor: "#000000" }, // fix this
  { icon: SiMongodb, skill: "MongoDB", iconColor: "#4db33d" },
  { icon: RiNextjsFill, skill: "Next.js", iconColor: "#111" }, // fix this
  { icon: SiShadcnui, skill: "ShadCN", iconColor: "#111" }, // fix this
  { icon: BiLogoPostgresql, skill: "PostgreSQL", iconColor: "#336791" },
  { icon: SiPrisma, skill: "Prisma", iconColor: "#0c344b" },
  { icon: FcLinux, skill: "Linux", iconColor: "" },
  { icon: SiPostman, skill: "Postman", iconColor: "#ff6c37" },
  { icon: FaGithub, skill: "GitHub", iconColor: "#111" }, // fix this
  { icon: IoLogoVercel, skill: "Vercel", iconColor: "#111" }, // fix this
  { icon: FaGitAlt, skill: "Git", iconColor: "#f1502f" },
  { icon: FaNpm, skill: "NPM", iconColor: "#cb3837" },
  { icon: FaPython, skill: "Python", iconColor: "#306998" },
  { icon: SiTypescript, skill: "TypeScript", iconColor: "#007acc" },
];

const code = `const mySkills: string[] = [
  "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Tailwind CSS",
  "shadcn/ui", "NodeJS", "ExpressJS", "MongoDB", "Git", "GitHub", "Vercel",
  "Postman", "Linux", "macOS", "Windows", "pnpm", "npm", "yarn", "Docker", "Radix UI"
];

const getSkills = (): string => {
  if (mySkills.length > 0) {
    const skillsList = mySkills.join(", ");
    return \`🧠 Skills forged in hostel rooms and 3AM debug sessions:\\n→ \${skillsList} 💻🔥\`;
  } else {
    return "Still learning... but already Googling like a pro! 😅";
  }
};

console.log(getSkills());`;

const links = {
  preLinkName: "Projects",
  postLinkName: "Experience",
  preLink: "/projects",
  postLink: "/experience",
};

export default function SkillPage() {
  const { theme } = useTheme();

  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Skills & Tools</h1>
        <h1 className="description">
          Learned by surviving in hostel Wi-Fi and fixing bugs before breakfast.
        </h1>
        <p className="content">
          As a full-stack software developer, I build scalable and user-friendly
          web applications using modern technologies like Next.js, React, and
          Tailwind CSS. am currently expanding my skill set into mobile
          development with React Native and Expo to deliver seamless
          cross-platform experiences. I enjoy solving real-world
          problems—especially those faced by students—through impactful, fast,
          and clean solutions.
        </p>

        <div className="flex flex-wrap justify-start gap-3 mt-6">
          {skillData.map((skill, index) => {
            const Icon = skill.icon;
            const isDarkTheme = theme === "dark";

            const blackVariants = ["#000", "#000000", "#111", "#111111"];
            const isBlackIcon = blackVariants.includes(
              skill.iconColor?.toLowerCase()
            );

            // ✅ Only override dark icon colors in dark mode
            const dynamicColor =
              isDarkTheme && isBlackIcon ? "#ffffff" : skill.iconColor;

            return (
              <Button key={index} variant="outline" className="gap-2">
                <Icon style={{ color: dynamicColor, fontSize: "1.2rem" }} />
                {skill.skill}
              </Button>
            );
          })}
        </div>
        <div>
          <h1 className="">skills.ts</h1>
          <CodeComponent code={code} />
        </div>
        <div>
          <BottomNav links={links} />
        </div>
      </div>
    </div>
  );
}
