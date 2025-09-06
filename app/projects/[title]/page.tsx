import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { ProjectDetailsResponse } from "@/app/types/type";
import ProjectDrawer from "@/Components/ProjectPageEdit/ProjectDrawer";
import { auth } from "@/auth";
import AddFeatures from "@/Components/ProjectPageEdit/AddFeatures";
import {
  generateMetadata as generateSEOMetadata,
  generateProjectStructuredData,
} from "@/components/seo";
import StructuredData from "@/components/seo/StructuredData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ title: string }>;
}): Promise<Metadata> {
  const title = await (await params).title;
  const projectName = decodeURI(title);
 

  try {
    const res = await axios.get<ProjectDetailsResponse>(
      `https://portfolio-be-flame.vercel.app/api/v1/projects/project/${projectName}`
    );
    const projectData = res.data.results;

    return generateSEOMetadata({
      title: `${projectData.projectName} | Gyanranjan Patra Portfolio`,
      description: `${projectData.projectDescription.substring(0, 150)}... Built with ${projectData.techStack.join(", ")} by Gyanranjan Patra, VSSUT Burla graduate.`,
      keywords: [
        projectData.projectName,
        ...projectData.techStack,
        "Gyanranjan Patra",
        "VSSUT Burla",
        "portfolio project",
        "web development",
        "full-stack development",
      ],
      canonicalUrl: `https://your-portfolio-domain.com/projects/${title}`, // Replace with actual domain
      ogImage: "/projects/veerpreps.png", // You can make this dynamic based on project
      ogType: "article",
      twitterCard: "summary_large_image",
    });
  } catch {
    return generateSEOMetadata({
      title: `${projectName} | Gyanranjan Patra Portfolio`,
      description: `Project ${projectName} by Gyanranjan Patra, VSSUT Burla graduate.`,
      keywords: [
        projectName,
        "Gyanranjan Patra",
        "VSSUT Burla",
        "portfolio project",
      ],
    });
  }
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const title = await (await params).title;
  const projectName = decodeURI(title);
  const session = await auth();
  const res = await axios.get<ProjectDetailsResponse>(
    `https://portfolio-be-flame.vercel.app/api/v1/projects/project/${projectName}`
  );
  const data = res.data;
  console.log(data);
  const projectData = data.results;

  return (
    <div className="container">
      <StructuredData
        data={generateProjectStructuredData({
          name: projectData.projectName,
          description: projectData.projectDescription,
          url: projectData.deployedLink,
          technologies: projectData.techStack,
          githubUrl: projectData.githubLink,
          imageUrl: "/projects/veerpreps.png", // You can make this dynamic
        })}
      />
      <div className="contentContainer justify-start">
        {session?.user ? (
          <ProjectDrawer
            token={session.user.jwt_token as string}
            role={session.user.role}
            id={data.results.id}
          />
        ) : (
          ""
        )}
        <div className="w-full flex justify-start">
          <Link
            href="/projects"
            className="center gap-2 hover:bg-muted px-2 py-1 rounded-xl text-gray-800 dark:text-gray-300"
          >
            {" "}
            <FaArrowLeft />
            Back to projects
          </Link>
        </div>
        <h1 className="heading">{projectName}</h1>
        <h1 className="description">{data.results.projectHeading}</h1>
        <h1 className="content text-wrap">{projectData.projectDescription}</h1>
        <h1 className="text-lg font-bold">Tech Stack</h1>
        <div className="flex flex-wrap gap-2">
          {projectData.techStack.map((tech, index) => (
            <Button variant="outline" key={index}>
              {tech}
            </Button>
          ))}
        </div>
        {session?.user ? (
          <AddFeatures
            token={session.user.jwt_token as string}
            role={session.user.role}
            id={data.results.id}
          />
        ) : (
          ""
        )}
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
            <div>
              <h1 className="text-lg font-bold">Features</h1>
            </div>
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
              className="bg-purple-500 text-white hover:bg-purple-500  w-20 flex items-center justify-center gap-2 hover:cursor-pointer"
              variant={"default"}
            >
              Live <FaExternalLinkAlt className="  text-xs" />
            </Button>
          </Link>
          <Link target="_blank" href={projectData.githubLink}>
            <Button
              className="flex items-center justify-center gap-2 hover:cursor-pointer w-24 bg-gray-600 hover:bg-gray-600 text-white"
              variant={"default"}
            >
              Github <FaExternalLinkAlt className=" text-xs" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
