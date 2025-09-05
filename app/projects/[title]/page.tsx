import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
// const techStacks = [
//   { name: "Nextjs" },
//   { name: "Typescript" },
//   { name: "Shadcn Ui" },
//   { name: "Tailwind Css" },
//   { name: "PostgreSQL" },
//   { name: "Prisma & ORM" },
// ];
import axios from "axios";
import { ProjectDetailsResponse } from "@/app/types/type";

// const features = [
//   { feature: "API to track and display profile views in real-time." },
//   {
//     feature:
//       "Love count feature to allow visitors to express appreciation for the work.",
//   },
//   { feature: "Implemented server actions using the latest Next.js features." },
//   {
//     feature:
//       "Dynamic project listing with slug-based routing for detailed pages.",
//   },
//   { feature: "Mobile-responsive and optimized for all devices." },
//   {
//     feature:
//       "Integration with MongoDB using Mongoose for efficient data management.",
//   },
// ];

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const title = await (await params).title;
  const projectName = decodeURI(title);

  const res = await axios.get<ProjectDetailsResponse>(
    `https://portfolio-be-flame.vercel.app/api/v1/projects/project/${projectName}`
  );
  const data = res.data;
  console.log(data);
  const projectData = data.results;

  return (
    <div className="container">
      <div className="contentContainer justify-start">
        <div className="w-full flex justify-start">
          <Link
            href="/projects"
            className="center gap-2 hover:bg-muted px-2 py-1 rounded-xl text-gray-300"
          >
            {" "}
            <FaArrowLeft />
            Back to projects
          </Link>
        </div>
        <h1 className="heading">{projectName}</h1>
        <h1 className="description">{projectData.projectDescription}</h1>
        <h1 className="text-lg font-bold">Tech Stack</h1>
        <div className="flex flex-wrap gap-2">
          {projectData.techStack.map((tech, index) => (
            <Button variant="ghost" key={index}>
              {tech}
            </Button>
          ))}
        </div>
        <div className="w-full flex max-sm:flex-col max-sm:gap-4 flex-wrap ">
          <div className="w-1/2 flex flex-col justify-start max-sm:w-full">
            <h1 className="text-lg font-bold">Features</h1>
            <ul className="list-disc pl-4">
              {projectData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 flex flex-col justify-start max-sm:w-full">
            <h1 className="text-lg font-bold">Challenges</h1>
            <ul className="list-disc pl-4">
              {projectData.challenges.map((chl, index) => (
                <li key={index}>{chl}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex  max-sm:flex-col max-sm:gap-4 ">
          <div className="w-1/2 flex flex-col justify-start max-sm:w-full">
            <h1 className="text-lg font-bold">Features</h1>
            <ul className="list-disc pl-4">
              {projectData.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 flex flex-col justify-start max-sm:w-full">
            <h1 className="text-lg font-bold">Feedback</h1>
            <h1>
              For feedback or suggestions, contact me at:{" "}
              <Link
                className="text-purple-500 font-bold"
                href="mailto:hi.gyanaranjanpatra@gmail.com
"
              >
                hi.gyanaranjanpatra@gmail.com
              </Link>
            </h1>
          </div>
        </div>
        <div className="center gap-2 justify-start">
          <Link target="_blank" href={projectData.deployedLink}>
            <Button
              className="bg-purple-500 text-white hover:bg-purple-500 relative w-20"
              variant={"default"}
            >
              Live{" "}
              <FaExternalLinkAlt className="absolute top-1 right-1 text-xs" />
            </Button>
          </Link>
          <Link target="_blank" href={projectData.githubLink}>
            <Button className="relative w-24" variant={"ghost"}>
              Github{" "}
              <FaExternalLinkAlt className="absolute top-1 right-0 text-xs" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
