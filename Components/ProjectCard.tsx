"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "VeerPreps",
    description:
      "Educational Platform for VSSUT Burla students where students can access previous year question,lecture notes and selected youtube playlists by seniors",
    image: "/projects/veerpreps.png",
    link: "/projects/veerpreps",
  },
  {
    title: "VeerPreps Admin Dashboard",
    description:
      "Admin dashboard for www.iitkirba.xyz where admin can upload pyqs, notes manage resources like delete update. The admin can also add new branch ",
    image: "/projects/veerpreps.png",
    link: "/projects/veerpreps",
  },
  {
    title: "Developer Portfolio",
    description:
      "Professional developer portfolio of Gyanranjan patra , Made using nextjs , typescript etc",
    image: "/projects/veerpreps.png",
    link: "/projects/veerpreps",
  },
  {
    title: "Form Builder backend",
    description:
      "Backend of Formbuilder app , where users can buld forms and share to recieve submissions",
    image: "/projects/veerpreps.png",
    link: "/projects/veerpreps",
  },
  {
    title: "Blog App",
    description: "A stunning blogging website made using notion as cms",
    image: "/projects/veerpreps.png",
    link: "/projects/veerpreps",
  },
  // You can add more projects here
];

export default function Projects() {
  return (
    <div className="w-full  flex flex-wrap sm:justify-start justify-center max-sm:pl-3 ">
      {projects.map((project, index) => (
        <Link key={index} href={`/projects/${project.title}`} className="group">
          <Card className="w-[350px] h-[150px] mr-4 mb-2 p-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
}
