import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import Timeline from "@/Components/Timeline";
import { div } from "framer-motion/client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const timeline = [
  {
    title: "Started B.Tech",
    date: "August 2022",
    description: "Joined VSSUT in Information Technology.",
  },
  {
    title: "Learned MERN Stack",
    date: "March 2023",
    description:
      "Built several full-stack projects using MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Joined Enigma Coding Club",
    date: "August 2023",
    description: "Started contributing to open source and college projects.",
  },
  {
    title: "Started 100xDevs",
    date: "June 2024",
    description: "Learning backend system design and real-world skills.",
  },
];

const code = `
const educationJourney = {
  degree: "Bachelor of Engineering in Information Technology",
  university: "VSSUT, Burla",
  courses: [
    "Mastering the MERN Stack",
    "100x Dev by Harkirat Singh",
    "Debugging: Survival Instinct",
    "Pro-level Stack Overflow Navigation",
  ],
};

console.log(\`My Education: \${educationJourney.degree} at \${educationJourney.university}\`);
educationJourney.courses.forEach(course => console.log(\`- \${course}\`));
`;

const links = {
  preLinkName: "Experiance",
  postLinkName: "Contact Me",
  preLink: "/education",
  postLink: "/contact",
};

export default function EducationPage() {
  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Education</h1>
        <h1 className="description">
          Theory’s great, but the real learning begins in the VScode editor!
        </h1>
        <p className="content">
          Education has always been the cornerstone of my journey into the tech
          world. Pursuing a Bachelor's in Information Technology at Veer
          Surendra Sai University Of Technology Burla, Sambalpur has provided me
          with a solid foundation in computer science and software engineering
          principles.
        </p>
        <p>
          My academic journey has been complemented by hands-on projects and
          coursework, enabling me to build practical skills and a deep
          understanding of modern technological solutions.
        </p>
        <div>
          <Timeline data={timeline} />
        </div>
        <div>
          <h1 >educationJourney.ts</h1>
          <CodeComponent code={code} />
        </div>
        <BottomNav links={links} />
      </div>
    </div>
  );
}
