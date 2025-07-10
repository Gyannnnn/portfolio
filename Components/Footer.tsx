import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="min-h-[96px] py-2 w-screen text-gray-400 bg-zinc-950 flex flex-col  items-center justify-center sm:px-0 px-2 border-t border-white/20  text-sm max-sm:text-xs">
      <div className="center w-full max-sm:flex-col">
        <p>© 2018 - 2025.</p>
        <p>
          Built with <span className="span">Next.js</span>,{" "}
          <span className="span">shadcn/ui</span> and{" "}
          <span className="span">Tailwind CSS</span>
        </p>
        <p>
          Coded in <span className="span">VScode editor</span> and deployed on{" "}
          <span className="span">Vercel</span>
        </p>
      </div>
      <div className="text-center">
        <p>
          Developed by{" "}
          <Link className="link" href="https://github.com/gyannnnn">
            Gyanranjan Patra
          </Link>{" "}
          · Source code available on{" "}
          <Link className="link" href={"https://github.com/gyannnnn"}>
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
}
