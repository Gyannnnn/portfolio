import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[96px] w-screen text-gray-400 bg-zinc-950 flex flex-col  items-center justify-center sm:px-0 px-2 border-t border-white/20">
      <p className="max-sm:text-xs text-center">
        © 2018 - 2025 · Built with <span className="span">Next.js</span>,{" "}
        <span className="span">shadcn/ui</span> and{" "}
        <span className="span">Tailwind CSS</span> · Coded in Vs Code and
        deployed with Vercel
      </p>
      <p className="max-sm:text-sm text-center">
        Developed by{" "}
        <Link className="link" href={""}>
          Gyanranjan Patra
        </Link>{" "}
        · Source code available on{" "}
        <Link href={""} className="link">
          Github
        </Link>
      </p>
    </div>
  );
}
