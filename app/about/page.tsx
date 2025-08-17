import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import React from "react";
import { getAbout } from "../actions/getAboutPage";

const code = `const superpower = () => {
  return "Crafting full-stack solutions with MERN, delivering clean UI, efficient APIs, and developer-friendly tools!";
};

const skills = [
  "Next.js & React",
  "Node.js & Express",
  "MongoDB & PostgreSQL",
  "Tailwind & ShadCN UI",
];

const motto = "Turning complex problems into simple, scalable solutions.";

console.log("My superpower is: " + superpower());
console.log("My core skills are:", skills.join(", "));
console.log("My motto:", motto);
`;


const links = {
  preLinkName: "Introduction",
  postLinkName: "projects",
  preLink: "/",
  postLink: "/projects",
};

export default async function AboutPage() {
  const data = await getAbout();
  const aboutPageData = data.data.aboutPage;
  if (!aboutPageData) {
    return (
      <div className="container">
        <h1>Nothing Found !</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="contentContainer">
          <h1 className="heading">About Gyanranjan</h1>
          <h1 className="description">{aboutPageData.aboutHeading}</h1>
          <p className="content">{aboutPageData.about}</p>

          <h1>aboutMe.ts</h1>
          <div className="overflow-x-scroll">
            <CodeComponent code={code} />
          </div>

          <div>
            <BottomNav links={links} />
          </div>
        </div>
      </div>
    );
  }
}
