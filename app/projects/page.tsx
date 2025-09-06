import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import Projects from "@/Components/ProjectCard";
import axios from "axios";
import { projectSection } from "../types/type";
import AddProjectDrawer from "@/Components/ProjectPageEdit/AddProjectDrawer";
import { auth } from "@/auth";

const code = `const projectField = {
  idea: "Late-night code sparks in hostel room",
  execution: "Fueled by eggs, chana, and stack overflow",
  outcome: "Shipped at 3AM, deployed before class!",
};

console.log("Project Field:", projectField);
`;
const links = {
  preLinkName: "About me",
  postLinkName: "Skills & Projects",
  preLink: "/about",
  postLink: "/skill",
};

type ProjectCardData = {
  title: string;
  description: string;
};

export default async function ProjectsPage() {
  const res = await axios.get<projectSection>(
    "https://portfolio-be-flame.vercel.app/api/v1/projects/"
  );
  const data = res.data;
  console.log(data.projectsPage.id);
  const session = await auth();

  const projectComponentData: ProjectCardData[] =
    data.projectsPage.projects.map((prj) => ({
      title: prj.projectName,
      description: prj.projectHeading,
    }));

  return (
    <div className="container">
      <div className="contentContainer">
        {session?.user ? (
          <AddProjectDrawer
            token={session?.user.jwt_token as string}
            id={data.projectsPage.id}
            role={session?.user.role as string}
          />
        ) : (
          ""
        )}
        <h1 className="heading">Projects</h1>
        <h1 className="description">{data.projectsPage.projectHeading}</h1>
        <Projects data={projectComponentData} />
        <div>
          <h1 className="">projects.ts</h1>
          <CodeComponent code={code} />
        </div>
        <div>
          <BottomNav links={links} />
        </div>
      </div>
    </div>
  );
}
