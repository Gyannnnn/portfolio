import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { auth } from "@/auth";
import { getIntro } from "./actions/getIntroduction";
import Link from "next/link";

const code = `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to my portfolio!" }, { status: 200 });
}`;

// test code for the welcome page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Welcome",
  description: "Welcome to my portfolio",
};

// Links for the bottom navigation
// These links will be used in the BottomNav component
// preLinkName and postLinkName are used to display text before and after the link
// preLink and postLink are the actual links to navigate to

const links = {
  preLinkName: "",
  postLinkName: "About Me",
  preLink: "",
  postLink: "/about",
};

export default async function page() {
  const session = await auth();
  const data = await getIntro();
  const introPageData = data.data.introduction;
  if (data.statusText === "OK") {
    return (
      <div className="container flex flex-col pt-10 sm:px-10 gap-4 dark:text-white text-black">
        <div className="contentContainer">
          <h1 className="heading">{introPageData.userName}</h1>
          <h1 className="text-3xl font-bold dark:text-gray-400 text-gray-500">
            {introPageData.userHeading}
          </h1>

          <p className="content">{introPageData.userBio}</p>
          <div className="flex  justify-start items-center gap-4">
            <Link target="_blank" href={introPageData.userResumeLink}>
              <Button>
                Get Resume <IoDocumentTextOutline />
              </Button>
            </Link>
            <Link target="_blank" href={`mailto:${introPageData.userEmail}`}>
              <Button className="center" variant="outline">
                <MdEmail className="text-red-500" />
                Send Mail
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col ">
          <h1>welcome.ts</h1>
          <CodeComponent code={code} />
        </div>

        <BottomNav links={links} />
      </div>
    );
  } else {
    return (
      <div className="container items-center justify-center">
        <h1>Nothing found !</h1>
      </div>
    );
  }
}
