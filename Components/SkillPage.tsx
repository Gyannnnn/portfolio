"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import CodeComponent from "@/Components/CodeComponent";
import BottomNav from "@/Components/BottomNav";
import { SkillSection } from "@/app/types/type";
import { iconMap } from "../app/lib/Iconmap";
interface SkillSectionProps {
  skillSection: SkillSection;
}

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

export default function SkillPage({ skillSection }: SkillSectionProps) {
  const { theme } = useTheme();

  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Skills & Tools</h1>
        <h1 className="description">{skillSection.skillHeading}</h1>
        <p className="content">{skillSection.skillDescription}</p>

        <div className="flex flex-wrap sm:justify-start justify-end gap-3 mt-6">
          {skillSection.skills.map((skill) => {
            const Icon = iconMap[skill.skillIcon]; // string → component
            const isDarkTheme = theme === "dark";

            const blackVariants = ["#000", "#000000", "#111", "#111111"];
            const isBlackIcon = blackVariants.includes(
              skill.skillIconColor?.toLowerCase()
            );

            const dynamicColor =
              isDarkTheme && isBlackIcon ? "#ffffff" : skill.skillIconColor;

            return (
              <Button key={skill.id} variant="outline" className="gap-2">
                {Icon && (
                  <Icon style={{ color: dynamicColor, fontSize: "1.2rem" }} />
                )}
                {skill.skillName}
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
