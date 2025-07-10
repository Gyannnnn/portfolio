import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import React from "react";

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

export default function AboutPage() {
  return (
    <div className="container ">
      <div className="contentContainer">
        <h1 className="heading">About Gyanranjan</h1>
        <h1 className="description">
          More than just a title—let’s dive deeper!
        </h1>
        <p className="content">
          I am a passionate Software Engineer with a knack for building
          full-stack web applications using modern technologies like Next.js and
          Tailwind CSS. My journey in tech began with a curiosity for solving
          real-world problems through innovative solutions, which evolved into a
          love for crafting user-centric digital experiences.
        </p>
        <p className="content">
          With a strong foundation in JavaScript frameworks, I focus on creating
          scalable, efficient, and visually appealing applications. Currently, I
          am diving deeper into mobile development with React Native and Expo to
          expand my skill set and deliver versatile, cross-platform solutions.
        </p>
        <p className="content">
          Beyond coding, I thrive in collaborative environments and enjoy
          tackling challenging problems with creative solutions. I aim to
          contribute to impactful projects that make a difference in users&apos;
          lives.
        </p>

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
