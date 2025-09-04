// iconMap.ts
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaGitAlt, FaNpm, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiShadcnui, SiPrisma, SiPostman, SiTypescript } from "react-icons/si";
import { IoLogoNodejs, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

export const iconMap: Record<string, React.ElementType> = {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaPython,
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiPrisma,
  SiPostman,
  SiTypescript,
  IoLogoNodejs,
  IoLogoVercel,
  RiTailwindCssFill,
  RiNextjsFill,
  BiLogoPostgresql,
  FcLinux,
};


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

console.log(skillData);