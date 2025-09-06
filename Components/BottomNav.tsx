import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { TbMathGreater } from "react-icons/tb";
import { FaLessThan } from "react-icons/fa6";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

interface navLink {
  preLinkName: string;
  preLink: string;
  postLinkName: string;
  postLink: string;
}

interface linkProps {
  link: string[];
}

export default function BottomNav({ links }: { links: navLink }) {
  return (
    <div className="flex justify-between">
      <Link
        className="center gap-2 dark:hover:bg-zinc-900 hover:bg-zinc-100 px-4 py-1 rounded-sm"
        href={links.preLink}
      >
        {links.preLink === "" ? (
          ""
        ) : (
          <>
            <FaArrowLeftLong /> {links.preLinkName}
          </>
        )}
      </Link>
      <Link
        className="center gap-1 dark:hover:bg-zinc-900 hover:bg-zinc-100 px-4 py-1 rounded-sm"
        href={links.postLink}
      >
        {links.postLinkName}
        <FaArrowRightLong />
      </Link>
    </div>
  );
}
