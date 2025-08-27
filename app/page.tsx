
import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import { Button } from "@/components/ui/button";
import React from "react";

import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { getIntro } from "./actions/getIntroduction";
import Link from "next/link";

import { getToken } from "@/utils/auth";
import EditContent from "@/Components/EditContent";
import { auth } from "@/auth";

const code = `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const message = "Welcome to Task X!";
  const tips = ["Stay consistent", "Plan your day", "Track your tasks"];

  const data = {
    success: true,
    message,
    tips,
    author: "Gyanaranjan Patra",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}
`;

const links = {
  preLinkName: "",
  postLinkName: "About Me",
  preLink: "",
  postLink: "/about",
};

export default async function page() {
  const data = await getIntro();  
  
  const introPageData = data.data.introduction;
  if (data.statusText === "OK") {
    return (
      <div className="container ">
        <div className="contentContainer">
          <EditContent/>
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
          <h1>welcome.ts</h1>
          <CodeComponent code={code} />

          <BottomNav links={links} />
        </div>
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
