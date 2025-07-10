"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  MoonIcon,
  Settings,
  Smile,
  SunIcon,
  User,
} from "lucide-react";
import {
  FaUserGraduate,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaChartBar,
  FaHome,
} from "react-icons/fa";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const sections = [
  {
    sectionName: "Introduction",
    link: "/",
    icon: <FaHome className="text-lg" />,
  },
  {
    sectionName: "About Me",
    link: "/about",
    icon: <FaUserGraduate className="text-lg" />,
  },
  {
    sectionName: "Projects",
    link: "/projects",
    icon: <FaProjectDiagram className="text-lg" />,
  },
  {
    sectionName: "Skills & Tools",
    link: "/skill",
    icon: <FaTools className="text-lg" />,
  },
  {
    sectionName: "Experience",
    link: "/experience",
    icon: <FaBriefcase className="text-lg" />,
  },
  {
    sectionName: "Education",
    link: "/education",
    icon: <FaGraduationCap className="text-lg" />,
  },
  {
    sectionName: "Contact",
    link: "/contact",
    icon: <FaEnvelope className="text-lg" />,
  },
  {
    sectionName: "Stats",
    link: "/stats",
    icon: <FaChartBar className="text-lg" />,
  },
];

export default function Commandinput() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen((open) => !open)}
        className="center gap-4 bg-transparent px-4 py-2 rounded-sm text-muted-foreground"
      >
        <p className="text-sm">Search sections ...</p>
        <p className="text-muted-foreground text-sm max-sm:hidden">
          Press{" "}
          <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </div>
      <CommandDialog
        className="bg-zinc-900 "
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sections">
            {sections.map((section, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  router.push(section.link);
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-4">
                  {section.icon}
                  <span>{section.sectionName}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => setTheme("light")}>
              <SunIcon className="mr-2 h-4 w-4" />
              <span>Light</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setTheme("dark")}>
              <MoonIcon className="mr-2 h-4 w-4" />
              <span>Dark</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
