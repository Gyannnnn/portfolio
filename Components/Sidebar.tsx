"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUserGraduate, FaProjectDiagram, FaTools, FaBriefcase, FaGraduationCap, FaEnvelope, FaChartBar, FaHome,FaEdit } from "react-icons/fa";

const sections = [
  { sectionName: "Introduction", link: "/", icon: <FaHome className="text-lg" /> },
  { sectionName: "About Me", link: "/about", icon: <FaUserGraduate className="text-lg" /> },
  { sectionName: "Projects", link: "/projects", icon: <FaProjectDiagram className="text-lg" /> },
  { sectionName: "Skills & Tools", link: "/skill", icon: <FaTools className="text-lg" /> },
  { sectionName: "Experience", link: "/experience", icon: <FaBriefcase className="text-lg" /> },
  { sectionName: "Education", link: "/education", icon: <FaGraduationCap className="text-lg" /> },
  { sectionName: "Contact", link: "/contact", icon: <FaEnvelope className="text-lg" /> },
  { sectionName: "Stats", link: "/stats", icon: <FaChartBar className="text-lg" /> },
  { sectionName: "Edit Portfolio", link: "/signin", icon: <FaEdit className="text-lg" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="max-sm:hidden w-[266px] min-h-screen dark:bg-zinc-950 bg-background dark:text-white text-black border-r border-dashed dark:border-white/30 border-black/10 flex justify-center ">
      <div className="pt-10 w-full flex flex-col items-start gap-2 pl-10">
        <h1 className="pl-4 text-xl font-semibold mb-4 tracking-wide">Sections</h1>
        <div className="flex flex-col w-full gap-1">
          {sections.map((section) => {
            const isActive =
              section.link === "/"
                ? pathname === "/"
                : pathname.startsWith(section.link);
            return (
              <Link key={section.link} href={section.link} className="w-full">
                <Button
                  className={`flex items-center gap-3 w-full justify-start px-4 py-2 rounded-lg transition-colors duration-200 text-base font-medium
                    ${isActive ? "bg-primary/10 dark:bg-zinc-900 text-primary dark:text-white border-l-4 border-primary" : "hover:bg-accent/40 dark:hover:bg-zinc-800 text-foreground border-l-4 border-transparent"}
                  `}
                  variant="ghost"
                >
                  {section.icon}
                  <span>{section.sectionName}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
