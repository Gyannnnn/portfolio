import BottomNav from "@/Components/BottomNav";
import CodeComponent from "@/Components/CodeComponent";
import Timeline from "@/Components/Timeline";
import axios from "axios";
import { educationSection } from "../types/type";
import EducationDrawer from "@/Components/EducationPageEdit/EducationDrwer";
import { auth } from "@/auth";
import { generateMetadata as generateSEOMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Education | Gyanranjan Patra VSSUT Burla",
  description: "Educational background of Gyanranjan Patra, a VSSUT Burla graduate with Bachelor of Engineering in Information Technology. Discover academic achievements, courses, and educational journey.",
  keywords: [
    "Gyanranjan Patra education",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla education",
    "VSSUT Burla graduate",
    "Information Technology",
    "Bachelor of Engineering",
    "VSSUT Burla IT",
    "computer science education",
    "engineering education",
    "technical education",
    "programming education",
    "software engineering education"
  ],
  canonicalUrl: "https://gyanpatra.dev.iitkirba.xyz/education", 
  ogImage: "/profile/og.png",
  ogType: "website",
  twitterCard: "summary_large_image",
});

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

export default async function EducationPage() {
  const res = await axios.get<educationSection>(
    "https://portfolio-be-flame.vercel.app/api/v1/education/get"
  );
  const session = await auth();
  const role = session?.user.role;
  const token = session?.user.jwt_token;
  const data = res.data;
  console.log(data.educationSection.education);

  const timelineData = data.educationSection.education.map((edu) => ({
    title: edu.educationName,
    date: new Date(edu.joiningDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    }),
    description: edu.educationDescription,
  }));

  return (
    <div className="container">
      <div className="contentContainer">
        {session?.user ? (
          <EducationDrawer
            eduDrawerDataProps={{
              role: role as string,
              token: token as string,
              portfolioId: data.educationSection.portfolioId,
              educationSectionId: data.educationSection.id,
            }}
          />
        ) : (
          ""
        )}
        <h1 className="heading">Education</h1>
        <h1 className="description">
          {data.educationSection.educationHeading}
        </h1>
        <p className="content">{data.educationSection.educationDescription}</p>
        <div>
          <Timeline data={timelineData} />
        </div>
        <div>
          <h1>educationJourney.ts</h1>
          <CodeComponent code={code} />
        </div>
        <BottomNav links={links} />
      </div>
    </div>
  );
}
