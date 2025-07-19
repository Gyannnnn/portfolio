import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import Timeline from "@/Components/Timeline";
import React from "react";

const timeline = [
  {
    title: "Started B.Tech",
    date: "August 2023",
    description: "Joined VSSUT in Information Technology.",
  },
  {
    title: "Learned MERN Stack",
    date: "March 2023",
    description:
      "Built several full-stack projects using MongoDB, Express, React, and Node.js,PostgreSql.",
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
const experience = [
  {
    role: "Senior Coffee Consumer",
    company: "Remote Office (My Desk)",
    duration: "Forever",
    skills: ["Caffeine Management", "Bug Staring", "Keyboard Jamming"],
  },
  {
    role: "Full-Stack Developer",
    company: "Stack Overflow Solutions Inc.",
    duration: "When Google is Available",
    skills: ["Copy-Pasting", "Fixing Bugs with console.log", "Deploying & Praying"],
  },
  {
    role: "Intern",
    company: "My Own Side Projects",
    duration: "Since Birth",
    skills: ["Breaking Code", "Googling Errors", "Naming Variables Creatively"],
  },
];

experience.forEach((job) => {
  console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration})\\n🚀 Skills: \${job.skills.join(", ")}\`);
});
`;

const links = {
  preLinkName: "Skills & Tools",
  postLinkName: "Education",
  preLink: "/skill",
  postLink: "/education",
};

export default function ExperiancePage() {
  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Experience</h1>
        <h1 className="description">
          You need it to get the job, but the job’s what gives it!
        </h1>
        <p className="content">
          Throughout my journey as a developer, I’ve explored the latest
          technologies while also becoming best friends with bugs at 2 AM. From
          building full-stack web apps with the MERN stack to untangling
          confusing console errors, my growth has come from both structured
          learning—like 100xDevs and hands-on internships—and late-night
          problem-solving marathons. Every project has made me better at writing
          clean, maintainable code, working with teams, and most
          importantly—fixing bugs before they break me.
        </p>
        <div>
          <Timeline data={timeline} />
        </div>
        <div>
          <h1>experience.ts</h1>
          <CodeComponent code={code} />
        </div>
        <BottomNav links={links} />
      </div>
    </div>
  );
}
