import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const code = `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to my portfolio!" }, { status: 200 });
}`;

const links = {
  preLinkName: "",
  postLinkName: "About Me",
  preLink: "",
  postLink: "/about",
};

export default function page() {
  return (
    <div className="container flex flex-col pt-10 px-10 gap-4 dark:text-white text-black">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="heading">Gyanaranjan Patra</h1>
          <h1 className="text-3xl font-bold dark:text-gray-400 text-gray-500">
            A coder by day, problem-solver by night!
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <p className="content">
            I am a dedicated Software Engineer specializing in full-stack
            application development. I enjoy crafting responsive web solutions
            using modern technologies like Next.js, React, and Tailwind CSS.
            Currently, I am expanding my skills into mobile development with
            React Native and Expo, aiming to deliver comprehensive, user-centric
            software solutions.
          </p>
          <div className="flex  justify-start items-center gap-4">
            <Button>
              Get Resume <IoDocumentTextOutline />
            </Button>
            <Button className="center" variant="outline">
              <MdEmail className="text-red-500" />
              Send Mail
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h1>welcome.ts</h1>
        <CodeComponent code={code} />
      </div>

      <div>
        <BottomNav links={links} />
      </div>
    </div>
  );
}
