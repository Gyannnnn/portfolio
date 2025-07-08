"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sections = [
  { sectionName: "Introduction", link: "/" },
  { sectionName: "About Me", link: "/about" },
  { sectionName: "Projects", link: "/projects" },
  { sectionName: "Skills & Tools", link: "/skill" },
  { sectionName: "Experience", link: "/experience" },
  { sectionName: "Education", link: "/education" },
  { sectionName: "Contact", link: "/contact" },
  { sectionName: "Stats", link: "/stats" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="max-sm:hidden w-[266px] min-h-screen dark:bg-zinc-950 bg-background dark:text-white text-black border-r border-dashed dark:border-white/30 border-black/10 flex justify-center ">
      <div className="pt-10 w-full flex flex-col items-start gap-2 pl-10">
        <h1 className="pl-4 text-xl font-semibold">Sections</h1>
        <div className="flex flex-col w-full gap-1">
          {sections.map((section) => (
            <Link key={section.link} href={section.link}>
              <Button
                className={`${
                  pathname === section.link ? "dark:bg-zinc-900 pr-46" : "pr-46"
                }`}
                variant="ghost"
              >
                <h1>{section.sectionName}</h1>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
