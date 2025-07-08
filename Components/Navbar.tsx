"use client";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Commandinput from './CommandInput'
import ThemeToggler from "./ThemeToggler";

export default function Navbar() { 
  return (
    <div className="fixed top-0 z-50 h-16 w-screen flex items-center justify-between px-13 
  backdrop-blur-lg border-b border-dashed 
  bg-white/30 dark:bg-zinc-900/30 
  border-black/10 dark:border-white/20
  text-black dark:text-white">
      <div className="center gap-6">
        <div className="flex gap-2 center">
          <FaUserGraduate />
          {""} <h1 className="text-xl font-bold">gyanpatra.dev</h1>
        </div>
        <div className="center gap-2  text-sm">
          <Link href={""}>Home</Link>
          <div className="center relative w-20 ">
            <Link className="center" href={""}>
              Blog
              <FaExternalLinkAlt className="absolute top-0 right-2 text-xs" />
            </Link>
          </div>
          <div className="center  relative w-24  ">
            <Link className="center" href={""}>
              Resume
              <FaExternalLinkAlt className="absolute top-0 right-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
      <div className="center gap-4 text-xl">
        <div className="center">
          <Commandinput/>
        </div>
        <div>
          <FaGithub />
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
