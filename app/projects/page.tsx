import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import Projects from "@/Components/ProjectCard";
import React from "react";

const code = `const projectField = {
  idea: "Late-night code sparks in hostel room",
  execution: "Fueled by eggs, chana, and stack overflow",
  outcome: "Shipped at 3AM, deployed before class!",
};

console.log("Project Field:", projectField);
`
const links = {
  preLinkName: "About me",
  postLinkName: "Skills & Projects",
  preLink: "/about",
  postLink: "/skill",
};


export default function ProjectsPage() {
  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Projects</h1>
        <h1 className="description">A lot of ideas, but some are still under construction!</h1>
        <div className="w-full">
          <Projects/>
        </div>
        <div >
          <h1 className="">projects.ts</h1>
          <CodeComponent code={code}/>
        </div>
        <div>
          <BottomNav links={links}/>
        </div>
      </div>
    </div>
  );
}
