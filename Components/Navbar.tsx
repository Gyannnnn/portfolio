"use client";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Commandinput from "./CommandInput";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  return (
    <div
      className="fixed top-0 z-50 h-16 w-screen flex items-center sm:justify-between justify-center sm:px-28 
  backdrop-blur-lg border-b border-dashed 
  bg-white/30 dark:bg-zinc-900/30 
  border-black/10 dark:border-white/20
  text-black dark:text-white"
    >
      <div className="center gap-6 max-sm:hidden">
        <div className="flex gap-2 center">
          <FaUserGraduate />
           <h1 className="text-xl font-bold">gyanpatra.dev</h1>
        </div>
        <div className="center gap-2  text-sm">
          <Link href={"/"}>Home</Link>
          <div className="center relative w-20 ">
            <Link
              className="flex items-center justify-center gap-2"
              href={
                "https://drive.google.com/file/d/1JOzAK8d2MPsR_zEpnUO-IJVooXQ85xN0/view"
              }
            >
              Resume
              <FaExternalLinkAlt className="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="center gap-4 text-xl max-sm:w-full max-sm:justify-around">
        <div className="center">
          <Commandinput />
        </div>
        <Link href="https://github.com/gyannnnn" target="_blank">
          <FaGithub />
        </Link>
        <ThemeToggler />
      </div>
    </div>
  );
}
