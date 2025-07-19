import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import React from "react";
import { getAbout } from "../actions/getAboutPage";

const code = `const superpower = () => {
  return "Crafting full-stack solutions with MERN, delivering clean UI, efficient APIs, and developer-friendly tools!";
};

console.log("My superpower is: " + superpower());`;

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
      <div className="container ">
        <div className="contentContainer">
          <h1 className="heading">About Gyanranjan</h1>
          <h1 className="description">{aboutPageData.aboutHeading}</h1>
          <p className="content">{aboutPageData.about}</p>

          <div>
            <h1>aboutMe.ts</h1>
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
